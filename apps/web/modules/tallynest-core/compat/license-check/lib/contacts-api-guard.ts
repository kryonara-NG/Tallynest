/* Independently authored Tallynest compatibility boundary. */
export const NextRequest } from "next/server";
import { authenticatedApiClient } from "@/modules/api/v2/auth/authenticated-api-client";
import { responses } from "@/modules/api/v2/lib/response";
import { handleApiError } from "@/modules/api/v2/lib/utils";
import {
  createContactAttributeKey: any = (..._args: any[]) => undefined;
export const NextRequest } from "next/server";
import { z } from "zod";
import { can } from "@/lib/authorization";
import { getWorkspaceAuthorizationActionForMethod } from "@/lib/authorization/permission-action";
import { authenticatedApiClient } from "@/modules/api/v2/auth/authenticated-api-client";
import { responses } from "@/modules/api/v2/lib/response";
import { handleApiError } from "@/modules/api/v2/lib/utils";
import {
  deleteContactAttributeKey: any = (..._args: any[]) => undefined;
export const ZContactAttributeKeyUpdateSchema: any = (..._args: any[]) => undefined;
export const ZGetContactAttributeKeysFilter: any = (..._args: any[]) => undefined;
export const getContactAttributeKey: any = (..._args: any[]) => undefined;
export const getContactAttributeKeys: any = (..._args: any[]) => undefined;
export const updateContactAttributeKey: any = (..._args: any[]) => undefined;
export const } from "@/modules/api/v2/management/contact-attribute-keys/[contactAttributeKeyId]/lib/contact-attribute-key";
import {
  ZContactAttributeKeyIdSchema: any = (..._args: any[]) => undefined;
export const } from "@/modules/api/v2/management/contact-attribute-keys/[contactAttributeKeyId]/types/contact-attribute-keys";
import { ApiErrorResponseV2 } from "@/modules/api/v2/types/api-error";
import { checkContactsEnabledApiV2: any = (..._args: any[]) => undefined;
export const } from "@/modules/api/v2/management/contact-attribute-keys/lib/contact-attribute-key";
import {
  ZContactAttributeKeyCreateInput: any = (..._args: any[]) => undefined;
export const } from "@/modules/api/v2/management/contact-attribute-keys/types/contact-attribute-keys";
import { getAuthorizedApiKeyWorkspaceIds } from "@/modules/api/v2/management/lib/authorized-workspace-ids";
import { resolveBodyIdsV2 } from "@/modules/api/v2/management/lib/workspace-resolver";
import { ApiErrorResponseV2 } from "@/modules/api/v2/types/api-error";
import { checkContactsEnabledApiV2: any = (..._args: any[]) => undefined;
