"use server";

import { auth } from "@/modules/auth/lib/auth";

export const resendVerificationEmailAction = async ({ email }: { email: string; callbackUrl?: string }) => {
  try {
    await auth.api.sendVerificationEmail({ body: { email, callbackURL: "/" } });
    return { data: true };
  } catch {
    return { serverError: "Unable to send verification email." };
  }
};
