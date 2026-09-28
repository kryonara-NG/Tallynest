import { ResourceNotFoundError } from "@formbricks/types/errors";
import { MainNavigation } from "@/app/(app)/workspaces/[workspaceId]/components/MainNavigation";
import { TopControlBar } from "@/app/(app)/workspaces/[workspaceId]/components/TopControlBar";
import { IS_DEVELOPMENT, IS_FORMBRICKS_CLOUD, IS_FORMBRICKS_SURVEYS_CONFIGURED } from "@/lib/constants";
import { getAccessFlags } from "@/lib/membership/utils";
import { getTranslate } from "@/lingodotdev/server";
import { getOrganizationWorkspacesLimit } from "@/modules/tallynest-core/entitlements";
import { LimitsReachedBanner } from "@/modules/ui/components/limits-reached-banner";
import { TWorkspaceLayoutData } from "@/modules/workspaces/types/workspace-auth";

interface WorkspaceLayoutProps {
  layoutData: TWorkspaceLayoutData;
  children?: React.ReactNode;
}

export const WorkspaceLayout = async ({ layoutData, children }: WorkspaceLayoutProps) => {
  const t = await getTranslate();
  const { user, organization, membership, workspace, isAccessControlAllowed, workspacePermission, license, responseCount } =
    layoutData;
  const { isMember, isOwner, isManager } = getAccessFlags(membership.role);
  const { features, active, status } = license;
  const isMultiOrgEnabled = features?.isMultiOrgEnabled ?? false;
  const organizationWorkspacesLimit = await getOrganizationWorkspacesLimit(organization.id);
  const isOwnerOrManager = isOwner || isManager;

  if (isMember && !workspacePermission) {
    throw new ResourceNotFoundError(t("common.workspace"), null);
  }

  return (
    <div className="flex h-screen min-h-screen flex-col overflow-hidden">
      {IS_FORMBRICKS_CLOUD && (
        <LimitsReachedBanner organization={organization} responseCount={responseCount} />
      )}
      <div className="flex h-full">
        <MainNavigation
          organization={organization}
          user={user}
          workspace={{ id: workspace.id, name: workspace.name }}
          isFormbricksCloud={IS_FORMBRICKS_CLOUD}
          isDevelopment={IS_DEVELOPMENT}
          membershipRole={membership.role}
          organizationWorkspacesLimit={organizationWorkspacesLimit}
          isLicenseActive={active}
          isNoLicense={status === "no-license"}
          isAccessControlAllowed={isAccessControlAllowed}
          responseCount={responseCount}
          newTrialBannerVariant={false}
          isFormbricksSurveysConfigured={IS_FORMBRICKS_SURVEYS_CONFIGURED}
          trialDaysRemaining={null}
        />
        <div id="mainContent" className="flex flex-1 flex-col overflow-hidden bg-slate-50">
          <TopControlBar
            currentOrganizationId={organization.id}
            isMultiOrgEnabled={isMultiOrgEnabled}
            organizationWorkspacesLimit={organizationWorkspacesLimit}
            isFormbricksCloud={IS_FORMBRICKS_CLOUD}
            isLicenseActive={active}
            isNoLicense={status === "no-license"}
            isOwnerOrManager={isOwnerOrManager}
            isAccessControlAllowed={isAccessControlAllowed}
            membershipRole={membership.role}
          />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};
