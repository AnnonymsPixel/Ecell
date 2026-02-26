
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail } from 'lucide-react';

interface TeamProps {
  members: any[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-display font-extrabold text-4xl mb-4">Meet Our Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The dedicated students and faculty working behind the scenes to build the startup ecosystem at RGIT.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, index }: { member: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1 }}
      className="group perspective-1000 h-[320px] relative w-full"
    >
      <motion.div 
        className="w-full h-full relative transition-all duration-500 preserve-3d group-hover:rotate-y-180"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center">
          <div className="w-28 h-28 md:w-32 md:h-32 bg-[#e2e8f0] border-2 border-dashed border-[#94a3b8] rounded-full flex items-center justify-center overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-500">
             <div className="text-[#94a3b8] flex flex-col items-center">
                <svg className="w-10 h-10 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Member</span>
             </div>
             {/* Replace with <img src={member.img} className="w-full h-full object-cover" /> */}
          </div>
          <h3 className="font-bold text-primary text-lg text-center">{member.name}</h3>
          <p className="text-slate-500 text-sm text-center">{member.role}</p>
          <div className="mt-4 flex gap-3 text-slate-300">
            <Linkedin size={16} />
            <Instagram size={16} />
            <Mail size={16} />
          </div>
        </div>

        {/* Back Side (Socials) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl">
          <p className="text-white font-bold mb-6 text-center">Connect with {member.name.split(' ')[0]}</p>
          <div className="grid grid-cols-2 gap-4">
            <a href={member.socials.linkedin} className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-white">
              <Linkedin size={24} />
            </a>
            <a href={member.socials.instagram} className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-white">
              <Instagram size={24} />
            </a>
            <a href={`mailto:${member.socials.email}`} className="col-span-2 w-full h-12 bg-white/10 rounded-2xl flex items-center justify-center gap-2 hover:bg-accent hover:text-primary transition-all text-white font-medium text-sm">
              <Mail size={18} />
              Email Member
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Team;
