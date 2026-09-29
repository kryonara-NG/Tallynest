# Tallynest Source Inventory & Derivation Tracker

Status: Updated 2026-09-29 following deep Formbricks file audit (`ba56cfc322fb408689deabc25a3490344d6351bf`).

| Path/Area | Upstream Source | Upstream Path | Upstream License | Derivation Type | Notice Required | Tallynest Location |
|---|---|---|---|---|---|---|
| Survey Schema & Logic | formbricks/formbricks | `packages/surveys` | AGPLv3 | Derived / Adapted | Yes (AGPLv3) | `packages/surveys` / `lib/surveys` |
| Survey UI Components | formbricks/formbricks | `packages/survey-ui` | AGPLv3 | Derived / Adapted | Yes (AGPLv3) | `packages/survey-ui` / `components/surveys` |
| Database Schema | formbricks/formbricks | `packages/database/prisma/schema.prisma` | AGPLv3 | Derived / Adapted | Yes (AGPLv3) | `packages/database/prisma/schema.prisma` |
| Auth & Workspaces | formbricks/formbricks | `apps/web/modules/auth`, `workspaces` | AGPLv3 | Derived / Adapted | Yes (AGPLv3) | `apps/web/lib/auth`, `apps/web/app/(auth)` |
| Client SDK Embed | formbricks/formbricks | `packages/js-core` | MIT | Derived / Adapted | Yes (MIT) | `packages/js-core` |
| SSO & SAML | N/A (Clean room) | N/A (EE restricted upstream) | N/A | Independent Reimplementation | No | `apps/web/lib/ee-replacements/sso` |
| Audit Logs | N/A (Clean room) | N/A (EE restricted upstream) | N/A | Independent Reimplementation | No | `apps/web/lib/ee-replacements/audit-logs` |
| 2FA Auth | N/A (Clean room) | N/A (EE restricted upstream) | N/A | Independent Reimplementation | No | `apps/web/lib/ee-replacements/two-factor-auth` |

Derivation Types: `Copied`, `Adapted`, `Independent Reimplementation`, `Behavioral Reference Only`.
