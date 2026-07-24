"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import HomeBackground from "@/app/components/HomeBackground";
import TitleGlow from "@/app/components/TitleGlow";
import { ProjectCard } from "./components";
import { PERSONAL_PROJECTS, WORK_PROJECTS } from "./constants";

export default function ProjectPageClient() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<"work" | "personal">("work");

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  // URL 해시(#project-*)에 따라 초기 탭/스크롤 위치 맞추기
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (hash.startsWith("#project-")) {
      const projectId = hash.replace("#project-", "");

      const inWork = WORK_PROJECTS.some((p) => p.id === projectId);
      const inPersonal = PERSONAL_PROJECTS.some((p) => p.id === projectId);

      if (inWork) {
        setActiveTab("work");
      } else if (inPersonal) {
        setActiveTab("personal");
      }

      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, []);

  const workProjects = WORK_PROJECTS;
  const personalProjects = PERSONAL_PROJECTS;

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn dark:bg-stone-950 dark:text-stone-100">
        <HomeBackground showGlow={false} />
        <main className="relative flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pt-20 pb-8 sm:py-12">
            <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
              Project
            </p>
            <h1 className="relative inline-block font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-4 dark:text-stone-100">
              <TitleGlow />
              Works
            </h1>

            <div
              className="relative flex w-fit items-center rounded-full border border-stone-200 bg-stone-100 p-1 text-xs sm:text-sm mb-6 dark:border-stone-700 dark:bg-stone-900"
              role="tablist"
              aria-label="프로젝트 유형"
            >
              <div
                className={`absolute inset-y-1 w-[48%] rounded-full bg-amber-500 shadow-sm transition-transform duration-200 ease-out ${
                  activeTab === "personal" ? "translate-x-full" : "translate-x-0"
                }`}
              />
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "work"}
                aria-controls="project-work"
                id="tab-project-work"
                className={`relative z-10 px-3 sm:px-4 py-1.5 rounded-full transition-colors ${
                  activeTab === "work"
                    ? "text-white"
                    : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100"
                }`}
                onClick={() => setActiveTab("work")}
              >
                현업 프로젝트
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "personal"}
                aria-controls="project-personal"
                id="tab-project-personal"
                className={`relative z-10 px-3 sm:px-4 py-1.5 rounded-full transition-colors ${
                  activeTab === "personal"
                    ? "text-white"
                    : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100"
                }`}
                onClick={() => setActiveTab("personal")}
              >
                개인 프로젝트
              </button>
            </div>

            {/* 두 탭 모두 SSR DOM에 포함 — 비활성은 CSS로만 숨김 */}
            {workProjects.length > 0 && (
              <section
                id="project-work"
                role="tabpanel"
                aria-labelledby="tab-project-work"
                hidden={activeTab !== "work"}
                className={activeTab === "work" ? "mb-10" : "mb-10 hidden"}
              >
                <h2 className="font-semibold text-stone-800 text-lg mb-3 dark:text-stone-100">
                  현업 프로젝트
                </h2>
                <ul className="space-y-4">
                  {workProjects.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} variant="list" />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {personalProjects.length > 0 && (
              <section
                id="project-personal"
                role="tabpanel"
                aria-labelledby="tab-project-personal"
                hidden={activeTab !== "personal"}
                className={activeTab !== "personal" ? "hidden" : undefined}
              >
                <h2 className="font-semibold text-stone-800 text-lg mb-3 dark:text-stone-100">
                  개인 프로젝트
                </h2>
                <ul className="space-y-4">
                  {personalProjects.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} variant="list" />
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
