import { notFound } from "next/navigation";
import { prisma } from "@tallynest/database";
import PublicSurveyClient from "@/components/PublicSurveyClient";

export default async function PublicSurveyPage({
  params,
}: {
  params: Promise<{ surveyId: string }>;
}) {
  const { surveyId } = await params;

  const survey = await prisma.survey.findUnique({
    where: { id: surveyId },
    include: {
      questions: { orderBy: { order: "asc" } },
    },
  });

  if (!survey || survey.status !== "IN_PROGRESS") {
    notFound();
  }

  const formattedSurvey = {
    ...survey,
    questions: survey.questions.map((q) => ({
      id: q.id,
      type: q.type,
      headline: q.headline,
      subheader: q.subheader,
      required: q.required,
      options: Array.isArray(q.options) ? (q.options as string[]) : null,
    })),
  };

  return <PublicSurveyClient survey={formattedSurvey} />;
}
