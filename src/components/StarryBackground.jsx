import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 65 : 120;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const type = Math.random();

      star.className = 'star';
      if (type > 0.8) star.style.background = '#00f2ff';
      if (type > 0.94) star.style.background = '#7000ff';

      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const z = Math.random() * 600 - 300;
      const delay = Math.random() * -20;
      const duration = 15 + Math.random() * 15;

      Object.assign(star.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        transform: `translateZ(${z}px)`,
        animation: `move-stars ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.8)`
      });

      container.appendChild(star);
    }

    const nebulaCount = isMobile ? 2 : 3;
    for (let i = 0; i < nebulaCount; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      nebula.style.left = `${Math.random() * 70}%`;
      nebula.style.top = `${Math.random() * 70}%`;
      nebula.style.opacity = `${Math.random() * 0.3 + 0.08}`;
      container.appendChild(nebula);
    }
  }, []);

  return <div ref={containerRef} className="stars-wrapper" />;
};

export default StarryBackground;
