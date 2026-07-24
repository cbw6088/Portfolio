interface HomeBackgroundProps {
  /** 중앙 amber 글로우 표시 여부 (홈 전용) */
  showGlow?: boolean;
}

export default function HomeBackground({ showGlow = true }: HomeBackgroundProps) {
  return (
    <>
      {showGlow && (
        <>
          <div
            className="fixed inset-0 pointer-events-none dark:hidden"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 52%, rgba(245, 158, 11, 0.22) 0%, transparent 55%)",
            }}
          />
          <div
            className="fixed inset-0 pointer-events-none hidden dark:block"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 52%, rgba(245, 158, 11, 0.32) 0%, transparent 55%)",
            }}
          />
          <div
            className="fixed inset-0 pointer-events-none opacity-85 animate-gradientMove dark:hidden"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 68% 48%, rgba(245, 158, 11, 0.14) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />
          <div
            className="fixed inset-0 pointer-events-none hidden animate-gradientMove dark:block dark:opacity-80"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 68% 48%, rgba(245, 158, 11, 0.22) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />
        </>
      )}
      <div
        className="fixed top-[25%] left-[15%] w-2 h-2 rounded-full bg-amber-400/45 pointer-events-none animate-float dark:bg-amber-400/55"
        aria-hidden
        style={{ animationDelay: "0s" }}
      />
      <div
        className="fixed top-[18%] right-[28%] w-1 h-1 rounded-full bg-amber-500/35 pointer-events-none animate-float dark:bg-amber-500/50"
        aria-hidden
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="fixed top-[60%] right-[20%] w-1.5 h-1.5 rounded-full bg-amber-500/40 pointer-events-none animate-float dark:bg-amber-500/55"
        aria-hidden
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="fixed top-[72%] left-[28%] w-2.5 h-2.5 rounded-full bg-amber-400/30 pointer-events-none animate-float dark:bg-amber-400/45"
        aria-hidden
        style={{ animationDelay: "2.2s" }}
      />
    </>
  );
}
