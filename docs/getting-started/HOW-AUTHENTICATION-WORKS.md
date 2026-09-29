# How Authentication Works in Tallynest

// TALLYNEST LEARNING NOTE:
// Tallynest uses secure session cookies with HTTP-Only flags and bcrypt password hashing.

1. Password hashing handled by `bcryptjs`.
2. Session token created with crypto and saved to `Session` table.
3. Cookie `tallynest_session` attached to response.
4. `getCurrentUser()` reads session cookie and retrieves user + workspace memberships.
