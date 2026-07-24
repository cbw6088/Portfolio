/** 페이지 타이틀 뒤 amber 글로우 (다크모드에서 약간 더 진하게) */
export default function TitleGlow() {
  return (
    <>
      <span
        className="absolute inset-[-40%_-30%] pointer-events-none -z-10 dark:hidden"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(245, 158, 11, 0.35) 0%, rgba(245, 158, 11, 0.12) 45%, transparent 70%)",
        }}
      />
      <span
        className="absolute inset-[-40%_-30%] pointer-events-none -z-10 hidden dark:block"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(245, 158, 11, 0.5) 0%, rgba(245, 158, 11, 0.2) 45%, transparent 70%)",
        }}
      />
    </>
  );
}
