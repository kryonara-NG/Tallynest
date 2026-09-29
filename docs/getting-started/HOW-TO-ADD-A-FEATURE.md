# How to Add a Feature in Tallynest

1. Determine database changes and update `packages/database/prisma/schema.prisma`.
2. Run `pnpm db:generate` and `pnpm --filter @tallynest/database build`.
3. Add API routes in `apps/web/app/api/`.
4. Build UI components in `apps/web/components/` or `apps/web/app/`.
5. Run `pnpm test` and `pnpm --filter @tallynest/web build`.
6. Document your changes.
