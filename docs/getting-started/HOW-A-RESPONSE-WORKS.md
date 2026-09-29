# How a Response Works in Tallynest

// TALLYNEST LEARNING NOTE:
// Start here to understand response capture and storage.

1. **Submission**: Public runtime sends payload to `POST /api/surveys/[surveyId]/responses`.
2. **Validation**: API verifies the survey is `IN_PROGRESS`.
3. **Storage**: Response row created in PostgreSQL linked to `surveyId`.
4. **Inspection**: Workspace members view answers in `/workspaces/[workspaceId]/surveys/[surveyId]/responses`.
