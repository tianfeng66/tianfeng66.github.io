import { motion } from "framer-motion";
import { Search, Eye, FileText } from "lucide-react";
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
};

const icons = { search: Search, eye: Eye, file: FileText };

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
    </motion.article>
  );
}
