"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtons from "@/components/button/SideButton";
import TopBar from "@/components/bar/TopBar";
import IntroductionFirstSection from "./IntroductionFirstSection";
import IntroductionSecondSection from "./IntroductionSecondSection";

export default function Introduction() {
    const dispatch = useDispatch();
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        dispatch(showBar('Introduction'));
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [dispatch]);

    const handleScrollToSection = (section: number) => {
        const targetSection = document.querySelectorAll('section')[section];
        targetSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="w-screen h-screen bg-gray-100 overflow-y-scroll scroll-start snap-y snap-mandatory animate-fadeIn">
            <div
                id="cursor-dot"
                className="absolute w-cursor h-cursor bg-orange-600 rounded-full transition-transform duration-150 ease-in-out pointer-events-none"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    transform: "translate(-50%, -50%)",
                    willChange: "transform",
                }}
            />
            <div
                id="cursor-dot-outline"
                className="absolute w-cursor-outline h-cursor-outline border border-red-500/30 rounded-full transition-transform duration-150 ease-in-out pointer-events-none"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    transform: "translate(-50%, -50%)",
                    willChange: "transform",
                }}
            />
            <IntroductionFirstSection onNext={() => handleScrollToSection(1)} />
            <IntroductionSecondSection onBack={() => handleScrollToSection(0)} />
            <SideButtons/>
            <TopBar/>
        </div>
    );
}
