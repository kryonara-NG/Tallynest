# Formbricks Derivation Record

Audit date: 2026-09-29
Upstream repository: formbricks/formbricks
Upstream baseline: a6e34d8690ca9450b2c3b88d86c9b8341f9af130

## Current baseline

The Tallynest repository is not yet populated with Formbricks application source.

The following upstream areas are identified as likely migration boundaries and require file-level review before copying/adapting:
- apps/web
- apps/web/modules
- apps/web/app
- packages/database
- packages/surveys
- packages/survey-ui
- packages/js-core
- packages/types
- packages/email
- packages/storage
- packages/cache
- packages/jobs
- packages/workflows
- packages/ai
- packages/i18n-utils
- packages/logger

## Core/Enterprise boundary

Formbricks root licensing identifies most repository content outside stated exceptions as AGPLv3.

Formbricks specifically places apps/web/modules/ee under a separate Enterprise license.

Do not assume that a package is reusable merely because it appears adjacent to reusable code. Verify the exact path and license.

## Required record for each migration

| Path/Area | Upstream Commit | License | Core/EE/MIT | Derivation Type | Notice Required | Tallynest Location |
|---|---|---|---|---|---|---|
| Pending file-level migration audit | a6e34d8690ca9450b2c3b88d86c9b8341f9af130 | Verify | Verify | Pending | Verify | Pending |

Derivation types:
- copied;
- adapted;
- independently reimplemented;
- behavioral reference only.

No Enterprise source may be added without explicit rights.
