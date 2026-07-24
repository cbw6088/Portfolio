"use client";

import { useEffect, useRef, useState } from "react";

/** 가로 A4(297mm × 210mm)를 화면 너비에 맞춰 이미지처럼 축소 표시 */
export default function PdfPageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [pageSize, setPageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    const page = pageRef.current;
    if (!frame || !page) return;

    const update = () => {
      const width = page.offsetWidth;
      const height = page.offsetHeight;
      if (!width || !height) return;

      setPageSize({ width, height });
      const available = frame.clientWidth;
      setScale(Math.min(1, available / width));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    observer.observe(page);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="pdf-page-frame"
      style={
        pageSize.height
          ? { height: pageSize.height * scale }
          : undefined
      }
    >
      <div
        ref={pageRef}
        className="pdf-page-scale"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
