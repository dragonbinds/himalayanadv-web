import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Users, Zap, Target, CheckCircle, Award, Gauge } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "25+ years of combined expertise in advertising and creative solutions",
    },
    {
      icon: Zap,
      title: "Creative Excellence",
      description: "Award-winning creative team that pushes boundaries and delivers innovation",
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "Data-driven strategies that align with your business objectives",
    },
    {
      icon: CheckCircle,
      title: "Client-Focused",
      description: "Your success is our success. We work as true partners, not vendors",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage ensure excellence",
    },
    {
      icon: Gauge,
      title: "Timely Delivery",
      description: "We respect your timeline and deliver projects on schedule",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Why Choose Himalayan</span>
          </h1>
          <p className="text-xl text-white/80 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Discover what makes us the trusted partner for leading brands
          </p>
        </div>
      </section>

      {/* Main Reasons Grid */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div 
                key={idx} 
                className="glass-card p-8 hover:bg-white/12 transition-all duration-300 group hover-lift stagger-item animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-white/70">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 container space-y-12">
        {/* Experienced Team */}
        <div 
          className="glass-card p-12 hover-lift animate-slide-in-left"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="flex items-start gap-8">
            <Users className="text-red-500 flex-shrink-0" size={48} />
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Experienced Team</h3>
              <p className="text-white/80 text-lg mb-4">
                Our team brings 25+ years of combined experience in advertising, branding, and marketing. We've worked with brands of all sizes, from startups to Fortune 500 companies.
              </p>
              <ul className="space-y-2">
                {[
                  "Expert strategists and creative directors",
                  "Skilled designers and copywriters",
                  "Data analysts and performance specialists",
                  "Project managers with proven track records",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Creative Excellence */}
        <div 
          className="glass-card p-12 hover-lift animate-slide-in-right"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-start gap-8">
            <Zap className="text-red-500 flex-shrink-0" size={48} />
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Creative Excellence</h3>
              <p className="text-white/80 text-lg mb-4">
                We don't just create ads—we create experiences. Our award-winning creative team pushes boundaries and delivers innovative solutions that capture attention and drive results.
              </p>
              <ul className="space-y-2">
                {[
                  "Original, bold creative concepts",
                  "Award-winning design and copywriting",
                  "Multi-channel campaign development",
                  "Cutting-edge visual storytelling",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Strategic Thinking */}
        <div 
          className="glass-card p-12 hover-lift animate-slide-in-left"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex items-start gap-8">
            <Target className="text-red-500 flex-shrink-0" size={48} />
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Strategic Thinking</h3>
              <p className="text-white/80 text-lg mb-4">
                We combine data-driven insights with creative thinking to develop strategies that align with your business objectives and deliver measurable results.
              </p>
              <ul className="space-y-2">
                {[
                  "Market research and competitive analysis",
                  "Audience targeting and segmentation",
                  "Performance tracking and optimization",
                  "ROI-focused campaign planning",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Client-Focused */}
        <div 
          className="glass-card p-12 hover-lift animate-slide-in-right"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-start gap-8">
            <CheckCircle className="text-red-500 flex-shrink-0" size={48} />
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Client-Focused Approach</h3>
              <p className="text-white/80 text-lg mb-4">
                We treat your brand as our own. Your success is our success, and we're committed to building long-term partnerships based on trust and results.
              </p>
              <ul className="space-y-2">
                {[
                  "Dedicated account management",
                  "Regular communication and updates",
                  "Collaborative approach to problem-solving",
                  "Flexible and responsive to your needs",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold mb-12 text-center animate-slide-in-up">
          <span className="gradient-text">How We Compare</span>
        </h2>
        <div className="glass-card overflow-hidden hover-lift animate-scale-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Himalayan</th>
                  <th className="px-6 py-4 text-center text-white/60 font-semibold">Typical Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Experience", himalayan: "✓", other: "✓" },
                  { feature: "Creative Quality", himalayan: "✓✓✓", other: "✓✓" },
                  { feature: "Strategic Approach", himalayan: "✓✓✓", other: "✓" },
                  { feature: "Client Communication", himalayan: "✓✓✓", other: "✓" },
                  { feature: "Timely Delivery", himalayan: "✓✓✓", other: "✓✓" },
                  { feature: "Personalized Service", himalayan: "✓✓✓", other: "✓" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors stagger-item animate-fade-in" style={{ animationDelay: `${idx * 0.08}s` }}>
                    <td className="px-6 py-4 text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-red-500 font-semibold">{row.himalayan}</td>
                    <td className="px-6 py-4 text-center text-white/60">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container">
        <div className="glass-card p-12 md:p-16 text-center animate-scale-in hover-lift">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">
            <span className="gradient-text">Ready to Partner With Us?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss how Himalayan can help elevate your brand and drive real business results.
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
