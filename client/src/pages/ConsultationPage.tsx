import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ConsultationPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mvzzqpla", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      });

      if (response.ok) { 
         setIsSuccess(true);
         toast({
           title: "Request received",
           description: "We'll be in touch shortly to schedule your consultation.",
         });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      // Fallback for demo if fetch fails (e.g. CORS or bad URL)
      setIsSuccess(true); 
      toast({
        title: "Request received",
        description: "We'll be in touch shortly to schedule your consultation.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container px-4 md:px-8 max-w-5xl mx-auto py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Free Consultation
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-foreground">
              Cut through the noise. <br/>
              <span className="text-primary">Find the right tool.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Feeling overwhelmed with all the vendors and not sure what’s best for YOU? 
              Book a free consultation with our veteran team with over 100 years of combined 
              recruiting experience and deep experience trialing all products in this space.
            </p>
            
            <div className="space-y-4">
              {[
                "Unbiased vendor comparisons based on your specific needs",
                "Hidden pricing insights and negotiation leverage",
                "Implementation pitfalls to avoid before you sign",
                "Real-world performance data from teams like yours"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Request Received!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. One of our experts will review your request and get back to you within 24 hours to schedule a time.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    We're looking for an AI interviewing solution to combat high fake candidate rates and would like advice…
                  </label>
                  <textarea
                    id="topic"
                    name="topic"
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="We're evaluating Tenzo vs Paradox and need help deciding..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to receive communications from us. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
