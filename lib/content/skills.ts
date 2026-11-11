import type { LearningSkill, SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Digital Marketing",
    skills: ["Digital Marketing Strategy", "Social Media Marketing", "Paid Advertising", "Meta Ads", "Google Ads", "TikTok Ads", "Snapchat Ads"],
    proficiency: "Professional",
  },
  {
    name: "SEO",
    skills: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research", "Competitor Analysis", "SEO Audits", "Content Optimization"],
    proficiency: "Professional",
  },
  {
    name: "Web Development",
    skills: ["WordPress", "Website Management", "Responsive Web Design"],
    proficiency: "Professional",
  },
  {
    name: "Web Development (front-end basics)",
    skills: ["HTML", "CSS", "JavaScript"],
    proficiency: "Working knowledge",
  },
  {
    name: "Tools and Platforms",
    skills: ["WordPress", "Google Search Console", "Google Analytics", "Google Ads", "Meta Business Suite", "Canva", "GitHub", "VS Code", "Vercel"],
    proficiency: "Professional",
  },
  {
    name: "Cybersecurity and Technology",
    skills: ["Cybersecurity Fundamentals", "Network Security Fundamentals", "Linux", "Ubuntu", "Windows Server", "Cloud Computing Fundamentals"],
    proficiency: "Working knowledge",
  },
];

export const currentlyLearning: LearningSkill[] = [
  { name: "Next.js", proficiency: "Currently learning" },
  { name: "TypeScript", proficiency: "Currently learning" },
  { name: "Tailwind CSS", proficiency: "Currently learning" },
  { name: "AI-Assisted Development", proficiency: "Currently learning" },
  { name: "GitHub Copilot", proficiency: "Currently learning" },
  { name: "Claude Code", proficiency: "Currently learning" },
];
