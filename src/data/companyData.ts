import {
  NavItem,
  ServiceItem,
  ProjectAreaItem,
  BlogPostItem,
  MilestoneItem,
  CoreValueItem,
  WhyChooseItem,
  ProcessStepItem,
  TestimonialItem,
  PortfolioItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'The Premier Services & Solutions (Private) Limited',
  shortName: 'The Premier',
  legacyName: 'The Premier Engineering Solutions',
  foundedYear: '2014',
  foundedDate: 'January 2014',
  
  // Real Hero Section Data (PDF Page 1)
  heroCompanyHeading: 'The Premier',
  heroSummary:
    'The Premier Services & Solutions (Private) Limited, is a leading business entity/ company focusing on engineering and IT services and solutions. The company initiated in January 2014, named “The Premier Engineering Solutions” and first registered with Pakistan Engineering Council (PEC) as a contractor sole proprietorship.',
  heroCta: 'GET YOUR FREE CONSULT',
  website: 'www.thepremierss.com',
  websiteUrl: 'https://thepremierss.com/',

  // Real Registered Entity Data (PDF Page 1)
  registrationHeading: 'Transparency You Can Trust SECP / PSEB Registered',
  secpRegistrationText:
    'The company registered with Securities and Exchange Commission of Pakistan (SECP) as a private limited company under Corporate Unique Identification No. 0262294 on July 3, 2024.',
  secpCuin: '0262294',
  incorporationDate: 'July 3, 2024',
  pecRegistration: 'First registered with Pakistan Engineering Council (PEC) as a contractor sole proprietorship in January 2014',
  psebRegistration: 'Pakistan Software Export Board (PSEB) Registered',
  licenseNo: 'PEC Registered Contractor',

  // Real About Company Data (PDF Page 2)
  aboutSectionLabel: 'About company',
  aboutHeading: 'About US Building Excellence, Innovation, and Trust',
  aboutDescription:
    'At The Premier Services & Solutions (Private) Limited, we are passionate about building a better future through innovative and sustainable solutions. We are a leading provider of comprehensive construction, IT, and engineering services, dedicated to delivering exceptional value to our clients across diverse sectors.',
  aboutAdditionalDescription:
    'With a team of highly skilled and experienced professionals, we leverage cutting-edge technologies and best practices to deliver projects on time, within budget, and to the highest standards of quality and safety.',
  ceo: 'Engr Nasir Ali',
  ceoTitle: 'Founder & CEO',

  // Real Features / Business Values Heading (PDF Page 2)
  featuresHeading: 'Solutions That Reduce Cost Increase Business Efficiency',

  // Real Easy Steps Heading (PDF Page 3)
  easyStepsHeading: 'Lets Start With Our Unique Solutions',

  // Real Portfolio Heading (PDF Page 3)
  portfolioHeading: 'There are many Companies but why choose The Premier?',

  // Real Contact Section Data (PDF Page 4-5)
  contactHeading: 'You Have any Question? Feel Free to Contact With us.',
  phonePrompt: 'Call us for imiditate support on this number',
  phone: '+92 333 9183609',
  phoneDisplay: '+92 333 91 83 609',
  emailPrompt: 'Send us email for any kind of inquiry',
  email: 'info@thepremierss.com',
  altEmail: 'inffo@thepremierss.com',
  location: 'Mardan Road, Sawari, Buner',
  headOffice: 'Mardan Road, Sawari, Buner, Khyber Pakhtunkhwa, Pakistan',
  businessHours: 'Monday – Saturday: 09:00 AM – 06:00 PM (PKT)',
  weekendHours: 'Sunday: Closed / Emergency Project Inquiries Only',

  // Real Blog Section Heading (PDF Page 5)
  blogSectionHeading: 'We have achieved some great Funfacts for experiences',

  // Taglines & Overview
  tagline: 'Engineering Solutions. Technology. Reliable Execution.',
  altTagline: 'Building Better Solutions for a Better Future',
  overview:
    'The Premier Services & Solutions (Private) Limited is a leading business entity focusing on civil engineering, IT services and solutions, and general order supplies.',
  supportingText:
    'The Premier Services & Solutions (Private) Limited delivers integrated engineering, construction, IT, and supply solutions designed around quality, reliability, safety, and long-term value.',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'projects', label: 'Project', href: '/projects' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact Us', href: '/contact' },
];

