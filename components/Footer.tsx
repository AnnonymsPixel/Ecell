
import React from 'react';
import { Rocket, Heart } from 'lucide-react';

// Added FooterProps interface to define onAdminToggle prop
interface FooterProps {
  onAdminToggle?: () => void;
}

// Updated Footer to accept FooterProps
const Footer: React.FC<FooterProps> = ({ onAdminToggle }) => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            {/* Added onDoubleClick to the logo area to allow admin access, matching Navbar behavior */}
            <div 
              className="flex items-center gap-2 mb-6 cursor-default" 
              onDoubleClick={onAdminToggle}
            >
              <div className="p-1.5 bg-accent rounded-lg">
                <Rocket className="text-primary w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-primary">
                E-Cell <span className="text-accent">RGIT</span>
              </span>
            </div>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Empowering student entrepreneurs to turn their innovative ideas into impactful ventures through mentorship, resources, and community.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-accent transition-colors">Events</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Newsletter</h4>
            <p className="text-slate-500 mb-4 text-sm">Get the latest updates on startups and events.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white border border-slate-200 rounded-lg px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2025 E-Cell RGIT. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by E-Cell Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
