export type Audience = 'india' | 'international';

export interface ChallengeModule {
  title: string;
  items: string[];
}

export interface Challenge {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  modules: ChallengeModule[];
  expectedOutput: string[];
  suggestedStack: string[];
}

export interface Track {
  id: string;
  name: string;
  subtitle: string;
  targetGroup: string;
  focus: string;
  badge: string;
  description: string;
  expectedOutput: string;
  components: string[];
  audience: Audience[];
}

export interface PrizeItem {
  position: string;
  medal: string;
  amountIndia: string;
  amountInternational: string;
  perks: string[];
  color: string;
}

export interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
  startDate?: string;
  endDate?: string;
  phaseLabel?: string;
  note?: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
  designation: string;
  organization: string;
  category: 'patron' | 'international' | 'leadership' | 'organizing' | 'evaluation' | 'challenge';
  badge?: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'indian' | 'international' | 'submission';
}
