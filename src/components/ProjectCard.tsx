import { motion } from "framer-motion";
import { Search, Eye, FileText, Play } from "lucide-react";
import { useRef, useState } from "react";
import MetricCard from "./MetricCard";

export type Project = {
  number: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  icon: "search" | "eye" | "file";
  captionCases?: CaptionCase[];
};

export type CaptionCase = {
  id: string;
  title: string;
  duration: string;
  video: string;
  meta: string[];
  summary: string;
  definitions: string;
  fullDescription: string;
};

const icons = { search: Search, eye: Eye, file: FileText };

function CaptionVideo({ item, index }: { item: CaptionCase; index: number }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = () => {
    setStarted(true);
    window.requestAnimationFrame(() => void videoRef.current?.play());
  };

  return (
    <div className={`caption-case-video ${started ? "is-started" : ""}`}>
      <video ref={videoRef} controls={started} preload="none" playsInline>
        <source src={item.video} type="video/mp4" />
      </video>
      {!started && (
        <button type="button" className="caption-case-poster" onClick={startVideo} aria-label={`播放${item.title}`}>
          <span>0{index + 1}</span>
          <strong><Play size={15} fill="currentColor" /> 播放案例</strong>
          <small>{item.duration} · CAPTION SAMPLE</small>
        </button>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group rounded-[2rem] border border-white/5 p-6 transition-colors hover:border-primary/30 md:p-9"
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-bold tracking-[0.16em] text-primary/40">{project.number}</span>
        <Icon className="h-7 w-7 text-primary/70" strokeWidth={1.4} />
      </div>
      <div className="mt-16">
        <p className="text-xs text-primary/55">{project.period} · {project.role}</p>
        <h3 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-primary md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-6 max-w-3xl text-sm leading-8 text-gray-400 md:text-base">{project.description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-gray-400">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3">
        {project.metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </div>
      {project.captionCases?.length ? (
        <section className="caption-casebook" aria-label="Caption 视频描述案例">
          <div className="caption-casebook-heading">
            <div>
              <span>CAPTION DESCRIPTION CASES</span>
              <h4>从场景拆解到时间轴描述</h4>
            </div>
            <p>以下案例展示场景、主体、声音、镜头语言与后期包装元素的结构化描述方式。</p>
          </div>
          <div className="caption-case-grid">
            {project.captionCases.map((item, index) => (
              <article className="caption-case" key={item.id}>
                <CaptionVideo item={item} index={index} />
                <div className="caption-case-copy">
                  <div className="caption-case-title">
                    <div>
                      <small>{item.duration} · VIDEO CAPTION</small>
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                  <div className="caption-case-meta">
                    {item.meta.map((meta) => <span key={meta}>{meta}</span>)}
                  </div>
                  <p>{item.summary}</p>
                  <details>
                    <summary>查看完整 Caption 描述</summary>
                    <div className="caption-case-detail">
                      <strong>场景 / 主体 / 后期包装</strong>
                      <p>{item.definitions}</p>
                      <strong>完整时间轴描述</strong>
                      <p>{item.fullDescription}</p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </motion.article>
  );
}
