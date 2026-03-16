import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import TripImg from '../TRIP123456.png';
import FoodImg from '../FOOD123.jpg';
import RealImg from '../Real123.jpg';

const projects = [
  {
    title: 'Cappsara Trip Booking',
    desc: 'Immersive MERN Stack Trip Booking Platform with secure payments.',
    code: 'https://github.com/patelutsav13/Trip-Booking-CAPPSRA-AIR-TRIPS---Frontend',
    live: 'https://trip-booking-cappsra-air-trips-fron.vercel.app/',
    image: TripImg,
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Cappsara Food Delivery',
    desc: 'Full-featured Food Ordering System with real-time tracking.',
    code: 'https://github.com/patelutsav13/food-delivery-frontend',
    live: 'https://food-delivery-frontend-kek4.vercel.app/',
    image: FoodImg,
    tech: ['React', 'Redux', 'Node.js']
  },
  {
    title: 'Real Estate Pro',
    desc: 'Luxury Property Listings and Management Portal.',
    code: 'https://github.com/patelutsav13/Real_Estate_MERN_WEB',
    live: 'https://real-estate-mern-web.vercel.app',
    image: RealImg,
    tech: ['React', 'Firebase', 'Tailwind']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="text-4xl md:text-6xl font-black text-center mb-24 sparkling-name">
        VISIONARY PROJECTS
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative h-[400px] md:h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden sparkle-border bg-black/40"
          >
            {/* Project Image Background */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-125" 
                 style={{ backgroundImage: `url(${project.image})` }}>
            </div>

            {/* Hover Dark Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>

            {/* Static Content (visible before hover) */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">{project.title}</h3>
              <p className="text-white/40 text-[10px] md:text-sm italic">{project.tech.join(' • ')}</p>
            </div>

            {/* Hovered Action Menu */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 md:translate-y-20 group-hover:translate-y-0 text-center">
               <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-primary">{project.title}</h3>
               <p className="text-white/60 text-xs md:text-sm mb-6 md:mb-10 leading-relaxed font-outfit max-w-xs">{project.desc}</p>

               <div className="flex flex-col gap-3 md:gap-4 w-full max-w-[240px]">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary py-3 md:py-4 text-center flex items-center justify-center gap-2 text-[10px] md:text-xs">
                    Live Experience <ExternalLink size={14} />
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-secondary py-3 md:py-4 text-center flex items-center justify-center gap-2 text-[10px] md:text-xs">
                    Review Code <Github size={14} />
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
