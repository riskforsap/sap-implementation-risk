export default function EvidenceLink({ evidenceIds = [] }) {
  if (!evidenceIds.length) return null;
  return (
    <a href="#evidence" className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-950 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">
      Evidence
      <span className="text-sky-500" aria-hidden="true">↗</span>
      <span className="sr-only">for {evidenceIds.join(', ')}</span>
    </a>
  );
}
