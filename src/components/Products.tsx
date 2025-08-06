import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Eye } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laboratory Grown Seedlings",
      description: "Premium quality seedlings grown in controlled laboratory conditions. Perfect for healthy, disease-free plants with guaranteed germination rates.",
      price: "",
      image: "/lovable-uploads/58213344-050d-4717-b73e-b7b4fc882ff9.png",
      category: "Laboratory",
      featured: true,
      inStock: true
    },
    {
      id: 2,
      name: "Tissue Culture Plants",
      description: "Advanced tissue culture specimens in sterile containers. These plants offer superior genetics and consistent quality for serious gardeners.",
      price: "",
      image: "/lovable-uploads/9d45e7f9-d0b4-4f8b-95f8-d64a034437b7.png",
      category: "Laboratory",
      featured: true,
      inStock: true
    },
    {
      id: 3,
      name: "Micro-propagated Specimens",
      description: "Scientifically propagated plants with enhanced growth characteristics. Ideal for commercial cultivation and research purposes.",
      price: "",
      image: "/lovable-uploads/2523cc72-e25c-4a43-8c12-10b05b80f5ea.png",
      category: "Laboratory",
      featured: false,
      inStock: true
    },
    {
      id: 4,
      name: "Fresh Leafy Greens",
      description: "Organically grown fresh vegetables and leafy greens. Perfect for your kitchen garden and healthy eating lifestyle.",
      price: "",
      image: "/lovable-uploads/03a48b7e-33ad-4d55-bde5-cdc1f7fe564f.png",
      category: "Vegetables",
      featured: true,
      inStock: true
    },
    {
      id: 5,
      name: "Young Plant Nursery",
      description: "Healthy young plants ready for transplanting. These robust seedlings are perfect for starting your own garden.",
      price: "",
      image: "/lovable-uploads/f103a41f-fd69-4236-8eca-961f863f71ed.png",
      category: "Nursery",
      featured: false,
      inStock: true
    },
    {
      id: 6,
      name: "Premium Seedlings",
      description: "Hand-selected premium seedlings with strong root systems. Perfect for both indoor and outdoor cultivation.",
      price: "",
      image: "/lovable-uploads/d3ff47a6-9a09-4297-9a97-2d4e8578ea70.png",
      category: "Nursery",
      featured: true,
      inStock: true
    }
  ];

  const categories = ["All", "Laboratory", "Vegetables", "Nursery"];

  return (
    <section id="products" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Plant Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From laboratory-grown specimens to fresh vegetables, discover our diverse range of 
            high-quality plants. Each plant is carefully nurtured to ensure the best possible 
            start for your green journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-green transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary-light overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-center">
                  <Badge variant={product.inStock ? "default" : "secondary"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Notify Me"}
                </Button>
                <Button variant="outline" size="icon">
                  <Eye className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-10 py-4">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;