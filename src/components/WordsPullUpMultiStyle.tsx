import { motion } from "framer-motion";

export type StyledTextSegment = {
  text: string;
  className?: string;
};

export default function WordsPullUpMultiStyle({ segments }: { segments: StyledTextSegment[] }) {
  return (
    <span className="block">
      {segments.map((segment, index) => (
        <motion.span
          key={segment.text}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className={`block ${segment.className ?? ""}`}
        >
          {segment.text}
        </motion.span>
      ))}
    </span>
  );
}
