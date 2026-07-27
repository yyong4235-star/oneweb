"use client";

import { motion, useReducedMotion } from "motion/react";

export function SplitText({ text, className = "" }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: index * 0.045, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          key={`${word}-${index}`}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
