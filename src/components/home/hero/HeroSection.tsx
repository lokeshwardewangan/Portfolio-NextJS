"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { HeroCopy } from "./HeroCopy";
import { HeroOrbitDecorations } from "./HeroOrbitDecorations";
import { HeroStackedImages } from "./HeroStackedImages";
import { MorphingImageFrame } from "./MorphingImageFrame";

export const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 50 });
  const centerX = useRef(0);

  useEffect(() => {
    const update = () => {
      centerX.current = window.innerWidth / 2;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - centerX.current);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="scale_layout relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden px-6 pt-16 pb-20 md:pt-20 lg:px-12 lg:pt-14 lg:pb-0 xl:pt-0"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col-reverse items-center justify-center lg:flex-row lg:justify-between lg:gap-12">
        <HeroCopy />

        <div className="perspective-1000 relative flex h-[400px] w-full max-w-[300px] items-center justify-center sm:h-[550px] sm:w-[400px] sm:max-w-xl lg:left-0 lg:h-[600px] lg:w-[45%] lg:max-w-none lg:justify-center">
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
