"use client";

import { useRouter } from "next/navigation";
import type { ProjectItem } from "../constants";

type ProjectCardVariant = "list" | "detail";

interface ProjectCardProps {
  project: ProjectItem;
  variant?: ProjectCardVariant;
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr] gap-2 text-sm">
      <dt className="text-stone-500 shrink-0">{label}</dt>
      <dd className="text-stone-600">{value}</dd>
    </div>
  );
}

export default function ProjectCard({
  project,
  variant = "detail",
}: ProjectCardProps) {
  const router = useRouter();
  const isWork = project.type === "work";
  const tech = project.tech;
  const hasTech =
    tech &&
    (tech.language || tech.framework || tech.library || tech.devops || tech.etc);
  const aboutParagraphs = project.about?.split("\n\n").filter(Boolean) ?? [];
  const workForm = project.workForm;
  const hasHeroImage = variant === "detail" && !!project.heroImageUrl;

  const handleCardClick = () => {
    if (variant === "list") {
      router.push(`/project/${project.id}`);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = (event) => {
    if (variant !== "list") return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      id={`project-${project.id}`}
      className={`rounded-xl border bg-white border border-stone-200 border-l-4 border-l-stone-300/80 hover:border-stone-300 hover:border-l-amber-500/80 transition-colors scroll-mt-24 overflow-hidden ${
        variant === "list" ? "cursor-pointer" : ""
      }`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="flex flex-col gap-0">
        {hasHeroImage && (
          <div className="w-full bg-stone-100">
            <img
              src={project.heroImageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div
          className={`flex flex-col gap-3 ${
            hasHeroImage ? "p-4 sm:p-5 border-t border-stone-100" : "p-4 sm:p-5"
          }`}
        >
          <div className="flex items-center gap-2 flex-wrap">
          {isWork ? (
            <span className="text-[10px] font-medium tracking-wider text-amber-600 uppercase px-2 py-0.5 rounded bg-amber-50">
              현업
            </span>
          ) : (
            <span className="text-[10px] font-medium tracking-wider text-stone-600 uppercase px-2 py-0.5 rounded bg-stone-100">
              개인
            </span>
          )}
          <h3 className="font-semibold text-stone-800 text-lg">
            {project.title}
          </h3>
        </div>
          <p className="text-stone-600 text-sm">{project.subtitle}</p>

          <div className="space-y-1">
            <MetaRow label="기간" value={project.period} />
            {project.platform && <MetaRow label="플랫폼" value={project.platform} />}
            {project.teamSize && <MetaRow label="인원" value={project.teamSize} />}
            {project.role && <MetaRow label="역할" value={project.role} />}
          </div>

          {variant === "detail" && project.description && !project.about && (
            <p className="text-stone-600 text-sm leading-relaxed">
              {project.description}
            </p>
          )}

          {hasTech && (
            <div className="pt-3 mt-1 border-t border-stone-100">
              <h4 className="text-stone-500 text-xs font-semibold uppercase tracking-wider mb-2">
                개발환경
              </h4>
              <div className="space-y-1 text-sm">
                {tech!.language && <MetaRow label="언어" value={tech!.language} />}
                {tech!.framework && (
                  <MetaRow
                    label={
                      tech!.framework.includes("WordPress")
                        ? "플랫폼/CMS"
                        : "프레임워크"
                    }
                    value={tech!.framework}
                  />
                )}
                {tech!.library && (
                  <MetaRow label="라이브러리" value={tech!.library} />
                )}
                {tech!.devops && <MetaRow label="DevOps" value={tech!.devops} />}
                {tech!.etc && <MetaRow label="ETC" value={tech!.etc} />}
              </div>
            </div>
          )}

          {variant === "detail" && isWork && workForm && (
            <div className="pt-3 mt-1 border-t border-stone-100 space-y-3">
              {workForm.summary && (
                <div className="space-y-1">
                  <h4 className="text-stone-500 text-xs font-semibold uppercase tracking-wider">
                    프로젝트 개요
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                    {workForm.summary}
                  </p>
                </div>
              )}
              {workForm.responsibilities && (
                <div className="space-y-1">
                  <h4 className="text-stone-500 text-xs font-semibold uppercase tracking-wider">
                    담당 업무
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                    {workForm.responsibilities}
                  </p>
                </div>
              )}
              {workForm.achievements && (
                <div className="space-y-1">
                  <h4 className="text-stone-500 text-xs font-semibold uppercase tracking-wider">
                    성과
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                    {workForm.achievements}
                  </p>
                </div>
              )}
            </div>
          )}

          {variant === "detail" && aboutParagraphs.length > 0 && (
            <div className="pt-3 mt-1 border-t border-stone-100">
              <h4 className="text-stone-500 text-xs font-semibold uppercase tracking-wider mb-2">
                About
              </h4>
              <div className="space-y-2 text-sm text-stone-600 leading-relaxed">
                {aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          )}

          {variant === "detail" && project.detailStory && (
            <div className="pt-3 mt-1 border-t border-stone-100 space-y-3">
              <h4 className="text-stone-500 text-xs font-semibold uppercase tracking-wider">
                상황 · 원인 · 행동 · 결과
              </h4>
              <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
                <div>
                  <p className="font-medium text-stone-800 mb-0.5">상황</p>
                  <p>{project.detailStory.situation}</p>
                </div>
                <div>
                  <p className="font-medium text-stone-800 mb-0.5">원인 분석</p>
                  <p>{project.detailStory.analysis}</p>
                </div>
                <div>
                  <p className="font-medium text-stone-800 mb-0.5">행동</p>
                  <p>{project.detailStory.action}</p>
                </div>
                {project.id === "work-site-maintenance" && (
                  <div className="mt-2 space-y-2">
                    <div>
                      <p className="text-[11px] font-semibold text-stone-500 mb-1">
                        그룹웨어 메인 화면
                      </p>
                      <div className="w-full rounded-lg overflow-hidden bg-stone-100">
                        <img
                          src="/Project_Background/groupware.png"
                          alt="AIWorks 그룹웨어 메인 화면"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-stone-500 mb-1">
                        SFA 매출 추이 대시보드
                      </p>
                      <div className="w-full rounded-lg overflow-hidden bg-stone-100">
                        <img
                          src="/Project_Background/sfa.png"
                          alt="SFA 매출 추이 대시보드"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <p className="font-medium text-stone-800 mb-0.5">결과</p>
                  <p>{project.detailStory.result}</p>
                </div>
              </div>
            </div>
          )}

          {(variant === "list" || (project.links && project.links.length > 0)) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-stone-100">
              {variant === "list" && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/project/${project.id}`);
                  }}
                  className="text-amber-600 hover:text-amber-700 text-xs sm:text-sm font-medium underline-offset-2 hover:underline"
                >
                  자세히 보기 →
                </button>
              )}
              {project.links &&
                project.links.length > 0 &&
                project.links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (variant === "list") {
                        e.stopPropagation();
                      }
                    }}
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium underline-offset-2 hover:underline"
                  >
                    {label} →
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

