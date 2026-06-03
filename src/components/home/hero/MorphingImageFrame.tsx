"use client";

import { motion, MotionValue, useReducedMotion, useTransform } from "motion/react";
import { ImageTransition } from "./ImageTransition";

const SHAPES = [
  "polygon(50% 0%, 95% 0%, 100% 5%, 100% 50%, 100% 95%, 95% 100%, 50% 100%, 5% 100%, 0% 95%, 0% 50%, 0% 5%, 5% 0%)",
  "polygon(45% 3%, 75% 6%, 95% 25%, 98% 50%, 92% 78%, 70% 95%, 45% 98%, 22% 92%, 5% 75%, 2% 48%, 10% 22%, 25% 5%)",
  "polygon(50% 0%, 71.65% 12.5%, 93.3% 25%, 93.3% 50%, 93.3% 75%, 71.65% 87.5%, 50% 100%, 28.35% 87.5%, 6.7% 75%, 6.7% 50%, 6.7% 25%, 28.35% 12.5%)",
  "polygon(50% 1%, 78% 4%, 95% 20%, 100% 48%, 96% 75%, 80% 95%, 50% 99%, 20% 95%, 4% 75%, 0% 48%, 5% 20%, 22% 4%)",
  "polygon(55% 4%, 82% 7%, 92% 28%, 99% 52%, 88% 76%, 68% 94%, 42% 97%, 18% 88%, 4% 68%, 8% 42%, 18% 18%, 32% 8%)",
  "polygon(50% 0%, 75% 6.7%, 93.3% 25%, 100% 50%, 93.3% 75%, 75% 93.3%, 50% 100%, 25% 93.3%, 6.7% 75%, 0% 50%, 6.7% 25%, 25% 6.7%)",
];

const SHAPE_LOOP = [...SHAPES, SHAPES[0]];
const SHAPE_TRANSITION = { duration: 24, repeat: Infinity, ease: "easeInOut" } as const;
const GLOW =
  "drop-shadow(0 0 20px rgba(168,85,247,0.4)) drop-shadow(0 0 40px rgba(254,143,181,0.25))";
const SHINE_GRADIENT = "conic-gradient(from 0deg, #A07CFE, #FE8FB5, #FFBE7B, #A07CFE)";

type Props = { smoothX: MotionValue<number> };

export const MorphingImageFrame = ({ smoothX }: Props) => {
  const reduced = useReducedMotion();
  const tilt = useTransform(smoothX, [-800, 800], [-2, 2]);

  const morphAnimate = reduced ? undefined : { clipPath: SHAPE_LOOP };
  const morphTransition = reduced ? undefined : SHAPE_TRANSITION;
  const staticShape = reduced ? { clipPath: SHAPES[0] } : undefined;

  return (
    <motion.div
      style={{
        rotateX: reduced ? 0 : tilt,
        rotateY: reduced ? 0 : tilt,
        filter: GLOW,
        ...staticShape,
      }}
      animate={morphAnimate}
      transition={morphTransition}
      className="group relative z-20 aspect-3/4 w-[200px] will-change-[clip-path,filter] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px]"
    >
      <div
        style={{ backgroundImage: SHINE_GRADIENT }}
        className={`absolute inset-0 transform-gpu will-change-transform ${reduced ? "" : "animate-[spin_10s_linear_infinite]"}`}
      />
      <motion.div
        animate={morphAnimate}
        transition={morphTransition}
        style={staticShape}
        className="bg-background absolute inset-[2px] overflow-hidden"
      >
        <ImageTransition />
      </motion.div>
    </motion.div>
  );
};
