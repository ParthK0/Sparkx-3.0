import { Track, Challenge, TimelineMilestone, CommitteeMember, FAQItem, TrackDetail, PrizeTableRow, EventPlanDay, SpecialOpportunity } from '../types';

export const EVENT_DETAILS = {
  name: 'SparkX 3.0 Beyond Boundaries',
  theme: 'Beyond Boundaries',
  tagline: 'SparkX 3.0 (India) • 30-Day Innovation Challenge (Global)',
  subTagline: 'From Intelligent Software to Real-World AI Systems',
  dates: '25 & 26 November 2026',
  countdownTarget: '2026-11-25T09:00:00+05:30',
  registrationUrl: 'https://forms.gle/ci5yKTxQCprMmJj4A',
  university: 'Galgotias University',
  department: 'Department of Artificial Intelligence & Data Science',
  school: 'Galgotias University',
  location: 'Greater Noida, Uttar Pradesh, India',
  contactPerson: 'Dr. Vartika Puri',
  contactRole: 'Coordinator, 30-Day Innovation Challenge',
  contactPhone: '+91 9560430101',
  contactEmail: 'vartika.puri@galgotiasuniversity.edu.in'
};

export interface InquiryContact {
  name: string;
  role: string;
  email: string;
  phone?: string;
  image?: string;
  badge?: string;
}

export const INQUIRY_CONTACTS: InquiryContact[] = [
  {
    name: 'Dr. Vartika Puri',
    role: 'Coordinator, 30-Day Innovation Challenge',
    email: 'vartika.puri@galgotiasuniversity.edu.in',
    image: '/images/Vartika.jpg',
    badge: 'Faculty Coordinator'
  },
  {
    name: 'Dr. Manu Singh',
    role: 'Coordinator, Organizing Committee, SparkX 3.0',
    email: 'manu.singh@galgotiasuniversity.edu.in',
    badge: 'Organizing Committee Coordinator'
  },
  {
    name: 'Mr. Ansh Vashisth',
    role: 'Chairperson, IEEE GUSB',
    email: 'anshvashisth@ieee.org',
    phone: '7017123652',
    badge: 'Student Leadership'
  }
];

export const TRACKS: Track[] = [
  {
    id: 'pro',
    name: 'SparkX 3.0 — Pro (Indian Students Only)',
    subtitle: 'Advanced Project Proposal, Implementation & Research',
    targetGroup: '7th Semester (Indian Students Only)',
    focus: 'Proposal • Implementation • Validation • Research Orientation',
    badge: 'Final-Year Capstone (India)',
    description: 'The 7th Semester track is exclusively for Indian students, focusing on advanced research depth, structured validation, and deployable systems capable of evolving into publishable literature, patents, and commercial ventures.',
    expectedOutput: 'Implemented project with research component, experimental validation, and high prototype/publication potential.',
    components: [
      'Clear problem statement & clinical/industrial motivation',
      'Exhaustive literature review & research gap analysis',
      'Novel proposed methodology & algorithmic design',
      'End-to-end technical implementation & code quality',
      'Rigorous experimentation, benchmarks & comparative analysis',
      'Deployment architecture, patents & publication roadmap'
    ],
    audience: ['india']
  },
  {
    id: 'novel',
    name: 'SparkX 3.0 — Novel (Indian Students Only)',
    subtitle: 'Novel Product-Based Innovation',
    targetGroup: '3rd & 5th Semester (Indian Students Only)',
    focus: 'Product Innovation • Novelty • Differentiation • UX',
    badge: 'Intermediate Innovation (India)',
    description: 'Exclusively for Indian students in 3rd & 5th semesters. Students focus on creating real products or hardware/software prototypes that demonstrate undeniable novelty, user-centric ergonomics, and market distinctiveness.',
    expectedOutput: 'Novel product/prototype with clear differentiated features and verified user utility.',
    components: [
      'Originality & distinctiveness from existing solutions',
      'Creative technical problem solving',
      'Demonstrated technical feasibility & execution',
      'User-centric ergonomics and intuitive interface',
      'Practical utility in real-world environments',
      'Clear market or societal value proposition'
    ],
    audience: ['india']
  },
  {
    id: 'challenge30',
    name: '30-Day Innovation Challenge',
    subtitle: 'Open to Both Indian & International Students',
    targetGroup: 'UG/PG Category (Open to Indian & International)',
    focus: 'Predefined AI Challenges • Rapid Sprint • Deployed System',
    badge: 'Open to India & Global',
    description: 'A high-intensity sprint open to both Indian and international students across 4 global impact tracks. Indian teams present on campus while international teams present virtually.',
    expectedOutput: 'Functional end-to-end software/prototype integrating intelligent AI/ML models, seamless user flows, and real-time inference.',
    components: [
      'Complete end-to-end functional application',
      'Integrated AI/ML models (LLM, Vision, NLP, or RAG)',
      'Modern, accessible user interface & responsive workflow',
      'Backend infrastructure, database models & production APIs',
      'Decision-support dashboard & real-time analytics',
      'Open-source repository & comprehensive user manual'
    ],
    audience: ['india', 'international']
  }
];

