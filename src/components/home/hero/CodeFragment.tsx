"use client";

export const CodeFragment = () => {
  return (
    <div className="border-border bg-card/95 relative w-full max-w-[340px] overflow-hidden rounded-xl border shadow-2xl backdrop-blur-md dark:bg-[#1e1e1e]/95">
      {/* Window Controls - Authentic macOS spacing */}
      <div className="border-border bg-foreground/5 flex items-center gap-2 border-b px-4 py-3">
        <div className="h-3 w-3 rounded-full border border-[#E0443E] bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full border border-[#D89E24] bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full border border-[#1AAB29] bg-[#28C840]" />
        <div className="text-muted-foreground dark:text-foreground/60 ml-2 text-[10px] tracking-wide">
          developer.ts
        </div>
      </div>

      {/* Code Content - Syntax Highlighting */}
      <div className="text-foreground/80 p-5 text-xs leading-6 sm:text-[13px]">
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          {/* Line Numbers */}
          <div className="text-muted-foreground flex flex-col text-right font-medium select-none">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div>
          {/* Code */}
          <div className="overflow-x-auto tracking-wide">
            <p>
              <span className="font-semibold text-purple-700 dark:text-purple-400">const</span>{" "}
              <span className="text-yellow-700 dark:text-yellow-300">Developer</span>{" "}
              <span className="text-foreground">=</span>{" "}
              <span className="text-foreground">{"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-blue-700 dark:text-blue-300">name</span>:{" "}
              <span className="text-green-700 dark:text-green-400">&quot;Lokeshwar&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-blue-700 dark:text-blue-300">role</span>:{" "}
              <span className="text-green-700 dark:text-green-400">
                &quot;Full Stack Engineer&quot;
              </span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-blue-700 dark:text-blue-300">focus</span>:{" "}
              <span className="text-foreground">[</span>
            </p>
            <p className="pl-8">
              <span className="text-orange-700 dark:text-orange-300">&quot;React&quot;</span>,{" "}
              <span className="text-orange-700 dark:text-orange-300">&quot;Next.js&quot;</span>,
            </p>
            <p className="pl-8">
              <span className="text-orange-700 dark:text-orange-300">&quot;Performance&quot;</span>,{" "}
              <span className="text-orange-700 dark:text-orange-300">&quot;UX&quot;</span>
            </p>
            <p className="pl-4">
              <span className="text-foreground">]</span>
            </p>
            <p>
              <span className="text-foreground">{"}"}</span>;
            </p>
          </div>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/5 via-white/0 to-transparent opacity-40" />
    </div>
  );
};
