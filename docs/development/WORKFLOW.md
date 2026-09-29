# Tallynest Development Workflow

## Standard cycle
PLAN -> INSPECT -> IMPLEMENT -> TEST -> DOCUMENT -> COMMIT -> PUSH -> PR -> AUTO-MERGE -> VERIFY -> CONTINUE

## Branches
Use focused branches such as chore/*, feature/*, fix/*, docs/*, and refactor/*.

## Pull requests
State the objective, implementation summary, tests, licensing/provenance implications, known limitations, and next step.

## Verification
After merge, verify that the base branch contains the expected commit and CI is healthy.

## Learning
When adding a major subsystem, add or update documentation so a junior developer can understand it without reverse-engineering the entire codebase.
