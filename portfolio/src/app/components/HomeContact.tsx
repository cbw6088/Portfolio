"use client";

interface LinkItem {
  label: string;
  href: string;
}

interface HomeContactProps {
  name: string;
  links: readonly LinkItem[];
}

const PDF_PREVIEW_HREF = "/pdf";
const PDF_FILE_HREF = "/pdf/portfolio.pdf";

const linkClassName =
  "inline-block hover:text-amber-600 hover:-translate-y-0.5 transition-all duration-300 underline underline-offset-2 decoration-stone-300 hover:decoration-amber-500 decoration-2 dark:decoration-stone-600 dark:hover:text-amber-400";

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
        {links.map(({ label, href }) => {
          if (href === PDF_PREVIEW_HREF) {
            return (
              <span key={href} className="contents">
                <a
                  href={PDF_FILE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`md:hidden ${linkClassName}`}
                >
                  {label}
                </a>
                <a
                  href={PDF_PREVIEW_HREF}
                  target="_blank"
                  className={`hidden md:inline-block ${linkClassName}`}
                >
                  {label}
                </a>
              </span>
            );
          }

          return (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={linkClassName}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
