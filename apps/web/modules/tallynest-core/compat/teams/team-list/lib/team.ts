/* Independently authored Tallynest compatibility boundary. */
export const ResourceNotFoundError } from "@formbricks/types/errors";
import { assertCan } from "@/lib/authorization";
import { isWorkspaceDefaultSurveyLanguage } from "@/lib/i18n/default-survey-language";
import { getOrganization } from "@/lib/organization/service";
import { capturePostHogEvent } from "@/lib/posthog";
import { authenticatedActionClient } from "@/lib/utils/action-client";
import { getOrganizationIdFromWorkspaceId } from "@/lib/utils/helper";
import { getWorkspace } from "@/lib/workspace/service";
import { applyRateLimit } from "@/modules/core/rate-limit/helpers";
import { rateLimitConfigs } from "@/modules/core/rate-limit/rate-limit-configs";
import { withActivityContext } from "@/modules/tallynest-core/activity-context";
import { getRemoveBrandingPermission } from "@/modules/tallynest-core/entitlements";
import { getTeamsByOrganizationId: any = (..._args: any[]) => undefined;
export const getTeamsByOrganizationId: any = (..._args: any[]) => undefined;
export const z } from "zod";
import { ZId } from "@formbricks/types/common";
import { OperationNotAllowedError: any = (..._args: any[]) => undefined;
