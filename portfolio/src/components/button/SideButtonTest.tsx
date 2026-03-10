"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { setCurrentPage } from "@/feature/button/SideButtonSlice";
import { useRouter, usePathname } from "next/navigation";

const pageLabels = ["Portfolio", "Introduction", "Project", "Study"];
const pageRoutes = ["/", "/introduction", "/project", "/study"];

export default function SideButtonTest() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.button.currentPage);
  const [hovered, setHovered] = useState(false);

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

  return (
    <nav
      className={`hidden md:flex fixed right-0 top-0 bottom-0 flex-col justify-center overflow-hidden border-l border-stone-200/80 bg-stone-50/90 backdrop-blur-sm transition-[width] duration-300 ease-out ${
        hovered ? "w-44" : "w-14"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ zIndex: 1000 }}
      aria-label="페이지 네비게이션"
    >
      <div className="flex flex-col justify-center items-end gap-5 pr-3 min-w-0">
        {pageLabels.map((label, index) => {
          const isActive = currentPage === index;
          return (
            <div
              key={index}
              className="group flex items-center gap-3 min-w-0"
            >
              <span
                role="button"
                tabIndex={0}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(index);
                  }
                }}
                className={`shrink-0 text-s font-medium whitespace-nowrap transition-all duration-300 ease-out cursor-pointer ${
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
              <button
                type="button"
                onClick={() => handleClick(index)}
                className="relative flex shrink-0 items-center justify-center w-10 h-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2"
                aria-label={`${label} 페이지로 이동`}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "w-2.5 h-2.5 bg-amber-600 shadow-[0_0_0_2px_rgba(217,119,6,0.2)]"
                      : "w-2 h-2 border-2 border-stone-400 group-hover:border-amber-500/70 group-hover:scale-110"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

