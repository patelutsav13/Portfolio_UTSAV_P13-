import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarryBackground from './components/StarryBackground';
import Footer from './components/Footer';
import gsap from 'gsap';
import { Sparkles, Terminal, Cpu, Palette } from 'lucide-react';

function App() {
  useEffect(() => {
    // Only mount custom cursor on non-touch devices with fine pointers
    if (window.matchMedia('(pointer: fine)').matches) {
      const cursor = document.createElement('div');
      const follower = document.createElement('div');
      cursor.className = 'fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block';
      follower.className = 'fixed w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out hidden md:block opacity-30';
      document.body.appendChild(cursor);
      document.body.appendChild(follower);

      const onMouseMove = (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15 });
      };

      window.addEventListener('mousemove', onMouseMove);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        if (document.body.contains(cursor)) document.body.removeChild(cursor);
        if (document.body.contains(follower)) document.body.removeChild(follower);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#010103] text-white selection:bg-primary/30 overflow-x-hidden">
      <StarryBackground />
      <Navbar />

      <main className="relative z-20">
        <Hero />

        {/* About Section with Responsive Sparkling Glass Border */}
        <section id="about" className="section-container relative overflow-hidden">
          <div className="max-w-4xl mx-auto sparkle-border p-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[1.8rem] sm:rounded-[2.5rem]">
            <div className="glass p-6 sm:p-10 md:p-16 rounded-[1.75rem] sm:rounded-[2.45rem] border-0 bg-black/50 backdrop-blur-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles size={12} />
                Background & Vision
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
                About <span className="text-primary">Me</span>
              </h2>

              <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-white/80 font-medium">
                I am <span className="text-white font-bold underline decoration-primary/40 underline-offset-4">Utsav Patel</span>, a forward-thinking Full-Stack Developer bridging modern web architecture and interactive 3D experiences.
              </p>

              <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-white/50 leading-relaxed font-space">
                My engineering philosophy fuses aesthetic precision with scalable backend infrastructure. Specializing in the <span className="text-primary font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js), I build web apps that are responsive, blazing fast, and memorable.
              </p>

              {/* Feature Highlights Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/5">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Terminal size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Full Stack MERN</h4>
                    <p className="text-[11px] text-white/40 mt-0.5">End-to-end web apps with scalable APIs</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">3D Interactivity</h4>
                    <p className="text-[11px] text-white/40 mt-0.5">Engaging 3D visuals & smooth micro-physics</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Palette size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Mobile Responsive</h4>
                    <p className="text-[11px] text-white/40 mt-0.5">Pixel-perfect ergonomics across all screens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
