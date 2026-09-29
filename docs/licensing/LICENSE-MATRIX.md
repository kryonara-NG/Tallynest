# Tallynest License Matrix

Status: Detailed Formbricks file/package audit completed on 2026-09-29.
Upstream Repository: https://github.com/formbricks/formbricks
Audited Main Commit: `ba56cfc322fb408689deabc25a3490344d6351bf`

| Area | Upstream Location | License | Classification | Action |
|---|---|---|---|---|
| Tallynest original code | Root & subdirectories | Tallynest Proprietary / License | OWN | Build and maintain |
| Formbricks Core Apps | `apps/web` (excluding `modules/ee`), `apps/storybook` | AGPLv3 | REUSE WITH COMPLIANCE | Adapt permitted core; preserve copyright and satisfy AGPL |
| Formbricks Core Packages | `packages/surveys`, `packages/survey-ui`, `packages/database`, `packages/types`, `packages/email`, `packages/storage`, `packages/jobs`, `packages/cache`, `packages/workflows`, `packages/ai`, `packages/i18n-utils`, `packages/logger` | AGPLv3 | REUSE WITH COMPLIANCE | Adapt permitted packages; preserve notices |
| Formbricks Client SDK | `packages/js-core` | MIT | REUSE WITH ATTRIBUTION | Include MIT attribution in licenses |
| Formbricks Enterprise | `apps/web/modules/ee/*` | Formbricks Enterprise License | RESTRICTED | Zero-copy rule. Independently reimplement in Tallynest |
| Third-party dependencies | npm package tree | Per-package (MIT/Apache-2.0/BSD) | AUDIT REQUIRED | Maintain attribution and compliance |

## Engineering Rules
1. No Enterprise source (`apps/web/modules/ee/*`) shall enter Tallynest.
2. Every substantial upstream-derived file or package must be recorded in `SOURCE-INVENTORY.md` and `FORMBRICKS-DERIVATION.md`.
