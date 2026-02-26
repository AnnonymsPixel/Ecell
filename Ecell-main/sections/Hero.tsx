
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Lightbulb, Sparkles, Zap, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Enhanced Background Animated Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 left-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        
        {/* Floating Geometric Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
              opacity: 0
            }}
            animate={{ 
              y: [null, Math.random() * -100, Math.random() * 100],
              x: [null, Math.random() * 50, Math.random() * -50],
              rotate: [null, 90, 180],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              width: 20 + Math.random() * 60, 
              height: 20 + Math.random() * 60 
            }}
          />
        ))}

        {/* Small Icons Floating */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[20%] left-[10%] text-accent"
        >
          <Sparkles size={32} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-[30%] right-[15%] text-blue-400"
        >
          <Zap size={40} />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[50%] right-[5%] text-white"
        >
          <Target size={24} />
        </motion.div>

        {/* Particle/Grid Effect */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-accent font-medium mb-6 border border-white/10 backdrop-blur-sm"
          >
            <Lightbulb size={18} />
            <span>Inspiring the next generation of founders</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6">
            Empowering <span className="text-accent underline decoration-white/20 underline-offset-8">Student</span> Entrepreneurs
          </h1>
          
          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            RGIT's Entrepreneurship Cell is a platform where innovative ideas transform into successful ventures. Join a community of dreamers, doers, and leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-accent text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:shadow-accent/20 group">
              Explore Events
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
              Join E-Cell
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="hidden lg:block relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-10 float">
            <div className="bg-white/10 p-4 rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="bg-[#e2e8f0] border-2 border-dashed border-[#94a3b8] rounded-2xl aspect-square flex items-center justify-center group overflow-hidden">
                 <div className="text-center p-8">
                   <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-primary/20">
                     <RocketIcon className="text-primary/40 w-10 h-10" />
                   </div>
                   <p className="text-slate-400 font-medium">Main Hero Creative Placeholder</p>
                   <p className="text-slate-300 text-sm mt-2">Replace with high-quality PNG of startup team or 3D illustration</p>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Glass floating cards */}
          <motion.div 
            className="absolute -top-10 -right-10 glass p-6 rounded-2xl shadow-xl z-20 hidden xl:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-600">
                🚀
              </div>
              <div>
                <p className="font-bold text-primary">20+ Startups</p>
                <p className="text-xs text-slate-500">Currently Incubating</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

const RocketIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
);

export default Hero;
