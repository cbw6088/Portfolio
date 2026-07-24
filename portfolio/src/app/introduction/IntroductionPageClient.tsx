"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import HomeBackground from "@/app/components/HomeBackground";
import AmbientDots from "@/app/components/AmbientDots";
import TitleGlow from "@/app/components/TitleGlow";
import {
  IntroProfile,
  IntroEducation,
  IntroExperience,
  IntroDocuments,
  IntroStacks,
  IntroStrengths,
  IntroLighthouseBadge,
} from "./components";

export default function IntroductionPageClient() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn dark:bg-stone-950 dark:text-stone-100">
        <HomeBackground showGlow={false} />
        <main className="relative flex-1 min-h-0 overflow-y-auto">
          <div className="relative">
            <AmbientDots />
            <div className="relative z-10 max-w-2xl mx-auto px-6 pt-20 pb-8 sm:py-12">
              <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
                Introduction
              </p>
              <p className="relative inline-block font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-8 dark:text-stone-100">
                <TitleGlow />
                Profile
              </p>

              <IntroProfile />
              <IntroEducation />
              <IntroExperience />
              <IntroDocuments />
              <IntroStacks />
              <IntroStrengths />
              <IntroLighthouseBadge />
            </div>
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
