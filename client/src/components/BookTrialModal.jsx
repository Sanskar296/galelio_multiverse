import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Rocket, Calendar, User, Mail, Phone, ExternalLink } from 'lucide-react';

export default function BookTrialModal({ isOpen, onClose, initialLevel = 'Level-1' }) {
  const [level, setLevel] = useState(initialLevel);
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [slot, setSlot] = useState('Saturday 5:00 PM IST');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact/book-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName,
          parentName,
          email,
          phone,
          age,
          level,
          preferredSlot: slot
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit booking');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. You can also use the direct Google Form link below.');
    } finally {
      setLoading(false);
    }
  };

  const googleFormLink = level === 'Level-1'
    ? 'https://forms.gle/pPwxRJukbqj8aGqv8'
    : 'https://forms.gle/pogMC8kZqmXx5dnc6';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-space-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">Free Trial Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              We have received your trial registration for <strong className="text-cosmic-cyan">{studentName}</strong> ({level}).
              We'll send meeting joining details and telescope session instructions to <strong className="text-white">{email}</strong>.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-lg bg-cosmic-cyan text-space-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-300 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-cosmic-cyan text-xs uppercase tracking-widest font-bold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Online Astronomy School</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide mb-2">
              Book A Free Cosmic Trial
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Experience our live interactive deep space session with expert astronomers and astrophysicists.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/50 border border-red-500/50 text-red-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Select Program</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white focus:outline-none focus:border-cosmic-cyan"
                >
                  <option value="Level-1">3 Months / Level-1 Program (Deep Space Exploration)</option>
                  <option value="Level-2">12 Months / Level-2 Program (Junior Astronomer)</option>
                  <option value="Level-3">12 Months / Level-3 Program (Advance Astronomy & Astrophysics)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Student's Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Student Age</label>
                  <input
                    type="number"
                    min="5"
                    max="22"
                    placeholder="e.g. 10"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Phone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cosmic-cyan"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1 font-semibold">Preferred Slot</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-space-950 border border-slate-700 text-white focus:outline-none focus:border-cosmic-cyan"
                  >
                    <option value="Saturday 5:00 PM IST">Saturday 5:00 PM IST</option>
                    <option value="Sunday 12:30 PM IST">Sunday 12:30 PM IST (Space Club Timing)</option>
                    <option value="Sunday 6:00 PM IST">Sunday 6:00 PM IST</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-98 transition-all disabled:opacity-50"
              >
                <Rocket className="w-4 h-4" />
                {loading ? 'Confirming Your Slot...' : 'Reserve Free Trial Session'}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-slate-800 text-center">
              <span className="text-[11px] text-slate-400">Prefer filling the original Google Form? </span>
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cosmic-cyan hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Open Google Form
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

