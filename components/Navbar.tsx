
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onAdminToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'dark-glass py-3 shadow-2xl shadow-black/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group" onDoubleClick={onAdminToggle}>
          <div className="p-1.5 bg-accent rounded-lg group-hover:rotate-12 transition-transform">
            <Rocket className="text-primary w-6 h-6" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-white' : 'text-primary'}`}>
            E-Cell <span className="text-accent">RGIT</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-white/90' : 'text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onAdminToggle}
            className="flex items-center gap-2 bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-orange-400 transition-all shadow-lg hover:shadow-accent/20"
          >
            <Settings size={16} /> Admin
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-white' : 'text-primary'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 text-lg font-medium py-2 border-b border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsOpen(false); onAdminToggle?.(); }}
                className="bg-accent text-primary w-full py-3 rounded-lg font-bold mt-4 flex items-center justify-center gap-2"
              >
                <Settings size={18} /> Admin Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
