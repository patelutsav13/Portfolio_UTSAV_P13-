import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarryBackground from './components/StarryBackground';
import gsap from 'gsap';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Custom Cursor Logic
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
  }, []);

  return (
    <div className="relative min-h-screen bg-[#010103] text-white selection:bg-primary/30">
      <StarryBackground />
      <Navbar />

      <main className="relative z-20">
        <Hero />

        {/* About Section with Sparkling Border */}
        <section id="about" className="section-container">
          <div className="max-w-4xl mx-auto sparkle-border p-1 bg-black/40 rounded-[2rem] md:rounded-[2.5rem]">
            <div className="glass p-8 md:p-20 rounded-[1.8rem] md:rounded-[2rem] border-0">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-10">About <span className="text-primary">Me</span></h2>
              <p className="text-lg md:text-2xl leading-relaxed text-white/70">
                I am <span className="text-white font-bold">Utsav Patel</span>, a passionate Full-Stack Engineer bridging the digital and 3D worlds.
              </p>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-white/50 leading-relaxed font-space">
                My journey is driven by a fusion of aesthetic design and powerful functionality. I specialize in the MERN stack, crafting immersive web experiences that don't just work—they inspire.
              </p>
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
