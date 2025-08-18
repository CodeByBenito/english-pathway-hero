import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              English Roadmap
            </h3>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              The complete guide to learning English from zero by yourself. 
              Practical, simple, and effective methods for independent learners.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="text-background/70 hover:text-background transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors">About Roadmap</a></li>
              <li><a href="#benefits" className="text-background/70 hover:text-background transition-colors">What You'll Learn</a></li>
              <li><a href="#testimonials" className="text-background/70 hover:text-background transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="text-background/70 hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4" />
                <span>support@englishroadmap.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <span>24/7 Customer Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/60">
            © 2024 English Roadmap. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;