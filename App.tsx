
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Events from './sections/Events';
import Team from './sections/Team';
import Gallery from './sections/Gallery';
import Sponsors from './sections/Sponsors';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import AdminPanel from './sections/AdminPanel';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Default Events
  const [events, setEvents] = useState([
    { id: 1, title: "E-Summit", desc: "Our flagship annual entrepreneurship summit bringing together founders.", date: "Feb 2025" },
    { id: 2, title: "Startup Weekend", desc: "A high-intensity 54-hour workshop to build a startup.", date: "Oct 2024" },
    { id: 3, title: "Pitch Perfect", desc: "Showcase your business idea to a panel of venture capitalists.", date: "Dec 2024" },
    { id: 4, title: "Workshop Series", desc: "Hands-on sessions on coding and business strategy.", date: "Weekly" },
    { id: 5, title: "Speaker Sessions", desc: "Intimate talks with successful founders.", date: "Monthly" },
    { id: 6, title: "Hackathon", desc: "Collaborate to build functional prototypes.", date: "Mar 2025" }
  ]);

  // Default Team
  const [team, setTeam] = useState(Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: i === 0 ? "Dr. Lead Person" : `Member ${i + 1}`,
    role: i === 0 ? "Faculty Incharge" : "Core Team Member",
    socials: { linkedin: "#", instagram: "#", email: "mailto:ecell@rgit.ac.in" }
  })));

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="antialiased text-slate-900 font-sans selection:bg-accent/30 bg-white">
      <Navbar onAdminToggle={() => setIsAdminOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <Events events={events} />
        <Team members={team} />
        <Gallery />
        <Sponsors />
        <Contact />
      </main>

      <Footer onAdminToggle={() => setIsAdminOpen(true)} />

      {isAdminOpen && (
        <AdminPanel 
          onClose={() => setIsAdminOpen(false)} 
          events={events} 
          setEvents={setEvents} 
          team={team} 
          setTeam={setTeam} 
        />
      )}
    </div>
  );
};

export default App;
