export const TALLYNEST_UNKNOWN_DATA = "unknown";
export type TTallynestAuditAction = string;
export type TTallynestAuditTarget = string;
export type TApiAuditLog = Record<string, unknown>;

export type TAuditAction = TTallynestAuditAction;
export type TAuditTarget = TTallynestAuditTarget;
export type TAuditStatus = "success" | "failure";
