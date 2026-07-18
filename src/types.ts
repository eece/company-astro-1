export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  iconName: string; // Dynamic icon from lucide
  shortDescription: string;
  longDescription: string;
  category: string;
  features: string[];
  steps: { title: string; description: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}
