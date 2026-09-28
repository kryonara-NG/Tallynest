"use client";

import { useTranslation } from "react-i18next";
import { TUser } from "@formbricks/types/user";

interface AccountSecurityProps {
  user: TUser;
}

/** Core security surface. Enterprise-only two-factor enrollment is intentionally excluded. */
export const AccountSecurity = ({ user: _user }: AccountSecurityProps) => {
  const { t } = useTranslation();
  return (
    <div className="text-sm text-slate-600">
      {t("workspace.settings.profile.two_factor_authentication_description")}
    </div>
  );
};
