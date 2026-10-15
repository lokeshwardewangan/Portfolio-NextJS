"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Project } from "./project-data";
import { TechBadge } from "./TechBadge";
import { ProjectLinks } from "./ProjectLinks";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ReactProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={item}
          className="group border-border bg-foreground/5 hover:border-border hover:bg-foreground/10 relative flex h-full flex-col overflow-hidden rounded-2xl border transition-colors"
        >
          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 400px, (max-width: 1200px) 50vw, 400px"
              quality={85}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Mobile: bottom gradient + corner links (always visible) */}
            <div className="absolute inset-x-0 bottom-0 z-20 flex justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 md:hidden">
              <ProjectLinks
                liveLink={project.liveLink}
                repoLink={project.repoLink}
                title={project.title}
                className="scale-90"
              />
            </div>

            {/* Desktop: full blur overlay on hover */}
            <div className="absolute inset-0 hidden items-center justify-center bg-black/60 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100 md:flex">
              <ProjectLinks
                liveLink={project.liveLink}
                repoLink={project.repoLink}
                title={project.title}
                className="scale-90"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-foreground mb-2 text-base font-bold sm:text-lg 2xl:text-xl">
              {project.title}
            </h3>
            <p className="text-muted-foreground dark:text-foreground/60 mb-4 line-clamp-3 flex-1 text-xs leading-relaxed 2xl:text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} small />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
