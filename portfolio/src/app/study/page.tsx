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
          <div className="max-w-2xl mx-auto px-6 py-8 sm:py-12">
            <header className="mb-8">
              <h1 className="font-LilitaOne text-3xl sm:text-4xl text-stone-800 tracking-tight">
                Study.
              </h1>
              <p className="text-stone-600 text-sm mt-2 max-w-md">
                배운 내용을 주제별로 정리해 둔 공간입니다.
              </p>
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