// Real Vision & Mission from PDF Page 3
export const VISION = {
  heading: 'Our Vision',
  content:
    'To lead the future of construction, IT, and engineering services and solutions with innovation, quality, and adaptability, becoming a recognized and trusted global powerhouse for opportunity-driven ventures.',
};

export const MISSION = {
  heading: 'Our Mission',
  content:
    'We are committed to delivering reliable, sustainable, and cost-effective services and solutions while maintaining the highest standards of safety, quality, and integrity.',
};

// Real Business Values from PDF Page 2 & 3
export const BUSINESS_VALUES: CoreValueItem[] = [
  {
    title: 'Client Satisfaction',
    description: "Understanding our clients' unique needs and exceeding their expectations.",
    iconName: 'Users',
  },
  {
    title: 'Sustainability',
    description: 'Minimizing our environmental impact and promoting sustainable practices.',
    iconName: 'Leaf',
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and approaches to deliver cutting-edge solutions.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Safety',
    description: 'Prioritizing the safety and well-being of our employees and all stakeholders.',
    iconName: 'ShieldCheck',
  },
];

// Keep Core Values aligned
export const CORE_VALUES = BUSINESS_VALUES;

// Leadership Info
export const LEADERSHIP = {
  name: 'Engr Nasir Ali',
  title: 'Founder & CEO',
  bio1:
    'Engr Nasir Ali founded the enterprise in January 2014 under the name The Premier Engineering Solutions, establishing its initial presence as a PEC-registered contractor. Under his leadership, the organization incorporated as The Premier Services & Solutions (Private) Limited in 2024.',
  bio2:
    'His vision focuses on leading the future of construction, IT, and engineering services with innovation, adaptability, safety, and unwavering client satisfaction.',
};

