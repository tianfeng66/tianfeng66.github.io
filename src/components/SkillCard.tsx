import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-[2rem] border border-white/5 p-7 transition-colors hover:border-primary/30"
    >
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-gray-400">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#91a98c]" strokeWidth={2} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
