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
  /** 디테일 페이지 상단에 노출할 대표 이미지 */
  heroImageUrl?: string;
  platform?: string;
  teamSize?: string;
  role?: string;
  description?: string;
  tech?: ProjectTech;
  about?: string;
  links?: { label: string; href: string }[];
  /** 현업 프로젝트에서 상세하게 적을 수 있는 폼 영역 */
  workForm?: {
    /** 프로젝트/서비스 개요 */
    summary?: string;
    /** 구체적인 담당 업무 */
    responsibilities?: string;
    /** 숫자나 임팩트를 중심으로 한 성과 */
    achievements?: string;
  };
  /** 디테일 페이지에서 상황/원인/행동/결과를 정리한 스토리 */
  detailStory?: {
    situation: string;
    analysis: string;
    action: string;
    result: string;
  };
}

export const PROJECTS: ProjectItem[] = [...PERSONAL_PROJECTS, ...WORK_PROJECTS];

export { PERSONAL_PROJECTS, WORK_PROJECTS };

