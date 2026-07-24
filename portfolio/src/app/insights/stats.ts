import {
  STUDY_CATEGORIES,
  STUDY_POSTS,
  type StudyCategoryId,
} from "@/app/study/constants";
import {
  PERSONAL_PROJECTS,
  WORK_PROJECTS,
  type ProjectItem,
} from "@/app/project/constants";

export interface NamedCount {
  name: string;
  value: number;
  id?: string;
}

export interface MonthlyCount {
  month: string;
  label: string;
  value: number;
}

const TECH_CANONICAL: Record<string, string> = {
  typescript: "TypeScript",
  "typescript (fe)": "TypeScript",
  java: "Java",
  "java (be)": "Java",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  "html, css": "HTML/CSS",
  react: "React",
  "next.js": "Next.js",
  "tailwind css": "Tailwind CSS",
  docker: "Docker",
  springboot: "Spring Boot",
  kotlin: "Kotlin",
  jetpack: "Jetpack",
  wordpress: "WordPress",
  reactnative: "React Native",
  "react native": "React Native",
  "aws ec2": "AWS",
  aws: "AWS",
  vite: "Vite",
  reduxtoolkit: "Redux Toolkit",
};

/** 차트에 올리지 않을 협업·도구성 키워드 */
const TECH_SKIP = new Set([
  "gitlab",
  "github",
  "jira",
  "figma",
  "xd",
  "rest api",
  "langchain",
  "wbs",
]);

function parseTechTokens(raw: string): string[] {
  return raw
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function canonicalizeTech(token: string): string | null {
  const key = token.toLowerCase().replace(/\s+/g, " ").trim();
  if (TECH_SKIP.has(key)) return null;
  if (TECH_CANONICAL[key]) return TECH_CANONICAL[key];

  // "TypeScript (FE)" 형태
  const withoutParen = key.replace(/\s*\([^)]*\)\s*/g, "").trim();
  if (TECH_SKIP.has(withoutParen)) return null;
  if (TECH_CANONICAL[withoutParen]) return TECH_CANONICAL[withoutParen];

  return token.trim();
}

export function getStudyCategoryCounts(): NamedCount[] {
  const counts = new Map<StudyCategoryId, number>();
  for (const cat of STUDY_CATEGORIES) counts.set(cat.id, 0);
  for (const post of STUDY_POSTS) {
    counts.set(post.categoryId, (counts.get(post.categoryId) ?? 0) + 1);
  }

  return STUDY_CATEGORIES.map((cat) => ({
    id: cat.id,
    name: cat.label,
    value: counts.get(cat.id) ?? 0,
  })).filter((item) => item.value > 0);
}

export function getStudyYears(): number[] {
  const years = new Set<number>();
  for (const post of STUDY_POSTS) {
    years.add(Number(post.date.slice(0, 4)));
  }
  return [...years].sort((a, b) => b - a);
}

/** 특정 연도의 1~12월 게시글 수 (없는 달은 0) */
export function getStudyMonthlyCountsByYear(year: number): MonthlyCount[] {
  const counts = new Map<number, number>();

  for (const post of STUDY_POSTS) {
    if (Number(post.date.slice(0, 4)) !== year) continue;
    const month = Number(post.date.slice(5, 7));
    counts.set(month, (counts.get(month) ?? 0) + 1);
  }

  return Array.from({ length: 12 }, (_, i) => {
    const monthNum = i + 1;
    const month = `${year}-${String(monthNum).padStart(2, "0")}`;
    return {
      month,
      label: String(monthNum),
      value: counts.get(monthNum) ?? 0,
    };
  });
}

/** 게시글이 있는 달만 (요약 지표용) */
export function getStudyMonthlyCounts(): MonthlyCount[] {
  const counts = new Map<string, number>();

  for (const post of STUDY_POSTS) {
    const month = post.date.slice(0, 7);
    counts.set(month, (counts.get(month) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, value]) => {
      const [y, mon] = month.split("-");
      return {
        month,
        label: `${y.slice(2)}.${mon}`,
        value,
      };
    });
}

export function getProjectTypeCounts(): NamedCount[] {
  return [
    { id: "work", name: "현업", value: WORK_PROJECTS.length },
    { id: "personal", name: "개인", value: PERSONAL_PROJECTS.length },
  ];
}

export function getTechStackCounts(limit = 8): NamedCount[] {
  const projects: ProjectItem[] = [...WORK_PROJECTS, ...PERSONAL_PROJECTS];
  const counts = new Map<string, number>();

  for (const project of projects) {
    if (!project.tech) continue;
    const fields = [
      project.tech.language,
      project.tech.framework,
      project.tech.library,
      project.tech.devops,
    ].filter(Boolean) as string[];

    const seenInProject = new Set<string>();
    for (const field of fields) {
      for (const token of parseTechTokens(field)) {
        const name = canonicalizeTech(token);
        if (!name || seenInProject.has(name)) continue;
        seenInProject.add(name);
        counts.set(name, (counts.get(name) ?? 0) + 1);
      }
    }
  }

  return [...counts.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value || a.name.localeCompare(b.name))
    .slice(0, limit);
}

export function getInsightsSummary() {
  const categoryCounts = getStudyCategoryCounts();
  const monthly = getStudyMonthlyCounts();
  const topCategory = [...categoryCounts].sort((a, b) => b.value - a.value)[0];

  const dates = STUDY_POSTS.map((p) => p.date).sort();
  const firstDate = dates[0];
  const lastDate = dates[dates.length - 1];

  const recentMonths = monthly.slice(-6);
  const recentTotal = recentMonths.reduce((sum, m) => sum + m.value, 0);
  const recentAvg =
    recentMonths.length > 0
      ? Math.round((recentTotal / recentMonths.length) * 10) / 10
      : 0;

  const totalProjects = WORK_PROJECTS.length + PERSONAL_PROJECTS.length;
  const topTech = getTechStackCounts(1)[0];

  const projectPart = `현업 ${WORK_PROJECTS.length}개 · 개인 ${PERSONAL_PROJECTS.length}개 프로젝트`;
  const techPart = topTech ? `핵심 스택은 ${topTech.name}` : null;
  const studyPart = topCategory
    ? `스터디는 「${topCategory.name}」 비중이 가장 높습니다`
    : null;

  const narrative = [projectPart, techPart, studyPart]
    .filter(Boolean)
    .join(". ")
    .concat(".");

  return {
    totalStudyPosts: STUDY_POSTS.length,
    totalProjects,
    workProjects: WORK_PROJECTS.length,
    personalProjects: PERSONAL_PROJECTS.length,
    topCategoryName: topCategory?.name ?? "-",
    topCategoryCount: topCategory?.value ?? 0,
    topTechName: topTech?.name ?? "-",
    firstDate,
    lastDate,
    recentAvg,
    narrative,
  };
}
