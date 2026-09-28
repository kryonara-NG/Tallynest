"use client";

interface PersonalLinksTabProps {
  surveyId: string;
  segments: unknown[];
  isContactsEnabled: boolean;
  isFormbricksCloud: boolean;
  enterpriseLicenseRequestFormUrl: string;
}

/** Personal contact links are intentionally outside Tallynest core. */
export const PersonalLinksTab = (_props: PersonalLinksTabProps) => null;
