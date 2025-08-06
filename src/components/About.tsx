import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Microscope, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Microscope className="w-12 h-12 text-primary" />,
      title: "Laboratory Excellence",
      description: "State-of-the-art tissue culture laboratory ensuring highest quality plant propagation and disease-free specimens."
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Sustainable Growing",
      description: "Eco-friendly practices and sustainable cultivation methods that respect nature while producing premium plants."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Expert Care",
      description: "Experienced horticulturists and plant specialists dedicated to nurturing each plant with professional expertise."
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Quality Guarantee",
      description: "Every plant comes with our quality assurance, ensuring healthy growth and customer satisfaction."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Plants Grown" },
    { number: "500+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Plant Varieties" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 text-lg">About Aveeka Greens</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Growing Green Dreams
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Aveeka Greens, we're passionate about bringing the beauty and benefits of plants 
            into every home and garden. Our journey began with a simple mission: to provide 
            premium quality plants that thrive and bring joy to plant lovers everywhere.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with a vision to make quality plants accessible to everyone, Aveeka Greens 
              combines traditional horticulture wisdom with modern scientific techniques. Our 
              state-of-the-art laboratory and greenhouse facilities ensure that every plant we 
              grow meets the highest standards of health and vitality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From tissue culture propagation to organic cultivation, we use innovative methods 
              to produce plants that not only survive but flourish in their new homes. Whether 
              you're a beginner gardener or an experienced horticulturist, we have the perfect 
              plants for your needs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-card rounded-3xl p-6 shadow-green">
              <img 
                src="/lovable-uploads/58213344-050d-4717-b73e-b7b4fc882ff9.png" 
                alt="Our Laboratory" 
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-green transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary-light">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-primary mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-gradient-primary rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "To cultivate a greener world by providing exceptional plants and expert guidance, 
            making it easy for everyone to experience the joy and benefits of gardening. We believe 
            that every space, no matter how small, can be transformed into a thriving green sanctuary."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;