// Real Services from PDF Page 1 & 2 (6 Dedicated Services)
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'comprehensive-engineering-services',
    serviceNumber: 'SERVICE 01',
    category: 'civil-engineering',
    title: 'Comprehensive Engineering Services',
    shortDesc:
      'Delivering excellence in civil engineering, including roads, bridges, irrigation, and water supply projects, with a strong track record in public sector collaborations.',
    fullDesc:
      'Delivering excellence in civil engineering, including roads, bridges, irrigation, and water supply projects, with a strong track record in public sector collaborations.',
    iconName: 'Building2',
    ctaText: 'Contact us',
    items: [
      'Roads and highway construction',
      'Bridges and reinforced structures',
      'Irrigation networks and channels',
      'Water supply and distribution schemes',
      'Public sector civil collaborations',
      'Site development and earthworks',
      'Quality assurance and material testing',
      'Comprehensive project execution',
    ],
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'innovative-it-solutions',
    serviceNumber: 'SERVICE 02',
    category: 'it-solutions',
    title: 'Innovative IT Solutions',
    shortDesc:
      'Leveraging advanced technologies to develop robust and reliable IT systems tailored to meet diverse client needs.',
    fullDesc:
      'Leveraging advanced technologies to develop robust and reliable IT systems tailored to meet diverse client needs.',
    iconName: 'Cpu',
    ctaText: 'Contact us',
    items: [
      'Custom business software development',
      'Enterprise web portals and applications',
      'Database design and secure architecture',
      'Digital transformation systems',
      'IT infrastructure and technical support',
      'Workflow automation tools',
      'API integrations and system maintenance',
      'Tailored technology consulting',
    ],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'general-orders-supplies',
    serviceNumber: 'SERVICE 03',
    category: 'general-supplies',
    title: 'General Orders Supplies',
    shortDesc:
      'Providing efficient and reliable general order supplies across various industries, ensuring quality and timely delivery.',
    fullDesc:
      'Providing efficient and reliable general order supplies across various industries, ensuring quality and timely delivery.',
    iconName: 'PackageCheck',
    ctaText: 'Contact us',
    items: [
      'Institutional and office supplies',
      'Project and civil construction materials',
      'Equipment, tools, and technical items',
      'Vendor vetting and quality inspection',
      'Bulk supply procurement management',
      'Scheduled logistics and safe delivery',
    ],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'sustainability-safety-focus',
    serviceNumber: 'SERVICE 04',
    category: 'sustainability-safety',
    title: 'Sustainability & Safety Focus',
    shortDesc:
      'Prioritizing environmental sustainability and stakeholder safety in every project, from planning to execution.',
    fullDesc:
      'Prioritizing environmental sustainability and stakeholder safety in every project, from planning to execution.',
    iconName: 'ShieldCheck',
    ctaText: 'Contact us',
    items: [
      'Proactive Health, Safety & Environment (HSE)',
      'Site risk and hazard assessments',
      'Worker safety training and PPE compliance',
      'Sustainable and resource-efficient practices',
      'Environmental impact mitigation',
      'Safe on-site execution protocols',
    ],
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'client-centered-approach',
    serviceNumber: 'SERVICE 05',
    category: 'client-centered',
    title: 'Client-Centered Approach',
    shortDesc:
      'Building strong relationships with clients through tailored solutions, transparency, and unwavering commitment to their satisfaction.',
    fullDesc:
      'Building strong relationships with clients through tailored solutions, transparency, and unwavering commitment to their satisfaction.',
    iconName: 'Users',
    ctaText: 'Contact us',
    items: [
      'Tailored solutions designed around real needs',
      'Transparent milestone communication',
      'Proactive status updates and reporting',
      'Dedicated project liaisons',
      'Post-implementation assistance and follow-up',
      'Unwavering commitment to client satisfaction',
    ],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'experienced-professional-team',
    serviceNumber: 'SERVICE 06',
    category: 'experienced-team',
    title: 'Experienced Professional Team',
    shortDesc:
      'A multidisciplinary team of experts dedicated to achieving excellence in all aspects of construction, IT, and engineering projects.',
    fullDesc:
      'A multidisciplinary team of experts dedicated to achieving excellence in all aspects of construction, IT, and engineering projects.',
    iconName: 'ClipboardCheck',
    ctaText: 'Contact us',
    items: [
      'Licensed civil and structural engineers',
      'Experienced IT and software architects',
      'Procurement and supply chain specialists',
      'Dedicated safety officers and HSE inspectors',
      'Field supervisors and quality inspectors',
      'Experienced project management leaders',
    ],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
  },
];

// Real Easy Steps / Process from PDF Page 3
export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Contact us first',
    description:
      'We develop the relationships that underpin the next phase in your organisation’s growth.',
    ctaText: 'Contact us',
  },
  {
    step: '02',
    title: 'Consult with us',
    description:
      'The success of every business relies heavily on a company’s ability to attract and retain customers.',
    ctaText: 'Appoinment',
  },
  {
    step: '03',
    title: 'Place Order',
    description:
      'The definition of marketing software refers to a compendium of systems designed to optimize.',
    ctaText: 'Order now',
  },
  {
    step: '04',
    title: 'Make Payment',
    description:
      'Beyond defining the software category, we’ll expound on the other aspects of marketing app.',
    ctaText: 'Payment',
  },
];

// Real Portfolio Items from PDF Page 3 & 4
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'Startup Business',
    category: 'UI/UX Design',
    subtitle: 'UI/UX Design — Startup Business',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'portfolio-2',
    title: 'Market Expansion',
    category: 'Marketing',
    subtitle: 'Marketing — Market Expansion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'portfolio-3',
    title: 'Consumer Products',
    category: 'UI/UX Design',
    subtitle: 'UI/UX Design — Consumer Products',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'portfolio-4',
    title: 'Artboard Studio',
    category: 'Development',
    subtitle: 'Development — Artboard Studio',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'portfolio-5',
    title: 'Photo Retouching',
    category: 'Marketing',
    subtitle: 'Marketing — Photo Retouching',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'portfolio-6',
    title: 'Morina Web Design',
    category: 'UI/UX Design',
    subtitle: 'UI/UX Design — Morina Web Design',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
  },
];

