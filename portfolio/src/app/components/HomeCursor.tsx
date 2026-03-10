"use client";

interface HomeCursorProps {
  x: number;
  y: number;
}

export default function HomeCursor({ x, y }: HomeCursorProps) {
  const style = {
    left: `${x}px`,
    top: `${y}px`,
    transform: "translate(-50%, -50%)",
    willChange: "transform" as const,
  };

  return (
    <>
      <div
        id="cursor-dot"
        className="absolute w-cursor h-cursor bg-amber-600 rounded-full transition-transform duration-150 ease-out pointer-events-none"
        style={style}
      />
      <div
        id="cursor-dot-outline"
        className="absolute w-cursor-outline h-cursor-outline border-2 border-amber-600/50 rounded-full transition-transform duration-150 ease-out pointer-events-none"
        style={style}
      />
    </>
  );
}
