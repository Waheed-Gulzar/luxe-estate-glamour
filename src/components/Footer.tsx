import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Elite <span className="text-accent">Properties</span>
            </h3>
            <p className="opacity-80 mb-4">
              Your trusted partner in luxury real estate, delivering exceptional properties and service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#properties" className="hover:text-accent transition-colors">Properties</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">Buy Property</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sell Property</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Investment Advisory</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 opacity-80">
              <li>123 Luxury Avenue</li>
              <li>Beverly Hills, CA 90210</li>
              <li>+1 (555) 123-4567</li>
              <li>info@eliteproperties.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-80">
          <p>&copy; {currentYear} Elite Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
