import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto transition-all duration-500 relative ${
          scrolled ? 'w-full max-w-2xl' : 'w-full max-w-4xl'
        }`}
      >
        <div className="glass px-4 sm:px-6 py-2 sm:py-2.5 flex justify-between items-center bg-black/60 border border-white/10 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Cyber Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

          {/* Brand Logo */}
          <a href="#" className="relative z-10 flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-[0_0_15px_rgba(0,242,255,0.4)] group-hover:scale-105 transition-transform">
              UP
            </div>
            <span className="sparkling-name text-xs sm:text-sm font-black tracking-wider">
              Utsav Patel
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] font-bold text-white/70 hover:text-primary transition-colors rounded-full hover:bg-white/5"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action (Desktop: Quick Connect, Mobile: Hamburger) */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-primary hover:text-black border border-white/10 transition-all duration-300"
            >
              Let's Talk <ArrowUpRight size={13} />
            </a>

            <button
              className="md:hidden z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10 active:scale-95 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} className="text-primary" /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 glass p-4 bg-black/90 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-2xl md:hidden z-50"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-bold text-white/80 hover:text-primary hover:bg-white/5 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="opacity-50" />
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-white/10 mt-1">
                  <a
                    href="#contact"
                    className="btn-primary w-full py-3 text-center text-xs block rounded-xl font-bold uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
