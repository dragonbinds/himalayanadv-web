import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Zap, TrendingUp, Award, Users, Lightbulb, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Service cards stagger animation
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay: index * 0.15,
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

    // Process steps animation
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll(".process-step");
      steps.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const allServices = [
    {
      icon: Zap,
      title: "Outdoor Advertising",
      description: "Make your brand impossible to miss with strategic outdoor placements",
      features: ["Billboards", "Hoardings", "Signage", "Transit Advertising"],
    },
    {
      icon: TrendingUp,
      title: "Digital Advertising",
      description: "Reach your audience where they spend their time online",
      features: ["Social Media Ads", "Google Ads", "Online Campaigns", "Programmatic Ads"],
    },
    {
      icon: Award,
      title: "Branding",
      description: "Build a distinctive brand identity that resonates with your audience",
      features: ["Logo Design", "Brand Identity", "Packaging", "Brand Guidelines"],
    },
    {
      icon: Users,
      title: "Print Media",
      description: "Create tangible connections with high-quality print materials",
      features: ["Brochures", "Flyers", "Posters", "Direct Mail"],
    },
    {
      icon: Zap,
      title: "Creative Design",
      description: "Transform ideas into visually stunning creative assets",
      features: ["Graphic Design", "Marketing Creatives", "Illustrations", "Motion Graphics"],
    },
    {
      icon: TrendingUp,
      title: "Campaign Strategy",
      description: "Strategic planning that drives results and builds brand awareness",
      features: ["Marketing Planning", "Brand Awareness", "Campaign Development", "Analytics"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-white/80 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive advertising solutions tailored to your brand's unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="service-card glass-card-premium p-8 hover-scale-shadow group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <Icon className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section ref={servicesRef} className="py-20 container space-y-20">
        {allServices.slice(0, 3).map((service, idx) => {
          const Icon = service.icon;
          return (
            <div 
              key={idx} 
              className="glass-card p-12 hover-lift animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-start gap-8">
                <Icon className="text-red-500 flex-shrink-0" size={48} />
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 text-lg mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 container">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
          <span className="gradient-text">Our Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: "Discovery", description: "Understanding your brand and goals" },
            { step: 2, title: "Strategy", description: "Developing a winning strategy" },
            { step: 3, title: "Design", description: "Creating compelling creative assets" },
            { step: 4, title: "Launch", description: "Executing the campaign flawlessly" },
            { step: 5, title: "Growth", description: "Measuring and optimizing results" },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="process-step glass-card-premium p-6 text-center hover-scale-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-red-500 text-white font-bold flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-white/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container">
        <div className="glass-card p-12 md:p-16 text-center animate-scale-in hover-lift">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Ready to Get Started?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss which services are right for your brand and create a plan for success.
          </p>
          <Link href="/contact" className="cta-button button-press hover-glow animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
