export const TALLYNEST_TALLYNEST_UNKNOWN_DATA = "unknown";
export const TALLYNEST_UNKNOWN_DATA = TALLYNEST_TALLYNEST_UNKNOWN_DATA;
export type TTallynestAuditAction = string;
export type TTallynestAuditTarget = string;
export type TApiAuditLog = Record<string, unknown>;

export type TAuditAction = TTallynestAuditAction;
export type TAuditTarget = TTallynestAuditTarget;
export type TAuditStatus = "success"|"failure";
