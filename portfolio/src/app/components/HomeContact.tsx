"use client";

interface LinkItem {
  label: string;
  href: string;
}

interface HomeContactProps {
  mounted: boolean;
  name: string;
  links: readonly LinkItem[];
}

export default function HomeContact({
  mounted,
  name,
  links,
}: HomeContactProps) {
  const transition = "transition-all duration-700";

  return (
    <>
      <div
        className={`h-px w-12 mx-auto bg-stone-300 ${transition} ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      />

      <p
        className={`font-LilitaOne text-lg sm:text-xl text-stone-700 tracking-widest ${transition} ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        {name}
      </p>

      <nav
        className={`flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-stone-600 ${transition} ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{ transitionDelay: "850ms" }}
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block hover:text-amber-600 hover:-translate-y-0.5 transition-all duration-300 underline underline-offset-2 decoration-stone-300 hover:decoration-amber-500 decoration-2"
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
