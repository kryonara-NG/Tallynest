"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { FORMBRICKS_LOGGED_IN_WITH_LS } from "@/lib/localStorage";
import { authClient } from "@/modules/auth/lib/auth-client";
import { getOAuthErrorVariant } from "@/modules/auth/lib/oauth-error";
import { Alert, AlertDescription, AlertTitle } from "@/modules/ui/components/alert";
import { Button } from "@/modules/ui/components/button";
import { FormControl, FormError, FormField, FormItem, FormLabel } from "@/modules/ui/components/form";
import { Input } from "@/modules/ui/components/input";
import { PasswordInput } from "@/modules/ui/components/password-input";

const ZLoginForm = z.object({
  email: z.email(),
  password: z.string().min(8).max(128),
});

type TLoginForm = z.infer<typeof ZLoginForm>;

interface LoginFormProps {
  emailAuthEnabled: boolean;
  publicSignUpEnabled: boolean;
  passwordResetEnabled: boolean;
  googleOAuthEnabled: boolean;
  githubOAuthEnabled: boolean;
  azureOAuthEnabled: boolean;
  oidcOAuthEnabled: boolean;
  oidcDisplayName?: string;
  isMultiOrgEnabled: boolean;
  isSsoEnabled: boolean;
  samlSsoEnabled: boolean;
  oauthError?: string;
  emailJustVerified?: boolean;
  prefilledEmail?: string;
  inviteToken?: string | null;
  resolvedCallbackPath: string;
  resolvedCallbackUrl: string;
}

/** Tallynest core login. Enterprise SSO and two-factor flows are outside the core boundary. */
export const LoginForm = ({
  emailAuthEnabled,
  publicSignUpEnabled,
  passwordResetEnabled,
  isMultiOrgEnabled,
  oauthError,
  emailJustVerified,
  prefilledEmail,
  inviteToken,
  resolvedCallbackPath,
  resolvedCallbackUrl,
}: Readonly<LoginFormProps>) => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const [showLogin, setShowLogin] = useState(false);
  const { t } = useTranslation();
  const oauthErrorVariant = getOAuthErrorVariant(oauthError);
  const signupHref = inviteToken ? `/auth/signup?inviteToken=${inviteToken}` : "/auth/signup";

  const oauthErrorAlert = oauthErrorVariant
    ? {
        title: t(`auth.login.oauth_${oauthErrorVariant}_title` as never),
        description: t(`auth.login.oauth_${oauthErrorVariant}_description` as never),
      }
    : null;

  const form = useForm<TLoginForm>({
    defaultValues: { email: prefilledEmail ?? "", password: "" },
    resolver: zodResolver(ZLoginForm),
  });

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(FORMBRICKS_LOGGED_IN_WITH_LS, "Email");
    }
    try {
      const { data: signInData, error } = await authClient.signIn.email({
        email: data.email.toLowerCase(),
        password: data.password,
        callbackURL: resolvedCallbackUrl,
      });
      if (error) {
        if (error.code === "EMAIL_NOT_VERIFIED") {
          toast.error(t("auth.login.please_verify_your_email_to_continue"));
          return;
        }
        toast.error(error.message ?? t("common.something_went_wrong"));
        return;
      }
      if (!signInData) {
        toast.error(t("common.something_went_wrong"));
        return;
      }
      router.push(resolvedCallbackPath || "/");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <FormProvider {...form}>
      <div className="text-center">
        <h1 className="mb-4 text-xl font-semibold text-balance text-slate-800">{t("auth.login.login_to_your_account")}</h1>
        {emailJustVerified && (
          <Alert variant="success" className="mb-4 text-left" role="status">
            <AlertTitle>{t("auth.login.email_verified_sign_in_title")}</AlertTitle>
            <AlertDescription>{t("auth.login.email_verified_sign_in_description")}</AlertDescription>
          </Alert>
        )}
        {oauthErrorAlert && (
          <Alert variant="error" className="mb-4 text-left" role="status">
            <AlertTitle>{oauthErrorAlert.title}</AlertTitle>
            <AlertDescription>{oauthErrorAlert.description}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {showLogin && (
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full text-left">
                    <FormLabel>{t("common.email")}</FormLabel>
                    <FormControl>
                      <Input ref={emailRef} type="email" autoComplete="email" required {...field} />
                    </FormControl>
                    <FormError role="alert" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full text-left">
                    <FormLabel>{t("common.password")}</FormLabel>
                    <FormControl>
                      <PasswordInput autoComplete="current-password" required {...field} />
                    </FormControl>
                    <FormError role="alert" />
                  </FormItem>
                )}
              />
              {passwordResetEnabled && (
                <div className="text-right">
                  <Link href="/auth/forgot-password" className="text-sm text-slate-500 underline">
                    {t("auth.login.forgot_your_password")}
                  </Link>
                </div>
              )}
            </div>
          )}
          {emailAuthEnabled && (
            <Button
              type={showLogin ? "submit" : "button"}
              onClick={
                showLogin
                  ? undefined
                  : () => {
                      setShowLogin(true);
                      setTimeout(() => emailRef.current?.focus(), 100);
                    }
              }
              className="h-11 w-full min-w-0 justify-center sm:h-9"
              loading={form.formState.isSubmitting}>
              {showLogin ? t("auth.login.login_with_email") : t("auth.login.login_with_email")}
            </Button>
          )}
        </form>
        {publicSignUpEnabled && isMultiOrgEnabled && (
          <div className="mt-9 text-center text-xs">
            <span className="leading-5 text-slate-500">{t("auth.login.new_to_formbricks")}</span>
            <br />
            <Link href={signupHref} className="font-semibold underline">
              {t("auth.login.create_an_account")}
            </Link>
          </div>
        )}
      </div>
    </FormProvider>
  );
};
