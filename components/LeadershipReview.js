import EvidenceLink from './EvidenceLink';
import StatusPill from './StatusPill';
import { leadershipProfiles, publicationNotice } from '@/data/project';

export default function LeadershipReview() {
  return (
    <section id="accountability" className="bg-slate-950 py-20 text-white sm:py-24" aria-labelledby="accountability-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Leadership &amp; accountability</p>
          <h2 id="accountability-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Responsibility must be established from records</h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">Role titles alone do not establish personal responsibility. Each connection between a decision, responsibility and outcome requires dated primary evidence.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {leadershipProfiles.map((profile) => (
            <article key={profile.id} className="rounded-xl border border-white/15 bg-white/5 p-6 shadow-lg sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">{profile.role}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{profile.name}</h3>
                </div>
                <StatusPill>Question Requiring Investigation</StatusPill>
              </div>
              <dl className="mt-7 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-slate-200">Official project responsibility</dt>
                  <dd className="mt-1 leading-6 text-slate-300">{profile.responsibility}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-200">Documented decisions</dt>
                  <dd className="mt-1 leading-6 text-slate-300">{profile.decisions}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-200">Project outcomes connected to responsibility</dt>
                  <dd className="mt-1 leading-6 text-slate-300">{profile.outcomes}</dd>
                </div>
              </dl>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <EvidenceLink evidenceIds={profile.evidenceIds} />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{publicationNotice}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
