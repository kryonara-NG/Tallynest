# Tallynest Architecture

## Upstream technical foundation

The current Tallynest repository is a TypeScript monorepo using Turborepo and pnpm. The web application is a Next.js application under `apps/web`, with React UI, server-side route/action logic, Prisma-backed persistence, authentication, background jobs, integrations, SDK packages, and supporting services.

The inspected development stack includes:

- **Frontend / application:** Next.js + React + TypeScript
- **Monorepo:** pnpm workspaces + Turborepo
- **Database:** PostgreSQL via Prisma
- **Authorization:** SpiceDB in the current development stack
- **Cache / rate limiting:** Redis/Valkey
- **Analytics:** Cube semantic layer
- **Email:** SMTP
- **Storage:** S3-compatible object storage for file uploads
- **Background processing:** jobs/workflows backed by Redis/Valkey
- **AI:** provider abstraction in the application; Tallynest will add a provider-neutral boundary and may use OpenAI via `OPENAI_API_KEY`
- **Deployment:** Docker is part of the upstream self-hosting architecture; a web-only Vercel deployment must not be assumed sufficient.

## Licensing architecture

Tallynest has a hard source boundary:

`Tallynest Core` → AGPLv3 Tallynest Core + permitted third-party components

Enterprise functionality is **not** a source dependency:

`Tallynest` → optional external/licensed integration boundary

No Enterprise source is copied to make the core buildable.

## Database

PostgreSQL/Prisma is retained as the database foundation. Existing migrations and schema behavior should be preserved unless a change is required by an independently implemented Tallynest feature.

## Deployment

The default production architecture should assume:

1. Tallynest web application
2. PostgreSQL
3. Redis/Valkey
4. background job/runtime services where required
5. object storage for uploads where required
6. Cube analytics services where required by the retained analytics paths
7. optional external AI/integration services

Docker is the primary full-stack deployment target. A web-only platform is acceptable only after the retained runtime dependencies are verified.

## Enterprise replacement strategy

Enterprise-only capabilities are not reimplemented by copying EE source. Where a feature is desired, use one of:

- an independently authored Tallynest implementation;
- a documented API/service integration;
- a separately licensed third-party service.

## Security

Secrets must be provided through environment variables or the deployment secret manager. No API keys, database passwords, signing secrets, or OAuth client secrets belong in Git.
