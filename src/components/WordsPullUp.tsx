import { motion } from "framer-motion";

type WordsPullUpProps = {
  text: string;
  className?: string;
};

export default function WordsPullUp({ text, className = "" }: WordsPullUpProps) {
  return (
    <span className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {text.split("").map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </span>
  );
}
