import "server-only";
import { getOrganization } from "@/lib/organization/service";
import { getOrganizationWorkspacesLimit } from "@/modules/tallynest-core/entitlements";
import { CLOUD_STRIPE_FEATURE_LOOKUP_KEYS } from "@/modules/billing/lib/stripe-catalog";
import type { TEntitlementFeature, TOrganizationEntitlementsContext } from "./types";

const CORE_FEATURES: TEntitlementFeature[] = [
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.FOLLOW_UPS,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.CUSTOM_LINKS_IN_SURVEYS,
  CLOUD_STRIPE_FEATURE_LOOKUP_KEYS.CUSTOM_REDIRECT_URL,
];

export const getOrganizationEntitlementsContext = async (
  organizationId: string
): Promise<TOrganizationEntitlementsContext> => {
  const organization = await getOrganization(organizationId);
  if (!organization) throw new Error("Organization not found");

  return {
    organizationId,
    source: "core",
    features: CORE_FEATURES,
    limits: {
      workspaces: await getOrganizationWorkspacesLimit(organizationId),
      monthlyResponses: null,
      monthlyWorkflowRuns: null,
    },
    licenseActive: false,
    licenseStatus: "no-license",
    licenseFeatures: null,
    stripeCustomerId: organization.billing?.stripeCustomerId ?? null,
    subscriptionStatus: organization.billing?.stripe?.subscriptionStatus ?? null,
    usageCycleAnchor: organization.billing?.usageCycleAnchor ?? null,
  };
};
