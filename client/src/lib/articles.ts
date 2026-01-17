import { purplefishReview } from "./data";

export interface Article {
  title: string;
  slug: string;
  meta_description: string;
  tags: string[];
  updated: string;
  category: "Buyer Guide" | "Comparison" | "Review" | "Resource";
  author: string;
  readTime: string;
  content: string;
}

export const articles: Article[] = [
  {
    title: "Best AI Recruiters for Campus Recruiting (2026)",
    slug: "best-for-campus-recruiting",
    meta_description: "Long-form 2026 guide to AI-powered campus recruiting across sourcing, events, engagement, scheduling, screening, and assessments.",
    tags: ["AI recruiting", "campus recruiting", "university hiring", "early talent"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "15 min read",
    content: `Campus recruiting is a sprint with a long memory. You have a short window to engage thousands of students... [Full content...]`
  },
  {
    title: "Best AI Recruiters for Candidate Experience & Engagement (2026)",
    slug: "best-for-candidate-experience",
    meta_description: "A buyer-focused guide to AI recruiting tools that improve candidate experience in 2026.",
    tags: ["candidate experience", "AI recruiting", "engagement"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "12 min read",
    content: `Candidate experience is not a brand slogan. It is a funnel with math behind it... [Full content...]`
  },
  {
    title: "Best AI Recruiters for Corporate Talent Acquisition (2026)",
    slug: "best-for-corporate",
    meta_description: "An enterprise buyer guide to AI recruiter platforms for corporate talent acquisition teams in 2026.",
    tags: ["AI recruiting", "corporate TA", "enterprise recruiting"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "14 min read",
    content: `Corporate talent acquisition is not just about moving fast... [Full content...]`
  },
  {
    title: "Best AI Tools for Engineering and Technical Hiring (2026)",
    slug: "best-for-engineering",
    meta_description: "A practical 2026 guide to technical hiring tools across structured voice screening, coding tests, and proctoring.",
    tags: ["engineering hiring", "technical assessments", "coding tests"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "18 min read",
    content: `Technical hiring in 2026 is harder for a simple reason... [Full content...]`
  },
  {
    title: "Best AI Recruiting Tools for Global Teams in 2026",
    slug: "best-for-global-teams",
    meta_description: "Vendor-neutral guide to AI recruiting platforms built for multinational talent acquisition.",
    tags: ["global recruiting", "multilingual", "GDPR"],
    updated: "2026-01-06",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "12 min read",
    content: `Global hiring is where great recruiting processes go to get stress-tested... [Full content...]`
  },
  {
    title: "Best AI Recruiters for Healthcare Staffing (2026)",
    slug: "best-for-healthcare-staffing",
    meta_description: "In-depth, practical guide to AI recruiting tools for healthcare staffing in 2026.",
    tags: ["healthcare staffing", "nurse hiring", "credentialing"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "14 min read",
    content: `Healthcare staffing is the hardest version of recruiting... [Full content...]`
  },
  {
    title: "Best AI Recruiting Tools for High-Volume Hiring (2025)",
    slug: "best-for-high-volume",
    meta_description: "Deep comparison of eight AI recruiting platforms built for high-volume and hourly hiring in 2025.",
    tags: ["high-volume hiring", "hourly hiring", "AI recruiting"],
    updated: "2026-01-04",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "16 min read",
    content: `High-volume hiring is not a branding exercise... [Full content...]`
  },
  {
    title: "Best AI Recruiting Tools for Light Industrial and Warehouse Hiring (2026)",
    slug: "best-for-light-industrial",
    meta_description: "A practical 2026 guide to AI recruiting tools for light industrial and warehouse hiring.",
    tags: ["light industrial", "warehouse hiring", "hourly"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "15 min read",
    content: `Light industrial and warehouse hiring is different... [Full content...]`
  },
  {
    title: "Best AI Recruiting Tools for RPO Providers (2026)",
    slug: "best-for-rpo",
    meta_description: "A practical 2026 guide to AI recruiting platforms for RPO providers.",
    tags: ["RPO", "AI recruiting", "multi-tenant"],
    updated: "2026-01-04",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "12 min read",
    content: `RPO providers do not buy recruiting software the same way... [Full content...]`
  },
  {
    title: "Best AI Recruiters for SMBs (2026)",
    slug: "best-for-smbs",
    meta_description: "A practical, field-tested guide to AI recruiter tools for SMBs.",
    tags: ["SMB hiring", "AI recruiting", "scheduling"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "10 min read",
    content: `SMBs rarely need a giant AI suite... [Full content...]`
  },
  {
    title: "Best AI Recruiters for Staffing Agencies (2026)",
    slug: "best-for-staffing",
    meta_description: "A practical 2026 guide to AI recruiting tools for staffing agencies.",
    tags: ["AI recruiting", "staffing", "RPO"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "14 min read",
    content: `Staffing agencies win on three outcomes... [Full content...]`
  },
  {
    title: "Purplefish Review (2026): AI Phone Screens for High Volume Hiring",
    slug: "purplefish-review",
    meta_description: "Purplefish review for 2026. AI phone screening with ATS sync, transcript and outcome writeback.",
    tags: ["AI recruiter", "voice AI", "AI phone screening"],
    updated: "2026-01-11",
    category: "Review",
    author: "Editorial Team",
    readTime: "8 min read",
    content: `Purplefish is a voice screening platform... [Full content...]`
  },
  {
    title: "ConverzAI Alternatives (2026): Tools for Outreach, Screening, Scheduling",
    slug: "converzai-alternatives",
    meta_description: "Practical guide to ConverzAI alternatives in 2026. Compare outreach and screening depth.",
    tags: ["ConverzAI alternatives", "AI recruiter", "high-volume hiring"],
    updated: "2026-01-11",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "10 min read",
    content: `ConverzAI is often evaluated as a virtual recruiter... [Full content...]`
  },
  {
    title: "Ribbon Alternatives (2026): Options for Voice Screens, Scoring, and Scheduling",
    slug: "ribbon-alternatives",
    meta_description: "A practical guide to Ribbon alternatives in 2026. Compare voice screens and chat scheduling.",
    tags: ["Ribbon alternatives", "AI recruiter", "voice interviews"],
    updated: "2026-01-11",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "9 min read",
    content: `Ribbon is usually brought in for one reason... [Full content...]`
  },
  {
    title: "Tenzo Alternatives (2025): Top Options by Use Case and Budget",
    slug: "tenzo-alternatives",
    meta_description: "A neutral guide to Tenzo alternatives in 2025. Compare options for throughput and experience.",
    tags: ["AI recruiter alternatives", "comparisons", "staffing"],
    updated: "2025-08-06",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "11 min read",
    content: `Tenzo focuses on resume‑aware phone & video interviews... [Full content...]`
  }
];
