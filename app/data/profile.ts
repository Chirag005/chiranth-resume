/**
 * Résumé-derived profile content for the home and about pages.
 * Every entry is traceable to Chiranth's résumé — do not add unverified claims.
 */

export interface Highlight {
  icon: string
  label: string
  value: string
}

export interface ResearchInterest {
  icon: string
  title: string
  description: string
  /** Slug of the project that evidences this interest. */
  evidence: { label: string; slug: string }
}

export interface TimelineEntry {
  kind: 'work' | 'education'
  title: string
  org: string
  location: string
  period: string
  stack?: string[]
  points: string[]
  link?: { label: string; to: string }
}

export interface Achievement {
  rank: string
  event: string
  host: string
  highlight?: boolean
}

export interface SkillGroup {
  title: string
  icon: string
  items: string[]
}

export interface Pursuit {
  icon: string
  title: string
  description: string
}

export const highlights: Highlight[] = [
  { icon: 'icon-[lucide--trophy]', label: 'Winner', value: '8th Mile Hackathon, RVCE' },
  { icon: 'icon-[lucide--medal]', label: 'Finalist', value: 'Vision 2047 National Hackathon' },
  { icon: 'icon-[lucide--briefcase]', label: 'Intern', value: 'Aragen Life Sciences' },
  { icon: 'icon-[lucide--brain]', label: 'Applied AI', value: '4 projects · vision, NLP, speech, fraud' },
]

// TODO(chiranth): confirm research interests and wording before applications go out.
export const researchInterests: ResearchInterest[] = [
  {
    icon: 'icon-[lucide--scan-eye]',
    title: 'Computer vision & multimodal learning',
    description: 'Grounding language in images — attention mechanisms that make captions object-aware.',
    evidence: { label: 'Image Caption Generator', slug: 'image-caption-generator' },
  },
  {
    icon: 'icon-[lucide--languages]',
    title: 'Natural language processing',
    description: 'Transformer representations for noisy, domain-specific text such as medical reviews.',
    evidence: { label: 'ADR Classifier', slug: 'adr-classifier' },
  },
  {
    icon: 'icon-[lucide--audio-waveform]',
    title: 'Speech & conversational AI',
    description: 'Robust speech recognition and low-latency dialogue for real-time interaction.',
    evidence: { label: 'Video Conversation Chatbot', slug: 'video-conversation-chatbot' },
  },
  {
    icon: 'icon-[lucide--shield-alert]',
    title: 'Trustworthy applied ML',
    description: 'Anomaly detection with interpretable, rule-aware risk scoring for high-stakes decisions.',
    evidence: { label: 'UPI Fraud Detection', slug: 'upi-fraud-detection' },
  },
]

export const timeline: TimelineEntry[] = [
  {
    kind: 'work',
    title: 'Intern — HR Project Health Dashboard',
    org: 'Aragen Life Sciences',
    location: 'Bangalore, Karnataka',
    period: 'Jun 2026 – Sep 2026',
    stack: ['React', 'FastAPI', 'SQLite', 'Python', 'Pandas'],
    points: [
      'Built a full-stack HR analytics dashboard covering workforce KPIs, CTC analytics, manager performance, tenure, and attrition.',
      'Implemented employee CRUD with dynamic search and multi-filtering; dashboards refresh after every data change.',
      'Shipped an Excel/CSV import pipeline with validation, duplicate detection, and preview before writes.',
    ],
    link: { label: 'Read the case study', to: '/projects/hr-project-health-dashboard' },
  },
  {
    kind: 'education',
    title: "Bachelor's in Computer Science and Business Systems",
    org: 'JSS Science and Technology University',
    location: 'Mysore, Karnataka',
    // TODO(chiranth): confirm expected graduation year.
    period: 'Sep 2023 – Expected 2027',
    points: [
      'Builds applied AI projects alongside the degree — image captioning, speech, NLP, and fraud detection.',
      'Five hackathons so far: one win, one national final, and two top-15 finishes.',
    ],
  },
]

export const achievements: Achievement[] = [
  { rank: 'Winner', event: '8th Mile Hackathon', host: 'RV College of Engineering', highlight: true },
  {
    rank: 'Finalist',
    event: 'Vision 2047 National Hackathon',
    host: 'RV College of Engineering · sponsored by FlairX Networks',
    highlight: true,
  },
  {
    rank: 'Top 10',
    event: 'Hackathon at Manipal Institute of Technology',
    host: 'in collaboration with Codebasics',
  },
  { rank: 'Top 15', event: 'Hackathon at VVCE', host: 'in collaboration with SYMBIOT' },
  { rank: 'Participant', event: 'Hackathon by Hackculture', host: 'on Metadomeai.com' },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: 'icon-[lucide--code]', items: ['Python', 'C', 'C++', 'Java', 'JavaScript'] },
  {
    title: 'AI & ML',
    icon: 'icon-[lucide--cpu]',
    items: [
      'CNN',
      'LSTM',
      'Transformers',
      'NLP',
      'Speech recognition',
      'Classification',
      'Pattern recognition',
    ],
  },
  {
    title: 'Web',
    icon: 'icon-[lucide--layers]',
    items: ['React.js', 'Node.js', 'FastAPI', 'HTML5', 'CSS3', 'Bootstrap', 'UI/UX design'],
  },
  {
    title: 'Databases & data',
    icon: 'icon-[lucide--database]',
    items: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Supabase', 'Pandas'],
  },
  {
    title: 'Systems & practices',
    icon: 'icon-[lucide--server]',
    items: ['REST APIs', 'Cloud platforms', 'Distributed processing', 'SDLC'],
  },
]

export const pursuits: Pursuit[] = [
  {
    icon: 'icon-[lucide--crown]',
    title: 'District-level chess',
    description: 'Competitive chess player at the district level — the reason for the knight on this site.',
  },
  {
    icon: 'icon-[lucide--heart-handshake]',
    title: 'Volunteer teacher, U&I',
    description:
      'Teaches English, Mathematics, and Science to underprivileged high-school students with the U&I NGO.',
  },
  {
    icon: 'icon-[lucide--flag]',
    title: 'Sport',
    description: 'Table tennis, cricket, football, and basketball — and a close follower of Formula 1.',
  },
]
