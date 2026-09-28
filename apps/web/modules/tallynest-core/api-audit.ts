/**
 * Minimal API activity types for the Tallynest core boundary.
 * These types are intentionally independent of Formbricks Enterprise audit-log code.
 */
export type TTallynestAuditAction = string;
export type TTallynestAuditTarget = string;
export type TallynestAuditStatus = "success" | "failure";
export const TALLYNEST_UNKNOWN_DATA = "unknown";

export type TApiAuditLog = {
  action: TTallynestAuditAction;
  targetType: TTallynestAuditTarget;
  userId: string;
  targetId: string;
  organizationId: string;
  status: "success" | "failure";
  oldObject?: Record<string, unknown>;
  newObject?: Record<string, unknown>;
  userType: "api" | "user";
  apiUrl: string;
  eventId?: string;
};

export type TAuditStatus = TallynestAuditStatus;
export const UNKNOWN_DATA = TALLYNEST_UNKNOWN_DATA;

export type TAuditAction = TTallynestAuditAction;
export type TAuditTarget = TTallynestAuditTarget;
