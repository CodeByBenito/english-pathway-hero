import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Globe, Headphones, MessageSquare, Trophy } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Learn Without Teachers",
      description: "Proven self-study methods that eliminate the need for expensive tutors or classes",
      gradient: "gradient-primary"
    },
    {
      icon: Clock,
      title: "Build Study Habits",
      description: "Structured routines and time management strategies for consistent progress",
      gradient: "gradient-success"
    },
    {
      icon: MessageSquare,
      title: "Speaking Practice Methods",
      description: "Innovative techniques to improve pronunciation and conversational skills solo",
      gradient: "gradient-accent"
    },
    {
      icon: Globe,
      title: "Real-Life Application",
      description: "Practical English for travel, business meetings, and social interactions",
      gradient: "gradient-primary"
    },
    {
      icon: Headphones,
      title: "Free Resources & Tools",
      description: "Curated list of the best free apps, websites, and materials for English learning",
      gradient: "gradient-success"
    },
    {
      icon: Trophy,
      title: "Vocabulary & Grammar Mastery",
      description: "Strategic approaches to expand vocabulary and understand grammar naturally",
      gradient: "gradient-accent"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            What You'll <span className="gradient-primary bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive roadmap covers everything you need to become fluent in English, 
            with practical strategies you can implement immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in-up" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action within benefits */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of successful English learners who transformed their lives with our roadmap.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ Instant download</span>
              <span>✓ Money-back guarantee</span>
              <span>✓ Lifetime access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;