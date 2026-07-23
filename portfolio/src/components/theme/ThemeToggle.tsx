"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getPreferredTheme,
  toggleTheme,
  type Theme,
} from "@/lib/theme";

interface ThemeToggleProps {
  className?: string;
  /** 라벨+아이콘을 하나의 클릭 영역으로 (사이드바용) */
  showLabel?: boolean;
  /** 사이드바 호버 시 라벨 표시 */
  labelVisible?: boolean;
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
    </svg>
  );
}

export default function ThemeToggle({
  className = "",
  showLabel = false,
  labelVisible = false,
}: ThemeToggleProps) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getPreferredTheme();
    applyTheme(initial);
    setThemeState(initial);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setThemeState((current) => toggleTheme(current));
  };

  // 전환될 모드를 라벨로 표시 (Dark / Light)
  const nextLabel = theme === "dark" ? "Light" : "Dark";
  const ariaLabel =
    theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";

  const icon = !mounted ? (
    <span className="h-4 w-4" />
  ) : theme === "dark" ? (
    <SunIcon className="h-4 w-4" />
  ) : (
    <MoonIcon className="h-4 w-4" />
  );

  if (showLabel) {
    return (
      <button
        type="button"
        onClick={handleToggle}
        className={`group flex items-center justify-end gap-3 min-w-0 text-stone-500 transition-colors hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 dark:text-stone-400 dark:hover:text-amber-400 dark:focus-visible:ring-offset-stone-950 ${className}`}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        <span
          className={`shrink-0 text-s font-medium whitespace-nowrap transition-all duration-300 ease-out ${
            labelVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          {mounted ? nextLabel : "Dark"}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors group-hover:bg-stone-200/70 dark:group-hover:bg-stone-800">
          {icon}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-200/70 hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-amber-400 ${className}`}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {icon}
    </button>
  );
}
