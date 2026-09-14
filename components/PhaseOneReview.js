import { phaseOneRows, publicationNotice } from '@/data/project';

export default function PhaseOneReview() {
  return (
    <section id="phase-1" className="bg-slate-50 py-20 sm:py-24" aria-labelledby="phase-1-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Phase 1 review</p>
          <h2 id="phase-1-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Planned versus actual</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">This comparison table is intentionally conservative. Unknown values are not inferred from project narratives or personal recollection.</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-[48rem] w-full text-left text-sm">
            <caption className="sr-only">Phase 1 planned, actual and evidence comparison</caption>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
                <th scope="col" className="px-5 py-4">Area</th>
                <th scope="col" className="px-5 py-4">Planned</th>
                <th scope="col" className="px-5 py-4">Actual</th>
                <th scope="col" className="px-5 py-4">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {phaseOneRows.map((row) => (
                <tr key={row.area} className="border-b border-slate-100 last:border-0">
                  <th scope="row" className="px-5 py-4 font-semibold text-slate-950">{row.area}</th>
                  <td className="px-5 py-4 text-slate-600">{row.planned}</td>
                  <td className="px-5 py-4 text-slate-600">{row.actual}</td>
                  <td className="px-5 py-4 text-slate-500">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">{publicationNotice}</p>
      </div>
    </section>
  );
}
