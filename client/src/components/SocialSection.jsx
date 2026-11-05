import React from 'react';
import { ExternalLink, ThumbsUp, Users } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './SocialIcons';

export default function SocialSection() {
  return (
    <section className="py-16 bg-space-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold block mb-1">
            Connect With Our Community
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
            Follow Galileo Multiverse Online
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Facebook Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                  Facebook
                </span>
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <FacebookIcon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Galileo Multiverse - Online Astronomy School
              </h3>

              <div className="flex items-center gap-3 text-xs text-slate-400 my-4">
                <a
                  href="https://www.facebook.com/galileomultiverse/friends_likes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-blue-400" />
                  <span>2K likes</span>
                </a>
                <span>•</span>
                <a
                  href="https://www.facebook.com/galileomultiverse/followers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>2.1K followers</span>
                </a>
              </div>
            </div>

            <a
              href="https://www.facebook.com/galileomultiverse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors mt-2"
            >
              <span>Visit Facebook Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-pink-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                  Instagram
                </span>
                <div className="w-9 h-9 rounded-lg bg-pink-600/20 text-pink-400 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                @galileo.multiverse
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Daily astronomical visuals, telescope snapshots, cosmic facts, and space science updates.
              </p>
            </div>

            <a
              href="https://www.instagram.com/galileo.multiverse/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors mt-2"
            >
              <span>Follow On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Twitter / X Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-500 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-slate-300 font-bold">
                  Twitter ( X )
                </span>
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                  <TwitterIcon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                @GalileoAi
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Space research commentary, astronomy education discussions, and announcements.
              </p>
            </div>

            <a
              href="https://twitter.com/GalileoAi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors mt-2 border border-slate-700"
            >
              <span>Follow On X (Twitter)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
