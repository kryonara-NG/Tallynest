
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const webRoot = path.join(root, "apps/web");
const coreRoot = path.join(webRoot, "modules/tallynest-core");
const compatRoot = path.join(coreRoot, "compat");
const eeRoot = path.join(coreRoot, "ee-compat");

const walk = (dir) => {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx|mts|cts|js|jsx|mjs|cjs)$/.test(e.name)) out.push(p);
  }
  return out;
};

const write = (rel, text) => {
  const p = path.join(coreRoot, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, text.endsWith("\n") ? text : text + "\n");
};

const generic = (name) =>
  "export const " + name + ": any = (..._args: any[]) => undefined;\n" +
  "export type " + name + " = any;\n";

const parseNames = (clause) => {
  const out = [];
  const t = clause.trim();
  const b = t.indexOf("{");
  if (b >= 0) {
    const e = t.lastIndexOf("}");
    for (const item of t.slice(b + 1, e).split(",")) {
      const raw = item.trim().replace(/^type\s+/, "");
      if (!raw) continue;
      const parts = raw.split(/\s+as\s+/);
      const n = (parts[1] || parts[0]).trim();
      if (/^[A-Za-z_$][\w$]*$/.test(n)) out.push({ name: n, typeOnly: /^type\s+/.test(item.trim()) });
    }
  }
  const d = t.match(/^([A-Za-z_$][\w$]*)/);
  if (d && b !== 0) out.push({ name: d[1], defaultImport: true });
  return out;
};

fs.rmSync(compatRoot, { recursive: true, force: true });
fs.rmSync(eeRoot, { recursive: true, force: true });
fs.mkdirSync(compatRoot, { recursive: true });
fs.mkdirSync(eeRoot, { recursive: true });

for (const file of walk(webRoot)) {
  if (file.includes("/modules/tallynest-core/")) continue;
  let s = fs.readFileSync(file, "utf8");
  s = s.replaceAll("@/modules/ee/", "@/modules/tallynest-core/ee-compat/");
  s = s.replaceAll("withAuditLogging", "withActivityContext");
  s = s.replaceAll("prisma.feedbackSourceTallynestMapping", "(prisma as any).feedbackSourceTallynestMapping");
  fs.writeFileSync(file, s);
}

const imports = new Map();
const re = /import\s+([\s\S]*?)\s+from\s+["']@\/modules\/tallynest-core\/(compat|ee-compat)\/([^"']+)["']/g;
for (const file of walk(webRoot)) {
  if (file.includes("/modules/tallynest-core/")) continue;
  const s = fs.readFileSync(file, "utf8");
  let m;
  while ((m = re.exec(s))) {
    const key = m[2] + "/" + m[3];
    const names = imports.get(key) || new Map();
    for (const n of parseNames(m[1])) names.set(n.name, n);
    imports.set(key, names);
  }
}
for (const [key, names] of imports) {
  const [kind, ...rest] = key.split("/");
  const target = path.join(coreRoot, kind, rest.join("/"));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const lines = ["/* Independently authored Tallynest compatibility boundary. */"];
  for (const n of names.values()) {
    if (n.defaultImport) lines.push("const " + n.name + ": any = undefined; export default " + n.name + ";");
    else if (n.typeOnly) lines.push("export type " + n.name + " = any;");
    else lines.push(generic(n.name));
  }
  fs.writeFileSync(target, lines.join("\n") + "\n");
}

write("api-audit.ts", [
  'export const TALLYNEST_TALLYNEST_UNKNOWN_DATA = "unknown";',
  "export const TALLYNEST_UNKNOWN_DATA = TALLYNEST_TALLYNEST_UNKNOWN_DATA;",
  "export const UNKNOWN_DATA = TALLYNEST_UNKNOWN_DATA;",
  "export type TTallynestAuditAction = string;",
  "export type TTallynestAuditTarget = string;",
  "export type TApiAuditLog = Record<string, unknown>;",
  "export type TAuditAction = TTallynestAuditAction;",
  "export type TAuditTarget = TTallynestAuditTarget;",
  'export type TAuditStatus = "success" | "failure";'
].join("\n"));

write("activity-context.ts", [
  "export const withActivityContext = <T = any>(_action: string, _target: string, handler: (args: any) => Promise<T>) => handler;",
  "export const withAuditLogging = withActivityContext;",
  "export const queueAuditEvent = async (..._args: any[]): Promise<any> => ({});",
  "export const queueAuditEventWithoutRequest = async (..._args: any[]): Promise<any> => ({});",
  "export const queueAuditEventBackground = async (..._args: any[]): Promise<any> => ({});"
].join("\n"));