export const CHALLENGES: Challenge[] = [
  {
    id: 'event-management',
    number: '01',
    title: 'AI-Powered Intelligent Event Planning & Management Platform',
    tagline: 'Autonomous orchestration for mega-conferences, hackathons & symposiums',
    description: 'Develop an end-to-end intelligent event platform that leverages AI to plan agendas, resolve scheduling conflicts, optimize physical and logistical resources, and automate real-time attendee interactions.',
    category: 'Enterprise AI & Automation',
    icon: 'calendar-check',
    modules: [
      {
        title: 'AI Event Planning Copilot',
        items: [
          'Natural language prompt-to-agenda generator',
          'Automated task breakdown and dependency trees',
          'Dynamic multi-day timeline estimation',
          'Venue capacity & breakout room recommendations'
        ]
      },
      {
        title: 'Intelligent Scheduling & Conflict Resolution',
        items: [
          'Flyer & automated dynamic registration form generator',
          'Constraint satisfaction scheduler (speaker, track, room)',
          'Speaker availability & flight/commute buffer handling',
          'Real-time conflict detection & instant reschedule proposals'
        ]
      },
      {
        title: 'AI-Based Resource Optimization',
        items: [
          'Predictive catering, equipment & badge allocation',
          'Volunteer and stage crew staffing forecast models',
          'Historical registration vs turn-out shrinkage modeling',
          'Cost and budgetary optimization alerts'
        ]
      },
      {
        title: 'Personalized Participant Experience',
        items: [
          'Smart session & workshop recommendation engine',
          'AI-powered 1-on-1 attendee networking matchmaking',
          'Personalized agenda sync with calendar exports (ICS/Google)'
        ]
      },
      {
        title: 'AI Communication Agent & Post-Event Analytics',
        items: [
          '24/7 multilingual participant query support chatbot',
          'Context-aware push reminders & schedule delta alerts',
          'Automated feedback sentiment & thematic analysis',
          'Automated certificate generation & executive summary report'
        ]
      }
    ],
    expectedOutput: [
      'Fully working web/mobile portal with organizer & attendee modes',
      'Live scheduling engine with interactive timeline viewer',
      'Integrated conversational AI agent trained on event data',
      'Post-event analytical dashboard with PDF report generation'
    ],
    suggestedStack: ['React / Next.js', 'Python FastAPI', 'OpenAI / Gemini / Llama 3', 'PostgreSQL / Supabase', 'Tailwind / Modern CSS']
  },
  {
    id: 'career-readiness',
    number: '02',
    title: 'AI-Powered Interview Preparation & Career Readiness Assistant',
    tagline: 'Hyper-personalized mock interviews, speech fluency & resume auditing',
    description: 'Develop an intelligent career readiness ecosystem that analyzes candidate profiles, conducts realistic adaptive interviews across HR and technical domains, evaluates responses in real-time, and generates actionable growth roadmaps.',
    category: 'EdTech & HR Tech',
    icon: 'briefcase',
    modules: [
      {
        title: 'AI Resume Intelligence & Skill Gap Extraction',
        items: [
          'Deep semantic parsing of multi-page PDF/Word resumes',
          'Entity extraction of tech stacks, projects, and certifications',
          'Job description vs resume cosine similarity & gap scoring',
          'Actionable bullet-point revision suggestions with STAR framing'
        ]
      },
      {
        title: 'Personalized Interview Question Generator',
        items: [
          'Dynamic questioning derived directly from candidate projects',
          'Adaptive difficulty climbing based on prior answers',
          'Role-specific tracks: System Design, Frontend, ML, HR, Leadership',
          'Deep-dive follow-up generation ("Why did you choose Redis over RabbitMQ?")'
        ]
      },
      {
        title: 'Conversational AI Mock Interviewer',
        items: [
          'Realistic voice-to-voice & text-based interview simulation',
          'Behavioral probing using the STAR (Situation, Task, Action, Result) rubric',
          'Stress-testing & counter-questioning simulation'
        ]
      },
      {
        title: 'Intelligent Answer Evaluation',
        items: [
          'Semantic accuracy & conceptual keyword completeness check',
          'Clarity, conciseness, and structural delivery scoring',
          'Immediate constructive feedback with model sample answers'
        ]
      },
      {
        title: 'Speech, Prosody & Communication Analytics',
        items: [
          'Speaking cadence (WPM) & prolonged pause detection',
          'Filler word counter (um, ah, like, basically)',
          'Observable vocal confidence and tonality indicators'
        ]
      },
      {
        title: 'Personalized Career Coach & Milestone Tracking',
        items: [
          'Longitudinal progress tracking across sequential interview sessions',
          'Targeted micro-learning curriculum & curated documentation recommendations'
        ]
      }
    ],
    expectedOutput: [
      'Interactive interview room with live speech recording & transcription',
      'Resume upload & ATS-style gap analysis dashboard',
      'Scorecard breakdown (Technical, Delivery, Communication, Relevance)',
      'Customized 14-day study plan generator'
    ],
    suggestedStack: ['Web Audio API / WebRTC', 'Whisper API / Deepgram', 'LangChain / LlamaIndex', 'Node.js / Python', 'Chart.js']
  },
  {
    id: 'lab-spoc',
    number: '03',
    title: 'AI-Powered Intelligent Lab SPOC (Virtual Lab Ambassador)',
    tagline: 'Autonomous representative for accreditation, industry & research lab tours',
    description: 'Create an intelligent virtual Single Point of Contact (SPOC) that acts as an interactive ambassador for advanced research labs during academic visits, NBA/NAAC accreditation reviews, and corporate partner inspections.',
    category: 'Smart Campus & Digital Twin',
    icon: 'microchip',
    modules: [
      {
        title: 'AI Virtual Lab Guide & Audience-Adaptive Persona',
        items: [
          'Interactive tour guide with 3D/virtual panoramic lab navigation',
          'Audience detection & adaptation (Undergrad, Industry Executive, NBA Auditor)',
          'Contextual welcome briefs tailored to specific delegation agendas'
        ]
      },
      {
        title: 'Conversational Voice & Multilingual Assistant',
        items: [
          'Natural hands-free voice interaction and physical kiosk mode',
          'Maintains conversational context over multi-turn technical dialogues',
          'Multilingual support for international visiting scientists'
        ]
      },
      {
        title: 'RAG-Based Lab Knowledge System',
        items: [
          'Grounded retrieval from verified lab SOPs, patent filings & equipment specs',
          'Hardware specification lookup (GPUs, FPGA rigs, Oscilloscopes, IoT nodes)',
          'Live researcher publication & citation index query engine',
          'Secure administrative portal for real-time document sync'
        ]
      },
      {
        title: 'Interactive Project Demonstrator',
        items: [
          'Interactive showcase of student/faculty capstone innovations',
          'Instant retrieval of architecture diagrams, benchmark videos & live demo URLs',
          'Automated explanation of problem statements and societal impacts'
        ]
      },
      {
        title: 'Visitor Engagement Analytics & Adaptive Presentations',
        items: [
          'Visitor query heatmaps & telemetry (most explored projects/tools)',
          'Dynamic pitch generator: 2-min elevator, 5-min executive, 15-min deep-dive',
          'Automatic visitor summary digest sent to lab director'
        ]
      }
    ],
    expectedOutput: [
      'Kiosk-ready interactive dashboard with speech recognition and synthesis',
      'RAG pipeline verified with zero hallucinations on lab specs',
      'Interactive showcase gallery of active laboratory projects',
      'Analytics portal highlighting visitor interest trends'
    ],
    suggestedStack: ['Three.js / WebGL / Canvas', 'Vector DB (Chroma / Pinecone)', 'FastAPI / LangChain', 'Text-to-Speech (ElevenLabs / WebSpeech)', 'Modern CSS']
  },
  {
    id: 'university-copilot',
    number: '04',
    title: 'AI University Copilot & Intelligent Campus Platform',
    tagline: 'Unified intelligence powering academic advising, grievances & campus ops',
    description: 'Develop an enterprise AI campus copilot that unifies student academic guidance, grievance redressing, and predictive administrative operational intelligence across the institutional ecosystem.',
    category: 'EdTech & Smart Governance',
    icon: 'graduation-cap',
    modules: [
      {
        title: 'AI Student & Administrative Copilot',
        items: [
          'Strictly grounded Q&A over official university ordinances, grading policies & rules',
          'Course registration, exam timetable & hall ticket assistance',
          'Context-aware routing of complex inquiries to respective Dean/HOD offices'
        ]
      },
      {
        title: 'Academic Intelligence & Early-Warning System',
        items: [
          'Continuous student grade and attendance trajectory modeling',
          'Early intervention alert triggers for students at risk of detentions',
          'Hyper-personalized elective and prerequisite path recommendations'
        ]
      },
      {
        title: 'Intelligent Grievance & Complaint Redressal',
        items: [
          'NLP-based triage, sentiment scoring, and urgency classification',
          'Automated ticket routing to hostel, IT, fee, or exam cells',
          'AI-synthesized ticket summaries & automated status updates for students'
        ]
      },
      {
        title: 'Campus Operational Analytics & Decision Support',
        items: [
          'Natural language query engine over institutional datasets (e.g., "Compare library footfall vs midterm exam scores")',
          'Classroom and lab real-estate utilization optimization',
          'Predictive campus transit and dining demand modeling'
        ]
      }
    ],
    expectedOutput: [
      'Role-based multi-tenant portal (Student, Faculty, Dean/Admin)',
      'Policy-compliant conversational interface with source document citations',
      'Predictive student retention / academic health scorecard',
      'Automated administrative ticketing flow with priority flagging'
    ],
    suggestedStack: ['React / Vite', 'Python / Django / FastAPI', 'PostgreSQL / pgvector', 'Hugging Face / OpenAI', 'Tailwind / Glassmorphism']
  }
];

