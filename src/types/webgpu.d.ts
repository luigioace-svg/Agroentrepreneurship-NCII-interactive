// WebGPU type declarations
interface Navigator {
  gpu?: GPU;
}

interface GPU {
  requestAdapter(): Promise<GPUAdapter | null>;
  getPreferredCanvasFormat(): GPUTextureFormat;
}

interface GPUAdapter {
  requestDevice(): Promise<GPUDevice>;
}

type GPUTextureFormat = string;

interface GPUDevice {
  createShaderModule(descriptor: { code: string }): GPUShaderModule;
  createRenderPipeline(descriptor: GPURenderPipelineDescriptor): GPURenderPipeline;
  createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
  createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;
  createCommandEncoder(): GPUCommandEncoder;
  queue: GPUQueue;
}

interface GPUShaderModule {}
interface GPURenderPipeline {
  getBindGroupLayout(index: number): GPUBindGroupLayout;
}
interface GPUBindGroupLayout {}

interface GPUBufferDescriptor {
  size: number;
  usage: number;
}

interface GPUBuffer {
  usage: number;
}

interface GPUBindGroupDescriptor {
  layout: GPUBindGroupLayout;
  entries: GPUBindGroupEntry[];
}

interface GPUBindGroupEntry {
  binding: number;
  resource: { buffer: GPUBuffer };
}

interface GPUBindGroup {}

interface GPUCommandEncoder {
  beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
  finish(): GPUCommandBuffer;
}

interface GPURenderPassDescriptor {
  colorAttachments: GPURenderPassColorAttachment[];
}

interface GPURenderPassColorAttachment {
  view: GPUTextureView;
  loadOp: string;
  storeOp: string;
  clearValue?: { r: number; g: number; b: number; a: number };
}

interface GPUTextureView {}

interface GPURenderPassEncoder {
  setPipeline(pipeline: GPURenderPipeline): void;
  setBindGroup(index: number, bindGroup: GPUBindGroup): void;
  draw(vertexCount: number): void;
  end(): void;
}

interface GPUCommandBuffer {}

interface GPUQueue {
  writeBuffer(buffer: GPUBuffer, offset: number, data: ArrayBufferView): void;
  submit(commandBuffers: GPUCommandBuffer[]): void;
}

interface GPUCanvasContext {
  configure(configuration: GPUCanvasConfiguration): void;
  getCurrentTexture(): GPUTexture;
}

interface GPUCanvasConfiguration {
  device: GPUDevice;
  format: GPUTextureFormat;
  alphaMode?: string;
}

interface GPUTexture {
  createView(): GPUTextureView;
}

interface HTMLCanvasElement {
  getContext(contextId: 'webgpu'): GPUCanvasContext | null;
}

declare const GPUBufferUsage: {
  UNIFORM: number;
  COPY_DST: number;
};

interface GPURenderPipelineDescriptor {
  layout: string | GPUPipelineLayout;
  vertex: GPUVertexState;
  fragment: GPUFragmentState;
  primitive?: GPUPrimitiveState;
}

interface GPUPipelineLayout {}

interface GPUVertexState {
  module: GPUShaderModule;
  entryPoint: string;
}

interface GPUFragmentState {
  module: GPUShaderModule;
  entryPoint: string;
  targets: GPUColorTargetState[];
}

interface GPUColorTargetState {
  format: GPUTextureFormat;
}

interface GPUPrimitiveState {
  topology: string;
}
