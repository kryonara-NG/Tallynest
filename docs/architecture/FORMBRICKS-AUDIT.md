# Formbricks Foundation Audit

Audit date: 2026-09-29
Upstream repository: formbricks/formbricks
Audited upstream main commit: a6e34d8690ca9450b2c3b88d86c9b8341f9af130

## Repository shape

The current Formbricks repository is a pnpm/Turborepo monorepo.

Primary application:
- apps/web

Important reusable package areas identified:
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

The web application also contains dedicated modules for:
- auth
- survey
- organization
- workspaces
- integrations
- response pipeline
- analysis
- settings
- storage
- email
- setup
- UI
- API

## Web routes/application surface

apps/web/app currently contains:
- authenticated application route group
- auth route group
- redirects
- API routes
- public survey/form routes
- link/share route area
- setup
- storage
- health
- versioned API area
- not-found/error/global-error handling
- application layout and middleware

This confirms that the migration must audit both dashboard/application pages and public survey/runtime surfaces.

## Survey system

The web module contains a dedicated survey domain with:
- components
- editor
- hooks
- library code
- follow-ups
- archive functionality

The package layer also contains dedicated surveys and survey-ui packages.

Migration recommendation: REUSE/ADAPT permitted core code after file-level provenance review, rather than rebuilding the survey engine from scratch.

## Database

The repository has a dedicated packages/database workspace with schema and source areas and uses Prisma.

Migration recommendation: audit schema/migrations file-by-file, then REUSE permitted core database foundation while recording provenance.

## Authentication and authorization

Authentication is a dedicated web module. Current web dependencies include Better Auth-related packages and Authzed/SpiceDB integration.

The current development stack includes PostgreSQL plus SpiceDB/Authzed.

Migration recommendation:
- authentication: audit and reuse permitted core;
- authorization: audit the current Authzed/SpiceDB model and preserve the tenant/workspace boundary;
- Enterprise SSO remains separately classified.

## Infrastructure

Current development configuration includes:
- PostgreSQL with pgvector
- Authzed/SpiceDB and its PostgreSQL datastore/bootstrap
- Valkey/Redis
- MailHog
- RustFS/storage-related services
- Hub
- Cube/analytics-related services

The exact production topology must be audited separately before choosing Tallynest hosting providers.

## Toolchain

Current upstream package metadata indicates:
- Node.js: >=20.19.0 <21 OR >=22.12.0 <23 OR >=24.0.0 <25
- pnpm: 11.7.0
- Next.js: 16.3.3 in apps/web
- React: 19.2.6 via workspace catalog
- TypeScript: 5.9.3
- Prisma: 7.8.0
- Vitest: 4.1.11
- Playwright: 1.58.2
- Turborepo: 2.9.14

These versions are upstream observations at the audited commit, not automatic Tallynest requirements. Jules must verify compatibility before migration.

## Enterprise boundary

apps/web/modules/ee currently contains:
- ai-translation
- analysis
- audit-logs
- auth
- billing
- contacts
- feedback-directory
- license-check
- mailing
- quotas
- role-management
- sso
- teams
- two-factor-auth
- unify-feedback
- whitelabel
- workflows

The presence of a directory under modules/ee is treated as Enterprise-restricted unless its exact file-level license classification proves otherwise.

## Licensing baseline

Formbricks root LICENSE states that content outside specified exceptions is AGPLv3. It specifically identifies apps/web/modules/ee as governed by its separate Enterprise license, and identifies certain package paths as MIT.

The Enterprise license states that production use requires the applicable Formbricks Enterprise terms/license and that development/testing copies are permitted without a subscription. It does not grant general production copying, merging, distribution, sublicensing, or sale rights without the applicable rights.

Therefore Tallynest must not copy Enterprise source into production merely to achieve feature parity.

## Immediate migration order

1. Preserve this audit as the upstream baseline.
2. Perform file/package-level license and provenance inventory.
3. Audit database schema and migrations.
4. Audit auth and authorization boundaries.
5. Audit survey editor/runtime and response pipeline.
6. Audit integrations, jobs, storage, email, analytics and APIs.
7. Build the permitted core in Tallynest.
8. Independently implement or replace Enterprise capabilities as required.
