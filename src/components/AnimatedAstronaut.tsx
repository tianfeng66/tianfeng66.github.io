import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";
import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react";

export type AstronautAction = "wave" | "jump" | "spin" | "rocket" | "dance" | "nod";

export type AnimatedAstronautProps = {
  id: number;
  initialX: number;
  initialY: number;
  scale?: number;
  speed?: number;
  zIndex?: number;
  containerRef?: RefObject<HTMLElement>;
  onAction?: (message: string) => void;
};

const actions: AstronautAction[] = ["wave", "jump", "spin", "rocket", "dance", "nod"];
const actionLabels: Record<AstronautAction, string> = {
  wave: "挥手回应",
  jump: "原地起跳",
  spin: "空中转圈",
  rocket: "启动喷射器",
  dance: "即兴跳舞",
  nod: "开心点头",
};

const seeded = (id: number, salt: number) => {
  const value = Math.sin(id * 91.7 + salt * 47.3) * 43758.5453;
  return value - Math.floor(value);
};

function AnimatedAstronautComponent({
  id,
  initialX,
  initialY,
  scale = 1,
  speed = 1,
  zIndex = 2,
  containerRef,
  onAction,
}: AnimatedAstronautProps) {
  const controls = useAnimationControls();
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLButtonElement>(null);
  const activeRef = useRef(true);
  const busyRef = useRef(false);
  const hoverRef = useRef(false);
  const pointerFrame = useRef<number>();
  const timersRef = useRef(new Map<number, () => void>());
  const targetRef = useRef({ x: 0, y: 0 });
  const [action, setAction] = useState<AstronautAction | null>(null);
  const [isNearby, setIsNearby] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isDimmed, setIsDimmed] = useState(false);

  const pause = useCallback((duration: number) => new Promise<void>((resolve) => {
    const timer = window.setTimeout(() => {
      timersRef.current.delete(timer);
      resolve();
    }, duration);
    timersRef.current.set(timer, resolve);
  }), []);

  const animationStyle = {
    "--astronaut-scale": scale,
    "--idle-delay": `${-seeded(id, 1) * 2.8}s`,
    "--idle-speed": `${1.65 + seeded(id, 2) * 1.1}s`,
    "--arm-speed": `${1.2 + seeded(id, 3) * 1.45}s`,
    "--leg-speed": `${1.35 + seeded(id, 4) * 1.25}s`,
  } as CSSProperties;

  useEffect(() => {
    activeRef.current = true;

    if (reducedMotion) {
      controls.set({ x: 0, y: 0, rotate: 0, opacity: 1 });
      return () => {
        activeRef.current = false;
        timersRef.current.forEach((resolve, timer) => {
          window.clearTimeout(timer);
          resolve();
        });
        timersRef.current.clear();
      };
    }

    const roam = async () => {
      let step = 0;

      while (activeRef.current) {
        if (busyRef.current || hoverRef.current) {
          await pause(180);
          continue;
        }

        const container = containerRef?.current;
        if (!container) {
          await pause(250);
          continue;
        }

        const rect = container.getBoundingClientRect();
        const compact = rect.width < 768;
        const originX = rect.width * initialX / 100;
        const originY = rect.height * initialY / 100;
        const phase = seeded(id, step + 11);
        const targetXRatio = compact
          ? 0.12 + seeded(id, step + 17) * 0.72
          : 0.43 + seeded(id, step + 17) * 0.47;
        const highFlight = phase > 0.78;
        const targetYRatio = highFlight
          ? 0.38 + seeded(id, step + 23) * 0.17
          : 0.57 + seeded(id, step + 23) * 0.25;
        const next = {
          x: targetXRatio * rect.width - originX,
          y: targetYRatio * rect.height - originY,
        };
        const rising = next.y < targetRef.current.y - 24;

        targetRef.current = next;
        setIsFlying(rising || highFlight);
        setIsDimmed(targetYRatio < 0.53 && targetXRatio < 0.7);

        await controls.start({
          x: next.x,
          y: next.y,
          rotate: rising ? -4 - seeded(id, step + 31) * 6 : 2 + seeded(id, step + 31) * 5,
          opacity: targetYRatio < 0.53 && targetXRatio < 0.7 ? 0.38 : 1,
          transition: {
            duration: (2.8 + seeded(id, step + 41) * 2.7) / speed,
            ease: [0.42, 0, 0.2, 1],
          },
        });

        if (!activeRef.current) return;
        setIsFlying(false);
        await pause(450 + seeded(id, step + 53) * 1200);
        step += 1;
      }
    };

    void roam();

    return () => {
      activeRef.current = false;
      controls.stop();
      timersRef.current.forEach((resolve, timer) => {
        window.clearTimeout(timer);
        resolve();
      });
      timersRef.current.clear();
    };
  }, [containerRef, controls, id, initialX, initialY, pause, reducedMotion, speed]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (pointerFrame.current) return;

      pointerFrame.current = window.requestAnimationFrame(() => {
        pointerFrame.current = undefined;
        const element = rootRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height * 0.42;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const distance = Math.hypot(deltaX, deltaY);
        const nearby = distance < 160;

        setIsNearby((current) => current === nearby ? current : nearby);
        element.style.setProperty("--look-x", `${Math.max(-1, Math.min(1, deltaX / 150))}`);
        element.style.setProperty("--look-y", `${Math.max(-1, Math.min(1, deltaY / 150))}`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (pointerFrame.current) window.cancelAnimationFrame(pointerFrame.current);
    };
  }, []);

  const triggerRandomAction = useCallback(async (
    event: MouseEvent<HTMLButtonElement> | ReactPointerEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    if (busyRef.current) return;

    busyRef.current = true;
    controls.stop();
    const nextAction = actions[Math.floor(Math.random() * actions.length)];
    const base = targetRef.current;
    setAction(nextAction);
    onAction?.(`宇航员 ${id} 正在${actionLabels[nextAction]}`);

    if (reducedMotion) {
      await pause(320);
      if (!activeRef.current) return;
      setAction(null);
      onAction?.(`宇航员 ${id} 恢复自主巡航`);
      busyRef.current = false;
      return;
    }

    const common = { duration: 0.82, ease: [0.16, 1, 0.3, 1] as const };
    if (nextAction === "jump") {
      setIsFlying(true);
      await controls.start({
        x: base.x,
        y: [base.y, base.y + 8, base.y - 96, base.y],
        rotate: [0, -3, 4, 0],
        transition: { duration: 1.05, times: [0, 0.15, 0.55, 1], ease: "easeInOut" },
      });
    } else if (nextAction === "rocket") {
      setIsFlying(true);
      await controls.start({
        x: base.x,
        y: [base.y, Math.max(base.y - 170, -260), base.y],
        rotate: [0, -5, 0],
        transition: { duration: 1.45, times: [0, 0.42, 1], ease: "easeInOut" },
      });
    } else if (nextAction === "spin") {
      await controls.start({ x: base.x, y: base.y, rotate: [0, 360], transition: common });
    } else if (nextAction === "dance") {
      await controls.start({
        x: [base.x, base.x - 24, base.x + 24, base.x - 16, base.x],
        y: [base.y, base.y - 8, base.y, base.y - 12, base.y],
        rotate: [0, -10, 10, -7, 0],
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    } else {
      await controls.start({
        x: base.x,
        y: nextAction === "wave" ? base.y - 8 : base.y,
        rotate: nextAction === "wave" ? -4 : 0,
        transition: common,
      });
      await pause(nextAction === "nod" ? 850 : 950);
    }

    if (!activeRef.current) return;
    setAction(null);
    setIsFlying(false);
    setIsDimmed(false);
    onAction?.(`宇航员 ${id} 恢复自主巡航`);
    busyRef.current = false;
  }, [controls, id, onAction, pause, reducedMotion]);

  return (
    <motion.button
      ref={rootRef}
      type="button"
      className={[
        "animated-astronaut",
        action ? `is-${action}` : "",
        isNearby ? "is-nearby" : "",
        isFlying ? "is-flying" : "",
        isDimmed ? "is-dimmed" : "",
      ].join(" ")}
      style={{
        ...animationStyle,
        left: `${initialX}%`,
        top: `${initialY}%`,
        zIndex,
      }}
      animate={controls}
      initial={{ x: 0, y: 0, opacity: 0, scale: 1 }}
      whileTap={{ scale: 0.94 }}
      onPointerEnter={() => {
        hoverRef.current = true;
        controls.stop();
      }}
      onPointerLeave={() => {
        hoverRef.current = false;
      }}
      onPointerDown={triggerRandomAction}
      onClick={triggerRandomAction}
      aria-label={`宇航员 ${id}，点击触发互动动作`}
    >
      <span className="astronaut-shadow" />
      <span className="astronaut-rig">
        <span className="astronaut-pack" />

        <span className="limb arm arm-left">
          <span className="limb-lower forearm-left"><span className="astronaut-glove" /></span>
        </span>
        <span className="limb arm arm-right">
          <span className="limb-lower forearm-right"><span className="astronaut-glove" /></span>
        </span>

        <span className="astronaut-body">
          <span className="body-seam" />
          <span className="control-panel">
            <i /><i /><i /><i />
          </span>
          <span className="mission-mark">AI</span>
        </span>

        <span className="astronaut-head-shell">
          <span className="astronaut-head">
            <span className="helmet-highlight" />
            <span className="astronaut-visor">
              <span className="face-eye eye-left" />
              <span className="face-eye eye-right" />
              <span className="face-smile" />
            </span>
          </span>
        </span>

        <span className="limb leg leg-left">
          <span className="limb-lower shin-left">
            <span className="astronaut-boot"><span className="flame flame-left" /><span className="spark spark-left" /></span>
          </span>
        </span>
        <span className="limb leg leg-right">
          <span className="limb-lower shin-right">
            <span className="astronaut-boot"><span className="flame flame-right" /><span className="spark spark-right" /></span>
          </span>
        </span>
      </span>
    </motion.button>
  );
}

export default memo(AnimatedAstronautComponent);
