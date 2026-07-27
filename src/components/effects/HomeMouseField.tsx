"use client";

import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import("./Antigravity").then((mod) => mod.Antigravity), { ssr: false });

export function HomeMouseField() {
  return (
    <Antigravity
      className="pointer-events-none fixed inset-0 z-[35] hidden opacity-65 mix-blend-screen lg:block"
      count={260}
      magnetRadius={5.8}
      ringRadius={6.4}
      waveSpeed={0.42}
      waveAmplitude={0.85}
      particleSize={1.45}
      lerpSpeed={0.055}
      color="#5eead4"
      autoAnimate
      particleVariance={0.8}
      rotationSpeed={0.08}
      depthFactor={0.85}
      pulseSpeed={2.4}
      particleShape="capsule"
      fieldStrength={11}
    />
  );
}
