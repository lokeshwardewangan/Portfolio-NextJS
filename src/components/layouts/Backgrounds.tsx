"use client";

import dynamic from "next/dynamic";

const DynamicBackground = dynamic(() => import("@/components/background/DynamicBackground"), {
  ssr: false,
});

const Meteors = dynamic(() => import("@/components/ui/meteors").then((mod) => mod.Meteors), {
  ssr: false,
});

import { useEffect, useState } from "react";

export default function Backgrounds() {
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );
    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;
    let frameId: number | undefined;

    const cancelPending = () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) clearTimeout(timerId);
      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };

    const updateEffects = () => {
      cancelPending();
      if (!media.matches) {
        setShowEffects(false);
        return;
      }

      if (document.readyState !== "complete") return;

      // Let the loaded hero paint before competing for the main thread and GPU.
      frameId = requestAnimationFrame(() => {
        frameId = requestAnimationFrame(() => {
          if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(() => setShowEffects(media.matches));
          } else {
            timerId = setTimeout(() => setShowEffects(media.matches), 200);
          }
        });
      });
    };

    updateEffects();
    window.addEventListener("load", updateEffects, { once: true });
    media.addEventListener("change", updateEffects);
    return () => {
      cancelPending();
      window.removeEventListener("load", updateEffects);
      media.removeEventListener("change", updateEffects);
    };
  }, []);

  if (!showEffects) return null;

  return (
    <>
      <DynamicBackground />
      {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
      <Meteors number={10} />
    </>
  );
}
