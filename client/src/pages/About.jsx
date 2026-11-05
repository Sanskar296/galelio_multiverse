import React from 'react';
import { ExternalLink, Sparkles, Rocket, Globe, Award, Compass } from 'lucide-react';
import { YoutubeIcon } from '../components/SocialIcons';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Hero Banner */}
      <section 
        className="relative py-24 sm:py-32 bg-cover bg-center border-b border-slate-800"
        style={{
          backgroundImage: `url('/images/backgrounds/1697625486.png')`
        }}
      >
        <div className="absolute inset-0 bg-space-950/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold block mb-2">
            Online Astronomy School
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase font-display">
            Galileo Multiverse
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-2xl mx-auto">
            Inspiring the next generation of astronomers, astrophysicists, and cosmic explorers.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-space-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cosmic-cyan text-xs uppercase tracking-widest font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Vision & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide font-display">
              About GALILEO MULTIVERSE
            </h2>

            {/* Verbatim text from original Weebly site */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Galileo Multiverse, where we believe in igniting the spark of curiosity and fostering a love for exploration among young minds. Founded with a vision to inspire the next generation of space explorers, our mission is to make the wonders of the universe accessible to all. Through innovative programs, captivating experiences, and expert guidance, we empower students to embark on an exhilarating journey through the cosmos, uncovering its mysteries and expanding their horizons. Join us as we embark on a voyage of discovery, guided by the spirit of curiosity, imagination, and endless possibility. Welcome to Galileo Multiverse - where the adventure begins!
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl glass-panel border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cosmic-cyan flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Space Exploration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empowering children to understand orbital mechanics, rocketry, deep space probes, and future missions to Mars and beyond.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Accessible To All</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Breaking barriers to science education through online interactive classes, visual simulations, and affordable programs.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Mentorship</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct engagement with recognized space educators and NASA research scientists to guide real career paths.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Special Event Section: NASA Scientist Dr. Hasan Hashima */}
      <section 
        className="py-24 relative bg-cover bg-center border-t border-b border-slate-800"
        style={{
          backgroundImage: `url('/images/backgrounds/695697909.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-space-950/85 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Event Poster Image (asia_orig.png) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20 max-w-sm group">
                <img
                  src="/images/asia_orig.png"
                  alt="Mysterious Universe Event Poster with Dr. Hasan Hashima"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white font-bold text-[10px] uppercase tracking-wider rounded-md shadow">
                  NASA Guest Scientist Event
                </div>
              </div>
            </div>

            {/* Event Text verbatim */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Masterclass</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide font-display">
                "MYSTERIOUS UNIVERSE" EVENT
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Relive the captivating experience of our event <strong>"Mysterious Universe"</strong> with exclusive videos featuring esteemed NASA Scientist <strong>Dr. Hasan Hashima</strong>. On November 5th, participants embarked on an enlightening journey through the cosmos, gaining insights into the mysteries of space exploration and discovering the wonders of the universe alongside a renowned expert. Explore the depths of the universe from the comfort of your home with our event videos.
              </p>

              <p className="text-sm text-cosmic-cyan font-semibold">
                Experience the wonders of our "Mysterious Universe" event on YouTube now!
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="https://www.youtube.com/channel/UCOQL-C7lBheiPCU_GFyT6Zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2.5 shadow-lg shadow-red-600/30 transition-all active:scale-95"
                >
                  <YoutubeIcon className="w-5 h-5" />
                  <span>Watch on YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  to="/space-club"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all border border-slate-700"
                >
                  <span>Explore Space Club</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Internal Navigation links as on original */}
      <section className="py-12 bg-space-950 text-center border-t border-slate-800">
        <div className="max-w-md mx-auto flex items-center justify-center gap-8 text-xs uppercase tracking-widest font-bold text-slate-400">
          <Link to="/" className="hover:text-cosmic-cyan transition-colors">Home</Link>
          <span className="text-slate-700">•</span>
          <Link to="/about" className="text-cosmic-cyan font-extrabold">About</Link>
          <span className="text-slate-700">•</span>
          <Link to="/space-club" className="hover:text-cosmic-cyan transition-colors">Space Club</Link>
        </div>
      </section>
    </div>
  );
}
