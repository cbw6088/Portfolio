"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter, usePathname } from "next/navigation";

const TopBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { isVisible, barType } = useSelector((state: RootState) => state.bar);
    const [showOnMobile, setShowOnMobile] = useState(true);
    const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const scrollEl = document.querySelector("main");
        if (!scrollEl) return;

        const handleScroll = () => {
            // 데스크톱 이상에서는 항상 보이도록
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

    const handleHomeClick = () => {
        router.push('/');
    }
    const handleIntroductionClick = () => {
        router.push('/introduction_test');
    }
    const handleProjectClick = () => {
        router.push('/project_test');
    }
    const handleStudyClick = () => {
        router.push('/study');
    }

    if (!isVisible || !barType) return null;

    const renderButtons = () => {
        return (
            <div className="flex items-center justify-between px-4 py-2">
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        pathname === '/' ? 'text-amber-600' : 'text-stone-700'
                    }`}
                    onClick={handleHomeClick}
                >
                    PORTFOLIO
                </button>
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        pathname === '/introduction_test' ? 'text-amber-600' : 'text-stone-700'
                    }`}
                    onClick={handleIntroductionClick}
                >
                    INTRODUCTION
                </button>
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        pathname === '/project_test' ? 'text-amber-600' : 'text-stone-700'
                    }`}
                    onClick={handleProjectClick}
                >
                    PROJECT
                </button>
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        pathname === '/study' ? 'text-amber-600' : 'text-stone-700'
                    }`}
                    onClick={handleStudyClick}
                >
                    STUDY
                </button>
            </div>
        );
    };

    return (
        <div
            className={`block sm:hidden fixed top-2 left-0 w-full py-2 z-50 transition-opacity duration-300 ${
                showOnMobile ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="mx-3 rounded-full bg-stone-50/85 backdrop-blur-sm shadow-sm">
                {renderButtons()}
            </div>
        </div>
    );
};

export default TopBar;
