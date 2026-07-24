"use client";

import { useEffect, useRef, useState } from "react";

type DotSpec = {
  top: string;
  left?: string;
  right?: string;
  size: string;
  color: string;
  delayMs: number;
};

/** 스크롤 영역에 흩어 두고, 화면에 들어올 때 나타나는 배경 점 */
const DOTS: DotSpec[] = [
  { top: "4%", left: "9%", size: "w-2 h-2", color: "bg-amber-400/45 dark:bg-amber-400/55", delayMs: 0 },
  { top: "11%", right: "14%", size: "w-1 h-1", color: "bg-amber-500/35 dark:bg-amber-500/50", delayMs: 80 },
  { top: "22%", left: "6%", size: "w-1.5 h-1.5", color: "bg-amber-500/40 dark:bg-amber-500/55", delayMs: 40 },
  { top: "34%", right: "9%", size: "w-2.5 h-2.5", color: "bg-amber-400/30 dark:bg-amber-400/45", delayMs: 120 },
  { top: "46%", left: "16%", size: "w-1 h-1", color: "bg-amber-500/35 dark:bg-amber-500/50", delayMs: 60 },
  { top: "58%", right: "18%", size: "w-2 h-2", color: "bg-amber-400/40 dark:bg-amber-400/50", delayMs: 100 },
  { top: "69%", left: "8%", size: "w-1.5 h-1.5", color: "bg-amber-500/40 dark:bg-amber-500/55", delayMs: 20 },
  { top: "81%", right: "11%", size: "w-1 h-1", color: "bg-amber-400/35 dark:bg-amber-400/50", delayMs: 140 },
  { top: "91%", left: "20%", size: "w-2 h-2", color: "bg-amber-500/30 dark:bg-amber-500/45", delayMs: 50 },
];

function AmbientDot({ top, left, right, size, color, delayMs }: DotSpec) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute rounded-full pointer-events-none transition-opacity duration-700 ease-out ${size} ${color} ${
        visible ? "opacity-100 animate-float" : "opacity-0"
      }`}
      style={{
        top,
        left,
        right,
        transitionDelay: visible ? `${delayMs}ms` : "0ms",
        animationDelay: `${delayMs}ms`,
      }}
      aria-hidden
    />
  );
}

export default function AmbientDots() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {DOTS.map((dot, index) => (
        <AmbientDot key={index} {...dot} />
      ))}
    </div>
  );
}
