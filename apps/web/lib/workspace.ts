import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@tallynest/database";

// TALLYNEST LEARNING NOTE:
// Workspace multi-tenancy access control entry point.
// See docs/getting-started/PROJECT-TOUR.md.
export async function getWorkspaceForUser(workspaceId?: string) {
  const user = await getCurrentUser();
  if (!user) return null;

  // If workspaceId supplied, verify user has membership in that workspace
  if (workspaceId) {
    const membership = await prisma.membership.findFirst({
      where: {
        userId: user.id,
        workspaceId: workspaceId,
      },
      include: {
        workspace: true,
      },
    });

    if (!membership) return null;

    return {
      user,
      workspace: membership.workspace,
      role: membership.role,
    };
  }

  // Otherwise fallback to first workspace membership
  const firstMembership = user.memberships[0];
  if (!firstMembership) return null;

  return {
    user,
    workspace: firstMembership.workspace,
    role: firstMembership.role,
  };
}

export async function enforceWorkspaceAccess(workspaceId: string) {
  const context = await getWorkspaceForUser(workspaceId);
  if (!context) {
    throw new Error("Unauthorized workspace access attempt");
  }
  return context;
}
