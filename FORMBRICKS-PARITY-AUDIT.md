# Tallynest Formbricks Core Parity Audit

Updated: 2026-10-01

## Scope
Tallynest is intended to contain the reusable Formbricks Core product surface, including the application UI, routes/pages, survey editor/runtime, APIs, packages, translations, settings, onboarding/auth flows, and supporting assets.

Formbricks Enterprise Edition is intentionally excluded. No files from `apps/web/modules/ee/**` are included.

## Verification performed
- Compared the recursive Tallynest tree against the Formbricks main tree.
- Identified missing non-Enterprise application/package source files.
- Restored the missing Core runtime/source files into Tallynest:
  - survey analysis component
  - matrix-question API route
  - API v3 validation helpers
  - proxy dispatcher
  - survey-response storage helper
  - survey editor logic-destination and special-choice helpers
  - custom-head-script permission helper
  - editor link URL helper
  - database matrix-chart migration
  - survey ranking/navigation helpers
- Re-ran the tree comparison after restoration.
- Result: no remaining non-Enterprise application/package runtime-source gaps were found. The only remaining upstream paths in that scope are the intentionally excluded Enterprise boundary/placeholder directory.
- Confirmed `vercel.json` uses Next.js with pnpm 11.7.0 and builds `@formbricks/web`.
- Confirmed the repository has a dedicated Tallynest build/typecheck workflow and Enterprise-boundary verification.
- Confirmed the latest known Vercel status checks are failing at the platform build-rate-limit URL, rather than reporting a source/build error.

## Current verdict

### Core source parity: PASS
Tallynest now contains the reusable Formbricks Core application/package source surface identified by the tree comparison.

### Enterprise boundary: PASS
Enterprise source under `apps/web/modules/ee/**` remains excluded.

### Vercel configuration: PASS
The repository contains an explicit Next.js Vercel configuration with frozen pnpm installation and the web build command.

### Full production build verification: PENDING PLATFORM CAPACITY
A live build could not be independently completed in this environment because direct repository cloning is unavailable here and the connected Vercel checks currently report a build-rate-limit failure. This is not being counted as a code failure.

## Rebrand readiness
**YES — source/repository rebranding work can begin.**

The Core parity work is complete to the level that can be verified from the repository. The only outstanding gate is an actual successful CI/Vercel build run once the Vercel build-rate limit clears.