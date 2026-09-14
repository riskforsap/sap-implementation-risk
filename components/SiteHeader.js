import Link from 'next/link';
import { site } from '@/data/project';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Snapshot', href: '#snapshot' },
  { label: 'External Review', href: '#evidence-checklist' },
  { label: 'Perspectives', href: '#perspectives' },
  // { label: 'Governance', href: '#governance' },
  // { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2" aria-label={`${site.name} home`}>
          <span className="grid size-15 place-items-center rounded-md bg-navy text-sm font-bold tracking-tight text-white" aria-hidden="true">
            Exposed
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-slate-950">SAP Project Accountability</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Transparency & Awareness Record</span>
          </span>
        </Link>
        <nav className="w-full overflow-x-auto lg:w-auto" aria-label="Primary navigation">
          <ul className="flex w-max items-center gap-1 pb-1 text-sm font-medium text-slate-700 lg:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
