import { Award, Users, Home, TrendingUp } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: TrendingUp, value: "$2B+", label: "Sales Volume" },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Your Trusted Partner in Luxury Real Estate
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              At Elite Properties, we specialize in connecting discerning buyers with extraordinary homes. 
              Our team of experienced professionals brings unparalleled expertise and dedication to every transaction.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              With a deep understanding of the luxury market and a commitment to exceptional service, 
              we guide our clients through every step of their real estate journey.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Personalized service tailored to your needs
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Extensive network of exclusive properties
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Expert market insights and analysis
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-secondary/50 p-8 rounded-lg text-center hover-lift"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
