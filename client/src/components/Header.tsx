import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 animate-slide-in-down">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover-scale">
            <img 
              src="/manus-storage/himalayan-logo_d19ad4a6.jpeg" 
              alt="Himalayan" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Link href="/contact" className="cta-button button-press hover-glow">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors button-press"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4 animate-slide-in-down">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block text-sm font-medium text-white/80 hover:text-white transition-colors stagger-item animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="block cta-button text-center stagger-item animate-slide-in-left"
              style={{ animationDelay: `${navLinks.length * 0.1}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
