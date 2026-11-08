import React, { useState, useEffect, useRef } from 'react';
import { SkillIcon } from './SkillIcons';

const SkillCube = ({ skill }) => {
  const [size, setSize] = useState(100);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef({ x: -15, y: 25 });
  const animFrameRef = useRef(null);
  const containerRef = useRef(null);

  // Responsive cube size
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 400) setSize(68);
      else if (w < 640) setSize(76);
      else if (w < 1024) setSize(88);
      else setSize(104);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Smooth continuous auto-rotation when user is not dragging
  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isDraggingRef.current) {
        const speed = isHovered ? 18 : 26; // degrees per second
        autoRotateRef.current.y = (autoRotateRef.current.y + speed * delta) % 360;
        autoRotateRef.current.x = -15 + Math.sin(time / 1200) * 12; // gentle 3D wave wobble

        setRotation({
          x: autoRotateRef.current.x,
          y: autoRotateRef.current.y
        });
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isHovered]);

  // Mouse / Touch Drag handlers for direct 3D manipulation
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    lastMousePosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const deltaX = clientX - lastMousePosRef.current.x;
    const deltaY = clientY - lastMousePosRef.current.y;

    autoRotateRef.current.y = (autoRotateRef.current.y + deltaX * 0.8) % 360;
    autoRotateRef.current.x = Math.max(-60, Math.min(60, autoRotateRef.current.x - deltaY * 0.8));

    setRotation({
      x: autoRotateRef.current.x,
      y: autoRotateRef.current.y
    });

    lastMousePosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const half = size / 2;
  const brandColor = skill.color || '#00f2ff';
  const brandGlow = skill.glow || 'rgba(0, 242, 255, 0.4)';

  // Face style helper
  const getFaceStyle = (transform) => ({
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    transform,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden'
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-2 sm:p-3 select-none touch-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        isDraggingRef.current = false;
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: isHovered ? 'grab' : 'pointer' }}
    >
      {/* 3D Scene Viewport with isolation to prevent overflow */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: `${size * 1.5}px`,
          height: `${size * 1.5}px`,
          perspective: '1000px',
          contain: 'layout'
        }}
      >
        {/* Pulsing Floor Shadow / Reflection */}
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-500"
          style={{
            bottom: `${size * 0.12}px`,
            width: `${size * 0.9}px`,
            height: `${size * 0.25}px`,
            background: `radial-gradient(ellipse at center, ${brandGlow} 0%, transparent 75%)`,
            filter: 'blur(6px)',
            opacity: isHovered ? 0.9 : 0.4,
            transform: `scale(${isHovered ? 1.25 : 1})`
          }}
        />

        {/* 3D Rotator Box */}
        <div
          className="relative transition-transform duration-75"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale3d(1.1, 1.1, 1.1)' : 'scale3d(1, 1, 1)'}`
          }}
        >
          {/* Internal Glowing Energy Core */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              width: `${size * 0.35}px`,
              height: `${size * 0.35}px`,
              transform: 'translate(-50%, -50%) translateZ(0)',
              background: `radial-gradient(circle, #ffffff 10%, ${brandColor} 60%, transparent 100%)`,
              boxShadow: `0 0 ${size * 0.35}px ${brandColor}`,
              filter: 'blur(1px)',
              animation: 'core-pulse 2s ease-in-out infinite alternate',
              opacity: isHovered ? 0.95 : 0.65
            }}
          />

          {/* FACE 1: FRONT (Icon + Cyber Accents) */}
          <div
            className="rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md transition-colors"
            style={{
              ...getFaceStyle(`translateZ(${half}px)`),
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(10, 10, 25, 0.6) 100%)',
              border: `1.5px solid ${isHovered ? brandColor : 'rgba(255, 255, 255, 0.15)'}`,
              boxShadow: isHovered ? `inset 0 0 15px ${brandGlow}, 0 0 20px ${brandGlow}` : `inset 0 0 10px rgba(255, 255, 255, 0.03)`
            }}
          >
            {/* Corner Tech Brackets */}
            <span className="absolute top-1 left-1.5 w-1.5 h-1.5 border-t border-l pointer-events-none" style={{ borderColor: brandColor }} />
            <span className="absolute top-1 right-1.5 w-1.5 h-1.5 border-t border-r pointer-events-none" style={{ borderColor: brandColor }} />
            <span className="absolute bottom-1 left-1.5 w-1.5 h-1.5 border-b border-l pointer-events-none" style={{ borderColor: brandColor }} />
            <span className="absolute bottom-1 right-1.5 w-1.5 h-1.5 border-b border-r pointer-events-none" style={{ borderColor: brandColor }} />

            <div className="w-3/5 h-3/5 relative flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
              <SkillIcon name={skill.name} />
            </div>
            <div className="text-[7px] sm:text-[8px] font-mono font-bold tracking-widest uppercase mt-0.5 opacity-80" style={{ color: brandColor }}>
              {skill.short || 'DEV'}
            </div>
          </div>

          {/* FACE 2: BACK (Holographic Radar + Brand) */}
          <div
            style={{
              ...getFaceStyle(`rotateY(180deg) translateZ(${half}px)`),
              background: 'linear-gradient(135deg, rgba(15, 15, 30, 0.7) 0%, rgba(5, 5, 15, 0.85) 100%)',
              border: `1.5px solid ${isHovered ? brandColor : 'rgba(255, 255, 255, 0.12)'}`,
              boxShadow: isHovered ? `inset 0 0 15px ${brandGlow}` : 'none'
            }}
            className="rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md"
          >
            <div className="w-1/2 h-1/2 opacity-80 flex items-center justify-center">
              <SkillIcon name={skill.name} />
            </div>
            <span className="mt-1 text-[7px] font-mono tracking-widest font-black uppercase px-1.5 py-0.5 rounded bg-white/10 text-white/90">
              {skill.level || 'PRO'}
            </span>
          </div>

          {/* FACE 3: TOP (Category Badge) */}
          <div
            style={{
              ...getFaceStyle(`rotateX(90deg) translateZ(${half}px)`),
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.7))',
              border: `1.5px solid ${isHovered ? brandColor : 'rgba(255, 255, 255, 0.12)'}`
            }}
            className="rounded-2xl flex flex-col items-center justify-center p-1.5 text-center backdrop-blur-md"
          >
            <div className="w-3 h-0.5 rounded-full mb-1" style={{ background: brandColor }} />
            <span className="text-[7px] sm:text-[8px] font-black uppercase font-mono tracking-wider text-white/90">
              {skill.badge || skill.category || 'MERN'}
            </span>
          </div>

          {/* FACE 4: BOTTOM (Circuit Matrix) */}
          <div
            style={{
              ...getFaceStyle(`rotateX(-90deg) translateZ(${half}px)`),
              background: 'linear-gradient(to top, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.8))',
              border: `1.5px solid ${isHovered ? brandColor : 'rgba(255, 255, 255, 0.12)'}`
            }}
            className="rounded-2xl flex items-center justify-center p-1.5 backdrop-blur-md"
          >
            <div className="w-2/3 h-2/3 border border-dashed rounded-lg flex items-center justify-center" style={{ borderColor: `${brandColor}55` }}>
              <span className="text-[8px] font-mono font-bold" style={{ color: brandColor }}>
                {skill.short || '3D'}
              </span>
            </div>
          </div>

          {/* FACE 5: RIGHT (Hologram Slice) */}
          <div
            style={{
              ...getFaceStyle(`rotateY(90deg) translateZ(${half}px)`),
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.75))',
              border: `1.5px solid ${isHovered ? brandColor : 'rgba(255, 255, 255, 0.12)'}`
            }}
            className="rounded-2xl flex items-center justify-center backdrop-blur-md"
          >
            <div className="w-7 h-7 opacity-40 flex items-center justify-center">
              <SkillIcon name={skill.name} />
            </div>
          </div>

          {/* FACE 6: LEFT (Hologram Slice) */}
          <div
            style={{
              ...getFaceStyle(`rotateY(-90deg) translateZ(${half}px)`),
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.75))',
              border: `1.5px solid ${isHovered ? brandColor : 'rgba(255, 255, 255, 0.12)'}`
            }}
            className="rounded-2xl flex items-center justify-center backdrop-blur-md"
          >
            <div className="w-7 h-7 opacity-40 flex items-center justify-center">
              <SkillIcon name={skill.name} />
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Skill Name Label */}
      <div className="mt-1 sm:mt-2 flex flex-col items-center transition-all duration-300">
        <span
          className="text-[11px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.2em] uppercase transition-all duration-300 group-hover:scale-105"
          style={{
            color: isHovered ? brandColor : 'rgba(255, 255, 255, 0.75)',
            textShadow: isHovered ? `0 0 12px ${brandColor}` : 'none'
          }}
        >
          {skill.name}
        </span>
        <span className="text-[8px] font-mono text-white/30 tracking-widest uppercase mt-0.5">
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default SkillCube;
