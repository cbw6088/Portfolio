"use client";

import { INTRO_DOCUMENTS } from "../constants";

export default function IntroDocuments() {
  return (
    <section id="documents" className="py-12 border-b border-stone-200 dark:border-stone-800">
      <h2 className="font-semibold text-lg text-stone-800 mb-4 dark:text-stone-100">
        Documents
      </h2>
      <ul className="space-y-3">
        {INTRO_DOCUMENTS.map((doc) => (
          <li key={doc.href}>
            <a
              href={doc.href}
              download={doc.download}
              className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline underline-offset-2 dark:hover:text-amber-400"
            >
              {doc.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
