import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ReviewPage from "@/pages/ReviewPage";
import Home from "@/pages/Home";
import ConsultationPage from "@/pages/ConsultationPage";
import CategoryTemplate from "@/components/layout/CategoryTemplate";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/consultation" component={ConsultationPage} />
      
      {/* Category Routes */}
      <Route path="/buyer-guides">
        {() => (
          <CategoryTemplate 
            category="Buyer Guide" 
            title="Buyer Guides" 
            description="In-depth, neutral guides to help you navigate the complex AI recruiting software landscape." 
          />
        )}
      </Route>
      <Route path="/comparisons">
        {() => (
          <CategoryTemplate 
            category="Comparison" 
            title="Tool Comparisons" 
            description="Side-by-side breakdowns of the leading AI recruiting platforms to see which fits your workflow." 
          />
        )}
      </Route>
      <Route path="/reviews">
        {() => (
          <CategoryTemplate 
            category="Review" 
            title="Software Reviews" 
            description="Honest, journalistic reviews of AI recruiting tools based on real-world testing and buyer feedback." 
          />
        )}
      </Route>
      <Route path="/resources">
        {() => (
          <CategoryTemplate 
            category="Resource" 
            title="Recruiting Resources" 
            description="Guides, frameworks, and tools to help your team implement AI recruiting effectively." 
          />
        )}
      </Route>

      <Route path="/articles/:slug" component={ReviewPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
