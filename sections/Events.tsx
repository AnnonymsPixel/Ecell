
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

interface EventsProps {
  events: any[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-display font-extrabold text-4xl mb-4">Our Flagship Events</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Igniting the entrepreneurial spirit through world-class competitions and learning experiences.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100"
            >
              <div className="p-4">
                <PlaceholderImage text={`${event.title} Banner`} className="rounded-2xl" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-accent text-sm font-bold mb-3">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                  {event.desc}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                  Learn More
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