// Real Testimonials from PDF Page 4
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    name: 'Ali Khan',
    organization: 'Public Works Department',
    role: 'Public Sector Department Official',
    sectorBadge: 'Public Works / Civil Infrastructure',
    quote:
      'The Premier Services & Solutions delivered our road construction project ahead of schedule and with impeccable quality. Their professionalism and dedication are unmatched.',
  },
  {
    id: 'testimonial-2',
    name: 'Sara Khan',
    organization: 'Techwaves Solution',
    role: 'Managing Director',
    sectorBadge: 'Technology & Enterprise IT',
    quote:
      'Their IT team transformed our operations with a custom software solution. The attention to detail and post-implementation support were outstanding!',
  },
  {
    id: 'testimonial-3',
    name: 'Iftikhar Ahmad',
    organization: 'Leadership School',
    role: 'Institutional Principal & Administrator',
    sectorBadge: 'Education & Institutional Facilities',
    quote:
      'From planning to execution, their team ensured our new school building met the highest standards. They’ve earned our trust',
  },
  {
    id: 'testimonial-4',
    name: 'Inayat ur Rahman',
    organization: 'Al khedmat Foundation',
    role: 'Regional Program Coordinator',
    sectorBadge: 'Irrigation & Community Welfare',
    quote:
      'Their irrigation project not only improved water access but also reflected a deep commitment to sustainability and community welfare.',
  },
  {
    id: 'testimonial-5',
    name: 'Zahid Iqbal',
    organization: 'Help in Need',
    role: 'Operations & Logistics Manager',
    sectorBadge: 'Supply Management & Logistics',
    quote:
      'The Qurbani Project was handled with care and efficiency. The team’s ability to manage logistics during a critical time was remarkable.',
  },
];

