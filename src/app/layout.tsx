import type { Metadata } from "next";
import { Overpass, Bree_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import QueryProvider from "@/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";

import Backgrounds from "@/components/layouts/Backgrounds";
import { TopNavbar } from "@/components/layouts/TopNavbar";
// import { ScrollToTop } from "@/components/ui/scroll-to-top";
// import { BugButton } from "@/components/ui/bug-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingAssistantWrapper from "@/components/assistant/FloatingAssistantWrapper";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokeshwar Prasad Dewangan",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" crossOrigin="anonymous" />
      </head>
      <body
        suppressHydrationWarning
        className={`${overpass.variable} ${breeSerif.variable} font-overpass dark antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <QueryProvider>
            <TooltipProvider>
              <TopNavbar />
              <Toaster />
              <Backgrounds />
              {/* <ScrollToTop /> */}
              {/* <BugButton /> */}
              <FloatingAssistantWrapper />
              {children}
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
