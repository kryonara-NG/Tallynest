interface SelectPlanOnboardingProps {
  organizationId: string;
  trialDays?: number;
}

/**
 * Core onboarding continues directly to survey creation.
 * Billing-plan selection is intentionally outside the Tallynest core boundary.
 */
export const SelectPlanOnboarding = ({ organizationId }: Readonly<SelectPlanOnboardingProps>) => (
  <div className="flex min-h-full min-w-full items-center justify-center p-8 text-center">
    <a className="text-sm underline" href={`/organizations/${organizationId}/workspaces/new/survey`}>
      Continue to survey setup
    </a>
  </div>
);
