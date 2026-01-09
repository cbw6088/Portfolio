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
      className="block p-4 sm:p-5 rounded-xl border border-stone-200 bg-white/80 hover:border-amber-500/50 hover:bg-amber-50/30 transition-all duration-200 group"
    >
      <h3 className="font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
        {post.title}
      </h3>
      <time className="text-xs text-stone-500 mt-1 block">{post.date}</time>
      {post.excerpt && (
        <p className="text-sm text-stone-600 mt-2 line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </Link>
  );
}
