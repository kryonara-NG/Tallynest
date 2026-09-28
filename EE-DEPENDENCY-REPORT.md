# EE Dependency Report

Generated from the Tallynest working tree. No Formbricks Enterprise source is permitted.

apps/web/app/api/internal/feedback-datasets/lib/access.ts:6:import { getOrganizationIdFromDirectoryId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/app/api/v3/surveys/targeting.ts:14:import { getContactAttributeKeys } from "@/modules/ee/contacts/lib/contact-attribute-keys";
apps/web/app/api/v3/surveys/targeting.ts:15:import { getExistingWorkspaceSurveyIds, getSegments } from "@/modules/ee/contacts/segments/lib/segments";
apps/web/lib/authorization/resource-inventory.test.ts:27:    join(REPOSITORY_ROOT, "apps/web/modules/ee/audit-logs/types/audit-log.ts"),
apps/web/lib/feedback-source/actions.ts:25:import { getFeedbackDirectoriesByWorkspaceId } from "@/modules/ee/feedback-directory/lib/feedback-directory";
apps/web/lib/feedback-source/actions.ts:26:import { getContactIdsByUserIds } from "@/modules/ee/unify-feedback/lib/contacts";
apps/web/lib/feedback-source/csv-file-import.ts:13:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/csv-import.ts:4:import { CSV_IMPORT_MISSING_COLUMNS_ERROR_CODE } from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/feedback-source/utils.ts:10:} from "@/modules/ee/unify-feedback/sources/types";
apps/web/lib/utils/prisma-deadlock.ts:27: * cycle can form in the first place (see updateAttributes in modules/ee/contacts/lib/attributes.ts).
apps/web/modules/api/v2/organizations/[organizationId]/users/lib/users.ts:222:    // Mirrors the last-owner guard in modules/ee/role-management/actions.ts: without it, this
apps/web/modules/api/v2/organizations/[organizationId]/users/lib/utils.ts:101: * (modules/ee/role-management/actions.ts): an owner may assign any role, a manager may only assign
apps/web/modules/auth/forgot-password/actions.test.ts:44:// Passthrough so the handler runs directly, matching modules/ee/billing/actions.test.ts. Importing the
apps/web/modules/auth/lib/better-auth-schema-contract.test.ts:96:  user: { image: { file: "../../ee/sso/lib/better-auth-hooks.ts", strips: "image: undefined" } },
apps/web/modules/auth/lib/better-auth-two-factor-backfill.ts:9: * ENG-1824 self-heal. The custom 2FA enable flow (`modules/ee/two-factor-auth`) historically wrote the
apps/web/modules/auth/lib/sso-provisioning-reject-reasons.ts:19: * It lives in OSS `modules/auth`, not beside the gate in `modules/ee`, although the gate is the only
apps/web/modules/auth/lib/sso-provisioning-reject-reasons.ts:20: * thing that produces these codes. `modules/ee` is under a separate licence, and the consumers here
apps/web/modules/auth/lib/verification-links.ts:10: * against the completion path — and `.coderabbit.yaml` (`apps/web/modules/ee/**`) forbids OSS importing
apps/web/modules/auth/lib/verification-links.ts:11: * from `modules/ee` outside the `license-check` gate. Route paths carry no entitlement, so the fix is
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
apps/web/modules/survey/lib/survey.ts:8:import { getOrganizationBillingWithReadThroughSync } from "@/modules/ee/billing/lib/organization-billing";
apps/web/modules/ui/components/confirm-delete-segment-modal/index.tsx:5:import { TSegmentActivitySummary } from "@/modules/ee/contacts/segments/components/segment-activity-utils";
apps/web/modules/ui/components/pending-downgrade-banner/index.tsx:9:import type { TLicenseStatus } from "@/modules/ee/license-check/types/enterprise-license";
apps/web/modules/workspaces/components/create-workspace-modal/index.tsx:13:import { TOrganizationTeam } from "@/modules/ee/teams/team-list/types/team";
apps/web/modules/workspaces/components/workspace-limit-modal/index.tsx:4:import { LiteLicenseTip } from "@/modules/ee/license-check/components/lite-license-tip";
apps/web/modules/workspaces/lib/utils.ts:28:import { getWorkspacePermissionByUserId } from "@/modules/ee/teams/lib/roles";
apps/web/modules/workspaces/lib/utils.ts:29:import { getTeamPermissionFlags } from "@/modules/ee/teams/utils/teams";
apps/web/modules/workspaces/settings/actions.ts:17:import { getTeamsByOrganizationId } from "@/modules/ee/teams/team-list/lib/team";
apps/web/modules/workspaces/types/workspace-auth.ts:10:} from "@/modules/ee/license-check/types/enterprise-license";
apps/web/vite.config.mts:130:        "modules/ee/billing/**", // Enterprise billing features
apps/web/vite.config.mts:137:        "modules/ee/contacts/components/**", // Contact components
packages/database/migration/20260821165535_repair_account_issuer/migration.ts:18: * point; "fixing" one side is how ENG-2555 happened. `apps/web/modules/ee/sso/lib/constants.test.ts`
packages/database/zod/contact-attribute-keys.ts:27:  // `apps/web/modules/ee/contacts/lib/attribute-key-policy.ts`. Refining here would break reads for
packages/types/auth.ts:50: * provider/token fields the linking code reads (apps/web/modules/ee/sso/lib/account-linking.ts).
packages/types/feedback-source.ts:51:// NOTE: apps/web/modules/ee/analysis/lib/schema-definition.ts carries the same two vocabularies as

**Action required:** each listed dependency must be removed or replaced with independently authored Tallynest code.
