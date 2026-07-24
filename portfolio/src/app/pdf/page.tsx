"use client";

import { WORK_PROJECTS, PERSONAL_PROJECTS } from "@/app/project/constants";
import PdfCover from "./components/PdfCover";
import PdfToc from "./components/PdfToc";
import PdfIntro from "./components/PdfIntro";
import PdfProjectList from "./components/PdfProjectList";
import PdfProjectDetail, {
  shouldSplitProject,
} from "./components/PdfProjectDetail";

const ORDERED_PROJECTS = [...WORK_PROJECTS, ...PERSONAL_PROJECTS];

function buildPagePlan() {
  const pages: Array<
    | { type: "cover" }
    | { type: "toc" }
    | { type: "intro" }
    | { type: "project-list-work" }
    | { type: "project-list-personal" }
    | { type: "project"; projectId: string; storyOnly?: boolean }
  > = [
    { type: "cover" },
    { type: "toc" },
    { type: "intro" },
    { type: "project-list-work" },
    { type: "project-list-personal" },
  ];

  for (const project of ORDERED_PROJECTS) {
    pages.push({ type: "project", projectId: project.id });
    if (shouldSplitProject(project)) {
      pages.push({ type: "project", projectId: project.id, storyOnly: true });
    }
  }

  return pages;
}

export default function PdfPage() {
  const plan = buildPagePlan();
  const totalPages = plan.length;

  const introPage = plan.findIndex((p) => p.type === "intro") + 1;
  const workListPage =
    plan.findIndex((p) => p.type === "project-list-work") + 1;
  const personalListPage =
    plan.findIndex((p) => p.type === "project-list-personal") + 1;

  const projectStartPage: Record<string, number> = {};
  plan.forEach((p, i) => {
    if (p.type === "project" && !p.storyOnly && !(p.projectId in projectStartPage)) {
      projectStartPage[p.projectId] = i + 1;
    }
  });

  return (
    <div className="min-h-screen bg-stone-200/80">
      <div className="print:hidden sticky top-0 z-[9999] bg-stone-900 text-stone-50 px-4 py-3 flex flex-wrap items-center justify-center gap-3 shadow-md">
        <span className="text-sm text-stone-200">
          미리보기입니다. 인쇄 시 &quot;대상: PDF로 저장&quot; · 용지 가로(A4)를
          선택하세요.
        </span>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 bg-amber-500 text-stone-900 text-sm font-semibold rounded-md hover:bg-amber-400 transition-colors"
        >
          인쇄 / PDF로 저장
        </button>
      </div>

      <div className="pdf-preview-stage print:p-0 print:bg-transparent">
        <div className="pdf-pages">
          {plan.map((item, index) => {
            const pageNumber = index + 1;
            const key = `${item.type}-${pageNumber}`;

            if (item.type === "cover") {
              return <PdfCover key={key} />;
            }
            if (item.type === "toc") {
              return (
                <PdfToc
                  key={key}
                  pageNumber={pageNumber}
                  totalPages={totalPages}
                  introPage={introPage}
                  workListPage={workListPage}
                  personalListPage={personalListPage}
                  projectStartPage={projectStartPage}
                />
              );
            }
            if (item.type === "intro") {
              return (
                <PdfIntro
                  key={key}
                  pageNumber={pageNumber}
                  totalPages={totalPages}
                />
              );
            }
            if (item.type === "project-list-work") {
              return (
                <PdfProjectList
                  key={key}
                  variant="work"
                  pageNumber={pageNumber}
                  totalPages={totalPages}
                />
              );
            }
            if (item.type === "project-list-personal") {
              return (
                <PdfProjectList
                  key={key}
                  variant="personal"
                  pageNumber={pageNumber}
                  totalPages={totalPages}
                />
              );
            }

            const project = ORDERED_PROJECTS.find((p) => p.id === item.projectId);
            if (!project) return null;
            return (
              <PdfProjectDetail
                key={key}
                project={project}
                pageNumber={pageNumber}
                totalPages={totalPages}
                storyOnly={Boolean(item.storyOnly)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
