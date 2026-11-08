import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Box } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-secondary/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Name / Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <h2 className="text-xs sm:text-sm md:text-base font-syne font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white/80 lighting-load">
            Utsav Patel
          </h2>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="text-[32px] xs:text-[38px] sm:text-6xl md:text-7xl lg:text-8xl font-black sparkling-name leading-[1.08] tracking-tight mb-4 sm:mb-6 select-none"
        >
          <span className="block">FULL STACK</span>
          <span className="block">DEVELOPER</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed px-2"
        >
          Crafting high-performance web experiences with{' '}
          <span className="text-primary font-semibold">MERN Stack</span> and{' '}
          <span className="text-secondary font-semibold">3D Visuals</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#projects"
            className="btn-primary w-full xs:w-auto text-center flex items-center justify-center gap-2 text-xs sm:text-sm py-3.5 px-7"
          >
            <Code2 size={16} /> View Projects
          </a>
          <a
            href="#contact"
            className="btn-secondary w-full xs:w-auto text-center flex items-center justify-center gap-2 text-xs sm:text-sm py-3.5 px-7"
          >
            <Sparkles size={16} /> Get In Touch
          </a>
        </motion.div>

        {/* Micro highlights banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/40 text-[11px] sm:text-xs font-mono uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>MERN Specialist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Interactive 3D UI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Clean Scalable Code</span>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative 3D geometric shapes safely contained within screen bounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute bottom-16 left-[10%] w-14 sm:w-20 h-14 sm:h-20 border border-primary/25 rounded-2xl rotate-45 animate-pulse opacity-40"
        />
        <div
          className="absolute top-1/3 right-[8%] w-10 sm:w-14 h-10 sm:h-14 border border-secondary/30 rounded-full animate-bounce opacity-30"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-24 right-[12%] w-12 sm:w-16 h-12 sm:h-16 border border-white/20 rotate-12 animate-spin opacity-25"
          style={{ animationDuration: '14s' }}
        />
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-primary transition-colors text-[10px] font-mono uppercase tracking-widest"
      >
        <span>Explore</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
