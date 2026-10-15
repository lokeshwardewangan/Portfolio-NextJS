import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import Link from "next/link";
import { AlertCircle, Home, FileText, Code, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-grid-white/[0.02] relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 pb-12 antialiased">
      {/* Ambient Background Glows */}
      <div className="bg-card/80 pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
        <div className="absolute top-[-10%] left-[-10%] h-96 w-96 animate-pulse rounded-full bg-red-500/10 opacity-40 blur-[100px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-96 w-96 animate-pulse rounded-full bg-purple-500/10 opacity-40 blur-[100px] delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-lg p-4">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="bg-linear-to-b from-slate-950 to-slate-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl dark:from-neutral-50 dark:to-neutral-400">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            The requested resource could not be found.
          </p>
        </div>

        <Card className="border-border bg-card/80 relative w-full overflow-hidden border py-8 shadow-2xl backdrop-blur-2xl dark:bg-black/5">
          <ShineBorder
            className="z-0 p-px"
            shineColor={["#EF4444", "#F59E0B", "#10B981"]}
            duration={10}
            borderWidth={1.5}
          />
          <div className="relative z-10 h-full w-full rounded-[inherit] bg-transparent">
            <CardHeader className="px-8">
              <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Resource Recovery
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground space-y-6 px-8">
              <p className="text-sm leading-relaxed">
                If you are an automated AI agent or web crawler, you can find the complete
                machine-readable index at{" "}
                <Link
                  href="/llms.txt"
                  className="text-red-700 underline hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  /llms.txt
                </Link>
                .
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  href="/"
                  className="border-border bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-lg border p-3 transition-colors"
                >
                  <Home className="h-5 w-5 text-purple-700 dark:text-purple-400" />
                  <div>
                    <h3 className="text-foreground font-semibold">Home Page</h3>
                    <p className="text-muted-foreground text-xs">
                      Return to the main portfolio landing page.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/projects"
                  className="border-border bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-lg border p-3 transition-colors"
                >
                  <Code className="h-5 w-5 text-cyan-700 dark:text-cyan-400" />
                  <div>
                    <h3 className="text-foreground font-semibold">Projects</h3>
                    <p className="text-muted-foreground text-xs">
                      Browse built platforms and systems architecture.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/skills"
                  className="border-border bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-lg border p-3 transition-colors"
                >
                  <FileText className="h-5 w-5 text-pink-700 dark:text-pink-400" />
                  <div>
                    <h3 className="text-foreground font-semibold">Skills</h3>
                    <p className="text-muted-foreground text-xs">
                      View technical arsenal and integrations.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="border-border bg-foreground/5 hover:bg-foreground/10 flex items-center gap-3 rounded-lg border p-3 transition-colors"
                >
                  <Mail className="h-5 w-5 text-orange-700 dark:text-orange-400" />
                  <div>
                    <h3 className="text-foreground font-semibold">Contact</h3>
                    <p className="text-muted-foreground text-xs">
                      Submit an inquiry or get in touch.
                    </p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </main>
  );
}
