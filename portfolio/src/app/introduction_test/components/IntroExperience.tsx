"use client";

import { INTRO_EXPERIENCES } from "../constants";

export default function IntroExperience() {
  return (
    <section className="py-12 border-b border-stone-200">
      <h2 className="font-semibold text-lg text-stone-800 mb-4">Experience</h2>
      <ul className="space-y-4">
        {INTRO_EXPERIENCES.map((item, i) => (
          <li key={i} className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
            <span className="text-stone-500 sm:text-right">{item.period}</span>
            <div>
              <span className="font-medium text-stone-800">{item.name}</span>
              <span className="text-stone-600"> {item.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
