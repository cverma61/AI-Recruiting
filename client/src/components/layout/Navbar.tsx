import { Link } from "wouter";
import { Search, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tighter text-foreground font-sans">
              Tech<span className="text-primary">Reviews</span>
            </span>
          </Link>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Software</Link>
            <Link href="/" className="hover:text-primary transition-colors">Hardware</Link>
            <Link href="/" className="hover:text-primary transition-colors">AI Tools</Link>
            <Link href="/" className="hover:text-primary transition-colors">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-accent rounded-full transition-colors" data-testid="btn-search">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="md:hidden p-2 hover:bg-accent rounded-full transition-colors">
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="hidden md:block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}
