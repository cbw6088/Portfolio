"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import { ProjectCard } from "../components";
import { PROJECTS } from "../constants";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const project = PROJECTS.find((p) => p.id === params.id);

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  if (!project) {
    return (
      <div className="h-screen max-h-[100dvh] overflow-hidden">
        <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn">
          <main className="flex-1 min-h-0 overflow-y-auto">
            <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 sm:py-12">
              <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
                Project
              </p>
              <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-4">
                프로젝트를 찾을 수 없습니다
              </h1>
              <p className="text-sm text-stone-600 mb-6">
                잘못된 주소이거나, 아직 정리되지 않은 프로젝트입니다.
              </p>
              <button
                type="button"
                onClick={() => router.push("/project")}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium underline-offset-2 hover:underline"
              >
                프로젝트 목록으로 돌아가기 →
              </button>
            </div>
          </main>
          <SideButtonTest />
          <TopBar />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn">
        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 sm:py-12">
            <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
              Project
            </p>
            <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-stone-600 text-sm mb-6">{project.subtitle}</p>

            <div className="mb-4">
              <button
                type="button"
                onClick={() => router.push("/project")}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium underline-offset-2 hover:underline"
              >
                ← 프로젝트 목록으로
              </button>
            </div>

            <ProjectCard project={project} variant="detail" />
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}

