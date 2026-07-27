"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString("en-US"));
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const controls = animate(motionValue, value, { duration: value > 1000 ? 1.2 : 0.9, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, motionValue, reduceMotion, value]);

  if (reduceMotion) {
    return <span ref={ref}>{value.toLocaleString("en-US")}{suffix}</span>;
  }

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
