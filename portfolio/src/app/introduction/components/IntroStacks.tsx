"use client";

import { INTRO_STACK_BADGES } from "../constants";

export default function IntroStacks() {
  return (
    <section id="stacks" className="py-12 border-b border-stone-200 dark:border-stone-800">
      <h2 className="font-semibold text-lg text-stone-800 mb-4 dark:text-stone-100">Stacks</h2>
      <ul className="flex flex-wrap gap-2 justify-center sm:justify-start list-none p-0 m-0">
        {INTRO_STACK_BADGES.map(({ label, src }) => (
          <li key={label}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={label} className="h-6 sm:h-7" />
          </li>
        ))}
      </ul>
    </section>
  );
}
