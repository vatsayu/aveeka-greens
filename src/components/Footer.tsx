import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Heart, Leaf } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const categories = [
    "Laboratory Plants",
    "Tissue Culture",
    "Vegetables",
    "Seedlings",
    "Nursery Plants",
    "Specialty Plants"
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/83416a8a-c053-4246-aebf-d1b6d3765517.png" 
                alt="Aveeka Greens" 
                className="w-12 h-12 mr-4 bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-2xl font-bold">Aveeka Greens</h3>
                <p className="text-green-100">Adding Green to your Life</p>
              </div>
            </div>
            
            <p className="text-green-100 text-lg leading-relaxed mb-6 max-w-md">
              Your trusted partner in bringing nature closer to home. We specialize in 
              premium quality plants, from laboratory-grown specimens to fresh vegetables, 
              all nurtured with expert care and scientific precision.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-200" />
                <span className="text-green-100">9725888907</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-200" />
                <span className="text-green-100">aveekagreens2016@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-200" />
                <span className="text-green-100">Ghaziabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-green-100 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant Categories */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Plant Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <span className="text-green-100 hover:text-white transition-colors duration-200 cursor-pointer">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-8 border-t border-green-400/30">
          <div className="bg-white/10 rounded-2xl p-8 text-center">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-green-200" />
            <h4 className="text-2xl font-bold mb-4">Start Your Green Journey Today</h4>
            <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
              Ready to transform your space with beautiful, healthy plants? Contact us for 
              expert advice and premium quality plants that will thrive in your care.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              onClick={() => window.open('tel:9725888907')}
            >
              <Phone className="mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-400/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-center md:text-left">
              © 2024 Aveeka Greens. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-green-100">Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="text-green-100">for plant lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;