import { NextResponse } from "next/server";
import { enforceWorkspaceAccess } from "@/lib/workspace";
import { prisma } from "@tallynest/database";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ workspaceId: string; surveyId: string }> }
) {
  const { workspaceId, surveyId } = await params;

  try {
    await enforceWorkspaceAccess(workspaceId);
    const { name, status, questions } = await req.json();

    const survey = await prisma.survey.findFirst({
      where: { id: surveyId, workspaceId },
    });

    if (!survey) {
      return NextResponse.json({ error: "Survey not found" }, { status: 404 });
    }

    // Update survey details
    await prisma.survey.update({
      where: { id: surveyId },
      data: {
        ...(name && { name }),
        ...(status && { status }),
      },
    });

    // Replace questions if provided
    if (questions && Array.isArray(questions)) {
      await prisma.question.deleteMany({
        where: { surveyId },
      });

      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        await prisma.question.create({
          data: {
            surveyId,
            type: q.type,
            headline: q.headline,
            subheader: q.subheader || null,
            required: q.required ?? true,
            options: q.options || null,
            order: i,
          },
        });
      }
    }

    const updatedSurvey = await prisma.survey.findUnique({
      where: { id: surveyId },
      include: { questions: { orderBy: { order: "asc" } } },
    });

    return NextResponse.json({ survey: updatedSurvey });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update survey";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
