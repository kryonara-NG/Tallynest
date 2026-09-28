import type { BetterAuthOptions } from "better-auth";

export type AuthHookContext = Parameters<NonNullable<NonNullable<BetterAuthOptions["hooks"]>["before"]>>[0];
