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
    </>
  );
}
