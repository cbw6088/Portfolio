"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import {
  StudyCategoryNav,
  StudyPostList,
} from "./components";
import {
  STUDY_CATEGORIES,
  STUDY_POSTS,
} from "./constants";
import type { StudyCategoryId } from "./constants";

export default function StudyPage() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<StudyCategoryId>("frontend");

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  const posts = STUDY_POSTS.filter((p) => p.categoryId === category);
  const categoryLabel =
    STUDY_CATEGORIES.find((c) => c.id === category)?.label ?? category;

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn">
        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 sm:py-12">
            <header className="mb-8">
              <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
                Study
              </p>
              <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-2">
                Archive
              </h1>
            </header>

            <StudyCategoryNav current={category} onSelect={setCategory} />
            <div className="mt-6">
              <StudyPostList posts={posts} categoryLabel={categoryLabel} />
            </div>
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
