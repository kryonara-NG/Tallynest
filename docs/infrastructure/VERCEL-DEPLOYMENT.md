# Tallynest — Vercel Deployment

This document describes the supported deployment shape for the current Tallynest Next.js application.

## Deployment target

- Frontend/application: Vercel
- Database: managed PostgreSQL
- Prisma migrations/schema changes: run through a controlled deployment workflow
- Secrets: Vercel Environment Variables
- Optional object storage, email, queues, analytics, and authorization services remain external providers.

The repository includes a root `vercel.json` so Vercel can build the workspace consistently from the monorepo root.

## Required environment variables

At minimum:

- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `WEBAPP_URL`

Set production values in Vercel. Never commit production secrets.

## Vercel project settings

Create one Vercel project connected to this repository.

Recommended settings:

- Framework: Next.js
- Root Directory: repository root
- Install Command: use the repository `vercel.json`
- Build Command: use the repository `vercel.json`
- Node.js: 20.x or the version declared by the repository toolchain

## Database

The current application uses Prisma. A production PostgreSQL database must be reachable through `DATABASE_URL`.

Do not use `prisma db push` as a production migration strategy once migrations are introduced. Use reviewed Prisma migrations and run them from a controlled deployment step.

## Preview deployments

Preview deployments should use a non-production database or isolated database branch where possible.

Do not point every preview environment at the production database.

## Current limitations

Vercel deployment readiness does not mean the complete Formbricks feature set is finished. The current merged milestone is the first working vertical slice. Additional core UI, survey capabilities, integrations, analytics, storage, jobs, SDK functionality, and Tallynest-owned Enterprise-equivalent features remain on the product roadmap.

This document should be updated as those subsystems become production-ready.
