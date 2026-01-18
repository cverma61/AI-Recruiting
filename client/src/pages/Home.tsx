import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/lib/articles";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useCanonical } from "@/hooks/useCanonical";

export default function Home() {
  useCanonical("/");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              The Blueprint for Modern <span className="text-primary">AI Recruiting</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Journalistic reviews, buyer guides, and deep-dive comparisons of the tools shaping the future of talent acquisition.
            </p>
            <div className="flex gap-4">
              <Link href="/buyer-guides">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all flex items-center gap-2">
                  View Buyer Guides <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Expert Analysis</h2>
              <p className="text-gray-600">Browse our latest reports by category</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {["Buyer Guides", "Comparisons", "Reviews", "Resources"].map((cat) => (
              <Link key={cat} href={`/${cat.toLowerCase().replace(" ", "-")}`}>
                <div className="p-8 border border-gray-200 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group">
                  <h3 className="text-lg font-bold mb-4">{cat}</h3>
                  <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles by Category */}
      {["Buyer Guide", "Comparison", "Review", "Resource"].map((category) => {
        const categoryArticles = articles
          .filter(a => a.category === category)
          .slice(0, 3);

        if (categoryArticles.length === 0) return null;

        const categorySlug = category.toLowerCase().replace(" ", "-") + "s";
        
        return (
          <section key={category} className="py-20 bg-gray-50 border-b last:border-0">
            <div className="container mx-auto px-4 md:px-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Latest {category}s</h2>
                <Link href={`/${categorySlug}`}>
                  <div className="flex items-center gap-2 text-primary font-bold cursor-pointer hover:underline">
                    View All <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryArticles.map((article) => (
                  <Link key={article.slug} href={`/articles/${article.slug}`}>
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col">
                      <div className="p-8 flex-1">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 block">
                          {article.category}
                        </span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 font-serif leading-relaxed line-clamp-3">
                          {article.meta_description}
                        </p>
                      </div>
                      <div className="p-8 pt-0 mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                        <span className="text-xs font-bold text-gray-400">{article.updated}</span>
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
