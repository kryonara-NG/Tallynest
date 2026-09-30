export const withActivityContext = <TArgs = any, TResult = any>(_action: string, _target: string, handler: (args: TArgs) => Promise<TResult>) => handler;
