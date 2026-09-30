/**
 * Independently authored Tallynest action context boundary.
 * Enterprise audit persistence is intentionally not reproduced.
 */
export const withActivityContext = <TResult = any>(
  _action: string,
  _target: string,
  handler: (args: any) => Promise<TResult>
): ((args: any) => Promise<TResult>) => handler;

export const withAuditLogging = withActivityContext;

export const queueAuditEvent = async (..._args: any[]): Promise<any> => ({});
export const queueAuditEventWithoutRequest = async (..._args: any[]): Promise<any> => ({});