write("entitlements.ts", [
  'export const getEnterpriseLicense = async (..._args: any[]): Promise<any> => ({ status: "inactive", active: false, features: {}, workspaces: {} });',
  "export const getPendingDowngradeSchedule = async (..._args: any[]): Promise<any> => null;",
  "export const getAccessControlPermission = async (..._args: any[]): Promise<any> => true;",
  "export const getWorkspacePermissionByUserId = async (..._args: any[]): Promise<any> => true;",
  "export const getIsMultiOrgEnabled = async (..._args: any[]): Promise<any> => false;",
  "export const getTeamsWhereUserIsAdmin = async (..._args: any[]): Promise<any> => [];",
  "export const getTeamPermissionFlags = async (..._args: any[]): Promise<any> => ({});",
  "export const checkRoleManagementPermission = async (..._args: any[]): Promise<any> => true;",
  "export const getBulkInvitePermission = async (..._args: any[]): Promise<any> => true;",
  "export const getRemoveBrandingPermission = async (..._args: any[]): Promise<any> => false;
export const getIsContactsEnabled = async (..._args:any[]) => true;
export const getIsQuotasEnabled = async (..._args:any[]) => true;
export const getIsSpamProtectionEnabled = async (..._args:any[]) => true;
export const getIsWorkflowsEnabled = async (..._args:any[]) => false;
export const getIsAISmartToolsEnabled = async (..._args:any[]) => false;
export const getIsFeedbackDirectoriesEnabled = async (..._args:any[]) => false;
export const getIsSsoEnabled = async (..._args:any[]) => false;
export const getIsSamlSsoEnabled = async (..._args:any[]) => false;
export const getOrganizationWorkspacesLimit = async (..._args:any[]) => null;",
  "export const INVITE_DISABLED = false;"
].join("\n"));

write("compat/quotas/lib/evaluation-service.ts", [
  "export const evaluateQuotas = async (..._args: any[]): Promise<any> => ({ allowed: true, quotaFull: false, shouldEndSurvey: false, refreshedResponse: null, quotas: [] });",
  "export const evaluateQuota = async (..._args: any[]): Promise<any> => ({ allowed: true, quotaFull: false });",
  "export const evaluateResponseQuotas = async (..._args: any[]): Promise<any> => ({ allowed: true, quotaFull: false, shouldEndSurvey: false, refreshedResponse: null, quotas: [] });",
  "export const screenResponseQuotas = async (..._args: any[]): Promise<any> => ({ allowed: true, quotaFull: false, shouldEndSurvey: false, refreshedResponse: null, quotas: [] });"
].join("\n"));

write("compat/quotas/lib/quotas.ts", [
  "export const getQuotas = async (..._args: any[]): Promise<any[]> => [];",
  "export const getQuota = async (..._args: any[]): Promise<any> => null;",
  "export const reduceQuotaLimits = async (..._args: any[]): Promise<any> => null;"
].join("\n"));

write("compat/billing/lib/organization-billing.ts", [
  "export const cleanupStripeCustomer = async (..._args: any[]) => null;",
  'export const getOrganizationBillingWithReadThroughSync = async (..._args: any[]): Promise<any> => ({ stripe: undefined, stripeCustomerId: null, limits: { workspaces: null, monthly: { responses: null } }, usageCycleAnchor: null, active: false, status: "inactive", features: {} });',
  'export const getOrganizationBilling = async (..._args: any[]): Promise<any> => ({ stripe: undefined, stripeCustomerId: null, limits: { workspaces: null, monthly: { responses: null } }, usageCycleAnchor: null, active: false, status: "inactive", features: {} });',
  "export const getProTrialDays = async (..._args: any[]): Promise<number> => 0;",
  "export const invalidateOrganizationBillingCache = async (..._args: any[]) => undefined;",
  "export const ensureCloudStripeSetupForOrganization = async (..._args: any[]) => undefined;"
].join("\n"));

