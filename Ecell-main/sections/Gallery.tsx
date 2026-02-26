
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlaceholderImage from '../components/PlaceholderImage';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Events', 'Workshops', 'Team'];

  const galleryItems = [
    { id: 1, category: 'Events', size: 'large' },
    { id: 2, category: 'Workshops', size: 'small' },
    { id: 3, category: 'Events', size: 'small' },
    { id: 4, category: 'Team', size: 'small' },
    { id: 5, category: 'Workshops', size: 'large' },
    { id: 6, category: 'Events', size: 'small' },
    { id: 7, category: 'Team', size: 'small' },
    { id: 8, category: 'Workshops', size: 'small' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-primary font-display font-extrabold text-4xl mb-4">Our Moments</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">Capturing the vibrant entrepreneurial journey at RGIT.</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`${item.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1'}`}
              >
                <PlaceholderImage 
                  text={`${item.category} Photo`} 
                  aspectRatio={item.size === 'large' ? 'video' : 'square'}
                  className="rounded-2xl h-full w-full" 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
