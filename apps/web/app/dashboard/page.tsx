import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardRootPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const primaryWorkspace = user.memberships[0]?.workspace;

  if (primaryWorkspace) {
    redirect(`/workspaces/${primaryWorkspace.id}`);
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-slate-800">No Workspace Found</h1>
      <p className="mt-2 text-slate-600">You are not a member of any workspace yet.</p>
      <Link
        href="/signup"
        className="mt-4 inline-block px-4 py-2 bg-slate-900 text-white rounded-md"
      >
        Create Workspace
      </Link>
    </div>
  );
}
