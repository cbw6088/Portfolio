"use client";

import { useEffect } from "react";
import Link from "next/link";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import HomeBackground from "@/app/components/HomeBackground";
import AmbientDots from "@/app/components/AmbientDots";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import StudyMarkdown from "../components/StudyMarkdown";
import type { StudyPost } from "../constants";

interface StudyPostClientProps {
  slug: string;
  post: StudyPost | undefined;
  content: string;
}

export default function StudyPostClient({
  slug,
  post,
  content,
}: StudyPostClientProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 dark:bg-stone-950 dark:text-stone-100">
      <div className="fixed inset-0 flex flex-col">
        <HomeBackground showGlow={false} />
        <main className="relative flex-1 overflow-y-auto">
          <div className="relative">
            <AmbientDots />
            <div className="relative z-10 max-w-2xl mx-auto px-6 pt-20 pb-8 sm:py-12">
              <Link
                href="/study"
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                ← 목록으로
              </Link>
              <article className="mt-6">
                <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight dark:text-stone-100">
                  {post?.title ?? (slug ? decodeURIComponent(slug) : "글")}
                </h1>
                {post?.date && (
                  <time
                    dateTime={post.date}
                    className="text-stone-500 text-sm mt-1 block dark:text-stone-400"
                  >
                    {post.date}
                  </time>
                )}
                <StudyMarkdown content={content} />
              </article>
            </div>
          </div>
        </main>
        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
