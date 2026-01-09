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
    const filePath = join(process.cwd(), "..", "Study", "2025", `${slug}.md`);
    const content = await readFile(filePath, "utf-8");
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