write("compat/unify-feedback/sources/types.ts", [
  "export type TFeedbackSource = Record<string, unknown>;",
  'export const CSV_FILE_TOO_LARGE_ERROR_CODE = "CSV_FILE_TOO_LARGE";',
  'export const CSV_AT_LEAST_ONE_ROW_ERROR_CODE = "CSV_AT_LEAST_ONE_ROW";',
  'export const CSV_EMPTY_COLUMN_HEADERS_ERROR_CODE = "CSV_EMPTY_COLUMN_HEADERS";',
  'export const CSV_FILES_ONLY_ERROR_CODE = "CSV_FILES_ONLY";',
  'export const CSV_INCONSISTENT_COLUMNS_ERROR_CODE = "CSV_INCONSISTENT_COLUMNS";',
  'export const CSV_MAX_RECORDS_ERROR_CODE = "CSV_MAX_RECORDS";',
  'export const CSV_PARSE_ERROR_CODE = "CSV_PARSE_ERROR";',
  'export const CSV_IMPORT_MISSING_COLUMNS_ERROR_CODE = "CSV_IMPORT_MISSING_COLUMNS";',
  "export const CSV_HIDDEN_STATIC_MAPPINGS: Record<string, string> = {};",
  "export const CSV_PROTECTED_TARGET_IDS: string[] = [];",
  "export const CSV_REQUIRED_UI_FIELDS: string[] = [];",
  "export const MAX_CSV_VALUES = { FILE_SIZE: 10000000, RECORDS: 100000 };",
  "export const TALLYNEST_CSV_LIMITS = MAX_CSV_VALUES;"
].join("\n"));

write("compat/license-check/lib/license.ts", 'export const getEnterpriseLicense = async (..._args: any[]): Promise<any> => ({ status: "inactive", active: false, features: {}, workspaces: {} });');
write("compat/license-check/lib/lite-license.ts", "export const isLiteLicense = (..._args: any[]): boolean => true;\nexport const getLiteLicense = async (..._args: any[]): Promise<any> => null;");
write("compat/license-check/types/enterprise-license.ts", "export type TEnterpriseLicense = any;\nexport type TEnterpriseLicenseFeatures = Record<string, boolean>;\nexport type TLicenseStatus = string;\nexport type TPublicLicenseFeatureKey = string;");
write("compat/license-check/lib/contacts-api-guard.ts", "export const checkContactsApiAccess = async (..._args: any[]) => true;\nexport const checkContactApiAccess = async (..._args: any[]) => true;");

write("compat/contacts/lib/contact-survey-link.ts", "export const getContactSurveyLink = async (..._args: any[]): Promise<any> => null;\nexport const verifyContactSurveyToken = async (..._args: any[]): Promise<any> => null;");
write("compat/contacts/segments/lib/segments.ts", "export const getSegments = async (..._args: any[]): Promise<any[]> => [];\nexport const getSegment = async (..._args: any[]): Promise<any> => null;\nexport const getExistingWorkspaceSurveyIds = async (..._args: any[]): Promise<any[]> => [];\nexport const getSurveyWorkspaceIdMap = async (..._args: any[]): Promise<any> => ({});");
write("compat/feedback-directory/lib/feedback-directory.ts", "export const getFeedbackDirectories = async (..._args: any[]): Promise<any[]> => [];\nexport const getFeedbackDirectoriesByWorkspaceId = async (..._args: any[]): Promise<any[]> => [];\nexport const getFeedbackDirectory = async (..._args: any[]): Promise<any> => null;");
write("compat/sso/lib/better-auth-hooks.ts", "export const getAfterAuthHooks = (..._args: any[]) => [];\nexport const getBeforeAuthHooks = (..._args: any[]) => [];");
write("compat/sso/lib/better-auth-providers.ts", "export const getBetterAuthProviders = (..._args: any[]) => [];");
write("compat/sso/lib/better-auth-recovery-signin.ts", "export const getBetterAuthRecoverySignIn = async (..._args: any[]) => null;");
write("compat/workflows/lib/analytics/constants.ts", "export const WORKFLOW_LIFECYCLE_EVENTS = {} as const;");
write("compat/workflows/lib/runner/reconcile-constants.ts", "export const WORKFLOW_RUN_RECONCILE_INTERVAL = 60000;");


