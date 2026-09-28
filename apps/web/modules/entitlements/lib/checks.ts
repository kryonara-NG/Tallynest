import "server-only";
import { CLOUD_STRIPE_FEATURE_LOOKUP_KEYS } from "@/modules/billing/lib/stripe-catalog";
import { getIsAISmartToolsEnabled } from "@/modules/tallynest-core/entitlements";
import { getOrganizationEntitlementsContext } from "./provider";
import { type TEntitlementFeature, isEntitlementFeature } from "./types";

const ENTERPRISE_ONLY = new Set<string>([
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.HIDE_BRANDING,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.QUOTA_MANAGEMENT,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.RBAC,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.SPAM_PROTECTION,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.CONTACTS,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.FEEDBACK_DIRECTORIES,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.DASHBOARDS,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.WORKFLOWS,
]);

export const hasOrganizationEntitlement = async (
  organizationId: string,
  featureLookupKey: string
): Promise<boolean> => {
  if (!isEntitlementFeature(featureLookupKey)) return false;
  if (featureLookupKey === CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.AI_SMART_TOOLS) {
    return getIsAISmartToolsEnabled(organizationId);
  }
  if (ENTERPRISE_ONLY.has(featureLookupKey)) return false;
  const context = await getOrganizationEntitlementsContext(organizationId);
  return context.features.includes(featureLookupKey as TEntitlementFeature);
};

export const hasOrganizationEntitlementWithLicenseGuard = hasOrganizationEntitlement;

export const getOrganizationEntitlementLimits = async (organizationId: string) => {
  const context = await getOrganizationEntitlementsContext(organizationId);
  return context.limits;
};
