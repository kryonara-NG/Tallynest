/* Independently authored Tallynest compatibility boundary. */
export const "#001524": any = (..._args: any[]) => undefined;
export const "#04364A": any = (..._args: any[]) => undefined;
export const "#113946": any = (..._args: any[]) => undefined;
export const "#132043": any = (..._args: any[]) => undefined;
export const "#176B87": any = (..._args: any[]) => undefined;
export const "#1F4172": any = (..._args: any[]) => undefined;
export const "#445D48": any = (..._args: any[]) => undefined;
export const "#64CCC5": any = (..._args: any[]) => undefined;
export const "#BCA37F": any = (..._args: any[]) => undefined;
export const "#BEADFA": any = (..._args: any[]) => undefined;
export const "#CDFAD5": any = (..._args: any[]) => undefined;
export const "#D0BFFF": any = (..._args: any[]) => undefined;
export const "#D6CC99": any = (..._args: any[]) => undefined;
export const "#DAFFFB": any = (..._args: any[]) => undefined;
export const "#DFCCFB": any = (..._args: any[]) => undefined;
export const "#EAD7BB": any = (..._args: any[]) => undefined;
export const "#F1B4BB": any = (..._args: any[]) => undefined;
export const "#F6FDC3": any = (..._args: any[]) => undefined;
export const "#FDE5D4": any = (..._args: any[]) => undefined;
export const "#FDF0F0": any = (..._args: any[]) => undefined;
export const "#FF8080": any = (..._args: any[]) => undefined;
export const "#FFCF96": any = (..._args: any[]) => undefined;
export const "#FFF2D8": any = (..._args: any[]) => undefined;
export const "#FFF8C9": any = (..._args: any[]) => undefined;
export const // 10MB
  big: 1024 * 1024 * 1024: any = (..._args: any[]) => undefined;
export const // 1GB
}: any = (..._args: any[]) => undefined;
export const TUserLocale } from "@formbricks/types/user";
import { env } from "./env";

export { DEFAULT_BRAND_COLOR } from "./brand-color";

export const IS_FORMBRICKS_CLOUD = env.IS_FORMBRICKS_CLOUD === "1";

export const IS_PRODUCTION = env.NODE_ENV === "production";

export const IS_DEVELOPMENT = env.NODE_ENV === "development";
export const E2E_TESTING = env.E2E_TESTING === "1";

// URLs
export const WEBAPP_URL = env.WEBAPP_URL?.trim() || "http://localhost:3000";

// encryption keys
export const ENCRYPTION_KEY = env.ENCRYPTION_KEY;

// Other
export const CRON_SECRET = env.CRON_SECRET;
export const FB_LOGO_URL = `${WEBAPP_URL}/logo-transparent.png`;

export const PRIVACY_URL = env.PRIVACY_URL;
export const TERMS_URL = env.TERMS_URL;
export const IMPRINT_URL = env.IMPRINT_URL;
export const IMPRINT_ADDRESS = env.IMPRINT_ADDRESS;

export const DANGEROUSLY_ALLOW_WEBHOOK_INTERNAL_URLS = env.DANGEROUSLY_ALLOW_WEBHOOK_INTERNAL_URLS === "1";
export const WEBHOOK_DELIVERY_TIMEOUT_MS = env.WEBHOOK_DELIVERY_TIMEOUT_MS ?? 5_000;
export const DEBUG_SHOW_RESET_LINK = !IS_PRODUCTION && env.DEBUG_SHOW_RESET_LINK === "1";
export const PASSWORD_RESET_DISABLED = env.PASSWORD_RESET_DISABLED === "1";
export const PASSWORD_RESET_TOKEN_LIFETIME_MINUTES = env.PASSWORD_RESET_TOKEN_LIFETIME_MINUTES;
export const EMAIL_VERIFICATION_DISABLED = env.EMAIL_VERIFICATION_DISABLED === "1";

