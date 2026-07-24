"use client";

import {
  WORK_PROJECTS,
  PERSONAL_PROJECTS,
  type ProjectItem,
} from "@/app/project/constants";
import PdfShell from "./PdfShell";

interface PdfProjectListProps {
  pageNumber: number;
  totalPages: number;
  variant: "work" | "personal";
}

function projectBlurb(p: ProjectItem) {
  // 상세 개요(summary) 대신 짧은 description만 사용
  return (p.description || "").replace(/\s+/g, " ").trim();
}

function techLine(p: ProjectItem) {
  if (!p.tech) return null;
  return [p.tech.framework, p.tech.library, p.tech.language]
    .filter(Boolean)
    .join(" · ");
}

function ProjectGroup({ items }: { items: ProjectItem[] }) {
  return (
    <ul className="pdf-project-list">
      {items.map((p) => {
        const blurb = projectBlurb(p);
        const tech = techLine(p);
        return (
          <li key={p.id}>
            <p className="pdf-project-list-title">{p.title}</p>
            <p className="pdf-project-list-sub break-keep">{p.subtitle}</p>
            {blurb ? (
              <p className="pdf-project-list-blurb break-keep">{blurb}</p>
            ) : null}
            <div className="pdf-project-list-meta">
              <span>{p.period}</span>
              {p.role ? <span>{p.role}</span> : null}
              {p.platform ? <span>{p.platform}</span> : null}
              {p.teamSize ? <span>{p.teamSize}</span> : null}
            </div>
            {tech ? <p className="pdf-project-list-tech">{tech}</p> : null}
          </li>
        );
      })}
    </ul>
  );
}

export default function PdfProjectList({
  pageNumber,
  totalPages,
  variant,
}: PdfProjectListProps) {
  const isWork = variant === "work";
  const title = isWork ? "현업 프로젝트" : "개인 프로젝트";
  const lead = isWork
    ? "현업에서 담당했던 프로젝트를 한눈에 정리했습니다. 각 항목의 개요·역할·기술 스택을 요약하며, 이어지는 페이지에서 문제 정의와 해결 과정을 더 자세히 설명합니다."
    : "개인적으로 진행한 프로젝트를 한눈에 정리했습니다. 각 항목의 목표·역할·기술 스택을 요약하며, 이어지는 페이지에서 구현 과정과 배운 점을 더 자세히 설명합니다.";
  const items = isWork ? WORK_PROJECTS : PERSONAL_PROJECTS;

  return (
    <PdfShell section="Projects" pageNumber={pageNumber} totalPages={totalPages}>
      <div className="pdf-project-overview">
        <h2 className="pdf-section-title">{title}</h2>
        <p className="pdf-lead break-keep">{lead}</p>
        <ProjectGroup items={items} />
      </div>
    </PdfShell>
  );
}
