# EE Dependency Report

Generated from the Tallynest working tree. No Formbricks Enterprise source is permitted.

.coderabbit.yaml:269:    - path: "apps/web/modules/ee/**"
.coderabbit.yaml:271:        Enterprise Edition code under a separate licence (`apps/web/modules/ee/LICENSE`). Flag any
.coderabbit.yaml:272:        change that moves EE code into OSS paths or makes OSS code import from `modules/ee` without
.github/workflows/verify.yml:33:            if git grep -n -E 'modules/ee|/ee/' -- ':!LICENSING-AUDIT.md' ':!THIRD-PARTY-NOTICES.md' ':!CHANGES.md' ':!ARCHITECTURE.md' ':!LICENSE'; then
README.md:9:- Formbricks Core source outside `apps/web/modules/ee` is treated according to the upstream repository's stated AGPLv3 terms.
README.md:10:- `apps/web/modules/ee` is excluded from Tallynest unless a separate written license explicitly permits the intended redistribution and modification.
apps/web/app/(app)/(onboarding)/lib/onboarding-workspace.test.ts:6:import { getIsAISmartToolsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/(onboarding)/lib/onboarding-workspace.test.ts:18:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/(app)/(onboarding)/lib/onboarding-workspace.ts:8:import { getIsAISmartToolsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/(onboarding)/organizations/[organizationId]/landing/page.tsx:10:import { getAccessControlPermission, getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/(onboarding)/organizations/[organizationId]/workspaces/new/layout.tsx:9:import { invalidateOrganizationBillingCache } from "@/modules/ee/billing/lib/organization-billing";
apps/web/app/(app)/(onboarding)/organizations/[organizationId]/workspaces/new/plan/components/select-plan-onboarding.tsx:1:import { SelectPlanCard } from "@/modules/ee/billing/components/select-plan-card";
apps/web/app/(app)/(onboarding)/organizations/[organizationId]/workspaces/new/plan/page.tsx:9:} from "@/modules/ee/billing/lib/organization-billing";
apps/web/app/(app)/account/settings/profile/page.tsx:17:import { LiteLicenseTip } from "@/modules/ee/license-check/components/lite-license-tip";
apps/web/app/(app)/account/settings/profile/page.tsx:18:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/app/(app)/account/settings/profile/page.tsx:19:import { getIsMultiOrgEnabled, getIsTwoFactorAuthEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/billing-confirmation/components/ConfirmationPage.tsx:5:import { waitForBillingPlanAction } from "@/modules/ee/billing/actions";
apps/web/app/(app)/organizations/[organizationId]/settings/billing/page.tsx:1:import { PricingPage } from "@/modules/ee/billing/page";
apps/web/app/(app)/organizations/[organizationId]/settings/domain/page.tsx:7:import { getWhiteLabelPermission } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/organizations/[organizationId]/settings/domain/page.tsx:8:import { FaviconCustomizationSettings } from "@/modules/ee/whitelabel/favicon-customization/components/favicon-customization-settings";
apps/web/app/(app)/organizations/[organizationId]/settings/enterprise/page.tsx:10:import { GRACE_PERIOD_MS, getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/app/(app)/organizations/[organizationId]/settings/enterprise/page.tsx:11:import { getLiteLicenseRequestUrl } from "@/modules/ee/license-check/lib/lite-license";
apps/web/app/(app)/organizations/[organizationId]/settings/feedback-directories/page.tsx:1:import { FeedbackDirectoriesPage } from "@/modules/ee/feedback-directory/page";
apps/web/app/(app)/organizations/[organizationId]/settings/general/page.tsx:20:} from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/organizations/[organizationId]/settings/general/page.tsx:21:import { EmailCustomizationSettings } from "@/modules/ee/whitelabel/email-customization/components/email-customization-settings";
apps/web/app/(app)/workspaces/[workspaceId]/(analysis)/charts/page.tsx:1:import { ChartsListPage } from "@/modules/ee/analysis/charts/components/charts-list-page";
apps/web/app/(app)/workspaces/[workspaceId]/(analysis)/dashboards/[dashboardId]/page.tsx:1:import { DashboardDetailPage } from "@/modules/ee/analysis/dashboards/pages/dashboard-detail-page";
apps/web/app/(app)/workspaces/[workspaceId]/(analysis)/dashboards/page.tsx:1:import { DashboardsListPage } from "@/modules/ee/analysis/dashboards/pages/dashboards-list-page";
apps/web/app/(app)/workspaces/[workspaceId]/(analysis)/loading.tsx:1:import { AnalysisListLoading } from "@/modules/ee/analysis/loading";
apps/web/app/(app)/workspaces/[workspaceId]/(contacts)/attributes/page.tsx:1:export { AttributesPage as default } from "@/modules/ee/contacts/attributes/page";
apps/web/app/(app)/workspaces/[workspaceId]/(contacts)/contacts/[contactId]/page.tsx:1:import { SingleContactPage } from "@/modules/ee/contacts/[contactId]/page";
apps/web/app/(app)/workspaces/[workspaceId]/(contacts)/contacts/page.tsx:1:import { ContactsPage } from "@/modules/ee/contacts/page";
apps/web/app/(app)/workspaces/[workspaceId]/(contacts)/segments/page.tsx:1:import { SegmentsPage } from "@/modules/ee/contacts/segments/page";
apps/web/app/(app)/workspaces/[workspaceId]/actions.ts:13:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/(app)/workspaces/[workspaceId]/actions.ts:17:} from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/workspaces/[workspaceId]/components/MainNavigationNotices.tsx:8:import { TrialAlert } from "@/modules/ee/billing/components/trial-alert";
apps/web/app/(app)/workspaces/[workspaceId]/components/MainNavigationNotices.tsx:9:import { TRIAL_BASE_RESPONSE_LIMIT, TrialBannerNew } from "@/modules/ee/billing/components/trial-banner-new";
apps/web/app/(app)/workspaces/[workspaceId]/components/WorkspaceLayout.tsx:10:import { TrialEndingWarningModal } from "@/modules/ee/billing/components/trial-ending-warning-modal";
apps/web/app/(app)/workspaces/[workspaceId]/components/WorkspaceLayout.tsx:11:import { TrialResponseWarningModal } from "@/modules/ee/billing/components/trial-response-warning-modal";
apps/web/app/(app)/workspaces/[workspaceId]/components/WorkspaceLayout.tsx:12:import { getPendingDowngradeSchedule } from "@/modules/ee/license-check/lib/license";
apps/web/app/(app)/workspaces/[workspaceId]/components/WorkspaceLayout.tsx:13:import { getOrganizationWorkspacesLimit } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/notifications/actions.ts:7:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/actions.test.ts:24:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/actions.ts:20:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/actions.ts:35: * modules/ee/sso/lib/better-auth-providers.ts) — so `EditProfileDetailsForm` renders the input
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/components/AccountSecurity.tsx:6:import { DisableTwoFactorModal } from "@/modules/ee/two-factor-auth/components/disable-two-factor-modal";
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/components/AccountSecurity.tsx:7:import { EnableTwoFactorModal } from "@/modules/ee/two-factor-auth/components/enable-two-factor-modal";
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/components/EditProfileDetailsForm.tsx:176:                    // (`overrideUserInfo` in modules/ee/sso/lib/better-auth-providers.ts), so an edit
apps/web/app/(app)/workspaces/[workspaceId]/settings/organization/enterprise/components/EnterpriseLicenseFeaturesTable.tsx:7:import type { TEnterpriseLicenseFeatures } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/app/(app)/workspaces/[workspaceId]/settings/organization/enterprise/components/EnterpriseLicenseStatus.tsx:10:import { recheckLicenseAction } from "@/modules/ee/license-check/actions";
apps/web/app/(app)/workspaces/[workspaceId]/settings/organization/enterprise/components/EnterpriseLicenseStatus.tsx:11:import type { TLicenseStatus } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/app/(app)/workspaces/[workspaceId]/settings/organization/general/actions.test.ts:46:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/(app)/workspaces/[workspaceId]/settings/organization/general/actions.test.ts:50:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/(app)/workspaces/[workspaceId]/settings/organization/general/actions.ts:13:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/(app)/workspaces/[workspaceId]/settings/organization/general/actions.ts:14:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/workspaces/[workspaceId]/settings/workspace/integrations/actions.ts:22:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/(app)/workspaces/[workspaceId]/settings/workspace/integrations/notion/page.tsx:18:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/(app)/workspaces/[workspaceId]/settings/workspace/teams/page.tsx:1:import { WorkspaceTeams } from "@/modules/ee/teams/workspace-teams/page";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/responses/page.tsx:18:import { getSegments } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/responses/page.tsx:19:import { getIsContactsEnabled, getIsQuotasEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/responses/page.tsx:20:import { getQuotas } from "@/modules/ee/quotas/lib/quotas";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:19:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:20:import { generatePersonalLinks } from "@/modules/ee/contacts/lib/contacts";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:21:import { NO_CONTACTS_IN_SEGMENT_ERROR_CODE } from "@/modules/ee/contacts/lib/personal-link-errors";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:22:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:23:import { getOrganizationLogoUrl } from "@/modules/ee/whitelabel/email-customization/lib/organization";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/components/SummaryPage.tsx:22:import { QuotasSummary } from "@/modules/ee/quotas/components/quotas-summary";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/personal-links-tab.tsx:12:import { getTranslatedPersonalLinkError } from "@/modules/ee/contacts/lib/personal-link-errors";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/page.tsx:18:import { getSegments } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/page.tsx:19:import { getIsContactsEnabled, getIsQuotasEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/actions.ts:14:import { getIsQuotasEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/actions.ts:15:import { getQuotas } from "@/modules/ee/quotas/lib/quotas";
apps/web/app/(app)/workspaces/[workspaceId]/unify/feedback-records/page.tsx:1:export { default } from "@/modules/ee/unify-feedback/page";
apps/web/app/(app)/workspaces/[workspaceId]/unify/sources/page.tsx:1:export { UnifyFeedbackSourcesPage as default } from "@/modules/ee/unify-feedback/sources/page";
apps/web/app/(app)/workspaces/[workspaceId]/unify/taxonomy/page.tsx:1:export { UnifyTopicsSubtopicsPage as default } from "@/modules/ee/unify-feedback/topics-subtopics/page";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/layout.tsx:3:import { WorkflowsUpgradePrompt } from "@/modules/ee/workflows/components/workflows-upgrade-prompt";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/layout.tsx:4:import { WorkspaceWorkflowsHeaderCta } from "@/modules/ee/workflows/components/workspace-workflows-header-cta";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/layout.tsx:5:import { WorkspaceWorkflowsSecondaryNavigation } from "@/modules/ee/workflows/components/workspace-workflows-secondary-navigation";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/layout.tsx:6:import { getWorkflowsRouteAuth } from "@/modules/ee/workflows/lib/auth";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/loading.tsx:1:export { WorkflowsListBodyLoading as default } from "@/modules/ee/workflows/loading";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/page.tsx:1:import { getWorkflowsRouteAuth } from "@/modules/ee/workflows/lib/auth";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/page.tsx:2:import { WorkflowsListPage } from "@/modules/ee/workflows/pages/workflows-list-page";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/runs/loading.tsx:1:export { WorkspaceWorkflowRunsBodyLoading as default } from "@/modules/ee/workflows/loading";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/(list)/runs/page.tsx:1:import { WorkspaceWorkflowRunsPage } from "@/modules/ee/workflows/pages/workspace-workflow-runs-page";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/layout.tsx:3:import { WorkflowEditorProvider } from "@/modules/ee/workflows/components/workflow-editor-provider";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/layout.tsx:4:import { WorkflowHeaderCta } from "@/modules/ee/workflows/components/workflow-header-cta";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/layout.tsx:5:import { WorkflowPageTitle } from "@/modules/ee/workflows/components/workflow-page-title";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/layout.tsx:6:import { WorkflowSecondaryNavigation } from "@/modules/ee/workflows/components/workflow-secondary-navigation";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/layout.tsx:7:import { WorkflowsUpgradePrompt } from "@/modules/ee/workflows/components/workflows-upgrade-prompt";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/layout.tsx:8:import { getWorkflowsRouteAuth } from "@/modules/ee/workflows/lib/auth";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/loading.tsx:1:export { WorkflowBuilderBodyLoading as default } from "@/modules/ee/workflows/loading";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/page.tsx:1:import { getWorkflowsRouteAuth } from "@/modules/ee/workflows/lib/auth";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/page.tsx:2:import { getWorkflowEmailAuthoringContext } from "@/modules/ee/workflows/lib/email-authoring-context";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/page.tsx:3:import { WorkflowBuilderPage } from "@/modules/ee/workflows/pages/workflow-builder-page";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/runs/loading.tsx:1:export { WorkflowRunsBodyLoading as default } from "@/modules/ee/workflows/loading";
apps/web/app/(app)/workspaces/[workspaceId]/workflows/[workflowId]/(detail)/runs/page.tsx:1:import { WorkflowRunsPage } from "@/modules/ee/workflows/pages/workflow-runs-page";
apps/web/app/api/(internal)/organizations/[organizationId]/usage/route.test.ts:29:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/api/(internal)/unify-feedback/sources/csv/import/route.ts:19:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/app/api/auth/[...all]/route.test.ts:40:vi.mock("@/modules/ee/sso/lib/sso-request-context", () => ({
apps/web/app/api/auth/[...all]/route.ts:11:import { runWithSsoRequestContext } from "@/modules/ee/sso/lib/sso-request-context";
apps/web/app/api/auth/saml/authorize/route.ts:1:import { GET } from "@/modules/ee/auth/saml/api/authorize/route";
apps/web/app/api/auth/saml/callback/route.ts:1:import { POST } from "@/modules/ee/auth/saml/api/callback/route";
apps/web/app/api/auth/saml/token/route.ts:1:import { POST } from "@/modules/ee/auth/saml/api/token/route";
apps/web/app/api/auth/saml/userinfo/route.ts:1:import { GET } from "@/modules/ee/auth/saml/api/userinfo/route";
apps/web/app/api/auth/sso/recovery/complete/route.test.ts:4:import { SsoRecoveryError, completeSsoRecovery } from "@/modules/ee/sso/lib/sso-recovery";
apps/web/app/api/auth/sso/recovery/complete/route.test.ts:31:vi.mock("@/modules/ee/sso/lib/sso-recovery", async (importOriginal) => ({
apps/web/app/api/auth/sso/recovery/complete/route.test.ts:32:  ...(await importOriginal<typeof import("@/modules/ee/sso/lib/sso-recovery")>()),
apps/web/app/api/auth/sso/recovery/complete/route.ts:13:} from "@/modules/ee/sso/lib/sso-recovery";
apps/web/app/api/billing/stripe-webhook/route.ts:1:import { POST } from "@/modules/ee/billing/api/route";
apps/web/app/api/client/[workspaceId]/responses/lib/response.ts:9:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/internal/feedback-datasets/lib/access.test.ts:4:import { getOrganizationIdFromDirectoryId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/internal/feedback-datasets/lib/access.test.ts:5:import { getIsFeedbackDirectoriesEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/internal/feedback-datasets/lib/access.test.ts:14:vi.mock("@/modules/ee/feedback-directory/lib/feedback-directory", () => ({
apps/web/app/api/internal/feedback-datasets/lib/access.test.ts:18:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/internal/feedback-datasets/lib/access.ts:6:import { getOrganizationIdFromDirectoryId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/internal/feedback-datasets/lib/access.ts:7:import { getIsFeedbackDirectoriesEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v1/client/[workspaceId]/displays/route.ts:10:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v1/client/[workspaceId]/responses/[responseId]/lib/put-response-handler.ts:16:import { createQuotaFullObject } from "@/modules/ee/quotas/lib/helpers";
apps/web/app/api/v1/client/[workspaceId]/responses/[responseId]/lib/response.test.ts:6:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/client/[workspaceId]/responses/[responseId]/lib/response.test.ts:10:vi.mock("@/modules/ee/quotas/lib/evaluation-service");
apps/web/app/api/v1/client/[workspaceId]/responses/[responseId]/lib/response.ts:6:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/client/[workspaceId]/responses/lib/response.test.ts:15:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/client/[workspaceId]/responses/lib/response.test.ts:66:vi.mock("@/modules/ee/quotas/lib/evaluation-service", () => ({
apps/web/app/api/v1/client/[workspaceId]/responses/route.test.ts:70:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/v1/client/[workspaceId]/responses/route.test.ts:74:vi.mock("@/modules/ee/quotas/lib/helpers", () => ({
apps/web/app/api/v1/client/[workspaceId]/responses/route.ts:21:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v1/client/[workspaceId]/responses/route.ts:22:import { createQuotaFullObject } from "@/modules/ee/quotas/lib/helpers";
apps/web/app/api/v1/client/[workspaceId]/storage/route.ts:13:import { getBiggerUploadFileSizePermission } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v1/client/[workspaceId]/user/route.ts:1:import { OPTIONS, POST } from "@/modules/ee/contacts/api/v1/client/[workspaceId]/user/route";
apps/web/app/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route.ts:5:} from "@/modules/ee/contacts/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route";
apps/web/app/api/v1/management/contact-attribute-keys/route.ts:1:import { GET, POST } from "@/modules/ee/contacts/api/v1/management/contact-attribute-keys/route";
apps/web/app/api/v1/management/contact-attributes/route.ts:1:import { GET } from "@/modules/ee/contacts/api/v1/management/contact-attributes/route";
apps/web/app/api/v1/management/contacts/[contactId]/route.ts:1:import { DELETE, GET } from "@/modules/ee/contacts/api/v1/management/contacts/[contactId]/route";
apps/web/app/api/v1/management/contacts/route.ts:1:import { GET } from "@/modules/ee/contacts/api/v1/management/contacts/route";
apps/web/app/api/v1/management/responses/[responseId]/lib/response.test.ts:5:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/management/responses/[responseId]/lib/response.test.ts:9:vi.mock("@/modules/ee/quotas/lib/evaluation-service");
apps/web/app/api/v1/management/responses/[responseId]/lib/response.ts:5:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/management/responses/lib/response.ts:18:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/management/surveys/lib/utils.test.ts:10:import { getIsSpamProtectionEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v1/management/surveys/lib/utils.test.ts:22:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/v1/management/surveys/lib/utils.ts:5:import { getIsSpamProtectionEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v2/client/[workspaceId]/displays/route.ts:11:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v2/client/[workspaceId]/responses/lib/response.test.ts:19:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v2/client/[workspaceId]/responses/lib/response.test.ts:63:vi.mock("@/modules/ee/quotas/lib/evaluation-service");
apps/web/app/api/v2/client/[workspaceId]/responses/lib/utils.test.ts:13:import { getIsSpamProtectionEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v2/client/[workspaceId]/responses/lib/utils.test.ts:33:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/v2/client/[workspaceId]/responses/route.test.ts:68:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/v2/client/[workspaceId]/responses/route.test.ts:72:vi.mock("@/modules/ee/quotas/lib/helpers", () => ({
apps/web/app/api/v2/client/[workspaceId]/responses/route.ts:20:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v2/client/[workspaceId]/responses/route.ts:21:import { createQuotaFullObject } from "@/modules/ee/quotas/lib/helpers";
apps/web/app/api/v2/client/[workspaceId]/user/route.ts:1:import { OPTIONS, POST } from "@/modules/ee/contacts/api/v1/client/[workspaceId]/user/route";
apps/web/app/api/v2/management/contacts/bulk/route.ts:1:import { PUT } from "@/modules/ee/contacts/api/v2/management/contacts/bulk/route";
apps/web/app/api/v2/management/contacts/route.ts:1:export { POST } from "@/modules/ee/contacts/api/v2/management/contacts/route";
apps/web/app/api/v3/contact-attribute-keys/lib/operations.test.ts:5:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/api/v3/contact-attribute-keys/lib/operations.test.ts:6:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/contact-attribute-keys/lib/operations.test.ts:19:vi.mock("@/modules/ee/contacts/lib/contact-attribute-keys", () => ({
apps/web/app/api/v3/contact-attribute-keys/lib/operations.test.ts:23:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/v3/contact-attribute-keys/lib/operations.ts:5:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/api/v3/contact-attribute-keys/lib/operations.ts:6:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/feedbackRecords/lib/access.ts:13:} from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/feedbackRecords/lib/access.ts:14:import type { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/app/api/v3/feedbackRecords/lib/access.ts:73: * Mirrors the Unify read path (`modules/ee/unify-feedback/page.tsx`). `tenant_id` is never taken from caller input.
apps/web/app/api/v3/feedbackRecords/lib/operations.test.ts:9:} from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/feedbackRecords/lib/operations.test.ts:10:import { getIsFeedbackDirectoriesEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/feedbackRecords/lib/operations.test.ts:47:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getIsFeedbackDirectoriesEnabled: vi.fn() }));
apps/web/app/api/v3/feedbackRecords/lib/operations.test.ts:48:vi.mock("@/modules/ee/feedback-directory/lib/feedback-directory", () => ({
apps/web/app/api/v3/feedbackRecords/lib/operations.ts:14:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/feedbackRecords/lib/operations.ts:15:import type { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/app/api/v3/lib/api-wrapper.test.ts:47:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/api/v3/lib/api-wrapper.test.ts:77:    const { queueAuditEvent } = await import("@/modules/ee/audit-logs/lib/handler");
apps/web/app/api/v3/lib/api-wrapper.test.ts:135:    const { queueAuditEvent } = await import("@/modules/ee/audit-logs/lib/handler");
apps/web/app/api/v3/lib/api-wrapper.ts:14:import { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/app/api/v3/lib/audit.ts:3:import { queueAuditEvent } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/api/v3/lib/audit.ts:4:import { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/app/api/v3/lib/auth.ts:9:import type { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/app/api/v3/lib/feedback-access.ts:2:import { getIsFeedbackDirectoriesEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/lib/feedback-access.ts:3:import type { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/app/api/v3/responses/[responseId]/route.test.ts:23:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/api/v3/responses/batch-delete/route.test.ts:23:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/api/v3/responses/lib/service.integration.test.ts:137:    // The repo's only fullness predicate, from `modules/ee/quotas/lib/utils.ts`.
apps/web/app/api/v3/responses/lib/service.test.ts:60:vi.mock("@/modules/ee/quotas/lib/quotas", () => ({ reduceQuotaLimits: mockReduceQuotas }));
apps/web/app/api/v3/responses/lib/service.ts:175:      // (`modules/ee/quotas/lib/utils.ts`) counting those same live rows — so the cascade *already*
apps/web/app/api/v3/responses/lib/validate-effects.ts:14:import { screenResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v3/responses/lib/validate-operations.test.ts:51:vi.mock("@/modules/ee/quotas/lib/evaluation-service", () => ({ screenResponseQuotas: mockScreenQuotas }));
apps/web/app/api/v3/responses/lib/write-service.test.ts:57:vi.mock("@/modules/ee/quotas/lib/evaluation-service", () => ({ evaluateResponseQuotas: mockEvaluateQuotas }));
apps/web/app/api/v3/responses/lib/write-service.ts:20:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v3/surveys/targeting.test.ts:7:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/api/v3/surveys/targeting.test.ts:8:import { getExistingWorkspaceSurveyIds, getSegments } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/app/api/v3/surveys/targeting.test.ts:9:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/surveys/targeting.test.ts:33:vi.mock("@/modules/ee/contacts/lib/contact-attribute-keys", () => ({
apps/web/app/api/v3/surveys/targeting.test.ts:37:vi.mock("@/modules/ee/contacts/segments/lib/segments", () => ({
apps/web/app/api/v3/surveys/targeting.test.ts:42:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/v3/surveys/targeting.ts:14:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/api/v3/surveys/targeting.ts:15:import { getExistingWorkspaceSurveyIds, getSegments } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/app/api/v3/surveys/targeting.ts:16:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/aggregate.ts:4:} from "@/modules/ee/unify-feedback/enrichment-status/lib/enrichment";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/operations.test.ts:4:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/operations.test.ts:5:import type { TEnrichmentStatusResponse } from "@/modules/ee/unify-feedback/enrichment-status/lib/enrichment";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/operations.test.ts:17:vi.mock("@/modules/ee/feedback-directory/lib/feedback-directory", () => ({
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/operations.ts:5:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/operations.ts:6:import type { TEnrichmentStatusResponse } from "@/modules/ee/unify-feedback/enrichment-status/lib/enrichment";
apps/web/app/api/v3/unify-feedback/taxonomy/lib/access.test.ts:6:import { getIsFeedbackDirectoriesEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/unify-feedback/taxonomy/lib/access.test.ts:18:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/app/api/v3/unify-feedback/taxonomy/lib/access.ts:9:import type { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/app/api/v3/workflows/lib/analytics.ts:11:} from "@/modules/ee/workflows/lib/analytics-events";
apps/web/app/api/v3/workflows/lib/context.test.ts:8:import { getIsWorkflowsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/api/v3/workflows/lib/context.test.ts:22:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getIsWorkflowsEnabled: vi.fn() }));
apps/web/app/api/v3/workflows/lib/context.ts:17:import { getIsWorkflowsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/lib/api/with-api-logging.test.ts:17:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/lib/api/with-api-logging.test.ts:122:      (await import("@/modules/ee/audit-logs/lib/handler")) as unknown as { queueAuditEvent: Mock };
apps/web/app/lib/api/with-api-logging.test.ts:238:      (await import("@/modules/ee/audit-logs/lib/handler")) as unknown as { queueAuditEvent: Mock };
apps/web/app/lib/api/with-api-logging.test.ts:284:      (await import("@/modules/ee/audit-logs/lib/handler")) as unknown as { queueAuditEvent: Mock };
apps/web/app/lib/api/with-api-logging.test.ts:410:      (await import("@/modules/ee/audit-logs/lib/handler")) as unknown as { queueAuditEvent: Mock };
apps/web/app/lib/api/with-api-logging.test.ts:464:      (await import("@/modules/ee/audit-logs/lib/handler")) as unknown as { queueAuditEvent: Mock };
apps/web/app/lib/api/with-api-logging.test.ts:771:      (await import("@/modules/ee/audit-logs/lib/handler")) as unknown as { queueAuditEvent: Mock };
apps/web/app/lib/api/with-api-logging.ts:25:import { queueAuditEvent } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/lib/api/with-api-logging.ts:26:import { TAuditAction, TAuditTarget, UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/app/setup/organization/create/actions.ts:13:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/setup/organization/create/actions.ts:14:import { ensureCloudStripeSetupForOrganization } from "@/modules/ee/billing/lib/organization-billing";
apps/web/app/setup/organization/create/actions.ts:15:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.test.ts:7:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.test.ts:27:    const { queueAuditEvent } = await import("@/modules/ee/audit-logs/lib/handler");
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.test.ts:59:    const { queueAuditEvent } = await import("@/modules/ee/audit-logs/lib/handler");
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.test.ts:60:    const { UNKNOWN_DATA } = await import("@/modules/ee/audit-logs/types/audit-log");
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.test.ts:85:    const { queueAuditEvent } = await import("@/modules/ee/audit-logs/lib/handler");
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.test.ts:86:    const { UNKNOWN_DATA } = await import("@/modules/ee/audit-logs/types/audit-log");
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.test.ts:102:    const { queueAuditEvent } = await import("@/modules/ee/audit-logs/lib/handler");
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.ts:3:import { queueAuditEvent } from "@/modules/ee/audit-logs/lib/handler";
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.ts:4:import { TAuditStatus, UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/instrumentation-jobs.test.ts:126:vi.mock("@/modules/ee/workflows/lib/runner/process-workflow-run-job", () => ({
apps/web/instrumentation-jobs.test.ts:130:vi.mock("@/modules/ee/workflows/lib/runner/process-workflow-run-reconcile-job", () => ({
apps/web/instrumentation-jobs.test.ts:134:vi.mock("@/modules/ee/workflows/lib/analytics/process-workflows-usage-snapshot-job", () => ({
apps/web/instrumentation-jobs.test.ts:505:        await import("@/modules/ee/workflows/lib/runner/reconcile-constants");
apps/web/instrumentation-jobs.test.ts:507:        await import("@/modules/ee/workflows/lib/analytics/constants");
apps/web/integration/credential-backfill.integration.test.ts:6:import { canonicalAccountIssuer } from "@/modules/ee/sso/lib/constants";
apps/web/lib/ai/service.test.ts:83:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/lib/ai/service.ts:25:import { getIsAISmartToolsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/lib/authorization/checks-per-request-dashboards.integration.test.ts:7:import { getDashboards } from "@/modules/ee/analysis/dashboards/lib/dashboards";
apps/web/lib/authorization/permission-action.ts:3:import type { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/lib/authorization/resource-inventory.test.ts:27:    join(REPOSITORY_ROOT, "apps/web/modules/ee/audit-logs/types/audit-log.ts"),
apps/web/lib/constants.ts:239:export { ENTERPRISE_LICENSE_REQUEST_FORM_URL } from "@/modules/ee/license-check/lib/lite-license";
apps/web/lib/feedback-source/actions.test.ts:53:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/lib/feedback-source/actions.test.ts:56:vi.mock("@/modules/ee/feedback-directory/lib/feedback-directory", () => ({
apps/web/lib/feedback-source/actions.test.ts:59:vi.mock("@/modules/ee/unify-feedback/lib/contacts", () => ({ getContactIdsByUserIds: vi.fn() }));
apps/web/lib/feedback-source/actions.ts:24:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/lib/feedback-source/actions.ts:25:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/lib/feedback-source/actions.ts:26:import { getContactIdsByUserIds } from "@/modules/ee/unify-feedback/lib/contacts";
apps/web/lib/feedback-source/csv-file-import.test.ts:10:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/csv-file-import.ts:13:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/csv-import.test.ts:4:import { CSV_IMPORT_MISSING_COLUMNS_ERROR_CODE } from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/csv-import.ts:4:import { CSV_IMPORT_MISSING_COLUMNS_ERROR_CODE } from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/utils.ts:10:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/jobs/recurring-registrations.ts:21:} from "@/modules/ee/workflows/lib/analytics/constants";
apps/web/lib/jobs/recurring-registrations.ts:22:import { processWorkflowsUsageSnapshotJob } from "@/modules/ee/workflows/lib/analytics/process-workflows-usage-snapshot-job";
apps/web/lib/jobs/recurring-registrations.ts:23:import { processWorkflowRunJob } from "@/modules/ee/workflows/lib/runner/process-workflow-run-job";
apps/web/lib/jobs/recurring-registrations.ts:24:import { processWorkflowRunReconcileJob } from "@/modules/ee/workflows/lib/runner/process-workflow-run-reconcile-job";
apps/web/lib/jobs/recurring-registrations.ts:25:import { WORKFLOW_RUN_RECONCILE_INTERVAL_MS } from "@/modules/ee/workflows/lib/runner/reconcile-constants";
apps/web/lib/organization/service.test.ts:16:} from "@/modules/ee/billing/lib/organization-billing";
apps/web/lib/organization/service.test.ts:77:vi.mock("@/modules/ee/billing/lib/organization-billing", () => ({
apps/web/lib/organization/service.ts:27:import { cleanupStripeCustomer } from "@/modules/ee/billing/lib/organization-billing";
apps/web/lib/response/service.test.ts:63:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/lib/response/service.ts:22:import { getIsQuotasEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/lib/response/service.ts:23:import { reduceQuotaLimits } from "@/modules/ee/quotas/lib/quotas";
apps/web/lib/survey/service.scheduling.test.ts:27:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/lib/survey/service.ts:34:import { getSurveyWorkspaceIdMap } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/lib/telemetry/usage-update.test.ts:65:vi.mock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:204:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:315:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:367:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:452:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:478:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:497:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:554:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.test.ts:573:    vi.doMock("@/modules/ee/license-check/lib/license", () => ({
apps/web/lib/telemetry/usage-update.ts:9:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/lib/utils/action-client/index.test.ts:58:vi.mock("@/modules/ee/audit-logs/types/audit-log", () => ({
apps/web/lib/utils/action-client/index.ts:11:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/lib/utils/logger-helpers.test.ts:21:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/lib/utils/logger-helpers.test.ts:39:vi.mock("@/modules/ee/audit-logs/lib/service", () => ({
apps/web/lib/utils/logger-helpers.test.ts:184:    const { withAuditLogging } = await import("../../modules/ee/audit-logs/lib/handler");
apps/web/lib/utils/logger-helpers.test.ts:222:    const { withAuditLogging } = await import("../../modules/ee/audit-logs/lib/handler");
apps/web/lib/utils/prisma-deadlock.ts:27: * cycle can form in the first place (see updateAttributes in modules/ee/contacts/lib/attributes.ts).
apps/web/lib/utils/services.test.ts:22:import { getQuota as getQuotaService } from "@/modules/ee/quotas/lib/quotas";
apps/web/lib/utils/services.test.ts:109:vi.mock("@/modules/ee/quotas/lib/quotas", () => ({
apps/web/lib/utils/services.ts:9:import { getQuota as getQuotaService } from "@/modules/ee/quotas/lib/quotas";
apps/web/modules/account/lib/account-deletion-audit.ts:3:import { queueAuditEventBackground } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/account/lib/account-deletion-audit.ts:4:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/account/lib/better-auth-account-deletion-request.integration.test.ts:9:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/account/lib/better-auth-account-deletion-request.integration.test.ts:45:vi.mock("@/modules/ee/license-check/lib/utils", async (importOriginal) => {
apps/web/modules/account/lib/better-auth-account-deletion.integration.test.ts:6:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/account/lib/better-auth-account-deletion.integration.test.ts:11:vi.mock("@/modules/ee/license-check/lib/utils", async (importOriginal) => {
apps/web/modules/account/lib/better-auth-account-deletion.test.ts:10:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/account/lib/better-auth-account-deletion.test.ts:33:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getIsMultiOrgEnabled: vi.fn() }));
apps/web/modules/account/lib/better-auth-account-deletion.ts:13:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/account/lib/better-auth-account-deletion.ts:14:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/analysis/components/SingleResponseCard/actions.ts:21:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/analysis/components/SingleResponseCard/components/SingleResponseCardBody.tsx:18:import { ResponseCardQuotas } from "@/modules/ee/quotas/components/single-response-card-quotas";
apps/web/modules/api/lib/verify-response-recaptcha.ts:8:import { getIsSpamProtectionEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/api/v2/auth/authenticated-api-client.ts:5:import { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/api/v2/lib/tests/element.test.ts:24:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/api/v2/lib/utils.ts:9:import { queueAuditEvent } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/api/v2/management/authorized-collection-routes.test.ts:36:vi.mock("@/modules/ee/license-check/lib/contacts-api-guard", () => ({
apps/web/modules/api/v2/management/contact-attribute-keys/[contactAttributeKeyId]/route.ts:18:import { checkContactsEnabledApiV2 } from "@/modules/ee/license-check/lib/contacts-api-guard";
apps/web/modules/api/v2/management/contact-attribute-keys/lib/contact-attribute-key.ts:17:} from "@/modules/ee/contacts/lib/attribute-key-policy";
apps/web/modules/api/v2/management/contact-attribute-keys/route.ts:16:import { checkContactsEnabledApiV2 } from "@/modules/ee/license-check/lib/contacts-api-guard";
apps/web/modules/api/v2/management/contact-attribute-keys/types/contact-attribute-keys.ts:8:} from "@/modules/ee/contacts/lib/attribute-key-policy";
apps/web/modules/api/v2/management/responses/[responseId]/lib/response.ts:16:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/modules/api/v2/management/responses/[responseId]/lib/tests/response.test.ts:9:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/modules/api/v2/management/responses/[responseId]/lib/tests/response.test.ts:64:vi.mock("@/modules/ee/quotas/lib/evaluation-service", () => ({
apps/web/modules/api/v2/management/responses/lib/response.ts:18:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/contacts/[contactId]/route.ts:18:import { getContactSurveyLink } from "@/modules/ee/contacts/lib/contact-survey-link";
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/contacts/[contactId]/route.ts:19:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/segments/[segmentId]/lib/contact.ts:6:import { segmentFilterToPrismaQuery } from "@/modules/ee/contacts/segments/lib/filter/prisma-query";
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/segments/[segmentId]/lib/tests/contact.test.ts:6:import { segmentFilterToPrismaQuery } from "@/modules/ee/contacts/segments/lib/filter/prisma-query";
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/segments/[segmentId]/lib/tests/contact.test.ts:48:vi.mock("@/modules/ee/contacts/segments/lib/filter/prisma-query", () => ({
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/segments/[segmentId]/route.ts:16:import { getContactSurveyLink } from "@/modules/ee/contacts/lib/contact-survey-link";
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/segments/[segmentId]/route.ts:17:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/api/v2/openapi-document.ts:26:import { bulkContactPaths } from "@/modules/ee/contacts/api/v2/management/contacts/bulk/lib/openapi";
apps/web/modules/api/v2/openapi-document.ts:27:import { contactPaths } from "@/modules/ee/contacts/api/v2/management/contacts/lib/openapi";
apps/web/modules/api/v2/organizations/[organizationId]/teams/[teamId]/route.ts:23:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/api/v2/organizations/[organizationId]/users/lib/users.ts:222:    // Mirrors the last-owner guard in modules/ee/role-management/actions.ts: without it, this
apps/web/modules/api/v2/organizations/[organizationId]/users/lib/utils.ts:101: * (modules/ee/role-management/actions.ts): an owner may assign any role, a manager may only assign
apps/web/modules/api/v2/organizations/[organizationId]/users/route.ts:28:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/api/v2/organizations/[organizationId]/workspace-teams/route.ts:15:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/forgot-password/actions.test.ts:44:// Passthrough so the handler runs directly, matching modules/ee/billing/actions.test.ts. Importing the
apps/web/modules/auth/forgot-password/actions.test.ts:46:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/auth/forgot-password/actions.ts:16:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/forgot-password/forgot-password-email-case.integration.test.ts:43:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => {
apps/web/modules/auth/forgot-password/forgot-password-email-case.integration.test.ts:44:  const actual = await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>();
apps/web/modules/auth/layout.tsx:6:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/lib/after-auth-hooks.test.ts:5:} from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/after-auth-hooks.test.ts:11:vi.mock("@/modules/ee/sso/lib/better-auth-hooks", () => ({
apps/web/modules/auth/lib/after-auth-hooks.ts:6:} from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/auth-email-verification.integration.test.ts:7:import { queueAuditEventBackground } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/lib/auth-email-verification.integration.test.ts:22:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => {
apps/web/modules/auth/lib/auth-email-verification.integration.test.ts:23:  const actual = await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>();
apps/web/modules/auth/lib/auth.ts:29:import { ssoDatabaseHooks, ssoLicenseGateBeforeHandler } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/auth.ts:30:import { ssoGenericOAuthConfig, ssoSocialProviders } from "@/modules/ee/sso/lib/better-auth-providers";
apps/web/modules/auth/lib/auth.ts:31:import { ssoRecoverySignInPlugin } from "@/modules/ee/sso/lib/better-auth-recovery-signin";
apps/web/modules/auth/lib/auth.ts:111:  // modules/ee/sso/lib/better-auth-providers.ts. The account-linking / verify-before-link flow is
apps/web/modules/auth/lib/better-auth-error-context.integration.test.ts:34:vi.mock("@/modules/ee/sso/lib/better-auth-hooks", async (importActual) => ({
apps/web/modules/auth/lib/better-auth-error-context.integration.test.ts:35:  ...(await importActual<typeof import("@/modules/ee/sso/lib/better-auth-hooks")>()),
apps/web/modules/auth/lib/better-auth-error-context.integration.test.ts:95:    const { ssoLicenseGateBeforeHandler } = await import("@/modules/ee/sso/lib/better-auth-hooks");
apps/web/modules/auth/lib/better-auth-hibp.ts:7:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/better-auth-observability.integration.test.ts:7:import * as auditHandler from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/lib/better-auth-observability.integration.test.ts:10:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => {
apps/web/modules/auth/lib/better-auth-observability.integration.test.ts:11:  const actual = await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>();
apps/web/modules/auth/lib/better-auth-observability.test.ts:10:import { queueAuditEventBackground } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/lib/better-auth-observability.test.ts:11:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/lib/better-auth-observability.test.ts:28:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/auth/lib/better-auth-observability.ts:9:import { queueAuditEventBackground } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/lib/better-auth-observability.ts:10:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/lib/better-auth-observability.ts:11:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/better-auth-schema-contract.test.ts:96:  user: { image: { file: "../../ee/sso/lib/better-auth-hooks.ts", strips: "image: undefined" } },
apps/web/modules/auth/lib/better-auth-two-factor-backfill.test.ts:5:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/better-auth-two-factor-backfill.ts:6:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/better-auth-two-factor-backfill.ts:9: * ENG-1824 self-heal. The custom 2FA enable flow (`modules/ee/two-factor-auth`) historically wrote the
apps/web/modules/auth/lib/better-auth-verification-autosignin.integration.test.ts:7:import { queueAuditEventBackground } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/lib/better-auth-verification-autosignin.integration.test.ts:12:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => ({
apps/web/modules/auth/lib/better-auth-verification-autosignin.integration.test.ts:13:  ...(await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>()),
apps/web/modules/auth/lib/better-auth-verification-autosignin.ts:6:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/credential-issuer-heal.integration.test.ts:28:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => {
apps/web/modules/auth/lib/credential-issuer-heal.integration.test.ts:29:  const actual = await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>();
apps/web/modules/auth/lib/credential-issuer-heal.ts:5:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/credential-signup-backstop.test.ts:7:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/lib/credential-signup-backstop.test.ts:16:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getIsMultiOrgEnabled: vi.fn() }));
apps/web/modules/auth/lib/legacy-sso-callback.integration.test.ts:4:import { runWithSsoRequestContext } from "@/modules/ee/sso/lib/sso-request-context";
apps/web/modules/auth/lib/signup-policy.test.ts:5:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/lib/signup-policy.test.ts:15:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getIsMultiOrgEnabled: vi.fn() }));
apps/web/modules/auth/lib/signup-policy.ts:7:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/lib/signup-policy.ts:8:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/sso-provisioning-reject-reasons.ts:19: * It lives in OSS `modules/auth`, not beside the gate in `modules/ee`, although the gate is the only
apps/web/modules/auth/lib/sso-provisioning-reject-reasons.ts:20: * thing that produces these codes. `modules/ee` is under a separate licence, and the consumers here
apps/web/modules/auth/lib/update-user-endpoint.integration.test.ts:5:import { runWithSsoRequestContext } from "@/modules/ee/sso/lib/sso-request-context";
apps/web/modules/auth/lib/utils.test.ts:3:import { queueAuditEventBackground } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/lib/utils.test.ts:4:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/lib/utils.test.ts:21:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/auth/lib/utils.ts:6:import { queueAuditEventBackground } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/lib/utils.ts:7:import { TAuditAction, TAuditStatus, UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/lib/verification-links.ts:8: * They live here, not in `modules/ee/sso/lib/constants.ts`, because OSS code needs them — this file
apps/web/modules/auth/lib/verification-links.ts:10: * against the completion path — and `.coderabbit.yaml` (`apps/web/modules/ee/**`) forbids OSS importing
apps/web/modules/auth/lib/verification-links.ts:11: * from `modules/ee` outside the `license-check` gate. Route paths carry no entitlement, so the fix is
apps/web/modules/auth/login/components/login-form.tsx:16:import { SSOOptions } from "@/modules/ee/sso/components/sso-options";
apps/web/modules/auth/login/components/login-form.tsx:17:import { TwoFactor } from "@/modules/ee/two-factor-auth/components/two-factor";
apps/web/modules/auth/login/components/login-form.tsx:18:import { TwoFactorBackup } from "@/modules/ee/two-factor-auth/components/two-factor-backup";
apps/web/modules/auth/login/page.tsx:25:} from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/signup/actions.test.ts:19:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/signup/actions.test.ts:20:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/signup/actions.test.ts:21:import { subscribeUserToMailingList } from "@/modules/ee/mailing/lib/mailing-subscription";
apps/web/modules/auth/signup/actions.test.ts:76:vi.mock("@/modules/ee/billing/lib/organization-billing", () => ({
apps/web/modules/auth/signup/actions.test.ts:79:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getIsMultiOrgEnabled: vi.fn() }));
apps/web/modules/auth/signup/actions.test.ts:80:vi.mock("@/modules/ee/mailing/lib/mailing-subscription", () => ({ subscribeUserToMailingList: vi.fn() }));
apps/web/modules/auth/signup/actions.test.ts:114:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/auth/signup/actions.ts:55:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/signup/actions.ts:56:import { ensureCloudStripeSetupForOrganization } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/auth/signup/actions.ts:57:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/signup/actions.ts:58:import { subscribeUserToMailingList } from "@/modules/ee/mailing/lib/mailing-subscription";
apps/web/modules/auth/signup/components/signup-form.tsx:26:import { SSOOptions } from "@/modules/ee/sso/components/sso-options";
apps/web/modules/auth/signup/page.tsx:27:} from "@/modules/ee/license-check/lib/utils";
apps/web/modules/auth/signup/signup-closed-instance.integration.test.ts:5:import { runWithSsoRequestContext } from "@/modules/ee/sso/lib/sso-request-context";
apps/web/modules/auth/signup/signup-closed-instance.integration.test.ts:37:vi.mock("@/modules/ee/license-check/lib/utils", async (importOriginal) => ({
apps/web/modules/auth/signup/signup-closed-instance.integration.test.ts:38:  ...(await importOriginal<typeof import("@/modules/ee/license-check/lib/utils")>()),
apps/web/modules/auth/signup/signup-duplicate-email.integration.test.ts:30:vi.mock("@/modules/ee/license-check/lib/utils", async (importOriginal) => ({
apps/web/modules/auth/signup/signup-duplicate-email.integration.test.ts:31:  ...(await importOriginal<typeof import("@/modules/ee/license-check/lib/utils")>()),
apps/web/modules/auth/signup/signup-invite.integration.test.ts:7:import { subscribeUserToMailingList } from "@/modules/ee/mailing/lib/mailing-subscription";
apps/web/modules/auth/signup/signup-invite.integration.test.ts:38:vi.mock("@/modules/ee/license-check/lib/utils", async (importOriginal) => ({
apps/web/modules/auth/signup/signup-invite.integration.test.ts:39:  ...(await importOriginal<typeof import("@/modules/ee/license-check/lib/utils")>()),
apps/web/modules/auth/signup/signup-invite.integration.test.ts:43:vi.mock("@/modules/ee/mailing/lib/mailing-subscription", () => ({
apps/web/modules/auth/signup/signup-invite.integration.test.ts:47:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => {
apps/web/modules/auth/signup/signup-invite.integration.test.ts:48:  const actual = await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>();
apps/web/modules/auth/signup/signup-sso-existing-account.integration.test.ts:6:import { subscribeUserToMailingList } from "@/modules/ee/mailing/lib/mailing-subscription";
apps/web/modules/auth/signup/signup-sso-existing-account.integration.test.ts:37:vi.mock("@/modules/ee/license-check/lib/utils", async (importOriginal) => ({
apps/web/modules/auth/signup/signup-sso-existing-account.integration.test.ts:38:  ...(await importOriginal<typeof import("@/modules/ee/license-check/lib/utils")>()),
apps/web/modules/auth/signup/signup-sso-existing-account.integration.test.ts:42:vi.mock("@/modules/ee/mailing/lib/mailing-subscription", () => ({
apps/web/modules/auth/signup/signup-sso-existing-account.integration.test.ts:46:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => {
apps/web/modules/auth/signup/signup-sso-existing-account.integration.test.ts:47:  const actual = await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>();
apps/web/modules/auth/signup/signup-verification-send.integration.test.ts:26:vi.mock("@/modules/ee/mailing/lib/mailing-subscription", () => ({
apps/web/modules/auth/signup/signup-verification-send.integration.test.ts:30:vi.mock("@/modules/ee/audit-logs/lib/handler", async (importOriginal) => {
apps/web/modules/auth/signup/signup-verification-send.integration.test.ts:31:  const actual = await importOriginal<typeof import("@/modules/ee/audit-logs/lib/handler")>();
apps/web/modules/auth/verification-requested/actions.test.ts:8:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/verification-requested/actions.test.ts:68:vi.mock("@/modules/ee/sso/lib/recovery-intent", () => ({
apps/web/modules/auth/verification-requested/actions.test.ts:82:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/auth/verification-requested/actions.ts:30:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/auth/verification-requested/actions.ts:36:} from "@/modules/ee/sso/lib/recovery-intent";
apps/web/modules/auth/verify-email-change/actions.test.ts:38:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/auth/verify-email-change/actions.ts:10:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/entitlements/lib/checks.ts:3:import type { TEnterpriseLicenseFeatures } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/entitlements/lib/cloud-provider.test.ts:3:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/entitlements/lib/cloud-provider.test.ts:4:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/entitlements/lib/cloud-provider.test.ts:13:vi.mock("@/modules/ee/billing/lib/organization-billing", () => ({
apps/web/modules/entitlements/lib/cloud-provider.test.ts:22:vi.mock("@/modules/ee/license-check/lib/license", () => ({
apps/web/modules/entitlements/lib/cloud-provider.ts:6:} from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/entitlements/lib/cloud-provider.ts:7:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/entitlements/lib/self-hosted-provider.test.ts:5:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/entitlements/lib/self-hosted-provider.test.ts:6:import { TEnterpriseLicenseFeatures } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/entitlements/lib/self-hosted-provider.test.ts:15:vi.mock("@/modules/ee/license-check/lib/license", () => ({
apps/web/modules/entitlements/lib/self-hosted-provider.ts:6:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/entitlements/lib/types.ts:6:} from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/envoy-auth/service.test.ts:55:vi.mock("@/modules/ee/feedback-directory/lib/feedback-directory", () => ({
apps/web/modules/envoy-auth/service.test.ts:59:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/hub/feedback-records-gateway.test.ts:7:import { getFeedbackDirectoryAuthContext } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/modules/hub/feedback-records-gateway.test.ts:8:import { getIsFeedbackDirectoriesEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/hub/feedback-records-gateway.test.ts:38:vi.mock("@/modules/ee/feedback-directory/lib/feedback-directory", () => ({
apps/web/modules/hub/feedback-records-gateway.test.ts:42:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/hub/feedback-records-gateway.ts:12:import { getFeedbackDirectoryAuthContext } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/modules/hub/feedback-records-gateway.ts:13:import { getIsFeedbackDirectoriesEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/integrations/webhooks/actions.ts:21:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/mcp/tools/feedback-records.test.ts:25:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/mcp/tools/feedback-records.ts:18:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/mcp/tools/guard-scopes.ts:12:import type { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/organization/actions.ts:14:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/organization/actions.ts:15:import { ensureCloudStripeSetupForOrganization } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/organization/actions.ts:16:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/organization/lib/utils.ts:20: * asymmetry is required, not an oversight: `modules/ee/billing/page.tsx` is the billing role's
apps/web/modules/organization/settings/api-keys/actions.test.ts:33:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/organization/settings/api-keys/actions.ts:9:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/organization/settings/api-keys/components/view-permission-modal.tsx:8:import { type TOrganizationWorkspace } from "@/modules/ee/teams/team-list/types/workspace";
apps/web/modules/organization/settings/teams/actions.ts:20:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/organization/settings/teams/actions.ts:21:import { getBulkInvitePermission, getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/organization/settings/teams/actions.ts:22:import { checkRoleManagementPermission } from "@/modules/ee/role-management/actions";
apps/web/modules/organization/settings/teams/actions.ts:23:import { getTeamsWhereUserIsAdmin } from "@/modules/ee/teams/lib/roles";
apps/web/modules/organization/settings/teams/components/edit-memberships/members-info.tsx:12:import { EditMembershipRole } from "@/modules/ee/role-management/components/edit-membership-role";
apps/web/modules/organization/settings/teams/components/edit-memberships/organization-actions.tsx:13:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/invite-member/bulk-invite-tab.tsx:10:import type { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/invite-member/individual-invite-tab.tsx:12:import { AddMemberRole } from "@/modules/ee/role-management/components/add-member-role";
apps/web/modules/organization/settings/teams/components/invite-member/individual-invite-tab.tsx:13:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/invite-member/invite-member-modal.tsx:6:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/members-view.tsx:7:import { getBulkInvitePermission, getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/organization/settings/teams/components/members-view.tsx:8:import { getTeamsWhereUserIsAdmin } from "@/modules/ee/teams/lib/roles";
apps/web/modules/organization/settings/teams/components/members-view.tsx:9:import { getTeamsByOrganizationId } from "@/modules/ee/teams/team-list/lib/team";
apps/web/modules/organization/settings/teams/components/members-view.tsx:10:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/lib/invite-rate-limit.test.ts:3:import { getBulkInvitePermission } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/organization/settings/teams/lib/invite-rate-limit.test.ts:17:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/organization/settings/teams/lib/invite-rate-limit.ts:6:import { getBulkInvitePermission } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/organization/settings/teams/lib/membership.ts:15:import { TOrganizationMember } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/page.tsx:4:import { getAccessControlPermission } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/organization/settings/teams/page.tsx:5:import { getTeamsWhereUserIsAdmin } from "@/modules/ee/teams/lib/roles";
apps/web/modules/organization/settings/teams/page.tsx:6:import { TeamsView } from "@/modules/ee/teams/team-list/components/teams-view";
apps/web/modules/organization/usage/lib/usage.test.ts:3:import { getIsWorkflowsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/organization/usage/lib/usage.test.ts:12:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getIsWorkflowsEnabled: vi.fn() }));
apps/web/modules/organization/usage/lib/usage.ts:7:import { getIsWorkflowsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.test.ts:119:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.test.ts:123:vi.mock("@/modules/ee/billing/lib/metering", () => ({
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.test.ts:135:vi.mock("@/modules/ee/workflows/lib/runner/enqueue-response-completed-runs", () => ({
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.test.ts:139:vi.mock("@/modules/ee/workflows/lib/runner/dispatch", () => ({
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:21:import { queueAuditEventWithoutRequest } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:22:import { type TAuditStatus, UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:23:import { recordResponseCreatedMeterEvent } from "@/modules/ee/billing/lib/metering";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:24:import { dispatchWorkflowRunViaJobs } from "@/modules/ee/workflows/lib/runner/dispatch";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:25:import { enqueueResponseCompletedWorkflowRuns } from "@/modules/ee/workflows/lib/runner/enqueue-response-completed-runs";
apps/web/modules/settings/components/settings-shell.tsx:8:import { getPendingDowngradeSchedule } from "@/modules/ee/license-check/lib/license";
apps/web/modules/settings/lib/navigation-data.test.ts:45:vi.mock("@/modules/ee/license-check/lib/license", () => ({
apps/web/modules/settings/lib/navigation-data.test.ts:48:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/settings/lib/navigation-data.ts:15:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/settings/lib/navigation-data.ts:19:} from "@/modules/ee/license-check/lib/utils";
apps/web/modules/setup/(fresh-instance)/signup/page.tsx:21:import { getIsSamlSsoEnabled, getIsSsoEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/setup/organization/[organizationId]/invite/actions.ts:9:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/setup/organization/create/page.tsx:11:import { getIsMultiOrgEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/survey/archive/lib/process-survey-archive-purge-job.test.ts:4:import { queueAuditEventWithoutRequest } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/survey/archive/lib/process-survey-archive-purge-job.test.ts:25:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/survey/archive/lib/process-survey-archive-purge-job.ts:6:import { queueAuditEventWithoutRequest } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/survey/editor/actions.ts:25:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/survey/editor/components/settings-view.tsx:8:import { TargetingCard } from "@/modules/ee/contacts/segments/components/targeting-card";
apps/web/modules/survey/editor/components/settings-view.tsx:9:import { QuotasCard } from "@/modules/ee/quotas/components/quotas-card";
apps/web/modules/survey/editor/components/settings-view.tsx:10:import { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/modules/survey/editor/components/survey-editor.tsx:14:import { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/modules/survey/editor/components/survey-menu-bar.tsx:25:import { createSegmentAction } from "@/modules/ee/contacts/segments/actions";
apps/web/modules/survey/editor/components/when-to-send-card.tsx:12:import { getTeamPermissionFlags } from "@/modules/ee/teams/utils/teams";
apps/web/modules/survey/editor/components/when-to-send-card.tsx:13:import { TTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/modules/survey/editor/page.tsx:13:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/modules/survey/editor/page.tsx:14:import { getSegments } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/modules/survey/editor/page.tsx:20:} from "@/modules/ee/license-check/lib/utils";
apps/web/modules/survey/editor/page.tsx:21:import { getQuotas } from "@/modules/ee/quotas/lib/quotas";
apps/web/modules/survey/lib/permission.test.ts:4:import { getIsSpamProtectionEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/survey/lib/permission.test.ts:7:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/survey/lib/permission.ts:5:import { getIsSpamProtectionEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/survey/lib/survey.test.ts:8:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/survey/lib/survey.test.ts:20:vi.mock("@/modules/ee/billing/lib/organization-billing", () => ({
apps/web/modules/survey/lib/survey.ts:8:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/survey/link/actions.ts:10:import { getOrganizationLogoUrl } from "@/modules/ee/whitelabel/email-customization/lib/organization";
apps/web/modules/survey/link/components/survey-renderer.tsx:15:import { getIsContactsEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/survey/link/contact-survey/page.tsx:5:import { verifyContactSurveyToken } from "@/modules/ee/contacts/lib/contact-survey-link";
apps/web/modules/survey/link/lib/data.test.ts:8:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/survey/link/lib/data.test.ts:21:vi.mock("@/modules/ee/billing/lib/organization-billing", () => ({
apps/web/modules/survey/link/lib/data.ts:8:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/survey/list/actions.ts:14:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/survey/list/lib/survey.test.ts:12:import { getIsQuotasEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/survey/list/lib/survey.test.ts:13:import { getQuotas } from "@/modules/ee/quotas/lib/quotas";
apps/web/modules/survey/list/lib/survey.test.ts:55:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/survey/list/lib/survey.test.ts:59:vi.mock("@/modules/ee/quotas/lib/quotas", () => ({
apps/web/modules/survey/list/lib/survey.ts:16:import { getIsQuotasEnabled } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/survey/list/lib/survey.ts:17:import { getQuotas } from "@/modules/ee/quotas/lib/quotas";
apps/web/modules/survey/multi-language-surveys/components/language-view.tsx:14:import { checkAITranslationAvailableAction } from "@/modules/ee/ai-translation/lib/actions";
apps/web/modules/survey/multi-language-surveys/components/manage-translations-modal.tsx:13:import { translateSurveyFieldsAction } from "@/modules/ee/ai-translation/lib/actions";
apps/web/modules/survey/multi-language-surveys/lib/actions.ts:19:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/survey/scheduling/lib/process-survey-scheduling-job.test.ts:12:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/survey/scheduling/lib/survey-scheduling.ts:7:import { queueAuditEventWithoutRequest } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/survey/scheduling/lib/survey-scheduling.ts:8:import { type TAuditStatus } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/traefik-auth/service.test.ts:55:vi.mock("@/modules/ee/feedback-directory/lib/feedback-directory", () => ({
apps/web/modules/traefik-auth/service.test.ts:59:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/ui/components/confirm-delete-segment-modal/index.tsx:5:import { TSegmentActivitySummary } from "@/modules/ee/contacts/segments/components/segment-activity-utils";
apps/web/modules/ui/components/pending-downgrade-banner/index.tsx:9:import type { TLicenseStatus } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/workspaces/components/create-workspace-modal/index.tsx:13:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/workspaces/components/workspace-limit-modal/index.tsx:4:import { LiteLicenseTip } from "@/modules/ee/license-check/components/lite-license-tip";
apps/web/modules/workspaces/lib/utils.test.ts:13:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/workspaces/lib/utils.test.ts:14:import { getAccessControlPermission } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/workspaces/lib/utils.test.ts:15:import { getWorkspacePermissionByUserId } from "@/modules/ee/teams/lib/roles";
apps/web/modules/workspaces/lib/utils.test.ts:34:vi.mock("@/modules/ee/license-check/lib/utils", () => ({ getAccessControlPermission: vi.fn() }));
apps/web/modules/workspaces/lib/utils.test.ts:35:vi.mock("@/modules/ee/license-check/lib/license", () => ({ getEnterpriseLicense: vi.fn() }));
apps/web/modules/workspaces/lib/utils.test.ts:44:vi.mock("@/modules/ee/teams/lib/roles", () => ({ getWorkspacePermissionByUserId: vi.fn() }));
apps/web/modules/workspaces/lib/utils.ts:26:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/workspaces/lib/utils.ts:27:import { getAccessControlPermission } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/workspaces/lib/utils.ts:28:import { getWorkspacePermissionByUserId } from "@/modules/ee/teams/lib/roles";
apps/web/modules/workspaces/lib/utils.ts:29:import { getTeamPermissionFlags } from "@/modules/ee/teams/utils/teams";
apps/web/modules/workspaces/settings/(setup)/app-connection/actions.ts:12:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/workspaces/settings/actions.test.ts:43:vi.mock("@/modules/ee/audit-logs/lib/handler", () => ({
apps/web/modules/workspaces/settings/actions.test.ts:47:vi.mock("@/modules/ee/license-check/lib/utils", () => ({
apps/web/modules/workspaces/settings/actions.test.ts:51:vi.mock("@/modules/ee/teams/team-list/lib/team", () => ({
apps/web/modules/workspaces/settings/actions.ts:15:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/workspaces/settings/actions.ts:16:import { getRemoveBrandingPermission } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/workspaces/settings/actions.ts:17:import { getTeamsByOrganizationId } from "@/modules/ee/teams/team-list/lib/team";
apps/web/modules/workspaces/settings/general/actions.ts:7:import { withAuditLogging } from "@/modules/ee/audit-logs/lib/handler";
apps/web/modules/workspaces/settings/look/page.tsx:8:import { getRemoveBrandingPermission } from "@/modules/ee/license-check/lib/utils";
apps/web/modules/workspaces/settings/look/page.tsx:9:import { BrandingSettingsCard } from "@/modules/ee/whitelabel/remove-branding/components/branding-settings-card";
apps/web/modules/workspaces/types/workspace-auth.ts:10:} from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/workspaces/types/workspace-auth.ts:11:import { TTeamPermission, ZTeamPermission } from "@/modules/ee/teams/workspace-teams/types/team";
apps/web/vite.config.mts:130:        "modules/ee/billing/**", // Enterprise billing features
apps/web/vite.config.mts:137:        "modules/ee/contacts/components/**", // Contact components
docs/development/standards/organization/module-component-structure.mdx:32:Enterprise features are organized in a dedicated `modules/ee` directory:
docs/development/standards/practices/naming-conventions.mdx:18:| `FeedbackSource` | **Unify Feedback** | A configured integration (Tallynest survey, CSV import, etc.) that streams records into the Hub. | `apps/web/lib/feedback-source/`, `apps/web/modules/ee/unify-feedback/`, Prisma models `FeedbackSource`, `FeedbackSourceTallynestMapping`, `FeedbackSourceFieldMapping`, enums `FeedbackSourceType`/`FeedbackSourceStatus`, types `T/ZFeedbackSource*`, i18n keys under `workspace.unify.source_*` and `workspace.settings.feedback_directories.feedback_sources_*`. |
docs/self-hosting/advanced/license.mdx:17:Additional to the AGPLv3 licensed Tallynest core, the Tallynest repository contains code licensed under our [Enterprise License](https://github.com/formbricks/formbricks/blob/main/apps/web/modules/ee/LICENSE). This additional functionality is not part of the AGPLv3 licensed Tallynest core and is designed to meet the needs of larger teams and enterprises.&#x20;
docs/self-hosting/advanced/license.mdx:41:Additional to the AGPL licensed Tallynest core, this repository contains code licensed under an Enterprise license. The [code](https://github.com/formbricks/formbricks/tree/main/apps/web/modules/ee) and [license](https://github.com/formbricks/formbricks/blob/main/apps/web/modules/ee/LICENSE) for the enterprise functionality can be found in the `/apps/web/modules/ee` folder of this repository. This additional functionality is not part of the AGPLv3 licensed Tallynest core and is designed to meet the needs of larger teams and enterprises. This advanced functionality is already included in the Docker images, but you need an [Enterprise License Key](https://app.formbricks.com/s/trvp8tzy5uvsps9rc9qi9l9w?delivery=onpremise&source=docs&type=licenseRequest) to unlock it.
packages/database/migration/20260821165535_repair_account_issuer/migration.ts:18: * point; "fixing" one side is how ENG-2555 happened. `apps/web/modules/ee/sso/lib/constants.test.ts`
packages/database/zod/contact-attribute-keys.ts:27:  // `apps/web/modules/ee/contacts/lib/attribute-key-policy.ts`. Refining here would break reads for
packages/types/auth.ts:50: * provider/token fields the linking code reads (apps/web/modules/ee/sso/lib/account-linking.ts).
packages/types/feedback-source.ts:51:// NOTE: apps/web/modules/ee/analysis/lib/schema-definition.ts carries the same two vocabularies as
sonar-project.properties:77:sonar.coverage.exclusions=**/*.test.*,**/*.spec.*,**/*.tsx,**/*.mdx,**/*.config.mts,**/*.config.ts,**/constants.ts,apps/web/**/types/**,**/src/types/**,packages/database/types/**,**/types.ts,**/stories.*,**/*.mock.*,**/mocks/**,**/__mocks__/**,**/openapi.ts,**/openapi-document.ts,**/instrumentation.ts,scripts/openapi/merge-client-endpoints.ts,**/playwright/**,**/Dockerfile,**/*.config.cjs,**/*.css,**/templates.ts,apps/web/modules/ui/components/icons/*,**/*.json,apps/web/vitestSetup.ts,packages/js-core/src/index.ts,packages/surveys/src/index.ts,apps/web/postcss.config.js,apps/web/next.config.mjs,apps/web/scripts/**,packages/js-core/vitest.setup.ts,**/*.mjs,apps/web/modules/auth/lib/mock-data.ts,**/cache.ts,apps/web/app/**/billing-confirmation/**,apps/web/modules/ee/billing/**,apps/web/modules/survey/multi-language-surveys/**,apps/web/modules/email/**,apps/web/modules/integrations/**,apps/web/modules/setup/**/intro/**,apps/web/modules/setup/**/signup/**,apps/web/modules/setup/**/layout.tsx,apps/web/modules/survey/follow-ups/**,apps/web/app/share/**,apps/web/modules/ee/contacts/[contactId]/**,apps/web/modules/ee/contacts/components/**,apps/web/modules/ee/two-factor-auth/**,apps/web/lib/slack/**,apps/web/lib/notion/**,apps/web/lib/googleSheet/**,apps/web/app/api/google-sheet/**,apps/web/app/api/billing/**,apps/web/lib/airtable/**,apps/web/app/api/v1/integrations/**,apps/web/lib/env.ts,apps/web/lib/env-client.ts,**/instrumentation-node.ts,**/cache/**,**/*.svg,apps/web/modules/ui/components/icons/**,apps/web/modules/ui/components/table/**,packages/survey-ui/**/*.stories.*,apps/web/integration/**,apps/web/modules/auth/lib/auth.ts,apps/web/modules/auth/lib/auth-client.ts,apps/web/modules/auth/lib/cutover/**,packages/database/migration/**/migration.ts,apps/web/modules/auth/lib/better-auth-email-verification.ts,apps/web/modules/ee/sso/lib/better-auth-recovery-signin.ts,apps/web/modules/account/lib/better-auth-account-deletion-request.ts
sonar-project.properties:95:sonar.cpd.exclusions=packages/i18n-utils/src/utils.ts,apps/web/modules/ee/analysis/lib/schema-definition.ts,apps/web/modules/analysis/lib/reserved-field-display.ts,apps/web/lib/surveyLogic/utils.ts,**/*.test.*,**/*.spec.*,**/*.tsx,**/*.mdx,**/*.config.mts,**/*.config.ts,**/constants.ts,**/route.ts,**/route.tsx,**/types/**,**/types.ts,**/stories.*,**/*.mock.*,**/mocks/**,**/__mocks__/**,**/openapi.ts,**/openapi-document.ts,**/instrumentation.ts,scripts/openapi/merge-client-endpoints.ts,**/playwright/**,**/Dockerfile,**/*.config.cjs,**/*.css,**/templates.ts,**/actions.ts,apps/web/modules/ui/components/icons/*,**/*.json,apps/web/vitestSetup.ts,apps/web/postcss.config.js,apps/web/next.config.mjs,apps/web/scripts/**,packages/js-core/vitest.setup.ts,packages/js-core/src/index.ts,**/*.mjs,apps/web/modules/auth/lib/mock-data.ts,**/cache.ts,apps/web/app/**/billing-confirmation/**,apps/web/modules/ee/billing/**,apps/web/modules/survey/multi-language-surveys/**,apps/web/modules/email/**,apps/web/modules/integrations/**,apps/web/modules/setup/**/intro/**,apps/web/modules/setup/**/signup/**,apps/web/modules/setup/**/layout.tsx,apps/web/modules/survey/follow-ups/**,apps/web/app/share/**,apps/web/modules/ee/contacts/[contactId]/**,apps/web/modules/ee/contacts/components/**,apps/web/modules/ee/two-factor-auth/**,apps/web/lib/slack/**,apps/web/lib/notion/**,apps/web/lib/googleSheet/**,apps/web/app/api/google-sheet/**,apps/web/app/api/billing/**,apps/web/lib/airtable/**,apps/web/app/api/v1/integrations/**,apps/web/lib/env.ts,**/instrumentation-node.ts,**/cache/**,**/*.svg,apps/web/modules/ui/components/icons/**,apps/web/modules/ui/components/table/**,packages/survey-ui/**/*.stories.*

**Action required:** each listed dependency must be removed or replaced with independently authored Tallynest code.
