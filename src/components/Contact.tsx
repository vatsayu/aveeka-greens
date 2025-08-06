import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "9725888907",
      link: "tel:9725888907"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "aveekagreens2016@yahoo.com",
      link: "mailto:aveekagreens2016@yahoo.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Ghaziabad, India",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon-Sat: 9AM-6PM",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our plants or need expert advice? We're here to help! 
            Reach out to us and let's grow something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-green transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary-light cursor-pointer"
                  onClick={() => contact.link !== "#" && window.open(contact.link)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{contact.title}</h4>
                        <p className="text-muted-foreground">{contact.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Start Your Green Journey?</h4>
              <p className="mb-6 text-green-100">
                Call us directly for immediate assistance or personalized plant recommendations. 
                Our experts are ready to help you choose the perfect plants for your space.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('tel:9725888907')}
              >
                <Phone className="mr-2" />
                Call Now: 9725888907
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-green border-2 hover:border-primary-light transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-2 focus:border-primary" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-2 focus:border-primary" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Your phone number" className="border-2 focus:border-primary" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="What's this about?" className="border-2 focus:border-primary" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your plant needs, questions, or how we can help you..."
                    rows={5}
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                  <Send className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft border-2 border-primary-light">
            <h4 className="text-2xl font-bold text-primary mb-4">Visit Our Nursery</h4>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Come see our plants in person! Our nursery is open for visits where you can 
              explore our collection, get expert advice, and see our laboratory facilities. 
              We'd love to show you around and help you find the perfect plants for your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;