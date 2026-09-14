import EvidenceLink from './EvidenceLink';
import StatusPill from './StatusPill';
import { executiveSummary } from '@/data/project';

export default function ExecutiveSummary() {
  return (
    <section id="summary" className="bg-slate-50 py-20 sm:py-24" aria-labelledby="summary-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Executive summary</p>
            <h2 id="summary-heading" className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What the record currently shows</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">This working summary separates verified information from reported concerns and open questions. It is not a finding of wrongdoing.</p>
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500 lg:mt-0">Status labels are evidence controls</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {executiveSummary.map((item) => (
            <article key={item.id} className="flex min-h-[13rem] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <StatusPill>{item.status}</StatusPill>
              </div>
              <p className="mt-5 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <EvidenceLink evidenceIds={item.evidenceIds} />
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">{item.id.replace('summary-', '')}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
