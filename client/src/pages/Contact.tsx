import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { useSubmissions } from "@/contexts/SubmissionsContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Digital Advertising",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { addSubmission } = useSubmissions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission to admin dashboard
    addSubmission({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
    });
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", service: "Digital Advertising", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-white/80">
            Let's discuss how we can help elevate your brand
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                  <div className="text-green-400 font-semibold mb-2">Thank You!</div>
                  <p className="text-white/80">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-white font-medium mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="Digital Advertising">Digital Advertising</option>
                      <option value="Outdoor Advertising">Outdoor Advertising</option>
                      <option value="Branding">Branding</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="cta-button w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <Phone className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+919318830129" className="text-white/70 hover:text-red-500 transition-colors">
                    +91 9318830129
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <Mail className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:himalayan.advtsnew@gmail.com" className="text-white/70 hover:text-red-500 transition-colors break-all">
                    himalayan.advtsnew@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-white/70">
                    Himalayan<br />
                    Thakur Niwas<br />
                    Shakarala, Mehli
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <Instagram className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                  <a 
                    href="https://instagram.com/himalayanadv.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-red-500 transition-colors"
                  >
                    @himalayanadv.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Frequently Asked Questions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              q: "What is your typical project timeline?",
              a: "Project timelines vary based on scope and complexity. Most projects take 4-12 weeks from discovery to launch. We'll provide a detailed timeline during our initial consultation.",
            },
            {
              q: "Do you work with all business sizes?",
              a: "Yes! We work with startups, SMEs, and large corporations. Our services are scalable and can be customized to fit any budget.",
            },
            {
              q: "How do you measure campaign success?",
              a: "We use data-driven metrics aligned with your business goals. This includes reach, engagement, conversions, ROI, and brand awareness metrics.",
            },
            {
              q: "Can you work with existing agencies?",
              a: "Absolutely. We can collaborate with your existing team or take full ownership of your project. We're flexible and collaborative.",
            },
            {
              q: "What's your revision policy?",
              a: "We include revision rounds in our project scope. Additional revisions beyond the agreed scope are available at a reasonable rate.",
            },
            {
              q: "How do we get started?",
              a: "Simply fill out the contact form or call us. We'll schedule a consultation to understand your needs and discuss how we can help.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-3">{faq.q}</h4>
              <p className="text-white/70 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container">
        <div className="glass-card p-12 md:p-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something Great</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a specific project in mind or want to explore possibilities, we're here to help.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
