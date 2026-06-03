"use client";

import { motion } from "motion/react";

const ORBIT_RINGS = [
  { r: 48, sw: 0.2, dash: "1 3" },
  { r: 40, sw: 0.5, dash: "4 4" },
  { r: 30, sw: 0.2, dash: "2 6" },
];

const ORBIT_ELLIPSES = [30, -30, 90];

export const HeroOrbitDecorations = () => (
  <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
    <svg
      className="text-primary absolute h-[180%] max-h-[700px] w-[180%] max-w-[700px] transform-gpu animate-[spin_40s_linear_infinite] opacity-30 will-change-transform"
      viewBox="0 0 100 100"
    >
      {ORBIT_RINGS.map(({ r, sw, dash }) => (
        <circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={sw}
          strokeDasharray={dash}
        />
      ))}
    </svg>

    <svg
      className="absolute h-[200%] max-h-[800px] w-[200%] max-w-[800px] transform-gpu animate-[spin_50s_linear_infinite_reverse] text-pink-500 opacity-20 will-change-transform"
      viewBox="0 0 100 100"
    >
      {ORBIT_ELLIPSES.map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="50"
          rx="45"
          ry="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>

    <motion.div
      animate={{ y: [-20, 20, -20], rotate: [0, 90, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-12 -right-8 text-yellow-500/50 md:-right-16"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v20M2 12h20" />
      </svg>
    </motion.div>

    <motion.div
      animate={{ y: [20, -20, 20], rotate: [0, -90, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-44 -left-12 text-cyan-500/50 md:-left-16"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    </motion.div>
  </div>
);
