"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useAnalytics } from "@/hooks/analytics/useAnalytics";
import { ChartSkeleton } from "@/components/analytics/AnalyticsSkeleton";

const TrafficChart = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const chartColor = isDark ? "#818cf8" : "#4f46e5";
  const labelColor = isDark ? "#94a3b8" : "#475569";
  const { data: analytics, isLoading, isError } = useAnalytics();

  if (isLoading) return <ChartSkeleton />;

  const monthlyData = [...(analytics?.monthlyTraffic || [])]
    .sort((a, b) => a.month.localeCompare(b.month))
    .slice(-6);

  const series = [
    {
      name: "Visitors",
      data: monthlyData.map((d) => d.users),
    },
  ];

  const formatMonth = (yyyymm: string) => {
    if (!yyyymm || yyyymm.length !== 6) return yyyymm;
    const year = yyyymm.substring(0, 4);
    const month = yyyymm.substring(4, 6);
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  };

  const categories = monthlyData.map((d) => formatMonth(d.month));

  const options: ApexOptions = {
    chart: {
      type: "area", // Area chart allows for fill gradient easier
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "inherit",
    },
    colors: [chartColor],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: [chartColor],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    grid: {
      borderColor: isDark ? "#334155" : "#e2e8f0",
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
          fontFamily: "inherit",
        },
      },
    },
    theme: {
      mode: isDark ? "dark" : "light",
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
      style: {
        fontSize: "12px",
      },
      x: {
        show: false,
      },
      marker: {
        show: true,
      },
    },
  };

  return (
    <div className="border-border bg-muted/50 h-full w-full rounded-xl border p-6 shadow-xl backdrop-blur-sm dark:bg-slate-900/50">
      <div className="mb-6">
        <h3 className="text-foreground text-lg font-semibold">Monthly Website Traffic</h3>
        <p className="text-muted-foreground text-sm">Last 6 months</p>
      </div>

      <div className="h-[250px] w-full sm:h-[350px]">
        {isError ? (
          <div className="text-muted-foreground flex h-full items-center justify-center text-sm">
            Failed to load traffic data
          </div>
        ) : (
          <Chart options={options} series={series} type="area" width="100%" height="100%" />
        )}
      </div>
    </div>
  );
};

export default TrafficChart;
