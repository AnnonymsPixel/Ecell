
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, TrendingUp, Cpu } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

const About: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Innovation Hub",
      desc: "Access to state-of-the-art resources for prototyping and developing technical solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking Events",
      desc: "Connect with industry experts, successful alumni, and seasoned angel investors."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Startup Support",
      desc: "Guidance on legalities, funding opportunities, and building a scalable business model."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Skill Development",
      desc: "Intensive workshops on design thinking, product management, and sales pitch strategies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-display font-extrabold text-4xl mb-6">
              About E-Cell RGIT
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The Entrepreneurship Cell (E-Cell) at Rajiv Gandhi Institute of Technology is a student-led organization committed to fostering the spirit of entrepreneurship among the student community.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our mission is to bridge the gap between imagination and execution. We provide an ecosystem where budding entrepreneurs can nurture their ideas, receive mentorship from industry giants, and access the resources necessary to build world-class startups right from the college campus.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="group p-4 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-snug">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-12 gap-4 h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image Placeholder 1 */}
            <div className="col-span-8">
              <PlaceholderImage text="Activity Image 1" aspectRatio="square" className="rounded-3xl shadow-lg" />
            </div>
            {/* Image Placeholder 2 */}
            <div className="col-span-4 mt-12">
              <PlaceholderImage text="Activity Image 2" aspectRatio="portrait" className="rounded-3xl shadow-lg" />
            </div>
            {/* Image Placeholder 3 */}
            <div className="col-span-6 -mt-6">
              <PlaceholderImage text="Activity Image 3" aspectRatio="video" className="rounded-3xl shadow-lg" />
            </div>
            {/* Image Placeholder 4 */}
            <div className="col-span-6 -mt-6">
              <PlaceholderImage text="Activity Image 4" aspectRatio="square" className="rounded-3xl shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
