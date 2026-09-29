# Tallynest / Formbricks Capability Parity

Status: File-level audit completed 2026-09-29. Upstream Commit: `ba56cfc322fb408689deabc25a3490344d6351bf`.

| Capability | Formbricks Area | Initial Classification | Tallynest Status | Strategy |
|---|---|---|---|---|
| Dashboard/application shell | `apps/web/app` + modules | AGPLv3 baseline | In Progress | Reuse/adapt permitted core |
| Survey editor | `apps/web/modules/survey` | AGPLv3 baseline | In Progress | Reuse/adapt permitted core |
| Survey runtime | `packages/surveys` + `packages/survey-ui` | AGPLv3 baseline | In Progress | Reuse permitted core |
| Responses | `apps/web/modules/response-pipeline` | AGPLv3 baseline | In Progress | Reuse/adapt permitted core |
| Analytics | `apps/web/modules/analysis` | AGPLv3 core + EE analysis | In Progress | Core analytics reuse; EE analysis reimplement |
| Authentication | `apps/web/modules/auth` | AGPLv3 core | In Progress | Reuse permitted core |
| Authorization/workspaces | `apps/web/modules/workspaces` + `organization` | AGPLv3 core | In Progress | Reuse permitted core |
| Integrations | `apps/web/modules/integrations` | AGPLv3 core | Pending | Audit & adapt permitted core |
| Database | `packages/database` | AGPLv3 baseline | In Progress | Adapt schema & Prisma baseline |
| Email | `packages/email` + `modules/email` | AGPLv3 core | Pending | Adapt standard provider boundary |
| Storage | `packages/storage` + `modules/storage` | AGPLv3 core | Pending | Adapt S3/Local provider boundary |
| Jobs/workflows | `packages/jobs` / `packages/workflows` | AGPLv3 core | Pending | Adapt job processing baseline |
| SSO | `apps/web/modules/ee/sso` | Enterprise Restricted | Pending | REIMPLEMENT (OIDC/SAML) |
| 2FA | `apps/web/modules/ee/two-factor-auth` | Enterprise Restricted | Pending | REIMPLEMENT (Standard TOTP) |
| Teams/advanced roles | `apps/web/modules/ee/teams` | Enterprise Restricted | Pending | REIMPLEMENT (Tallynest RBAC) |
| Audit logs | `apps/web/modules/ee/audit-logs` | Enterprise Restricted | Pending | REIMPLEMENT (Tallynest Audit Module) |
| Contacts | `apps/web/modules/ee/contacts` | Enterprise Restricted | Pending | REIMPLEMENT (Tallynest Contacts Module) |
| Quotas | `apps/web/modules/ee/quotas` | Enterprise Restricted | Pending | REIMPLEMENT (Tallynest Quotas Engine) |
| Enterprise workflows | `apps/web/modules/ee/workflows` | Enterprise Restricted | Pending | REIMPLEMENT (Tallynest Workflows) |
| Advanced analysis | `apps/web/modules/ee/analysis` | Enterprise Restricted | Pending | REIMPLEMENT (Clean AI integration) |
| Whitelabel | `apps/web/modules/ee/whitelabel` | Enterprise Restricted | In Progress | Tallynest-owned native branding |
| Billing/cloud logic | `apps/web/modules/ee/billing` | Enterprise Restricted | Pending | Tallynest-owned billing boundary |

## Compliance Rules
- **Core (AGPLv3)**: Direct derivation permitted with attribution.
- **Enterprise (`apps/web/modules/ee`)**: Zero-copy rule. Features must be independently implemented in Tallynest.
