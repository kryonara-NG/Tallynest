# Tallynest

Tallynest is an independently maintained survey and feedback platform built from the legally reusable Tallynest Core under the GNU Affero General Public License v3 (AGPLv3).

This repository is **not a GitHub fork** of Tallynest and does not import Tallynest commit history.

## Licensing boundary

- Tallynest Core source outside `apps/web/modules/ee` is treated according to the upstream repository's stated AGPLv3 terms.
- `apps/web/modules/ee` is excluded from Tallynest unless a separate written license explicitly permits the intended redistribution and modification.
- Third-party components retain their original licenses and notices.
- Tallynest modifications to AGPL-covered code are released under AGPLv3.

See `LICENSING-AUDIT.md`, `THIRD-PARTY-NOTICES.md`, and `CHANGES.md`.

## Status

Bootstrap in progress. The repository is being populated from a clean, shallow upstream checkout with the Enterprise Edition excluded and no upstream Git history imported.

## AI boundary

Future Tallynest AI features will use provider-neutral interfaces. Provider credentials are supplied through environment variables such as `OPENAI_API_KEY`; no credentials are committed.
