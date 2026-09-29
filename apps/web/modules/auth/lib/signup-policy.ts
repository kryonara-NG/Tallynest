import "server-only";
import { APIError } from "better-auth/api";
import { SIGNUP_DISABLED_ERROR_CODE } from "@formbricks/types/errors";
import { SIGNUP_ENABLED } from "@/lib/constants";
import { getIsFreshInstance } from "@/lib/instance/service";

export type TUninvitedSignupAdmission = "open" | "fresh-instance" | "denied";

export const resolveUninvitedSignupAdmission = async (): Promise<TUninvitedSignupAdmission> => {
  if (SIGNUP_ENABLED) return "open";
  return (await getIsFreshInstance()) ? "fresh-instance" : "denied";
};

export const isUninvitedSignupAllowed = async (): Promise<boolean> =>
  (await resolveUninvitedSignupAdmission()) !== "denied";

export const signupDisabledError = (): APIError =>
  new APIError("FORBIDDEN", { message: "Signup is disabled on this instance.", code: SIGNUP_DISABLED_ERROR_CODE });

export const signupPolicyBeforeHandler = async (ctx: { path?: string }): Promise<void> => {
  if (ctx.path !== "/sign-up/email") return;
  if (await isUninvitedSignupAllowed()) return;
  throw signupDisabledError();
};
