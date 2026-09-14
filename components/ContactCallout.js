import { site } from '@/data/project';

export default function ContactCallout() {
  return (
    <section id="contact" className="bg-sky-700 py-16 text-white" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Correction &amp; response</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Help keep the record accurate</h2>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg sm:p-8">
          <p className="text-base leading-7 text-white">If you can provide a primary record, a specific correction or a verified first-hand perspective, submit it through the designated contact channel. Include the statement you are addressing and the evidence that supports your response.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a href={`mailto:${site.contactChannel}?subject=${encodeURIComponent('Correction or verified perspective')}`} className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-700">
              Prepare a response
            </a>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-100">{site.contactNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
