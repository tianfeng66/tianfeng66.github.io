import {
  AnimatePresence,
  animate,
  motion,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import mascotImage from "../assets/chibi-mascot.png";

type MascotState = "idle" | "running" | "waving" | "clicked" | "dragging";
type Interaction = "jump" | "wave" | "spin" | "bubble" | "dash";

const messages = [
  "你好呀！",
  "欢迎来到我的个站～",
  "点我干嘛，嘿嘿",
  "今天也要加油！",
  "正在努力搬砖中...",
];

const actions: Interaction[] = ["jump", "wave", "spin", "bubble", "dash"];
const randomItem = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

export default function ChibiMascot() {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const actionControls = useAnimationControls();
  const layerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<MascotState>("idle");
  const [direction, setDirection] = useState<1 | -1>(-1);
  const [bubble, setBubble] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const mountedRef = useRef(true);
  const draggingRef = useRef(false);
  const actionBusyRef = useRef(false);
  const draggedRef = useRef(false);
  const roamTimerRef = useRef<number>();
  const bubbleTimerRef = useRef<number>();
  const moveControlsRef = useRef<Array<{ stop: () => void }>>([]);
  const scheduleRoamRef = useRef<(delay?: number) => void>(() => {});

  const getSize = () => window.innerWidth < 640 ? 92 : window.innerWidth < 900 ? 108 : 126;

  const clampPosition = useCallback(() => {
    const size = getSize();
    x.set(Math.max(10, Math.min(x.get(), window.innerWidth - size - 10)));
    y.set(Math.max(74, Math.min(y.get(), window.innerHeight - size - 10)));
  }, [x, y]);

  const stopMovement = useCallback(() => {
    moveControlsRef.current.forEach((control) => control.stop());
    moveControlsRef.current = [];
    if (roamTimerRef.current) window.clearTimeout(roamTimerRef.current);
  }, []);

  const scheduleRoam = useCallback((delay = 900) => {
    if (roamTimerRef.current) window.clearTimeout(roamTimerRef.current);
    roamTimerRef.current = window.setTimeout(async () => {
      if (!mountedRef.current || draggingRef.current || actionBusyRef.current || document.hidden) {
        scheduleRoamRef.current(900);
        return;
      }

      const size = getSize();
      const minX = 12;
      const maxX = Math.max(minX, window.innerWidth - size - 12);
      const minY = Math.max(90, window.innerHeight * 0.58);
      const maxY = Math.max(minY, window.innerHeight - size - 12);
      const targetX = minX + Math.random() * (maxX - minX);
      const targetY = minY + Math.random() * (maxY - minY);
      const distance = Math.hypot(targetX - x.get(), targetY - y.get());

      setDirection(targetX >= x.get() ? 1 : -1);
      setState("running");
      const duration = reducedMotion ? 0.01 : Math.min(6.8, Math.max(2.8, distance / 105));
      const moveX = animate(x, targetX, { duration, ease: "easeInOut" });
      const moveY = animate(y, targetY, { duration, ease: "easeInOut" });
      moveControlsRef.current = [moveX, moveY];

      await Promise.all([moveX, moveY]);
      if (!mountedRef.current || draggingRef.current || actionBusyRef.current) return;
      setState(Math.random() > 0.68 ? "waving" : "idle");
      scheduleRoamRef.current(1100 + Math.random() * 1800);
    }, delay);
  }, [reducedMotion, x, y]);
  scheduleRoamRef.current = scheduleRoam;

  const showBubble = useCallback((message = randomItem(messages)) => {
    if (bubbleTimerRef.current) window.clearTimeout(bubbleTimerRef.current);
    setBubble(message);
    bubbleTimerRef.current = window.setTimeout(() => setBubble(null), 2000);
  }, []);

  const triggerInteraction = useCallback(async (
    interaction: Interaction,
    pointerX?: number,
  ) => {
    if (actionBusyRef.current || draggingRef.current) return;
    actionBusyRef.current = true;
    stopMovement();
    setState(interaction === "wave" ? "waving" : "clicked");

    if (interaction === "bubble") {
      showBubble();
      await actionControls.start({
        y: [0, -12, 0],
        scale: [1, 1.08, 1],
        transition: { duration: reducedMotion ? 0.1 : 0.65, ease: "easeOut" },
      });
    } else if (interaction === "jump") {
      await actionControls.start({
        y: [0, -48, 0],
        scaleY: [1, 0.94, 1.04, 1],
        transition: { duration: reducedMotion ? 0.1 : 0.72, ease: "easeInOut" },
      });
    } else if (interaction === "wave") {
      await actionControls.start({
        rotate: [0, -5, 6, -5, 5, 0],
        scale: [1, 1.05, 1],
        transition: { duration: reducedMotion ? 0.1 : 0.82, ease: "easeInOut" },
      });
    } else if (interaction === "spin") {
      await actionControls.start({
        rotate: [0, 360],
        scale: [1, 1.08, 1],
        transition: { duration: reducedMotion ? 0.1 : 0.78, ease: "easeInOut" },
      });
    } else {
      const size = getSize();
      const targetX = Math.max(
        10,
        Math.min(
          window.innerWidth - size - 10,
          x.get() + Math.sign((pointerX ?? window.innerWidth / 2) - (x.get() + size / 2)) * 86,
        ),
      );
      setDirection(targetX >= x.get() ? 1 : -1);
      await animate(x, targetX, {
        duration: reducedMotion ? 0.1 : 0.55,
        ease: [0.34, 1.56, 0.64, 1],
      });
    }

    if (!mountedRef.current) return;
    actionControls.set({ y: 0, rotate: 0, scale: 1, scaleY: 1 });
    actionBusyRef.current = false;
    setState("idle");
    scheduleRoam(1000);
  }, [actionControls, reducedMotion, scheduleRoam, showBubble, stopMovement, x]);

  useEffect(() => {
    mountedRef.current = true;
    const size = getSize();
    x.set(Math.max(12, window.innerWidth - size - 28));
    y.set(Math.max(90, window.innerHeight - size - 24));
    scheduleRoam(1400);

    const handleResize = () => clampPosition();
    const handleVisibility = () => {
      if (document.hidden) stopMovement();
      else scheduleRoam(500);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      mountedRef.current = false;
      stopMovement();
      if (bubbleTimerRef.current) window.clearTimeout(bubbleTimerRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [clampPosition, scheduleRoam, stopMovement, x, y]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (draggedRef.current) {
      draggedRef.current = false;
      return;
    }
    void triggerInteraction(randomItem(actions), event.clientX);
  };

  const handleDragStart = () => {
    draggedRef.current = false;
    draggingRef.current = true;
    actionBusyRef.current = false;
    stopMovement();
    setState("dragging");
  };

  const handleDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.hypot(info.offset.x, info.offset.y) > 4) draggedRef.current = true;
  };

  const handleDragEnd = () => {
    draggingRef.current = false;
    clampPosition();
    setState("idle");
    scheduleRoam(900);
  };

  return (
    <div ref={layerRef} className="chibi-mascot-layer" aria-live="polite">
      <motion.button
        type="button"
        className={`chibi-mascot is-${state}`}
        data-state={state}
        style={{ x, y }}
        drag
        dragConstraints={layerRef}
        dragElastic={0.06}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        onHoverStart={() => {
          setHovered(true);
          if (!actionBusyRef.current && !draggingRef.current) void triggerInteraction("wave");
        }}
        onHoverEnd={() => setHovered(false)}
        whileTap={{ scale: 0.92 }}
        aria-label="互动人物挂件，点击或拖动我"
      >
        <AnimatePresence>
          {bubble && (
            <motion.span
              className="chibi-speech-bubble"
              initial={{ opacity: 0, y: 10, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.9 }}
              transition={{ duration: 0.22 }}
            >
              {bubble}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.span
          className="chibi-character-rig"
          animate={actionControls}
          whileHover={{ scale: 1.08 }}
        >
          <span className="chibi-body-layer">
            <img
              src={mascotImage}
              alt=""
              draggable="false"
              style={{ transform: `scaleX(${direction})` }}
            />
          </span>
          <span className={`chibi-happy-spark ${hovered ? "is-visible" : ""}`} aria-hidden="true">+</span>
        </motion.span>
        <span className="chibi-shadow" aria-hidden="true" />
      </motion.button>
    </div>
  );
}
