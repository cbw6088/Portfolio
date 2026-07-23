"use client";

interface HomeHeroProps {
  mounted: boolean;
  tagline: string;
}

export default function HomeHero({ mounted, tagline }: HomeHeroProps) {
  const transition = "transition-transform duration-700";

  return (
    <>
      <p
        className={`text-sm tracking-[0.35em] uppercase text-stone-500 dark:text-stone-400 ${transition} ${
          mounted ? "translate-y-0" : "translate-y-2"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        Portfolio
      </p>

      <h1
        className={`font-LilitaOne text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-stone-800 tracking-tight dark:text-stone-100 ${transition} ${
          mounted ? "translate-y-0" : "translate-y-4"
        }`}
        style={{ transitionDelay: "250ms" }}
      >
        Frontend
        <br />
        <span className="relative isolate inline-block text-amber-600 animate-softPulse">
          Developer
          <span
            className="absolute bottom-0 left-0 -z-10 w-full h-0.5 bg-amber-500/60 rounded-full origin-left opacity-0 animate-lineGrow"
            style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
          />
        </span>
      </h1>

      <p
        className={`text-stone-600 text-sm sm:text-base max-w-md mx-auto dark:text-stone-300 ${transition} ${
          mounted ? "translate-y-0" : "translate-y-2"
        }`}
        style={{ transitionDelay: "450ms" }}
      >
        {tagline}
      </p>
    </>
  );
}
