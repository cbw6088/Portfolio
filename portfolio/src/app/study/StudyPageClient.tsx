"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import HomeBackground from "@/app/components/HomeBackground";
import { StudyCategoryNav, StudyPostList } from "./components";
import {
  STUDY_CATEGORIES,
  STUDY_POSTS,
} from "./constants";
import type { StudyCategoryId } from "./constants";

export default function StudyPageClient() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<StudyCategoryId>("frontend");

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn dark:bg-stone-950 dark:text-stone-100">
        <HomeBackground showGlow={false} />
        <main className="relative flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 sm:py-12">
            <header className="mb-8">
              <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
                Study
              </p>
              <h1 className="relative inline-block font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-2 dark:text-stone-100">
                <span
                  className="absolute inset-[-40%_-30%] pointer-events-none -z-10 dark:opacity-90"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(245, 158, 11, 0.35) 0%, rgba(245, 158, 11, 0.12) 45%, transparent 70%)",
                  }}
                />
                Archive
              </h1>
            </header>

            <StudyCategoryNav current={category} onSelect={setCategory} />

            {/* 전 카테고리 목록을 SSR DOM에 포함 — 비활성은 CSS로만 숨김 */}
            <div className="mt-6">
              {STUDY_CATEGORIES.map((cat) => {
                const posts = STUDY_POSTS.filter(
                  (p) => p.categoryId === cat.id
                );
                const isActive = category === cat.id;

                return (
                  <section
                    key={cat.id}
                    id={`study-${cat.id}`}
                    aria-label={cat.label}
                    hidden={!isActive}
                    className={isActive ? undefined : "hidden"}
                  >
                    <StudyPostList posts={posts} categoryLabel={cat.label} />
                  </section>
                );
              })}
            </div>
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
