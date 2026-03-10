"use client";

import type { ProjectItem } from "../constants";

interface ProjectCardProps {
  project: ProjectItem;
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr] gap-2 text-sm">
      <dt className="text-stone-500 shrink-0">{label}</dt>
      <dd className="text-stone-600">{value}</dd>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isWork = project.type === "work";
  const tech = project.tech;
  const hasTech = tech && (tech.language || tech.framework || tech.library || tech.devops || tech.etc);
  const aboutParagraphs = project.about?.split("\n\n").filter(Boolean) ?? [];
  const workForm = project.workForm;

  return (
    <article
      className="rounded-xl border bg-white p-4 sm:p-5 border border-stone-200 border-l-4 border-l-stone-300/80 hover:border-stone-300 hover:border-l-amber-500/80 transition-colors"
    >
      <div className="flex flex-col gap-3">
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
          {project.platform && (
            <MetaRow label="플랫폼" value={project.platform} />
          )}
          {project.teamSize && (
            <MetaRow label="인원" value={project.teamSize} />
          )}
          {project.role && (
            <MetaRow label="역할" value={project.role} />
          )}
        </div>

        {project.description && !project.about && (
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
              {tech!.language && (
                <MetaRow label="언어" value={tech!.language} />
              )}
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
              {tech!.devops && (
                <MetaRow label="DevOps" value={tech!.devops} />
              )}
              {tech!.etc && <MetaRow label="ETC" value={tech!.etc} />}
            </div>
          </div>
        )}

        {isWork && workForm && (
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

        {aboutParagraphs.length > 0 && (
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

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2 border-t border-stone-100">
            {project.links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 text-sm font-medium underline-offset-2 hover:underline"
              >
                {label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
