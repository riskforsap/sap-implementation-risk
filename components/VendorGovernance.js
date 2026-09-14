import { publicationNotice, vendorQuestions } from '@/data/project';

export default function VendorGovernance() {
  return (
    <section id="vendor-governance" className="bg-slate-50 py-20 sm:py-24" aria-labelledby="vendor-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Vendor governance</p>
            <h2 id="vendor-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Questions for a transparent vendor review</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Vendor performance and procurement decisions should be assessed through contracts, evaluations, acceptance records and payment evidence. Questions are not accusations.</p>
            <div className="mt-7 rounded-lg border border-sky-200 bg-sky-50 p-5 text-sm leading-6 text-sky-950">
              <span className="font-semibold">Editorial boundary: </span>
              Do not accuse anyone of corruption unless independently verified evidence is available.
            </div>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {vendorQuestions.map((question, index) => (
              <li key={question} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white" aria-hidden="true">{index + 1}</span>
                <p className="text-sm font-medium leading-6 text-slate-800">{question}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-500">{publicationNotice}</p>
      </div>
    </section>
  );
}
