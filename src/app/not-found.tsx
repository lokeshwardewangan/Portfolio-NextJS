import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import Link from "next/link";
import { AlertCircle, Home, FileText, Code, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-grid-white/[0.02] relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 pb-12 antialiased">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
        <div className="absolute top-[-10%] left-[-10%] h-96 w-96 animate-pulse rounded-full bg-red-500/10 opacity-40 blur-[100px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-96 w-96 animate-pulse rounded-full bg-purple-500/10 opacity-40 blur-[100px] delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-lg p-4">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            404 - Page Not Found
          </h1>
          <p className="text-sm text-neutral-400 md:text-base">
            The requested resource could not be found.
          </p>
        </div>

        <Card className="relative w-full overflow-hidden border border-white/10 bg-black/5 py-8 shadow-2xl backdrop-blur-2xl">
          <ShineBorder
            className="z-0 p-px"
            shineColor={["#EF4444", "#F59E0B", "#10B981"]}
            duration={10}
            borderWidth={1.5}
          />
          <div className="relative z-10 h-full w-full rounded-[inherit] bg-transparent">
            <CardHeader className="px-8">
              <CardTitle className="flex items-center gap-2 text-xl text-white">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Resource Recovery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-8 text-neutral-300">
              <p className="text-sm leading-relaxed">
                If you are an automated AI agent or web crawler, you can find the complete
                machine-readable index at{" "}
                <Link href="/llms.txt" className="text-red-400 underline hover:text-red-300">
                  /llms.txt
                </Link>
                .
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <Home className="h-5 w-5 text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-white">Home Page</h3>
                    <p className="text-xs text-neutral-400">
                      Return to the main portfolio landing page.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/projects"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <Code className="h-5 w-5 text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">Projects</h3>
                    <p className="text-xs text-neutral-400">
                      Browse built platforms and systems architecture.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/skills"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <FileText className="h-5 w-5 text-pink-400" />
                  <div>
                    <h3 className="font-semibold text-white">Skills</h3>
                    <p className="text-xs text-neutral-400">
                      View technical arsenal and integrations.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-orange-400" />
                  <div>
                    <h3 className="font-semibold text-white">Contact</h3>
                    <p className="text-xs text-neutral-400">Submit an inquiry or get in touch.</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
