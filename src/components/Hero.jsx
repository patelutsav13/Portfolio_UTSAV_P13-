import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl font-syne font-black uppercase tracking-[0.6em] mb-4 text-white/60 lighting-load"
        >
          Utsav Patel
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black sparkling-name leading-[1.1] mb-6 md:mb-8"
        >
          FULL STACK <br className="sm:hidden" /> DEVELOPER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-base md:text-xl text-white/50 max-w-2xl mx-auto mb-10 md:mb-12 font-light"
        >
          Crafting high-performance web experiences with <span className="text-primary">MERN Stack</span> and <span className="text-secondary">3D Visuals</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto text-center">View Projects </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto text-center">Get In Touch</a>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-0 w-full flex justify-around opacity-20 pointer-events-none">
        <div className="w-20 h-20 border-2 border-primary rotate-45 animate-pulse" />
        <div className="w-12 h-12 border-2 border-secondary rounded-full animate-bounce" />
        <div className="w-16 h-16 border-2 border-white rotate-12 animate-spin" style={{ animationDuration: '10s' }} />
      </div>
    </section>
  );
};

export default Hero;
