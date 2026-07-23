import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { PROJECTS } from "../constants";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectDetailPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) {
    return { title: "Project Not Found" };
  }

  const description =
    project.description ??
    project.about?.slice(0, 140) ??
    project.subtitle;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `${SITE_URL}/project/${project.id}`,
    },
    openGraph: {
      title: project.title,
      description,
      url: `${SITE_URL}/project/${project.id}`,
      ...(project.heroImageUrl
        ? { images: [{ url: project.heroImageUrl }] }
        : {}),
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = PROJECTS.find((p) => p.id === params.id) ?? null;

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
