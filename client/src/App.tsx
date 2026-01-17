import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ReviewPage from "@/pages/ReviewPage";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/CategoryPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/buyer-guides" component={CategoryPage} />
      <Route path="/comparisons" component={CategoryPage} />
      <Route path="/reviews" component={CategoryPage} />
      <Route path="/resources" component={CategoryPage} />
      <Route path="/articles/purplefish-review" component={ReviewPage} />
      {/* Dynamic article route would go here, using purplefish-review as the baseline for now */}
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
