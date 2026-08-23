import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { User, Briefcase, Award, Code, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-grid-white/[0.02] relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 pb-12 antialiased">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
        <div className="absolute top-[-10%] left-[-10%] h-96 w-96 animate-pulse rounded-full bg-purple-500/20 opacity-50 blur-[100px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-96 w-96 animate-pulse rounded-full bg-blue-500/20 opacity-50 blur-[100px] delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-2xl p-4">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            About Me
          </h1>
          <p className="text-sm text-neutral-400 md:text-base">
            Professional background and development principles.
          </p>
        </div>

        <Card className="relative w-full overflow-hidden border border-white/10 bg-black/5 py-8 shadow-2xl backdrop-blur-2xl">
          <ShineBorder
            className="z-0 p-px"
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            duration={10}
            borderWidth={1.5}
          />
          <div className="relative z-10 h-full w-full rounded-[inherit] bg-transparent">
            <CardHeader className="px-8">
              <CardTitle className="flex items-center gap-2 text-xl text-white">
                <User className="h-5 w-5 text-purple-400" />
                Lokeshwar Prasad Dewangan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-8 text-neutral-300">
              <p className="text-sm leading-relaxed md:text-base">
                I am a results-oriented Full-Stack Engineer who specializes in building robust
                software systems, production-ready AI applications, and premium user interfaces.
                With a strong foundation in modern web architectures and systems design, I focus on
                delivering clean, maintainable, and high-performance codebases.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Briefcase className="mt-1 h-5 w-5 shrink-0 text-pink-400" />
                  <div>
                    <h3 className="font-semibold text-white">Full-Stack Architecture</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      Designing end-to-end applications using React, Next.js, and Node.js.
                      Experienced in state management, responsive grid layouts, database
                      normalization, and secure authentication setups.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Code className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">AI & Agentic Engineering</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      Pioneering agentic integration via LLMs (Gemini, OpenAI), complex
                      orchestration structures (LangChain, LangGraph), vector databases (ChromaDB),
                      and scalable workflow automation platforms (n8n).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Award className="mt-1 h-5 w-5 shrink-0 text-orange-400" />
                  <div>
                    <h3 className="font-semibold text-white">Key Achievements</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      Built Nexus AI (RAG workspace supporting document citations across multi-model
                      setups), Qualifyrs (high-concurrency online interview and scoring platform),
                      and Budgetter (multi-user finance application powered by automated
                      receipt-processing AI agents).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Globe className="mt-1 h-5 w-5 shrink-0 text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-white">Open Collaboration</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      I value collaboration with human developers and autonomous AI agents alike.
                      The API routing layout of this site is configured to accept machine-readable
                      payloads for seamless communication.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
