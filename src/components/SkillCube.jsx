import React from 'react';

const SkillCube = ({ skill }) => {
  const [size, setSize] = React.useState(100);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSize(70);
      else if (window.innerWidth < 1024) setSize(85);
      else setSize(110);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const half = size / 2;

  const faceStyle = (transform) => ({
    position: 'absolute',
    width: size,
    height: size,
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform,
    backfaceVisibility: 'hidden'
  });

  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 group">
      <div className="relative transform-style-3d" style={{ width: size, height: size, perspective: '800px' }}>
        <div className="w-full h-full transform-style-3d relative cube-animation">
          <div style={faceStyle(`translateZ(${half}px)`)} className="cube-sparkle">
            <img src={skill.logo} alt="" className="w-1/2 h-1/2 object-contain" />
          </div>
          <div style={faceStyle(`rotateY(180deg) translateZ(${half}px)`)} className="cube-sparkle">
            <img src={skill.logo} alt="" className="w-1/2 h-1/2 object-contain grayscale" />
          </div>
          <div style={faceStyle(`rotateY(90deg) translateZ(${half}px)`)} className="cube-sparkle" />
          <div style={faceStyle(`rotateY(-90deg) translateZ(${half}px)`)} className="cube-sparkle" />
          <div style={faceStyle(`rotateX(90deg) translateZ(${half}px)`)} className="cube-sparkle" />
          <div style={faceStyle(`rotateX(-90deg) translateZ(${half}px)`)} className="cube-sparkle" />
        </div>
      </div>
      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/40 group-hover:text-primary group-hover:tracking-[0.5em] transition-all">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillCube;
