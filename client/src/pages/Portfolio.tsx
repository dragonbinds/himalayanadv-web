import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Premium Brand Identity",
      category: "Branding",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-branding-project-fG6VgsAqGXw5XZMKzWwnHG.webp",
      description: "Complete brand identity system with logo, guidelines, and collateral",
    },
    {
      id: 2,
      title: "Digital Campaign Excellence",
      category: "Digital Campaigns",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-digital-campaign-4Xjmbemf8VwnKaAQXYBsfe.webp",
      description: "Multi-channel digital advertising campaign with measurable ROI",
    },
    {
      id: 3,
      title: "Outdoor Impact",
      category: "Outdoor Advertising",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-outdoor-advertising-eFoCTjMmndQmkxHdCvj4Hi.webp",
      description: "Strategic billboard campaign in high-traffic urban locations",
    },
    {
      id: 4,
      title: "Creative Design Suite",
      category: "Print Media",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/abstract-creative-bg-mC9bY4KTwgyrqCqxHLiihU.webp",
      description: "Comprehensive print design package including brochures and flyers",
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Digital Campaigns",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-digital-campaign-4Xjmbemf8VwnKaAQXYBsfe.webp",
      description: "Viral social media campaign reaching 2M+ impressions",
    },
    {
      id: 6,
      title: "Brand Refresh",
      category: "Branding",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-branding-project-fG6VgsAqGXw5XZMKzWwnHG.webp",
      description: "Complete brand repositioning and visual identity overhaul",
    },
  ];

  const categories = ["all", "Branding", "Digital Campaigns", "Outdoor Advertising", "Print Media"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    // Portfolio cards animation
    if (portfolioRef.current) {
      const cards = portfolioRef.current.querySelectorAll(".portfolio-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "back.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              scrub: false,
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl text-white/80 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Showcasing our most impactful campaigns and creative solutions
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 container">
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 button-press stagger-item animate-scale-in ${
                activeFilter === cat
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/50"
                  : "glass-button hover-glow"
              }`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={portfolioRef} className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="portfolio-card group glass-card-premium overflow-hidden hover-scale-shadow cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-red-500 text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "100+", label: "Happy Clients" },
            { number: "25+", label: "Years Experience" },
            { number: "50+", label: "Team Members" },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 text-center hover-lift stagger-item animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-red-500 mb-2 animate-pulse-soft">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container">
        <div className="glass-card p-12 md:p-16 text-center animate-scale-in hover-lift">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Impressed by Our Work?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Let's create something amazing for your brand. Get in touch with our team today.
          </p>
          <Link href="/contact" className="cta-button button-press hover-glow animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
