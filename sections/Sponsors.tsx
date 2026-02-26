
import React from 'react';
import { motion } from 'framer-motion';

const Sponsors: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-primary/40 font-display font-bold text-center text-xl uppercase tracking-[0.2em] mb-12">
          Our Valued Partners & Sponsors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group aspect-[3/2] bg-[#f8fafc] border border-dashed border-[#cbd5e1] rounded-xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-pointer hover:border-accent hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="text-center">
                <div className="text-[#94a3b8] group-hover:text-accent font-bold text-xs uppercase tracking-tighter">Partner Logo</div>
                <div className="text-[10px] text-slate-400">Placeholder {i+1}</div>
              </div>
              {/* Replace with <img src="logo.png" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
