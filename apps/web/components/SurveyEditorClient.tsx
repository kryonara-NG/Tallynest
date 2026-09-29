"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Question = {
  id?: string;
  type: "OPEN_TEXT" | "MULTIPLE_CHOICE_SINGLE" | "RATING" | "NPS";
  headline: string;
  subheader?: string;
  required: boolean;
  options?: string[];
};

export default function SurveyEditorClient({
  workspaceId,
  survey,
}: {
  workspaceId: string;
  survey: {
    id: string;
    name: string;
    status: string;
    questions: Question[];
  };
}) {
  const router = useRouter();
  const [name, setName] = useState(survey.name);
  const [status, setStatus] = useState(survey.status);
  const [questions, setQuestions] = useState<Question[]>(
    survey.questions.length > 0
      ? survey.questions
      : [
          {
            type: "OPEN_TEXT",
            headline: "How can we improve our product?",
            subheader: "Please share any feedback.",
            required: true,
          },
        ]
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const addQuestion = (type: Question["type"]) => {
    setQuestions([
      ...questions,
      {
        type,
        headline:
          type === "NPS"
            ? "How likely are you to recommend us to a friend?"
            : "New Question",
        subheader: "",
        required: true,
        options: type === "MULTIPLE_CHOICE_SINGLE" ? ["Option 1", "Option 2"] : undefined,
      },
    ]);
  };

  const updateQuestion = (index: number, updated: Partial<Question>) => {
    const list = [...questions];
    list[index] = { ...list[index], ...updated };
    setQuestions(list);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSave = async (publish: boolean = false) => {
    setSaving(true);
    setMessage("");

    const targetStatus = publish ? "IN_PROGRESS" : status;

    try {
      const res = await fetch(`/api/workspaces/${workspaceId}/surveys/${survey.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          status: targetStatus,
          questions,
        }),
      });

      if (!res.ok) throw new Error("Failed to save survey");

      setStatus(targetStatus);
      setMessage(publish ? "Survey published successfully!" : "Changes saved!");
      router.refresh();
    } catch (err: unknown) {
      setMessage(err instanceof Error ? err.message : "Error saving survey");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href={`/workspaces/${workspaceId}`}
            className="text-xs text-slate-500 hover:text-slate-800"
          >
            ← Back to Workspace
          </Link>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="font-bold text-lg text-slate-900 border-b border-transparent hover:border-slate-300 focus:border-slate-500 px-1 py-0.5 outline-none"
          />
          <span
            className={`text-xs px-2 py-0.5 rounded font-medium ${
              status === "IN_PROGRESS" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-4 py-2 text-sm font-medium border border-slate-300 rounded-lg bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Draft"}
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="px-4 py-2 text-sm font-medium bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50"
          >
            Publish Survey
          </button>
        </div>
      </header>

      {message && (
        <div className="bg-slate-800 text-white text-xs py-2 px-6 text-center">
          {message}
        </div>
      )}

      <main className="flex-1 max-w-4xl w-full mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-800">Questions ({questions.length})</h2>
          </div>

          {questions.map((q, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-400">Question {idx + 1} • {q.type}</span>
                <button
                  onClick={() => removeQuestion(idx)}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600">Headline</label>
                <input
                  type="text"
                  value={q.headline}
                  onChange={(e) => updateQuestion(idx, { headline: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600">Subheader / Description</label>
                <input
                  type="text"
                  value={q.subheader || ""}
                  onChange={(e) => updateQuestion(idx, { subheader: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                />
              </div>

              {q.type === "MULTIPLE_CHOICE_SINGLE" && (
                <div>
                  <label className="block text-xs font-medium text-slate-600">Options (comma separated)</label>
                  <input
                    type="text"
                    value={(q.options || []).join(", ")}
                    onChange={(e) =>
                      updateQuestion(idx, {
                        options: e.target.value.split(",").map((s) => s.trim()),
                      })
                    }
                    className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 text-sm mb-3">Add Question Type</h3>
            <div className="space-y-2">
              <button
                onClick={() => addQuestion("OPEN_TEXT")}
                className="w-full text-left px-3 py-2 border border-slate-200 rounded-md text-xs font-medium hover:bg-slate-50"
              >
                + Open Text Response
              </button>
              <button
                onClick={() => addQuestion("MULTIPLE_CHOICE_SINGLE")}
                className="w-full text-left px-3 py-2 border border-slate-200 rounded-md text-xs font-medium hover:bg-slate-50"
              >
                + Multiple Choice (Single)
              </button>
              <button
                onClick={() => addQuestion("NPS")}
                className="w-full text-left px-3 py-2 border border-slate-200 rounded-md text-xs font-medium hover:bg-slate-50"
              >
                + Net Promoter Score (NPS 0-10)
              </button>
              <button
                onClick={() => addQuestion("RATING")}
                className="w-full text-left px-3 py-2 border border-slate-200 rounded-md text-xs font-medium hover:bg-slate-50"
              >
                + 5-Star Rating
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
