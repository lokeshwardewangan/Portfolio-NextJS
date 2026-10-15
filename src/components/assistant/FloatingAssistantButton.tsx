"use client";

import { motion } from "motion/react";
import { Bot, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface FloatingAssistantButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function FloatingAssistantButton({ onClick, isOpen }: FloatingAssistantButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          onClick={onClick}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isOpen ? 0.8 : 1, opacity: isOpen ? 0 : 1 }}
          whileHover={{ scale: isOpen ? 0.8 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          exit={{ scale: 0, opacity: 0 }}
          disabled={isOpen}
          aria-label="Open AI Assistant"
          className={`group fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-[0_0_20px_rgba(168,85,247,0.4),inset_0_0_0_1px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.7),inset_0_0_0_1px_rgba(255,255,255,0.4)] ${isOpen ? "pointer-events-none" : "cursor-pointer"}`}
        >
          <div className="bg-muted group-hover:bg-muted relative flex h-full w-full items-center justify-center overflow-hidden rounded-full transition-all duration-300 dark:bg-zinc-950 dark:group-hover:bg-zinc-900">
            {/* Background glowing tint */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity group-hover:opacity-100" />

            {/* Micro pulse animation ring */}
            <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-purple-500 opacity-30 group-hover:duration-700"></span>

            {/* Icons */}
            <Sparkles className="absolute top-3 right-3 z-10 h-3 w-3 animate-pulse text-purple-700 dark:text-purple-300" />
            <Bot className="text-foreground group-hover:text-foreground relative z-10 h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
          </div>
        </motion.button>
      </TooltipTrigger>
      {!isOpen && (
        <TooltipContent
          side="left"
          className="border-border bg-muted text-foreground mr-2 px-4 py-2 font-medium shadow-xl dark:bg-zinc-900"
        >
          <p>Ask about Lokeshwar</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