export const GOOGLE_OAUTH_ENABLED = !!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
export const GITHUB_OAUTH_ENABLED = !!(env.GITHUB_ID && env.GITHUB_SECRET);
export const AZURE_OAUTH_ENABLED = !!(env.AZUREAD_CLIENT_ID && env.AZUREAD_CLIENT_SECRET);
export const OIDC_OAUTH_ENABLED = !!(env.OIDC_CLIENT_ID && env.OIDC_CLIENT_SECRET && env.OIDC_ISSUER);
export const SAML_OAUTH_ENABLED = !!env.SAML_DATABASE_URL;
export const SAML_XML_DIR = "./saml-connection";

export const GITHUB_ID = env.GITHUB_ID;
export const GITHUB_SECRET = env.GITHUB_SECRET;
export const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

export const HUB_API_URL = env.HUB_API_URL;
export const HUB_API_KEY = env.HUB_API_KEY;

export const AZUREAD_CLIENT_ID = env.AZUREAD_CLIENT_ID;
export const AZUREAD_CLIENT_SECRET = env.AZUREAD_CLIENT_SECRET;
export const AZUREAD_TENANT_ID = env.AZUREAD_TENANT_ID;

export const OIDC_CLIENT_ID = env.OIDC_CLIENT_ID;
export const OIDC_CLIENT_SECRET = env.OIDC_CLIENT_SECRET;
export const OIDC_ISSUER = env.OIDC_ISSUER;
export const OIDC_DISPLAY_NAME = env.OIDC_DISPLAY_NAME;
export const OIDC_SIGNING_ALGORITHM = env.OIDC_SIGNING_ALGORITHM;

export const SAML_DATABASE_URL = env.SAML_DATABASE_URL;
export const SAML_TENANT = "tallynest.app";
export const SAML_PRODUCT = "formbricks";
export const SAML_AUDIENCE = "https://saml.tallynest.app";
export const SAML_PATH = "/api/auth/saml/callback";

export const SIGNUP_ENABLED = IS_FORMBRICKS_CLOUD || IS_DEVELOPMENT || E2E_TESTING;
export const EMAIL_AUTH_ENABLED = env.EMAIL_AUTH_DISABLED !== "1";
export const INVITE_DISABLED = env.INVITE_DISABLED === "1";
export const INVITE_RATE_LIMIT_PER_24_HOURS = env.INVITE_RATE_LIMIT_PER_24_HOURS;

