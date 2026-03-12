"use client";

import { INTRO_STACK_BADGES } from "../constants";

export default function IntroStacks() {
  return (
    <section className="py-12 border-b border-stone-200">
      <h2 className="font-semibold text-lg text-stone-800 mb-4">Stacks</h2>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {INTRO_STACK_BADGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-6 sm:h-7"
          />
        ))}
      </div>
    </section>
  );
}
