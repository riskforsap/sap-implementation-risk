const statusClasses = {
  'Verified Fact': 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  'Documented Project Event': 'bg-sky-50 text-sky-800 ring-sky-200',
  'Reported Concern': 'bg-amber-50 text-amber-900 ring-amber-200',
  'Unverified Claim': 'bg-slate-100 text-slate-700 ring-slate-300',
  'Question Requiring Investigation': 'bg-indigo-50 text-indigo-800 ring-indigo-200',
  'Evidence Required': 'bg-slate-50 text-slate-600 ring-slate-300',
  UNVERIFIED: 'bg-slate-100 text-slate-700 ring-slate-300',
  LOW: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  MEDIUM: 'bg-amber-50 text-amber-900 ring-amber-200',
  HIGH: 'bg-rose-50 text-rose-800 ring-rose-200',
};

export default function StatusPill({ children }) {
  const className = statusClasses[children] || statusClasses.UNVERIFIED;
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ring-inset ${className}`}>{children}</span>;
}
