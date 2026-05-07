export interface Project {
  slug: string;
  title: string;
  year: string;
  role: string;
  category: 'brand' | 'campaign' | 'design' | 'other';
  summary: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  links: { label: string; url: string }[];
  mediaPlaceholders: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "narico-naturals",
    title: "Narico Naturals",
    year: "2025–2026",
    role: "Brand Designer & Content Strategist",
    category: "brand",
    summary: "Complete brand identity and content system for a natural wellness company.",
    description: "Built the full brand identity from ground up — logo philosophy, color palette, typography, Instagram visual language, content pillars, and growth strategy. Sole designer and strategist throughout.",
    technologies: ["Canva", "Brand Strategy", "Instagram", "Content Systems", "Visual Identity"],
    outcomes: [
      "Complete brand identity system delivered",
      "Instagram visual language and post templates",
      "Content pillars and caption framework",
      "Reels thumbnail series",
      "Color and typography system"
    ],
    links: [
      { label: "View Case Study", url: "https://drive.google.com/drive/folders/13pzD6hyebdegqyj_L8J4gonft8e6r-PA" }
    ],
    mediaPlaceholders: 4,
    featured: true
  },
  {
    slug: "toastmasters-murder-mystery",
    title: "Murder Mystery Night",
    year: "2026",
    role: "Campaign Designer & Content Creator",
    category: "campaign",
    summary: "Full creative campaign for a Toastmasters murder-mystery themed event.",
    description: "Designed and executed the entire creative campaign — event poster series, social media content across Instagram and WhatsApp, narrative copywriting, event identity, and on-ground experience design for the Toastmasters murder mystery evening.",
    technologies: ["Canva", "Instagram", "WhatsApp", "Event Design", "Copywriting"],
    outcomes: [
      "Poster series — 3 designs delivered",
      "Instagram story sequence created",
      "Event identity and narrative designed",
      "Full social content calendar executed"
    ],
    links: [],
    mediaPlaceholders: 3,
    featured: true
  },
  {
    slug: "praxis-2026-campaign",
    title: "Praxis 2026 Campaign",
    year: "2026",
    role: "Marketing Lead",
    category: "campaign",
    summary: "Digital marketing campaign that drove 42% increase in event registrations.",
    description: "Planned and ran the complete multi-channel marketing campaign across Instagram, WhatsApp, and campus networks for the Praxis 2026 entrepreneurship event at BVRIT.",
    technologies: ["Canva", "Instagram", "WhatsApp Marketing", "Digital Campaign"],
    outcomes: [
      "42% increase in registrations vs. previous year",
      "300+ students reached organically",
      "All visual assets designed independently",
      "Visual content credited for boosting walk-in turnout"
    ],
    links: [],
    mediaPlaceholders: 2,
    featured: true
  },
  {
    slug: "brand-wars-2026",
    title: "Brand Wars 2026",
    year: "2026",
    role: "Lead Coordinator & Event Architect",
    category: "other",
    summary: "3-day flagship entrepreneurship and branding competition — 150+ participants.",
    description: "Designed the complete event architecture for Brand Wars 2026 — scheduling, rules framework, judging parameters, volunteer roles, and live execution plan. Anchored coordination throughout.",
    technologies: ["Event Management", "Operations", "Brand Strategy"],
    outcomes: [
      "150+ participants coordinated",
      "3-day event executed without disruption",
      "Full event architecture designed from scratch"
    ],
    links: [],
    mediaPlaceholders: 1,
    featured: false
  }
];
