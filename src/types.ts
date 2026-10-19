export type NavItemKey = 'home' | 'about' | 'services' | 'projects' | 'why-us' | 'testimonials' | 'blog' | 'contact';

export interface NavItem {
  id: NavItemKey;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  serviceNumber: string;
  category: 'civil-engineering' | 'it-solutions' | 'general-supplies' | 'sustainability-safety' | 'client-centered' | 'experienced-team' | 'project-management';
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  items: string[];
  image: string;
  ctaText?: string;
}

export interface ProjectAreaItem {
  id: string;
  title: string;
  category: 'civil-infrastructure' | 'it-digital' | 'supply-procurement' | 'community-development';
  categoryLabel: string;
  description: string;
  scopeOfWork: string[];
  ourRole: string;
  keyActivities: string[];
  projectOutcome: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  client?: string;
  description?: string;
  deliverables?: string[];
  metrics?: string;
  year?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  organization: string;
  quote: string;
  role?: string;
  sectorBadge?: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface SearchResultItem {
  id: string;
  title: string;
  type: 'service' | 'project' | 'blog' | 'about' | 'testimonial';
  category: string;
  snippet: string;
  targetId: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

export interface CoreValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  ctaText?: string;
}
