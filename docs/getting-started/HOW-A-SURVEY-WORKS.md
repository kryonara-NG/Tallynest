# How a Survey Works in Tallynest

// TALLYNEST LEARNING NOTE:
// Start here to understand the complete lifecycle of a survey.

## Lifecycle
1. **Creation**: User creates a survey via `POST /api/workspaces/[workspaceId]/surveys`. Status set to `DRAFT`.
2. **Editing**: Questions and details are edited in `apps/web/components/SurveyEditorClient.tsx` and saved via `PUT /api/workspaces/[workspaceId]/surveys/[surveyId]`.
3. **Publishing**: Changing status to `IN_PROGRESS` makes the public runtime route available.
4. **Runtime**: End-users render and answer questions at `/s/[surveyId]`.
