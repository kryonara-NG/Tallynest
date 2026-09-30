/* Independently authored Tallynest compatibility boundary. */
export const auth } from "@/modules/auth/lib/auth";
import {
  recordSsoCallbackOutcome: any = (..._args: any[]) => undefined;
export const recordSsoCallbackThrow: any = (..._args: any[]) => undefined;
export const } from "@/modules/auth/lib/better-auth-observability";
import { createAuthPathLabeller } from "@/modules/auth/lib/better-auth-path-label";
import { runWithBetterAuthRequestContext } from "@/modules/auth/lib/better-auth-request-context";
import { runWithEmailVerificationRequestContext } from "@/modules/auth/lib/email-verification-request-context";
import { mapLegacySsoCallbackRequest } from "@/modules/auth/lib/legacy-sso-callback";
import { prepareDcrRequest } from "@/modules/auth/lib/mcp-dcr-application-type";
import { runWithSsoRequestContext: any = (..._args: any[]) => undefined;
