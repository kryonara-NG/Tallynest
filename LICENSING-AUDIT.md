# Tallynest Licensing Audit

**Upstream audited:** https://github.com/formbricks/formbricks  
**Audit date:** 2026-09-28  
**Audited branch:** `main`  
**Purpose:** determine what may be copied into Tallynest without relying on Formbricks Enterprise licensing.

> This is a technical license audit, not legal advice. Any component whose licensing cannot be established from authoritative project files is marked **REQUIRES LEGAL REVIEW**.

| Component | Location | License | Can copy? | Can modify? | Can redistribute? | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Formbricks Core | Repository content outside explicitly carved-out components | AGPLv3 per upstream root LICENSE | Yes | Yes | Yes, subject to AGPLv3 | Preserve notices; modified network versions must satisfy AGPL source/notice obligations. |
| Formbricks Enterprise Edition | `apps/web/modules/ee/**` | Formbricks Enterprise License | **No** | **No** | **No** | Explicitly excluded from Tallynest. No Enterprise License Key or license mechanism is being copied. |
| Formbricks JS SDK | `packages/js/**` where present | MIT per upstream root LICENSE | Yes | Yes | Yes | Preserve MIT copyright/permission notice. |
| Formbricks Android SDK | `packages/android/**` where present | MIT per upstream root LICENSE | Yes | Yes | Yes | Preserve MIT notice. |
| Formbricks iOS SDK | `packages/ios/**` where present | MIT per upstream root LICENSE | Yes | Yes | Yes | Preserve MIT notice. |
| Formbricks API package | `packages/api/**` where present | MIT per upstream root LICENSE | Yes | Yes | Yes | Preserve MIT notice. |
| Third-party components | Throughout repository | Original component license | Only after license verification | Depends | Depends | Tallynest must preserve applicable notices and license texts. |
| SpiceDB operator chart | `charts/spicedb-operator/**` | Apache-2.0 (contains its own LICENSE) | Yes | Yes | Yes | Preserve Apache-2.0 notice and upstream attribution. |
| Other nested license-bearing assets | Any nested LICENSE/NOTICE or vendored source discovered during import | Component-specific | Case-by-case | Case-by-case | Case-by-case | **REQUIRES LEGAL REVIEW** if the authoritative license cannot be established. |
| Fonts/images/icons/vendor archives | Assets and generated/vendor directories | Component-specific / unknown until verified | **REQUIRES LEGAL REVIEW** if unverified | Depends | Depends | Do not assume repository-wide AGPL covers third-party assets. |

## Enterprise boundary

The upstream repository states that the Enterprise Edition is under a separate Enterprise License and that its code is in `apps/web/modules/ee`. Tallynest therefore removes that directory rather than copying it and does not reproduce its license-check implementation.

The current upstream application also contains AGPL-side references to Enterprise entitlement/license modules. Those references are **not permission to copy EE code**. They are treated as integration seams that must be replaced with independently implemented Tallynest behavior or removed when the associated Enterprise feature is unavailable.

## Package/dependency audit

Dependency licenses are not inferred from package names. The bootstrap/CI process should regenerate a dependency license inventory from the resolved lockfile and package metadata, and any package with a missing or incompatible license should be marked **REQUIRES LEGAL REVIEW** before release.

## Source provenance

Tallynest is created from a fresh source checkout rather than a GitHub fork or imported Git history. The imported upstream commit SHA is recorded in `.tallynest-source.txt` during bootstrap.
