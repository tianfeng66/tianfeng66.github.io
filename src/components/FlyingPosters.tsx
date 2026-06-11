import { useEffect, useRef, type HTMLAttributes } from "react";
import {
  Camera,
  Mesh,
  Plane,
  Program,
  Renderer,
  Texture,
  Transform,
} from "ogl";
import "./FlyingPosters.css";

const vertexShader = `
precision highp float;
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uPosition;
uniform float uTime;
uniform float uSpeed;
uniform float uDistortion;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 newpos = position;
  float wave = sin((uv.y + uPosition * 0.035) * 6.2831853);
  float velocity = clamp(abs(uSpeed) * 0.16, 0.0, 1.0);
  newpos.z += wave * 0.16 * uDistortion;
  newpos.x += wave * 0.035 * uDistortion * velocity;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform sampler2D tMap;
varying vec2 vUv;
void main() {
  gl_FragColor = texture2D(tMap, vUv);
}
`;

const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;
const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => (
  (value - inMin) / (inMax - inMin) * (outMax - outMin) + outMin
);

type Size = { width: number; height: number };
type ScrollState = { ease: number; current: number; target: number; last: number; position: number };

class PosterMedia {
  gl: Renderer["gl"];
  geometry: Plane;
  scene: Transform;
  screen: Size;
  viewport: Size;
  image: string;
  length: number;
  index: number;
  planeWidth: number;
  planeHeight: number;
  distortion: number;
  texture: Texture;
  program: Program;
  plane: Mesh;
  extra = 0;
  height = 0;
  heightTotal = 0;
  y = 0;
  padding = 4.2;
  disposed = false;
  imageAspect = 1;
  onImageReady: () => void;

  constructor(options: {
    gl: Renderer["gl"];
    geometry: Plane;
    scene: Transform;
    screen: Size;
    viewport: Size;
    image: string;
    length: number;
    index: number;
    planeWidth: number;
    planeHeight: number;
    distortion: number;
    onImageReady: () => void;
  }) {
    Object.assign(this, options);
    this.gl = options.gl;
    this.geometry = options.geometry;
    this.scene = options.scene;
    this.screen = options.screen;
    this.viewport = options.viewport;
    this.image = options.image;
    this.length = options.length;
    this.index = options.index;
    this.planeWidth = options.planeWidth;
    this.planeHeight = options.planeHeight;
    this.distortion = options.distortion;
    this.onImageReady = options.onImageReady;

    this.texture = new Texture(this.gl, { generateMipmaps: false });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        tMap: { value: this.texture },
        uPosition: { value: 0 },
        uSpeed: { value: 0 },
        uDistortion: { value: this.distortion },
        uViewportSize: { value: [this.viewport.width, this.viewport.height] },
        uTime: { value: 0 },
      },
      cullFace: false,
    });
    this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program });
    this.plane.setParent(this.scene);
    this.loadImage();
    this.onResize();
  }

  loadImage() {
    const image = new Image();
    image.src = this.image;
    image.onload = () => {
      if (this.disposed) return;
      this.texture.image = image;
      this.imageAspect = image.naturalWidth / image.naturalHeight;
      this.setScale();
      this.onImageReady();
    };
  }

  setScale() {
    const frameAspect = this.planeWidth / this.planeHeight;
    const displayWidth = this.imageAspect >= frameAspect
      ? this.planeWidth
      : this.planeHeight * this.imageAspect;
    const displayHeight = this.imageAspect >= frameAspect
      ? this.planeWidth / this.imageAspect
      : this.planeHeight;

    this.plane.scale.x = this.viewport.width * displayWidth / this.screen.width;
    this.plane.scale.y = this.viewport.height * displayHeight / this.screen.height;
    this.plane.position.x = 0;
  }

  onResize(screen = this.screen, viewport = this.viewport) {
    this.screen = screen;
    this.viewport = viewport;
    this.program.uniforms.uViewportSize.value = [viewport.width, viewport.height];
    this.setScale();
    this.height = this.plane.scale.y + this.padding;
  }

  update(scroll: ScrollState) {
    this.plane.position.y = this.y - scroll.current - this.extra;
    const position = mapRange(this.plane.position.y, -this.viewport.height, this.viewport.height, 5, 15);
    this.program.uniforms.uPosition.value = position;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = scroll.current - scroll.last;

    const topEdge = this.plane.position.y + this.plane.scale.y / 2;
    const bottomEdge = this.plane.position.y - this.plane.scale.y / 2;
    if (topEdge < -this.viewport.height / 2) this.extra -= this.heightTotal;
    else if (bottomEdge > this.viewport.height / 2) this.extra += this.heightTotal;
  }

  destroy() {
    this.disposed = true;
    this.plane.setParent(null);
    this.program.remove();
    if (this.texture.texture) this.gl.deleteTexture(this.texture.texture);
  }
}

