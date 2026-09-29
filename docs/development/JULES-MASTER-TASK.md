# Jules Master Task — Tallynest

Read AGENTS.md and JULES.md before doing anything.

You are authorized to operate the repository as the primary autonomous engineering agent.

Your mission is to take Tallynest from the clean bootstrap repository to a production-grade, documented, tested product.

## Phase 1 — Audit before migration

Inspect the current repository and the relevant Formbricks upstream repository.

Produce a complete inventory of:
- application routes and pages;
- components and shared UI;
- survey builder/editor;
- survey runtime;
- response collection;
- analytics;
- authentication;
- authorization;
- workspaces/organizations;
- database schema and migrations;
- API/server actions;
- integrations;
- email;
- storage;
- background jobs;
- cache;
- infrastructure;
- Docker;
- CI/CD;
- tests;
- third-party dependencies;
- Enterprise modules.

For every significant area determine:
REUSE, REIMPLEMENT, REPLACE, LICENSE, or OMIT.

Record evidence in the licensing and parity documents.

## Phase 2 — Migrate permitted foundation

Bring the permitted Formbricks core into Tallynest without incorporating restricted Enterprise source.

Make the project independently runnable.

The first end-to-end milestone is:

clone -> install -> configure environment -> start infrastructure -> start Tallynest -> sign up -> workspace -> create survey/form -> publish -> submit response -> inspect response.

## Phase 3 — Build in vertical slices

Do not create a huge untested migration dump.

Work in coherent vertical slices:
- database;
- auth;
- authorization/workspaces;
- survey model;
- editor;
- runtime;
- responses;
- analytics;
- integrations;
- supporting infrastructure.

After each slice:
implement -> test -> document -> commit -> push -> PR -> checks -> auto-merge -> verify.

## Phase 4 — Enterprise-equivalent functionality

For each Enterprise capability:
1. determine whether Tallynest actually needs it;
2. if needed, independently implement it;
3. otherwise evaluate a compatible open-source component;
4. if commercial rights are required, record the licensing decision;
5. never copy restricted Enterprise implementation merely to reach parity.

## Phase 5 — Learning system

For every major subsystem add documentation for a junior developer:
- what it does;
- where it starts;
- important files;
- data flow;
- how to change it;
- how to test it.

Use TALLYNEST LEARNING NOTE, TODO, and PLACEHOLDER comments only where they provide real teaching or maintenance value.

## Phase 6 — Rebrand and productization

Only after the core application is stable:
- replace product identity;
- replace logos/assets/favicon;
- update typography/colors where desired;
- update navigation and terminology;
- update metadata and emails;
- build Tallynest-owned onboarding;
- build Tallynest-owned marketing/public pages;
- implement product-specific behavior.

Do not treat upstream marketing copy or branding assets as automatically reusable.

## Phase 7 — Production readiness

Complete:
- security review;
- tenant-isolation tests;
- dependency audit;
- secret scanning;
- API/webhook security;
- rate limiting where required;
- backups and restore procedure;
- observability;
- CI;
- E2E tests;
- Docker/deployment validation;
- production environment documentation.

## Autonomous merge requirement

For every ready increment:
- publish the branch;
- create/update the PR;
- resolve CI failures;
- enable auto-merge;
- merge when repository policy and required checks permit it;
- verify the merge;
- continue.

Do not leave completed work stranded in an unmerged branch merely because the human has not manually pressed Merge.

Do not use auto-merge to bypass required approvals, branch protections, security checks, or licensing controls.

## Reporting

At the end of each merged increment, leave:
- concise commit message;
- concise PR summary;
- tests performed;
- documentation updated;
- licensing impact;
- remaining known limitations;
- next task.

Continue until the current milestone is genuinely complete.
