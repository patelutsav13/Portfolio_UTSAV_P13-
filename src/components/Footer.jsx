import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 py-12 sm:py-16 text-center border-t border-white/10 mt-16 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <div className="sparkling-name text-2xl sm:text-3xl font-black tracking-tight">
          UTSAV PATEL
        </div>

        <p className="text-white/50 text-xs sm:text-sm max-w-md mx-auto">
          Building next-generation full stack web applications with immersive 3D technology.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/patelutsav13"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:patelutsav312@gmail.com"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-black border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 ml-2"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>

        <p className="text-white/30 text-[11px] font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Utsav Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
