"use client";

import type { StudyPost } from "../constants";
import StudyPostCard from "./StudyPostCard";

interface StudyPostListProps {
  posts: StudyPost[];
  categoryLabel: string;
}

export default function StudyPostList({
  posts,
  categoryLabel,
}: StudyPostListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-stone-500 text-sm">
          <span className="font-medium text-stone-600">{categoryLabel}</span>에
          아직 올린 글이 없습니다.
        </p>
        <p className="text-stone-400 text-xs mt-1">
          곧 공부한 내용을 정리해서 올릴 예정입니다.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3" role="list">
      {posts.map((post) => (
        <li key={post.id}>
          <StudyPostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
