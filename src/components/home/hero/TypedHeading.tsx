"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

type TypedWord = { text: string; gradient: string };

const TYPED_WORDS: TypedWord[] = [
  { text: "Scalable Systems", gradient: "from-pink-500 to-orange-400" },
  { text: "AI-Powered Products", gradient: "from-yellow-400 to-amber-500" },
  { text: "Web Apps", gradient: "from-violet-500 to-pink-500" },
  { text: "Modern Interfaces", gradient: "from-cyan-400 to-blue-500" },
];

export const TypedHeading = () => {
  const typedEl = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const [gradientClass, setGradientClass] = useState(TYPED_WORDS[0].gradient);

  useEffect(() => {
    typed.current = new Typed(typedEl.current, {
      strings: TYPED_WORDS.map((w) => w.text),
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2200,
      loop: true,
      showCursor: false,
      autoInsertCss: false,
      preStringTyped: (arrayPos: number) => {
        setGradientClass(TYPED_WORDS[arrayPos]?.gradient ?? TYPED_WORDS[0].gradient);
      },
    });

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <p className="text-muted-foreground text-sm font-semibold tracking-[0.12em]">
        Full Stack Engineer
      </p>
      <h1
        className="flex flex-col items-center justify-center gap-x-[0.25em] text-[clamp(1.25rem,6vw,1.7rem)] leading-tight font-bold sm:flex-row sm:flex-wrap sm:items-baseline sm:text-[2rem] lg:justify-start lg:text-[2.25rem] xl:text-[2.5rem] 2xl:text-[3rem]"
        aria-label="I build Scalable Systems, AI-Powered Products, Web Apps, and Modern Interfaces"
      >
        <span className="text-foreground/70 whitespace-nowrap" aria-hidden="true">
          I build
        </span>
        <span className="inline-grid min-w-0 align-baseline" aria-hidden="true">
          {/* Reserve the longest phrase so typing never moves the surrounding content. */}
          {TYPED_WORDS.map(({ text }) => (
            <span key={text} className="invisible col-start-1 row-start-1 whitespace-nowrap">
              {text}
              <span className="ml-[0.08em]">|</span>
            </span>
          ))}
          <span className="col-start-1 row-start-1 whitespace-nowrap">
            <span
              ref={typedEl}
              className={`bg-linear-to-r bg-clip-text text-transparent ${gradientClass}`}
            >
              Scalable Systems
            </span>
            <span className="typed-cursor text-foreground/70 ml-[0.08em]">|</span>
          </span>
        </span>
      </h1>
    </div>
  );
};
