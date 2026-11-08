import React, { useState } from 'react';
import SkillCube from './SkillCube';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

const skillsList = [
  {
    name: 'React.js',
    category: 'Frontend',
    color: '#00d8ff',
    glow: 'rgba(0, 216, 255, 0.5)',
    badge: 'MERN',
    short: 'RE',
    level: 'EXPERT'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.5)',
    badge: 'RUNTIME',
    short: 'ND',
    level: 'ADVANCED'
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.5)',
    badge: 'NOSQL',
    short: 'MG',
    level: 'ADVANCED'
  },
  {
    name: 'Express',
    category: 'Backend',
    color: '#00f2ff',
    glow: 'rgba(0, 242, 255, 0.5)',
    badge: 'REST API',
    short: 'EX',
    level: 'ADVANCED'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    color: '#facc15',
    glow: 'rgba(250, 204, 21, 0.5)',
    badge: 'ES6+',
    short: 'JS',
    level: 'EXPERT'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.5)',
    badge: 'TYPED',
    short: 'TS',
    level: 'PROFICIENT'
  },
  {
    name: 'Tailwind',
    category: 'Frontend',
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.5)',
    badge: 'CSS3',
    short: 'TW',
    level: 'EXPERT'
  },
  {
    name: 'Redux',
    category: 'Frontend',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.5)',
    badge: 'STATE',
    short: 'RD',
    level: 'ADVANCED'
  },
  {
    name: 'Python',
    category: 'Language & Tools',
    color: '#eab308',
    glow: 'rgba(234, 179, 8, 0.5)',
    badge: 'SCRIPT',
    short: 'PY',
    level: 'ADVANCED'
  },
  {
    name: 'Java',
    category: 'Language & Tools',
    color: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.5)',
    badge: 'OOP',
    short: 'JA',
    level: 'CORE'
  },
  {
    name: 'Git',
    category: 'Language & Tools',
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.5)',
    badge: 'VCS',
    short: 'GT',
    level: 'PROFICIENT'
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Language & Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8 sm:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles size={12} />
          Interactive 3D Tech Matrix
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black sparkling-name tracking-tight">
          TECHNICAL STACK
        </h2>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-white/50 max-w-xl mx-auto flex items-center justify-center gap-2">
          <Compass size={14} className="text-primary hidden xs:inline" />
          Drag or swipe any 3D cube to rotate & inspect in real-time
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 max-w-lg mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,242,255,0.4)] scale-105'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Cubes Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-6 sm:gap-y-10 md:gap-y-12 max-w-6xl mx-auto relative z-10"
      >
        <AnimatePresence>
          {filteredSkills.map((s) => (
            <motion.div
              layout
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.35 }}
            >
              <SkillCube skill={s} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
