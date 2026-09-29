# Tallynest Project Overview

## Current state
The repository is at the clean project bootstrap point. Application source has not yet been migrated.

## Target architecture
The intended architecture will be established after the Formbricks audit. It is expected to include, where justified, a web application, PostgreSQL, authorization, cache/queue infrastructure, object storage, background processing, external integration boundaries, observability, automated tests, and deployment configuration.

Do not treat this document as permission to copy an implementation. The licensing inventory is authoritative for source reuse.

## Architecture rule
Prefer clear boundaries around authentication, authorization, tenancy/workspaces, survey definition, survey runtime, responses, analytics, integrations, and external providers.

Provider-specific code should be replaceable without rewriting core product logic.
