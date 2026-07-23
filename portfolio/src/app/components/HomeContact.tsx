"use client";

interface LinkItem {
  label: string;
  href: string;
}

interface HomeContactProps {
  name: string;
  links: readonly LinkItem[];
}

export default function HomeContact({ name, links }: HomeContactProps) {
  return (
    <>
      <div className="h-px w-12 mx-auto bg-stone-300 dark:bg-stone-600" />

      <p className="font-LilitaOne text-lg sm:text-xl text-stone-700 tracking-widest dark:text-stone-200">
        {name}
      </p>

      <nav
        aria-label="연락처"
        className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-stone-600 dark:text-stone-300"
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") || href === "/pdf" ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block hover:text-amber-600 hover:-translate-y-0.5 transition-all duration-300 underline underline-offset-2 decoration-stone-300 hover:decoration-amber-500 decoration-2 dark:decoration-stone-600 dark:hover:text-amber-400"
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
