"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import { ProjectCard } from "./components";
import { PERSONAL_PROJECTS, WORK_PROJECTS } from "./constants";

export default function ProjectTestPage() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<"work" | "personal">("work");

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  const workProjects = WORK_PROJECTS;
  const personalProjects = PERSONAL_PROJECTS;

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn">
        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 sm:py-12">
            <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
              Project
            </p>
            <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-6">
              Works
            </h1>

            <div className="relative inline-flex items-center rounded-full border bg-stone-100 p-1 text-xs sm:text-sm mb-6">
              <div
                className={`absolute inset-y-1 w-[48%] rounded-full bg-amber-500 shadow-sm transition-transform duration-200 ease-out ${
                  activeTab === "personal" ? "translate-x-full" : "translate-x-0"
                }`}
              />
              <button
                type="button"
                className={`relative z-10 px-3 sm:px-4 py-1.5 rounded-full transition-colors ${
                  activeTab === "work"
                    ? "text-white"
                    : "text-stone-500 hover:text-stone-800"
                }`}
                onClick={() => setActiveTab("work")}
              >
                현업 프로젝트
              </button>
              <button
                type="button"
                className={`relative z-10 px-3 sm:px-4 py-1.5 rounded-full transition-colors ${
                  activeTab === "personal"
                    ? "text-white"
                    : "text-stone-500 hover:text-stone-800"
                }`}
                onClick={() => setActiveTab("personal")}
              >
                개인 프로젝트
              </button>
            </div>

            {activeTab === "work" && workProjects.length > 0 && (
              <section className="mb-10">
                <h2 className="font-semibold text-stone-800 text-lg mb-3">
                  현업 프로젝트
                </h2>
                <ul className="space-y-4">
                  {workProjects.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {activeTab === "personal" && personalProjects.length > 0 && (
              <section>
                <h2 className="font-semibold text-stone-800 text-lg mb-3">
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
