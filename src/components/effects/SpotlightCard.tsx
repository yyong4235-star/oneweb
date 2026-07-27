"use client";

import { useMotionValue, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`spotlight-card ${className}`}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      style={
        reduceMotion
          ? undefined
          : ({ "--mouse-x": mouseX, "--mouse-y": mouseY } as React.CSSProperties)
      }
    >
      {children}
    </motion.div>
  );
}
