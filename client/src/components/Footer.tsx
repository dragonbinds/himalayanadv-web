import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/5 border-t border-white/10 backdrop-blur-xl">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/himalayan-logo.png" 
              alt="Himalayan" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-white/60">
              Making brands visible through creative advertising solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
                            {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Outdoor Advertising",
                "Digital Advertising",
                "Branding",
                "Print Media",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-red-500 mt-1 flex-shrink-0" />
                <a href="tel:+919318830129" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 9318830129
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-red-500 mt-1 flex-shrink-0" />
                <a href="mailto:himalayan.advtsnew@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  himalayan.advtsnew@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Himalayan, Thakur Niwas, Shakarala, Mehli
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} Himalayan Advertising Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://instagram.com/himalayanadv.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-red-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
