import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles size={12} />
          Let's Collaborate
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black sparkling-name tracking-tight">
          GET IN TOUCH
        </h2>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-white/50 max-w-lg mx-auto px-2">
          Have an exciting project, freelance opportunity, or vision? Send a message and let's bring it to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto relative z-10">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 flex flex-col justify-between"
        >
          <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-black/40 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-secondary" />

            <h3 className="text-xl sm:text-2xl font-black mb-6 text-white">
              Contact Channels
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-white/40">Email</p>
                  <a
                    href="mailto:patelutsav312@gmail.com"
                    className="font-bold text-sm sm:text-base text-white hover:text-primary transition-colors break-all"
                  >
                    patelutsav312@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-white/40">Phone / WhatsApp</p>
                  <a
                    href="tel:+916351325402"
                    className="font-bold text-sm sm:text-base text-white hover:text-primary transition-colors"
                  >
                    +91 6351325402
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-white/40">Location</p>
                  <p className="font-bold text-sm sm:text-base text-white">Ahmedabad, India (Available Worldwide)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
            <p className="text-white/60 italic text-xs sm:text-sm leading-relaxed">
              "Every exceptional product begins with a visionary idea. Let's engineer something memorable together."
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                Currently open for new roles & projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-black/40 space-y-4 sm:space-y-5 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-mono tracking-widest text-white/50 ml-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-white/20 focus:border-primary focus:bg-white/10 transition-all outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-mono tracking-widest text-white/50 ml-1">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-white/20 focus:border-primary focus:bg-white/10 transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-widest text-white/50 ml-1">
              Your Message
            </label>
            <textarea
              rows="4"
              required
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-white/20 focus:border-primary focus:bg-white/10 transition-all outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-70"
          >
            {status === 'sending' ? (
              <span>Sending Message...</span>
            ) : status === 'sent' ? (
              <span className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 size={16} /> Message Sent Successfully!
              </span>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={15} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