export const PRIZES = {
  indian: [
    {
      position: 'First Prize',
      place: '1st',
      medal: '🥇',
      amount: '₹10,000',
      currency: 'INR',
      perks: [
        'Certificate of Excellence & Grand Trophy',
        'Direct Incubation Consideration at University E-Cell',
        'Patent Filing & Publication Guidance from Faculty Mentors',
        'Sponsorship support for National Hackathons'
      ],
      color: 'from-amber-400 to-yellow-600'
    },
    {
      position: 'Second Prize',
      place: '2nd',
      medal: '🥈',
      amount: '₹8,000',
      currency: 'INR',
      perks: [
        'Certificate of Merit & Silver Trophy',
        'Lab Infrastructure & Cloud Credits Access',
        'Fast-track review for Conference Publication',
        'Industry Expert Mentorship Sessions'
      ],
      color: 'from-slate-300 to-slate-500'
    },
    {
      position: 'Third Prize',
      place: '3rd',
      medal: '🥉',
      amount: '₹5,000',
      currency: 'INR',
      perks: [
        'Certificate of Merit & Bronze Trophy',
        'Prototype Development Acceleration Grant Support',
        'Featured Spotlight on University Portals',
        'Exclusive Workshop Access'
      ],
      color: 'from-amber-700 to-yellow-900'
    }
  ],
  international: [
    {
      position: 'First Prize',
      place: '1st',
      medal: '🥇',
      amount: 'USD 150',
      currency: 'USD',
      perks: [
        'International Winner Certificate of Honor & Digital Badge',
        'Opportunity for Joint International Research Publication',
        'Global Mentorship from Silicon Valley & International Tech Executives',
        'Featured International Spotlight & Media Release'
      ],
      color: 'from-amber-400 to-yellow-600'
    },
    {
      position: 'Second Prize',
      place: '2nd',
      medal: '🥈',
      amount: 'USD 100',
      currency: 'USD',
      perks: [
        'International Runner-Up Certificate of Honor',
        'Cross-border Collaborative Research Network Access',
        'Mentorship for Startup Incubation & Tech Acceleration',
        'Exclusive Industry Networking Session'
      ],
      color: 'from-slate-300 to-slate-500'
    },
    {
      position: 'Third Prize',
      place: '3rd',
      medal: '🥉',
      amount: 'USD 80',
      currency: 'USD',
      perks: [
        'International 2nd Runner-Up Certificate of Honor',
        'Technical Review & Roadmap Guidance from AI Experts',
        'Community Recognition & Global Hackathon Network Access',
        'Digital Certificate of Innovation'
      ],
      color: 'from-amber-700 to-yellow-900'
    }
  ]
};

