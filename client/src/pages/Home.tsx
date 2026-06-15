import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Zap, TrendingUp, Award } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero text character reveal
    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.innerHTML = "";
      
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        return span;
      });

      titleRef.current.innerHTML = "";
      chars.forEach((char) => titleRef.current?.appendChild(char));

      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "back.out",
      });
    }

    // Service cards scroll trigger
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
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

    // Portfolio cards with parallax
    if (portfolioRef.current) {
      const cards = portfolioRef.current.querySelectorAll(".portfolio-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: -10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.9,
            delay: index * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );

        // Hover parallax effect
        card.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
          const y = (mouseEvent.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotateY: x * 10,
            rotateX: -y * 10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    // Stat cards counter animation
    const statCards = document.querySelectorAll(".stat-card");
    statCards.forEach((card) => {
      const number = card.querySelector(".stat-number");
      if (number) {
        const finalValue = parseInt(number.textContent || "0");
        gsap.fromTo(
          { value: 0 },
          { value: finalValue, duration: 2, ease: "power2.out" },
          {
            onUpdate: function () {
              number.textContent = Math.floor(this.targets()[0].value) + "+";
            },
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: Zap,
      title: "Outdoor Advertising",
      description: "Strategic placements that make your brand impossible to miss",
    },
    {
      icon: TrendingUp,
      title: "Digital Advertising",
      description: "Reach your audience where they spend their time online",
    },
    {
      icon: Award,
      title: "Branding",
      description: "Build a distinctive identity that resonates",
    },
  ];

  const featuredWork = [
    {
      title: "Premium Brand Identity",
      category: "Branding",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-branding-project-fG6VgsAqGXw5XZMKzWwnHG.webp",
    },
    {
      title: "Digital Campaign Excellence",
      category: "Digital Campaigns",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-digital-campaign-4Xjmbemf8VwnKaAQXYBsfe.webp",
    },
    {
      title: "Outdoor Impact",
      category: "Outdoor Advertising",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663764352055/N83qbqNeFhnxTwoWNTMDNi/portfolio-outdoor-advertising-eFoCTjMmndQmkxHdCvj4Hi.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42]">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-20 relative overflow-hidden min-h-[600px] flex items-center">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#041F42] via-[#0a2d5c] to-[#051829] animate-gradient-shift"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-float" style={{ animation: 'float 20s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animation: 'float 25s ease-in-out infinite reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animation: 'pulse 8s ease-in-out infinite' }}></div>
        </div>

        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animation: 'pulse 6s ease-in-out infinite' }}></div>
        </div>

        <div className="container max-w-4xl mx-auto text-center relative z-10 backdrop-blur-sm">
          <div ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
            Elevating Brands Through Creative Advertising
          </div>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            We create impactful advertising solutions that help businesses stand out, connect with customers, and grow with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Link href="/contact" className="premium-button">
              Start Your Project
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <Link href="/portfolio" className="glass-card-premium px-8 py-3 rounded-full font-semibold hover:scale-105">
              View Our Work
            </Link>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "25", label: "Years Experience" },
              { number: "500", label: "Projects Delivered" },
              { number: "100", label: "Happy Clients" },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="stat-card glass-card-premium p-8 hover-scale-shadow"
                style={{ animationDelay: `${1.2 + idx * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-red-500 mb-2">
                  <span className="stat-number">{stat.number}</span>
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-20 md:py-32 container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive advertising solutions tailored to your brand's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="service-card glass-card-premium p-8 hover-scale-shadow cursor-pointer group"
              >
                <Icon className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link href="/services" className="premium-button">
            View All Services
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={portfolioRef} className="py-20 md:py-32 container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Showcasing our most impactful campaigns and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWork.map((project, idx) => (
            <div 
              key={idx}
              className="portfolio-card group glass-card-premium overflow-hidden hover-scale-shadow cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link href="/portfolio" className="premium-button">
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 container">
        <div className="glass-card-premium p-12 md:p-16 text-center hover-scale-shadow">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Ready to Elevate Your Brand?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's build something great together. Contact us today to discuss your advertising needs.
          </p>
          <Link href="/contact" className="premium-button animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
