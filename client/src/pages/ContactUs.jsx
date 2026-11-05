import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, User, AlertCircle } from 'lucide-react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Program Inquiry');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send inquiry');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Network error. Please email galileoheadquarters@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* Banner */}
      <section 
        className="relative py-24 sm:py-32 bg-cover bg-center border-b border-slate-800"
        style={{
          backgroundImage: `url('/images/backgrounds/1697625486.png')`
        }}
      >
        <div className="absolute inset-0 bg-space-950/85 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-bold block mb-2">
            Galileo Multiverse
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-wide uppercase font-display">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-xl mx-auto">
            We're happy to help you explore programs, enroll your child, or answer technical questions.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-space-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info (Exact wording from original) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide font-display">
                  Get In Touch
                </h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  We're happy to help you. If you have questions related to our programs, digital products, or technical support, please reach out to us.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                
                {/* Organization */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cosmic-cyan border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Organization & Location</h4>
                    <p className="text-sm font-semibold text-white mt-1">Galileo Multiverse</p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Space India Green Earth, New Panvel<br />
                      City: Navi Mumbai, State: Maharashtra, Country: India - 410206
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Phone Support</h4>
                    <a href="tel:+918918563014" className="text-sm font-semibold text-white hover:text-cosmic-cyan transition-colors block mt-1">
                      +91 8918563014
                    </a>
                    <span className="text-[11px] text-slate-400">Direct helpline & WhatsApp</span>
                  </div>
                </div>

                {/* Email */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Email Address</h4>
                    <a href="mailto:galileoheadquarters@gmail.com" className="text-sm font-semibold text-white hover:text-cosmic-cyan transition-colors block mt-1 lowercase">
                      galileoheadquarters@gmail.com
                    </a>
                    <span className="text-[11px] text-slate-400">Response time: 24–48 hours</span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Support Hours</h4>
                    <p className="text-sm font-semibold text-white mt-1">Monday to Saturday</p>
                    <p className="text-xs text-slate-300">Expected response: within 24–48 hours</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 bg-space-900 shadow-2xl relative">
                
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2 font-display">
                  Send A Message
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your details below and our astronomy academic advisors will get back to you promptly.
                </p>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/50 flex items-center gap-3 text-red-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Message Dispatched!</h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for contacting Galileo Multiverse. Our team will review your message and reply to <strong className="text-cosmic-cyan">{email}</strong> within 24–48 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="mt-4 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Your Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-cyan"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-cyan"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Phone / WhatsApp</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                          <input
                            type="tel"
                            placeholder="+91 8918563014"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-cyan"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Topic / Program</label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white focus:outline-none focus:border-cosmic-cyan"
                        >
                          <option value="Program Inquiry">Program Inquiry (Level 1, 2, or 3)</option>
                          <option value="Sunday Space Club">Sunday Space Club</option>
                          <option value="2 Days Space Camp">2 Days Space Camp</option>
                          <option value="Technical Support">Technical Support / Access</option>
                          <option value="Donation / Support">Donation / Support</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Message *</label>
                      <textarea
                        required
                        rows="5"
                        placeholder="Tell us what you would like to know or how we can assist your child..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 rounded-lg bg-space-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-cyan"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-98 transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Transmitting Message...' : 'Send Inquiry To Galileo Multiverse'}</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

