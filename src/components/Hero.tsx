import { Button } from "@/components/ui/button";
import { ArrowDown, Phone, ShoppingCart } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo and Content */}
          <div className="text-center md:text-left animate-grow">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/83416a8a-c053-4246-aebf-d1b6d3765517.png" 
                alt="Aveeka Greens Logo" 
                className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 mb-6 animate-float"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to<br />
              <span className="text-green-100">Aveeka Greens</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Adding Green to your Life
            </p>
            
            <p className="text-lg text-green-50 mb-12 max-w-xl mx-auto md:mx-0">
              Discover premium quality plants, from laboratory-grown seedlings to mature specimens. 
              We specialize in healthy, sustainable plants that bring nature closer to your home and heart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToProducts}
                className="text-lg px-8 py-4"
              >
                <ShoppingCart className="mr-2" />
                Shop Plants
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('tel:9725888907')}
              >
                <Phone className="mr-2" />
                Call Us: 9725888907
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-grow" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-3xl p-6 shadow-green transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/d3ff47a6-9a09-4297-9a97-2d4e8578ea70.png" 
                alt="Fresh Plant Seedling" 
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;