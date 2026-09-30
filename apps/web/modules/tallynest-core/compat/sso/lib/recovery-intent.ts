/* Independently authored Tallynest compatibility boundary. */
export type TSsoRecoveryIntent = { token?: string; userId?: string };
export const getSsoRecoveryPairedTtlSeconds = async (..._args: any[]) => 0;
export const readSsoRecoveryIntent = async (..._args: any[]): Promise<TSsoRecoveryIntent | null> => null;
export const refreshSsoRecoveryIntent = async (..._args: any[]): Promise<TSsoRecoveryIntent | null> => null;
