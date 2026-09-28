import "server-only";

/**
 * Tallynest core feature boundary.
 *
 * This module is independently authored and intentionally does not implement or
 * reproduce Formbricks Enterprise licensing or Enterprise source code.
 * Enterprise-only capabilities remain unavailable unless independently implemented
 * from first principles under a compatible license.
 */

const envTrue = (value: string | undefined): boolean => value === "true" || value === "1";

export const getIsAISmartToolsEnabled = async (_organizationId?: string): Promise<boolean> =>
  Boolean(process.env.OPENAI_API_KEY || process.env.AI_OPENAI_COMPATIBLE_API_KEY);

export const getAccessControlPermission = async (_organizationId?: string): Promise<boolean> => false;
export const getIsMultiOrgEnabled = async (): Promise<boolean> => false;
export const getIsTwoFactorAuthEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getWhiteLabelPermission = async (_organizationId?: string): Promise<boolean> => false;
export const getIsContactsEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getIsQuotasEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getIsFeedbackDirectoriesEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getBiggerUploadFileSizePermission = async (_organizationId?: string): Promise<boolean> => false;
export const getIsSpamProtectionEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getIsWorkflowsEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getBulkInvitePermission = async (_organizationId?: string): Promise<boolean> => false;
export const getIsSamlSsoEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getIsSsoEnabled = async (_organizationId?: string): Promise<boolean> => false;
export const getRemoveBrandingPermission = async (_organizationId?: string): Promise<boolean> => false;

export const getOrganizationWorkspacesLimit = async (_organizationId?: string): Promise<number> =>
  Number(process.env.TALLYNEST_MAX_WORKSPACES_PER_ORGANIZATION ?? 1);

export const isTallynestCloud = (): boolean => envTrue(process.env.TALLYNEST_CLOUD);

export type TTallynestLicenseFeatures = {
  workspaces: number;
  removeBranding: false;
  whitelabel: false;
  accessControl: false;
  quotas: false;
  spamProtection: false;
  contacts: false;
  aiSmartTools: boolean;
  feedbackDirectories: false;
  dashboards: false;
  workflows: false;
  twoFactorAuth: false;
  isMultiOrgEnabled: false;
};

export const getEnterpriseLicense = async () => ({
  active: false,
  status: "no-license" as const,
  features: {
    workspaces: await getOrganizationWorkspacesLimit(),
    removeBranding: false as const,
    whitelabel: false as const,
    accessControl: false as const,
    quotas: false as const,
    spamProtection: false as const,
    contacts: false as const,
    aiSmartTools: Boolean(process.env.OPENAI_API_KEY || process.env.AI_OPENAI_COMPATIBLE_API_KEY),
    feedbackDirectories: false as const,
    dashboards: false as const,
    workflows: false as const,
    twoFactorAuth: false as const,
    isMultiOrgEnabled: false as const,
  },
});

export const getPendingDowngradeSchedule = async (_organizationId?: string) => null;
