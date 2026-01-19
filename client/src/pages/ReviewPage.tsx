import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Navbar } from "@/components/layout/Navbar";
import { Verdict } from "@/components/review/Verdict";
import { TOC } from "@/components/review/TOC";
import { articles } from "@/lib/articles";
import { Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, ArrowRight, CheckCircle2 } from "lucide-react";
import stockImage from '@assets/stock_images/abstract_digital_net_94d5aa42.jpg';
import { useRoute } from "wouter";
import { Progress } from "@/components/ui/progress";
import { Footer } from "@/components/layout/Footer";
import { useCanonical } from "@/hooks/useCanonical";

const CXPillarsRubric = () => {
  const pillars = [
    { name: "Frictionless process", weight: 25, desc: "mobile first, clear time estimates, no surprise steps, easy handoff from apply to screen" },
    { name: "Scheduling and logistics", weight: 20, desc: "self serve reschedules, reminders, time zones, buffers, shift aware slots" },
    { name: "Clarity and transparency", weight: 20, desc: "consistent questions, clear next steps, explainable outcomes, visible status" },
    { name: "Respect and trust", weight: 20, desc: "opt outs honored, privacy explained, no spam cadence, tone that feels human" },
    { name: "Accessibility and inclusion", weight: 15, desc: "low bandwidth friendly, localization, accessible UX where applicable" },
  ];

  return (
    <div className="my-10 bg-card rounded-xl border border-border/50 overflow-hidden">
      <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          CX Pillars & Weights
        </h3>
      </div>
      <div className="divide-y divide-border/30">
        {pillars.map((pillar) => (
          <div key={pillar.name} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-muted/20 transition-colors">
            <div className="md:col-span-4">
              <h4 className="font-bold text-foreground mb-1">{pillar.name}</h4>
              <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                Weight: {pillar.weight}%
              </span>
            </div>
            
            <div className="md:col-span-8 space-y-3">
              <Progress value={pillar.weight} max={25} className="h-2" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import { Link } from "wouter";

// ... previous imports

export default function ReviewPage() {
  const [, params] = useRoute("/articles/:slug");
  const slug = params?.slug;
  
  // SEO Canonical Tag
  useCanonical(slug ? `/articles/${slug}` : undefined);
  
  // Find article from new library
  const dynamicArticle = articles.find(a => a.slug === slug);
  
  // Find related articles (same category, excluding current)
  const relatedArticles = articles
    .filter(a => a.category === dynamicArticle?.category && a.slug !== slug)
    .slice(0, 3);
  
  const { title, date, author, readTime, tags, verdict, sections, alternatives, jsonLd } = {
    title: dynamicArticle?.title || "",
    date: dynamicArticle?.updated || "",
    author: dynamicArticle?.author || "Editorial Team",
    readTime: dynamicArticle?.readTime || "",
    tags: dynamicArticle?.tags || [],
    verdict: null,
    sections: dynamicArticle ? (() => {
      const parts = dynamicArticle.content.split(/^##\s+(.+)$/gm);
      const sections = [];
      
      // Intro
      if (parts[0]?.trim()) {
        sections.push({ id: "intro", title: "Introduction", content: parts[0] });
      }
      
      // Sections
      for (let i = 1; i < parts.length; i += 2) {
        sections.push({
          id: parts[i].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
          title: parts[i],
          content: parts[i+1]
        });
      }
      return sections;
    })() : [],
    alternatives: [],
    jsonLd: dynamicArticle?.jsonLd
  };

  useEffect(() => {
    // Scroll to top when slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [jsonLd]);

  if (!dynamicArticle) {
    return <div className="p-20 text-center font-sans">Article not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
        <img 
          src={stockImage}
          alt="Abstract Technology Background"
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
        />
        
        <div className="relative w-full z-20 pb-12 pt-32 bg-gradient-to-t from-background to-transparent">
          <div className="container px-4 md:px-8 max-w-5xl mx-auto">
            <div className="flex gap-2 mb-6 flex-wrap">
              {tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans mb-6 leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <User className="w-4 h-4" />
                </div>
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <main className="lg:col-span-8 space-y-12">
            {/* Introduction - styled as lead text - ONLY for static Purplefish review */}
            

            {verdict && (
              <div id="verdict">
                  <Verdict {...verdict} />
              </div>
            )}

            {/* Dynamic Sections */}
            <div className="space-y-16">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24 group">
                  {section.title !== "Article Content" && (
                    <h2 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-primary rounded-full group-hover:h-10 transition-all duration-300" />
                      {section.title}
                    </h2>
                  )}
                  
                  {section.title === "A practical CX rubric you can use" ? (
                    <div className="prose prose-lg max-w-none text-muted-foreground/90 font-serif leading-relaxed">
                      <p>This rubric is designed to predict completion and conversion, not win UX awards.</p>
                      
                      <CXPillarsRubric />
                      
                      <h3 className="text-xl font-bold font-sans text-foreground mt-8 mb-4">How to score vendors without getting fooled by demos</h3>
                      <p>Use the same three test cases across every vendor:</p>
                      <ol className="list-decimal pl-6 space-y-2 mb-6">
                        <li>A candidate who applies at 11:30 pm on a phone with weak service</li>
                        <li>A candidate who needs to reschedule twice and switches language midway through an interview due to trouble responded</li>
                        <li>A candidate who completes the screen but is rejected and asks why</li>
                      </ol>
                      <p>If a vendor cannot show those end to end, they are not ready for a CX focused rollout.</p>
                    </div>
                  ) : (
                    <div className="prose prose-lg max-w-none text-gray-800 font-serif leading-loose prose-headings:text-gray-900 prose-headings:font-sans prose-strong:text-gray-900 prose-a:text-primary prose-p:mb-6 prose-li:mb-4 prose-ul:my-8 prose-ul:mb-6 prose-ol:mb-6 prose-headings:mt-16 prose-h2:mt-20">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({node, ...props}) => (
                            <div className="overflow-x-auto my-8 rounded-lg border bg-card/50">
                              <table className="w-full text-sm text-left" {...props} />
                            </div>
                          ),
                          thead: ({node, ...props}) => (
                            <thead className="bg-muted text-muted-foreground uppercase text-xs font-bold tracking-wider" {...props} />
                          ),
                          th: ({node, ...props}) => (
                            <th className="px-6 py-4 border-b whitespace-nowrap" {...props} />
                          ),
                          td: ({node, ...props}) => (
                            <td className="px-6 py-4 border-b last:border-0" {...props} />
                          ),
                          tr: ({node, ...props}) => (
                            <tr className="hover:bg-muted/50 transition-colors" {...props} />
                          )
                        }}
                      >
                        {section.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </section>
              ))}
            </div>

             {/* Alternatives Section */}
             {alternatives && alternatives.length > 0 && (
               <section id="alternatives" className="scroll-mt-24 pt-16 border-t">
                  <h2 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-8">
                      Top Alternatives
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                      {alternatives.map((alt) => (
                          <div key={alt.name} className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{alt.name}</h3>
                              <div className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded mb-4">
                                  {alt.bestFor}
                              </div>
                              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                  {alt.description}
                              </p>
                              <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:underline">
                                  Read Comparison <ArrowRight className="w-4 h-4 ml-1" />
                              </a>
                          </div>
                      ))}
                  </div>
               </section>
             )}

             {/* Related Articles Section */}
             {relatedArticles && relatedArticles.length > 0 && (
               <section className="pt-16 border-t mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-8">
                      Related Reviews
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedArticles.map((article) => (
                      <Link key={article.slug} href={`/articles/${article.slug}`}>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col">
                          <div className="p-6 flex-1">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">
                              {article.category}
                            </span>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 font-serif leading-relaxed line-clamp-3 text-sm">
                              {article.meta_description}
                            </p>
                          </div>
                          <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between mt-auto">
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{article.readTime}</span>
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
               </section>
             )}

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <TOC sections={sections.map(s => ({ id: s.id, title: s.title }))} showVerdict={!!verdict} />
              
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <h4 className="font-bold text-foreground mb-4 font-sans">Share this review</h4>
                  <div className="flex gap-2">
                      <button 
                        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="p-2 bg-background border rounded-full hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"
                        title="Share on Twitter"
                      >
                          <Twitter className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="p-2 bg-background border rounded-full hover:text-[#0077b5] hover:border-[#0077b5] transition-colors"
                        title="Share on LinkedIn"
                      >
                          <Linkedin className="w-5 h-5" />
                      </button>
                       <button 
                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="p-2 bg-background border rounded-full hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
                        title="Share on Facebook"
                      >
                          <Facebook className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          // Optional: You could add a toast here
                        }}
                        className="p-2 bg-background border rounded-full hover:text-primary hover:border-primary transition-colors"
                        title="Copy Link"
                      >
                          <Share2 className="w-5 h-5" />
                      </button>
                  </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}