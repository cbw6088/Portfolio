"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isVisible, barType } = useSelector((state: RootState) => state.bar);
  const [showOnMobile, setShowOnMobile] = useState(true);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollEl = document.querySelector("main");
    if (!scrollEl) return;

    const handleScroll = () => {
      if (window.innerWidth >= 640) {
        setShowOnMobile(true);
        return;
      }

      const atTop = (scrollEl as HTMLElement).scrollTop === 0;

      if (atTop) {
        setShowOnMobile(true);
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
          hideTimerRef.current = null;
        }
        return;
      }

      setShowOnMobile(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setShowOnMobile(false);
      }, 2000);
    };

    scrollEl.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
  }, []);

  const navClass = (href: string) =>
    `px-1.5 sm:px-2 text-[11px] sm:text-sm font-LilitaOne tracking-wider ${
      pathname === href
        ? "text-amber-600"
        : "text-stone-700 dark:text-stone-300"
    }`;

  if (!isVisible || !barType) return null;

  return (
    <div
      className={`block sm:hidden fixed top-2 left-0 w-full py-2 z-50 transition-opacity duration-300 ${
        showOnMobile
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-3 rounded-full bg-stone-50/85 backdrop-blur-sm shadow-sm dark:bg-stone-900/85 dark:shadow-stone-950/40">
        <div className="flex items-center gap-0.5 px-2 py-1.5">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-0.5 overflow-x-auto">
            <button
              type="button"
              className={navClass("/")}
              onClick={() => router.push("/")}
            >
              PORTFOLIO
            </button>
            <button
              type="button"
              className={navClass("/introduction")}
              onClick={() => router.push("/introduction")}
            >
              INTRO
            </button>
            <button
              type="button"
              className={navClass("/project")}
              onClick={() => router.push("/project")}
            >
              PROJECT
            </button>
            <button
              type="button"
              className={navClass("/study")}
              onClick={() => router.push("/study")}
            >
              STUDY
            </button>
            <button
              type="button"
              className={navClass("/insights")}
              onClick={() => router.push("/insights")}
            >
              INSIGHTS
            </button>
          </div>
          <div className="ml-1 h-4 w-px shrink-0 bg-stone-300/80 dark:bg-stone-600" />
          <ThemeToggle className="ml-0.5" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
