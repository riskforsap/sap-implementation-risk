import { site } from '@/data/project';

export default function SitePolicies() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="policies-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Editorial framework</p>
          <h2 id="policies-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Standards for responsible publication</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">These policies define how information is labelled, reviewed, corrected and protected while the record is developed.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article id="editorial-policy" className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Editorial Policy</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Publish only information that is relevant to project transparency. Distinguish verified facts, documented events, reported concerns, unverified claims and questions requiring investigation. Do not use insulting, retaliatory or dehumanizing language.</p>
          </article>
          <article id="evidence-standards" className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Evidence Standards</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Material statements should be traceable to original records where possible. Record the source, date, custodian, version, redaction status and verification outcome. Absence of evidence is not evidence of misconduct.</p>
          </article>
          <article id="correction-policy" className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Correction Policy</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Corrections and responses should include the disputed statement, supporting documentation, contact details and the requested change. Verified corrections will be dated, logged and published transparently without removing the editorial history.</p>
          </article>
          <article id="privacy-policy" className="rounded-xl border border-slate-200 bg-slate-50/70 p-6">
            <h3 className="text-lg font-semibold text-slate-950">Privacy Policy</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Do not publish personal, confidential, financial, credential or proprietary information without a legitimate lawful basis and an appropriate redaction review. Minimize personal data and restrict access to source documents.</p>
          </article>
        </div>
        <article id="contact" className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h3 className="text-lg font-semibold text-sky-950">Contact</h3>
          <p className="mt-3 text-sm leading-6 text-sky-950">Designated correction and response channel: <span className="font-semibold">{site.contactChannel}</span></p>
          <p className="mt-2 text-xs leading-5 text-sky-800">{site.contactNote}</p>
        </article>
      </div>
    </section>
  );
}
