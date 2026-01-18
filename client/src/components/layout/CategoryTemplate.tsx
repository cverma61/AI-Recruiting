import { Navbar } from "@/components/layout/Navbar";
import { articles, Article } from "@/lib/articles";
import { ArrowRight, Search, Filter } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

import { Footer } from "@/components/layout/Footer";

export default function CategoryPage({ category, title, description }: { category: string, title: string, description: string }) {
  const [search, setSearch] = useState("");
  const filteredArticles = articles.filter(a => 
    a.category === category && 
    (a.title.toLowerCase().includes(search.toLowerCase()) || a.meta_description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <header className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </header>

      <section className="py-12 border-b bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
              <Filter className="w-4 h-4" />
              <span>{filteredArticles.length} Articles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-6 overflow-hidden border border-gray-100 relative">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-6 py-2 bg-white rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-serif line-clamp-2 mb-4">
                    {article.meta_description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span>{article.updated}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
