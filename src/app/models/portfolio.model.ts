export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights?: string[];
  stars?: number;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'cloud' | 'database' | 'tool';
  proficiency: 'expert' | 'advanced' | 'intermediate';
  level?: number; // Percentage from 0-100
  icon?: string; // Emoji or icon name
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon?: string;
  logoUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  tags?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  avatar: string;
  yearsOfExperience: number;
  projectsCompleted: number;
}