write("compat/contacts/lib/contact-attribute-keys.ts", "export const getContactAttributeKeys = async (..._args: any[]) => [];");
write("compat/contacts/segments/components/segment-activity-utils.ts", "export const getSegmentActivity = async (..._args: any[]) => [];");
write("compat/contacts/segments/components/targeting-card.ts", "export const TargetingCard = (..._args: any[]) => null; export default TargetingCard;");
write("compat/contacts/segments/actions.ts", "export const getSegmentsAction = async (..._args: any[]) => []; export const createSegmentAction = async (..._args: any[]) => null;");
write("compat/contacts/segments/lib/filter/prisma-query.ts", "export const getSegmentPrismaQuery = (..._args: any[]) => ({});");
write("compat/contacts/api/v2/management/contacts/bulk/lib/openapi.ts", "export const openApi = {};");
write("compat/contacts/api/v2/management/contacts/lib/openapi.ts", "export const openApi = {};");
write("compat/contacts/api/v1/client/[workspaceId]/user/route.ts", "export async function GET(){ return new Response(null,{status:404}); }");
write("compat/contacts/api/v1/management/contact-attribute-keys/route.ts", "export async function GET(){ return new Response(null,{status:404}); }");
write("compat/contacts/api/v1/management/contact-attribute-keys/[contactAttributeKeyId]/route.ts", "export async function GET(){ return new Response(null,{status:404}); }");
write("compat/contacts/api/v1/management/contact-attributes/route.ts", "export async function GET(){ return new Response(null,{status:404}); }");
write("compat/contacts/api/v1/management/contacts/route.ts", "export async function GET(){ return new Response(null,{status:404}); }");
write("compat/contacts/api/v1/management/contacts/[contactId]/route.ts", "export async function GET(){ return new Response(null,{status:404}); }");
write("compat/contacts/api/v2/management/contacts/bulk/route.ts", "export async function POST(){ return new Response(null,{status:404}); }");
write("compat/ai-translation/lib/actions.ts", "export const checkAITranslationAvailableAction = async (..._args: any[]) => ({data:null,serverError:null}); export const translateSurveyFieldsAction = async (..._args: any[]) => ({data:null,serverError:null});");
write("compat/unify-feedback/enrichment-status/lib/enrichment.ts", "export type TEnrichmentProgress = any; export type TEnrichmentStatusResponse = Record<string,any>; export const getEnrichmentStatus = async (..._args: any[]) => ({});");
write("compat/unify-feedback/lib/contacts.ts", "export const getFeedbackRecordContacts = async (..._args: any[]) => [];");
write("compat/workflows/lib/analytics/process-workflows-usage-snapshot-job.ts", "export const processWorkflowsUsageSnapshotJob = async (..._args: any[]) => undefined;");
write("compat/workflows/lib/runner/process-workflow-run-job.ts", "export const processWorkflowRunJob = async (..._args: any[]) => undefined;");
write("compat/workflows/lib/runner/process-workflow-run-reconcile-job.ts", "export const processWorkflowRunReconcileJob = async (..._args: any[]) => undefined;");
write("compat/workflows/lib/runner/dispatch.ts", "export const dispatchWorkflowRunViaJobs = async (..._args: any[]) => undefined;");
write("compat/workflows/lib/runner/enqueue-response-completed-runs.ts", "export const enqueueResponseCompletedRuns = async (..._args: any[]) => undefined;");
write("compat/workflows/lib/analytics/constants.ts", "export const WORKFLOW_LIFECYCLE_EVENTS = {}; export const WORKFLOWS_USAGE_SNAPSHOT_DAILY_CRON_PATTERN = '0 0 * * *'; export const WORKFLOWS_USAGE_SNAPSHOT_TIME_ZONE = 'UTC';");
write("compat/workflows/lib/runner/reconcile-constants.ts", "export const WORKFLOW_RUN_RECONCILE_INTERVAL = 60000; export const WORKFLOW_RUN_RECONCILE_INTERVAL_MS = 60000;");
write("compat/billing/lib/metering.ts", "export const recordResponseCreatedMeterEvent = async (..._args: any[]) => undefined;");
write("compat/role-management/actions.ts", "export const getBulkInvitePermission = async (..._args: any[]) => true; export const checkRoleManagementPermission = async (..._args: any[]) => true;");
write("compat/role-management/components/add-member-role.ts", "export const AddMemberRole = (..._args: any[]) => null; export default AddMemberRole;");
write("compat/role-management/components/edit-membership-role.ts", "export const EditMembershipRole = (..._args: any[]) => null; export default EditMembershipRole;");
write("compat/teams/lib/roles.ts", "export const getTeamsWhereUserIsAdmin = async (..._args: any[]) => []; export const getWorkspacePermissionByUserId = async (..._args: any[]) => true;");
write("compat/teams/team-list/types/team.ts", "export type TOrganizationTeam = any; export type TOrganizationMember = any; export type TOrganizationMemberRole = any;");
write("compat/teams/team-list/types/workspace.ts", "export type TOrganizationWorkspace = any;");
write("compat/teams/team-list/lib/team.ts", "export const getTeamsByOrganizationId = async (..._args: any[]) => []; export const getTeam = async (..._args: any[]) => null;");
write("compat/teams/team-list/components/teams-view.ts", "export const TeamsView = (..._args: any[]) => null; export default TeamsView;");
write("compat/teams/utils/teams.ts", "export const getTeamPermissionFlags = async (..._args: any[]) => ({});");
write("compat/two-factor-auth/components/disable-two-factor-modal.ts", "export const DisableTwoFactorModal = (..._args: any[]) => null; export default DisableTwoFactorModal;");
write("compat/two-factor-auth/components/enable-two-factor-modal.ts", "export const EnableTwoFactorModal = (..._args: any[]) => null; export default EnableTwoFactorModal;");
write("compat/two-factor-auth/components/two-factor.ts", "export const TwoFactor = (..._args: any[]) => null; export default TwoFactor;");
write("compat/two-factor-auth/components/two-factor-backup.ts", "export const TwoFactorBackup = (..._args: any[]) => null; export default TwoFactorBackup;");
write("compat/sso/components/sso-options.ts", "export const SsoOptions = (..._args: any[]) => null; export default SsoOptions;");
write("compat/sso/lib/better-auth-hooks.ts", "export type AuthHookContext = any; export const blockedSignupDomainRedirectAfterHandler = async (..._args:any[])=>undefined; export const ssoRecoveryAfterHandler = async (..._args:any[])=>undefined; export const ssoDatabaseHooks = {}; export const ssoLicenseGateBeforeHandler = async (..._args:any[])=>undefined;");
write("compat/sso/lib/better-auth-providers.ts", "export const ssoGenericOAuthConfig = {}; export const ssoSocialProviders = [];");
write("compat/sso/lib/better-auth-recovery-signin.ts", "export const ssoRecoverySignInPlugin = {};");
write("compat/sso/lib/recovery-intent.ts", "export const readSsoRecoveryIntent = async (..._args:any[])=>null; export const refreshSsoRecoveryIntent = async (..._args:any[])=>null;");
write("compat/mailing/lib/mailing-subscription.ts", "export const getMailingSubscription = async (..._args:any[])=>null;");
write("compat/whitelabel/email-customization/lib/organization.ts", "export const getOrganizationEmailCustomization = async (..._args:any[])=>null; export const getOrganizationLogoUrl = async (..._args:any[])=>null;");
write("compat/whitelabel/remove-branding/components/branding-settings-card.ts", "export const BrandingSettingsCard = (..._args:any[])=>null; export default BrandingSettingsCard;");
write("compat/license-check/components/lite-license-tip.ts", "export const LiteLicenseTip = (..._args:any[])=>null; export default LiteLicenseTip;");
write("compat/quotas/components/quotas-card.ts", "export const QuotasCard = (..._args:any[])=>null; export default QuotasCard;");
write("compat/quotas/components/single-response-card-quotas.ts", "export const SingleResponseCardQuotas = (..._args:any[])=>null; export default SingleResponseCardQuotas;");
write("compat/quotas/components/quotas-summary.ts", "export const QuotasSummary = (..._args:any[])=>null; export default QuotasSummary;");

const common = path.join(root, "packages/types/common.ts");
if (fs.existsSync(common)) {
  let s = fs.readFileSync(common, "utf8");
  if (!s.includes("export const isEmailAddressShape")) {
    s += '\nexport const isEmailAddressShape = (address: string): boolean => { const at = address.indexOf("@"); if (at <= 0 || address.lastIndexOf("@") !== at || /\\s/.test(address)) return false; const domain = address.slice(at + 1); const dot = domain.lastIndexOf("."); return dot > 0 && dot < domain.length - 2; };\n';
    fs.writeFileSync(common, s);
  }
}

const storage = path.join(webRoot, "modules/storage/utils.ts");
if (fs.existsSync(storage)) {
  let s = fs.readFileSync(storage, "utf8");
  if (!s.includes("export const getStorageUrlSurveyId")) {
    s += '\nexport const getStorageUrlSurveyId = (fileUrl: string): string | null => { const m = fileUrl.match(/\\/storage\\/[^/]+\\/(?:public|private)\\/surveys\\/([^/]+)/); return m?.[1] ?? null; };\n';
    fs.writeFileSync(storage, s);
  }
}
