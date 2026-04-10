import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!slug || slug.includes("..")) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }
  try {
    const yearFromSlug = slug.slice(0, 4);
    const candidateYears = /^\d{4}$/.test(yearFromSlug)
      ? [yearFromSlug, "2026", "2025"]
      : ["2026", "2025"];
    const uniqueYears = Array.from(new Set(candidateYears));

    for (const year of uniqueYears) {
      try {
        const filePath = join(process.cwd(), "..", "Study", year, `${slug}.md`);
        const content = await readFile(filePath, "utf-8");
        return NextResponse.json({ content });
      } catch {
        // try next year directory
      }
    }

    return NextResponse.json({ error: "Not found" }, { status: 404 });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
