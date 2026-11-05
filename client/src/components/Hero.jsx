import React from 'react';
import { Rocket, Heart, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenTrialModal }) {
  const scrollToCourses = () => {
    const el = document.getElementById('programs-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/backgrounds/1936583217.jpg')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark & Cosmic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-950/70 via-space-950/60 to-space-950"></div>
      
      {/* Ambient lighting spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cosmic-cyan text-xs uppercase tracking-widest font-semibold mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/50">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Online Astronomy & Astrophysics School</span>
        </div>

        {/* Center Telescope / Logo Illustration */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 mb-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-600/20 border border-cyan-400/30 p-3 shadow-2xl shadow-cyan-500/15 flex items-center justify-center backdrop-blur-sm animate-pulse duration-1000">
          <img
            src="/images/file-000000006f2c71fd8aa78ed87fdbb8dd_orig.png"
            alt="Galileo Multiverse"
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          />
        </div>

        {/* Main Title - Matches original verbatim: GALILEO MULTIVERSE */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-white uppercase mb-4 text-glow font-display">
          GALILEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">MULTIVERSE</span>
        </h1>

        {/* Subtitle - Matches original verbatim: Investing in the Future of Our Planet */}
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light tracking-wide max-w-3xl mb-10 italic">
          Investing in the Future of Our Planet
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
          {/* Support Galileo Multiverse (Verbatim original button) */}
          <a
            href="https://paypal.me/galileoai?country.x=IN&locale.x=en_GB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[220px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            Support Galileo Multiverse
          </a>

          {/* Book A Free Trial */}
          <button
            onClick={() => onOpenTrialModal('Level-1')}
            className="flex-1 min-w-[200px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            Book A Free Trial
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToCourses}
          className="mt-16 text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 group animate-bounce"
        >
          <span className="text-[11px] uppercase tracking-widest text-slate-400 group-hover:text-cosmic-cyan">Explore Courses</span>
          <ChevronDown className="w-5 h-5 text-cosmic-cyan" />
        </button>

      </div>
    </section>
  );
}

