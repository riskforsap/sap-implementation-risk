import { governancePrinciples } from '@/data/pageSections';

export default function GovernancePrinciples() {
  return (
    <section id="governance" className="bg-navy py-20 text-white sm:py-24" aria-labelledby="governance-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Governance principles</p>
          <h2 id="governance-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Controls for a fair accountability record</h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">These principles help separate project review from speculation and protect people, organizations and source material.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {governancePrinciples.map((principle) => (
            <article key={principle.title} className="rounded-xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-300">{principle.number}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
