"use client";

import { motion, useReducedMotion } from "motion/react";

export function AuroraField({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="aurora-field"
        animate={reduceMotion ? undefined : { x: ["-6%", "4%", "-2%"], y: ["0%", "-5%", "2%"] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </div>
  );
}
