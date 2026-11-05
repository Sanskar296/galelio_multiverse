import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, Calendar, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const searchableItems = [
  {
    title: '3 Months / Level-1 Program (Deep Space Exploration)',
    category: 'Programs',
    path: '/',
    section: 'courses',
    description: 'Introductory cosmic journey tailored for young stargazers with expert astronomers.',
    icon: BookOpen
  },
  {
    title: '12 Months / Level-2 Program (Junior Astronomer)',
    category: 'Programs',
    path: '/',
    section: 'courses',
    description: 'Black holes, rockets, exoplanets, quantum science, robotics in astronomy, plasma physics.',
    icon: BookOpen
  },
  {
    title: '12 Months / Level-3 Program (Advance Astronomy & Astrophysics)',
    category: 'Programs',
    path: '/',
    section: 'courses',
    description: 'Career-oriented program with celestial mechanics, space mission design, research papers.',
    icon: BookOpen
  },
  {
    title: 'Sunday Space Club (12:30 PM IST Weekly)',
    category: 'Club & Events',
    path: '/space-club',
    description: 'Weekly interactive community of young stargazers. 1500 INR monthly or 15000 INR annually.',
    icon: Calendar
  },
  {
    title: '2 Days Weekend Space Camp',
    category: 'Club & Events',
    path: '/space-club',
    description: 'Weekend space camp every Saturday and Sunday for 25 USD or 2000 INR.',
    icon: Calendar
  },
  {
    title: 'Mysterious Universe Event (NASA Scientist Dr. Hasan Hashima)',
    category: 'About & Events',
    path: '/about',
    description: 'Exclusive guest speaker session and videos on our YouTube channel.',
    icon: Calendar
  },
  {
    title: 'Cancellation and Refund Policy',
    category: 'Policies',
    path: '/cancelation-and-refund-policy',
    description: 'Digital-only products policy, refund guidelines within 48 hours for duplicate payment.',
    icon: ShieldCheck
  },
  {
    title: 'Return Policy',
    category: 'Policies',
    path: '/return-policy',
    description: 'Digital products return terms and immediate access electronic delivery notice.',
    icon: ShieldCheck
  },
  {
    title: 'Terms of Service',
    category: 'Policies',
    path: '/terms-of-service',
    description: 'User terms, personal educational use, copyright and access conditions.',
    icon: ShieldCheck
  },
  {
    title: 'Contact Us & Headquarters',
    category: 'Support',
    path: '/contact-us',
    description: 'New Panvel, Navi Mumbai, Phone: +91 8918563014, galileoheadquarters@gmail.com.',
    icon: Mail
  }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? searchableItems
    : searchableItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl rounded-2xl bg-space-900 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cosmic-cyan shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search programs, space club, policies, Dr. Hasan Hashima..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-2 divide-y divide-slate-800/40">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No results found for "{query}". Try searching for "astronomy", "club", "trial", or "policy".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={onClose}
                  className="pt-2 first:pt-0 flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cosmic-cyan shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-cosmic-cyan">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cosmic-cyan group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-space-950 border-t border-slate-800/80 text-[11px] text-slate-500 flex justify-between items-center">
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">ESC</kbd> to close</span>
          <span>{filtered.length} matching result(s)</span>
        </div>
      </div>
    </div>
  );
}

