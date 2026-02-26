
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ value, suffix = "", label }: { value: number, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/60 font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Active Members" },
    { value: 50, suffix: "+", label: "Events Conducted" },
    { value: 20, suffix: "+", label: "Startups Incubated" },
    { value: 10, suffix: "+", label: "Industry Partners" },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
