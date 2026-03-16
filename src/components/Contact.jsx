import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

   const handleSubmit = (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      setTimeout(() => {
         btn.innerHTML = 'Sent Successfully!';
         setFormData({ name: '', email: '', message: '' });
         setTimeout(() => btn.innerHTML = originalText, 3000);
      }, 1500);
   };

   return (
      <section id="contact" className="section-container">
         <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-20 sparkling-name"
         >
            GET IN TOUCH
         </motion.h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6 md:space-y-8"
            >
               <div className="glass p-6 md:p-8 border-l-4 border-primary">
                  <h3 className="text-lg md:text-xl font-black mb-6">Contact Channels</h3>
                  <div className="space-y-5 md:space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                           <Mail size={18} />
                        </div>
                        <div className="min-w-0">
                           <p className="text-[9px] md:text-[10px] uppercase text-white/40">Email</p>
                           <p className="font-bold text-sm md:text-base break-words">patelutsav312@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                           <Phone size={18} />
                        </div>
                        <div>
                           <p className="text-[9px] md:text-[10px] uppercase text-white/40">Phone</p>
                           <p className="font-bold text-sm md:text-base">+91 6351325402</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                           <MapPin size={18} />
                        </div>
                        <div>
                           <p className="text-[9px] md:text-[10px] uppercase text-white/40">Based In</p>
                           <p className="font-bold text-sm md:text-base">Ahmedabad, India</p>
                        </div>
                     </div>
                  </div>
               </div>
               <p className="text-white/40 italic text-sm px-4 border-l border-white/10 hidden sm:block">
                  "Every great design begins with an even better story. Let's write yours."
               </p>
            </motion.div>

            <motion.form 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               onSubmit={handleSubmit} 
               className="glass p-6 md:p-10 space-y-5 md:space-y-6 bg-black/20"
            >
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Name</label>
                     <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary transition-colors outline-none"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Email</label>
                     <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary transition-colors outline-none"
                     />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Message</label>
                  <textarea
                     rows="4"
                     required
                     value={formData.message}
                     onChange={e => setFormData({ ...formData, message: e.target.value })}
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary transition-colors outline-none resize-none"
                  ></textarea>
               </div>
               <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                  Send Message <Send size={18} />
               </button>
            </motion.form>
         </div>
      </section>
   );
};

export default Contact;
