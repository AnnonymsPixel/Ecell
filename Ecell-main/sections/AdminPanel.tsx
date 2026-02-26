
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Trash2, Save, LayoutDashboard, Users as UsersIcon, Calendar, Edit3, Hash } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
  events: any[];
  setEvents: (events: any[]) => void;
  team: any[];
  setTeam: (team: any[]) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, events, setEvents, team, setTeam }) => {
  const [activeTab, setActiveTab] = useState<'events' | 'team'>('events');

  const addEvent = () => {
    setEvents([{ id: Date.now(), title: "New Event", desc: "Short description...", date: "TBD" }, ...events]);
  };

  const removeEvent = (id: number) => {
    setEvents(events.filter(e => e.id !== id));
  };

  const addMember = () => {
    setTeam([{ id: Date.now(), name: "New Member", role: "Role", socials: { linkedin: "#", instagram: "#", email: "info@ecell.in" } }, ...team]);
  };

  const removeMember = (id: number) => {
    setTeam(team.filter(m => m.id !== id));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-primary/40 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white w-full max-w-6xl h-[85vh] rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col border border-white/20"
      >
        {/* Header */}
        <div className="bg-primary px-8 py-6 text-white flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-accent/10 -skew-x-12 translate-x-32" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 bg-accent rounded-2xl shadow-lg shadow-accent/20 rotate-3">
              <LayoutDashboard size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-extrabold tracking-tight">Management Suite</h2>
              <p className="text-white/50 text-xs font-medium uppercase tracking-widest">RGIT E-Cell Portal</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-3 hover:bg-white/10 rounded-2xl transition-all active:scale-95 group relative z-10"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50/50 p-2 gap-2">
          <button 
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
              activeTab === 'events' 
                ? 'bg-white text-primary shadow-sm border border-slate-200 ring-4 ring-slate-100/50' 
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Calendar size={18} className={activeTab === 'events' ? 'text-accent' : ''} /> 
            <span className="hidden sm:inline">Event Management</span>
            <span className="sm:hidden">Events</span>
          </button>
          <button 
            onClick={() => setActiveTab('team')}
            className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
              activeTab === 'team' 
                ? 'bg-white text-primary shadow-sm border border-slate-200 ring-4 ring-slate-100/50' 
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
            }`}
          >
            <UsersIcon size={18} className={activeTab === 'team' ? 'text-accent' : ''} /> 
            <span className="hidden sm:inline">Team Directory</span>
            <span className="sm:hidden">Team</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50/30 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === 'events' ? (
              <motion.div 
                key="events-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-800">Current Initiatives</h3>
                    <p className="text-slate-500 text-sm">Control how your flagship events appear to the public.</p>
                  </div>
                  <button 
                    onClick={addEvent} 
                    className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/10 active:scale-95 group"
                  >
                    <Plus size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 
                    New Event
                  </button>
                </div>
                
                <div className="grid gap-6">
                  {events.map((event, idx) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={event.id} 
                      className="bg-white p-6 rounded-[1.5rem] border border-slate-200/60 shadow-sm flex flex-col md:flex-row gap-6 items-start group hover:border-accent/40 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 font-bold shrink-0">
                          <Hash size={16} />
                        </div>
                        <div className="md:hidden font-bold text-slate-700">Event Entry</div>
                      </div>

                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 w-full">
                        <div className="lg:col-span-5">
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 ml-1">Event Title</label>
                          <div className="relative">
                            <Edit3 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input 
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm font-bold text-primary focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" 
                              value={event.title} 
                              onChange={(e) => {
                                const newEvents = [...events];
                                newEvents[idx].title = e.target.value;
                                setEvents(newEvents);
                              }}
                              placeholder="e.g. Startup Pitch 2025"
                            />
                          </div>
                        </div>
                        <div className="lg:col-span-3">
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 ml-1">Scheduled Date</label>
                          <input 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" 
                            value={event.date} 
                            onChange={(e) => {
                              const newEvents = [...events];
                              newEvents[idx].date = e.target.value;
                              setEvents(newEvents);
                            }}
                            placeholder="e.g. March 15th"
                          />
                        </div>
                        <div className="lg:col-span-4">
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 ml-1">Quick Description</label>
                          <textarea 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-500 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none" 
                            value={event.desc} 
                            rows={1}
                            onChange={(e) => {
                              const newEvents = [...events];
                              newEvents[idx].desc = e.target.value;
                              setEvents(newEvents);
                            }}
                            placeholder="Brief context..."
                          />
                        </div>
                      </div>

                      <button 
                        onClick={() => removeEvent(event.id)}
                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all self-end md:self-center"
                        title="Delete Entry"
                      >
                        <Trash2 size={20} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="team-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-800">Team Directory</h3>
                    <p className="text-slate-500 text-sm">Update roles and personnel for the upcoming session.</p>
                  </div>
                  <button 
                    onClick={addMember} 
                    className="bg-accent text-primary px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-orange-400 transition-all shadow-xl shadow-accent/10 active:scale-95 group"
                  >
                    <Plus size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 
                    Add Member
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  {team.map((member, idx) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={member.id} 
                      className="bg-white p-5 rounded-[1.5rem] border border-slate-200/60 shadow-sm flex gap-5 items-center group hover:border-accent/40 hover:shadow-md transition-all"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 text-slate-400 font-extrabold text-lg shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1 ml-1">Full Name</label>
                            <input 
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-primary focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" 
                              value={member.name} 
                              onChange={(e) => {
                                const newTeam = [...team];
                                newTeam[idx].name = e.target.value;
                                setTeam(newTeam);
                              }}
                              placeholder="Name"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1 ml-1">Current Role</label>
                            <input 
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all" 
                              value={member.role} 
                              onChange={(e) => {
                                const newTeam = [...team];
                                newTeam[idx].role = e.target.value;
                                setTeam(newTeam);
                              }}
                              placeholder="Role"
                            />
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeMember(member.id)}
                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 border-t border-slate-100 bg-white flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-slate-400">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs font-medium tracking-tight uppercase">Development Preview: Session Storage Active</p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="flex-1 sm:flex-none text-slate-500 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-all text-sm"
            >
              Cancel
            </button>
            <button 
              onClick={onClose}
              className="flex-1 sm:flex-none bg-accent text-primary px-10 py-4 rounded-[1.25rem] font-bold flex items-center justify-center gap-3 hover:bg-orange-400 transition-all shadow-2xl shadow-accent/20 active:scale-95 text-lg"
            >
              <Save size={20} /> 
              Publish Updates
            </button>
          </div>
        </div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </motion.div>
  );
};

export default AdminPanel;
