"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveCard = () => {
  const [errors, setErrors] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  // Mock checking animation
  const handleCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      // 10% chance to find a "bug" just for fun, or always keep 0 to flex
      setErrors(0);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="group border-border bg-card/80 relative col-span-1 overflow-hidden rounded-2xl border p-1 backdrop-blur-xl md:col-span-2 dark:bg-black/40"
    >
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="border-border bg-muted/50 relative flex h-full flex-col justify-between rounded-xl border p-6 dark:bg-neutral-900/50">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-md p-2 text-green-700 dark:bg-neutral-800 dark:text-green-400">
              <Terminal size={20} />
            </div>
            <span className="text-muted-foreground text-sm font-medium">System Status</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  errors === 0 ? "bg-green-400" : "bg-red-500"
                )}
              ></span>
              <span
                className={cn(
                  "relative inline-flex h-3 w-3 rounded-full",
                  errors === 0 ? "bg-green-500" : "bg-red-600"
                )}
              ></span>
            </span>
            <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
              {isChecking ? "SCANNING..." : "ONLINE"}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="my-6 flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            {isChecking ? (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono text-2xl text-cyan-700 dark:text-cyan-400"
              >
                &gt; npm run audit...
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={cn(
                    "text-5xl font-bold",
                    errors === 0 ? "text-foreground" : "text-red-700 dark:text-red-400"
                  )}
                >
                  {errors}
                </span>
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  Console Errors Today
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer / Action */}
        <div className="border-border flex items-center justify-between border-t pt-4">
          <div className="text-muted-foreground text-xs">Last checked: Just now</div>
          <button
            onClick={handleCheck}
            disabled={isChecking}
            className="bg-foreground/5 text-foreground hover:bg-foreground/10 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isChecking ? (
              "Scanning..."
            ) : (
              <>
                <CheckCircle2 size={14} className="text-green-700 dark:text-green-400" />
                Verify System
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
