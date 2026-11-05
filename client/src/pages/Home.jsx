import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import ReviewsSection from '../components/ReviewsSection';
import SocialSection from '../components/SocialSection';
import { Telescope, Compass, Award, Rocket, Sparkles } from 'lucide-react';

export default function Home({ onOpenTrialModal }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch courses from server API or fallback to static data
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => {
        if (data && data.data) {
          setCourses(data.data);
        }
      })
      .catch(err => {
        console.error('Error fetching courses:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onOpenTrialModal={onOpenTrialModal} />

      {/* Overview & Welcome Section */}
      <section className="py-20 relative bg-space-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and Text verbatim */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cosmic-cyan text-xs uppercase tracking-widest font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Premier Online Cosmic Academy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide uppercase leading-tight font-display">
                LATEST ASTRONOMY & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ASTROPHYSICS</span> PROGRAMS
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Welcome to Galileo Multiverse, where we ignite the passion for exploration and discovery in the infinite realms of space. Our online astronomy and astrophysics programs offer an immersive journey into the wonders of the cosmos, empowering students to unravel the mysteries of the universe. With engaging sessions led by experienced educators, we inspire young minds to reach for the stars and embark on a lifelong adventure of scientific inquiry. Join us and explore the universe like never before!
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-2xl font-bold text-cosmic-cyan block font-display">3</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400">Structured Levels</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-2xl font-bold text-purple-400 block font-display">Live</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400">Interactive Sky Labs</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-2xl font-bold text-emerald-400 block font-display">NASA</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400">Guest Scientist Talks</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenTrialModal('Level-1')}
                  className="px-6 py-3.5 rounded-xl bg-cosmic-cyan text-space-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Start Your Cosmic Journey</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-space-900/80 p-6 shadow-2xl">
                  <img
                    src="/images/file-000000006f2c71fd8aa78ed87fdbb8dd_orig.png"
                    alt="Astronomy Telescope Illustration"
                    className="w-full h-auto object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  />
                  <div className="mt-4 text-center">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                      Galileo Multiverse Observatory Labs
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="programs-section" className="py-24 relative bg-space-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold block mb-2">
              Curriculum & Programs
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide uppercase font-display">
              Choose Your Cosmic Path
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              From curious young stargazers to future career astrophysicists, our progressive 3-tier curriculum takes students all the way into the deep universe.
            </p>
          </div>

          {loading ? (
            <div className="py-20 text-center text-cosmic-cyan animate-pulse">
              Loading cosmic programs...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onOpenTrialModal={onOpenTrialModal}
                />
              ))}
            </div>
          )}

          {/* Full Posters / Curriculum Features from the original site */}
          <div className="mt-20 space-y-12">
            
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold block mb-1">
                Detailed Program Outlines
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                Comprehensive Roadmap & Certification
              </h3>
            </div>

            {/* Poster 1: Space Career Program Pic */}
            <div className="glass-panel rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-4 sm:p-6 bg-space-950 flex justify-center">
              <img
                src="/images/space-career-program-pic-1_orig.png"
                alt="Space Career Program Roadmap"
                className="w-full max-w-4xl h-auto rounded-2xl object-contain"
              />
            </div>

            {/* Poster 2: Level 2 / Level 3 Course Details Pic */}
            <div className="glass-panel rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-4 sm:p-6 bg-space-950 flex justify-center">
              <img
                src="/images/img-20251126-wa0001-1_orig.jpg"
                alt="Astronomy and Astrophysics Syllabus"
                className="w-full max-w-4xl h-auto rounded-2xl object-contain"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Reviews, Founder Quote & Animal Conservation */}
      <ReviewsSection />

      {/* Social Section */}
      <SocialSection />
    </div>
  );
}

