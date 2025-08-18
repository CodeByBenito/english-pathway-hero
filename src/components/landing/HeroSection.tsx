import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border shadow-md">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Complete English Learning Guide</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Learn English From{" "}
              <span className="gradient-primary bg-clip-text text-transparent">Zero</span>
              {" "}– Your Step-by-Step Roadmap to Success
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              A complete guide to learning English on your own – practical, simple, and effective. 
              Master English with proven strategies and structured learning paths.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get the Roadmap Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                See Sample Content
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">12 Weeks</div>
                <div className="text-sm text-muted-foreground">Average</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students learning English independently with books and technology"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg animate-float">
              <span className="font-semibold">100% Self-Paced</span>
            </div>
            <div className="absolute bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <span className="font-semibold">Proven Methods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;