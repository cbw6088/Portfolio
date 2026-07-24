"use client";

import { WORK_PROJECTS, PERSONAL_PROJECTS } from "@/app/project/constants";
import PdfShell from "./PdfShell";

interface PdfTocProps {
  pageNumber: number;
  totalPages: number;
  introPage: number;
  workListPage: number;
  personalListPage: number;
  projectStartPage: Record<string, number>;
}

export default function PdfToc({
  pageNumber,
  totalPages,
  introPage,
  workListPage,
  personalListPage,
  projectStartPage,
}: PdfTocProps) {
  return (
    <PdfShell section="Contents" pageNumber={pageNumber} totalPages={totalPages}>
      <div className="pdf-toc">
        <h2 className="pdf-section-title">목차</h2>
        <ol className="pdf-toc-list">
          <li>
            <span className="pdf-toc-label">01 · 소개</span>
            <span className="pdf-toc-dots" aria-hidden />
            <span className="pdf-toc-page">{introPage}</span>
          </li>
          <li>
            <span className="pdf-toc-label">02 · 현업 프로젝트</span>
            <span className="pdf-toc-dots" aria-hidden />
            <span className="pdf-toc-page">{workListPage}</span>
          </li>
          <li>
            <span className="pdf-toc-label">03 · 개인 프로젝트</span>
            <span className="pdf-toc-dots" aria-hidden />
            <span className="pdf-toc-page">{personalListPage}</span>
          </li>
        </ol>

        <div className="pdf-toc-sub">
          <h3 className="pdf-subhead">프로젝트 구성</h3>
          <div className="pdf-toc-grid">
            <div>
              <p className="pdf-eyebrow">현업</p>
              <ul>
                {WORK_PROJECTS.map((p) => (
                  <li key={p.id}>
                    <span>{p.title}</span>
                    <span className="pdf-toc-page-muted">
                      {projectStartPage[p.id] ?? "-"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="pdf-eyebrow">개인</p>
              <ul>
                {PERSONAL_PROJECTS.map((p) => (
                  <li key={p.id}>
                    <span>{p.title}</span>
                    <span className="pdf-toc-page-muted">
                      {projectStartPage[p.id] ?? "-"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PdfShell>
  );
}
