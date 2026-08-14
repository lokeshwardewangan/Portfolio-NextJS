"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { TypedHeading } from "./TypedHeading";
import { TechStackPills } from "./TechStackPills";
import { FeaturedBadge } from "./FeaturedBadge";
import { ToolButton } from "./ToolButton";

const CometPath = dynamic(() => import("./CometPath"), { ssr: false });

export const HeroCopy = () => (
  <div className="relative z-10 flex w-full flex-col items-center justify-center gap-6 text-center lg:w-[55%] lg:items-start lg:pr-10 lg:text-left">
    <CometPath />
    <TypedHeading />

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-[1.05rem]"
    >
      I&rsquo;m Lokeshwar Prasad Dewangan, Full-stack engineer building{" "}
      <span className="text-foreground font-semibold">
        production-grade web application, AI Powered products, and intelligent workflows.
      </span>{" "}
      &mdash; end-to-end, with a sharp focus on{" "}
      <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text font-semibold text-transparent">
        performance, scalability &amp; clean architecture.
      </span>
    </motion.p>

    <TechStackPills />
    <FeaturedBadge />

    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-4 rounded-full pt-0 lg:justify-start"
    >
      <ToolButton icon={Mail}>Hire Me</ToolButton>
      <ToolButton variant="secondary" icon={ArrowRight}>
        Message
      </ToolButton>
      <div className="bg-border/40 mx-2 hidden h-8 w-px sm:block" />
    </motion.div>
  </div>
);
