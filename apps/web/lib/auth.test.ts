import { describe, it, expect } from "vitest";
import { hashPassword, verifyPassword } from "./auth";

describe("Authentication Utilities", () => {
  it("correctly hashes and verifies passwords", async () => {
    const password = "securepassword123";
    const hash = await hashPassword(password);

    expect(hash).not.toEqual(password);
    expect(await verifyPassword(password, hash)).toBe(true);
    expect(await verifyPassword("wrongpassword", hash)).toBe(false);
  });
});
