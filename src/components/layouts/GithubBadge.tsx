"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import { useGithubUser } from "@/hooks/useGithubUser";

export const GithubBadge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user, isLoading } = useGithubUser("lokeshwardewangan");

  const handleHover = (state: boolean) => {
    setIsOpen(state);
  };

  if (isLoading || !user) {
    return (
      <a
        href="https://github.com/lokeshwardewangan"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-pink-600 to-purple-700 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 dark:from-pink-500 dark:to-purple-600"
      >
        <span>Public Repos</span>
        <span className="bg-card/80 ml-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold dark:bg-black/30">
          <Star className="h-3 w-3 fill-yellow-300 text-yellow-700 dark:text-yellow-300" />
          ...
        </span>
      </a>
    );
  }

  return (
    <div
      className="relative z-50 w-fit"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <Link
          href={user.html_url}
          target="_blank"
          className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-pink-600 to-purple-700 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 dark:from-pink-500 dark:to-purple-600"
        >
          <span>Public Repos</span>
          <span className="bg-card/80 ml-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold dark:bg-black/30">
            <Star className="h-3 w-3 fill-yellow-300 text-yellow-700 dark:text-yellow-300" />
            {user.public_repos}
          </span>
        </Link>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[120%] right-0 z-50 w-[320px] origin-top-right pt-2"
          >
            <div className="border-border bg-muted/95 relative overflow-hidden rounded-2xl border p-5 shadow-2xl backdrop-blur-3xl dark:bg-slate-900/95">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-pink-500/10 via-purple-500/5 to-cyan-500/10 opacity-50" />

              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="border-border relative h-14 w-14 overflow-hidden rounded-full border-2 shadow-lg">
                    <Image
                      src={user.avatar_url}
                      alt={user.name || user.login}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-foreground text-lg leading-tight font-bold">{user.name}</h3>
                    <p className="text-muted-foreground text-xs">@{user.login}</p>
                  </div>
                </div>

                {/* Bio */}
                {user.bio && (
                  <p className="text-foreground/90 line-clamp-3 text-sm leading-relaxed">
                    {user.bio}
                  </p>
                )}

                <div className="bg-foreground/5 grid grid-cols-2 gap-2 rounded-xl p-3 pb-2">
                  <div className="flex flex-col items-center justify-center gap-1 text-center">
                    <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      Repos
                    </span>
                    <span className="text-foreground text-lg font-bold">{user.public_repos}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 text-center">
                    <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      Followers
                    </span>
                    <span className="text-foreground text-lg font-bold">{user.followers}</span>
                  </div>
                </div>

                {user.location && (
                  <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <MapPin size={12} />
                    <span>{user.location}</span>
                  </div>
                )}

                <Link
                  href={user.html_url}
                  target="_blank"
                  className="group/cta bg-foreground/10 text-foreground hover:bg-foreground/20 mt-1 flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-bold transition-colors"
                >
                  <Star size={14} className="text-foreground fill-current" />
                  <span>Follow on GitHub</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
