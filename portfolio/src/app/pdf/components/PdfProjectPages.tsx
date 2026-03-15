"use client";

import type { ProjectItem } from "@/app/project/constants";

const PDF_PAGE_BASE =
  "pdf-page box-border flex flex-col min-h-[180mm]";
const PDF_CONTENT = "flex-1 min-h-0 overflow-hidden px-3 py-3 print:px-2 print:py-2";
/* 테두리/선 없음. 폰트·색상만 유지, pdf-block으로 여백만 */
const PDF_BLOCK = "pdf-block";

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[4.75rem_1fr] gap-x-2 gap-y-0 items-baseline text-[11px] print:text-[10px]">
      <dt className="text-stone-500 shrink-0 whitespace-nowrap">{label}</dt>
      <dd className="text-stone-600 min-w-0">{value}</dd>
    </div>
  );
}

interface PdfProjectPagesProps {
  project: ProjectItem;
  /** 이 id들은 2페이지로 분할 (브랜드리뉴얼, 커스터머포탈, 유지보수, QuizGen) */
  twoPageProjectIds?: string[];
}

function ProjectPageInner({
  project,
  showOverview,
  showAbout,
  showWorkForm,
  showDetailStory,
  compact = false,
}: {
  project: ProjectItem;
  showOverview: boolean;
  showAbout: boolean;
  showWorkForm: boolean;
  showDetailStory: boolean;
  compact?: boolean;
}) {
  const isWork = project.type === "work";
  const tech = project.tech;
  const hasTech =
    tech &&
    (tech.language || tech.framework || tech.library || tech.devops || tech.etc);
  const aboutParagraphs = project.about?.split("\n\n").filter(Boolean) ?? [];
  const workForm = project.workForm;
  const hasWorkForm = isWork && workForm;

  const gap = compact ? "mb-1.5" : "mb-2";
  const sectionGap = compact ? "mt-1.5" : "mt-2";
  const textCls = compact ? "text-[10px] print:text-[9px]" : "text-xs print:text-[10px]";

  return (
    <>
      {showOverview && (
        <>
          <p className="pdf-label mb-0.5">Project</p>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            {isWork ? (
              <span className="text-[9px] font-medium tracking-wider text-amber-600 uppercase px-1.5 py-0.5 rounded bg-amber-50">
                현업
              </span>
            ) : (
              <span className="text-[9px] font-medium tracking-wider text-stone-600 uppercase px-1.5 py-0.5 rounded bg-stone-100">
                개인
              </span>
            )}
            <h2 className="font-semibold text-stone-800 text-base print:text-sm">
              {project.title}
            </h2>
          </div>
          <p className={`text-stone-600 ${textCls} ${gap}`}>
            {project.subtitle}
          </p>
          <div className={`${PDF_BLOCK} space-y-0.5 ${gap}`}>
            <MetaRow label="기간" value={project.period} />
            {project.platform && (
              <MetaRow label="플랫폼" value={project.platform} />
            )}
            {project.teamSize && (
              <MetaRow label="인원" value={project.teamSize} />
            )}
            {project.role && <MetaRow label="역할" value={project.role} />}
          </div>
          {hasTech && (
            <div className={`${PDF_BLOCK} pt-1 mt-1`}>
              <h4 className="pdf-label mb-0.5">개발환경</h4>
              <div className="space-y-0.5">
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
        </>
      )}

      {showAbout && (aboutParagraphs.length > 0 || (project.description && !project.about)) && (
        <div className={showOverview ? sectionGap : ""}>
          <h4 className="pdf-label mb-1">About</h4>
          <div className={`${PDF_BLOCK} space-y-1 ${textCls} text-stone-600 leading-relaxed`}>
            {aboutParagraphs.length > 0
              ? aboutParagraphs.map((para, i) => <p key={i}>{para}</p>)
              : project.description && <p>{project.description}</p>}
          </div>
        </div>
      )}

      {showWorkForm &&
        hasWorkForm &&
        (workForm!.summary || workForm!.responsibilities || workForm!.achievements) && (
          <div className={`${sectionGap} space-y-1.5`}>
            {workForm!.summary && (
              <div className={PDF_BLOCK}>
                <h4 className="pdf-label mb-0.5">프로젝트 개요</h4>
                <p className={`${textCls} text-stone-600 leading-relaxed whitespace-pre-line`}>
                  {workForm!.summary}
                </p>
              </div>
            )}
            {workForm!.responsibilities && (
              <div className={PDF_BLOCK}>
                <h4 className="pdf-label mb-0.5">담당 업무</h4>
                <p className={`${textCls} text-stone-600 leading-relaxed whitespace-pre-line`}>
                  {workForm!.responsibilities}
                </p>
              </div>
            )}
            {workForm!.achievements && (
              <div className={PDF_BLOCK}>
                <h4 className="pdf-label mb-0.5">성과</h4>
                <p className={`${textCls} text-stone-600 leading-relaxed whitespace-pre-line`}>
                  {workForm!.achievements}
                </p>
              </div>
            )}
          </div>
        )}

      {showDetailStory && project.detailStory && (
        <div className={sectionGap}>
          <h4 className="pdf-label mb-2">상황 · 원인 · 행동 · 결과</h4>
          <div className={`${PDF_BLOCK} space-y-2 ${textCls} text-stone-600 leading-relaxed`}>
            <div>
              <p className="font-medium text-stone-800 mb-0.5 text-[10px]">
                상황
              </p>
              <p>{project.detailStory.situation}</p>
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-0.5 text-[10px]">
                원인 분석
              </p>
              <p>{project.detailStory.analysis}</p>
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-0.5 text-[10px]">
                행동
              </p>
              <p>{project.detailStory.action}</p>
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-0.5 text-[10px]">
                결과
              </p>
              <p>{project.detailStory.result}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * PDF 전용: 프로젝트별 1페이지 또는 2페이지(지정된 경우) 렌더.
 * - 일반 프로젝트: 1페이지에 전체 내용
 * - twoPageProjectIds: 2페이지 (1p: 개요+About+담당/성과 전부, 2p: 상황·원인·행동·결과만)
 */
export default function PdfProjectPages({
  project,
  twoPageProjectIds = [],
}: PdfProjectPagesProps) {
  const isTwoPage = twoPageProjectIds.includes(project.id);

  /* 상단선은 페이지 전체 너비(pdf-page 직속), 본문만 pdf-page-inner로 너비 제한 */
  const wrapPage = (children: React.ReactNode) => (
    <div className={PDF_PAGE_BASE}>
      <div className="pdf-page-header">Portfolio</div>
      <div className="pdf-page-inner w-full flex flex-col flex-1 min-h-0">
        <div className={PDF_CONTENT}>{children}</div>
      </div>
    </div>
  );

  /* 2페이지 분할: 1p = 개요+About+담당/성과 전부, 2p = 상황·원인·행동·결과만 */
  if (isTwoPage) {
    return (
      <>
        {wrapPage(
          <ProjectPageInner
            project={project}
            showOverview={true}
            showAbout={true}
            showWorkForm={true}
            showDetailStory={false}
            compact
          />
        )}
        {wrapPage(
          <ProjectPageInner
            project={project}
            showOverview={false}
            showAbout={false}
            showWorkForm={false}
            showDetailStory={true}
          />
        )}
      </>
    );
  }

  return (
    <>
      {wrapPage(
        <ProjectPageInner
          project={project}
          showOverview={true}
          showAbout={true}
          showWorkForm={true}
          showDetailStory={true}
        />
      )}
    </>
  );
}
