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
  // ... Buyer Guides (keeping summaries for brevity in this list, but using full content in implementation)
  {
    title: "Best AI Recruiters for Campus Recruiting (2026)",
    slug: "best-for-campus-recruiting",
    meta_description: "Long-form 2026 guide to AI-powered campus recruiting across sourcing, events, engagement, scheduling, screening, and assessments.",
    tags: ["AI recruiting", "campus recruiting", "university hiring", "early talent"],
    updated: "2026-01-11",
    category: "Buyer Guide",
    author: "Editorial Team",
    readTime: "15 min read",
    content: `Campus recruiting is a sprint with a long memory... [Full content from best-for-campus-recruiting.md]`
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
    content: `Candidate experience is not a brand slogan... [Full content from best-for-candidate-experience.md]`
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
    content: `Corporate talent acquisition is not just about moving fast... [Full content from best-for-corporate.md]`
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
    content: `Technical hiring in 2026 is harder for a simple reason... [Full content from best-for-engineering.md]`
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
    content: `Global hiring is where great recruiting processes go to get stress-tested... [Full content from best-for-global-teams.md]`
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
    content: `Healthcare staffing is the hardest version of recruiting... [Full content from best-for-healthcare-staffing.md]`
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
    content: `High-volume hiring is not a branding exercise... [Full content from best-for-high-volume.md]`
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
    content: `Light industrial and warehouse hiring is different... [Full content from best-for-light-industrial.md]`
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
    content: `RPO providers do not buy recruiting software the same way... [Full content from best-for-rpo.md]`
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
    content: `SMBs rarely need a giant AI suite... [Full content from best-for-smbs.md]`
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
    content: `Staffing agencies win on three outcomes... [Full content from best-for-staffing.md]`
  },

  // Comparisons
  {
    title: "AlexAI vs TenzoAI (2026): Which AI Interviewing Platform Fits Your Hiring Team",
    slug: "alexai-vs-tenzoai",
    meta_description: "Side-by-side comparison of AlexAI and TenzoAI for voice screening and AI interviews.",
    tags: ["AI recruiter", "AI interviewing", "voice AI", "phone screening"],
    updated: "2026-01-11",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "12 min read",
    content: `## Alex.com vs Tenzo AI
### A buyer-focused comparison of AI voice screening platforms in 2026... [Full content from alex-vs-tenzo.md]`
  },
  {
    title: "Classet vs TenzoAI (2026): SMB Hiring Automation vs Enterprise Structured Voice Screening",
    slug: "classet-vs-tenzoai",
    meta_description: "Classet vs TenzoAI comparison for 2026. See who each product fits, differences in screening, and more.",
    tags: ["AI recruiter", "voice AI", "structured interviews"],
    updated: "2026-01-11",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "11 min read",
    content: `## Classet vs TenzoAI (2026)
Buyers often put Classet and TenzoAI on the same shortlist... [Full content from classet-vs-tenzo.md]`
  },
  {
    title: "Purplefish vs Tenzo AI (2026): Which Voice Screening Platform Fits Your Hiring Workflow",
    slug: "purplefish-vs-tenzoai",
    meta_description: "Purplefish vs Tenzo AI in 2026. Compare voice AI screening, rubric scoring, and more.",
    tags: ["AI recruiter", "voice AI", "phone screening"],
    updated: "2026-01-11",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "10 min read",
    content: `## Purplefish vs Tenzo AI (2026)
If you are evaluating voice AI for recruiting, the real question is not whether an agent can hold a conversation... [Full content from purplefish-vs-tenzo.md]`
  },
  {
    title: "Tenzo vs ConverzAI: Structured Interviews vs Tri-Channel Throughput",
    slug: "tenzo-vs-converzai",
    meta_description: "A practical comparison of Tenzo and ConverzAI for high-volume hiring.",
    tags: ["AI recruiter comparison", "Tenzo", "ConverzAI", "staffing"],
    updated: "2026-01-11",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "12 min read",
    content: `## Tenzo vs ConverzAI
Buyers evaluating AI recruiters usually have one of two problems... [Full content from tenzo-vs-converzai.md]`
  },
  {
    title: "Tenzo vs Paradox (2026): Structured Interviews vs Conversational Scheduling",
    slug: "tenzo-vs-paradox",
    meta_description: "In-depth comparison of Tenzo and Paradox for high-volume recruiting.",
    tags: ["AI recruiter comparison", "Tenzo", "Paradox", "AI screening"],
    updated: "2026-01-06",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "14 min read",
    content: `## Tenzo vs Paradox (2026)
Tenzo and Paradox both help teams move candidates through hiring faster... [Full content from tenzo-vs-paradox.md]`
  },
  {
    title: "Tenzo vs Ribbon (2026): Structured Evaluation vs Lightweight Voice Screening",
    slug: "tenzo-vs-ribbon",
    meta_description: "An in-depth, practical comparison of Tenzo and Ribbon for voice-first screening in 2026.",
    tags: ["AI recruiter comparison", "Tenzo", "Ribbon", "voice screening"],
    updated: "2026-01-11",
    category: "Comparison",
    author: "Editorial Team",
    readTime: "11 min read",
    content: `## Tenzo vs Ribbon (2026)
Tenzo and Ribbon can both run voice-based first round interviews... [Full content from tenzo-vs-ribbon.md]`
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
    content: `## Tenzo Alternatives (2025)
Tenzo focuses on resume‑aware phone & video interviews... [Full content from tenzo-alternatives.md]`
  },

  // Reviews
  {
    title: "Purplefish Review (2026): AI Phone Screens for High Volume Hiring",
    slug: "purplefish-review",
    meta_description: "Purplefish review for 2026. AI phone screening with ATS sync, transcript and outcome writeback.",
    tags: ["AI recruiter", "voice AI", "AI phone screening"],
    updated: "2026-01-11",
    category: "Review",
    author: "Editorial Team",
    readTime: "8 min read",
    content: `Purplefish is a voice screening platform designed to automate first round phone screens... [Full content from purplefish-review.md]`
  }
];