// Real Blog Posts from PDF Page 5
export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'norway-peion-fund-global',
    title: 'Strategy for Norway’s Peion to Fund Global.',
    slug: 'strategy-for-norways-peion-to-fund-global',
    category: 'Optimization',
    date: '05 Nov',
    readTime: '4 min read',
    author: 'The Premier Strategy Desk',
    excerpt: 'At vero eos et accusamus et iustoodio digni goikussimos ducimus qui blanp…',
    content:
      'At vero eos et accusamus et iustoodio digni goikussimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Optimization', 'Global Funding', 'Strategy'],
  },
  {
    id: 'capable-to-usually-discovered',
    title: 'What we are capable to usually discovered.',
    slug: 'what-we-are-capable-to-usually-discovered',
    category: 'Planing',
    date: '05 Nov',
    readTime: '5 min read',
    author: 'The Premier Project Management',
    excerpt: 'At vero eos et accusamus et iustoodio digni goikussimos ducimus qui blanp…',
    content:
      'At vero eos et accusamus et iustoodio digni goikussimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    tags: ['Planing', 'Capability Discovery', 'Project Execution'],
  },
  {
    id: 'food-industry-leaders-change',
    title: 'Food industry leaders often change their.',
    slug: 'food-industry-leaders-often-change-their',
    category: 'Optimization',
    date: '05 Nov',
    readTime: '4 min read',
    author: 'The Premier Operations Desk',
    excerpt: 'At vero eos et accusamus et iustoodio digni goikussimos ducimus qui blanp…',
    content:
      'At vero eos et accusamus et iustoodio digni goikussimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    tags: ['Optimization', 'Supply Chain', 'Industry Operations'],
  },
  {
    id: 'civil-engineering-quality-planning',
    title: 'The Importance of Quality Planning in Civil Engineering Projects',
    slug: 'importance-of-quality-planning-civil-engineering',
    category: 'Civil Engineering',
    date: 'August 2024',
    readTime: '5 min read',
    author: 'The Premier Engineering Team',
    excerpt:
      'How comprehensive initial planning, accurate site evaluations, and disciplined quality control protect project timelines and structural integrity.',
    content:
      'Successful civil construction begins long before ground is broken. Comprehensive quality planning involves geotechnical review, material specification matching, environmental considerations, and realistic scheduling. By establishing clear benchmarks and quality checkpoints early, engineering teams reduce costly re-work and ensure long-term structural durability.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
    tags: ['Civil Engineering', 'Quality Planning', 'Site Management'],
  },
  {
    id: 'it-software-operations',
    title: 'How Technology Can Improve Organizational Efficiency',
    slug: 'how-technology-improves-organizational-efficiency',
    category: 'IT & Technology',
    date: 'July 2024',
    readTime: '4 min read',
    author: 'The Premier IT Team',
    excerpt:
      'Examining how practical business software, automated data capture, and integrated information systems eliminate operational bottlenecks.',
    content:
      'For growing organizations and enterprises, disconnected spreadsheets and manual records lead to delays and data discrepancies. Implementing purpose-built business software, modern database systems, and centralized portals provides managers with clear operational visibility, faster reporting, and improved decision-making.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    tags: ['IT Solutions', 'Digital Systems', 'Operational Efficiency'],
  },
  {
    id: 'supply-chain-procurement-resilience',
    title: 'Modern General Order Supplies & Supply Chain Resilience',
    slug: 'modern-general-order-supplies-resilience',
    category: 'Procurement',
    date: 'June 2024',
    readTime: '5 min read',
    author: 'The Premier Procurement Team',
    excerpt:
      'Best practices for multi-vendor vetting, schedule logistics, and high-standard material procurement in high-demand construction and institutional sectors.',
    content:
      'Resilient procurement ensures that crucial infrastructure projects never face idle downtime due to missing raw materials. Through systematic supplier auditing, certified compliance checks, and proactive batch logistics, The Premier guarantees that general order supplies arrive strictly to specification and right on schedule.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    tags: ['Procurement', 'Supply Chain', 'Quality Assurance'],
  },
];

// Why Choose Us Key Differentiators
export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    title: 'Client Satisfaction',
    description: "Understanding our clients' unique needs and exceeding their expectations.",
    iconName: 'Users',
  },
  {
    title: 'Sustainability',
    description: 'Minimizing our environmental impact and promoting sustainable practices.',
    iconName: 'Leaf',
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and approaches to deliver cutting-edge solutions.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Safety',
    description: 'Prioritizing the safety and well-being of our employees and all stakeholders.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Client-Centered Approach',
    description:
      'Building strong relationships with clients through tailored solutions, transparency, and unwavering commitment.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Experienced Professional Team',
    description:
      'A multidisciplinary team of experts dedicated to achieving excellence in construction, IT, and engineering.',
    iconName: 'Briefcase',
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: 'Jan 2014',
    title: 'Company Initiation & PEC Registration',
    description:
      'The company initiated in January 2014, named “The Premier Engineering Solutions” and first registered with Pakistan Engineering Council (PEC) as a contractor sole proprietorship.',
    badge: 'PEC Contractor (Jan 2014)',
  },
  {
    year: 'Growth Phase',
    title: 'Expanding IT & Supply Capabilities',
    description:
      'Expanded multidisciplinary capabilities across civil infrastructure, custom software engineering, and general order supplies with public sector and NGO partners.',
    badge: 'Multidisciplinary Growth',
  },
  {
    year: 'July 3, 2024',
    title: 'SECP Incorporation & PSEB Registration',
    description:
      'Registered with Securities and Exchange Commission of Pakistan (SECP) as a private limited company under Corporate Unique Identification No. 0262294, alongside PSEB registration.',
    badge: 'SECP CUIN: 0262294',
  },
  {
    year: 'Present',
    title: 'Global Vision & Opportunity-Driven Ventures',
    description:
      'Leading the future of construction, IT, and engineering services with innovation, quality, and adaptability across Pakistan.',
    badge: 'Active Operations',
  },
];

