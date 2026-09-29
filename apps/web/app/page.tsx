import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 py-4 bg-white border-b border-slate-200 flex justify-between items-center">
        <div className="font-bold text-xl text-slate-800">Tallynest</div>
        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900">
            Sign In
          </Link>
          <Link href="/signup" className="px-4 py-2 text-sm bg-slate-900 text-white rounded-md hover:bg-slate-800">
            Get Started
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          SaaS Survey Engine & Experience Platform
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          Build, distribute, and analyze surveys seamlessly. Built with tenant isolation, workspace privacy, and production performance in mind.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/signup" className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">
            Start Building Free
          </Link>
          <Link href="/login" className="px-6 py-3 bg-white text-slate-700 font-medium border border-slate-300 rounded-lg hover:bg-slate-50">
            Access Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
