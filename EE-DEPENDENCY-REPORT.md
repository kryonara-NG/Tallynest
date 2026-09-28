# EE Dependency Report

Generated from the Tallynest working tree. No Formbricks Enterprise source is permitted.

.coderabbit.yaml:269:    - path: "apps/web/modules/ee/**"
.coderabbit.yaml:271:        Enterprise Edition code under a separate licence (`apps/web/modules/ee/LICENSE`). Flag any
.coderabbit.yaml:272:        change that moves EE code into OSS paths or makes OSS code import from `modules/ee` without
.github/workflows/tallynest-core-extract.yml:27:          git grep -n -E 'modules/ee|/ee/' -- ':!LICENSING-AUDIT.md' ':!THIRD-PARTY-NOTICES.md' ':!CHANGES.md' ':!ARCHITECTURE.md' ':!LICENSE' ':!README.md' ':!EE-DEPENDENCY-REPORT.md' > /tmp/ee.txt
.github/workflows/verify.yml:33:            if git grep -n -E 'modules/ee|/ee/' -- ':!LICENSING-AUDIT.md' ':!THIRD-PARTY-NOTICES.md' ':!CHANGES.md' ':!ARCHITECTURE.md' ':!LICENSE' ':!README.md' ':!EE-DEPENDENCY-REPORT.md'; then
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/actions.ts:35: * modules/ee/sso/lib/better-auth-providers.ts) — so `EditProfileDetailsForm` renders the input
apps/web/app/(app)/workspaces/[workspaceId]/settings/account/profile/components/EditProfileDetailsForm.tsx:176:                    // (`overrideUserInfo` in modules/ee/sso/lib/better-auth-providers.ts), so an edit
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:20:import { generatePersonalLinks } from "@/modules/ee/contacts/lib/contacts";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:21:import { NO_CONTACTS_IN_SEGMENT_ERROR_CODE } from "@/modules/ee/contacts/lib/personal-link-errors";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/actions.ts:23:import { getOrganizationLogoUrl } from "@/modules/ee/whitelabel/email-customization/lib/organization";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/components/SummaryPage.tsx:22:import { QuotasSummary } from "@/modules/ee/quotas/components/quotas-summary";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/(analysis)/summary/components/shareEmbedModal/personal-links-tab.tsx:12:import { getTranslatedPersonalLinkError } from "@/modules/ee/contacts/lib/personal-link-errors";
apps/web/app/(app)/workspaces/[workspaceId]/surveys/[surveyId]/actions.ts:15:import { getQuotas } from "@/modules/ee/quotas/lib/quotas";
apps/web/app/api/client/[workspaceId]/responses/lib/response.ts:9:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/internal/feedback-datasets/lib/access.ts:6:import { getOrganizationIdFromDirectoryId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v1/client/[workspaceId]/responses/[responseId]/lib/put-response-handler.ts:16:import { createQuotaFullObject } from "@/modules/ee/quotas/lib/helpers";
apps/web/app/api/v1/client/[workspaceId]/responses/[responseId]/lib/response.ts:6:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/management/responses/[responseId]/lib/response.ts:5:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v1/management/responses/lib/response.ts:18:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v3/contact-attribute-keys/lib/operations.ts:5:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/api/v3/feedbackRecords/lib/access.ts:13:} from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/feedbackRecords/lib/access.ts:73: * Mirrors the Unify read path (`modules/ee/unify-feedback/page.tsx`). `tenant_id` is never taken from caller input.
apps/web/app/api/v3/feedbackRecords/lib/operations.ts:14:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/lib/api-wrapper.ts:14:import { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/app/api/v3/lib/audit.ts:4:import { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/app/api/v3/responses/lib/service.integration.test.ts:137:    // The repo's only fullness predicate, from `modules/ee/quotas/lib/utils.ts`.
apps/web/app/api/v3/responses/lib/service.ts:175:      // (`modules/ee/quotas/lib/utils.ts`) counting those same live rows — so the cascade *already*
apps/web/app/api/v3/responses/lib/validate-effects.ts:14:import { screenResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v3/responses/lib/write-service.ts:20:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/app/api/v3/surveys/targeting.ts:14:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/api/v3/surveys/targeting.ts:15:import { getExistingWorkspaceSurveyIds, getSegments } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/aggregate.ts:4:} from "@/modules/ee/unify-feedback/enrichment-status/lib/enrichment";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/operations.ts:5:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/unify-feedback/enrichment-status/lib/operations.ts:6:import type { TEnrichmentStatusResponse } from "@/modules/ee/unify-feedback/enrichment-status/lib/enrichment";
apps/web/app/api/v3/workflows/lib/analytics.ts:11:} from "@/modules/ee/workflows/lib/analytics-events";
apps/web/app/setup/organization/create/actions.ts:14:import { ensureCloudStripeSetupForOrganization } from "@/modules/ee/billing/lib/organization-billing";
apps/web/app/storage/[workspaceId]/[accessType]/[...filePath]/lib/audit-logs.ts:4:import { TAuditStatus, UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/lib/authorization/resource-inventory.test.ts:27:    join(REPOSITORY_ROOT, "apps/web/modules/ee/audit-logs/types/audit-log.ts"),
apps/web/lib/constants.ts:239:export { ENTERPRISE_LICENSE_REQUEST_FORM_URL } from "@/modules/ee/license-check/lib/lite-license";
apps/web/lib/feedback-source/actions.ts:25:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/lib/feedback-source/actions.ts:26:import { getContactIdsByUserIds } from "@/modules/ee/unify-feedback/lib/contacts";
apps/web/lib/feedback-source/csv-file-import.ts:13:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/csv-import.ts:4:import { CSV_IMPORT_MISSING_COLUMNS_ERROR_CODE } from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/utils.ts:10:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/jobs/recurring-registrations.ts:21:} from "@/modules/ee/workflows/lib/analytics/constants";
apps/web/lib/jobs/recurring-registrations.ts:22:import { processWorkflowsUsageSnapshotJob } from "@/modules/ee/workflows/lib/analytics/process-workflows-usage-snapshot-job";
apps/web/lib/jobs/recurring-registrations.ts:23:import { processWorkflowRunJob } from "@/modules/ee/workflows/lib/runner/process-workflow-run-job";
apps/web/lib/jobs/recurring-registrations.ts:24:import { processWorkflowRunReconcileJob } from "@/modules/ee/workflows/lib/runner/process-workflow-run-reconcile-job";
apps/web/lib/jobs/recurring-registrations.ts:25:import { WORKFLOW_RUN_RECONCILE_INTERVAL_MS } from "@/modules/ee/workflows/lib/runner/reconcile-constants";
apps/web/lib/organization/service.ts:27:import { cleanupStripeCustomer } from "@/modules/ee/billing/lib/organization-billing";
apps/web/lib/response/service.ts:23:import { reduceQuotaLimits } from "@/modules/ee/quotas/lib/quotas";
apps/web/lib/survey/service.ts:34:import { getSurveyWorkspaceIdMap } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/lib/telemetry/usage-update.ts:9:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/lib/utils/prisma-deadlock.ts:27: * cycle can form in the first place (see updateAttributes in modules/ee/contacts/lib/attributes.ts).
apps/web/lib/utils/services.ts:9:import { getQuota as getQuotaService } from "@/modules/ee/quotas/lib/quotas";
apps/web/modules/account/lib/account-deletion-audit.ts:4:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/account/lib/better-auth-account-deletion.ts:14:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/analysis/components/SingleResponseCard/components/SingleResponseCardBody.tsx:18:import { ResponseCardQuotas } from "@/modules/ee/quotas/components/single-response-card-quotas";
apps/web/modules/api/v2/auth/authenticated-api-client.ts:5:import { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/api/v2/management/contact-attribute-keys/lib/contact-attribute-key.ts:17:} from "@/modules/ee/contacts/lib/attribute-key-policy";
apps/web/modules/api/v2/management/contact-attribute-keys/types/contact-attribute-keys.ts:8:} from "@/modules/ee/contacts/lib/attribute-key-policy";
apps/web/modules/api/v2/management/responses/[responseId]/lib/response.ts:16:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/modules/api/v2/management/responses/lib/response.ts:18:import { evaluateResponseQuotas } from "@/modules/ee/quotas/lib/evaluation-service";
apps/web/modules/api/v2/management/surveys/[surveyId]/contact-links/segments/[segmentId]/lib/contact.ts:6:import { segmentFilterToPrismaQuery } from "@/modules/ee/contacts/segments/lib/filter/prisma-query";
apps/web/modules/api/v2/openapi-document.ts:26:import { bulkContactPaths } from "@/modules/ee/contacts/api/v2/management/contacts/bulk/lib/openapi";
apps/web/modules/api/v2/openapi-document.ts:27:import { contactPaths } from "@/modules/ee/contacts/api/v2/management/contacts/lib/openapi";
apps/web/modules/api/v2/organizations/[organizationId]/users/lib/users.ts:222:    // Mirrors the last-owner guard in modules/ee/role-management/actions.ts: without it, this
apps/web/modules/api/v2/organizations/[organizationId]/users/lib/utils.ts:101: * (modules/ee/role-management/actions.ts): an owner may assign any role, a manager may only assign
apps/web/modules/auth/forgot-password/actions.test.ts:44:// Passthrough so the handler runs directly, matching modules/ee/billing/actions.test.ts. Importing the
apps/web/modules/auth/lib/auth.ts:107:  // modules/ee/sso/lib/better-auth-providers.ts. The account-linking / verify-before-link flow is
apps/web/modules/auth/lib/better-auth-hibp.ts:7:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/better-auth-observability.ts:10:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/lib/better-auth-observability.ts:11:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/better-auth-schema-contract.test.ts:96:  user: { image: { file: "../../ee/sso/lib/better-auth-hooks.ts", strips: "image: undefined" } },
apps/web/modules/auth/lib/better-auth-two-factor-backfill.ts:6:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/better-auth-two-factor-backfill.ts:9: * ENG-1824 self-heal. The custom 2FA enable flow (`modules/ee/two-factor-auth`) historically wrote the
apps/web/modules/auth/lib/better-auth-verification-autosignin.ts:6:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/credential-issuer-heal.ts:5:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/signup-policy.ts:8:import type { AuthHookContext } from "@/modules/ee/sso/lib/better-auth-hooks";
apps/web/modules/auth/lib/sso-provisioning-reject-reasons.ts:19: * It lives in OSS `modules/auth`, not beside the gate in `modules/ee`, although the gate is the only
apps/web/modules/auth/lib/sso-provisioning-reject-reasons.ts:20: * thing that produces these codes. `modules/ee` is under a separate licence, and the consumers here
apps/web/modules/auth/lib/utils.ts:7:import { TAuditAction, TAuditStatus, UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/auth/lib/verification-links.ts:8: * They live here, not in `modules/ee/sso/lib/constants.ts`, because OSS code needs them — this file
apps/web/modules/auth/lib/verification-links.ts:10: * against the completion path — and `.coderabbit.yaml` (`apps/web/modules/ee/**`) forbids OSS importing
apps/web/modules/auth/lib/verification-links.ts:11: * from `modules/ee` outside the `license-check` gate. Route paths carry no entitlement, so the fix is
apps/web/modules/auth/login/components/login-form.tsx:16:import { SSOOptions } from "@/modules/ee/sso/components/sso-options";
apps/web/modules/auth/login/components/login-form.tsx:17:import { TwoFactor } from "@/modules/ee/two-factor-auth/components/two-factor";
apps/web/modules/auth/login/components/login-form.tsx:18:import { TwoFactorBackup } from "@/modules/ee/two-factor-auth/components/two-factor-backup";
apps/web/modules/auth/signup/actions.ts:56:import { ensureCloudStripeSetupForOrganization } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/auth/signup/actions.ts:58:import { subscribeUserToMailingList } from "@/modules/ee/mailing/lib/mailing-subscription";
apps/web/modules/auth/signup/components/signup-form.tsx:26:import { SSOOptions } from "@/modules/ee/sso/components/sso-options";
apps/web/modules/auth/verification-requested/actions.ts:36:} from "@/modules/ee/sso/lib/recovery-intent";
apps/web/modules/entitlements/lib/checks.ts:3:import type { TEnterpriseLicenseFeatures } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/entitlements/lib/cloud-provider.ts:6:} from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/entitlements/lib/cloud-provider.ts:7:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/entitlements/lib/self-hosted-provider.ts:6:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/entitlements/lib/types.ts:6:} from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/hub/feedback-records-gateway.ts:12:import { getFeedbackDirectoryAuthContext } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/modules/mcp/tools/feedback-records.ts:18:import { UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/mcp/tools/guard-scopes.ts:12:import type { TAuditAction, TAuditTarget } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/organization/actions.ts:15:import { ensureCloudStripeSetupForOrganization } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/organization/lib/utils.ts:20: * asymmetry is required, not an oversight: `modules/ee/billing/page.tsx` is the billing role's
apps/web/modules/organization/settings/api-keys/components/view-permission-modal.tsx:8:import { type TOrganizationWorkspace } from "@/modules/ee/teams/team-list/types/workspace";
apps/web/modules/organization/settings/teams/actions.ts:22:import { checkRoleManagementPermission } from "@/modules/ee/role-management/actions";
apps/web/modules/organization/settings/teams/actions.ts:23:import { getTeamsWhereUserIsAdmin } from "@/modules/ee/teams/lib/roles";
apps/web/modules/organization/settings/teams/components/edit-memberships/members-info.tsx:12:import { EditMembershipRole } from "@/modules/ee/role-management/components/edit-membership-role";
apps/web/modules/organization/settings/teams/components/edit-memberships/organization-actions.tsx:13:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/invite-member/bulk-invite-tab.tsx:10:import type { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/invite-member/individual-invite-tab.tsx:12:import { AddMemberRole } from "@/modules/ee/role-management/components/add-member-role";
apps/web/modules/organization/settings/teams/components/invite-member/individual-invite-tab.tsx:13:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/invite-member/invite-member-modal.tsx:6:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/components/members-view.tsx:8:import { getTeamsWhereUserIsAdmin } from "@/modules/ee/teams/lib/roles";
apps/web/modules/organization/settings/teams/components/members-view.tsx:9:import { getTeamsByOrganizationId } from "@/modules/ee/teams/team-list/lib/team";
apps/web/modules/organization/settings/teams/components/members-view.tsx:10:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/organization/settings/teams/lib/membership.ts:15:import { TOrganizationMember } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:22:import { type TAuditStatus, UNKNOWN_DATA } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:23:import { recordResponseCreatedMeterEvent } from "@/modules/ee/billing/lib/metering";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:24:import { dispatchWorkflowRunViaJobs } from "@/modules/ee/workflows/lib/runner/dispatch";
apps/web/modules/response-pipeline/lib/process-response-pipeline-job.ts:25:import { enqueueResponseCompletedWorkflowRuns } from "@/modules/ee/workflows/lib/runner/enqueue-response-completed-runs";
apps/web/modules/settings/components/settings-shell.tsx:8:import { getPendingDowngradeSchedule } from "@/modules/ee/license-check/lib/license";
apps/web/modules/settings/lib/navigation-data.ts:15:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/survey/editor/components/settings-view.tsx:8:import { TargetingCard } from "@/modules/ee/contacts/segments/components/targeting-card";
apps/web/modules/survey/editor/components/settings-view.tsx:9:import { QuotasCard } from "@/modules/ee/quotas/components/quotas-card";
apps/web/modules/survey/editor/components/survey-menu-bar.tsx:25:import { createSegmentAction } from "@/modules/ee/contacts/segments/actions";
apps/web/modules/survey/editor/components/when-to-send-card.tsx:12:import { getTeamPermissionFlags } from "@/modules/ee/teams/utils/teams";
apps/web/modules/survey/lib/survey.ts:8:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/survey/link/actions.ts:10:import { getOrganizationLogoUrl } from "@/modules/ee/whitelabel/email-customization/lib/organization";
apps/web/modules/survey/link/lib/data.ts:8:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/survey/list/lib/survey.ts:17:import { getQuotas } from "@/modules/ee/quotas/lib/quotas";
apps/web/modules/survey/multi-language-surveys/components/language-view.tsx:14:import { checkAITranslationAvailableAction } from "@/modules/ee/ai-translation/lib/actions";
apps/web/modules/survey/multi-language-surveys/components/manage-translations-modal.tsx:13:import { translateSurveyFieldsAction } from "@/modules/ee/ai-translation/lib/actions";
apps/web/modules/survey/scheduling/lib/survey-scheduling.ts:8:import { type TAuditStatus } from "@/modules/ee/audit-logs/types/audit-log";
apps/web/modules/ui/components/confirm-delete-segment-modal/index.tsx:5:import { TSegmentActivitySummary } from "@/modules/ee/contacts/segments/components/segment-activity-utils";
apps/web/modules/ui/components/pending-downgrade-banner/index.tsx:9:import type { TLicenseStatus } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/workspaces/components/create-workspace-modal/index.tsx:13:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/workspaces/components/workspace-limit-modal/index.tsx:4:import { LiteLicenseTip } from "@/modules/ee/license-check/components/lite-license-tip";
apps/web/modules/workspaces/lib/utils.ts:26:import { getEnterpriseLicense } from "@/modules/ee/license-check/lib/license";
apps/web/modules/workspaces/lib/utils.ts:28:import { getWorkspacePermissionByUserId } from "@/modules/ee/teams/lib/roles";
apps/web/modules/workspaces/lib/utils.ts:29:import { getTeamPermissionFlags } from "@/modules/ee/teams/utils/teams";
apps/web/modules/workspaces/settings/actions.ts:17:import { getTeamsByOrganizationId } from "@/modules/ee/teams/team-list/lib/team";
apps/web/modules/workspaces/types/workspace-auth.ts:10:} from "@/modules/ee/license-check/types/enterprise-license";
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
scripts/tallynest-core-extract.mjs:6:const eePrefix = "@/modules/ee/";
scripts/tallynest-core-extract.mjs:9:  ["@/modules/ee/license-check/lib/utils", "@/modules/tallynest-core/entitlements"],
scripts/tallynest-core-extract.mjs:10:  ["@/modules/ee/audit-logs/lib/handler", "@/modules/tallynest-core/activity-context"],
scripts/tallynest-core-extract.mjs:11:  ["@/modules/ee/teams/workspace-teams/types/team", "@/modules/tallynest-core/team-permissions"],
scripts/tallynest-core-extract.mjs:14:const skipDirs = new Set(["node_modules", ".next", ".git", "modules/ee"]);
sonar-project.properties:77:sonar.coverage.exclusions=**/*.test.*,**/*.spec.*,**/*.tsx,**/*.mdx,**/*.config.mts,**/*.config.ts,**/constants.ts,apps/web/**/types/**,**/src/types/**,packages/database/types/**,**/types.ts,**/stories.*,**/*.mock.*,**/mocks/**,**/__mocks__/**,**/openapi.ts,**/openapi-document.ts,**/instrumentation.ts,scripts/openapi/merge-client-endpoints.ts,**/playwright/**,**/Dockerfile,**/*.config.cjs,**/*.css,**/templates.ts,apps/web/modules/ui/components/icons/*,**/*.json,apps/web/vitestSetup.ts,packages/js-core/src/index.ts,packages/surveys/src/index.ts,apps/web/postcss.config.js,apps/web/next.config.mjs,apps/web/scripts/**,packages/js-core/vitest.setup.ts,**/*.mjs,apps/web/modules/auth/lib/mock-data.ts,**/cache.ts,apps/web/app/**/billing-confirmation/**,apps/web/modules/ee/billing/**,apps/web/modules/survey/multi-language-surveys/**,apps/web/modules/email/**,apps/web/modules/integrations/**,apps/web/modules/setup/**/intro/**,apps/web/modules/setup/**/signup/**,apps/web/modules/setup/**/layout.tsx,apps/web/modules/survey/follow-ups/**,apps/web/app/share/**,apps/web/modules/ee/contacts/[contactId]/**,apps/web/modules/ee/contacts/components/**,apps/web/modules/ee/two-factor-auth/**,apps/web/lib/slack/**,apps/web/lib/notion/**,apps/web/lib/googleSheet/**,apps/web/app/api/google-sheet/**,apps/web/app/api/billing/**,apps/web/lib/airtable/**,apps/web/app/api/v1/integrations/**,apps/web/lib/env.ts,apps/web/lib/env-client.ts,**/instrumentation-node.ts,**/cache/**,**/*.svg,apps/web/modules/ui/components/icons/**,apps/web/modules/ui/components/table/**,packages/survey-ui/**/*.stories.*,apps/web/integration/**,apps/web/modules/auth/lib/auth.ts,apps/web/modules/auth/lib/auth-client.ts,apps/web/modules/auth/lib/cutover/**,packages/database/migration/**/migration.ts,apps/web/modules/auth/lib/better-auth-email-verification.ts,apps/web/modules/ee/sso/lib/better-auth-recovery-signin.ts,apps/web/modules/account/lib/better-auth-account-deletion-request.ts
sonar-project.properties:95:sonar.cpd.exclusions=packages/i18n-utils/src/utils.ts,apps/web/modules/ee/analysis/lib/schema-definition.ts,apps/web/modules/analysis/lib/reserved-field-display.ts,apps/web/lib/surveyLogic/utils.ts,**/*.test.*,**/*.spec.*,**/*.tsx,**/*.mdx,**/*.config.mts,**/*.config.ts,**/constants.ts,**/route.ts,**/route.tsx,**/types/**,**/types.ts,**/stories.*,**/*.mock.*,**/mocks/**,**/__mocks__/**,**/openapi.ts,**/openapi-document.ts,**/instrumentation.ts,scripts/openapi/merge-client-endpoints.ts,**/playwright/**,**/Dockerfile,**/*.config.cjs,**/*.css,**/templates.ts,**/actions.ts,apps/web/modules/ui/components/icons/*,**/*.json,apps/web/vitestSetup.ts,apps/web/postcss.config.js,apps/web/next.config.mjs,apps/web/scripts/**,packages/js-core/vitest.setup.ts,packages/js-core/src/index.ts,**/*.mjs,apps/web/modules/auth/lib/mock-data.ts,**/cache.ts,apps/web/app/**/billing-confirmation/**,apps/web/modules/ee/billing/**,apps/web/modules/survey/multi-language-surveys/**,apps/web/modules/email/**,apps/web/modules/integrations/**,apps/web/modules/setup/**/intro/**,apps/web/modules/setup/**/signup/**,apps/web/modules/setup/**/layout.tsx,apps/web/modules/survey/follow-ups/**,apps/web/app/share/**,apps/web/modules/ee/contacts/[contactId]/**,apps/web/modules/ee/contacts/components/**,apps/web/modules/ee/two-factor-auth/**,apps/web/lib/slack/**,apps/web/lib/notion/**,apps/web/lib/googleSheet/**,apps/web/app/api/google-sheet/**,apps/web/app/api/billing/**,apps/web/lib/airtable/**,apps/web/app/api/v1/integrations/**,apps/web/lib/env.ts,**/instrumentation-node.ts,**/cache/**,**/*.svg,apps/web/modules/ui/components/icons/**,apps/web/modules/ui/components/table/**,packages/survey-ui/**/*.stories.*

**Action required:** each listed dependency must be removed or replaced with independently authored Tallynest code.
