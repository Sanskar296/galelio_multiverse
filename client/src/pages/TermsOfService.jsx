import React from 'react';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      
      {/* Banner */}
      <section 
        className="relative py-20 bg-cover bg-center border-b border-slate-800"
        style={{
          backgroundImage: `url('/images/backgrounds/1697625486.png')`
        }}
      >
        <div className="absolute inset-0 bg-space-950/85 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold block mb-2">
            Galileo Multiverse
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide uppercase font-display">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Terms Content verbatim */}
      <section className="py-16 bg-space-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 bg-space-900 shadow-xl">
            
            <p className="text-base text-slate-300 leading-relaxed font-light">
              Welcome to <strong>Galileo Multiverse</strong>. By accessing our website or purchasing our digital products, you agree to the following terms and conditions:
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>All content is provided for personal, educational use only.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>Redistribution, resale, duplication, or sharing of content without written permission is strictly prohibited.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>Galileo Multiverse does not guarantee specific academic or career outcomes. Our resources are designed for guidance and awareness.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>We reserve the right to modify, update, or discontinue any content or service at any time.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>Any misuse of content may result in termination of access without refund.</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400">
              These terms may be updated periodically without prior notice.
            </div>

            <p className="text-sm text-slate-300 pt-2">
              If you have questions regarding these terms, please contact us.
            </p>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Inquiries:</span>
                <a 
                  href="mailto:galileoheadquarters@gmail.com" 
                  className="text-sm font-semibold text-cosmic-cyan hover:underline flex items-center gap-1.5 mt-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>galileoheadquarters@gmail.com</span>
                </a>
              </div>

              <Link
                to="/contact-us"
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase tracking-wider font-semibold border border-slate-700 transition-colors"
              >
                Contact Support
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

