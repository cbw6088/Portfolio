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
            className="fixed inset-0 pointer-events-none dark:opacity-90"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(245, 158, 11, 0.22) 0%, transparent 55%)",
            }}
          />
          {/* 느리게 움직이는 포인트 그라데이션 */}
          <div
            className="fixed inset-0 pointer-events-none opacity-85 animate-gradientMove dark:opacity-60"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(245, 158, 11, 0.14) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />
        </>
      )}
      {/* 은은한 떠다니는 포인트 */}
      <div
        className="fixed top-[25%] left-[15%] w-2 h-2 rounded-full bg-amber-400/45 pointer-events-none animate-float"
        aria-hidden
        style={{ animationDelay: "0s" }}
      />
      <div
        className="fixed top-[18%] right-[28%] w-1 h-1 rounded-full bg-amber-500/35 pointer-events-none animate-float"
        aria-hidden
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="fixed top-[60%] right-[20%] w-1.5 h-1.5 rounded-full bg-amber-500/40 pointer-events-none animate-float"
        aria-hidden
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="fixed top-[72%] left-[28%] w-2.5 h-2.5 rounded-full bg-amber-400/30 pointer-events-none animate-float"
        aria-hidden
        style={{ animationDelay: "2.2s" }}
      />
    </>
  );
}
