import { redirect } from "next/navigation";
import { getWorkspaceForUser } from "@/lib/workspace";
import { prisma } from "@tallynest/database";
import SurveyEditorClient from "@/components/SurveyEditorClient";

export default async function SurveyEditorPage({
  params,
}: {
  params: Promise<{ workspaceId: string; surveyId: string }>;
}) {
  const { workspaceId, surveyId } = await params;
  const context = await getWorkspaceForUser(workspaceId);

  if (!context) {
    redirect("/login");
  }

  const survey = await prisma.survey.findFirst({
    where: { id: surveyId, workspaceId: context.workspace.id },
    include: {
      questions: { orderBy: { order: "asc" } },
    },
  });

  if (!survey) {
    redirect(`/workspaces/${workspaceId}`);
  }

  const formattedSurvey = {
    ...survey,
    questions: survey.questions.map((q) => ({
      id: q.id,
      type: q.type as "OPEN_TEXT" | "MULTIPLE_CHOICE_SINGLE" | "RATING" | "NPS",
      headline: q.headline,
      subheader: q.subheader || undefined,
      required: q.required,
      options: Array.isArray(q.options) ? (q.options as string[]) : undefined,
    })),
  };

  return <SurveyEditorClient workspaceId={workspaceId} survey={formattedSurvey} />;
}
