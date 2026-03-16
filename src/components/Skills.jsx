import React from 'react';
import SkillCube from './SkillCube';

const Skills = () => {
  const skillsList = [
    { name: 'React.js', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Express', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
    { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
    { name: 'Tailwind', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { name: 'Redux', logo: 'https://cdn.worldvectorlogo.com/logos/redux.svg' },
    { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { name: 'Java', logo: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
    { name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="text-4xl md:text-6xl font-black text-center mb-20 sparkling-name">
        TECHNICAL STACK
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-y-16 lg:gap-y-24">
        {skillsList.map((s) => <SkillCube key={s.name} skill={s} />)}
      </div>
    </section>
  );
};

export default Skills;
