export type SSOOptions = null;
export const runWithSsoRequestContext = async <T>(handler: () => Promise<T>): Promise<T> => handler();
export const createRecoveryIntent = async () => null;
export const consumeRecoveryIntent = async () => null;
