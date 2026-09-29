import { logger } from "@formbricks/logger";

export const betterAuthLogger = logger;
export const signInAuditDatabaseHook = { create: { after: async () => {} } };
export const auditPasswordReset = async (_ctx: unknown) => {};
export const auditFailedAuthAfter = async (_ctx: unknown) => {};
