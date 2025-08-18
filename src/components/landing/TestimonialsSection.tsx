import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Marketing Manager",
      country: "Spain",
      image: "👩‍💼",
      rating: 5,
      text: "I went from barely speaking English to confidently presenting to international clients in just 3 months. The roadmap's step-by-step approach made all the difference!"
    },
    {
      name: "Ahmed Hassan",
      role: "Software Developer", 
      country: "Egypt",
      image: "👨‍💻",
      rating: 5,
      text: "As a busy developer, I needed a learning method that fit my schedule. This roadmap taught me how to learn efficiently during commutes and breaks."
    },
    {
      name: "Li Wei",
      role: "Student",
      country: "China", 
      image: "👩‍🎓",
      rating: 5,
      text: "The speaking practice methods were incredible! I overcame my fear of speaking English and now I'm studying abroad. Thank you for this amazing guide!"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Real Success <span className="gradient-success bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how students from around the world transformed their English skills with our roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.country}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;