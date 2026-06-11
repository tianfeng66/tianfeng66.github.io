import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

const preloadAssets = [
  "/media/goodcase-cover.jpg",
  "/media/badcase-cover.jpg",
  "/media/automation-cover.jpg",
  "/media/spring-desert-cover.jpg",
  "/media/coze-json.png",
  "/media/wechat-qr.png",
  "/media/douyin.jpg",
  "/media/kuaishou.jpg",
  "/media/xiaohongshu.jpg",
  "/media/campus-01.webp",
  "/media/army-01.webp",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [actualProgress, setActualProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    let active = true;
    let loaded = 0;

    const markLoaded = () => {
      if (!active) return;
      loaded += 1;
      setActualProgress(Math.round(loaded / preloadAssets.length * 100));
    };

    preloadAssets.forEach((src) => {
      const image = new Image();
      image.onload = markLoaded;
      image.onerror = markLoaded;
      image.src = src;
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDisplayProgress((current) => {
        if (current >= actualProgress) return current;
        const distance = actualProgress - current;
        return Math.min(actualProgress, current + Math.max(1, Math.ceil(distance * 0.14)));
      });
    }, 24);
    return () => window.clearInterval(timer);
  }, [actualProgress]);

  useEffect(() => {
    if (displayProgress < 100 || completedRef.current) return;
    completedRef.current = true;
    const timer = window.setTimeout(onComplete, 420);
    return () => window.clearTimeout(timer);
  }, [displayProgress, onComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.015 }}
      transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader-grid" />
      <div className="loader-core">
        <div className="loader-brand">
          <span>TF</span>
          <small>PORTFOLIO SYSTEM</small>
        </div>
        <p className="loader-label">正在装载视觉与项目数据</p>
        <div className="energy-bar" aria-label={`页面加载进度 ${displayProgress}%`}>
          <motion.div
            className="energy-fill"
            animate={{ width: `${displayProgress}%` }}
            transition={{ duration: 0.16, ease: "linear" }}
          >
            <span className="energy-sheen" />
          </motion.div>
          <div className="energy-segments" />
        </div>
        <div className="loader-meta">
          <span>DATA STREAM</span>
          <strong>{String(displayProgress).padStart(3, "0")}%</strong>
        </div>
      </div>
    </motion.div>
  );
}
