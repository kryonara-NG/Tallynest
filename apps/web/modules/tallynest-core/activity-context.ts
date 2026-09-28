/**
 * Independently authored action wrapper used by Tallynest core.
 *
 * Enterprise audit-log persistence is intentionally not reproduced here.
 * The wrapper preserves the action-client execution contract so core mutations
 * continue to run normally without depending on Enterprise source.
 */
export const withActivityContext = <TArgs, TResult>(
  _action: string,
  _targetType: string,
  handler: (args: TArgs) => Promise<TResult>
): ((args: TArgs) => Promise<TResult>) => handler;
