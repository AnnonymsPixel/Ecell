
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-8"
      >
        <div className="p-6 bg-accent rounded-3xl shadow-2xl shadow-accent/20">
          <Rocket size={48} className="text-primary" />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-white font-display font-bold text-2xl tracking-widest mb-2">
          E-CELL <span className="text-accent">RGIT</span>
        </h2>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-accent"
          />
        </div>
        <p className="text-white/40 text-xs mt-4 uppercase tracking-[0.3em]">Fueling Innovation</p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
