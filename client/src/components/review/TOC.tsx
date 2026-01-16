import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCProps {
  sections: { id: string; title: string }[];
}

export function TOC({ sections }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:block sticky top-24 self-start w-64 p-6 rounded-xl border bg-card/50 backdrop-blur-sm" data-testid="nav-toc">
      <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
        Table of Contents
      </h4>
      <ul className="space-y-1 relative border-l border-border/50">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(section.id);
              }}
              className={cn(
                "block py-1.5 pl-4 text-sm transition-all duration-200 border-l-2 -ml-[2px]",
                activeId === section.id
                  ? "border-primary text-primary font-medium bg-primary/5 rounded-r-md"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
        <li>
             <a
              href="#verdict"
               className={cn(
                "block py-1.5 pl-4 text-sm transition-all duration-200 border-l-2 -ml-[2px]",
                activeId === 'verdict'
                  ? "border-primary text-primary font-medium bg-primary/5 rounded-r-md"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
             >
                The Verdict
             </a>
        </li>
      </ul>
    </nav>
  );
}
