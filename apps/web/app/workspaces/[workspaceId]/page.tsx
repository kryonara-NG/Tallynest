import { redirect } from "next/navigation";
import { getWorkspaceForUser } from "@/lib/workspace";
import Link from "next/link";
import { prisma } from "@tallynest/database";

export default async function WorkspaceDashboardPage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = await params;
  const context = await getWorkspaceForUser(workspaceId);

  if (!context) {
    redirect("/login");
  }

  const { workspace, user } = context;

  const surveys = await prisma.survey.findMany({
    where: { workspaceId: workspace.id },
    include: {
      _count: {
        select: { responses: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div>
          <div className="font-bold text-xl text-slate-900">Tallynest</div>
          <div className="text-xs text-slate-500 mt-0.5">Workspace: {workspace.name}</div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-700">{user.email}</span>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="text-xs px-3 py-1.5 border border-slate-300 rounded text-slate-600 hover:bg-slate-100"
            >
              Log Out
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Surveys & Forms</h1>
            <p className="text-sm text-slate-500">Manage your active surveys and response pipelines.</p>
          </div>
          <Link
            href={`/workspaces/${workspace.id}/surveys/new`}
            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800"
          >
            + Create Survey
          </Link>
        </div>

        {surveys.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <h3 className="text-lg font-medium text-slate-800">No surveys created yet</h3>
            <p className="text-sm text-slate-500 mt-1">Get started by creating your first survey.</p>
            <Link
              href={`/workspaces/${workspace.id}/surveys/new`}
              className="mt-4 inline-block px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800"
            >
              Create New Survey
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surveys.map((survey) => (
              <div
                key={survey.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium ${
                        survey.status === "IN_PROGRESS"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {survey.status}
                    </span>
                    <span className="text-xs text-slate-400">
                      {survey._count.responses} responses
                    </span>
                  </div>
                  <h2 className="font-semibold text-slate-900 mt-3 text-lg">{survey.name}</h2>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-medium">
                  <Link
                    href={`/workspaces/${workspace.id}/surveys/${survey.id}/edit`}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/workspaces/${workspace.id}/surveys/${survey.id}/responses`}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    Responses
                  </Link>
                  <a
                    href={`/s/${survey.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    Public Link ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
