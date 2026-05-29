import { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webgpuSupported, setWebgpuSupported] = useState(true);
  const animFrameRef = useRef<number>(0);

  // WebGPU particle rain
  const initWebGPU = useCallback(async () => {
    if (!('gpu' in navigator)) {
      setWebgpuSupported(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const gpu = navigator.gpu;
      if (!gpu) {
        setWebgpuSupported(false);
        return;
      }
      const adapter = await gpu.requestAdapter();
      if (!adapter) {
        setWebgpuSupported(false);
        return;
      }
      const device = await adapter.requestDevice();
      const context = canvas.getContext('webgpu');
      if (!context) {
        setWebgpuSupported(false);
        return;
      }

      const format = gpu.getPreferredCanvasFormat();
      context.configure({ device, format, alphaMode: 'premultiplied' });

      const PARTICLE_COUNT = 90;

      // Shaders
      const vertShader = `
        @vertex
        fn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {
          var pos = array<vec2f, 6>(
            vec2f(-1, 1), vec2f(-1, -1), vec2f(1, 1),
            vec2f(-1, -1), vec2f(1, -1), vec2f(1, 1)
          );
          return vec4f(pos[vi], 0, 1);
        }
      `;

      const fragShader = `
        @binding(0) @group(0) var<uniform> time: f32;
        @binding(1) @group(0) var<uniform> resolution: vec2f;
        @binding(2) @group(0) var<uniform> mouse: vec2f;

        const PI: f32 = 3.14159265;
        const PARTICLE_COUNT: i32 = ${PARTICLE_COUNT};

        fn hash12(p: vec2f) -> f32 {
          var p3 = fract(vec3f(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }

        fn getParticlePos(pId: f32, t: f32) -> vec2f {
          let seed = vec2f(pId, pId * 0.7 + 100.0);
          let rnd1 = hash12(seed);
          let rnd2 = hash12(seed + vec2f(50.0, 20.0));
          let spd = 0.5 + rnd1 * 0.5;
          let y = fract(1.0 - (t * spd + rnd2));
          let xBase = (rnd1 - 0.5) * 2.0;
          let drift = sin(t * 0.5 + pId) * 0.05;
          return vec2f(xBase + drift, y);
        }

        fn getParticleBrightness(pId: f32, uv: vec2f, pPos: vec2f, res: vec2f) -> f32 {
          let toUV = (pPos - uv) * res;
          let d = length(toUV);
          var brightness = 1.0 / (1.0 + d * d * 0.1);
          let flicker = 0.8 + 0.2 * sin(time * 3.0 + pId * 7.0);
          brightness = brightness * flicker * 0.8;
          
          // Cursor repulsion
          let mouseDist = length(pPos - mouse);
          let mouseFade = smoothstep(0.0, 0.15, mouseDist);
          brightness = brightness * mouseFade;
          
          return max(0.0, brightness);
        }

        @fragment
        fn fs_main(@builtin(position) fragCoord: vec4f) -> @location(0) vec4f {
          let uv = fragCoord.xy / resolution;
          let aspect = resolution.x / resolution.y;
          let uvAspect = vec2f(uv.x * aspect, uv.y);
          
          var col = vec3f(0.0);
          
          for (var i: i32 = 0; i < PARTICLE_COUNT; i = i + 1) {
            let pPos = getParticlePos(f32(i), time);
            let pAspect = vec2f(pPos.x * aspect, pPos.y);
            let b = getParticleBrightness(f32(i), uvAspect, pAspect, resolution * 0.5);
            let hue = fract(f32(i) * 0.1 + time * 0.1);
            let pcol = mix(vec3f(0.26, 0.49, 0.35), vec3f(0.79, 0.64, 0.15), hue);
            col = col + pcol * b * 0.15;
          }
          
          let fog = 1.0 - exp(-uv.y * 3.0);
          let bgColor = mix(vec3f(0.0), vec3f(0.02, 0.05, 0.02), fog);
          col = col + bgColor;
          
          return vec4f(col, 1.0);
        }
      `;

      const shaderModule = device.createShaderModule({
        code: vertShader + fragShader,
      });

      const pipeline = device.createRenderPipeline({
        layout: 'auto',
        vertex: { module: shaderModule, entryPoint: 'vs_main' },
        fragment: {
          module: shaderModule,
          entryPoint: 'fs_main',
          targets: [{ format }],
        },
        primitive: { topology: 'triangle-list' },
      });

      // Uniform buffers
      const timeBuffer = device.createBuffer({
        size: 4,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });
      const resolutionBuffer = device.createBuffer({
        size: 8,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });
      const mouseBuffer = device.createBuffer({
        size: 8,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });

      const bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: timeBuffer } },
          { binding: 1, resource: { buffer: resolutionBuffer } },
          { binding: 2, resource: { buffer: mouseBuffer } },
        ],
      });

      let mouseX = 2.0;
      let mouseY = 2.0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -((e.clientY / window.innerHeight) * 2 - 1);
      };
      document.addEventListener('mousemove', handleMouseMove);

      const startTime = performance.now();

      const render = () => {
        const time = (performance.now() - startTime) * 0.001;
        const dpr = Math.min(window.devicePixelRatio, 2);
        const w = canvas.clientWidth * dpr;
        const h = canvas.clientHeight * dpr;

        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }

        device.queue.writeBuffer(timeBuffer, 0, new Float32Array([time]));
        device.queue.writeBuffer(resolutionBuffer, 0, new Float32Array([canvas.width, canvas.height]));
        device.queue.writeBuffer(mouseBuffer, 0, new Float32Array([mouseX, mouseY]));

        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [
            {
              view: context.getCurrentTexture().createView(),
              loadOp: 'clear',
              storeOp: 'store',
              clearValue: { r: 0, g: 0, b: 0, a: 1 },
            },
          ],
        });
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, bindGroup);
        pass.draw(6);
        pass.end();
        device.queue.submit([encoder.finish()]);

        animFrameRef.current = requestAnimationFrame(render);
      };

      animFrameRef.current = requestAnimationFrame(render);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animFrameRef.current);
      };
    } catch {
      setWebgpuSupported(false);
    }
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    initWebGPU().then((fn) => {
      if (fn) cleanup = fn;
    });
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      if (cleanup) cleanup();
    };
  }, [initWebGPU]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* WebGPU Canvas or Fallback */}
      {webgpuSupported ? (
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center animate-pulse"
          style={{
            backgroundImage: 'url(/images/hero-fallback.jpg)',
            zIndex: 1,
          }}
        />
      )}

      {/* Content Card */}
      <div
        className="relative z-10 mx-4 sm:mx-6 text-center"
        style={{ maxWidth: '680px' }}
      >
        <div className="bg-forest/65 backdrop-blur-xl rounded-2xl p-8 sm:p-12">
          {/* Badge */}
          <span className="inline-block bg-gold text-forest text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            {t('hero.badge')}
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-leaf text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              to="/modules"
              className="inline-flex items-center justify-center bg-gold text-forest font-semibold px-8 py-3.5 rounded-lg hover:shadow-glow transition-shadow text-base"
            >
              {t('hero.cta.study')}
            </Link>
            <Link
              to="/quizzes"
              className="inline-flex items-center justify-center border-2 border-gold text-gold font-semibold px-8 py-3.5 rounded-lg hover:bg-gold/10 transition-colors text-base"
            >
              {t('hero.cta.quiz')}
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              t('hero.stats.topics'),
              t('hero.stats.questions'),
              t('hero.stats.competencies'),
            ].map((stat) => (
              <span
                key={stat}
                className="inline-block bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-white/60 animate-bounce-scroll" />
      </div>
    </section>
  );
}
