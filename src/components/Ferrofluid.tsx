import { useEffect, useRef, type CSSProperties } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import "./Ferrofluid.css";

const MAX_COLORS = 8;

type FlowDirection = "up" | "down" | "left" | "right";

type FerrofluidProps = {
  className?: string;
  dpr?: number;
  paused?: boolean;
  colors?: string[];
  backgroundColor?: string;
  speed?: number;
  scale?: number;
  turbulence?: number;
  fluidity?: number;
  rimWidth?: number;
  sharpness?: number;
  shimmer?: number;
  glow?: number;
  flowDirection?: FlowDirection;
  opacity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  mouseRadius?: number;
  mouseDampening?: number;
  mixBlendMode?: CSSProperties["mixBlendMode"];
};

const hexToRgb = (hex: string) => {
  const color = hex.replace("#", "").padEnd(6, "0");
  return [
    Number.parseInt(color.slice(0, 2), 16) / 255,
    Number.parseInt(color.slice(2, 4), 16) / 255,
    Number.parseInt(color.slice(4, 6), 16) / 255,
  ];
};

const prepareColors = (input: string[]) => {
  const base = (input.length ? input : ["#4F46E5", "#06B6D4", "#E0F2FE"]).slice(0, MAX_COLORS);
  const colors = Array.from(
    { length: MAX_COLORS },
    (_, index) => hexToRgb(base[Math.min(index, base.length - 1)]),
  );
  return { colors, count: base.length };
};

const flowVector = (direction: FlowDirection) => {
  if (direction === "up") return [0, 1];
  if (direction === "left") return [-1, 0];
  if (direction === "right") return [1, 0];
  return [0, -1];
};

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform vec3 uColor6;
uniform vec3 uColor7;
uniform int uColorCount;
uniform vec2 uFlow;
uniform float uSpeed;
uniform float uScale;
uniform float uTurbulence;
uniform float uFluidity;
uniform float uRimWidth;
uniform float uSharpness;
uniform float uShimmer;
uniform float uGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;
varying vec2 vUv;
#define PI 3.14159265

vec3 palette(float h) {
  int count = uColorCount;
  if (count < 1) count = 1;
  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));
  if (idx <= 0) return uColor0;
  if (idx == 1) return uColor1;
  if (idx == 2) return uColor2;
  if (idx == 3) return uColor3;
  if (idx == 4) return uColor4;
  if (idx == 5) return uColor5;
  if (idx == 6) return uColor6;
  return uColor7;
}