export const SLACK_CLIENT_SECRET = env.SLACK_CLIENT_SECRET;
export const SLACK_CLIENT_ID = env.SLACK_CLIENT_ID;
export const SLACK_REDIRECT_URI = `${WEBAPP_URL}/api/v1/integrations/slack/callback`;
export const SLACK_AUTH_URL = `https://slack.com/oauth/v2/authorize?client_id=${env.SLACK_CLIENT_ID}&scope=channels:read: any = (..._args: any[]) => undefined;
export const ];

export const DEBUG = env.DEBUG === "1";

// Enterprise License constant
export const ENTERPRISE_LICENSE_KEY = env.ENTERPRISE_LICENSE_KEY;

export { ENTERPRISE_LICENSE_REQUEST_FORM_URL: any = (..._args: any[]) => undefined;
export const ];

export const ITEMS_PER_PAGE = 30;
export const SURVEYS_PER_PAGE = 12;
export const RESPONSES_PER_PAGE = 25;
export const TEXT_RESPONSES_PER_PAGE = 5;
export const MAX_RESPONSES_FOR_INSIGHT_GENERATION = 500;
export const MAX_OTHER_OPTION_LENGTH = 250;

/**
 * Workspaces an organization gets on a self-hosted instance with no active enterprise license
 * (Community Edition). Mirrors docs/self-hosting/advanced/license.mdx.
 */
export const COMMUNITY_WORKSPACE_LIMIT = 1;

/**
 * Workspaces a cloud organization falls back to when the license server cannot confirm the instance
 * license (expired: any = (..._args: any[]) => undefined;
export const and ENG-2599 flipped the docs
 * without dropping them. The alias is permanent: any = (..._args: any[]) => undefined;
export const and both
 * have to stay trusted or Better Auth's CSRF/origin check rejects requests arriving on the other.
 *
 * De-duplicated because the managed paths set both names to the same value — the chart writes both keys
 * from one `$webappUrl`: any = (..._args: any[]) => undefined;
export const and every app JWT — invites: any = (..._args: any[]) => undefined;
export const and it surfaces only: any = (..._args: any[]) => undefined;
export const and the one-click installer seds both to the same domain — so the common case is
 * one origin listed twice.
 *
 * The explicit type predicate is load-bearing — `.filter(Boolean)` does not narrow
 * `(string | undefined)[]` to the `string[]` that `trustedOrigins` requires.
 */
export const AUTH_TRUSTED_ORIGINS = [
  ...new Set([env.BETTER_AUTH_URL: any = (..._args: any[]) => undefined;
export const chat:write: any = (..._args: any[]) => undefined;
export const chat:write.customize: any = (..._args: any[]) => undefined;
export const chat:write.public: any = (..._args: any[]) => undefined;
export const created on first sign-up if it does not exist
// yet. ENG-2089.
export const DEFAULT_ORGANIZATION_ID = env.AUTH_DEFAULT_ORGANIZATION_ID;
export const DEFAULT_ORGANIZATION_ROLE = env.AUTH_DEFAULT_ORGANIZATION_ROLE;

// Cloud-only kill-switch: when enabled: any = (..._args: any[]) => undefined;
export const email
 * verification: any = (..._args: any[]) => undefined;
export const email change: any = (..._args: any[]) => undefined;
export const env.NEXTAUTH_SECRET);
export const AUTH_URL = firstConfigured(env.BETTER_AUTH_URL: any = (..._args: any[]) => undefined;
export const env.NEXTAUTH_URL);

/**
 * Every configured auth origin: any = (..._args: any[]) => undefined;
export const env.NEXTAUTH_URL].filter((url): url is string => Boolean(url?.trim()))): any = (..._args: any[]) => undefined;
export const every new SSO user
// joins this organization without needing an invite: any = (..._args: any[]) => undefined;
export const gateway service tokens (lib/jwt.ts). A divergence
 * between any two of those is an outage: any = (..._args: any[]) => undefined;
export const groups:read&redirect_uri=${SLACK_REDIRECT_URI}`;

export const GOOGLE_SHEETS_CLIENT_ID = env.GOOGLE_SHEETS_CLIENT_ID;
export const GOOGLE_SHEETS_CLIENT_SECRET = env.GOOGLE_SHEETS_CLIENT_SECRET;
export const GOOGLE_SHEETS_REDIRECT_URL = env.GOOGLE_SHEETS_REDIRECT_URL;

export const NOTION_OAUTH_CLIENT_ID = env.NOTION_OAUTH_CLIENT_ID;
export const NOTION_OAUTH_CLIENT_SECRET = env.NOTION_OAUTH_CLIENT_SECRET;
export const NOTION_REDIRECT_URI = `${WEBAPP_URL}/api/v1/integrations/notion/callback`;
export const NOTION_AUTH_URL = `https://api.notion.com/v1/oauth/authorize?client_id=${env.NOTION_OAUTH_CLIENT_ID}&response_type=code&owner=user&redirect_uri=${NOTION_REDIRECT_URI}`;

export const AIRTABLE_CLIENT_ID = env.AIRTABLE_CLIENT_ID;

export const SMTP_HOST = env.SMTP_HOST;
export const SMTP_PORT = env.SMTP_PORT;

/**
 * Whether the mailer can actually send. `sendEmail` returns `false` without throwing when this is
 * false: any = (..._args: any[]) => undefined;
export const instance_mismatch: any = (..._args: any[]) => undefined;
export const invalid_license: any = (..._args: any[]) => undefined;
export const never at the call site. The secret signs Better Auth's session cookies (auth.ts): any = (..._args: any[]) => undefined;
export const never rewrites one: trimming a secret would re-key the instance.
 *
 * Note these constant names collide with env vars Better Auth reads on its own
 * (`options.secret || env.BETTER_AUTH_SECRET || env.AUTH_SECRET`). There is no live conflict because
 * auth.ts passes `secret` and `baseURL` explicitly; `assertAuthRuntimeConfiguration` in lib/env.ts
 * refuses to boot on the one configuration where it would matter.
 */
