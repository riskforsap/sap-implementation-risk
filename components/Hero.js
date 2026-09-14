import Link from 'next/link';
import { publicationNotice } from '@/data/project';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute -right-24 -top-32 size-96 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 size-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28 lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            <span className="size-2 rounded-full bg-sky-300" aria-hidden="true" />
            Public transparency & awareness record
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            SAP Project Accountability <span className="text-sky-300">– Protect your Investment</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            We document SAP implementation risks and stakeholder-reported concerns so organizations can independently verify them before making hiring, vendor, or project-leadership decisions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo-visuals"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold !text-black transition-colors hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-navy"
            >
              Faces Exposed
            </a>
            <a
              href="#perspectives"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
            >
              Review Perspectives
            </a>
          </div>
          {/* <p className="mt-8 max-w-xl text-xs leading-5 text-slate-300">{publicationNotice}</p> */}
        </div>
        <aside className="rounded-xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-lg lg:p-8" aria-labelledby="record-purpose">
          <p id="record-purpose" className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Not Recommended for Hiring Mr. Tharaka Hettiarachchi and his Assistant Mr. Zaiedul Haque</p>
          <p className="mt-4 text-lg font-semibold leading-8 text-white">No matter which company they join, they ruin the entire team. In the end, the company suffers.</p>
          <dl className="mt-8 space-y-5 text-sm">
            <div className="flex gap-4">
              <dt className="mt-0.5 min-w-[7.5rem] text-slate-300">Make Toxic Environment</dt>
              <dd className="text-white">They create a toxic work environment that damages team morale and stability.</dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-0.5 min-w-[7.5rem] text-slate-300">Professionals reluctance</dt>
              <dd className="text-white">This makes experienced professionals reluctant to join or remain in the team.</dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-0.5 min-w-[7.5rem] text-slate-300">Ruin Team Dynamics</dt>
              <dd className="text-white">As a result, the overall SAP team suffers.</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
