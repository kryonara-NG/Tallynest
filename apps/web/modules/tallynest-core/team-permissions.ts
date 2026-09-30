export type TTeamPermission = "read" | "readWrite" | "manage";

import { z } from "zod";
export const ZTeamPermission = z.enum(["read", "readWrite", "manage"]);
