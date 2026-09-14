import StatusPill from './StatusPill';
import { projectSnapshot } from '@/data/pageSections';

export default function ProjectSnapshot() {
  return (
    <section id="snapshot" className="bg-white py-20 sm:py-24" aria-labelledby="snapshot-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Project snapshot</p>
          <h2 id="snapshot-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Areas that need a clear record</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">This snapshot identifies the project areas where evidence should be collected before drawing conclusions or assigning responsibility.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectSnapshot.map((item) => (
            <article key={item.id} className="flex min-h-[12rem] flex-col rounded-xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-sky-200 hover:bg-white">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <StatusPill>{item.status}</StatusPill>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
              <a href="#perspectives" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-950 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">
                Review by internal party
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