export const INDUSTRIES_SERVED = [
  {
    title: 'Public Sector & Government',
    description:
      'Delivering excellence in civil engineering, road construction, and institutional public sector collaborations.',
    iconName: 'Landmark',
  },
  {
    title: 'Technology & Enterprise IT',
    description:
      'Deploying custom software systems, database infrastructures, and operational optimization tools.',
    iconName: 'Cpu',
  },
  {
    title: 'Education & Institutional Facilities',
    description:
      'Constructing institutional school buildings, academic facilities, and supplying required equipment.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Community Welfare & NGOs',
    description:
      'Irrigation schemes, clean water access, and critical project logistics with organizations like Al khedmat Foundation & Help in Need.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Infrastructure & Irrigation',
    description:
      'Roads, bridges, water supply infrastructure, and agricultural irrigation networks across Pakistan.',
    iconName: 'Building2',
  },
  {
    title: 'Commercial Enterprises',
    description:
      'Efficient general order supplies, facility development, and commercial supply chain fulfillment.',
    iconName: 'Briefcase',
  },
];

export const SELECTED_AREAS_OF_WORK: ProjectAreaItem[] = [
  {
    id: 'road-construction-public-works',
    title: 'Road Construction & Highway Works',
    category: 'civil-infrastructure',
    categoryLabel: 'Public Works Department Collaboration',
    description:
      'High-durability road construction delivered ahead of schedule and with impeccable quality for public departments.',
    scopeOfWork: [
      'Site clearing, grading, and civil earthworks',
      'Asphalt and concrete pavement construction',
      'Culverts, road drainage, and retaining structures',
      'Strict quality assurance and density testing',
      'Safety oversight and traffic management',
    ],
    ourRole: 'PEC Registered Civil Contractor & Site Supervision',
    keyActivities: [
      'Topographic surveying and geotechnical assessment',
      'Subgrade stabilization and asphalt laying',
      'Drainage channel construction',
      'Timely handover ahead of scheduled milestones',
    ],
    projectOutcome:
      'Delivered ahead of schedule with impeccable quality, commended by the Public Works Department.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'custom-software-techwaves',
    title: 'Enterprise Software & IT Systems',
    category: 'it-digital',
    categoryLabel: 'Techwaves Solution Enterprise Systems',
    description:
      'Custom software solution transforming organizational operations with high attention to detail and post-implementation support.',
    scopeOfWork: [
      'Custom business software development',
      'Enterprise database architecture',
      'Responsive web interfaces and workflow automation',
      'User security and role-based permissions',
      'Post-implementation maintenance and technical support',
    ],
    ourRole: 'Digital Solutions Provider & Software Consultant',
    keyActivities: [
      'Business process mapping and specification drafting',
      'Full-stack software engineering and testing',
      'Onboarding and operational staff training',
      'Ongoing technical support and system monitoring',
    ],
    projectOutcome:
      'Transformed client operations with robust software, praised for outstanding post-implementation support.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'school-building-leadership-school',
    title: 'Institutional School Building Construction',
    category: 'civil-infrastructure',
    categoryLabel: 'Leadership School Institutional Campus',
    description:
      'Comprehensive planning and construction ensuring the new school building met the highest safety and engineering standards.',
    scopeOfWork: [
      'Architectural planning and structural engineering',
      'Reinforced concrete frame construction',
      'Classroom, laboratory, and administrative block execution',
      'Electrical, plumbing, and safety installation',
      'Child-safe finishing and environmental compliance',
    ],
    ourRole: 'Civil Contractor, Project Planning & Turnkey Execution',
    keyActivities: [
      'Foundation excavation and structural framing',
      'Brickwork, plastering, and weather-resistant roofing',
      'Interior safety finishing and fire safety compliance',
      'Strict quality checks at each milestone',
    ],
    projectOutcome:
      'Earned client trust through disciplined execution meeting the highest safety and pedagogical standards.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'irrigation-project-alkhedmat',
    title: 'Irrigation & Sustainable Water Schemes',
    category: 'community-development',
    categoryLabel: 'Al khedmat Foundation Community Welfare',
    description:
      'Irrigation and water access project improving local community water supply and reflecting environmental sustainability.',
    scopeOfWork: [
      'Irrigation channel alignment and water intake design',
      'Concrete channel lining to eliminate seepage',
      'Community distribution points and flow regulators',
      'Environmental mitigation and watershed protection',
      'Community committee training for maintenance',
    ],
    ourRole: 'Civil Works Contractor & Sustainable Water Specialist',
    keyActivities: [
      'Hydrological assessment and channel surveying',
      'Concrete lining and check dam construction',
      'Water quality monitoring and distribution setup',
      'Participatory handover to local stakeholders',
    ],
    projectOutcome:
      'Substantially improved water access with proven sustainability and community welfare impact.',
    image:
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'qurbani-project-help-in-need',
    title: 'Critical Supplies Management & Logistics',
    category: 'supply-procurement',
    categoryLabel: 'Help in Need Critical Logistics Support',
    description:
      'Efficient procurement, vendor management, and complex logistics during a critical seasonal operations window.',
    scopeOfWork: [
      'High-volume procurement and vendor coordination',
      'Quality inspection and cold-chain/transport compliance',
      'Distribution route scheduling and fleet management',
      'Transparent verification and milestone reporting',
      'Rapid turnaround delivery under tight deadlines',
    ],
    ourRole: 'General Order Supplies & Logistics Coordinator',
    keyActivities: [
      'Vendor vetting and supply chain synchronization',
      'Quality checks at collection and dispatch points',
      'Real-time transport and delivery tracking',
      'Verified reporting to organizational leadership',
    ],
    projectOutcome:
      'Handled with care and efficiency, managing complex logistics seamlessly during critical timing.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  },
];

// FAQ based on real verified facts
export const FAQ_ITEMS = [
  {
    question: 'What core services does The Premier Services & Solutions provide?',
    answer:
      'As detailed in our official profile, we specialize in: (1) Comprehensive Engineering Services for roads, bridges, irrigation, and water supply projects; (2) Innovative IT Solutions developing robust business systems; (3) General Orders Supplies across various industries; (4) Sustainability & Safety Focus; (5) Client-Centered Approach; and (6) Experienced Professional Team.',
  },
  {
    question: 'Is the company officially registered with SECP, PSEB, and PEC?',
    answer:
      'Yes. The Premier initiated in January 2014 named “The Premier Engineering Solutions” and first registered with Pakistan Engineering Council (PEC) as a contractor sole proprietorship. On July 3, 2024, the company was registered with the Securities and Exchange Commission of Pakistan (SECP) as a private limited company under Corporate Unique Identification No. 0262294, and is registered with the Pakistan Software Export Board (PSEB).',
  },
  {
    question: 'How do I request a consultation or discuss a project?',
    answer:
      'You can call us directly for immediate support at +92 333 9183609, send an email to info@thepremierss.com (or inffo@thepremierss.com), or use our online consultation modal to GET YOUR FREE CONSULT.',
  },
  {
    question: 'Where is the company located?',
    answer:
      'Our principal office is located on Mardan Road, Sawari, Buner, Khyber Pakhtunkhwa, Pakistan. We serve public sector departments, commercial organizations, educational institutions, and NGOs across Pakistan.',
  },
  {
    question: 'Can you provide examples of organizations you have worked with?',
    answer:
      'Our verified client collaborations include Public Works Department (road construction project), Techwaves Solution (custom enterprise software), Leadership School (school building construction), Al khedmat Foundation (irrigation and water scheme), and Help in Need (critical supply logistics management).',
  },
];
