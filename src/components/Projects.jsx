



import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

import PrimeAIImg from '../1000056943.jpg';
import TripImg from '../TRIP123456.png';
import FoodImg from '../FOOD123.jpg';
import RealImg from '../Real123.jpg';

const projects = [
  {
    title: 'PrimeAI Career Coach App',
    desc: 'AI-Powered MERN Stack Career Coaching Platform featuring resume analysis, ATS scoring, career readiness tracking, interview performance analytics, role matching, and personalized career improvement suggestions.',
    code: 'https://github.com/patelutsav13/Prime-AI-Career-Coach',
    live: 'https://prime-ai-career-coach-eta.vercel.app',
    image: PrimeAIImg,
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI Models'],
    highlight: 'AI Powered MERN'
  },
  {
    title: 'Cappsara Trip Booking',
    desc: 'Immersive MERN Stack Trip Booking Platform with smooth flight reservation and interactive destination booking.',
    code: 'https://github.com/patelutsav13/Trip-Booking-CAPPSRA-AIR-TRIPS---Frontend',
    live: 'https://trip-booking-cappsra-air-trips-fron.vercel.app/',
    image: TripImg,
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    highlight: 'Featured MERN'
  },
  {
    title: 'Cappsara Food Delivery',
    desc: 'Full-featured Food Ordering System with cart management, order tracking, and intuitive user workflow.',
    code: 'https://github.com/patelutsav13/food-delivery-frontend',
    live: 'https://food-delivery-frontend-kek4.vercel.app/',
    image: FoodImg,
    tech: ['React', 'Redux', 'Node.js', 'Tailwind'],
    highlight: 'Full Stack'
  },
  {
    title: 'Real Estate Pro',
    desc: 'Luxury Property Listings and Management Portal featuring advanced search, filters, and modern UI.',
    code: 'https://github.com/patelutsav13/Real_Estate_MERN_WEB',
    live: 'https://real-estate-mern-web.vercel.app',
    image: RealImg,
    tech: ['React', 'Firebase', 'Tailwind', 'REST'],
    highlight: 'Web App'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles size={12} />
          Selected Work
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black sparkling-name tracking-tight">
          VISIONARY PROJECTS
        </h2>

        <p className="mt-3 text-xs sm:text-sm md:text-base text-white/50 max-w-xl mx-auto px-2">
          Production-ready full-stack applications crafted with clean code, robust architecture, and captivating visuals.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto relative z-10">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            className="group flex flex-col rounded-3xl overflow-hidden glass border border-white/10 bg-black/40 hover:border-primary/40 transition-all duration-500 shadow-xl"
          >

            {/* Image Preview Container */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-white/5">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

              {/* Highlight Tag */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold tracking-wider text-primary uppercase">
                {project.highlight}
              </div>

            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">

              <div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">

                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70 text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}

                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/5">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 px-3 text-center flex items-center justify-center gap-1.5 text-xs font-bold rounded-xl"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2.5 px-3 text-center flex items-center justify-center gap-1.5 text-xs font-bold rounded-xl text-white/80 hover:text-white"
                >
                  <span>Source</span>
                  <Github size={13} />
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Projects;

