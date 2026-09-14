import StatusPill from './StatusPill';
import { publicationNotice } from '@/data/project';

const reviewSlots = [
  {
    organization: 'FCI Group',
    role: '[ROLE – VERIFIED]',
    prompt: 'Team has become isolated from the rest of the company. Mr. Tharaka frequently criticizes other departments in front of everyone, creating an "us vs. them" mindset. Meanwhile, Mr. Zaiedul blocks direct communication between staff and other teams, requiring all cross-functional communication to go through him',
  },
    {
    organization: 'FCI Group',
    role: '[ROLE – VERIFIED]',
    prompt: 'The dynamic in department is heavily biased. If you are in Mr. Tharakas inner circle—which Mr. Zaiedul strictly controls—you get prime assignments and praise. If you arent, your contributions are either ignored or claimed by leadership when reporting to higher executive teams'
  },
  {
    organization: 'FCI Group',
    role: '[ROLE – VERIFIED]',
    prompt: 'During the User Acceptance Testing (UAT) phase of an enterprise module upgrade, plant floor operators and key business users flagged major usability flaws that slowed down daily transactions. Mr. Tharaka dismissed these concerns as "user complaints" and instructed Mr. Zaiedul to sign off on UAT completion on behalf of the end-users to meet his personal project delivery KPI',
  },
  {
    organization: 'FCI Group',
    role: '[ROLE – VERIFIED]',
    prompt: 'During  SAP implementation, Mr. Tharaka refused to adopt standard SAP Best Practices. Instead, he insisted that the technical team build heavy custom ABAP logic to mirror his outdated legacy processes. Whenever senior ABAP consultants or functional leads raised technical risks, Mr. Zaiedul Haque shut down the discussions, labeling constructive technical warnings as "resistance to leadership. ',
  },
    {
    organization: 'FCI Group',
    role: '[ROLE – VERIFIED]',
    prompt: 'Mr. Tharaka prohibited direct communication between teams. Every technical query, API payload spec, and authentication token issue had to be routed through Mr. Zaiedul Haque via email chains. Technical documentation was delayed for weeks on Mr. Zaiedul’s desk.',
  },
  {
    organization: 'FCI Group' ,
    role: '[ROLE – VERIFIED]',
    prompt: 'Developers would complete a module based on Mr. Zaiedul’s instructions, only for Mr. Tharaka to reject it during review, claiming "this isnt what I asked for Mr. Zaiedul would then pass the blame entirely onto the ABAP developers and system integrators.'
  },
    {
    organization: 'FCI Group',
    role: '[ROLE – VERIFIED]',
    prompt: 'Mr. Zaiedul filtered all project status reports sent to senior management, hiding critical integration test failures and unresolved high-priority bugs to present a false "green" status.',
  },
    {
    organization: 'FCI Group',
    role: '[ROLE – VERIFIED]',
    prompt: 'Working under Mr. Tharaka and his assistant Mr. Zaiedul Haque has been the most draining experience of my career. Every minor email, report, or task has to be filtered through Mr. Zaiedul first, who acts as a complete gatekeeper. Even simple decisions take days to get approved because everything is micro-analyzed.',
  }
];

export default function PeopleReviews() {
  return (
    <section id="perspectives" className="bg-slate-950 py-20 text-white sm:py-24" aria-labelledby="perspectives-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">People &amp; perspectives</p>
            <h2 id="perspectives-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Reviews reserved for verified contributors</h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">This section is for first-hand perspectives from people with relevant SAP project experience. Organization names are outreach categories only</p>
            <div className="mt-7 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
              <span className="font-semibold"> THIS ALL VERIFIED INFORMATION</span>
              <span className="ml-2">There are more companys testimonial published yet.</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewSlots.map((slot) => (
              <article key={slot.organization} className="rounded-xl border border-white/15 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Perspective slot</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{slot.organization}</h3>
                  </div>
                  <StatusPill>Verified Claim</StatusPill>
                </div>
                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-300">Contributor</dt>
                    <dd className="mt-1 text-slate-200">[Name – Confidential]</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-300">Role</dt>
                    <dd className="mt-1 text-slate-200">{slot.role}</dd>
                  </div>
                </dl>
                <blockquote className="mt-5 border-l-2 border-sky-400 pl-4 text-sm leading-6 text-slate-300">“{slot.prompt}”</blockquote>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
