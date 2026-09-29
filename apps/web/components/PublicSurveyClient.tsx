"use client";

import { useState } from "react";

type Question = {
  id: string;
  type: string;
  headline: string;
  subheader?: string | null;
  required: boolean;
  options?: string[] | null;
};

export default function PublicSurveyClient({
  survey,
}: {
  survey: {
    id: string;
    name: string;
    questions: Question[];
  };
}) {
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleAnswer = (questionId: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`/api/surveys/${survey.id}/responses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: answers }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to submit response");

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred while submitting");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 text-center shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Thank you!</h2>
          <p className="text-sm text-slate-600 mt-2">
            Your response has been successfully recorded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-xl p-8 shadow-sm space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{survey.name}</h1>
          <p className="text-xs text-slate-400 mt-1">Powered by Tallynest</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}

          {survey.questions.map((q, idx) => (
            <div key={q.id} className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                {idx + 1}. {q.headline} {q.required && <span className="text-red-500">*</span>}
              </label>
              {q.subheader && <p className="text-xs text-slate-500">{q.subheader}</p>}

              {q.type === "OPEN_TEXT" && (
                <textarea
                  required={q.required}
                  rows={3}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm focus:ring-slate-500 focus:border-slate-500"
                />
              )}

              {q.type === "MULTIPLE_CHOICE_SINGLE" && q.options && (
                <div className="space-y-2 pt-1">
                  {(q.options as string[]).map((opt, oIdx) => (
                    <label key={oIdx} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        required={q.required}
                        onChange={(e) => handleAnswer(q.id, e.target.value)}
                        className="text-slate-900 focus:ring-slate-500"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}

              {q.type === "NPS" && (
                <div className="flex gap-1 overflow-x-auto pt-1">
                  {Array.from({ length: 11 }, (_, i) => i).map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => handleAnswer(q.id, num)}
                      className={`flex-1 min-w-[32px] py-2 border rounded text-xs font-medium ${
                        answers[q.id] === num
                          ? "bg-slate-900 text-white border-slate-900"
                          : "border-slate-200 hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              )}

              {q.type === "RATING" && (
                <div className="flex gap-2 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleAnswer(q.id, star)}
                      className={`px-3 py-1.5 border rounded text-sm ${
                        answers[q.id] === star
                          ? "bg-amber-100 text-amber-800 border-amber-300 font-bold"
                          : "border-slate-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      ★ {star}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg text-sm hover:bg-slate-800 disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Response"}
          </button>
        </form>
      </div>
    </div>
  );
}
