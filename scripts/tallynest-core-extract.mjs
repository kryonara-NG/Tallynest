import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const web = path.join(root, "apps/web");
const eePrefix = "@/modules/ee/";

const replacements = [
  ["@/modules/ee/license-check/lib/utils", "@/modules/tallynest-core/entitlements"],
  ["@/modules/ee/audit-logs/lib/handler", "@/modules/tallynest-core/activity-context"],
  ["@/modules/ee/teams/workspace-teams/types/team", "@/modules/tallynest-core/team-permissions"],
  ["@/modules/ee/audit-logs/types/audit-log", "@/modules/tallynest-core/api-audit"],
  ["@/modules/ee/quotas/lib/evaluation-service", "@/modules/tallynest-core/quotas"],
  ["@/modules/ee/quotas/lib/quotas", "@/modules/tallynest-core/quotas"],
  ["@/modules/ee/quotas/lib/helpers", "@/modules/tallynest-core/quotas"],
  ["@/modules/ee/license-check/lib/license", "@/modules/tallynest-core/entitlements"],
];

const skipDirs = new Set(["node_modules", ".next", ".git", "modules/ee"]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx|mts|cts|js|mjs)$/.test(entry.name)) out.push(p);
  }
  return out;
}

for (const file of walk(web)) {
  let s = fs.readFileSync(file, "utf8");
  let next = s;
  for (const [from, to] of replacements) next = next.split(from).join(to);
  next = next.replaceAll("withActivityContext(", "withAuditLogging(");
  next = next.replaceAll("modules/ee/sso/", "the excluded Enterprise SSO module");
  next = next.replaceAll("modules/ee/quotas/", "the excluded Enterprise quota module");
  if (next !== s) fs.writeFileSync(file, next);
}

const removeTrees = [
  "app/(app)/workspaces/[workspaceId]/workflows",
  "app/(app)/workspaces/[workspaceId]/unify",
  "app/(app)/workspaces/[workspaceId]/(analysis)/charts",
  "app/(app)/workspaces/[workspaceId]/(analysis)/dashboards",
  "app/(app)/workspaces/[workspaceId]/(contacts)",
  "app/(app)/organizations/[organizationId]/settings/feedback-directories",
  "app/(app)/organizations/[organizationId]/settings/enterprise",
  "app/(app)/api/auth/saml",
  "app/(app)/api/auth/sso",
  "app/api/auth/saml",
  "app/api/auth/sso",
  "app/api/v3/contact-attribute-keys",
  "app/api/v3/feedbackRecords",
  "app/api/v3/unify-feedback",
  "app/api/v3/workflows",
  "modules/api/v2/management/contact-attribute-keys",
  "modules/api/v2/management/surveys/[surveyId]/contact-links/segments",
  "modules/organization/settings/teams",
  "modules/auth/lib/better-auth-two-factor-backfill.ts",
  "modules/auth/lib/auth-two-factor.integration.test.ts",
  "modules/auth/lib/cutover/reencode-two-factor.integration.test.ts",
  "modules/auth/lib/sso-provisioning-reject-reasons.ts",
  "modules/ui/components/confirm-delete-segment-modal",
];

for (const rel of removeTrees) {
  const target = path.join(web, rel);
  if (fs.existsSync(target)) fs.rmSync(target, { recursive: true, force: true });
}

const directEEReexportPatterns = [
  /export\s+\{[^}]+\}\s+from\s+["']@\/modules\/ee\//,
  /import\s+\{[^}]+\}\s+from\s+["']@\/modules\/ee\//,
];

for (const file of walk(web)) {
  const s = fs.readFileSync(file, "utf8");
  if (!s.includes(eePrefix)) continue;
  const rel = path.relative(root, file);
  const isRoute = /(?:^|\/)(page|layout|loading|route)(?:\.test)?\.(ts|tsx)$/.test(path.basename(file));
  const isTest = /\.test\.(ts|tsx)$/.test(path.basename(file));
  if (isTest) {
    fs.rmSync(file, { force: true });
    continue;
  }
  if (isRoute && directEEReexportPatterns.some((re) => re.test(s))) {
    fs.writeFileSync(file, 'import { notFound } from "next/navigation";\n\nexport default function EnterpriseFeatureUnavailable() {\n  notFound();\n}\n');
  }
}

// workflow trigger checkpoint 6
