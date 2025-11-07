import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$4,950,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    badge: "Featured",
  },
  {
    id: 2,
    image: property2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$6,750,000",
    beds: 3,
    baths: 3,
    sqft: "3,500",
    badge: "New",
  },
  {
    id: 3,
    image: property3,
    title: "Classic Family Estate",
    location: "Greenwich, CT",
    price: "$3,200,000",
    beds: 6,
    baths: 5,
    sqft: "5,800",
    badge: "Popular",
  },
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most sought-after locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className="overflow-hidden hover-lift animate-fade-in-up border-none shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-white">
                  {property.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin size={16} />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <h3 className="text-2xl font-display font-semibold mb-2">{property.title}</h3>
                <p className="text-3xl font-bold text-accent mb-4">{property.price}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square size={16} />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