float hash(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float smin(float a, float b, float k) {
  float r = exp2(-a / k) + exp2(-b / k);
  return -k * log2(r);
}

float sinlerp(float a, float b, float w) {
  return mix(a, b, (sin(w * PI - PI / 2.0) + 1.0) / 2.0);
}

float vn(vec2 p, float s, float seed) {
  vec2 cellp = floor(p / s);
  vec2 relp = mod(p, s);
  float g1 = hash(vec3(cellp, seed));
  float g2 = hash(vec3(cellp.x + 1.0, cellp.y, seed));
  float g3 = hash(vec3(cellp.x + 1.0, cellp.y + 1.0, seed));
  float g4 = hash(vec3(cellp.x, cellp.y + 1.0, seed));
  float bx = sinlerp(g1, g2, relp.x / s);
  float tx = sinlerp(g4, g3, relp.x / s);
  return sinlerp(bx, tx, relp.y / s);
}

float dbn(vec2 p, float s, float seed) {
  float o = s / 2.0;
  float n0 = vn(p, s, seed);
  float n1 = vn(p + vec2(o, o), s, seed + 0.1);
  float n2 = vn(p + vec2(-o, o), s, seed + 0.2);
  float n3 = vn(p + vec2(o, -o), s, seed + 0.3);
  float n4 = vn(p + vec2(-o, -o), s, seed + 0.4);
  return (2.0 * n0 + 1.5 * n1 + 1.25 * n2 + 1.125 * n3 + n4) / 7.0;
}

void main() {
  vec2 fragCoord = vUv * iResolution.xy;
  float reference = 700.0 / max(uScale, 0.05);
  vec2 p = fragCoord / iResolution.y * reference;
  float motionSpeed = 200.0 * uSpeed;
  vec2 direction = uFlow;
  vec2 perpendicular = vec2(-direction.y, direction.x);

  float distort1 = vn(p + perpendicular * (iTime * motionSpeed), 60.0, 10.0) * 50.0 * uTurbulence;
  float distort2 = vn(p - perpendicular * (iTime * motionSpeed), 120.0, 15.0) * 100.0 * uTurbulence;
  float peaks = dbn(p + distort1 + direction * (iTime * motionSpeed * 0.5), 40.0, 1.0);
  float peaks2 = dbn(p + distort2 - direction * (iTime * motionSpeed * 0.5), 40.0, 0.0);
  float merged = smin(peaks, peaks2, max(uFluidity, 0.001));

  float mouseGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 mousePoint = iMouse / iResolution.y * reference;
    float distanceToMouse = length(p - mousePoint) / reference;
    float radius = max(uMouseRadius, 0.02);
    mouseGlow = exp(-distanceToMouse * distanceToMouse / (radius * radius)) * uMouseStrength;
  }

  float band = (uRimWidth - abs((merged - 0.4) * 2.0)) * 5.0;
  float light = clamp(
    band - vn(p + direction * (iTime * motionSpeed * 0.5), 60.0, 12.0) * uShimmer,
    0.0,
    1.0
  );
  light = pow(light, uSharpness) * uGlow;
  light *= clamp(1.0 - mouseGlow, 0.0, 1.0);

  float heightMix = clamp(0.5 + (peaks - peaks2) * 0.8, 0.0, 1.0);
  vec3 outputColor = palette(heightMix) * light;
  float alpha = clamp(max(outputColor.r, max(outputColor.g, outputColor.b)), 0.0, 1.0);
  gl_FragColor = vec4(outputColor, alpha * uOpacity);
}
`;

export default function Ferrofluid({
  className = "",
  dpr,
  paused = false,
  colors = ["#f5fbff", "#55d9ff", "#9cf5ea"],
  backgroundColor = "#030508",
  speed = 0.42,
  scale = 1.45,
  turbulence = 1,
  fluidity = 0.12,
  rimWidth = 0.21,
  sharpness = 2.8,
  shimmer = 1.15,
  glow = 1.9,
  flowDirection = "down",
  opacity = 0.92,
  mouseInteraction = true,
  mouseStrength = 1.1,
  mouseRadius = 0.3,
  mouseDampening = 0.15,
  mixBlendMode,
}: FerrofluidProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new Renderer({
      dpr: Math.min(dpr ?? window.devicePixelRatio ?? 1, 1.75),
      alpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    const canvas = gl.canvas;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(canvas);

    const { colors: preparedColors, count } = prepareColors(colors);
    const uniforms = {
      iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
      iMouse: { value: [gl.drawingBufferWidth * 0.72, gl.drawingBufferHeight * 0.48] },
      iTime: { value: 0 },
      uColor0: { value: preparedColors[0] },
      uColor1: { value: preparedColors[1] },
      uColor2: { value: preparedColors[2] },
      uColor3: { value: preparedColors[3] },
      uColor4: { value: preparedColors[4] },
      uColor5: { value: preparedColors[5] },
      uColor6: { value: preparedColors[6] },
      uColor7: { value: preparedColors[7] },
      uColorCount: { value: count },
      uFlow: { value: flowVector(flowDirection) },
      uSpeed: { value: reducedMotion ? speed * 0.12 : speed },
      uScale: { value: scale },
      uTurbulence: { value: turbulence },
      uFluidity: { value: fluidity },
      uRimWidth: { value: rimWidth },
      uSharpness: { value: sharpness },
      uShimmer: { value: shimmer },
      uGlow: { value: glow },
      uOpacity: { value: opacity },
      uMouseEnabled: { value: mouseInteraction && !reducedMotion ? 1 : 0 },
      uMouseStrength: { value: mouseStrength },
      uMouseRadius: { value: mouseRadius },
    };
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms,
      transparent: true,
    });
    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });
    const mouseTarget = [uniforms.iMouse.value[0], uniforms.iMouse.value[1]];
    let lastTime = 0;
    let lastRenderTime = 0;
    let animationFrame = 0;
    const frameInterval = reducedMotion ? 1000 / 12 : 1000 / 30;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];
    };
    const resizeObserver = new ResizeObserver(resize);
    resize();
    resizeObserver.observe(container);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const resolutionScale = renderer.dpr || 1;
      mouseTarget[0] = (event.clientX - rect.left) * resolutionScale;
      mouseTarget[1] = (rect.height - (event.clientY - rect.top)) * resolutionScale;
    };
    if (mouseInteraction) window.addEventListener("pointermove", handlePointerMove);

    const render = (time: number) => {
      animationFrame = window.requestAnimationFrame(render);
      if (document.hidden || paused || time - lastRenderTime < frameInterval) return;

      const delta = lastTime ? (time - lastTime) / 1000 : 0;
      lastTime = time;
      lastRenderTime = time;
      uniforms.iTime.value = time * 0.001;
      const factor = mouseDampening <= 0
        ? 1
        : Math.min(1, 1 - Math.exp(-delta / Math.max(mouseDampening, 0.0001)));
      uniforms.iMouse.value[0] += (mouseTarget[0] - uniforms.iMouse.value[0]) * factor;
      uniforms.iMouse.value[1] += (mouseTarget[1] - uniforms.iMouse.value[1]) * factor;
      renderer.render({ scene: mesh });
    };
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      mesh.setParent(null);
      program.remove();
      geometry.remove();
      if (canvas.parentElement === container) container.removeChild(canvas);
    };
  }, [
    colors,
    dpr,
    flowDirection,
    fluidity,
    glow,
    mouseDampening,
    mouseInteraction,
    mouseRadius,
    mouseStrength,
    opacity,
    paused,
    rimWidth,
    scale,
    sharpness,
    shimmer,
    speed,
    turbulence,
  ]);

  return (
    <>
      <div
        ref={containerRef}
        className={`ferrofluid-container ${className}`.trim()}
        style={{
          "--ferrofluid-background": backgroundColor,
          mixBlendMode,
        } as CSSProperties}
        aria-hidden="true"
      />
      <div className="ferrofluid-atmosphere" aria-hidden="true" />
    </>
  );
}
