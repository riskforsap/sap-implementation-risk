'use client';

import { useState } from 'react';
import EvidenceLink from './EvidenceLink';
import StatusPill from './StatusPill';
import { timelineEntries } from '@/data/timeline';

export default function ProjectTimeline() {
  const [openId, setOpenId] = useState(timelineEntries[0]?.id);

  return (
    <section id="timeline" className="bg-white py-20 sm:py-24" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Project timeline</p>
          <h2 id="timeline-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A chronology to be verified</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">The entries below are a research framework, not a completed historical account. Dates and events remain placeholders until supported by records.</p>
        </div>
        <ol className="relative ml-4 border-l-2 border-slate-200 space-y-4 md:ml-8">
          {timelineEntries.map((entry, index) => {
            const isOpen = openId === entry.id;
            return (
              <li key={entry.id} className="relative pl-8 sm:pl-12">
                <span className={`absolute -left-[9px] top-2 size-[16px] rounded-full border-4 border-white ${isOpen ? 'bg-sky-600' : 'bg-slate-300'}`} aria-hidden="true" />
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-sky-200 hover:bg-white sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{entry.phase} · {index + 1}</p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950">{entry.title}</h3>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <StatusPill>{entry.status}</StatusPill>
                      <span className="text-xs font-medium text-slate-500">{entry.date}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-sky-950 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={`timeline-detail-${entry.id}`}
                    onClick={() => setOpenId(isOpen ? null : entry.id)}
                  >
                    {isOpen ? 'Hide review notes' : 'Show review notes'}
                    <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div id={`timeline-detail-${entry.id}`} className="mt-4 grid gap-5 border-t border-slate-200 pt-4 md:grid-cols-[1fr_auto]">
                      <p className="text-sm leading-6 text-slate-600">{entry.summary}</p>
                      <EvidenceLink evidenceIds={entry.evidenceIds} />
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
