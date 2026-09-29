# Tallynest / Formbricks Capability Parity

Status: initial architecture audit completed 2026-09-29.

| Capability | Formbricks Area | Initial Classification | Tallynest Status | Strategy |
|---|---|---|---|---|
| Dashboard/application shell | apps/web/app + modules | AGPLv3 baseline; file audit required | Not started | Reuse permitted core |
| Survey editor | apps/web/modules/survey/editor | AGPLv3 baseline; file audit required | Not started | Reuse/adapt permitted core |
| Survey runtime | packages/surveys + survey UI + app public routes | AGPLv3/MIT boundaries require file audit | Not started | Reuse permitted core |
| Responses | web response-pipeline/survey areas | AGPLv3 baseline; file audit required | Not started | Reuse/adapt permitted core |
| Analytics | web analysis + packages/infrastructure | Mixed core/EE/cloud | Not started | Classify, then reuse/reimplement |
| Authentication | apps/web/modules/auth | Core plus separate EE auth areas | Not started | Reuse permitted core; reimplement restricted additions |
| Authorization/workspaces | workspaces/organization + Authzed/SpiceDB | Core infrastructure plus EE role features | Not started | Reuse permitted core; own advanced roles |
| Integrations | modules/integrations | Core plus feature-specific areas | Not started | Audit each integration |
| Database | packages/database | AGPLv3 baseline; third-party dependencies separate | Not started | Reuse/adapt permitted core |
| Email | packages/email + web email modules | Mixed | Not started | Audit provider boundaries |
| Storage | packages/storage + app storage | Mixed | Not started | Reuse permitted core; own provider boundary |
| Jobs/workflows | packages/jobs/workflows + EE workflows | Mixed | Not started | Reuse core; independently implement restricted workflow features |
| SSO | apps/web/modules/ee/sso | Enterprise | Not started | Reimplement/license |
| 2FA | apps/web/modules/ee/two-factor-auth | Enterprise | Not started | Reimplement/replace |
| Teams/advanced roles | apps/web/modules/ee/teams + role-management | Enterprise | Not started | Reimplement/replace |
| Audit logs | apps/web/modules/ee/audit-logs | Enterprise | Not started | Reimplement/replace |
| Contacts | apps/web/modules/ee/contacts | Enterprise | Not started | Reimplement/replace |
| Quotas | apps/web/modules/ee/quotas | Enterprise | Not started | Reimplement/replace |
| Enterprise workflows | apps/web/modules/ee/workflows | Enterprise | Not started | Reimplement/replace |
| Advanced analysis | apps/web/modules/ee/analysis | Enterprise | Not started | Reimplement/replace |
| Whitelabel | apps/web/modules/ee/whitelabel | Enterprise | Not started | Tallynest-owned |
| Billing/cloud logic | apps/web/modules/ee/billing | Enterprise/cloud | Not started | Tallynest-owned billing boundary |

## Rule

Parity does not mean copying restricted source. For each capability, the implementation strategy must respect its exact license and provenance.
