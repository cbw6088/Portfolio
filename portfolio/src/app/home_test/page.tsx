"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import {
  HomeBackground,
  HomeCursor,
  HomeHero,
  HomeContact,
} from "./components";
import { HOME_LINKS, HOME_TAGLINE, HOME_NAME } from "./constants";

export default function HomeTest() {
  const dispatch = useDispatch();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch(showBar("Home"));
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [dispatch]);

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 overflow-hidden animate-fadeIn flex flex-col">
        <HomeCursor x={cursorPosition.x} y={cursorPosition.y} />
        <HomeBackground />

        <main className="relative flex-1 flex flex-col items-center justify-center min-h-0 overflow-hidden px-6 py-6 sm:py-8">
          <div className="max-w-2xl w-full text-center space-y-3 sm:space-y-5 overflow-hidden">
            <HomeHero mounted={mounted} tagline={HOME_TAGLINE} />
            <HomeContact
              mounted={mounted}
              name={HOME_NAME}
              links={HOME_LINKS}
            />
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
