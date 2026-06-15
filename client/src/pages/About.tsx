import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">About Himalayan</span>
          </h1>
          <p className="text-xl text-white/80 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            A legacy of creativity, innovation, and trust since 2000
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white animate-slide-in-left">Our Story</h2>
          <div className="glass-card p-12 hover-lift animate-scale-in">
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Himalayan was founded in 2000 with a simple mission: to help brands become visible and memorable. What started as a small team of passionate creatives has evolved into a full-service advertising agency serving hundreds of clients across multiple industries.
            </p>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Over the past 25 years, we've witnessed the evolution of advertising from traditional media to the digital age. Through every transformation, we've remained committed to one core principle: creating advertising that works.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Today, Himalayan is recognized as a trusted partner for brands seeking strategic, creative, and results-driven advertising solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              content: "To elevate brands through creative advertising solutions that drive visibility, engagement, and growth.",
            },
            {
              title: "Our Vision",
              content: "To be the most trusted advertising partner for brands that refuse to be invisible.",
            },
            {
              title: "Our Values",
              content: "Integrity, Excellence, Innovation, Collaboration, and Results-Driven Thinking.",
            },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 hover-lift stagger-item animate-scale-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold text-red-500 mb-4">{item.title}</h3>
              <p className="text-white/80">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold mb-12 text-center animate-slide-in-up">
          <span className="gradient-text">Our Journey</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { year: "2000", title: "Founded", desc: "Himalayan Advertising Agency is established with a vision to transform brands" },
            { year: "2005", title: "Growth", desc: "Expanded team and services to include digital advertising solutions" },
            { year: "2010", title: "Innovation", desc: "Pioneered integrated marketing campaigns combining traditional and digital media" },
            { year: "2015", title: "Recognition", desc: "Won multiple industry awards for creative excellence and campaign effectiveness" },
            { year: "2020", title: "Transformation", desc: "Embraced digital transformation and expanded global reach" },
            { year: "2025", title: "Excellence", desc: "Serving 100+ clients with 50+ team members across multiple disciplines" },
          ].map((milestone, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 hover-lift stagger-item animate-slide-in-left"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-red-500">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-white/70">{milestone.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "25+", label: "Years of Experience" },
            { number: "50+", label: "Team Members" },
            { number: "500+", label: "Projects Completed" },
            { number: "100+", label: "Happy Clients" },
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
            <span className="gradient-text">Ready to Partner With Us?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss how Himalayan can help elevate your brand.
          </p>
          <Link href="/contact" className="cta-button button-press hover-glow animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
