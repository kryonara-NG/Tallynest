import "server-only";
import { logger } from "@formbricks/logger";
import { queueAuditEventBackground } from "@/modules/tallynest-core/activity-context";
import { TALLYNEST_UNKNOWN_DATA } from "@/modules/tallynest-core/api-audit";

export const queueAccountDeletionAuditEvent = async ({
  eventId,
  oldUser,
  status,
  targetUserId,
  userId = targetUserId,
}: {
  eventId?: string;
  oldUser?: Record<string, unknown> | null;
  status: "success" | "failure";
  targetUserId: string;
  userId?: string;
}) => {
  try {
    await queueAuditEventBackground({
      action: "deleted",
      targetType: "user",
      userId,
      userType: "user",
      targetId: targetUserId,
      organizationId: TALLYNEST_UNKNOWN_DATA,
      oldObject: oldUser,
      status,
      ...(eventId ? { eventId } : {}),
    });
  } catch (error) {
    logger.error({ error, targetUserId, userId }, "Failed to queue account deletion audit event");
  }
};
