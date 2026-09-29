import { NextResponse } from "next/server";
import { prisma } from "@tallynest/database";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ surveyId: string }> }
) {
  const { surveyId } = await params;

  try {
    const survey = await prisma.survey.findUnique({
      where: { id: surveyId },
    });

    if (!survey || survey.status !== "IN_PROGRESS") {
      return NextResponse.json({ error: "Survey is not active" }, { status: 404 });
    }

    const { data } = await req.json();

    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Invalid response data" }, { status: 400 });
    }

    const response = await prisma.response.create({
      data: {
        surveyId,
        data,
      },
    });

    return NextResponse.json({ responseId: response.id, success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to submit response";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
