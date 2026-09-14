import StatusPill from './StatusPill';
import { evidenceItems } from '@/data/evidence';
import { publicationNotice } from '@/data/project';

export default function EvidenceRoom() {
  return (
    <section id="evidence" className="bg-white py-20 sm:py-24" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Evidence room</p>
          <h2 id="evidence-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Documents to locate and review</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Evidence cards identify the records needed to test each material statement. A document title is not proof of its contents until the original is reviewed.</p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <span className="font-semibold">Publication warning: </span>
          Confidential, personal, financial, credential, and proprietary information must be removed before publication.
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {evidenceItems.map((item) => (
            <article key={item.id} className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-sky-200 hover:bg-white">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">{item.id}</p>
                <StatusPill>{item.evidenceStatus}</StatusPill>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
              <dl className="mt-5 flex-1 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="min-w-[6.5rem] font-semibold text-slate-700">Date</dt>
                  <dd className="text-slate-600">{item.date}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="min-w-[6.5rem] font-semibold text-slate-700">Category</dt>
                  <dd className="text-slate-600">{item.category}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="min-w-[6.5rem] font-semibold text-slate-700">Redaction</dt>
                  <dd className="text-slate-600">{item.redactionStatus}</dd>
                </div>
              </dl>
              <p className="mt-5 text-sm leading-6 text-slate-600">{item.description}</p>
              <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">{item.sourceReference}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500">{publicationNotice}</p>
      </div>
    </section>
  );
}
