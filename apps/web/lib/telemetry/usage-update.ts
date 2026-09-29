import { E2E_TESTING, IS_DEVELOPMENT, TELEMETRY_DISABLED } from "@/lib/constants";

/** Tallynest core never transmits Enterprise-license telemetry. */
export const sendTelemetryEvents = async (): Promise<void> => {
  if (E2E_TESTING || IS_DEVELOPMENT || TELEMETRY_DISABLED) return;
};
