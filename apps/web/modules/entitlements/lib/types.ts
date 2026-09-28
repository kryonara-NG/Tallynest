import type { TOrganizationStripeSubscriptionStatus } from "@formbricks/types/organizations";
import { CLOUD_STRIPE_FEATURE_LOOKUP_KEYS } from "@/modules/billing/lib/stripe-catalog";

export type TEntitlementSource = "core";
export type TKnownEntitlementFeature =
  (typeof CLOUD_STRIPE_FEATURE_LOOKUP_KEYS)[keyof typeof CLOUD_STRIPE_FEATURE_LOOKUP_KEYS];
export type TUsageLimitEntitlementFeature = `responses-${number}`;
export type TEntitlementFeature = TKnownEntitlementFeature | TUsageLimitEntitlementFeature;

const KNOWN_ENTITLEMENT_FEATURES = Object.values(CLOUD_STRIPE_FEATURE_LOOKUP_KEYS) as string[];

export const isEntitlementFeature = (feature: string): feature is TEntitlementFeature =>
  KNOWN_ENTITLEMENT_FEATURES.includes(feature) || /^responses-\d+$/.test(feature);

export type TEntitlementLimits = {
  workspaces: number | null;
  monthlyResponses: number | null;
  monthlyWorkflowRuns: number | null;
};

export type TOrganizationEntitlementsContext = {
  organizationId: string;
  source: TEntitlementSource;
  features: TEntitlementFeature[];
  limits: TEntitlementLimits;
  licenseActive: boolean;
  licenseStatus: "no-license" | "active";
  licenseFeatures: null;
  stripeCustomerId: string | null;
  subscriptionStatus: TOrganizationStripeSubscriptionStatus | null;
  usageCycleAnchor: Date | null;
};
