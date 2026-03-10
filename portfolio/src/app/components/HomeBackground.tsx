export default function HomeBackground() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(245, 158, 11, 0.12) 0%, transparent 55%)",
        }}
      />
      {/* 느리게 움직이는 포인트 그라데이션 */}
      <div
        className="fixed inset-0 pointer-events-none opacity-70 animate-gradientMove"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />
      {/* 은은한 떠다니는 포인트 */}
      <div
        className="fixed top-[25%] left-[15%] w-2 h-2 rounded-full bg-amber-400/30 pointer-events-none animate-float"
        aria-hidden
        style={{ animationDelay: "0s" }}
      />
      <div
        className="fixed top-[60%] right-[20%] w-1.5 h-1.5 rounded-full bg-amber-500/25 pointer-events-none animate-float"
        aria-hidden
        style={{ animationDelay: "1.5s" }}
      />
    </>
  );
}
