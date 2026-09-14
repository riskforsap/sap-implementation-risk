import { evidenceChecklist } from '@/data/pageSections';

export default function EvidenceChecklist() {
  return (
    <section id="evidence-checklist" className="bg-slate-50 py-20 sm:py-24" aria-labelledby="checklist-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Evidence checklist</p>
            <h2 id="checklist-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">External Party Reviews</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Followings reviews are collected by external parties. as varified</p>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {evidenceChecklist.map((item, index) => (
              <li key={item.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white" aria-hidden="true">{index + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
