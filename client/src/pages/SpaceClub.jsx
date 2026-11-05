import React from 'react';
import { Calendar, Clock, Sparkles, Rocket, Heart, Mail, Phone, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpaceClub() {
  return (
    <div className="min-h-screen">
      
      {/* Banner */}
      <section 
        className="relative py-24 sm:py-32 bg-cover bg-center border-b border-slate-800"
        style={{
          backgroundImage: `url('/images/backgrounds/1686011681.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-space-950/80 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cosmic-cyan text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Weekly Stargazing & Astrophysics Gathering</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase font-display">
            SUNDAY SPACE CLUB
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-2xl mx-auto">
            Every Sunday at 12:30 PM IST — Meeting live for cosmic exploration and discovery.
          </p>
        </div>
      </section>

      {/* Intro & Donation Mission */}
      <section className="py-16 bg-space-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide font-display">
            JOIN SUNDAY SPACE CLUB
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Support our Sunday Space Club and inspire young minds to reach for the stars! Join us every Sunday at 12:30 PM IST for an enriching journey through the cosmos. Your donations make a difference in fostering a love for space exploration among future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://www.instamojo.com/@galileomultiverse/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate (Instamojo)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://paypal.me/galileoai?country.x=IN&locale.x=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-slate-700 transition-all"
            >
              <span>Support via PayPal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Two Programs: Sunday Club & 2 Days Space Camp */}
      <section className="py-20 bg-space-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Card 1: Sunday Space Club */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 bg-space-900 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Flyer Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-500/15 max-w-md w-full">
                  <img
                    src="/images/space-club-pg1.png"
                    alt="Sunday Space Club Flyer"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-950 text-cosmic-cyan border border-cyan-500/30">
                    Weekly Club
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cosmic-cyan" />
                    Every Sunday at 12:30 PM IST
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide font-display">
                  SUNDAY SPACE CLUB
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  Explore the cosmos with our Sunday Space Club, meeting weekly at 12:30 PM IST. Join our community of young astronomers for just <strong>1500 INR monthly</strong> or <strong>15000 INR annually</strong> and embark on an adventure through the universe!
                </p>

                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Weekly interactive live celestial tours and telescopic views</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Hands-on space experiments, planetary science, and quizzes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>1500 INR / Month or 15000 INR / Year</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://forms.gle/ySEsdV87hbQKeaim9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>JOIN MEMBERSHIP</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: 2 Days Space Camp */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 bg-space-900 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Details on left on large screens */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-950 text-purple-300 border border-purple-500/30">
                    Weekend Camp
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    Every Saturday & Sunday
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide font-display">
                  2 DAYS SPACE CAMP
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  Join our weekend space camp every Saturday and Sunday for an astronomical adventure! With a membership fee of just <strong>25 USD or 2000 INR</strong>, embark on a cosmic journey with us.
                </p>

                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Intensive 2-day hands-on astronomy workshop</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Rocketry, lunar observation, and constellation maps</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Fee: 25 USD / 2000 INR</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://forms.gle/ruwMaE7tzcBXkUqA9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-purple-600/25 active:scale-95 transition-all"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>JOIN CAMP</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Flyer Image */}
              <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-500/15 max-w-md w-full">
                  <img
                    src="/images/space-camp-sat-sun-1.png"
                    alt="2 Days Weekend Space Camp Flyer"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Contact & Location Block verbatim from original */}
      <section className="py-16 bg-space-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="p-8 rounded-2xl glass-panel border border-slate-800 space-y-4 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              Galileo Multiverse
            </h3>
            <p className="text-xs text-slate-300 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-cosmic-cyan shrink-0" />
              <span>Space India Green Earth, New Panvel, Navi Mumbai 410206</span>
            </p>
            <p className="text-xs text-slate-300 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-cosmic-cyan shrink-0" />
              <a href="tel:+918918563014" className="hover:text-white">+91 8918563014</a>
            </p>
            <div className="pt-2">
              <a
                href="mailto:galileoheadquarters@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-cosmic-cyan text-space-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL US</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-widest font-bold text-slate-400 pt-6">
            <Link to="/" className="hover:text-cosmic-cyan transition-colors">Home</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-cosmic-cyan transition-colors">About</Link>
            <span>•</span>
            <a 
              href="https://www.instamojo.com/@galileomultiverse/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              DONATE
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

