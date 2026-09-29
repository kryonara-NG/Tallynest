# Tallynest — Your First 30 Minutes

Welcome to Tallynest! This guide will get you from zero to running the full product locally in under 30 minutes.

## 1. Prerequisites
- Node.js 20+
- pnpm 10+
- PostgreSQL database (running locally or via Docker)

## 2. Quickstart Commands

```bash
# Install dependencies across monorepo
pnpm install

# Configure environment variables
cp .env.example .env

# Generate Prisma Client and push database schema
pnpm db:generate
pnpm db:push

# Start all applications in development mode
pnpm dev
```

The application will be running at `http://localhost:3000`.

## 3. First Manual Test Journey
1. Navigate to `http://localhost:3000/signup`.
2. Create an account. Tallynest automatically creates your primary Workspace.
3. On the Workspace dashboard, click **+ Create Survey**.
4. Enter a title and add questions in the editor.
5. Click **Publish Survey**.
6. Click **Public Link ↗** or open `http://localhost:3000/s/[surveyId]`.
7. Submit a response as an end-user.
8. Return to your dashboard and click **Responses** on the survey card to view the submitted payload!
