"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = (props: ToasterProps) => (
  <Sonner
    theme="dark"
    position="top-center"
    className="toaster group font-overpass"
    toastOptions={{
      classNames: {
        toast:
          "group toast font-overpass relative overflow-hidden group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        title: "font-overpass",
        description: "font-overpass group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-overpass",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-overpass",
        success:
          "before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[3px] before:bg-emerald-500/80 before:content-[''] [&_[data-icon]]:text-emerald-400",
        error:
          "before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[3px] before:bg-rose-500/80 before:content-[''] [&_[data-icon]]:text-rose-400",
        info: "before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[3px] before:bg-sky-500/80 before:content-[''] [&_[data-icon]]:text-sky-400",
        warning:
          "before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[3px] before:bg-amber-500/80 before:content-[''] [&_[data-icon]]:text-amber-400",
      },
    }}
    {...props}
  />
);

export { Toaster };
