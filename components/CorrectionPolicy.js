import { site } from '@/data/project';

export default function CorrectionPolicy() {
  return (
    <section id="correction-response" className="bg-slate-50 py-20 sm:py-24" aria-labelledby="correction-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Correction &amp; response</p>
            <h2 id="correction-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A published record should be correctable</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Corrections should be specific, supported by documentation and handled through a traceable editorial process.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-7 text-slate-700">If you believe any factual statement published here is inaccurate, provide supporting documentation through the designated contact channel. Verified corrections will be published transparently.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Contact channel</p>
                <p className="mt-2 text-sm font-semibold text-slate-950">{site.contactChannel}</p>
                <p className="mt-1 text-xs text-slate-500">{site.contactNote}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Response record</p>
                <p className="mt-2 text-sm text-slate-700">Log the submission date, evidence received, editorial decision and publication date.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
