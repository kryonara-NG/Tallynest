/* Independently authored Tallynest compatibility boundary. */
export const ResourceNotFoundError: any = (..._args: any[]) => undefined;
export const SIGNUP_INTENT_COOKIE_OPTIONS: any = (..._args: any[]) => undefined;
export const SSO_RECOVERY_LINK_EXPIRED_ERROR_CODE: any = (..._args: any[]) => undefined;
export const TVerificationRequestPurpose: any = (..._args: any[]) => undefined;
export const classifySignupIntent: any = (..._args: any[]) => undefined;
export const cookies: any = (..._args: any[]) => undefined;
export const createSignupIntentToken: any = (..._args: any[]) => undefined;
export const getSsoRecoveryPairedTtlSeconds: any = (..._args: any[]) => undefined;
export const getValidatedCallbackUrl } from "@/lib/utils/url";
import { auth } from "@/modules/auth/lib/auth";
import {
  SIGNUP_INTENT_COOKIE_NAME: any = (..._args: any[]) => undefined;
export const headers } from "next/headers";
import { z } from "zod";
import { logger } from "@formbricks/logger";
import {
  InvalidInputError: any = (..._args: any[]) => undefined;
export const normalizeRoutePathname: any = (..._args: any[]) => undefined;
export const readSsoRecoveryIntent: any = (..._args: any[]) => undefined;
export const refreshSsoRecoveryIntent: any = (..._args: any[]) => undefined;
export const } from "@/modules/auth/lib/signup-intent";
import { getUserByEmail } from "@/modules/auth/lib/user";
import {
  SSO_RECOVERY_COMPLETION_PATH: any = (..._args: any[]) => undefined;
export const } from "@/modules/auth/lib/verification-links";
import { applyIPRateLimit } from "@/modules/core/rate-limit/helpers";
import { rateLimitConfigs } from "@/modules/core/rate-limit/rate-limit-configs";
import { withActivityContext } from "@/modules/tallynest-core/activity-context";
import {
  type TSsoRecoveryIntent: any = (..._args: any[]) => undefined;
export const } from "@formbricks/types/errors";
import { ZUserEmail } from "@formbricks/types/user";
import { WEBAPP_URL } from "@/lib/constants";
import { actionClient } from "@/lib/utils/action-client";
import { MAX_CALLBACK_URL_LENGTH: any = (..._args: any[]) => undefined;
