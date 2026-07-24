"use client";

import { useEffect, useState } from "react";

export function useChartTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return {
    isDark,
    axis: isDark ? "#a8a29e" : "#78716c",
    grid: isDark ? "rgba(168,162,158,0.15)" : "rgba(120,113,108,0.18)",
    tooltipBg: isDark ? "#1c1917" : "#ffffff",
    tooltipBorder: isDark ? "#44403c" : "#e7e5e4",
    tooltipText: isDark ? "#f5f5f4" : "#292524",
    bar: "#d97706",
    barMuted: isDark ? "#57534e" : "#d6d3d1",
    pie: [
      "#d97706",
      "#b45309",
      "#92400e",
      "#a8a29e",
      "#78716c",
      "#57534e",
      "#44403c",
    ],
  };
}
