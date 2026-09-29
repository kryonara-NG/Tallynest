import "server-only";
import { auditFailedAuthAfter } from "./better-auth-observability";
import { verificationAutoSignInAfterHandler } from "./better-auth-verification-autosignin";

export const runAfterAuthHooks = async (ctx: unknown): Promise<void> => {
  await auditFailedAuthAfter(ctx);
  await verificationAutoSignInAfterHandler(ctx);
};
