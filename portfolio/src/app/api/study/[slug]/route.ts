import { NextRequest, NextResponse } from "next/server";
import { getStudyContent } from "@/lib/studyContent";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const content = await getStudyContent(slug);

  if (content === null) {
    const status = !slug || slug.includes("..") ? 400 : 404;
    return NextResponse.json(
      { error: status === 400 ? "Invalid slug" : "Not found" },
      { status }
    );
  }

  return NextResponse.json({ content });
}
