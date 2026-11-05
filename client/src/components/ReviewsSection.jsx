import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Parent of 9yo student",
      rating: 5,
      date: "Recent",
      text: "My son was hooked from the very first free trial session. The educators at Galileo Multiverse explain complex astrophysics concepts with such simplicity, fun visuals, and real excitement. Best online science academy for kids!"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Level-2 Student",
      rating: 5,
      date: "Recent",
      text: "The Junior Astronomer program is extraordinary. My daughter now talks about black holes, gravitational waves, and exoplanets with genuine understanding. Thank you Abhishek sir and team!"
    },
    {
      name: "Ananya Sengupta",
      role: "Sunday Space Club Member",
      rating: 5,
      date: "Recent",
      text: "Sunday Space Club is our favorite weekly routine. The live telescope sessions and Q&A with real scientists keep curiosity burning bright. Highly recommended to every young stargazer."
    }
  ];

  return (
    <section className="py-20 relative bg-space-950 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cosmic-cyan text-xs uppercase tracking-widest font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
            <span>5-Star Rated Community</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase font-display">
            PARENT'S REVIEWS ON GOOGLE
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            See what parents and students across India and worldwide say about our interactive astronomy school.
          </p>

          {/* Google badge button */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <a
              href="https://g.co/kgs/NkxTzvg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cosmic-cyan text-white text-xs uppercase tracking-wider font-bold transition-all shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="group-hover:text-cosmic-cyan transition-colors">
                View All Reviews on Google
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cosmic-cyan" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Verified Parent
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white tracking-wide">{rev.name}</h4>
                <span className="text-xs text-cosmic-cyan">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Founder & CEO Quote Section with Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-r from-space-900 via-space-850 to-space-900 p-8 sm:p-12 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20">
                  <img
                    src="/images/gauwl9_orig.jpg"
                    alt="Abhishek Narayan - Founder & CEO"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-cyan-950 border border-cyan-400 text-cosmic-cyan text-[11px] font-bold rounded-lg uppercase tracking-wider shadow">
                  Founder
                </div>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <Quote className="w-10 h-10 text-cyan-500/30 mx-auto lg:mx-0" />
              <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-100 font-light italic leading-relaxed">
                "Empowering the future generation to explore the cosmos ensures that the universe remains a realm of opportunity for all, not just a privileged few."
              </blockquote>
              <div className="pt-2">
                <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  Abhishek Narayan
                </h4>
                <p className="text-xs uppercase tracking-widest text-cosmic-cyan font-semibold">
                  Founder & CEO — Galileo Multiverse
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Animal Conservation & Green Earth Banner - Verbatim from original */}
        <div 
          className="relative rounded-3xl overflow-hidden border border-slate-800 py-16 px-6 sm:px-12 text-center bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: `url('/images/backgrounds/736515775.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-space-950/80 backdrop-blur-[2px]"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block">
              Global Responsibility & Conservation
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase font-display">
              Our animals are disappearing. We're changing that.
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-300 font-semibold tracking-wider uppercase pt-2">
              GALILEO MULTIVERSE
            </p>
            <p className="text-xs uppercase tracking-widest text-cosmic-cyan">
              Online Astronomy School
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

