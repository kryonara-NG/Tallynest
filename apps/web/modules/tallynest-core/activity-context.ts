export const withActivityContext = <TArgs, TResult>(_action: string, _target: string, handler: (args: TArgs) => Promise<TResult>) => handler;
