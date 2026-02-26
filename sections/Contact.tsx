
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your message has been sent.");
    }, 1500);
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-extrabold mb-6">Get In Touch</h2>
            <p className="text-white/70 mb-10 leading-relaxed text-lg max-w-lg">
              Have a revolutionary idea or want to collaborate with us? Drop us a message and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-accent border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-white/60">ecell@rgit.ac.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-accent border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-white/60">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-accent border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Visit Us</h4>
                  <p className="text-white/60">RGIT, Versova, Andheri West,<br />Mumbai - 400053</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-accent">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all border border-white/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary font-bold mb-2 text-sm">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-primary font-bold mb-2 text-sm">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary font-bold mb-2 text-sm">Inquiry Type</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all">
                  <option>General Inquiry</option>
                  <option>Join E-Cell</option>
                  <option>Sponsorship</option>
                  <option>Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-primary font-bold mb-2 text-sm">Your Message</label>
                <textarea 
                  required 
                  rows={4} 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-dark transition-all disabled:opacity-50 group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 z-0" />
    </section>
  );
};

export default Contact;
