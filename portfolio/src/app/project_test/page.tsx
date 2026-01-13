"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import { ProjectCard } from "./components";
import { PERSONAL_PROJECTS, WORK_PROJECTS } from "./constants";

export default function ProjectTestPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  const workProjects = WORK_PROJECTS;
  const personalProjects = PERSONAL_PROJECTS;

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn">
        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 py-8 sm:py-12">
            <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
              Project
            </p>
            <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-8">
              Works
            </h1>

            {workProjects.length > 0 && (
              <section className="mb-10">
                <h2 className="font-semibold text-stone-800 text-lg mb-4">
                  현업 프로젝트
                </h2>
                <p className="text-stone-500 text-sm mb-4">
                  현재 재직 중인 회사 프로젝트는 보안상 요약만 안내합니다.
                </p>
                <ul className="space-y-4">
                  {workProjects.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {personalProjects.length > 0 && (
              <section>
                <h2 className="font-semibold text-stone-800 text-lg mb-4">
                  개인 프로젝트
                </h2>
                <ul className="space-y-4">
                  {personalProjects.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} />
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
