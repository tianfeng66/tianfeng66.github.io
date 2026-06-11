import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";

type GalaxyProps = {
  className?: string;
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  speed?: number;
  glowIntensity?: number;
  saturation?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  transparent?: boolean;
};

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform bool uTransparent;
varying vec2 vUv;

#define NUM_LAYER 4.0
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 0.66667, 0.33333, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float starShape(vec2 uv, float flare) {
  float d = max(length(uv), 0.001);
  float glow = (0.045 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 920.0));
  glow += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 920.0));
  glow += rays * 0.25 * flare * uGlowIntensity;
  return glow * smoothstep(1.0, 0.18, d);
}

vec3 starLayer(vec2 uv) {
  vec3 col = vec3(0.0);
  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 cell = id + offset;
      float seed = hash21(cell);
      float size = fract(seed * 345.32);
      float flare = smoothstep(0.92, 1.0, size) * tri(uStarSpeed / (3.0 * seed + 1.0));
      vec3 base = vec3(
        smoothstep(0.2, 1.0, hash21(cell + 1.0)) + 0.2,
        seed * 0.65,
        smoothstep(0.2, 1.0, hash21(cell + 3.0)) + 0.2
      );
      float hue = fract(atan(base.g - base.r, base.b - base.r) / 6.28318 + 0.5 + uHueShift / 360.0);
      float luminance = dot(base, vec3(0.299, 0.587, 0.114));
      float sat = length(base - vec3(luminance)) * uSaturation;
      base = hsv2rgb(vec3(hue, sat, max(max(base.r, base.g), base.b)));

      vec2 drift = vec2(
        tri(seed * 34.0 + uTime * uSpeed * 0.1),
        tri(seed * 38.0 + uTime * uSpeed * 0.033)
      ) - 0.5;
      float twinkle = mix(1.0, 0.7 + tri(uTime * uSpeed + seed * 6.2831) * 0.6, uTwinkleIntensity);
      col += starShape(gv - offset - drift, flare) * size * base * twinkle;
    }
  }
  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;
  float angle = uTime * uRotationSpeed;
  uv = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * uv;
  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);
  for (float i = 0.0; i < 1.0; i += 0.25) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.55 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.88, depth);
    col += starLayer(uv * scale + i * 453.32) * fade;
  }

  float centerClear = smoothstep(0.13, 0.48, length(uv * vec2(0.72, 1.0)));
  col *= mix(0.26, 1.0, centerClear);
  float alpha = uTransparent ? smoothstep(0.0, 0.34, length(col)) : 1.0;
  gl_FragColor = vec4(col, alpha);
}
`;

export default function Galaxy({
  className = "",
  focal = [0.5, 0.48],
  rotation = [1, 0],
  starSpeed = 0.32,
  density = 0.78,
  hueShift = 210,
  speed = 0.45,
  glowIntensity = 0.22,
  saturation = 0.72,
  twinkleIntensity = 0.45,
  rotationSpeed = 0.018,
  transparent = true,
}: GalaxyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new Renderer({
      alpha: transparent,
      premultipliedAlpha: false,
      dpr: Math.min(window.devicePixelRatio, 0.9),
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      transparent,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Color(1, 1, 1) },
        uFocal: { value: new Float32Array(focal) },
        uRotation: { value: new Float32Array(rotation) },
        uStarSpeed: { value: starSpeed },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uSpeed: { value: reducedMotion ? 0 : speed },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uTwinkleIntensity: { value: reducedMotion ? 0 : twinkleIntensity },
        uRotationSpeed: { value: reducedMotion ? 0 : rotationSpeed },
        uTransparent: { value: transparent },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });
    container.appendChild(gl.canvas);

    const resize = () => {
      const width = Math.max(1, container.offsetWidth);
      const height = Math.max(1, container.offsetHeight);
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = new Color(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height,
      );
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    let raf = 0;
    let inView = true;
    let lastRender = 0;
    const frameInterval = reducedMotion ? 1000 / 10 : 1000 / 30;
    const update = (time: number) => {
      raf = requestAnimationFrame(update);
      if (!inView || document.hidden || time - lastRender < frameInterval) return;
      lastRender = time;
      program.uniforms.uTime.value = time * 0.001;
      program.uniforms.uStarSpeed.value = reducedMotion ? 0.12 : (time * 0.001 * starSpeed) / 10;
      renderer.render({ scene: mesh });
    };
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { inView = entry.isIntersecting; },
      { rootMargin: "120px" },
    );
    visibilityObserver.observe(container);
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      visibilityObserver.disconnect();
      gl.canvas.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    density,
    focal,
    glowIntensity,
    hueShift,
    rotation,
    rotationSpeed,
    saturation,
    speed,
    starSpeed,
    transparent,
    twinkleIntensity,
  ]);

  return <div ref={containerRef} className={`galaxy-container ${className}`} aria-hidden="true" />;
}
