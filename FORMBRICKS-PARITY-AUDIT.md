# Formbricks Core Parity Audit

## Goal

Tallynest must contain the complete reusable Formbricks Core product surface needed for rebranding: application UI, every AGPL-core page/route, survey builder and renderer, settings, onboarding/auth, APIs, supporting packages, assets, translations, and tests.

This audit intentionally excludes Formbricks Enterprise Edition under `apps/web/modules/ee`. Enterprise code is not copied or recreated under this audit unless independently implemented by Tallynest.

## Verified in Tallynest

- Fresh repository history; no Formbricks commit history imported.
- Formbricks Core source restoration has been performed in multiple batches.
- Final core product modules were restored.
- Survey-editor validation and link-URL support were restored.
- Remaining core types/editor updates were synchronized.
- Repository metadata and documentation were restored.
- Workflow type documentation was restored.
- Root workspace is a pnpm/Turborepo monorepo.
- `apps/web` is a Next.js application and currently contains the Formbricks web dependency surface, including survey, survey-ui, database, storage, workflows, authentication, i18n, and supporting packages.
- `apps/web/modules/ee` is intentionally excluded by the licensing boundary.

## Required parity gates

### 1. Source-tree parity

Compare Tallynest against the current upstream Formbricks `main` source tree and verify every AGPL-core path exists, except:

- `apps/web/modules/ee/**`
- Enterprise-only license/enforcement files
- Files whose only purpose is Enterprise entitlement

Any missing AGPL-core file is a blocker.

### 2. Route/page parity

Enumerate every upstream Next.js route and verify the corresponding Tallynest route/page exists and is reachable.

At minimum audit:

- authentication and account flows
- setup/onboarding
- organization/workspace/environment flows
- survey list
- survey templates
- survey editor
- survey settings
- survey responses
- survey analysis that belongs to Core
- link surveys
- share/public survey flows
- targeting/contact-related Core flows
- integrations that are Core
- account/profile/settings
- API and client routes
- error/not-found/loading/redirect routes
- legal/footer surfaces
- all dynamic and nested routes

Do not mark a route complete merely because a file exists: verify imports, server actions, data loaders, permissions, and UI components resolve.

### 3. UI/component parity

Verify the complete Formbricks Core UI system:

- navigation/sidebar/header
- dialogs, drawers, popovers, dropdowns
- survey question components
- survey editor canvas/sidebar/toolbars
- templates UI
- response tables and filters
- analytics visualizations that are Core
- settings forms
- onboarding/auth UI
- empty/error/loading states
- responsive/mobile states
- icons, illustrations, fonts, static assets
- translations and locale bundles

### 4. Runtime parity

Verify:

- database schema and migrations
- seed/setup path
- authentication
- authorization
- cache/storage
- email
- jobs/workflows
- survey SDK/runtime
- public/link survey rendering
- file/image handling
- API v1/v2/core management endpoints
- environment validation
- Docker/self-hosting path

Enterprise-only runtime dependencies must not be reintroduced accidentally.

### 5. Build/test gates

Before rebranding:

- `pnpm install --frozen-lockfile`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm test`
- `pnpm build`
- relevant Playwright/E2E smoke tests
- verify a clean self-hosted startup path

A page is not considered complete if it exists in source but fails one of the required runtime/build gates.

## Rebranding gate

Only after the parity gates above pass should Tallynest branding replacement begin.

Rebranding must then be centralized so Formbricks-origin functionality is preserved while names, logos, colors, metadata, public URLs, email branding, legal/product copy, and generated assets are changed consistently.

## Current status

**Core source restoration: substantially complete.**

**Full page/UI/runtime parity: not yet proven.**

**Rebrand-ready: NO — pending parity and build verification.**

The next engineering action is a complete source/route/UI parity pass followed by build/typecheck/test/E2E verification. Missing core files or broken seams are to be repaired in Tallynest rather than merely documented as known gaps.
