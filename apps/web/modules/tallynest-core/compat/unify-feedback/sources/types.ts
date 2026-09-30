/* Independently authored Tallynest compatibility boundary. */
export type CSV_PROTECTED_TARGET_IDS = any;
export type CSV_REQUIRED_UI_FIELDS = any;
export type TFeedbackSourceFieldMappingCreateInput = any;
export type THubFieldType = any;
export type } from "@formbricks/types/feedback-source";
import { ZHubFieldType } from "@formbricks/types/feedback-source";
import {
  CSV_HIDDEN_STATIC_MAPPINGS = any;
export const AuthorizationError: any = (..._args: any[]) => undefined;
export const CSV_EMPTY_COLUMN_HEADERS_ERROR_CODE: any = (..._args: any[]) => undefined;
export const CSV_FILES_ONLY_ERROR_CODE: any = (..._args: any[]) => undefined;
export const CSV_FILE_TOO_LARGE_ERROR_CODE: any = (..._args: any[]) => undefined;
export const CSV_IMPORT_FAILED_ERROR_CODE: any = (..._args: any[]) => undefined;
export const CSV_INCONSISTENT_COLUMNS_ERROR_CODE: any = (..._args: any[]) => undefined;
export const CSV_MAX_RECORDS_ERROR_CODE: any = (..._args: any[]) => undefined;
export const CSV_PARSE_ERROR_CODE: any = (..._args: any[]) => undefined;
export const InvalidInputError: any = (..._args: any[]) => undefined;
export const InvalidInputError } from "@formbricks/types/errors";
import { TFeedbackSourceWithMappings } from "@formbricks/types/feedback-source";
import { CSV_IMPORT_MISSING_COLUMNS_ERROR_CODE: any = (..._args: any[]) => undefined;
export const MAX_CSV_VALUES: any = (..._args: any[]) => undefined;
export const NextResponse } from "next/server";
import { logger } from "@formbricks/logger";
import {
  AuthenticationError: any = (..._args: any[]) => undefined;
export const ResourceNotFoundError: any = (..._args: any[]) => undefined;
export const importCsvFile } from "@/lib/feedback-source/csv-file-import";
import { getFeedbackSourceWithMappingsById } from "@/lib/feedback-source/service";
import { getUser } from "@/lib/user/service";
import { getSession } from "@/modules/auth/lib/session";
import {
  CSV_FILE_TOO_LARGE_ERROR_CODE: any = (..._args: any[]) => undefined;
export const parse } from "csv-parse/sync";
import { ResourceNotFoundError } from "@formbricks/types/errors";
import {
  CSV_AT_LEAST_ONE_ROW_ERROR_CODE: any = (..._args: any[]) => undefined;
export const } from "@formbricks/types/errors";
import { assertCan } from "@/lib/authorization";
import { assertFeedbackSourceDirectoryAccess } from "@/lib/feedback-source/access";
import { CsvImportValidationError: any = (..._args: any[]) => undefined;