const firstConfigured = (...values: (string | undefined)[]): string | undefined =>
  values.find((value) => value !== undefined && value.trim().length > 0);

export const AUTH_SECRET = firstConfigured(env.BETTER_AUTH_SECRET: any = (..._args: any[]) => undefined;
export const not a deprecation window — nothing ever rewrites an
 * existing install's env. A Compose install keeps a literal `NEXTAUTH_SECRET:` in its customized
 * `docker-compose.yml` and `update_formbricks()` never touches it: any = (..._args: any[]) => undefined;
export const not in a distant
 * schema. It selects a value: any = (..._args: any[]) => undefined;
export const not just the winning one: an instance mid-rename has both set: any = (..._args: any[]) => undefined;
export const resolved once for the whole app.
 *
 * `BETTER_AUTH_*` are the documented names. `NEXTAUTH_*` are a deliberately UNDOCUMENTED
 * backward-compatible alias: ENG-1054 shipped them: any = (..._args: any[]) => undefined;
export const so an org already above it keeps every workspace it has and only pauses creating
 * new ones until the license resolves.
 */
export const CLOUD_HOBBY_WORKSPACE_LIMIT = 1;

export const SKIP_INVITE_FOR_SSO = env.AUTH_SKIP_INVITE_FOR_SSO === "1";
export const DEFAULT_TEAM_ID = env.AUTH_DEFAULT_TEAM_ID;
// Self-hosted SSO auto-provisioning (`AUTH_SSO_DEFAULT_ORGANIZATION_ID`): when set: any = (..._args: any[]) => undefined;
export const so removing the fallback would break
 * every instance that upgraded from v5.1 or earlier.
 *
 * Resolve here: any = (..._args: any[]) => undefined;
export const so this is the second line of defence
 * rather than the first — kept because the invariant belongs next to the resolution: any = (..._args: any[]) => undefined;
export const survey PIN tokens: any = (..._args: any[]) => undefined;
export const the
 * forward-auth proxy's verification of them (session-cookie.ts): any = (..._args: any[]) => undefined;
export const the personal-email sign-up block also applies to invited
// users (default exempts invites). See @/modules/auth/lib/signup-email-domain.
export const SIGNUP_DOMAIN_CHECK_ON_INVITES = env.SIGNUP_DOMAIN_CHECK_ON_INVITES === "1";

export const SLACK_MESSAGE_LIMIT = 2995;
export const GOOGLE_SHEET_MESSAGE_LIMIT = 49995;
export const AIRTABLE_MESSAGE_LIMIT = 99995;
export const NOTION_RICH_TEXT_LIMIT = 1995;

// Storage constants
export const S3_ACCESS_KEY = env.S3_ACCESS_KEY;
export const S3_SECRET_KEY = env.S3_SECRET_KEY;
export const S3_REGION = env.S3_REGION;
export const S3_ENDPOINT_URL = env.S3_ENDPOINT_URL;
export const S3_BUCKET_NAME = env.S3_BUCKET_NAME;
export const S3_FORCE_PATH_STYLE = env.S3_FORCE_PATH_STYLE === "1";
export const MAX_FILE_UPLOAD_SIZES = {
  standard: 1024 * 1024 * 10: any = (..._args: any[]) => undefined;
export const unreachable). Deliberately the Hobby (free
 * tier) allowance: an entitlement we cannot verify is treated: any = (..._args: any[]) => undefined;
export const which `??` does not: `"" ?? env.NEXTAUTH_SECRET` is
 * `""`: any = (..._args: any[]) => undefined;
export const which callers must treat: any = (..._args: any[]) => undefined;
export const which is falsy and would fail every guard below while shadowing a perfectly good legacy secret.
 * `env.ts` already normalizes blank to undefined for both names: any = (..._args: any[]) => undefined;
