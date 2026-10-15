"use client";

import { useTheme } from "next-themes";
import LightRays from "../LightRays";

export function LightRaysCanvas() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="pointer-events-none fixed h-full w-full opacity-40 dark:opacity-100">
      <LightRays
        raysOrigin="top-center"
        raysColor={resolvedTheme === "dark" ? "#ffffff" : "#8b5cf6"}
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
      {/* <Particles
                particleColors={["#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
            /> */}

      {/* <Galaxy
                mouseRepulsion
                mouseInteraction
                density={1}
                glowIntensity={0.3}
                saturation={0}
                hueShift={140}
                twinkleIntensity={0.3}
                rotationSpeed={0.1}
                repulsionStrength={2}
                autoCenterRepulsion={0}
                starSpeed={0.5}
                speed={1}
            /> */}
    </div>
  );
}
