import React, { useState } from 'react';
import { Rocket, CheckCircle2, ChevronRight, ExternalLink, Sparkles, Clock, Target } from 'lucide-react';

export default function CourseCard({ course, onOpenTrialModal }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800 bg-space-900/90 shadow-xl transition-all duration-300">
      
      {/* Course Image Header */}
      <div className="relative h-60 w-full overflow-hidden bg-space-950 flex items-center justify-center p-2 group">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        {course.badge && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-950/90 text-cosmic-cyan border border-cyan-500/40 shadow-lg backdrop-blur-md">
            {course.badge}
          </span>
        )}
        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider bg-black/70 text-slate-300 border border-slate-700/60 backdrop-blur-md flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-cosmic-cyan" />
          {course.duration}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtitle / Level */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold">
              {course.subtitle || course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white tracking-wide mb-3">
            {course.title}
          </h3>

          {/* Description verbatim */}
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-200">
            {course.description}
          </p>

          {/* Meta Details */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-purple-400" />
              {course.targetAge}
            </span>
          </div>

          {/* Expandable Topic list */}
          {showDetails && course.topics && (
            <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 animate-in fade-in duration-200">
              <h4 className="text-xs uppercase tracking-wider text-cosmic-cyan font-bold mb-2">
                Curriculum Highlights:
              </h4>
              <ul className="space-y-1.5">
                {course.topics.map((t, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
          {/* Book A Free Trial */}
          <button
            onClick={() => onOpenTrialModal(course.level)}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-98 transition-all"
          >
            <Rocket className="w-4 h-4" />
            Book A Free Trial
          </button>

          {/* Details toggle & direct external link */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 py-2 px-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1"
            >
              <span>{showDetails ? 'Hide Details' : 'View Curriculum'}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
            </button>

            {course.detailsUrl && (
              <a
                href={course.detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-colors flex items-center gap-1"
                title="View Announcement"
              >
                <span>Post</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