class PosterCanvas {
  container: HTMLDivElement;
  canvas: HTMLCanvasElement;
  items: string[];
  planeWidth: number;
  planeHeight: number;
  distortion: number;
  cameraFov: number;
  cameraZ: number;
  autoScrollSpeed: number;
  renderer: Renderer;
  gl: Renderer["gl"];
  camera: Camera;
  scene: Transform;
  geometry: Plane;
  medias: PosterMedia[] = [];
  screen: Size = { width: 1, height: 1 };
  viewport: Size = { width: 1, height: 1 };
  scroll: ScrollState;
  isDown = false;
  start = 0;
  frame = 0;
  previousTime = performance.now();
  isHovered = false;
  isVisible = true;
  resizeObserver: ResizeObserver;
  visibilityObserver: IntersectionObserver;
  reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  constructor(options: {
    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    items: string[];
    planeWidth: number;
    planeHeight: number;
    distortion: number;
    scrollEase: number;
    cameraFov: number;
    cameraZ: number;
    autoScrollSpeed: number;
  }) {
    this.container = options.container;
    this.canvas = options.canvas;
    this.items = options.items;
    this.planeWidth = options.planeWidth;
    this.planeHeight = options.planeHeight;
    this.distortion = options.distortion;
    this.cameraFov = options.cameraFov;
    this.cameraZ = options.cameraZ;
    this.autoScrollSpeed = options.autoScrollSpeed;
    this.scroll = { ease: options.scrollEase, current: 0, target: 0, last: 0, position: 0 };

    this.renderer = new Renderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 1),
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.camera = new Camera(this.gl, { fov: this.cameraFov });
    this.camera.position.z = this.cameraZ;
    this.scene = new Transform();
    this.geometry = new Plane(this.gl, { heightSegments: 1, widthSegments: 100 });
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.visibilityObserver = new IntersectionObserver(
      ([entry]) => { this.isVisible = entry.isIntersecting; },
      { rootMargin: "160px" },
    );

