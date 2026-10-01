"use client";

import { useMotionValue, useSpring } from "motion/react";
import { HeroCopy } from "./HeroCopy";
import { HeroOrbitDecorations } from "./HeroOrbitDecorations";
import { HeroStackedImages } from "./HeroStackedImages";
import { MorphingImageFrame } from "./MorphingImageFrame";

export const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90svh] w-full items-center justify-center overflow-hidden px-6 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-12">
        <HeroCopy />

        <div className="perspective-1000 relative flex h-[320px] w-full max-w-[300px] shrink-0 items-center justify-center sm:h-[420px] sm:max-w-[400px] lg:h-[520px] lg:w-[38%] lg:max-w-none">
          <div className="relative flex items-center justify-center">
            <HeroOrbitDecorations />
            <HeroStackedImages smoothX={smoothX} />
            <MorphingImageFrame smoothX={smoothX} />
          </div>
        </div>
      </div>
    </section>
  );
};
