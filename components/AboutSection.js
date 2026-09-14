import { publicationNotice } from '@/data/project';

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">About this record</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Organizations should be aware of such fraudulent activities of below individuals</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">The primary objective of these two individuals is to make money by using the company as a guinea pig. No matter which company they join, no project ever reaches completion. This evidence comes from employees of their previous organizations; you are free to verify it.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Mr. Tharaka Hettiarachchi</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">Claimed by Internal and External Party</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">- There are no leadership capabilities to successfully lead projects to completion.</p> <br />
            <p className="mt-3 text-sm leading-6 text-slate-600">- If the leadership style of the Project Director and Project Lead is unable to attract and retain experienced resources, it could negatively affect the overall capability and long-term stability of the SAP team.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Mr. Zaiedul Haque</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">Claimed by Internal and External Party</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">- There appears to be a perception among experienced SAP professionals that they are reluctant to work under their leadership. If this perception is accurate, it could create a significant recruitment and retention risk for the project.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Mr./Mrs.  ......</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">Will be Exposed soon</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600"> </p>
          </article>
        </div>
        {/* <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-slate-500">{publicationNotice}</p> */}
      </div>
    </section>
  );
}
