import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
