"use client";

import { motion, MotionValue, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import DecorativeImage1 from "@/assets/images/transition/decorative-bg-1.jpeg";
import DecorativeImage2 from "@/assets/images/transition/decorative-bg-2.jpeg";

type StackedImage = {
  src: StaticImageData;
  position: string;
  width: string;
  yRange: number[];
  rotateRange: number[];
  duration: number;
  imageClass: string;
  overlayClass: string;
};

const STACKED: StackedImage[] = [
  {
    src: DecorativeImage1,
    position: "-top-3 -left-10 xl:-left-20",
    width: "w-[200px] xl:w-[160px]",
    yRange: [-10, 10, -10],
    rotateRange: [-8, -4, -8],
    duration: 12,
    imageClass:
      "object-cover opacity-80 grayscale transition-opacity duration-500 hover:grayscale-0",
    overlayClass: "from-background/90 via-background/40 bg-linear-to-tr to-transparent",
  },
  {
    src: DecorativeImage2,
    position: "-right-10 -bottom-8 xl:-right-20",
    width: "w-[220px] xl:w-[160px]",
    yRange: [10, -10, 10],
    rotateRange: [8, 4, 8],
    duration: 15,
    imageClass: "object-cover opacity-80 mix-blend-multiply grayscale dark:mix-blend-screen",
    overlayClass: "from-background/90 via-background/40 bg-linear-to-bl to-transparent",
  },
];

type Props = { smoothX: MotionValue<number> };

export const HeroStackedImages = ({ smoothX }: Props) => {
  const parallax = useTransform(smoothX, (x) => x * 0.015);

  return (
    <>
      {STACKED.map((img, i) => (
        <motion.div
          key={i}
          animate={{ y: img.yRange, rotate: img.rotateRange }}
          transition={{ duration: img.duration, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: parallax }}
          className={`pointer-events-none absolute z-10 hidden aspect-3/4 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:block ${img.position} ${img.width}`}
        >
          <Image
            src={img.src}
            alt=""
            fill
            sizes="(max-width: 1280px) 220px, 160px"
            placeholder="blur"
            className={img.imageClass}
          />
          <div className={`absolute inset-0 ${img.overlayClass}`} />
        </motion.div>
      ))}
    </>
  );
};
