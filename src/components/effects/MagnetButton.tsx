"use client";

import { motion, useMotionValue, useSpring, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export function MagnetButton({ children, className = "", ...props }: HTMLMotionProps<"a"> & { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 });

  return (
    <motion.a
      {...props}
      className={className}
      style={reduceMotion ? props.style : { ...props.style, x, y }}
      onMouseMove={(event) => {
        props.onMouseMove?.(event);
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
      }}
      onMouseLeave={(event) => {
        props.onMouseLeave?.(event);
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
