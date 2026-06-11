import { useEffect, useRef, useState, type PointerEvent } from "react";

const VIEWBOX_WIDTH = 1797;
const VIEWBOX_HEIGHT = 996;
const PARTICLE_COUNT = 30;

type Particle = {
  progress: number;
  speed: number;
  size: number;
  alpha: number;
  drift: number;
  phase: number;
};

type Point = { x: number; y: number };

type ColorBurst = {
  id: number;
  x: number;
  y: number;
  hue: number;
};

const cubicPoint = (
  start: Point,
  controlA: Point,
  controlB: Point,
  end: Point,
  amount: number,
) => {
  const inverse = 1 - amount;
  return {
    x: inverse ** 3 * start.x
      + 3 * inverse ** 2 * amount * controlA.x
      + 3 * inverse * amount ** 2 * controlB.x
      + amount ** 3 * end.x,
    y: inverse ** 3 * start.y
      + 3 * inverse ** 2 * amount * controlA.y
      + 3 * inverse * amount ** 2 * controlB.y
      + amount ** 3 * end.y,
  };
};

const riverPoint = (progress: number) => {
  if (progress < 0.48) {
    return cubicPoint(
      { x: 1465, y: -30 },
      { x: 1420, y: 160 },
      { x: 1190, y: 185 },
      { x: 1055, y: 405 },
      progress / 0.48,
    );
  }

  return cubicPoint(
    { x: 1055, y: 405 },
    { x: 950, y: 570 },
    { x: 680, y: 590 },
    { x: 695, y: 1040 },
    (progress - 0.48) / 0.52,
  );
};

const createParticles = (): Particle[] => Array.from(
  { length: PARTICLE_COUNT },
  (_, index) => ({
    progress: index / PARTICLE_COUNT + Math.random() * 0.04,
    speed: 0.025 + Math.random() * 0.032,
    size: 1.2 + Math.random() * 2.8,
    alpha: 0.25 + Math.random() * 0.58,
    drift: 8 + Math.random() * 31,
    phase: Math.random() * Math.PI * 2,
  }),
);

