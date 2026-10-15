"use client";

import { motion } from "motion/react";
import { Award, Medal, Trophy, CheckCircle2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    id: 1,
    title: "Award-Winning Smart Canteen Project — Aavishkar 2024",
    description:
      "Won 1st place in the Aavishkar 2024 innovation program for developing SMART-CANTEEN — a scalable campus food ordering and digital payment platform solving real-world canteen congestion.",
    link: "https://www.linkedin.com/posts/lokeshwar-dewangan-7b2163211_avishkar-softwareinnovation-techleadership-activity-7167142733273407488-dDt-",
    icon: Trophy,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Best Student & Academic Semester Topper Award",
    description:
      "Honored to receive the Best Student Award 🏆 and Academic Semester Topper Award 📚 in recognition of consistent academic excellence, dedication, and continuous learning.",
    link: "https://www.linkedin.com/posts/lokeshwar-dewangan-7b2163211_academicexcellence-grateful-achievement-activity-7289244658864459776-Bmbt",
    icon: Award,
    gradient: "from-blue-400 to-indigo-500",
  },
];

const certifications = [
  {
    title: "NPTEL Certified in JAVA Programming",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S95270002530563039",
  },
  {
    title: "IBM Skillbuild Certified in Web Development",
    link: "https://www.credly.com/badges/7a6397fe-6533-47a2-86dc-6600aff967ce/linked_in?t=saek8x",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    link: "https://api.badgr.io/public/assertions/X2aHNIvcRneM6m7H7FIk4A",
  },
];

export const AchievementsSection = () => {
  return (
    <section className="bg-card/80 relative z-10 w-full overflow-hidden px-6 py-12 lg:px-12 lg:py-20 dark:bg-black/10">
      <div className="container mx-auto max-w-4xl 2xl:max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-wide sm:text-4xl 2xl:text-5xl">
              <span className="bg-linear-to-r from-amber-700 via-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-amber-400 dark:via-yellow-400 dark:to-orange-400">
                Milestones & Recognition
              </span>
            </h2>
            <p className="text-muted-foreground dark:text-muted-foreground/80 text-xs tracking-wide sm:text-xs 2xl:text-base">
              Awards, certifications, and moments where hard work paid off.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Achievements Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-foreground mb-2 flex items-center gap-3 text-xl font-bold">
              <Medal className="text-yellow-500" />
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-border bg-card/80 hover:border-border hover:bg-card/80 relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all dark:bg-black/20 dark:hover:bg-black/40"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "mt-1 rounded-full bg-linear-to-br p-3 shadow-lg",
                      achievement.gradient
                    )}
                  >
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2 text-lg font-bold">
                      {achievement.link ? (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-700 dark:hover:text-blue-400"
                        >
                          {achievement.title}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        achievement.title
                      )}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                {/* Background Glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-10",
                    achievement.gradient.replace("from-", "bg-")
                  )}
                />
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-foreground mt-8 mb-2 flex items-center gap-3 text-xl font-bold lg:mt-0">
              <Award className="text-blue-500" />
              Certifications
            </h3>
            <div className="border-border bg-card/80 flex h-full flex-col justify-center gap-6 rounded-2xl border p-8 backdrop-blur-md dark:bg-black/20">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group flex items-center gap-4"
                >
                  <div className="shrink-0 rounded-full bg-emerald-500/20 p-2 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white dark:text-emerald-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground group-hover:text-foreground flex items-center gap-1.5 text-base transition-colors hover:text-blue-700 hover:underline dark:hover:text-blue-400"
                  >
                    {cert.title}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