export const TIMELINE: TimelineMilestone[] = [
  {
    date: '25 September 2026',
    startDate: '2026-09-25T00:00:00+05:30',
    endDate: '2026-10-10T23:59:59+05:30',
    phaseLabel: 'Phase 1: Registration Window',
    title: 'Registration Opens',
    description: 'Online registration begins for Indian tracks (Pro & Novel) and the Global 30-Day Innovation Challenge.',
    status: 'active'
  },
  {
    date: '10 October 2026',
    startDate: '2026-10-10T00:00:00+05:30',
    endDate: '2026-10-11T23:59:59+05:30',
    phaseLabel: 'Phase 2: Idea Submission Deadline',
    title: 'Registration & Idea Submission Deadline',
    description: 'Teams must submit their team roster, challenge selection, and initial project concept/synopsis.',
    status: 'upcoming'
  },
  {
    date: '12 October 2026',
    startDate: '2026-10-12T00:00:00+05:30',
    endDate: '2026-10-14T23:59:59+05:30',
    phaseLabel: 'Phase 3: Idea Screening & Approval',
    title: 'Idea Screening & Approval',
    description: 'Academic and expert screening committee reviews all submissions and issues official approvals to proceed.',
    status: 'upcoming'
  },
  {
    date: '15 October – 15 November 2026',
    startDate: '2026-10-15T00:00:00+05:30',
    endDate: '2026-11-15T23:59:59+05:30',
    phaseLabel: 'Phase 4: 30-Day Innovation Sprint',
    title: '30-Day Innovation Challenge Sprint',
    description: 'Intense development sprint where teams build functional AI prototypes with milestone check-ins and expert guidance.',
    status: 'upcoming',
    note: 'Sprint window: 15 Oct – 15 Nov 2026 (Preliminary planning indicated 01 Oct – 30 Oct in early drafts; official window confirmed as 15 Oct – 15 Nov).'
  },
  {
    date: '25 & 26 November 2026',
    startDate: '2026-11-25T00:00:00+05:30',
    endDate: '2026-11-26T23:59:59+05:30',
    phaseLabel: 'Phase 5: Grand Exhibition Showcase',
    title: 'SparkX 3.0 Grand Exhibition & Showcase',
    description: 'Day 1: SparkX Pro & Novel on-campus showcase. Day 2: International 30-Day Challenge online & offline grand evaluations.',
    status: 'upcoming'
  }
];