export default function FlowingRiverImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speedRef = useRef(1);
  const burstIdRef = useRef(0);
  const [palette, setPalette] = useState(0);
  const [pulse, setPulse] = useState(0);
  const [bursts, setBursts] = useState<ColorBurst[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles = createParticles();
    let frame = 0;
    let previousTime = performance.now();
    let inView = true;
    let lastRender = 0;
    const frameInterval = reducedMotion ? 1000 / 8 : 1000 / 30;

    const draw = (time: number) => {
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
      if (!inView || document.hidden || time - lastRender < frameInterval) {
        previousTime = time;
        return;
      }
      lastRender = time;
      const delta = Math.min((time - previousTime) / 1000, 0.04);
      previousTime = time;
      context.clearRect(0, 0, VIEWBOX_WIDTH, VIEWBOX_HEIGHT);

      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.progress = (particle.progress + particle.speed * delta * speedRef.current) % 1;
        }

        const point = riverPoint(particle.progress);
        const next = riverPoint(Math.min(particle.progress + 0.008, 1));
        const directionX = next.x - point.x;
        const directionY = next.y - point.y;
        const directionLength = Math.hypot(directionX, directionY) || 1;
        const normalX = -directionY / directionLength;
        const normalY = directionX / directionLength;
        const drift = Math.sin(time * 0.0011 + particle.phase + particle.progress * 9)
          * particle.drift;
        const x = point.x + normalX * drift;
        const y = point.y + normalY * drift;
        const trail = 10 + particle.size * 5;

        const gradient = context.createLinearGradient(
          x - directionX / directionLength * trail,
          y - directionY / directionLength * trail,
          x,
          y,
        );
        gradient.addColorStop(0, "rgba(62, 193, 255, 0)");
        gradient.addColorStop(1, `rgba(189, 244, 255, ${particle.alpha})`);
        context.strokeStyle = gradient;
        context.lineWidth = particle.size * 0.7;
        context.beginPath();
        context.moveTo(
          x - directionX / directionLength * trail,
          y - directionY / directionLength * trail,
        );
        context.lineTo(x, y);
        context.stroke();

        context.fillStyle = `rgba(218, 251, 255, ${particle.alpha})`;
        context.shadowColor = "rgba(54, 199, 255, .85)";
        context.shadowBlur = particle.size * 5;
        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      context.shadowBlur = 0;
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => { inView = entry.isIntersecting; },
      { rootMargin: "160px" },
    );
    visibilityObserver.observe(canvas);
    draw(previousTime);
    return () => {
      visibilityObserver.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const handlePointerEnter = () => {
    speedRef.current = 1.65;
  };

  const handlePointerLeave = () => {
    speedRef.current = 1;
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const id = burstIdRef.current++;
    const burst = {
      id,
      x: (event.clientX - rect.left) / rect.width * 100,
      y: (event.clientY - rect.top) / rect.height * 100,
      hue: (id * 91 + 185) % 360,
    };

    setPalette((current) => (current + 1) % 5);
    setPulse((current) => current + 1);
    setBursts((current) => [...current.slice(-4), burst]);
    window.setTimeout(() => {
      setBursts((current) => current.filter((item) => item.id !== id));
    }, 1650);
  };

  return (
    <button
      type="button"
      className={`flowing-river-image river-palette-${palette}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      aria-label="互动水流，悬停加速，点击切换水流色彩"
    >
      <img
        className="flowing-river-base"
        src="/media/river-hero.webp"
        alt=""
        draggable="false"
      />

      <svg
        className="flowing-river-overlay"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="river-water-clip">
            <path d="M1370 -70 C1390 90 1280 155 1165 250 C1055 340 990 425 855 505 C740 575 630 670 625 790 C620 900 675 965 610 1065 L820 1065 C825 950 770 875 792 785 C815 690 930 635 1035 555 C1155 463 1208 360 1315 290 C1420 220 1535 145 1575 -35 Z" />
          </clipPath>
          <filter id="river-feather" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
          <filter id="river-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="river-stream-gradient" x1="1" y1="0" x2="0.25" y2="1">
            <stop offset="0" stopColor="var(--river-light)" stopOpacity=".08" />
            <stop offset=".43" stopColor="var(--river-color)" stopOpacity=".72" />
            <stop offset=".76" stopColor="var(--river-deep)" stopOpacity=".38" />
            <stop offset="1" stopColor="var(--river-light)" stopOpacity=".08" />
          </linearGradient>
          <radialGradient id="river-pulse-gradient">
            <stop offset="0" stopColor="var(--river-light)" stopOpacity=".75" />
            <stop offset=".38" stopColor="var(--river-color)" stopOpacity=".24" />
            <stop offset="1" stopColor="var(--river-color)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g clipPath="url(#river-water-clip)">
          <path
            className="river-soft-bed"
            d="M1465 -30 C1420 160 1190 185 1055 405 C950 570 680 590 695 1040"
          />
          <g className="river-moving-texture" filter="url(#river-soft-glow)">
            <path
              className="river-stream river-stream-primary"
              d="M1465 -30 C1420 160 1190 185 1055 405 C950 570 680 590 695 1040"
            />
            <path
              className="river-stream river-stream-secondary"
              d="M1520 -20 C1415 205 1225 235 1110 425 C995 615 745 625 735 1040"
            />
            <path
              className="river-stream river-stream-fine"
              d="M1395 -35 C1370 135 1160 210 1010 440 C900 608 655 675 675 1035"
            />
          </g>
          <g className="river-ripples">
            <ellipse cx="1275" cy="245" rx="102" ry="22" />
            <ellipse cx="1045" cy="455" rx="118" ry="27" />
            <ellipse cx="800" cy="660" rx="104" ry="25" />
            <ellipse cx="690" cy="860" rx="80" ry="22" />
          </g>
          <circle
            key={pulse}
            className="river-click-pulse"
            cx="1050"
            cy="470"
            r="70"
            fill="url(#river-pulse-gradient)"
          />
          <foreignObject x="0" y="0" width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT}>
            <canvas
              ref={canvasRef}
              className="river-particle-canvas"
              width={VIEWBOX_WIDTH}
              height={VIEWBOX_HEIGHT}
            />
          </foreignObject>
        </g>
      </svg>

      <span className="river-color-impact-layer" aria-hidden="true">
        {bursts.map((burst) => (
          <span
            key={burst.id}
            className="river-color-burst"
            style={{
              left: `${burst.x}%`,
              top: `${burst.y}%`,
              "--burst-hue": burst.hue,
            } as React.CSSProperties}
          />
        ))}
      </span>
      <span className="river-cinematic-vignette" />
      <span className="river-hint">HOVER TO ACCELERATE · CLICK TO SHIFT COLOR</span>
    </button>
  );
}
