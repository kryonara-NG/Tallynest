/**
 * Independently authored action wrapper for Tallynest core mutations.
 * Enterprise audit-event persistence is intentionally not included.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const withActivityContext = (
  _action: string,
  _targetType: string,
  handler: (args: any) => Promise<any>
): ((args: any) => Promise<any>) => handler;
/* eslint-enable @typescript-eslint/no-explicit-any */

export const queueAuditEvent = async (_event: unknown): Promise<void> => {};
export const queueAuditEventBackground = async (_event: unknown): Promise<void> => {};
export const withAuditLogging = withActivityContext;
export const queueAuditEventWithoutRequest = queueAuditEvent;
