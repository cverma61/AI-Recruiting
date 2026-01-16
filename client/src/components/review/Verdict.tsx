import { Check, X, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerdictProps {
  score: number;
  summary: string;
  pros: string[];
  cons: string[];
}

export function Verdict({ score, summary, pros, cons }: VerdictProps) {
  return (
    <div className="my-10 overflow-hidden rounded-xl border bg-card shadow-sm" data-testid="card-verdict">
      <div className="bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center border-b">
        <div className="flex-shrink-0 flex flex-col items-center justify-center bg-background rounded-lg p-4 border shadow-sm w-full md:w-auto">
          <span className="text-5xl font-bold text-primary tracking-tighter">{score}</span>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">Excellent</span>
          <div className="flex mt-2">
             {[...Array(5)].map((_, i) => (
                <Star key={i} className={cn("w-4 h-4", i < 4 ? "fill-primary text-primary" : "fill-primary/20 text-primary/20")} />
             ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold font-sans mb-2">The Verdict</h3>
          <p className="text-muted-foreground font-serif leading-relaxed">{summary}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        <div className="p-6 md:p-8">
          <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-emerald-600 mb-4">
            <span className="bg-emerald-100 p-1 rounded mr-2"><Check className="w-4 h-4" /></span>
            Pros
          </h4>
          <ul className="space-y-3">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 md:p-8">
          <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-rose-600 mb-4">
            <span className="bg-rose-100 p-1 rounded mr-2"><X className="w-4 h-4" /></span>
            Cons
          </h4>
          <ul className="space-y-3">
            {cons.map((con, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                <X className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