export const COMMITTEE: CommitteeMember[] = [
  {
    name: 'Prof. (Dr.) K. Mallikharjuna Babu',
    role: 'Patron',
    designation: 'Vice Chancellor',
    organization: 'Galgotias University, India',
    category: 'patron',
    badge: 'Vice Chancellor',
    image: '/images/Prof.(Dr.) K. Mallikarjuna Babu.jpg'
  },
  {
    name: 'Prof. (Dr.) Avadhesh Kumar',
    role: 'Patron',
    designation: 'Pro-Vice Chancellor',
    organization: 'Galgotias University, India',
    category: 'patron',
    badge: 'Pro-VC',
    image: '/images/Prof. (Dr.) Avadhesh Kumar.png'
  },
  {
    name: 'Prof. (Dr.) Nitin Gaur',
    role: 'Patron',
    designation: 'Registrar',
    organization: 'Galgotias University, India',
    category: 'patron',
    badge: 'Registrar',
    image: '/images/Prof. (Dr.) Nitin Gaur.jpg'
  },
  {
    name: 'Mr. Kothandarman Sridharan',
    role: 'International Expert & Keynote',
    designation: 'CEO, CleverInsight | Former Advisor, BrightInsight (San Jose) | Former CEO, Mphasis-BFL (USA)',
    organization: 'USA / Global',
    category: 'international',
    badge: 'Silicon Valley Veteran',
    image: '/images/kothandharman.jpg'
  },
  {
    name: 'Prof. (Dr.) Ciro Rodriguez Rodriguez',
    role: 'International Expert & Academic Advisor',
    designation: 'Director – Postgraduate Programs',
    organization: 'UNMSM University, Peru',
    category: 'international',
    badge: 'Global Academic Advisor',
    image: '/images/CIRO RODRIGUEZ RODRIGUEZ.jpg'
  },
  {
    name: 'Prof. (Dr.) Manish Raj',
    role: 'Dean',
    designation: 'Dean, Artificial Intelligence & Data Science',
    organization: 'Galgotias University, India',
    category: 'leadership',
    badge: 'Dean',
    image: '/images/manish.jpg'
  },
  {
    name: 'Prof. (Dr.) Saurabh Singh',
    role: 'Associate Dean',
    designation: 'Associate Dean, Department of AI & Data Science',
    organization: 'Galgotias University, India',
    category: 'leadership',
    badge: 'Associate Dean',
    image: '/images/saurabh.jpg'
  },
  {
    name: 'Dr. Vartika Puri',
    role: 'Convener & Primary Coordinator',
    designation: 'Convener – 30-Day Innovation Challenge',
    organization: 'Department of AI & Data Science, SoAI, Galgotias University',
    category: 'challenge',
    badge: '30-Day Challenge Lead',
    image: '/images/Vartika.jpg'
  },
  {
    name: 'Dr. Manu Singh',
    role: 'Convener',
    designation: 'Faculty, Department of AI & Data Science',
    organization: 'Galgotias University, India',
    category: 'organizing',
    badge: 'Convener',
    image: '/images/manu.jpg'
  },
  {
    name: 'Dr. Isha Chopra',
    role: 'Co-Convener',
    designation: 'Faculty, Department of AI & Data Science',
    organization: 'Galgotias University, India',
    category: 'organizing',
    badge: 'Co-Convener',
    image: '/images/isha.jpg'
  },
  {
    name: 'Dr. Amit Batra',
    role: 'Technical Lead',
    designation: 'Faculty, Department of AI & Data Science',
    organization: 'Galgotias University, India',
    category: 'organizing',
    badge: 'Technical Lead',
    image: '/images/amit.jpg'
  },
  {
    name: 'Ms. Meenakshi Srivastava',
    role: 'Convener: Publication & Promotion',
    designation: 'Faculty, Department of AI & Data Science',
    organization: 'Galgotias University, India',
    category: 'organizing',
    badge: 'Publications Lead',
    image: '/images/Meena.jpg'
  },
  {
    name: 'Dr. Shachi Mall',
    role: 'Convener – Evaluation Committee',
    designation: 'Department of AI and Data Science, SoAI',
    organization: 'Galgotias University, India',
    category: 'evaluation',
    badge: 'Evaluation Lead',
    image: '/images/shachi.jpg.jpg'
  },
  {
    name: 'Dr. Anuradha',
    role: 'Co-Convener – Evaluation Committee',
    designation: 'Department of AI and Data Science, SoAI',
    organization: 'Galgotias University, India',
    category: 'evaluation',
    badge: 'Evaluation',
    image: '/images/anuradha.png'
  },
  {
    name: 'Dr. Vipin Rai',
    role: 'Co-Convener – Evaluation Committee',
    designation: 'Department of AI and Data Science, SoAI',
    organization: 'Galgotias University, India',
    category: 'evaluation',
    badge: 'Evaluation',
    image: '/images/vipin.jpg'
  }
];

