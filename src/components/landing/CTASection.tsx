import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Complete step-by-step learning roadmap",
    "Proven self-study methods and techniques", 
    "Progress tracking and milestone checkpoints",
    "Free resources and tools guide",
    "Lifetime access with future updates",
    "30-day money-back guarantee"
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-0 shadow-hero bg-background/95 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                  Ready to Master English?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of successful learners who transformed their English skills with our comprehensive roadmap. 
                  Start your journey to fluency today!
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Pricing and CTA */}
              <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="text-center">
                  <div className="inline-flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">$47</span>
                    <span className="text-lg text-muted-foreground line-through">$97</span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-medium">50% OFF</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Limited time offer - Normal price $97</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="group">
                    <Download className="w-5 h-5 mr-2" />
                    Get Instant Access Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="group">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Questions? Chat with us
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                  <span>✓ Instant download</span>
                  <span>✓ 30-day guarantee</span>
                  <span>✓ Secure payment</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Urgency element */}
          <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                4,847 people downloaded this roadmap this month
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;