import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const type = Math.random();

      star.className = 'star';
      if (type > 0.8) star.style.background = '#00f2ff';
      if (type > 0.95) star.style.background = '#7000ff';

      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const z = Math.random() * 1000 - 500;
      const delay = Math.random() * -20;
      const duration = 15 + Math.random() * 15;
      const twinkleDur = 2 + Math.random() * 3;

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

    for (let i = 0; i < 4; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      nebula.style.left = `${Math.random() * 80 - 20}%`;
      nebula.style.top = `${Math.random() * 80 - 20}%`;
      nebula.style.opacity = Math.random() * 0.4 + 0.1;
      container.appendChild(nebula);
    }
  }, []);

  return <div ref={containerRef} className="stars-wrapper" />;
};

export default StarryBackground;
