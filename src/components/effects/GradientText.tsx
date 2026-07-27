"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from "motion/react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  direction?: "horizontal" | "vertical" | "diagonal";
  pauseOnHover?: boolean;
  yoyo?: boolean;
  showBorder?: boolean;
};

export function GradientText({
  children,
  className = "",
  colors = ["#ecfff6", "#5eead4", "#a7f3d0"],
  animationSpeed = 5,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true,
}: GradientTextProps) {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (reduceMotion || isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;
      progress.set(cycleTime < animationDuration ? (cycleTime / animationDuration) * 100 : 100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      return;
    }

    progress.set((elapsedRef.current / animationDuration) * 100);
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress, yoyo]);

  const backgroundPosition = useTransform(progress, (p) => {
    if (direction === "vertical") return `50% ${p}%`;
    return `${p}% 50%`;
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle = direction === "horizontal" ? "to right" : direction === "vertical" ? "to bottom" : "to bottom right";
  const gradientColors = [...colors, colors[0]].join(", ");
  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === "vertical" ? "100% 300%" : direction === "diagonal" ? "300% 300%" : "300% 100%",
    backgroundRepeat: "repeat",
  };

  return (
    <motion.span className={`animated-gradient-text ${showBorder ? "with-border" : ""} ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showBorder && <motion.span className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} aria-hidden="true" />}
      <motion.span className="text-content" style={{ ...gradientStyle, backgroundPosition }}>
        {children}
      </motion.span>
    </motion.span>
  );
}
