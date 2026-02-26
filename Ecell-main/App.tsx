
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
    {
      id: 1,
      title: "Saksham: The Flagship Startup Fest",
      desc: "Saksham ’25 is a three-day entrepreneurship festival of E-Cell RGIT and the IIC, designed to bridge the gap between technical education and market reality. This high-octane launchpad accelerates student ideas into real-world ventures through a competitive Startup Battle and a two-phase Ideathon. By connecting participants with elite mentors from giants like Capgemini and CNBC TV18, the fest provides the scrutiny and industry exposure needed to transform a blueprint into a business. It’s a legacy-driven event where innovation meets ambition, ensuring students leave not just with inspiration, but with a battle-tested strategy for the entrepreneurial world.",
      date: "2025"
    },
    {
      id: 2,
      title: "Anvay: The Leadership Challenge",
      desc: "Anvay is a three-day simulation of corporate leadership and strategic decision-making. The challenge ignites with an Auction Round, where leaders bid on \"blind resumes\" and build their dream teams. These teams then tackle real-world crises in cutting-edge domains like AI, Cybersecurity, and HealthTech, refining their solutions under the guidance of expert faculty mentors. The journey culminates in an intense 'pitching round' before a panel of industry veterans, where teams are judged on innovation, social impact, and execution excellence. It is a fast-paced environment that transforms raw talent into seasoned strategists ready to tackle global challenges.",
      date: "2025"
    },
    {
      id: 3,
      title: "DESIGN THINKING WORKSHOP",
      desc: "The campus became a workshop for innovation as we teamed up with Atlas Skilltech University to host an intensive Design Thinking Bootcamp. Led by the esteemed Dr. Mohit Bhardwaj (HOD – UI/UX), the event focused on bridging the gap between technical logic and user-centric design. The technical heavy-lifting began with the AEIOU Framework, distilling complex observations into sharp, actionable POV Problem Statements. The energy shifted into high gear during the Crazy 8s phase, where students sketched eight distinct solutions in just eight minutes, later refined into professional Storyboards. The bootcamp culminated in compelling pitches, proving that when engineering precision meets design thinking, the results are truly impactful. Missed out? Stay tuned for our next workshop to level up your skill set!",
      date: "Past Event"
    }
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
