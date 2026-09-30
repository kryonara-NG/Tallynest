import fs from "node:fs";
import path from "node:path";
const root=process.cwd();
const base=path.join(root,"apps/web/modules/tallynest-core/compat");\nfs.rmSync(base,{recursive:true,force:true});
const files={
"billing/lib/organization-billing.ts":`export const getOrganizationBillingWithReadThroughSync=async(..._args:any[])=>({stripe:undefined});\nexport const getProTrialDays=async(..._args:any[])=>0;\nexport const invalidateOrganizationBillingCache=async(..._args:any[])=>{};\nexport const getOrganizationBilling=async(..._args:any[])=>({stripe:undefined});`,
"billing/actions.ts":`export const waitForBillingPlanAction=async(..._args:any[])=>null;`,
"billing/page.tsx":`export const PricingPage=(_props:any)=>null; export default function BillingPage(){return null;}`,
"billing/components/select-plan-card.tsx":`export const SelectPlanCard=(_props:any)=>null;`,
"billing/components/trial-alert.tsx":`export const TrialAlert=(_props:any)=>null;`,
"billing/components/trial-banner-new.tsx":`export const TRIAL_BASE_RESPONSE_LIMIT=0; export const TrialBannerNew=(_props:any)=>null;`,
"billing/components/trial-ending-warning-modal.tsx":`export const TrialEndingWarningModal=(_props:any)=>null;`,
"billing/components/trial-response-warning-modal.tsx":`export const TrialResponseWarningModal=(_props:any)=>null;`,
"billing/api/route.ts":`export async function POST(){return new Response("Billing is not part of Tallynest core",{status:404});}`,
"license-check/lib/license.ts":`export const getEnterpriseLicense=async(..._args:any[])=>({status:"no-license",features:{}}); export const getPendingDowngradeSchedule=async(..._args:any[])=>null;`,
"license-check/types/enterprise-license.ts":`export type TEnterpriseLicense={status:string;features?:Record<string,boolean>}; export type TEnterpriseLicenseFeatures=Record<string,boolean>; export type TLicenseStatus=string; export type TPublicLicenseFeatureKey=string;`,
"license-check/components/lite-license-tip.tsx":`export const LiteLicenseTip=(_props:any)=>null;`,
"license-check/actions.ts":`export const recheckLicenseAction=async(..._args:any[])=>({data:null,serverError:null}); export const requestEnterpriseLicense=async(..._args:any[])=>null;`,
"analysis/loading.tsx":`export const AnalysisListLoading=(_props:any)=>null; export default function Loading(){return null;}`,
"teams/workspace-teams/page.tsx":`export const WorkspaceTeams=(_props:any)=>null; export default function WorkspaceTeamsPage(){return null;}`,
"teams/team-list/types/team.ts":`export type TTeam={id:string;name:string};`,
"teams/team-list/types/workspace.ts":`export type TOrganizationWorkspace={id:string;name:string};`,
"teams/team-list/lib/team.ts":`export const getTeam=async(..._args:any[])=>null; export const getTeams=async(..._args:any[])=>[];`,
"teams/utils/teams.ts":`export const getTeamMembership=async(..._args:any[])=>null;`,
"teams/lib/roles.ts":`export const getTeamRole=async(..._args:any[])=>null;`,
"contacts/lib/contact-attribute-keys.ts":`export const getContactAttributeKeys=async(..._args:any[])=>[];`,
"contacts/lib/contacts.ts":`export const getContacts=async(..._args:any[])=>[]; export const getContact=async(..._args:any[])=>null; export const generatePersonalLinks=async(..._args:any[])=>[];`,
"contacts/lib/personal-link-errors.ts":`export const NO_CONTACTS_IN_SEGMENT_ERROR_CODE="NO_CONTACTS_IN_SEGMENT"; export const getPersonalLinkErrorMessage=(..._args:any[])=>""; export const getTranslatedPersonalLinkError=(..._args:any[])=>"";`,
"contacts/lib/contact-survey-link.ts":`export const getContactSurveyLink=async(..._args:any[])=>null;`,
"contacts/segments/lib/segments.ts":`export const getSegments=async(..._args:any[])=>[]; export const getSegment=async(..._args:any[])=>null; export const getExistingWorkspaceSurveyIds=async(..._args:any[])=>[];`,
"contacts/segments/components/segment-activity-utils.ts":`export const getSegmentActivity=async(..._args:any[])=>[];`,
"quotas/lib/quotas.ts":`export const getQuotas=async(..._args:any[])=>[]; export const getQuota=async(..._args:any[])=>null;`,
"quotas/lib/evaluation-service.ts":`export const evaluateQuotas=async(..._args:any[])=>({allowed:true,quotas:[]}); export const evaluateQuota=async(..._args:any[])=>({allowed:true}); export const evaluateResponseQuotas=async(..._args:any[])=>({allowed:true,quotas:[]}); export const screenResponseQuotas=async(..._args:any[])=>({allowed:true,quotas:[]});`,
"quotas/lib/helpers.ts":`export const getQuotaLimit=async(..._args:any[])=>null; export const hasQuotaReached=(..._args:any[])=>false; export const createQuotaFullObject=(quota:any)=>quota;`,
"quotas/components/quotas-summary.tsx":`export const QuotasSummary=(_props:any)=>null;`,
"ai-translation/lib/actions.ts":`export const translateSurvey=async(..._args:any[])=>null; export const translateText=async(..._args:any[])=>null;`,
"feedback-directory/lib/feedback-directory.ts":`export const getFeedbackDirectories=async(..._args:any[])=>[]; export const getFeedbackDirectory=async(..._args:any[])=>null; export const getOrganizationIdFromDirectoryId=async(..._args:any[])=>"TALLYNEST_CORE"; export const getFeedbackDirectoryAuthContext=async(..._args:any[])=>({});`,
"unify-feedback/sources/types.ts":`export type TFeedbackSource=Record<string,unknown>; export const CSV_FILE_TOO_LARGE_ERROR_CODE="CSV_FILE_TOO_LARGE"; export const CSV_IMPORT_FAILED_ERROR_CODE="CSV_IMPORT_FAILED"; export const MAX_CSV_VALUES=100000; export const TALLYNEST_CSV_LIMITS={FILE_SIZE:10_000_000};`,
"unify-feedback/enrichment-status/lib/enrichment.ts":`export const ENRICHMENT_KINDS=[] as const; export type TEnrichmentProgress=Record<string,unknown>; export type TEnrichmentStatusResponse=Record<string,unknown>; export const getEnrichmentStatus=async(..._args:any[])=>({}); export const TEnrichmentStatusResponse=undefined as any;`,
"sso/lib/sso-request-context.ts":`export const runWithSsoRequestContext=async<T>(fn:()=>Promise<T>)=>fn();`,
"sso/lib/recovery-intent.ts":`export type TSsoRecoveryIntent={token?:string;userId?:string}; export const getSsoRecoveryPairedTtlSeconds=async(..._args:any[])=>0; export const readSsoRecoveryIntent=async(..._args:any[]):Promise<TSsoRecoveryIntent|null>=>null; export const refreshSsoRecoveryIntent=async(..._args:any[]):Promise<TSsoRecoveryIntent|null>=>null;`,
"whitelabel/email-customization/components/email-customization-settings.tsx":`export const EmailCustomizationSettings=(_props:any)=>null;`,
"whitelabel/email-customization/lib/organization.ts":`export const getOrganizationEmailCustomization=async(..._args:any[])=>null; export const getOrganizationLogoUrl=async(..._args:any[])=>null;`,
"whitelabel/favicon-customization/components/favicon-customization-settings.tsx":`export const FaviconCustomizationSettings=(_props:any)=>null;`,
"whitelabel/remove-branding/components/branding-settings-card.tsx":`export const BrandingSettingsCard=(_props:any)=>null;`,
"workflows/lib/analytics-events.ts":`export const WORKFLOW_LIFECYCLE_EVENTS={FILE_SIZE:10_000_000} as const; export type TWorkflowAnalyticsVia=string;`
};
for(const [rel,content] of Object.entries(files)){const p=path.join(base,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,content+"\n");}
for(const f of fs.readdirSync(path.join(root,"apps/web"),{recursive:true})){if(typeof f!=="string"||!(/\\.(ts|tsx|js|jsx|mjs|mts)$/.test(f)))continue;const p=path.join(root,"apps/web",f);if(p.includes("/tallynest-core/"))continue;let s=fs.readFileSync(p,"utf8");const n=s.replaceAll("withAuditLogging","withActivityContext");if(n!==s)fs.writeFileSync(p,n);}
