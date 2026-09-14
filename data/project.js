export const publicationNotice = 'DEMO DATA – REPLACE WITH VERIFIED INFORMATION';

export const site = {
  name: 'SAP Project Accountability',
  description:
    'An evidence-based record of implementation outcomes, governance decisions, business alignment and Phase 2 readiness.',
  contactChannel: 'corrections@example.invalid',
  contactNote: 'DEMO CONTACT – CONFIGURE BEFORE PUBLICATION',
};

export const executiveSummary = [
  {
    id: 'summary-phase-1',
    title: 'Phase 1 Status',
    status: 'Question Requiring Investigation',
    description:
      'Confirm completion, stabilization and formal acceptance against signed records, issue logs and post-go-live support data.',
    evidenceIds: ['E-001', 'E-006'],
  },
  {
    id: 'summary-alignment',
    title: 'Business Alignment',
    status: 'Reported Concern',
    description:
      'Business-user feedback and approved process decisions should be compared with the implemented configuration and operating model.',
    evidenceIds: ['E-003', 'E-007'],
  },
  {
    id: 'summary-data',
    title: 'Data/Process Issues',
    status: 'Evidence Required',
    description:
      'Identify the specific data and process discrepancies, their owners, severity, remediation status and effect on business operations.',
    evidenceIds: ['E-008'],
  },
  {
    id: 'summary-governance',
    title: 'Governance',
    status: 'Question Requiring Investigation',
    description:
      'Review decision rights, escalation paths, risk ownership, meeting records and approval evidence for Phase 1 and Phase 2.',
    evidenceIds: ['E-005', 'E-007'],
  },
  {
    id: 'summary-vendor',
    title: 'Vendor Management',
    status: 'Question Requiring Investigation',
    description:
      'Verify selection criteria, contractual deliverables, acceptance records, milestone payments and conflict-of-interest declarations.',
    evidenceIds: ['E-004', 'E-005'],
  },
  {
    id: 'summary-phase-2',
    title: 'Phase 2 Risk',
    status: 'Unverified Claim',
    description:
      'Phase 2 readiness cannot be rated from placeholder content. Complete the evidence checklist before assigning a risk level.',
    evidenceIds: ['E-007'],
  },
];

export const leadershipProfiles = [
  {
    id: 'project-director',
    role: 'Project Director',
    name: '[NAME – VERIFIED: Mr. Tharaka ]',
    responsibility:
      'Confirm the official responsibility statement from the approved project charter, delegation of authority or appointment record.',
    decisions:
      'Evidence required: identify decisions attributable to this role using dated minutes, approvals, directives or signed correspondence.',
    outcomes:
      'No project outcome should be attributed to this person until the responsibility, decision and causal link are supported by primary records.',
    evidenceIds: ['E-001', 'E-005'],
  },
  {
    id: 'project-lead',
    role: 'Project Lead',
    name: '[NAME – VERIFIED: Mr. Zaiedul Haque ]',
    responsibility:
      'Confirm the official responsibility statement from the approved project charter, role description or appointment record.',
    decisions:
      'Evidence required: identify decisions attributable to this role using dated delivery records, issue decisions or approved change requests.',
    outcomes:
      'No project outcome should be attributed to this person until the responsibility, decision and causal link are supported by primary records.',
    evidenceIds: ['E-001', 'E-002', 'E-005'],
  },
];

export const phaseOneRows = [
  { area: 'Scope', planned: 'Evidence required', actual: 'Evidence required', evidence: 'Evidence required' },
  { area: 'Business Alignment', planned: 'Evidence required', actual: 'Evidence required', evidence: 'Evidence required' },
  { area: 'UAT', planned: 'Evidence required', actual: 'Evidence required', evidence: 'Evidence required' },
  { area: 'Data Validation', planned: 'Evidence required', actual: 'Evidence required', evidence: 'Evidence required' },
  { area: 'User Acceptance', planned: 'Evidence required', actual: 'Evidence required', evidence: 'Evidence required' },
  { area: 'Timeline', planned: 'Evidence required', actual: 'Evidence required', evidence: 'Evidence required' },
  { area: 'Vendor Deliverables', planned: 'Evidence required', actual: 'Evidence required', evidence: 'Evidence required' },
];

export const recruitmentMetrics = [
  { id: 'open-positions', label: 'Open SAP positions', value: 'Data Required', source: 'HR records required' },
  { id: 'hiring-time', label: 'Average hiring time', value: 'Data Required', source: 'HR records required' },
  { id: 'qualified-applicants', label: 'Qualified applicants', value: 'Data Required', source: 'HR records required' },
  { id: 'offer-acceptance', label: 'Offer acceptance rate', value: 'Data Required', source: 'HR records required' },
  { id: 'offer-decline', label: 'Offer decline rate', value: 'Data Required', source: 'HR records required' },
  { id: 'turnover', label: 'Employee turnover', value: 'Data Required', source: 'HR records required' },
];

export const vendorQuestions = [
  'How was the vendor selected?',
  'What were the technical evaluation criteria?',
  'What were the commercial evaluation criteria?',
  'What deliverables were contractually agreed?',
  'Which deliverables were accepted?',
  'What payments corresponded to milestones?',
  'Were alternative vendors evaluated?',
  'Are any potential conflicts of interest documented?',
];

export const managementQuestions = [
  'Has Phase 1 been fully stabilized?',
  'Has the business formally accepted the implemented processes?',
  'Which Phase 1 issues remain open?',
  'What caused the implementation delays?',
  'What lessons have been documented?',
  'Is the current project governance structure adequate for Phase 2?',
  'Does the internal SAP team have sufficient experience?',
  'Has the Phase 2 vendor strategy been independently evaluated?',
];

export const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Snapshot', href: '#snapshot' },
  { label: 'Checklist', href: '#evidence-checklist' },
  { label: 'Perspectives', href: '#perspectives' },
  // { label: 'Governance', href: '#governance' },
  // { label: 'Contact', href: '#contact' },
];
