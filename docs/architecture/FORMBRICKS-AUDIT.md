# Formbricks Deeper Audit & Architecture Inventory

Audit Date: 2026-09-29
Upstream Repository: https://github.com/formbricks/formbricks
Audited Main Commit: `ba56cfc322fb408689deabc25a3490344d6351bf` (Parent: `a6e34d8690ca9450b2c3b88d86c9b8341f9af130`)

## 1. Upstream Package & Module Structure

Formbricks is structured as a pnpm/Turborepo monorepo.

### Monorepo Apps:
- `apps/web`: Primary Next.js web application (Dashboard, Survey Runtime, Admin, Integrations, Auth).
- `apps/storybook`: Component design system catalog.

### Monorepo Packages:
- `packages/surveys`: Core survey definitions, schema, validation, logic, and question types (License: AGPLv3).
- `packages/survey-ui`: React components for rendering questions and survey flows (License: AGPLv3).
- `packages/database`: Prisma schema, migrations, database seeders, client definitions (License: AGPLv3).
- `packages/js-core`: Client SDK / JS embed runtime for website/app integration (License: MIT / AGPLv3 as designated).
- `packages/types`: Shared TypeScript interface and type definitions.
- `packages/email`: React Email templates, transport handlers, and notification services.
- `packages/storage`: S3 / Local storage abstraction layer.
- `packages/jobs`: Background job definitions and queue processors.
- `packages/cache`: Valkey/Redis cache utilities.
- `packages/workflows`: Workflow execution engine and event triggers.
- `packages/ai`: AI summarization, question generation, and translation utilities.
- `packages/i18n-utils`: Multilingual translation utilities.
- `packages/logger`: Structured logger.

### Web Modules Surface (`apps/web/modules/`):
- `account`, `ai`, `analysis`, `api`, `auth`, `billing`, `core`, `email`, `entitlements`, `hub`, `integrations`, `mcp`, `organization`, `response-pipeline`, `settings`, `setup`, `storage`, `survey`, `ui`, `utils`, `workspaces`.

---

2. Enterprise Directory Inventory (`apps/web/modules/ee/`)

The following capabilities are located under the Enterprise restriction directory (`apps/web/modules/ee/`) and governed by Formbricks EE License:

| Module | Purpose | Tallynest Strategy |
|---|---|---|
| `ai-translation` | Automated survey translation | REIMPLEMENT or OMIT for initial core |
| `analysis` | Advanced AI analysis & insight clustering | REIMPLEMENT with open-source AI |
| `audit-logs` | Organization action & security logging | REIMPLEMENT as Tallynest-owned module |
| `auth` / `sso` | SAML/OIDC Single Sign-On | REIMPLEMENT via open-source OIDC/SAML |
| `billing` | Subscription, quota, Stripe billing | TALLYNEST OWNED (Independent billing layer) |
| `contacts` | Contact management & attribute targeting | REIMPLEMENT in Tallynest core |
| `feedback-directory` | Feedback repository & taxonomy | REIMPLEMENT or OMIT |
| `license-check` | Upstream EE license verification | OMIT / NOT APPLICABLE |
| `mailing` | Custom domain white-labeled email sending | REIMPLEMENT via standard SMTP/Resend provider |
| `quotas` | Usage limits & team quota enforcement | REIMPLEMENT in Tallynest workspace layer |
| `role-management` / `teams` | Fine-grained RBAC & team structure | REIMPLEMENT with RBAC schema in Tallynest |
| `two-factor-auth` | TOTP 2FA authentication | REIMPLEMENT using standard TOTP library |
| `whitelabel` | Custom branding, logo, favicon removal | TALLYNEST OWNED (Default white-labeled) |
| `workflows` | Advanced multi-step event triggers | REIMPLEMENT via standard event queues |

---

3. Legal Boundary & Migration Directives

1. **Formbricks Core Code (AGPLv3)**: May be derived or adapted while complying with AGPLv3 obligations (preserving copyright notices, providing source availability, and documenting derivation).
2. **Formbricks Enterprise Code (`apps/web/modules/ee`)**: MUST NOT BE COPIED or adapted into Tallynest. All equivalent features will be independently reimplemented using clean-room Tallynest architecture or compatible open-source libraries.
