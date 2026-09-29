import type { Prisma } from "@formbricks/database/prisma";
import { InvalidInputError } from "@formbricks/types/errors";

export const V3_CONTACTS_NOT_ENABLED_MESSAGE = "Contact targeting is not available in Tallynest core.";

export const resolveV3ContactsEntitlement = async (workspaceId: string, organizationId?: string): Promise<{ resolvedOrganizationId: string | null; isContactsEnabled: boolean }> => ({ resolvedOrganizationId: organizationId ?? null, isContactsEnabled: false });

export const assertV3SurveyTargetingFilterReferences = async (
  _workspaceId: string,
  filters: unknown[]
): Promise<void> => {
  if (filters.length > 0) throw new InvalidInputError(V3_CONTACTS_NOT_ENABLED_MESSAGE);
};

export const assertV3SurveyTargetingWritePermission = async (
  _workspaceId: string,
  filters: unknown[]
): Promise<void> => {
  if (filters.length > 0) throw new InvalidInputError(V3_CONTACTS_NOT_ENABLED_MESSAGE);
};

export const areV3SurveyTargetingFiltersEqual = (a: unknown, b: unknown): boolean =>
  JSON.stringify(a ?? []) === JSON.stringify(b ?? []);

export const setV3SurveySegmentFilters = async (
  _segmentId: string,
  _filters: unknown,
  _tx: Prisma.TransactionClient
): Promise<void> => {};
