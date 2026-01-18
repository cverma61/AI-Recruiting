import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-24">
      <div className="container px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-4 max-w-sm">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-background font-sans whitespace-nowrap">
            AI Recruiting <span className="text-primary">Insider</span>
          </span>
          <p className="text-sm text-gray-400">
            Trusted software reviews for modern teams. We help you choose the
            right tools for your stack.
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤️ by{" "}
            <a
              href="https://supaflow.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Supaflow Studio
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                <Link href="/buyer-guides">Buyer Guides</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/comparisons">Comparisons</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/reviews">Reviews</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