export const EVALUATION_CRITERIA = [
  {
    title: 'Problem Identification & Real-World Relevance',
    desc: 'Clarity of the core problem, user empathy, societal/industrial impact, and identified research gap.',
    metric: 'Depth & Context'
  },
  {
    title: 'Innovation & Technical Originality',
    desc: 'Novelty of approach, creative engineering, differentiation against existing benchmarks and tools.',
    metric: 'Novelty & IP'
  },
  {
    title: 'Technical Implementation & Code Architecture',
    desc: 'Code quality, software engineering practices, pipeline efficiency, architectural robustness, and API security.',
    metric: 'Architecture'
  },
  {
    title: 'Completeness & Product Functionality',
    desc: 'End-to-end working state, UI/UX polish, bug-free interactive workflows, and user ergonomics.',
    metric: 'Working Prototype'
  },
  {
    title: 'Effective AI/ML Integration & Research Depth',
    desc: 'Meaningful utilization of AI/ML, LLMs, Computer Vision or RAG models with tangible inference accuracy.',
    metric: 'AI Utility'
  },
  {
    title: 'User / Market Potential & Scalability',
    desc: 'Deployment viability, modular cloud infrastructure, startup feasibility, and addressable market size.',
    metric: 'Scalability'
  },
  {
    title: 'Live Demonstration & Technical Defense',
    desc: 'Poise and technical command during the demo, response to judges’ counter-questions, and pitch clarity.',
    metric: 'Presentation'
  },
  {
    title: 'Future Scope & Publication / Patent Horizon',
    desc: 'Feasibility of progressing into IEEE/Scopus publications, patent filings, or external startup incubation.',
    metric: 'Future Trajectory'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'general',
    question: 'Who is eligible for SparkX 3.0 vs the 30-Day Innovation Challenge?',
    answer: 'SparkX 3.0 (Pro and Novel tracks) is hosted on-campus exclusively for Indian university students. In contrast, the 30-Day Innovation Challenge is open to BOTH Indian and International students worldwide, allowing global teams to compete in cutting-edge AI domains.'
  },
  {
    category: 'general',
    question: 'What is SparkX 3.0 Beyond Boundaries?',
    answer: 'SparkX 3.0 Beyond Boundaries is a premier innovation initiative hosted by the Department of Artificial Intelligence & Data Science at Galgotias University with Quanta. It features two streams: the flagship SparkX 3.0 on-campus project challenge for Indian students, and the global 30-Day Innovation Challenge open to both Indian and international students.'
  },
  {
    category: 'general',
    question: 'What are the main dates?',
    answer: 'Registrations open on 25 September 2026. Idea Submission deadline is 10 October 2026. The 30-Day Challenge sprint runs from 15 October to 15 November 2026. The Grand Exhibition and Final Evaluation take place on 25 & 26 November 2026.'
  },
  {
    category: 'general',
    question: 'What is the team size allowed?',
    answer: 'For the 30-Day Innovation Challenge (open to Indian & international students), teams can comprise 1 to 4 students. For internal SparkX 3.0 semester tracks (Indian students), teams follow standard departmental project team guidelines.'
  },
  {
    category: 'indian',
    question: 'Which track should I register for as an Indian student?',
    answer: 'Indian students can participate in SparkX 3.0 (7th Semester Pro track or 3rd/5th Semester Novel track) as well as the 30-Day Innovation Challenge. While SparkX 3.0 is exclusively for Indian students, the 30-Day Innovation Challenge is open to both Indian and international participants.'
  },
  {
    category: 'indian',
    question: 'Do Indian teams participate physically or online?',
    answer: 'Teams participating from India attend the Grand Exhibition offline at Galgotias University campus, Greater Noida on 25–26 November 2026 to demonstrate their prototypes live to the evaluation panel and industry leaders.'
  },
  {
    category: 'indian',
    question: 'What are the prize amounts for Indian participants?',
    answer: 'Across each category (Pro, Novel, and 30-Day Challenge), Indian winners receive: 1st Prize: ₹10,000 | 2nd Prize: ₹8,000 | 3rd Prize: ₹5,000, along with trophies, certificates, incubation opportunities, and patent assistance.'
  },
  {
    category: 'international',
    question: 'Can international students participate in SparkX 3.0?',
    answer: 'SparkX 3.0 (Pro and Novel tracks) is exclusively for Indian students. However, international students from accredited universities worldwide are warmly invited to join the 30-Day Innovation Challenge! Participation is 100% online with zero travel required.'
  },
  {
    category: 'international',
    question: 'How do international teams present and showcase their work in the 30-Day Challenge?',
    answer: 'International teams submit their deliverables (presentation, code repository, user manual, and video demonstration) and present their projects virtually via video conference to our international evaluation panel on Day 2 of the exhibition.'
  },
  {
    category: 'international',
    question: 'What are the international prizes for the 30-Day Challenge?',
    answer: 'International winners of the 30-Day Innovation Challenge receive USD cash awards: 1st Prize: USD 150 | 2nd Prize: USD 100 | 3rd Prize: USD 80, along with digital certificates of honor, global networking, and opportunities for joint research publications.'
  },
  {
    category: 'submission',
    question: 'What are the mandatory deliverables for the 30-Day Challenge?',
    answer: 'Teams must deliver four core items: (1) Project Presentation (Slide Deck), (2) Live Working Prototype / Product Demonstration, (3) Public GitHub Repository with clear commit history, and (4) Comprehensive User Manual / Setup Guide.'
  },
  {
    category: 'submission',
    question: 'What technologies are allowed?',
    answer: 'Teams have full architectural freedom. Modern stacks such as Python (FastAPI/Flask/Django), React, Next.js, Flutter, PyTorch, TensorFlow, Hugging Face, OpenAI APIs, WebRTC, Edge AI, IoT microcontrollers, and modern databases are all welcomed.'
  }
];

