import { Card, CardContent } from "@/components/ui/card";
import { Search, DollarSign, Key, FileCheck } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Property Search",
    description: "Access exclusive listings and find your perfect property with our expert guidance and market knowledge.",
  },
  {
    icon: DollarSign,
    title: "Market Analysis",
    description: "Receive comprehensive market insights and property valuations to make informed investment decisions.",
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Full-service property management ensuring your investment is well-maintained and profitable.",
  },
  {
    icon: FileCheck,
    title: "Transaction Support",
    description: "Seamless transaction process with legal support, documentation, and closing assistance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover-lift border-none shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
