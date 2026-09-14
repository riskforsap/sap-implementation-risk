'use client';

export default function Error({ reset }) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center" role="alert">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Page unavailable</p>
      <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">The report could not be displayed</h1>
      <p className="mt-4 text-slate-600">Please try again. If the problem continues, contact the site editor through the correction channel.</p>
      <button type="button" onClick={reset} className="mt-7 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">Try again</button>
    </section>
  );
}
