# Tallynest License Matrix

Status: initial Formbricks audit completed on 2026-09-29.

| Area | Source | License | Classification | Action |
|---|---|---|---|---|
| Tallynest original code | Tallynest | Tallynest-controlled | OWN | Build and maintain |
| Formbricks repository content outside stated exceptions | Formbricks | AGPLv3 | REUSE WITH COMPLIANCE | File-level provenance review; preserve notices and satisfy AGPL obligations |
| Formbricks apps/web/modules/ee | Formbricks | Formbricks Enterprise license | RESTRICTED | Do not incorporate into production without explicit rights |
| Formbricks MIT-designated package areas | Formbricks | MIT | REUSE WITH ATTRIBUTION | Verify exact package/path license before use |
| Third-party dependencies | Upstream/package | Per-package | AUDIT REQUIRED | Record version, source and license |
| Formbricks client SDK package areas | Formbricks | MIT where explicitly designated | AUDIT REQUIRED | Verify exact package/path before reuse |

## Upstream evidence

Audited repository: formbricks/formbricks
Audited main commit: a6e34d8690ca9450b2c3b88d86c9b8341f9af130

The Formbricks root LICENSE states that content outside its stated exceptions is AGPLv3, that apps/web/modules/ee is governed by its separate EE license, and that specified package paths are MIT.

The exact file/package classification remains the gate for each migration change.

## Engineering rule

No Enterprise source enters Tallynest production without explicit rights.

Every substantial upstream-derived area must be recorded in SOURCE-INVENTORY.md and FORMbricks-DERIVATION.md before production use.
