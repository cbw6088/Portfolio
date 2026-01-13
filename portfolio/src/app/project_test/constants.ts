import { PERSONAL_PROJECTS } from "./personalProjects";
import { WORK_PROJECTS } from "./workProjects";

export type ProjectType = "personal" | "work";

export interface ProjectTech {
  language?: string;
  framework?: string;
  library?: string;
  devops?: string;
  etc?: string;
}

export interface ProjectItem {
  id: string;
  type: ProjectType;
  title: string;
  subtitle: string;
  period: string;
  imageKey?: "quizgen" | "goaldiary" | "lucid" | "nickname";
  platform?: string;
  teamSize?: string;
  role?: string;
  description?: string;
  tech?: ProjectTech;
  about?: string;
  links?: { label: string; href: string }[];
}

export const PROJECTS: ProjectItem[] = [...PERSONAL_PROJECTS, ...WORK_PROJECTS];

export { PERSONAL_PROJECTS, WORK_PROJECTS };

