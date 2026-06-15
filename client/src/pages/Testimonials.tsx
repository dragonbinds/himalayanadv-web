import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Innovations Ltd",
      role: "CEO",
      content: "Himalayan transformed our brand presence. Their strategic approach and creative excellence helped us reach new markets and increase brand awareness by 150%.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Fashion Forward",
      role: "Marketing Director",
      content: "Working with Himalayan was a game-changer. Their team understood our vision and delivered campaigns that resonated with our target audience.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Real Estate Ventures",
      role: "Business Owner",
      content: "Outstanding service and results. Himalayan's outdoor advertising campaigns generated leads that directly impacted our bottom line.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      company: "E-commerce Solutions",
      role: "Founder",
      content: "The digital campaigns created by Himalayan exceeded our expectations. Their data-driven approach and creative execution were exceptional.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      company: "Hospitality Group",
      role: "Marketing Manager",
      content: "Himalayan's branding work elevated our hotel's image significantly. The visual identity they created is now recognized across the region.",
      rating: 5,
    },
    {
      name: "Anjali Desai",
      company: "Healthcare Services",
      role: "Operations Director",
      content: "Professional, reliable, and results-oriented. Himalayan delivered our campaign on time and within budget, with exceptional quality.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Client Testimonials</span>
          </h1>
          <p className="text-xl text-white/80 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Hear from brands we've helped elevate and grow
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 hover:bg-white/12 transition-all duration-300 hover-lift stagger-item animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-red-500 text-red-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/60">{testimonial.role}</div>
                <div className="text-sm text-red-500 font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "100+", label: "Happy Clients" },
            { number: "500+", label: "Projects Completed" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "25+", label: "Years of Excellence" },
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

      {/* Success Stories */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold mb-12 text-center animate-slide-in-up">
          <span className="gradient-text">Success Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "150% Increase in Brand Awareness",
              description: "Tech Innovations Ltd saw significant growth in market presence after our comprehensive branding and digital campaign.",
            },
            {
              title: "2x ROI on Digital Campaigns",
              description: "E-commerce Solutions achieved double their expected return through our data-driven digital advertising strategy.",
            },
            {
              title: "Regional Recognition",
              description: "Hospitality Group's new brand identity became instantly recognizable across their entire region.",
            },
            {
              title: "Lead Generation Success",
              description: "Real Estate Ventures generated qualified leads directly from our outdoor advertising campaigns.",
            },
          ].map((story, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 hover-lift stagger-item animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{story.title}</h3>
              <p className="text-white/70">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold mb-12 text-center animate-slide-in-up">
          <span className="gradient-text">Why Clients Love Working With Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Personalized Attention",
              description: "Each client receives dedicated account management and regular communication.",
            },
            {
              title: "Creative Innovation",
              description: "Our team constantly pushes boundaries to deliver fresh, impactful ideas.",
            },
            {
              title: "Proven Results",
              description: "We focus on measurable outcomes and real business impact.",
            },
            {
              title: "Timely Delivery",
              description: "We respect deadlines and deliver projects on schedule, every time.",
            },
            {
              title: "Collaborative Partnership",
              description: "We work as true partners, invested in your brand's success.",
            },
            {
              title: "Quality Assurance",
              description: "Rigorous quality checks ensure excellence at every stage.",
            },
          ].map((reason, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 hover-lift stagger-item animate-scale-in"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <h4 className="text-lg font-semibold text-white mb-2">{reason.title}</h4>
              <p className="text-white/70 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container">
        <div className="glass-card p-12 md:p-16 text-center animate-scale-in hover-lift">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Ready to Become a Success Story?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Join hundreds of satisfied clients who've transformed their brands with Himalayan.
          </p>
          <Link href="/contact" className="cta-button button-press hover-glow animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
