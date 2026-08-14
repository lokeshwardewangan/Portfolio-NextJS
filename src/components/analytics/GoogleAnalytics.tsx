"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleAnalytics() {
  const [loadGA, setLoadGA] = useState(false);
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!GA_ID) return;

    const handleInteraction = () => {
      setLoadGA(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("mousemove", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction, { passive: true });

    // Fallback to load on idle or after 4 seconds if no interaction
    let idleId: number | ReturnType<typeof setTimeout>;
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        idleId = requestIdleCallback(() => {
          setTimeout(() => setLoadGA(true), 2000);
        });
      } else {
        idleId = setTimeout(() => setLoadGA(true), 4000);
      }
    }

    return () => {
      cleanup();
      if (idleId) {
        if (
          typeof window !== "undefined" &&
          "cancelIdleCallback" in window &&
          typeof idleId === "number"
        ) {
          cancelIdleCallback(idleId);
        } else {
          clearTimeout(idleId);
        }
      }
    };
  }, [GA_ID]);

  if (!GA_ID || !loadGA) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