    this.onResize();
    this.createMedias();
    this.addEventListeners();
    this.resizeObserver.observe(this.container);
    this.visibilityObserver.observe(this.container);
    this.update();
  }

  createMedias() {
    this.medias = this.items.map((image, index) => new PosterMedia({
      gl: this.gl,
      geometry: this.geometry,
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
      image,
      length: this.items.length,
      index,
      planeWidth: this.planeWidth,
      planeHeight: this.planeHeight,
      distortion: this.distortion,
      onImageReady: this.layoutMedias,
    }));
    this.layoutMedias();
  }

  layoutMedias = () => {
    if (!this.medias.length) return;
    const totalHeight = this.medias.reduce((total, media) => total + media.height, 0);
    let cursor = -totalHeight / 2;

    this.medias.forEach((media) => {
      media.heightTotal = totalHeight;
      media.y = cursor + media.height / 2;
      cursor += media.height;
    });
  }

  onResize = () => {
    const rect = this.container.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    this.screen = { width: rect.width, height: rect.height };
    this.renderer.setSize(rect.width, rect.height);
    this.camera.perspective({ aspect: this.gl.canvas.width / this.gl.canvas.height });
    const fov = this.camera.fov * Math.PI / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    this.viewport = { height, width: height * this.camera.aspect };
    this.medias.forEach((media) => media.onResize(this.screen, this.viewport));
    this.layoutMedias();
  };

  onPointerDown = (event: PointerEvent) => {
    if (event.pointerType === "touch") return;
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = event.clientY;
    this.container.setPointerCapture(event.pointerId);
  };

  onPointerMove = (event: PointerEvent) => {
    if (!this.isDown) return;
    this.scroll.target = this.scroll.position + (this.start - event.clientY) * 0.035;
  };

  onPointerUp = (event: PointerEvent) => {
    this.isDown = false;
    if (this.container.hasPointerCapture(event.pointerId)) this.container.releasePointerCapture(event.pointerId);
  };

  onPointerEnter = () => {
    this.isHovered = true;
  };

  onPointerLeave = () => {
    this.isHovered = false;
  };

  update = (time = performance.now()) => {
    this.frame = window.requestAnimationFrame(this.update);
    const delta = Math.min((time - this.previousTime) / 1000, 0.05);
    this.previousTime = time;
    if (!this.isVisible || document.hidden) return;

    if (!this.reducedMotion && !this.isDown && this.autoScrollSpeed > 0) {
      const hoverFactor = this.isHovered ? 0.22 : 1;
      // A decreasing scroll target moves the poster stack downward.
      this.scroll.target -= this.autoScrollSpeed * hoverFactor * delta;
    }

    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.reducedMotion ? 0.08 : this.scroll.ease);
    this.medias.forEach((media) => media.update(this.scroll));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
  };

  addEventListeners() {
    this.container.addEventListener("pointerdown", this.onPointerDown);
    this.container.addEventListener("pointermove", this.onPointerMove);
    this.container.addEventListener("pointerup", this.onPointerUp);
    this.container.addEventListener("pointercancel", this.onPointerUp);
    this.container.addEventListener("pointerenter", this.onPointerEnter);
    this.container.addEventListener("pointerleave", this.onPointerLeave);
  }

  destroy() {
    window.cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.visibilityObserver.disconnect();
    this.container.removeEventListener("pointerdown", this.onPointerDown);
    this.container.removeEventListener("pointermove", this.onPointerMove);
    this.container.removeEventListener("pointerup", this.onPointerUp);
    this.container.removeEventListener("pointercancel", this.onPointerUp);
    this.container.removeEventListener("pointerenter", this.onPointerEnter);
    this.container.removeEventListener("pointerleave", this.onPointerLeave);
    this.medias.forEach((media) => media.destroy());
    this.geometry.remove();
  }
}

export type FlyingPostersProps = HTMLAttributes<HTMLDivElement> & {
  items?: string[];
  planeWidth?: number;
  planeHeight?: number;
  distortion?: number;
  scrollEase?: number;
  cameraFov?: number;
  cameraZ?: number;
  autoScrollSpeed?: number;
};

export default function FlyingPosters({
  items = [],
  planeWidth = 320,
  planeHeight = 320,
  distortion = 3,
  scrollEase = 0.01,
  cameraFov = 45,
  cameraZ = 20,
  autoScrollSpeed = 0,
  className = "",
  ...props
}: FlyingPostersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !items.length) return;
    const instance = new PosterCanvas({
      container: containerRef.current,
      canvas: canvasRef.current,
      items,
      planeWidth,
      planeHeight,
      distortion,
      scrollEase,
      cameraFov,
      cameraZ,
      autoScrollSpeed,
    });
    return () => instance.destroy();
  }, [items, planeWidth, planeHeight, distortion, scrollEase, cameraFov, cameraZ, autoScrollSpeed]);

  return (
    <div ref={containerRef} className={`posters-container ${className}`.trim()} {...props}>
      <canvas ref={canvasRef} className="posters-canvas" />
    </div>
  );
}
