import { footerLinks, site } from '@/data/project';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <h2 id="footer-heading" className="sr-only">Site policies and contact</h2>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-15 place-items-center rounded-md bg-navy text-sm font-bold text-white" aria-hidden="true">Exposed</span>
              <div>
                <p className="font-semibold text-slate-950">{site.name}</p>
                <p className="text-xs text-slate-500">TRANSPARENCY & AWARENESS RECORD</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600">
              This website is an independent documentation project focused on SAP implementation governance and project accountability.
Contributors may include current or former project participants and external observers. The publication of a claim does not automatically establish that the claim is true. Material claims are classified according to the available evidence and may be updated when additional evidence becomes available.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-800">Evidence before accusation, transparency before speculation, and accountability before personal judgment.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Policies</p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="rounded px-1 py-1 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 hover:decoration-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SAP Project Accountability.</p>
          <p>Protect your investment from the wrong project leader. Hire the right one.</p>
        </div>
      </div>
    </footer>
  );
}
