import type { BetterAuthOptions } from "better-auth";
export const betterAuthLogger: NonNullable<BetterAuthOptions["logger"]> = {
  level: "warn",
  disableColors: true,
  log: (_level, _message, ..._args) => {},
};
export const signInAuditDatabaseHook = { create: { after: async () => {} } };
export const auditPasswordReset = async (_ctx: unknown) => {};
export const auditFailedAuthAfter = async (_ctx: unknown) => {};
