import { publicationNotice, recruitmentMetrics } from '@/data/project';

export default function RecruitmentMetrics() {
  return (
    <section id="recruitment" className="bg-slate-950 py-20 text-white sm:py-24" aria-labelledby="recruitment-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Recruitment &amp; retention</p>
            <h2 id="recruitment-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Capacity should be measured, not assumed</h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">These workforce indicators are placeholders. They should be independently validated through HR records and reported with a defined measurement period.</p>
            <div className="mt-7 rounded-lg border border-white/15 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              <span className="font-semibold text-white">Management action: </span>
              Management should independently validate these figures through HR records.
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {recruitmentMetrics.map((metric) => (
              <article key={metric.id} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">{metric.label}</p>
                <p className="mt-3 text-2xl font-bold text-white">{metric.value}</p>
                <p className="mt-2 text-xs text-slate-400">{metric.source}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-400">{publicationNotice}</p>
      </div>
    </section>
  );
}
