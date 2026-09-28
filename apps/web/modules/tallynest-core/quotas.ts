/**
 * Core quota boundary.
 *
 * Survey response handling remains available in Tallynest core. Enterprise quota
 * enforcement is deliberately not reproduced here; responses are processed without
 * Enterprise quota screening.
 */
export type TQuotaEvaluationResult = {
  quotaFull?: never;
  shouldEndSurvey: false;
  refreshedResponse?: never;
};

export const evaluateResponseQuotas = async (_input: unknown): Promise<TQuotaEvaluationResult> => ({
  shouldEndSurvey: false,
});

export const screenResponseQuotas = async (_input: unknown): Promise<null> => null;

export const reduceQuotaLimits = async (_quotaIds: string[], _tx: unknown): Promise<void> => {};

export const createQuotaFullObject = (_quotaFull: unknown): Record<string, never> => {};

export const getQuota = async (quotaId: string) => {
  const { prisma } = await import("@formbricks/database");
  return prisma.quota.findUniqueOrThrow({ where: { id: quotaId } });
};
