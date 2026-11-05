import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReturnPolicy() {
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
            Return Policy
          </h1>
        </div>
      </section>

      {/* Return Policy Content verbatim */}
      <section className="py-16 bg-space-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 bg-space-900 shadow-xl">
            
            <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
              Galileo Multiverse Return Policy
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-light">
              <strong>Galileo Multiverse</strong> provides digital products only.
            </p>

            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-sm">
              As these products are delivered electronically and are accessible immediately after purchase, <strong>returns are not applicable</strong>.
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              We recommend reviewing all product details carefully before making a purchase.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              If you face any technical issues accessing your purchased content, please contact us for assistance.
            </p>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Technical Support Email:</span>
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
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

