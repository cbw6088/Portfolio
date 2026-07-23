"use client";

import type { StudyPost } from "../constants";
import Link from "next/link";

interface StudyPostCardProps {
  post: StudyPost;
}

export default function StudyPostCard({ post }: StudyPostCardProps) {
  return (
    <Link
      href={`/study/${post.slug}`}
      className="block p-4 sm:p-5 rounded-xl border border-stone-200 bg-white/80 hover:border-amber-500/50 hover:bg-amber-50/30 transition-all duration-200 group dark:border-stone-700 dark:bg-stone-900/80 dark:hover:bg-amber-950/20"
    >
      <h3 className="font-medium text-stone-800 group-hover:text-amber-700 transition-colors dark:text-stone-100 dark:group-hover:text-amber-400">
        {post.title}
      </h3>
      <time className="text-xs text-stone-500 mt-1 block dark:text-stone-400">{post.date}</time>
      {post.excerpt && (
        <p className="text-sm text-stone-600 mt-2 line-clamp-2 dark:text-stone-300">
          {post.excerpt}
        </p>
      )}
    </Link>
  );
}