export const TRACK_DETAILS: TrackDetail[] = [
  {
    id: 'pro',
    name: 'SparkX 3.0 - Pro',
    sectionNumber: '3.1',
    targetGroup: '7th Semester',
    primaryFocus: 'Advanced Project Proposal, Implementation & Research',
    expectedOutput: 'Implemented project, research component, prototype/publication potential',
    eligibility: 'Exclusively for Indian Students (Final-Year Capstone)',
    audienceBadge: '🇮🇳 Indian Students Only · 7th Sem',
    description: 'The 7th Semester track focuses on advanced project proposal, implementation, and research-oriented development. Students are evaluated on deep algorithmic rigor, research gap validation, and systems that can translate into patents, publications, and venture-backed prototypes.',
    highlights: [
      'Define a clear problem statement and clinical/industrial research motivation.',
      'Conduct an exhaustive literature review and articulate identified research gaps.',
      'Propose a novel methodology, algorithmic framework, or architectural design.',
      'Execute end-to-end technical implementation and rigorous experimental evaluation.',
      'Benchmark against existing baselines and demonstrate tangible prototype/publication potential.'
    ],
    deliverables: [
      'Comprehensive Research & Implementation Report (IEEE conference format)',
      'Fully functional software / hardware system demo with live execution',
      'Source code repository with clean architecture, tests, and documentation',
      'Research paper draft formatted for Scopus / IEEE indexed submission',
      'Patent disclosure draft (for novel mechanisms / systems)'
    ],
    prizes: {
      india: { first: '₹10,000', second: '₹8,000', third: '₹5,000' }
    },
    framework: {
      teamSize: 'Departmental project team guidelines',
      eligibility: 'Final-year undergraduate students (7th Sem)',
      techStack: 'Open choice: Deep Learning, System Arch, Cloud, Embedded',
      mode: 'Offline On-Campus Exhibition (Galgotias University)'
    }
  },
  {
    id: 'novel',
    name: 'SparkX 3.0 - Novel',
    sectionNumber: '3.2',
    targetGroup: '3rd & 5th Semester',
    primaryFocus: 'Novel Product-Based Innovation',
    expectedOutput: 'Novel product/prototype with differentiated features',
    eligibility: 'Exclusively for Indian Students (3rd & 5th Semesters)',
    audienceBadge: '🇮🇳 Indian Students Only · 3rd & 5th Sem',
    description: 'The 3rd and 5th Semester track centers on novel product-based innovations. Students focus on building working hardware/software products that demonstrate clear originality, distinctive user experience, and practical real-world utility.',
    highlights: [
      'Demonstrate originality, creativity, and differentiation from existing solutions.',
      'Apply creative problem-solving to practical industrial, campus, or societal challenges.',
      'Establish technical feasibility, solid architectural foundation, and execution quality.',
      'Design intuitive, user-centric ergonomics and seamless human-machine interfaces.',
      'Deliver a clear societal, environmental, or economic value proposition.'
    ],
    deliverables: [
      'Working Product Prototype (Hardware / Software / IoT / Embedded)',
      'Product Design Document (PDD) with user journey maps and architectural diagrams',
      'Interactive product demonstration / high-fidelity walkthrough video',
      'Source code repository with containerized deployment scripts'
    ],
    prizes: {
      india: { first: '₹10,000', second: '₹8,000', third: '₹5,000' }
    },
    framework: {
      teamSize: 'Standard departmental project teams',
      eligibility: 'Pre-final & intermediate undergraduate students (3rd & 5th Sem)',
      techStack: 'Full-stack Web, Mobile, IoT, Computer Vision, Embedded systems',
      mode: 'Offline On-Campus Exhibition (Galgotias University)'
    }
  },
  {
    id: 'challenge30',
    name: 'SparkX 3.0 - 30-Day Innovation Challenge',
    sectionNumber: '3.3',
    targetGroup: 'Open category of UG/PG students from National/International Institutions',
    primaryFocus: 'Participants work on predefined challenges across 4 mission-critical AI domains',
    expectedOutput: 'Functional research / product / prototype / application',
    eligibility: 'Open to both Indian & International students worldwide',
    audienceBadge: '🌍 Global & National · Open Category',
    description: 'A high-velocity 30-day build sprint open to students globally. Participants build end-to-end intelligent systems targeting 4 predefined domain blueprints. Indian teams present on campus while international teams present 100% virtually.',
    highlights: [
      'Focus on 4 Predefined Problem Statements: Event Planning, Career Readiness, Virtual Lab SPOC, University Copilot.',
      'Complete freedom of technology stack (AI/ML, Web, Mobile, Cloud, Embedded).',
      'Interdisciplinary teams of 1 to 4 students from national or international institutions.',
      'Dual presentation tracks: On-campus physical expo for Indian teams; virtual showcase for international teams.',
      'Dual prize pools in INR (for Indian teams) and USD (for international teams).'
    ],
    deliverables: [
      '1. Presentation Deck (PPT / PDF) detailing problem, architecture, benchmarks, and impact',
      '2. Live Working Product / Prototype demonstrating full user flow and AI inference',
      '3. Public GitHub Repository with comprehensive commit history and clean documentation',
      '4. Comprehensive User Manual / Setup Guide with API specs and deployment steps'
    ],
    prizes: {
      india: { first: '₹10,000', second: '₹8,000', third: '₹5,000' },
      abroad: { first: 'USD 150', second: 'USD 100', third: 'USD 80' }
    },
    framework: {
      teamSize: '1 to 4 Members',
      eligibility: 'UG / PG Students worldwide (National & International)',
      techStack: 'Full architectural freedom (Python, Node, React, PyTorch, LLMs, Vector DBs)',
      mode: 'Indian teams: Offline on-campus | International teams: 100% Virtual',
      duration: '01 October – 30 October 2026'
    }
  }
];

