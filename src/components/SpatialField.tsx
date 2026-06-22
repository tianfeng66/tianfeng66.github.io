import { useEffect, useRef } from "react";

type SpatialFieldProps = {
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  z: number;
  phase: number;
  size: number;
  tone: number;
};

function createParticles(count: number) {
  return Array.from({ length: count }, (_, index): Particle => {
    const t = (index / count) * Math.PI * 2 + Math.random() * 0.08;
    const ribbon = Math.random() * 2 - 1;
    const layer = index % 3;
    const radius = 2.25 + layer * 0.42 + Math.sin(t * 3) * 0.36;
    const spread = ribbon * (0.24 + layer * 0.08);

    return {
      x: Math.cos(t) * radius + spread * Math.cos(t + Math.PI / 2),
      y: Math.sin(t) * (1.28 + layer * 0.18) + Math.sin(t * 2) * 0.46 + spread * 0.62,
      z: Math.sin(t * 3 + layer) * 0.46 + ribbon * 0.92 - layer * 0.18,
      phase: t + layer * 2.1 + Math.random() * 0.8,
      size: 0.65 + Math.random() * 1.8,
      tone: Math.random(),
    };
  });
}

function createDust(count: number) {
  return Array.from({ length: count }, (): Particle => ({
    x: (Math.random() - 0.5) * 14,
    y: (Math.random() - 0.5) * 8,
    z: Math.random() * 7 - 4,
    phase: Math.random() * Math.PI * 2,
    size: 0.4 + Math.random() * 0.9,
    tone: Math.random(),
  }));
}

export default function SpatialField({ className = "" }: SpatialFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.matchMedia("(max-width: 720px)").matches;
    const particles = createParticles(compact ? 520 : 1200);
    const dust = createDust(compact ? 70 : 180);
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let scroll = 0;
    let scrollTarget = 0;
    let frame = 0;
    let lastFrame = 0;
    let visible = !document.hidden;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, compact ? 1 : 1.25);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.targetX = (event.clientX / Math.max(width, 1) - 0.5) * 2;
      pointer.targetY = (0.5 - event.clientY / Math.max(height, 1)) * 2;
    };

    const handleScroll = () => {
      scrollTarget = Math.min(window.scrollY / Math.max(height, 1), 8);
    };

    const handleVisibility = () => {
      visible = !document.hidden;
    };

    const project = (particle: Particle, time: number, sculpture: boolean) => {
      const pulse = sculpture ? Math.sin(time * 0.42 + particle.phase + particle.y) * 0.1 : 0;
      const drift = sculpture ? Math.cos(time * 0.31 + particle.phase + particle.x) * 0.07 : 0;
      let x = particle.x + pulse;
      let y = particle.y + drift;
      let z = particle.z + (sculpture ? Math.sin(time * 0.25 + particle.phase) * 0.12 : 0);

      const angleY = -0.24 + pointer.x * 0.18 + time * 0.035;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const rotatedX = x * cosY - z * sinY;
      z = x * sinY + z * cosY;
      x = rotatedX;

      const angleX = -0.18 - pointer.y * 0.09 + Math.sin(time * 0.24) * 0.025;
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const rotatedY = y * cosX - z * sinX;
      z = y * sinX + z * cosX;
      y = rotatedY;

      const depth = 7.4 + z;
      const perspective = Math.max(0.34, 6.2 / depth);
      const scale = compact ? Math.min(width, height) * 0.12 : Math.min(width, height) * 0.155;
      const originX = compact ? width * 0.54 : width * 0.71;
      const originY = height * (compact ? 0.48 : 0.46) - scroll * 4;

      return {
        x: originX + (x + pointer.x * 0.35) * scale * perspective,
        y: originY + (y - pointer.y * 0.2) * scale * perspective,
        depth,
        perspective,
      };
    };

    const drawParticle = (particle: Particle, time: number, sculpture: boolean) => {
      const point = project(particle, time, sculpture);
      if (point.depth < 2 || point.x < -20 || point.x > width + 20 || point.y < -20 || point.y > height + 20) return;
      const shimmer = sculpture ? 0.72 + Math.sin(time * 0.6 + particle.phase) * 0.2 : 0.34;
      const radius = Math.max(0.45, particle.size * point.perspective * (compact ? 0.72 : 0.9));
      const cyan = Math.round(184 + particle.tone * 44);
      context.fillStyle = sculpture
        ? `rgba(${cyan - 42},${cyan + 18},${Math.min(255, cyan + 27)},${shimmer})`
        : `rgba(105,205,220,${shimmer})`;
      context.beginPath();
      context.arc(point.x, point.y, radius, 0, Math.PI * 2);
      context.fill();

      if (sculpture && particle.size > 1.9) {
        context.fillStyle = `rgba(86,211,229,${shimmer * 0.1})`;
        context.beginPath();
        context.arc(point.x, point.y, radius * 4.2, 0, Math.PI * 2);
        context.fill();
      }
    };

    const render = (timestamp = 0) => {
      frame = window.requestAnimationFrame(render);
      if (!visible) return;
      const frameInterval = compact ? 1000 / 30 : 1000 / 40;
      if (!reducedMotion && timestamp - lastFrame < frameInterval) return;
      lastFrame = timestamp;
      const time = reducedMotion ? 0 : timestamp / 1000;
      pointer.x += (pointer.targetX - pointer.x) * (reducedMotion ? 1 : 0.045);
      pointer.y += (pointer.targetY - pointer.y) * (reducedMotion ? 1 : 0.045);
      scroll += (scrollTarget - scroll) * 0.035;

      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "screen";
      dust.forEach((particle) => drawParticle(particle, time * 0.3, false));
      particles.forEach((particle) => drawParticle(particle, time, true));
      context.restore();

      if (reducedMotion) window.cancelAnimationFrame(frame);
    };

    resize();
    handleScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className={`spatial-field ${className}`.trim()} ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="spatial-field__wash" />
      <div className="spatial-field__grid" />
    </div>
  );
}
