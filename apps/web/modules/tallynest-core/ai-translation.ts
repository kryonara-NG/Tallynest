"use server";

type TTranslationField = {
  path: string;
  defaultText: string;
  isRichText?: boolean;
};

type TTranslateInput = {
  workspaceId: string;
  fields: TTranslationField[];
  sourceLanguage: string;
  targetLanguage: string;
};

const getAIConfig = () => {
  const apiKey = process.env.OPENAI_API_KEY ?? process.env.AI_OPENAI_COMPATIBLE_API_KEY;
  const baseUrl = (process.env.AI_OPENAI_COMPATIBLE_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.AI_MODEL || "gpt-4o-mini";
  return apiKey ? { apiKey, baseUrl, model } : null;
};

export const checkAITranslationAvailableAction = async (_input: { surveyId: string }) => {
  const configured = Boolean(getAIConfig());
  return {
    data: {
      available: configured,
      reason: configured ? undefined : ("instance_not_configured" as const),
    },
  };
};

export const translateSurveyFieldsAction = async ({
  fields,
  sourceLanguage,
  targetLanguage,
}: TTranslateInput) => {
  const config = getAIConfig();
  if (!config) {
    return { serverError: "AI provider is not configured." };
  }
  if (fields.length === 0) return { data: { translations: {} as Record<string, string> } };

  const response = await fetch(`${config.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "Translate survey UI text accurately. Preserve placeholders, markdown, HTML tags, and variable syntax. Return only a JSON object mapping each supplied path to its translated string.",
        },
        {
          role: "user",
          content: JSON.stringify({
            sourceLanguage,
            targetLanguage,
            fields,
          }),
        },
      ],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return { serverError: "AI translation request failed." };
  }

  const payload = (await response.json()) as {
    choices?: Array<{ message?: { content?: string | null } }>;
  };
  const content = payload.choices?.[0]?.message?.content;
  if (!content) return { serverError: "AI translation returned no content." };

  try {
    const parsed = JSON.parse(content) as Record<string, unknown>;
    const allowedPaths = new Set(fields.map((field) => field.path));
    const translations: Record<string, string> = {};
    for (const [path, value] of Object.entries(parsed)) {
      if (allowedPaths.has(path) && typeof value === "string") translations[path] = value;
    }
    return { data: { translations } };
  } catch {
    return { serverError: "AI translation returned invalid JSON." };
  }
};
