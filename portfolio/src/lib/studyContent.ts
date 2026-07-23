import { readFile } from "fs/promises";
import { join } from "path";

/**
 * Study/YYYY/{slug}.md 파일을 서버에서 읽어 본문을 반환합니다.
 * 초기 HTML(SSR)과 API 라우트에서 동일 로직을 공유합니다.
 */
export async function getStudyContent(slug: string): Promise<string | null> {
  if (!slug || slug.includes("..")) return null;

  const yearFromSlug = slug.slice(0, 4);
  const candidateYears = /^\d{4}$/.test(yearFromSlug)
    ? [yearFromSlug, "2026", "2025"]
    : ["2026", "2025"];
  const uniqueYears = Array.from(new Set(candidateYears));

  for (const year of uniqueYears) {
    try {
      const filePath = join(process.cwd(), "..", "Study", year, `${slug}.md`);
      return await readFile(filePath, "utf-8");
    } catch {
      // try next year directory
    }
  }

  return null;
}
