"use client";

import { INTRO_EXPERIENCES } from "../constants";

export default function IntroExperience() {
  return (
    <section id="experience" className="py-12 border-b border-stone-200 dark:border-stone-800">
      <h2 className="font-semibold text-lg text-stone-800 mb-4 dark:text-stone-100">Experience</h2>
      <ul className="space-y-4">
        {INTRO_EXPERIENCES.map((item, i) => (
          <li key={i} className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
            <span className="text-stone-500 sm:text-right dark:text-stone-400">{item.period}</span>
            <div>
              <span className="font-medium text-stone-800 dark:text-stone-100">{item.name}</span>
              <span className="text-stone-600 dark:text-stone-300"> {item.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
