import React from 'react';
import { ShieldAlert, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CancellationPolicy() {
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
            Cancellation & Refund Policy
          </h1>
        </div>
      </section>

      {/* Policy Details verbatim */}
      <section className="py-16 bg-space-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 bg-space-900 shadow-xl">
            
            <p className="text-base text-slate-300 leading-relaxed font-light">
              All products offered by <strong>Galileo Multiverse</strong> are digital products, including ebooks, guides, kits, workshops, and online learning resources.
            </p>

            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-sm">
              Once a payment is successfully completed and access to the digital product is provided, <strong>cancellations are not permitted and refunds are not issued</strong>.
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Refunds may be considered only in the following cases:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                  <span>Duplicate payment made by mistake</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                  <span>Technical issues where the product is not delivered even after contacting support</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cosmic-cyan shrink-0" />
                <span>All refund-related requests must be emailed within <strong>48 hours of purchase</strong>.</span>
              </p>
              <p>
                If a refund is approved, the amount will be processed within <strong>7–10 working days</strong> to the original payment method.
              </p>
            </div>

            <p className="text-xs text-slate-400 italic">
              By purchasing any product from Galileo Multiverse, you agree to this Cancellation & Refund Policy.
            </p>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">For support, contact:</span>
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
                Contact Us Page
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

