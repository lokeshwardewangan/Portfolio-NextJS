import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { Shield, Eye, Lock, RefreshCw, Mail } from "lucide-react";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-400 md:text-base">
            How we handle data, analytics, and programmatic requests.
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
                <Shield className="h-5 w-5 text-purple-400" />
                Data Protection & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-8 text-neutral-300">
              <p className="text-sm leading-relaxed md:text-base">
                Your privacy is of utmost importance to me. This policy outlines how information is
                gathered, processed, and secured on this portfolio website. We strive to protect any
                user or agent-submitted data with strict technical architecture and secure
                databases.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Eye className="mt-1 h-5 w-5 shrink-0 text-pink-400" />
                  <div>
                    <h3 className="font-semibold text-white">Information Collection</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      We collect basic information when you fill out the contact form or submit a
                      request programmatically via the contact API. This includes your name, email
                      address, message subject, and content body. This data is exclusively used to
                      respond to your inquiry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Lock className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">Security & Retention</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      All communications are encrypted using standard HTTPS protocols. Contact
                      submissions are stored securely and are only retained as long as necessary to
                      address your request. Under no circumstances do we sell, rent, or share user
                      or agent information with third parties.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <RefreshCw className="mt-1 h-5 w-5 shrink-0 text-orange-400" />
                  <div>
                    <h3 className="font-semibold text-white">Analytics & Tracking</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      We run anonymized Google Tag Manager analytics to track page views and basic
                      engagement. No personally identifiable information (PII) is captured. IP
                      addresses are masked, and tracking is configured to defer loading until
                      initial page rendering is complete.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-white">Contact & Requests</h3>
                    <p className="text-xs text-neutral-400 md:text-sm">
                      If you have questions regarding this privacy policy or would like to request
                      the deletion of your submitted contact details, please get in touch through
                      the contact page or by emailing contact@lokeshwardewangan.in.
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
