import { useState } from "react";
import { Link } from "wouter";
import { Search, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 font-sans">
            AI Recruiting <span className="text-primary">Insider</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link href="/buyer-guides" className="hover:text-primary transition-colors">Buyer Guides</Link>
          <Link href="/comparisons" className="hover:text-primary transition-colors">Comparisons</Link>
          <Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
          <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-md hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white animate-in slide-in-from-top duration-200">
          <div className="flex flex-col p-4 gap-4 text-base font-semibold text-gray-700">
            <Link href="/" className="px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Buyer Guides</Link>
            <Link href="/" className="px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Comparisons</Link>
            <Link href="/" className="px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
            <Link href="/" className="px-4 py-2 hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
            <div className="pt-4 border-t">
              <button className="w-full py-3 bg-gray-900 text-white font-bold rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
