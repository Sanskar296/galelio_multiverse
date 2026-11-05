import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Heart, Globe } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-space-950 border-t border-slate-800/80 text-slate-300">
      {/* Top Banner inside footer */}
      <div className="border-b border-slate-800/60 bg-gradient-to-r from-cyan-950/20 via-purple-950/20 to-space-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Ignite Your Child's Cosmic Curiosity Today
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Join thousands of young minds discovering astronomy, astrophysics, and space science.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://paypal.me/galileoai?country.x=IN&locale.x=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase tracking-wider font-semibold border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500/20" />
              Support Galileo Multiverse
            </a>
            <Link
              to="/contact-us"
              className="px-5 py-2.5 rounded-lg bg-cosmic-cyan text-space-950 text-xs uppercase tracking-wider font-bold hover:bg-cyan-300 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center p-1">
                <img 
                  src="/images/file-000000006f2c71fd8aa78ed87fdbb8dd_orig.png" 
                  alt="Galileo Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold block">Online Astronomy School</span>
                <span className="text-lg font-bold text-white tracking-wider">GALILEO MULTIVERSE</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-cyan-500/50 pl-3">
              "Empowering the future generation to explore the cosmos ensures that the universe remains a realm of opportunity for all, not just a privileged few."
            </p>
            <p className="text-xs text-slate-500">
              — Abhishek Narayan, Founder & CEO
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/galileomultiverse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cosmic-cyan hover:border-cyan-500/40 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/galileo.multiverse/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/GalileoAi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                title="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCOQL-C7lBheiPCU_GFyT6Zw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4 border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cosmic-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cosmic-cyan transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/space-club" className="text-slate-400 hover:text-cosmic-cyan transition-colors">Sunday Space Club</Link>
              </li>
              <li>
                <a 
                  href="https://www.instamojo.com/@galileomultiverse/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cosmic-cyan transition-colors flex items-center gap-1.5"
                >
                  <span>Donate (Instamojo)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://paypal.me/galileoai?country.x=IN&locale.x=en_GB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cosmic-cyan transition-colors flex items-center gap-1.5"
                >
                  <span>Support (PayPal)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4 border-b border-slate-800 pb-2">
              Policies & Legal
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              <li>
                <Link to="/cancelation-and-refund-policy" className="text-slate-400 hover:text-cosmic-cyan transition-colors">
                  Cancellation & Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-slate-400 hover:text-cosmic-cyan transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-slate-400 hover:text-cosmic-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-slate-400 hover:text-cosmic-cyan transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4 border-b border-slate-800 pb-2">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>
                  Galileo Multiverse<br />
                  Space India Green Earth, New Panvel,<br />
                  Navi Mumbai 410206, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cosmic-cyan shrink-0" />
                <a href="tel:+918918563014" className="hover:text-white transition-colors">
                  +91 8918563014
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cosmic-cyan shrink-0" />
                <a href="mailto:galileoheadquarters@gmail.com" className="hover:text-white transition-colors lowercase">
                  galileoheadquarters@gmail.com
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Support Hours: Monday to Saturday<br />
                Response time: 24–48 hours
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Galileo Multiverse - Online Astronomy School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms-of-service" className="hover:text-slate-400">Terms</Link>
            <span>•</span>
            <Link to="/cancelation-and-refund-policy" className="hover:text-slate-400">Refunds</Link>
            <span>•</span>
            <Link to="/return-policy" className="hover:text-slate-400">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
