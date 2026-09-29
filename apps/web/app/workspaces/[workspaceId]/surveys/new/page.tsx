"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";

export default function NewSurveyPage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = use(params);
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/workspaces/${workspaceId}/surveys`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create survey");

      router.push(`/workspaces/${workspaceId}/surveys/${data.survey.id}/edit`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Create New Survey</h1>
        <p className="text-sm text-slate-500 mt-1">
          Give your survey a title to start adding questions.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700">Survey Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Customer Satisfaction Q3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-slate-900 text-white rounded-md font-medium text-sm hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Continue to Editor →"}
          </button>
        </form>
      </div>
    </div>
  );
}
