import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, BookOpen, Users } from "lucide-react";

const AboutSection = () => {
  const timelineSteps = [
    {
      level: "Beginner",
      duration: "Weeks 1-4",
      description: "Foundation building with basic vocabulary and pronunciation",
      color: "accent"
    },
    {
      level: "Intermediate", 
      duration: "Weeks 5-8",
      description: "Grammar structures and conversational practice",
      color: "primary"
    },
    {
      level: "Advanced",
      duration: "Weeks 9-12",
      description: "Fluency development and real-world application", 
      color: "secondary"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Structured Learning Path",
      description: "Step-by-step progression from absolute beginner to conversational fluency"
    },
    {
      icon: BookOpen,
      title: "Practical Study Methods",
      description: "Proven techniques that work for self-learners without expensive tutors"
    },
    {
      icon: Users,
      title: "Real-World Application",
      description: "Focus on practical English for travel, business, and social situations"
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description: "Clear milestones and checkpoints to measure your improvement"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Your Complete <span className="gradient-primary bg-clip-text text-transparent">English Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't just another language course. It's a comprehensive, self-paced roadmap designed specifically 
            for independent learners who want to master English without classroom constraints.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Your Learning Journey</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                      step.color === 'accent' ? 'bg-accent text-accent-foreground' :
                      step.color === 'primary' ? 'bg-primary text-primary-foreground' :
                      'bg-secondary text-secondary-foreground'
                    }`}>
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{step.level}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{step.duration}</p>
                    <p className="text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;