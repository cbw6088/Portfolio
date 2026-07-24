"use client";

import type { ProjectItem } from "@/app/project/constants";
import PdfShell from "./PdfShell";

interface PdfProjectDetailProps {
  project: ProjectItem;
  pageNumber: number;
  totalPages: number;
  /** 상세 스토리만 담는 이어지는 페이지 */
  storyOnly?: boolean;
}

function linesFromBullets(text?: string) {
  if (!text) return [];
  return text
    .split("\n")
    .map((l) => l.replace(/^\s*-\s*/, "").trim())
    .filter(Boolean);
}

function Meta({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="pdf-meta-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function PdfProjectDetail({
  project,
  pageNumber,
  totalPages,
  storyOnly = false,
}: PdfProjectDetailProps) {
  const isWork = project.type === "work";
  const tech = project.tech;
  const responsibilities = linesFromBullets(project.workForm?.responsibilities);
  const achievements = linesFromBullets(project.workForm?.achievements);
  const aboutParagraphs = project.about?.split("\n\n").filter(Boolean) ?? [];
  const summary =
    project.workForm?.summary || project.description || aboutParagraphs[0];

  if (storyOnly && project.detailStory) {
    const story = project.detailStory;
    return (
      <PdfShell section="Projects" pageNumber={pageNumber} totalPages={totalPages}>
        <div className="pdf-detail">
          <p className="pdf-eyebrow">{isWork ? "현업" : "개인"} · 케이스</p>
          <h2 className="pdf-detail-title">{project.title}</h2>
          <p className="pdf-detail-sub break-keep">{project.subtitle}</p>
          <div className="pdf-story-grid">
            {(
              [
                ["01", "상황", story.situation],
                ["02", "원인 분석", story.analysis],
                ["03", "행동", story.action],
                ["04", "결과", story.result],
              ] as const
            ).map(([step, label, body]) => (
              <article key={label} className="pdf-story-card">
                <h3>
                  <span className="pdf-story-step">{step}</span>
                  <span className="pdf-story-label">{label}</span>
                </h3>
                <p className="break-keep">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </PdfShell>
    );
  }

  return (
    <PdfShell section="Projects" pageNumber={pageNumber} totalPages={totalPages}>
      <div className="pdf-detail">
        <div className="pdf-detail-top">
          <p className="pdf-eyebrow">
            {isWork ? "현업 프로젝트" : "개인 프로젝트"}
          </p>
          <h2 className="pdf-detail-title">{project.title}</h2>
          <p className="pdf-detail-sub break-keep">{project.subtitle}</p>
          <dl className="pdf-meta pdf-meta-inline">
            <Meta label="기간" value={project.period} />
            <Meta label="플랫폼" value={project.platform} />
            <Meta label="역할" value={project.role} />
          </dl>
        </div>

        <div className="pdf-detail-columns">
          <section className="pdf-panel">
            <h3 className="pdf-subhead">개요</h3>
            {summary ? (
              <p className="break-keep">{summary}</p>
            ) : null}
          </section>

          <section className="pdf-panel">
            {responsibilities.length > 0 ? (
              <>
                <h3 className="pdf-subhead">담당 업무</h3>
                <ul className="pdf-bullets">
                  {responsibilities.map((item) => (
                    <li key={item} className="break-keep">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : !isWork && aboutParagraphs.length > 0 ? (
              <>
                <h3 className="pdf-subhead">About</h3>
                {aboutParagraphs.map((para) => (
                  <p key={para.slice(0, 24)} className="break-keep pdf-about-p">
                    {para}
                  </p>
                ))}
              </>
            ) : null}
          </section>

          <section className="pdf-panel">
            <h3 className="pdf-subhead">개발 환경</h3>
            {tech ? (
              <dl className="pdf-meta">
                <Meta label="언어" value={tech.language} />
                <Meta label="프레임워크" value={tech.framework} />
                <Meta label="라이브러리" value={tech.library} />
                <Meta label="DevOps" value={tech.devops} />
                <Meta label="기타" value={tech.etc} />
              </dl>
            ) : null}
          </section>

          <section className="pdf-panel">
            {achievements.length > 0 ? (
              <>
                <h3 className="pdf-subhead">성과</h3>
                <ul className="pdf-bullets">
                  {achievements.map((item) => (
                    <li key={item} className="break-keep">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : !shouldSplitProject(project) && project.detailStory ? (
              <>
                <h3 className="pdf-subhead">케이스 요약</h3>
                <p className="break-keep">
                  <strong>결과 · </strong>
                  {project.detailStory.result}
                </p>
              </>
            ) : null}
          </section>

          {project.links && project.links.length > 0 ? (
            <>
              <section className="pdf-panel">
                <h3 className="pdf-subhead">링크</h3>
                <ul className="pdf-link-list">
                  {project.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}: {l.href}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="pdf-panel pdf-panel-empty" aria-hidden />
            </>
          ) : null}
        </div>
      </div>
    </PdfShell>
  );
}

/** 상세 스토리가 길면 overview + story 2장으로 나눔 */
export function shouldSplitProject(project: ProjectItem) {
  if (!project.detailStory) return false;
  const storyLen =
    project.detailStory.situation.length +
    project.detailStory.analysis.length +
    project.detailStory.action.length +
    project.detailStory.result.length;
  const hasRichOverview = Boolean(
    project.workForm?.responsibilities ||
      project.workForm?.achievements ||
      (project.about && project.about.length > 200)
  );
  return storyLen > 600 || hasRichOverview;
}
