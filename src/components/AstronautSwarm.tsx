import { useEffect, useState, type RefObject } from "react";
import AnimatedAstronaut from "./AnimatedAstronaut";

type AstronautSwarmProps = {
  containerRef: RefObject<HTMLElement>;
};

const astronauts = [
  { id: 1, initialX: 48, initialY: 66, scale: 0.72, speed: 0.9, zIndex: 3 },
  { id: 2, initialX: 58, initialY: 72, scale: 0.8, speed: 1.12, zIndex: 4 },
  { id: 3, initialX: 68, initialY: 64, scale: 0.7, speed: 0.84, zIndex: 3 },
  { id: 4, initialX: 78, initialY: 72, scale: 0.84, speed: 1.04, zIndex: 5 },
  { id: 5, initialX: 88, initialY: 65, scale: 0.68, speed: 0.94, zIndex: 3 },
  { id: 6, initialX: 61, initialY: 78, scale: 1.02, speed: 1.08, zIndex: 8 },
] as const;

const mobileAstronauts = [
  { id: 1, initialX: 18, initialY: 67, scale: 0.68, speed: 0.85, zIndex: 3 },
  { id: 3, initialX: 52, initialY: 63, scale: 0.76, speed: 0.92, zIndex: 4 },
  { id: 6, initialX: 78, initialY: 72, scale: 0.86, speed: 0.82, zIndex: 6 },
] as const;

export default function AstronautSwarm({ containerRef }: AstronautSwarmProps) {
  const [compact, setCompact] = useState(() => window.matchMedia("(max-width: 767px)").matches);
  const [status, setStatus] = useState("AI 宇航员小队正在自主巡航");

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = (event: MediaQueryListEvent) => setCompact(event.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const team = compact ? mobileAstronauts : astronauts;

  return (
    <div className="astronaut-swarm absolute inset-0 z-[8]" aria-label="可互动的 AI 宇航员小队">
      {team.map((astronaut) => (
        <AnimatedAstronaut
          key={`${compact ? "compact" : "desktop"}-${astronaut.id}`}
          {...astronaut}
          containerRef={containerRef}
          onAction={setStatus}
        />
      ))}
      <div className="interaction-status" aria-live="polite">
        <span className="status-dot" />
        {status}
      </div>
    </div>
  );
}
