"use client";

import { motion } from "motion/react";

type TechPill = {
  label: string;
  dotColor: string;
};

const TECH_STACK: TechPill[] = [
  { label: "React", dotColor: "bg-cyan-400/70" },
  { label: "TypeScript", dotColor: "bg-blue-400/70" },
  { label: "Next.js", dotColor: "bg-slate-300/70" },
  { label: "Node.js", dotColor: "bg-emerald-400/70" },
  { label: "PostgreSQL", dotColor: "bg-indigo-400/70" },
  { label: "Docker", dotColor: "bg-sky-400/70" },
  { label: "AWS", dotColor: "bg-orange-400/70" },
];

export const TechStackPills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-1.5 lg:justify-start"
    >
      {TECH_STACK.map(({ label, dotColor }, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.25 + i * 0.04 }}
          whileHover={{ scale: 1.03, y: -0.5 }}
          className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] px-2 py-[2px] text-[0.68rem] font-normal tracking-wide text-neutral-400 backdrop-blur-xs transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-neutral-200"
        >
          <span className={`h-1 w-1 rounded-full ${dotColor}`} />
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
};
