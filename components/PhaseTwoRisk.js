import EvidenceLink from './EvidenceLink';
import StatusPill from './StatusPill';
import { publicationNotice } from '@/data/project';
import { riskItems } from '@/data/risks';

export default function PhaseTwoRisk() {
  return (
    <section id="phase-2" className="bg-white py-20 sm:py-24" aria-labelledby="phase-2-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Phase 2 risk assessment</p>
          <h2 id="phase-2-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Readiness is not yet established</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Risk levels remain unverified until supporting records are reviewed. A high rating should not be assigned without evidence of likelihood, impact and control weakness.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {riskItems.map((risk) => (
            <article key={risk.id} className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-sky-200 hover:bg-white">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-950">{risk.area}</h3>
                <StatusPill>{risk.level}</StatusPill>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{risk.rationale}</p>
              <div className="mt-5 rounded-lg bg-white p-4 text-sm leading-6 text-slate-700">
                <span className="font-semibold text-slate-950">Next verification step: </span>
                {risk.nextStep}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <EvidenceLink evidenceIds={risk.evidenceIds} />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{risk.id}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-slate-500">{publicationNotice}</p>
      </div>
    </section>
  );
}
