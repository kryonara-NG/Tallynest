import { redirect } from "next/navigation";
import { getWorkspaceForUser } from "@/lib/workspace";
import { prisma } from "@tallynest/database";
import Link from "next/link";

export default async function SurveyResponsesPage({
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
      responses: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!survey) {
    redirect(`/workspaces/${workspaceId}`);
  }

  const questionMap = new Map(survey.questions.map((q) => [q.id, q.headline]));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href={`/workspaces/${workspaceId}`}
            className="text-xs text-slate-500 hover:text-slate-800"
          >
            ← Back to Workspace
          </Link>
          <h1 className="font-bold text-lg text-slate-900">{survey.name} — Responses</h1>
          <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium">
            Total: {survey.responses.length}
          </span>
        </div>

        <Link
          href={`/workspaces/${workspaceId}/surveys/${survey.id}/edit`}
          className="text-xs px-3 py-1.5 border border-slate-300 rounded text-slate-700 hover:bg-slate-50"
        >
          Edit Survey
        </Link>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-8">
        {survey.responses.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
            <h3 className="text-lg font-medium text-slate-800">No responses recorded yet</h3>
            <p className="text-sm text-slate-500 mt-1">
              Publish your survey and share the public link to start collecting answers.
            </p>
            <a
              href={`/s/${survey.id}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg"
            >
              Open Public Form ↗
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {survey.responses.map((resp, idx) => {
              const data = resp.data as Record<string, unknown>;
              return (
                <div key={resp.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
                    <span className="text-xs font-semibold text-slate-400">
                      Response #{survey.responses.length - idx}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(resp.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(data).map(([qId, val]) => (
                      <div key={qId} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="text-xs font-medium text-slate-500">
                          {questionMap.get(qId) || qId}
                        </div>
                        <div className="text-sm font-semibold text-slate-800 mt-1">
                          {String(val)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
