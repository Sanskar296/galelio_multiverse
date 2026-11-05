import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Rocket, Heart, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenTrialModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && (location.pathname === path || location.pathname === path + '.html')) return true;
    return false;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Space Club', path: '/space-club' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const policyLinks = [
    { name: 'Cancellation & Refund Policy', path: '/cancelation-and-refund-policy' },
    { name: 'Return Policy', path: '/return-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-space-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      {/* Top micro bar for quick support */}
      <div className="bg-slate-900/60 border-b border-slate-800/40 text-xs text-slate-400 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Empowering the future generation of space explorers & astronomers
          </span>
          <div className="flex items-center gap-4">
            <a 
              href="https://paypal.me/galileoai?country.x=IN&locale.x=en_GB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cosmic-cyan hover:text-white transition-colors"
            >
              <Heart className="w-3.5 h-3.5 fill-cosmic-cyan/20" />
              <span>Support Galileo Multiverse</span>
            </a>
            <span>•</span>
            <span className="text-slate-400">Call: +91 8918563014</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-500/40 flex items-center justify-center p-1.5 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 transition-all">
              <img 
                src="/images/file-000000006f2c71fd8aa78ed87fdbb8dd_orig.png" 
                alt="Galileo Multiverse Logo" 
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-semibold">
                Online Astronomy School
              </span>
              <span className="text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                GALILEO MULTIVERSE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3.5 py-2 text-sm uppercase tracking-wider font-medium rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'text-cosmic-cyan bg-cyan-950/40 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Policies Dropdown */}
            <div className="relative" onMouseLeave={() => setPoliciesOpen(false)}>
              <button
                onClick={() => setPoliciesOpen(!policiesOpen)}
                onMouseEnter={() => setPoliciesOpen(true)}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm uppercase tracking-wider font-medium rounded-lg transition-all ${
                  policyLinks.some(p => isActive(p.path))
                    ? 'text-cosmic-cyan bg-cyan-950/40 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Policies</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {policiesOpen && (
                <div 
                  className="absolute left-0 mt-1 w-64 rounded-xl bg-space-900 border border-slate-700/80 shadow-2xl py-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setPoliciesOpen(true)}
                  onMouseLeave={() => setPoliciesOpen(false)}
                >
                  {policyLinks.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      onClick={() => setPoliciesOpen(false)}
                      className={`block px-4 py-2.5 text-xs tracking-wider uppercase transition-colors ${
                        isActive(p.path)
                          ? 'text-cosmic-cyan bg-slate-800/80 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-slate-700/50"
              title="Search programs and topics"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Book Free Trial Button */}
            <button
              onClick={() => onOpenTrialModal('Level-1')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs uppercase tracking-widest font-bold rounded-lg group bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:from-cyan-500 group-hover:to-purple-600 hover:text-white text-white shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-space-950 rounded-[7px] group-hover:bg-opacity-0 flex items-center gap-2">
                <Rocket className="w-3.5 h-3.5 text-cosmic-cyan group-hover:text-white" />
                Book A Free Trial
              </span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-space-950/98 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium ${
                isActive(item.path)
                  ? 'text-cosmic-cyan bg-cyan-950/50 border border-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-slate-800/80">
            <div className="text-xs uppercase tracking-wider text-slate-500 px-3 py-1 font-semibold">
              Policies
            </div>
            {policyLinks.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-xs uppercase tracking-wider ${
                  isActive(p.path) ? 'text-cosmic-cyan font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {p.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal('Level-1');
              }}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Rocket className="w-4 h-4" />
              Book A Free Trial
            </button>
            <a
              href="https://paypal.me/galileoai?country.x=IN&locale.x=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg border border-slate-700 text-center text-xs uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Support Galileo Multiverse (PayPal)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

