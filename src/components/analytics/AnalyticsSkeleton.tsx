import { Skeleton } from "@/components/ui/skeleton";

export const ChartSkeleton = () => {
  return (
    <div className="border-border bg-muted/50 h-full w-full rounded-xl border p-6 shadow-xl backdrop-blur-sm dark:bg-slate-900/50">
      <div className="mb-6 space-y-2">
        <Skeleton className="bg-muted h-6 w-48 dark:bg-slate-800" />
        <Skeleton className="bg-muted/60 h-4 w-24 dark:bg-slate-800/60" />
      </div>
      <div className="flex h-[300px] w-full items-end gap-2">
        {/* Simulate bars or area */}
        <Skeleton className="bg-muted/30 h-[40%] w-full rounded-t dark:bg-slate-800/30" />
        <Skeleton className="bg-muted/30 h-[60%] w-full rounded-t dark:bg-slate-800/30" />
        <Skeleton className="bg-muted/30 h-[80%] w-full rounded-t dark:bg-slate-800/30" />
        <Skeleton className="bg-muted/30 h-[50%] w-full rounded-t dark:bg-slate-800/30" />
        <Skeleton className="bg-muted/30 h-[70%] w-full rounded-t dark:bg-slate-800/30" />
        <Skeleton className="bg-muted/30 h-[90%] w-full rounded-t dark:bg-slate-800/30" />
      </div>
    </div>
  );
};

export const StatCardSkeleton = () => {
  return (
    <div className="border-border bg-foreground/5 relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <Skeleton className="bg-muted/50 h-4 w-24 dark:bg-slate-700/50" />
          <Skeleton className="bg-muted/50 h-8 w-32 dark:bg-slate-700/50" />
          <Skeleton className="bg-muted/30 h-3 w-40 dark:bg-slate-700/30" />
        </div>
        <Skeleton className="bg-muted/30 h-10 w-10 rounded-lg dark:bg-slate-700/30" />
      </div>
    </div>
  );
};
