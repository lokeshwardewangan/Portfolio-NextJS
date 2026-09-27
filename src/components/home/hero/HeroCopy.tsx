"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { TypedHeading } from "./TypedHeading";
import { TechStackPills } from "./TechStackPills";
import { FeaturedBadge } from "./FeaturedBadge";
import { ToolButton } from "./ToolButton";
import CometPath from "./CometPath";

export const HeroCopy = () => (
  <div className="relative z-10 flex w-full flex-col items-center justify-center gap-6 text-center lg:w-[55%] lg:items-start lg:pr-10 lg:text-left">
    <CometPath />

    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      Open to React / Full Stack opportunities
    </motion.div>

    <TypedHeading />

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-[1.05rem]"
    >
      I&rsquo;m Lokeshwar Dewangan, Full-stack engineer building{" "}
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
      className="flex flex-wrap items-center justify-center gap-3 pt-0 lg:justify-start"
    >
      <a href="mailto:lokeshwardewangan.dev@gmail.com">
        <ToolButton icon={Mail}>Hire Me</ToolButton>
      </a>
      <Link href="/contact">
        <ToolButton variant="secondary" icon={ArrowRight}>
          Message
        </ToolButton>
      </Link>
      <div className="bg-border/40 mx-1 hidden h-8 w-px sm:block" />
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/lokeshwardewangan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground rounded-full border border-white/10 bg-white/5 p-2.5 transition-colors hover:bg-white/10"
          aria-label="GitHub Profile"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/lokeshwar-dewangan-7b2163211/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground rounded-full border border-white/10 bg-white/5 p-2.5 transition-colors hover:bg-white/10 hover:text-blue-400"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  </div>
);
