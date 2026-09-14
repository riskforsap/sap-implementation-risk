export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8" aria-busy="true" aria-label="Loading transparency report">
      <div className="h-8 w-2/5 animate-pulse rounded bg-slate-200" />
      <div className="mt-4 h-4 w-3/5 animate-pulse rounded bg-slate-200" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="h-40 animate-pulse rounded-xl border border-slate-200 bg-slate-100" />
        ))}
      </div>
    </div>
  );
}
