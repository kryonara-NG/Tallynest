# Changes

## 2026-09-28 — Tallynest bootstrap

- Created a new independent GitHub repository rather than a fork.
- Started a fresh repository history; Formbricks commit history is not imported.
- Established an explicit licensing boundary excluding `apps/web/modules/ee`.
- Added licensing, architecture, provenance, and third-party-notice documentation.
- Planned a clean import of the reusable Formbricks Core with independent Tallynest modifications.
- Planned replacement of Enterprise-dependent seams with independent Tallynest interfaces rather than copied EE code.
- Added a provider-neutral AI boundary using environment variables such as `OPENAI_API_KEY`.
