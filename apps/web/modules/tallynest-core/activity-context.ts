export const withActivityContext = <TArgs, TResult>(_action: string, _target: string, handler: (args: TArgs) => Promise<TResult>) => handler;

export const withAuditLogging = withActivityContext;
export const queueAuditEvent = async (..._args: unknown[]): Promise<void> => {};
export const queueAuditEventWithoutRequest = async (..._args: unknown[]): Promise<void> => {};
