import { managementQuestions, publicationNotice } from '@/data/project';

export default function ManagementQuestions() {
  return (
    <section id="questions" className="bg-navy py-20 text-white sm:py-24" aria-labelledby="questions-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Questions for management</p>
          <h2 id="questions-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Questions That Deserve Answers Before Phase 2</h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">These questions are designed to focus review on records, decisions and readiness. They do not presume an answer.</p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {managementQuestions.map((question, index) => (
            <li key={question} className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sky-500/20 text-sm font-bold text-sky-200" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <p className="text-sm font-medium leading-6 text-slate-100">{question}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-xs font-semibold uppercase tracking-wider text-slate-400">{publicationNotice}</p>
      </div>
    </section>
  );
}
