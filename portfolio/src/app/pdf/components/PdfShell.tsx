"use client";

interface PdfShellProps {
  children: React.ReactNode;
  /** 표지 등 헤더 없는 페이지 */
  bare?: boolean;
  section?: string;
  pageNumber?: number;
  totalPages?: number;
}

/** 가로 A4 한 장. 화면 미리보기·인쇄 공통 프레임 */
export default function PdfShell({
  children,
  bare = false,
  section,
  pageNumber,
  totalPages,
}: PdfShellProps) {
  return (
    <section className="pdf-page">
      {!bare && (
        <header className="pdf-chrome">
          <span className="pdf-chrome-brand">CHOI BYUNGWOO · Portfolio</span>
          {section ? <span className="pdf-chrome-section">{section}</span> : null}
        </header>
      )}
      <div className={`pdf-body ${bare ? "pdf-body-bare" : ""}`}>{children}</div>
      {!bare && pageNumber != null && (
        <footer className="pdf-chrome pdf-chrome-footer">
          <span>
            {pageNumber}
            {totalPages != null ? ` / ${totalPages}` : ""}
          </span>
        </footer>
      )}
    </section>
  );
}
