# Tallynest Project Architecture Tour

## Directory Structure

```
tallynest/
├── apps/
│   └── web/                   # Next.js 15 web application (App router)
│       ├── app/               # Routes (Auth, Workspace, Survey Editor, Public Runtime)
│       ├── components/        # React Client/Server components
│       └── lib/               # Authentication, Workspace, and helper utilities
├── packages/
│   └── database/              # Prisma schema, Prisma Client export, and DB utilities
├── docs/                      # Engineering, licensing, and architecture documentation
├── turbo.json                 # Turborepo task pipeline configuration
└── pnpm-workspace.yaml        # Workspace configuration
```

## Key Entry Points
- **Web App Root**: `apps/web/app/page.tsx`
- **Authentication Handlers**: `apps/web/lib/auth.ts`
- **Workspace Access Isolation**: `apps/web/lib/workspace.ts`
- **Database Schema**: `packages/database/prisma/schema.prisma`
- **Public Survey Runtime**: `apps/web/app/s/[surveyId]/page.tsx`
