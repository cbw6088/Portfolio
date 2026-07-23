"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { setCurrentPage } from "@/feature/button/SideButtonSlice";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";

const pageLabels = ["Portfolio", "Introduction", "Project", "Study"];
const pageRoutes = ["/", "/introduction", "/project", "/study"];

export default function SideButtonTest() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.button.currentPage);
  const [hovered, setHovered] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const saveScrollPosition = () => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem("scrollPosition", JSON.stringify(window.scrollY));
  };

  const restoreScrollPosition = () => {
    if (typeof window === "undefined") return;
    const saved = sessionStorage.getItem("scrollPosition");
    if (saved) window.scrollTo(0, JSON.parse(saved));
  };

  const saveCurrentPage = (index: number) => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem("currentPage", JSON.stringify(index));
  };

  const restoreCurrentPage = () => {
    if (typeof window === "undefined") return;
    const saved = sessionStorage.getItem("currentPage");
    if (saved) dispatch(setCurrentPage(JSON.parse(saved)));
  };

  useEffect(() => {
    restoreScrollPosition();
    restoreCurrentPage();
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const path = pathname ?? "";
    const routeIndex = pageRoutes.indexOf(path);
    const index = routeIndex !== -1 ? routeIndex : -1;
    if (index !== -1) dispatch(setCurrentPage(index));
  }, [pathname, dispatch]);

  const handleClick = (index: number) => {
    saveScrollPosition();
    saveCurrentPage(index);
    dispatch(setCurrentPage(index));
    router.push(pageRoutes[index]);
  };

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    // 클릭 중 살짝 벗어나도 바로 접히지 않도록
    leaveTimerRef.current = setTimeout(() => {
      setHovered(false);
      leaveTimerRef.current = null;
    }, 120);
  };

  return (
    <nav
      className={`hidden md:flex fixed right-0 top-0 bottom-0 flex-col overflow-hidden border-l border-stone-200/80 bg-stone-50/90 backdrop-blur-sm transition-[width] duration-300 ease-out dark:border-stone-700/80 dark:bg-stone-950/90 ${
        hovered ? "w-44" : "w-14"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: 1000 }}
      aria-label="페이지 네비게이션"
    >
      <div className="flex shrink-0 justify-end pr-3 pt-4 min-w-0">
        <ThemeToggle showLabel labelVisible={hovered} />
      </div>

      <div className="flex flex-1 flex-col justify-center items-end gap-5 pr-3 min-w-0 pb-4">
        {pageLabels.map((label, index) => {
          const isActive = currentPage === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(index)}
              className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950"
              aria-label={`${label} 페이지로 이동`}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className={`absolute right-full mr-3 text-s font-medium whitespace-nowrap transition-all duration-300 ease-out ${
                  hovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 pointer-events-none"
                } ${
                  isActive
                    ? "text-amber-600"
                    : "text-stone-500 group-hover:text-amber-500"
                }`}
              >
                {label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? "w-2.5 h-2.5 bg-amber-600 shadow-[0_0_0_2px_rgba(217,119,6,0.2)]"
                    : "w-2 h-2 border-2 border-stone-400 group-hover:border-amber-500/70 group-hover:scale-110 dark:border-stone-500"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
