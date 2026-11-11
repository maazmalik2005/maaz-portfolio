export type OptionalString = string | undefined;

export type ServiceGroup =
  | "strategy-seo"
  | "web"
  | "social-paid"
  | "brand";

export type Proficiency = "Professional" | "Working knowledge" | "Currently learning";

export type ProjectType =
  | "Client Project"
  | "Paid Client Project"
  | "Personal Partnership Project"
  | "Personal Brand Project"
  | "Practice Project"
  | "Concept Project";

export interface SiteProfile {
  name: string;
  title: string;
  descriptor: string;
  positioning: string;
  brandEssence: string;
  brandPersonality: string[];
  brandPromise: string;
  location: string;
  availability: string;
  experience: string;
  education: string;
  focusAreas: string[];
  email?: OptionalString;
  phone?: OptionalString;
  linkedin?: OptionalString;
  github?: OptionalString;
  instagram?: OptionalString;
  whatsapp?: OptionalString;
  resumeFile?: OptionalString;
  profileImage?: OptionalString;
  aboutImage?: OptionalString;
  languages: string[];
  tagline: string;
  hero: {
    label: string;
    headline: string;
    subheadline: string;
    description: string;
    availabilityLabel: string;
    expertise: string[];
  };
  achievements: string[];
  about: {
    sectionLabel: string;
    heading: string;
    paragraphs: string[];
    howIWork: Array<{ title: string; description: string }>;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    message: string;
    responseTime?: OptionalString;
    availability: string;
  };
}

export interface Service {
  id: string;
  group: ServiceGroup;
  icon: string;
  title: string;
  description: string;
  keyActivities: string[];
  businessBenefits: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  proficiency: Proficiency;
}

export interface LearningSkill {
  name: string;
  proficiency: "Currently learning";
}

export interface Experience {
  designation: string;
  employmentType: string;
  duration: string;
  startDate?: OptionalString;
  location: string;
  summary: string;
  responsibilities: string[];
  tools: string[];
}

export interface ProjectCaseStudy {
  overview: string;
  objective: string;
  role: string;
  roleConfirmed: boolean;
  servicesProvided?: string[];
  technologies: string[];
  technologiesConfirmed: boolean;
  workCompleted: string[];
  challengesAndSolutions?: Array<{ challenge: string; solution: string }>;
  images: Array<{ src: string; alt: string }>;
  results?: string[];
  clientFeedback?: string;
}

export interface Project {
  slug: string;
  name: string;
  type: ProjectType;
  typeConfirmed: boolean;
  industry?: OptionalString;
  location?: OptionalString;
  liveUrl?: OptionalString;
  summary: string;
  caseStudy: ProjectCaseStudy;
}

export interface Education {
  degree: string;
  institution: string;
  startYear?: OptionalString;
  endYear?: OptionalString;
  focusAreas: string[];
}

export interface LearningItem {
  title: string;
  description?: OptionalString;
}

export interface CybersecurityTrack {
  completedCourses: number;
  provider?: OptionalString;
  courseTitles: string[];
  completionDates: string[];
}

export interface Certification {
  title?: OptionalString;
  issuer?: OptionalString;
  date?: OptionalString;
  credentialUrl?: OptionalString;
}

export interface SocialLink {
  platform: "Email" | "LinkedIn" | "GitHub" | "Instagram" | "WhatsApp";
  label: string;
  href?: OptionalString;
}

export interface SeoContent {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphImage?: OptionalString;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  personalBrandKeywords: string[];
  siteUrl?: OptionalString;
}
