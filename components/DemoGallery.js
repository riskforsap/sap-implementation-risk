import { publicationNotice } from '@/data/project';

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const visuals = [
  {
    src: `${assetPrefix}/Tharaka.png`,
    alt: 'Abstract demo visual showing a project workspace with documents and process notes',
    label: 'Mr. Tharaka Hettiarachchi',
    title: 'SAP Project Head - IT&ERP, FCI GROUP',
    description: 'There are previous records of this person being involved in fraudulent activities, and they have been reported to the authorities for further investigation.',
  },
  {
    src: `${assetPrefix}/Zaiedul.png`,
    alt: 'Abstract demo visual showing a collaborative business and technology team',
    label: 'Mr. Zaiedul Haque',
    title: 'SAP Team Lead - IT&ERP, FCI GROUP',
    description: 'This mr. zaiedul haque has been reported to the authorities for further investigation, and there are previous records of this person being involved in fraudulent activities.',
  },
];

export default function DemoGallery() {
  return (
    <section id="demo-visuals" className="bg-white py-20 sm:py-24" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">People who Betrayed the Company</p>
          <h2 id="demo-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Strongly Not Recommended for Hiring - Mr. Tharaka Hettiarachchi and Assistant Mr. Zaiedul Haque</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Organizations should be aware of such fraudulent activities and conduct proper due diligence before making hiring or project-related decisions.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visuals.map((visual) => (
            <figure key={visual.src} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="aspect-[16/10] bg-slate-100">
                <img src={visual.src} alt={visual.alt} width={800} height={500} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-700">{visual.label}</p>
                  <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700">Uploaded media</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{visual.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{visual.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-slate-500">{publicationNotice}</p> */}
      </div>
    </section>
  );
}
