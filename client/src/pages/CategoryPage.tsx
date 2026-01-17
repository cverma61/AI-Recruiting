import { useRoute } from "wouter";
import { articles } from "@/lib/articles";
import { Navbar } from "@/components/layout/Navbar";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function CategoryPage() {
  const [, params] = useRoute("/:category");
  const categorySlug = params?.category || "";
  
  // Map URL slug to display name
  const categoryMap: Record<string, string> = {
    "buyer-guides": "Buyer Guide",
    "comparisons": "Comparison",
    "reviews": "Review",
    "resources": "Resource"
  };
  
  const categoryName = categoryMap[categorySlug] || "Articles";
  const filteredArticles = articles.filter(a => 
    a.category.toLowerCase().replace(" ", "-") === categorySlug.replace("-s", "") ||
    a.category === categoryName
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <header className="bg-white border-b py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{categoryName}s</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            In-depth analysis and expert advice on the latest AI recruiting technologies for {categoryName.toLowerCase()}s.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded leading-none">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 font-serif">
                    {article.meta_description}
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4 text-[11px] text-gray-500 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.updated}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
