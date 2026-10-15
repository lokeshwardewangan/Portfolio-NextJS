"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
      className="border-border bg-background/80 text-foreground hover:bg-accent focus-visible:ring-ring focus-visible:ring-offset-background relative inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border shadow-sm backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <Moon aria-hidden="true" className="h-4 w-4 dark:hidden" />
      <Sun aria-hidden="true" className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
