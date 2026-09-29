import { ResourceNotFoundError } from "@formbricks/types/errors";
import { DEFAULT_LOCALE, IS_FORMBRICKS_CLOUD, IS_STORAGE_CONFIGURED, MAIL_FROM, SURVEY_BG_COLORS, UNSPLASH_ACCESS_KEY } from "@/lib/constants";
import { getPublicDomain } from "@/lib/getPublicUrl";
import { getTranslate } from "@/lingodotdev/server";
import { getUserEmail } from "@/modules/survey/editor/lib/user";
import { getWorkspaceLanguages } from "@/modules/survey/editor/lib/workspace";
import { getSurveyFollowUpsPermission } from "@/modules/survey/follow-ups/lib/utils";
import { getActionClasses } from "@/modules/survey/lib/action-class";
import { getExternalUrlsPermission } from "@/modules/survey/lib/permission";
import { getFinishedResponseCountBySurveyId, getResponseCountBySurveyId } from "@/modules/survey/lib/response";
import { getOrganizationBilling, getSurvey } from "@/modules/survey/lib/survey";
import { getSurveyAuth } from "@/modules/survey/lib/survey-auth";
import { getWorkspaceWithTeamIds } from "@/modules/survey/lib/workspace";
import { SURVEY_SCHEDULING_CONFIG } from "@/modules/survey/scheduling/lib/constants";
import { ErrorComponent } from "@/modules/ui/components/error-component";
import { SurveyEditor } from "./components/survey-editor";

export const SurveyEditorPage = async (props: { params: Promise<{ workspaceId: string; surveyId: string }>; searchParams: Promise<{ mode?: string }> }) => {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { session, isMember, hasReadAccess, currentUserMembership, workspacePermission, workspace } = await getSurveyAuth(params.workspaceId, params.surveyId);
  const t = await getTranslate();
  const [survey, workspaceWithTeamIds, actionClasses, responseCount, finishedResponseCount] = await Promise.all([
    getSurvey(params.surveyId), getWorkspaceWithTeamIds(params.workspaceId), getActionClasses(workspace.id),
    getResponseCountBySurveyId(params.surveyId), getFinishedResponseCountBySurveyId(params.surveyId),
  ]);
  if (!workspaceWithTeamIds) throw new ResourceNotFoundError(t("common.workspace"), null);
  const organizationBilling = await getOrganizationBilling(workspaceWithTeamIds.organizationId);
  if (!organizationBilling) throw new ResourceNotFoundError(t("common.organization"), workspaceWithTeamIds.organizationId);
  const isSurveyCreationDeletionDisabled = isMember && hasReadAccess;
  const [userEmail, workspaceLanguages] = await Promise.all([getUserEmail(session.user.id), getWorkspaceLanguages(workspaceWithTeamIds.id)]);
  if (!survey || !actionClasses || !userEmail || isSurveyCreationDeletionDisabled) return <ErrorComponent />;
  return <SurveyEditor
    survey={survey} workspace={workspaceWithTeamIds} actionClasses={actionClasses}
    contactAttributeKeys={[]} responseCount={responseCount} finishedResponseCount={finishedResponseCount}
    membershipRole={currentUserMembership.role} workspacePermission={workspacePermission} colors={SURVEY_BG_COLORS}
    segments={[]} isUserTargetingAllowed={false} isSpamProtectionAllowed={false} workspaceLanguages={workspaceLanguages}
    isFormbricksCloud={IS_FORMBRICKS_CLOUD} isUnsplashConfigured={!!UNSPLASH_ACCESS_KEY}
    isCxMode={searchParams.mode === "cx"} surveySchedulingConfig={SURVEY_SCHEDULING_CONFIG}
    locale={DEFAULT_LOCALE} mailFrom={MAIL_FROM ?? "hola@tallynest.local"} isSurveyFollowUpsAllowed={await getSurveyFollowUpsPermission(workspaceWithTeamIds.organizationId)}
    isWorkflowsAllowed={false} userEmail={userEmail} teamMemberDetails={[]} isStorageConfigured={IS_STORAGE_CONFIGURED}
    isQuotasAllowed={false} quotas={[]} isExternalUrlsAllowed={await getExternalUrlsPermission(workspaceWithTeamIds.organizationId)}
    publicDomain={getPublicDomain()} enterpriseLicenseRequestFormUrl=""
  />;
};
export default SurveyEditorPage;
