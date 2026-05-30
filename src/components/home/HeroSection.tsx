import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

      {/* Static gradient background — zero JS, zero lag */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #0d2b1a 0%, #1a3d28 40%, #0f2318 70%, #1c2a10 100%)',
          zIndex: 0,
        }}
      />

      {/* Subtle radial glow — pure CSS, no animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(74,124,89,0.18) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Decorative grid lines — lightweight SVG pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,160,23,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,160,23,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 2,
        }}
      />

      {/* Floating orbs — CSS animation only, GPU-composited via transform */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,124,89,0.15) 0%, transparent 70%)',
          top: '10%',
          left: '-5%',
          animation: 'floatOrb1 12s ease-in-out infinite',
          zIndex: 2,
          willChange: 'transform',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 70%)',
          bottom: '15%',
          right: '-3%',
          animation: 'floatOrb2 16s ease-in-out infinite',
          zIndex: 2,
          willChange: 'transform',
        }}
      />

      {/* Floating leaf emojis — CSS only */}
      {[
        { emoji: '🌾', top: '12%', left: '8%', delay: '0s', size: '1.8rem' },
        { emoji: '🌿', top: '20%', right: '10%', delay: '2s', size: '1.5rem' },
        { emoji: '🌱', bottom: '25%', left: '6%', delay: '4s', size: '1.4rem' },
        { emoji: '🍃', top: '60%', right: '8%', delay: '1s', size: '1.3rem' },
        { emoji: '🌾', bottom: '10%', left: '20%', delay: '3s', size: '1.2rem' },
      ].map((item, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            fontSize: item.size,
            top: item.top,
            left: (item as any).left,
            right: (item as any).right,
            bottom: (item as any).bottom,
            opacity: 0.25,
            animation: `floatLeaf 8s ease-in-out infinite`,
            animationDelay: item.delay,
            zIndex: 3,
            willChange: 'transform',
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* CSS keyframes injected inline */}
      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 30px); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, -20px); }
        }
        @keyframes floatLeaf {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
        @keyframes bounceScroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      {/* Content Card */}
      <div
        className="relative mx-4 sm:mx-6 text-center"
        style={{ maxWidth: '680px', zIndex: 10 }}
      >
        <div className="bg-forest/65 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
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
              className="inline-flex items-center justify-center bg-gold text-forest font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-base"
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
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10, animation: 'bounceScroll 2s ease-in-out infinite' }}
      >
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
