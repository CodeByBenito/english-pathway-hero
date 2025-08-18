import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I really learn English alone without a teacher?",
      answer: "Absolutely! Our roadmap is specifically designed for self-learners. With the right structure, resources, and methods, you can achieve fluency independently. Thousands of our students have proven this approach works effectively."
    },
    {
      question: "Do I need to know any English before starting?",
      answer: "Not at all! The roadmap starts from absolute zero. We begin with the basics like alphabet, pronunciation, and essential vocabulary, then gradually build up to advanced conversation skills."
    },
    {
      question: "How long will it take to become fluent?",
      answer: "Most students see significant progress within 3-4 months and reach conversational fluency in 6-12 months with consistent daily practice. The exact timeline depends on your dedication and study time."
    },
    {
      question: "What makes this different from other English courses?",
      answer: "Our roadmap focuses on practical, self-study methods that don't require expensive tutors or rigid schedules. It includes specific strategies for learning alone, progress tracking, and real-world application techniques."
    },
    {
      question: "Is this suitable for busy professionals?",
      answer: "Yes! The roadmap is designed to fit into busy lifestyles. You'll learn how to maximize learning during commutes, breaks, and even while doing other activities. Minimum 30 minutes daily is enough to see progress."
    },
    {
      question: "What if I get stuck or have questions?",
      answer: "The roadmap includes troubleshooting guides for common challenges and recommended communities where you can get support. Plus, you'll have lifetime access to any updates and improvements."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked <span className="gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our English learning roadmap.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card border border-border rounded-lg px-6 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional support info */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground">
            Still have questions? 
            <a href="#contact" className="text-primary hover:underline ml-1">Contact us</a> 
            {" "}and we'll help you get started.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;