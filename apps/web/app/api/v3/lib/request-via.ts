import type { TV3Authentication } from "./types";
export type TV3RequestVia = "ui" | "api";
export const resolveV3RequestVia = (authentication: TV3Authentication, _instance: string): TV3RequestVia =>
  authentication && "apiKeyId" in authentication ? "api" : "ui";
