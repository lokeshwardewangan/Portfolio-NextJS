"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TechBadgeProps {
  name: string;
  className?: string;
  small?: boolean;
}

export const TechBadge = ({ name, className, small = false }: TechBadgeProps) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "border-border bg-foreground/5 text-foreground/80 hover:border-border hover:bg-foreground/10 hover:text-foreground inline-flex items-center justify-center rounded-full border font-medium backdrop-blur-sm transition-colors",
        small ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        className
      )}
    >
      {name}
    </motion.span>
  );
};
