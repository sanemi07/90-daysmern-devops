function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Vite + React + Tailwind
        </p>
        <h1 className="mt-3 text-3xl font-bold">Frontend is ready</h1>
        <p className="mt-4 text-slate-300">
          Edit <code className="rounded bg-slate-800 px-2 py-1">src/App.jsx</code>{' '}
          and Tailwind classes will update instantly via Vite HMR.
        </p>
        <div className="mt-6">
          <button className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Tailwind is working
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
