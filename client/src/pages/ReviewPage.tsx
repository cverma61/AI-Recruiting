import { Navbar } from "@/components/layout/Navbar";
import { Verdict } from "@/components/review/Verdict";
import { TOC } from "@/components/review/TOC";
import { purplefishReview } from "@/lib/data";
import { Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, ArrowRight } from "lucide-react";
import stockImage from '@assets/stock_images/abstract_digital_net_94d5aa42.jpg';

export default function ReviewPage() {
  const { title, date, author, readTime, tags, verdict, sections, alternatives } = purplefishReview;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
        <img 
          src={stockImage}
          alt="Abstract Technology Background"
          className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
        />
        
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12 pt-24 bg-gradient-to-t from-background to-transparent">
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
            {/* Introduction - styled as lead text */}
            <div className="prose prose-lg md:prose-xl max-w-none text-foreground font-serif leading-loose first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
              <p>
                Purplefish is a voice screening platform designed to automate first round phone screens and push the results back into your ATS. It is typically evaluated by staffing and talent teams that want to reduce time spent on repetitive screening calls while keeping recruiters working inside their system of record.
              </p>
              <p className="text-base text-muted-foreground">
                  This review focuses on what Purplefish does well, where buyers should be realistic, and what to validate in a demo and pilot. It also includes common alternatives for teams that need more structured scoring and stronger audit artifacts.
              </p>
            </div>

            <div id="verdict">
                <Verdict {...verdict} />
            </div>

            {/* Dynamic Sections */}
            <div className="space-y-16">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24 group">
                  <h2 className="text-2xl md:text-3xl font-bold font-sans text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-primary rounded-full group-hover:h-10 transition-all duration-300" />
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground/90 font-serif leading-relaxed">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

             {/* Alternatives Section */}
             <section id="alternatives" className="scroll-mt-24">
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

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <TOC sections={sections} />
            
            <div className="sticky top-[calc(6rem+300px)] p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-foreground mb-4 font-sans">Share this review</h4>
                <div className="flex gap-2">
                    <button className="p-2 bg-background border rounded-full hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors">
                        <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-background border rounded-full hover:text-[#0077b5] hover:border-[#0077b5] transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </button>
                     <button className="p-2 bg-background border rounded-full hover:text-[#1877F2] hover:border-[#1877F2] transition-colors">
                        <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-background border rounded-full hover:text-primary hover:border-primary transition-colors">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
          </aside>

        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-16 mt-24">
        <div className="container px-4 md:px-8 mx-auto grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
                <span className="text-xl font-bold tracking-tighter text-background font-sans">
                Tech<span className="text-primary">Reviews</span>
                </span>
                <p className="text-sm text-gray-400">
                    Trusted software reviews for modern teams. We help you choose the right tools for your stack.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer">HR Tech</li>
                    <li className="hover:text-white cursor-pointer">Sales Tools</li>
                    <li className="hover:text-white cursor-pointer">Developer Tools</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer">About Us</li>
                    <li className="hover:text-white cursor-pointer">Editorial Policy</li>
                    <li className="hover:text-white cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  );
}
