"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import {
  IntroProfile,
  IntroEducation,
  IntroExperience,
  IntroStacks,
} from "./components";

export default function IntroductionTestPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn">
        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 sm:py-12">
            <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
              Introduction
            </p>
            <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-8">
              Profile
            </h1>

            <IntroProfile />
            <IntroEducation />
            <IntroExperience />
            <IntroStacks />
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
