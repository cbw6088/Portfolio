"use client";

import { STUDY_CATEGORIES } from "../constants";
import type { StudyCategoryId } from "../constants";

interface StudyCategoryNavProps {
  current: StudyCategoryId;
  onSelect: (id: StudyCategoryId) => void;
}

export default function StudyCategoryNav({
  current,
  onSelect,
}: StudyCategoryNavProps) {
  return (
    <nav
      className="flex flex-wrap gap-2 sm:gap-3 border-b border-stone-200 pb-4"
      aria-label="목차"
    >
      {STUDY_CATEGORIES.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelect(id)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            current === id
              ? "bg-amber-600 text-white shadow-sm"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800"
          }`}
          aria-current={current === id ? "true" : undefined}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