export const PRIZE_TABLE_DATA: PrizeTableRow[] = [
  {
    track: 'SparkX 3.0 - Pro',
    targetGroup: '7th Semester',
    primaryFocus: 'Proposal, Implementation & Research',
    expectedOutput: 'Implemented project, research component, prototype/publication potential',
    prizeIndia: { first: '₹10,000', second: '₹8,000', third: '₹5,000' },
    prizeAbroad: null
  },
  {
    track: 'SparkX 3.0 - Novel',
    targetGroup: '3rd & 5th Semester',
    primaryFocus: 'Novel Product-Based Innovation',
    expectedOutput: 'Novel product/prototype with differentiated features',
    prizeIndia: { first: '₹10,000', second: '₹8,000', third: '₹5,000' },
    prizeAbroad: null
  },
  {
    track: 'SparkX 3.0 - 30-Day Challenge',
    targetGroup: 'Open category (UG/PG National & International)',
    primaryFocus: 'Participants will work on predefined challenges',
    expectedOutput: 'Functional research / product / prototype / application',
    prizeIndia: { first: '₹10,000', second: '₹8,000', third: '₹5,000' },
    prizeAbroad: { first: 'USD 150', second: 'USD 100', third: 'USD 80' }
  }
];

export const EVENT_EXECUTION_PLAN: EventPlanDay[] = [
  {
    day: 'Day 1',
    date: '25 November 2026',
    title: 'On-Campus Grand Showcase & Jury Round 1',
    sessions: [
      {
        time: '09:00 AM – 10:30 AM',
        title: 'Grand Inauguration & Keynote Address',
        desc: 'Opening ceremonies, lighting of lamp, addresses by University Leadership, Dean SCSE, and distinguished international guests.',
        mode: 'Auditorium'
      },
      {
        time: '10:30 AM – 01:30 PM',
        title: 'On-Campus Project Exhibition & Live Demos',
        desc: 'Interactive physical booth displays for Pro (7th Sem) and Novel (3rd & 5th Sem) tracks with working hardware and software demos.',
        mode: 'Exhibition Hall'
      },
      {
        time: '02:00 PM – 04:30 PM',
        title: 'Round 1 Jury Evaluations & Code Audits',
        desc: 'Technical defense before senior faculty and industry juries: code inspection, architectural verification, and literature defense.',
        mode: 'Evaluation Rooms'
      },
      {
        time: '04:30 PM – 05:30 PM',
        title: 'Industry Mentorship Sessions & Tech Exhibits',
        desc: 'Fireside discussions with technology leaders, AI startup founders, and incubation advisors.',
        mode: 'Seminar Hall'
      }
    ]
  },
  {
    day: 'Day 2',
    date: '26 November 2026',
    title: 'Global Virtual Showcase & Grand Valedictory',
    sessions: [
      {
        time: '10:00 AM – 01:00 PM',
        title: 'Global Virtual Showcase (30-Day International Challenge)',
        desc: 'Live virtual presentations by shortlisted international teams across timezones before the international jury panel.',
        mode: 'Virtual / Web Conference'
      },
      {
        time: '01:30 PM – 03:30 PM',
        title: 'Final Grand Pitching Round',
        desc: 'Top shortlisted finalists from all tracks present 5-minute lightning pitches before the Grand Cross-Track Jury.',
        mode: 'Main Auditorium'
      },
      {
        time: '03:30 PM – 05:00 PM',
        title: 'Grand Valedictory & Award Ceremony',
        desc: 'Announcement of Track Winners, trophy presentations, cash awards (INR & USD), publication grants, and closing remarks.',
        mode: 'Grand Auditorium & Live Stream'
      }
    ]
  }
];

export const EVALUATION_RUBRIC_CRITERIA = [
  {
    title: 'Problem Clarity & Research / Market Motivation',
    weight: '20%',
    desc: 'Clarity of problem formulation, domain understanding, user/industry pain point identification, and literature/market gap analysis.'
  },
  {
    title: 'Novelty & Creative Innovation',
    weight: '25%',
    desc: 'Originality of the conceptual approach, algorithmic or architectural innovation, and demonstrable differentiation from existing solutions.'
  },
  {
    title: 'Technical Rigor & Engineering Quality',
    weight: '25%',
    desc: 'Robustness of code architecture, API design, database schemas, test coverage, model validation, and system performance benchmarks.'
  },
  {
    title: 'Functional Working Prototype & UX',
    weight: '20%',
    desc: 'Live operational demonstration, end-to-end workflow completion, edge-case resilience, and accessible, intuitive user experience.'
  },
  {
    title: 'Presentation & Technical Defense',
    weight: '10%',
    desc: 'Clarity and articulation of team defense, slide deck quality, repository documentation, and response to jury questions.'
  }
];

export const SPECIAL_OPPORTUNITIES: SpecialOpportunity[] = [
  {
    icon: '📄',
    title: 'Research Paper Development',
    description: 'Direct collaboration and structured mentorship with Galgotias University research faculty to transform top capstones into Scopus / IEEE indexed publications.',
    tag: 'Research & Publications'
  },
  {
    icon: '🛡️',
    title: 'Patent Filing Assistance',
    description: 'Expert guidance from university IPR cell for drafting, prior-art searching, and filing Indian provisional patent disclosures for novel system designs.',
    tag: 'Intellectual Property'
  },
  {
    icon: '🚀',
    title: 'Direct Incubation Pipeline',
    description: 'Direct fast-track consideration for pre-incubation, prototyping seed grants, and co-working space at Galgotias University Incubation Centre (E-Cell).',
    tag: 'Startup Incubation'
  },
  {
    icon: '💼',
    title: 'Industry & Venture Showcase',
    description: 'High-visibility showcase slots before venture capital partners, angel investors, and fast-track hiring pipelines for cutting-edge tech roles.',
    tag: 'Industry Connect'
  }
];

