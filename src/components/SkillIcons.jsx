import React from 'react';

// Highly optimized, crisp vector icons for each skill
export const SkillIcon = ({ name, className = "w-full h-full", color = "currentColor" }) => {
  switch (name) {
    case 'React.js':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'Node.js':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path
            d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z"
            fill="#339933"
            opacity="0.15"
          />
          <path
            d="M16 3.8L4.6 10.4v13.2L16 30.2l11.4-6.6V10.4L16 3.8z"
            stroke="#539e43"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.5c-2.8 0-4.5 1.5-4.5 3.8 0 3.5 5 2.5 5 4.5 0 .8-.7 1.2-1.6 1.2-1.3 0-2.3-.6-3-1.5l-1.5 1.5c1 1.3 2.5 2 4.5 2 2.7 0 4.6-1.4 4.6-3.8 0-3.6-5-2.6-5-4.5 0-.7.6-1.2 1.5-1.2 1.1 0 2 .5 2.6 1.2l1.4-1.4c-.9-1-2.1-1.6-4-1.6z"
            fill="#ffffff"
          />
        </svg>
      );

    case 'MongoDB':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path
            d="M15.9 2C15.6 2.3 9 10.8 9 17.5c0 5 3.5 9.8 6.9 12.5.4-.4.8-.8 1.1-1.2.3.4.7.8 1.1 1.2 3.4-2.7 6.9-7.5 6.9-12.5C25 10.8 16.2 2.3 15.9 2z"
            fill="#13aa52"
          />
          <path
            d="M15.9 2v28c.4-.4.8-.8 1.1-1.2 3.4-2.7 6.9-7.5 6.9-12.5C25 10.8 16.2 2.3 15.9 2z"
            fill="#116149"
          />
          <path
            d="M15.9 8.5c-.2 2.5-.2 12.8 0 15.3.1.8.4 1.5.8 2.2V6.3c-.4.6-.7 1.4-.8 2.2z"
            fill="#ffffff"
            opacity="0.8"
          />
        </svg>
      );

    case 'Express':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="14" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
          <text
            x="16"
            y="20"
            textAnchor="middle"
            fill="#00f2ff"
            fontSize="11"
            fontWeight="900"
            fontFamily="monospace"
            letterSpacing="-0.5"
          >
            EX
          </text>
        </svg>
      );

    case 'JavaScript':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="6" fill="#f7df1e" />
          <path
            d="M18.8 23.4c.7.4 1.6.7 2.6.7 1.4 0 2.2-.6 2.2-1.6 0-1.1-.9-1.5-2.2-2.1-1.8-.7-3-1.8-3-3.6 0-2 1.6-3.5 4.1-3.5 1.1 0 2 .3 2.6.6l-.7 2c-.5-.3-1.1-.5-1.9-.5-1.1 0-1.7.5-1.7 1.3 0 .9.8 1.3 2 1.8 2 .8 3.2 1.8 3.2 3.8 0 2.2-1.7 3.7-4.6 3.7-1.4 0-2.6-.4-3.3-.8l.7-1.9zm-8.2.3c.6.3 1.3.5 2.1.5 1.5 0 2.4-.7 2.4-2.5v-8.2h2.5v8.3c0 3-1.8 4.4-4.7 4.4-1.2 0-2.2-.3-2.9-.6l.6-1.9z"
            fill="#000000"
          />
        </svg>
      );

    case 'TypeScript':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="6" fill="#3178c6" />
          <path
            d="M17.8 15.6h-3.6v11.1H11.5V15.6H7.9V13.3h9.9v2.3zm2.5 7.8c.7.4 1.6.7 2.6.7 1.4 0 2.2-.6 2.2-1.6 0-1.1-.9-1.5-2.2-2.1-1.8-.7-3-1.8-3-3.6 0-2 1.6-3.5 4.1-3.5 1.1 0 2 .3 2.6.6l-.7 2c-.5-.3-1.1-.5-1.9-.5-1.1 0-1.7.5-1.7 1.3 0 .9.8 1.3 2 1.8 2 .8 3.2 1.8 3.2 3.8 0 2.2-1.7 3.7-4.6 3.7-1.4 0-2.6-.4-3.3-.8l.7-1.9z"
            fill="#ffffff"
          />
        </svg>
      );

    case 'Tailwind':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path
            d="M8.5 14.5c1.4-2.8 3.7-4 6.8-3.7 3.6.4 5.3 2.5 6.7 4.5 1.4 2 2.8 3.2 5.5 3.2 2.8 0 4.8-1.5 6-3.8-1.4 2.8-3.7 4-6.8 3.7-3.6-.4-5.3-2.5-6.7-4.5-1.4-2-2.8-3.2-5.5-3.2-2.8 0-4.8 1.5-6 3.8zm-7 8c1.4-2.8 3.7-4 6.8-3.7 3.6.4 5.3 2.5 6.7 4.5 1.4 2 2.8 3.2 5.5 3.2 2.8 0 4.8-1.5 6-3.8-1.4 2.8-3.7 4-6.8 3.7-3.6-.4-5.3-2.5-6.7-4.5-1.4-2-2.8-3.2-5.5-3.2-2.8 0-4.8 1.5-6 3.8z"
            fill="#38bdf8"
          />
        </svg>
      );

    case 'Redux':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path
            d="M16 6a10 10 0 1010 10A10 10 0 0016 6zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
            stroke="#764abc"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <circle cx="16" cy="16" r="3" fill="#764abc" />
          <ellipse cx="16" cy="16" rx="9" ry="4" stroke="#764abc" strokeWidth="1.8" transform="rotate(30 16 16)" />
          <ellipse cx="16" cy="16" rx="9" ry="4" stroke="#764abc" strokeWidth="1.8" transform="rotate(-30 16 16)" />
          <ellipse cx="16" cy="16" rx="9" ry="4" stroke="#764abc" strokeWidth="1.8" transform="rotate(90 16 16)" />
        </svg>
      );

    case 'Python':
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path
            d="M15.8 3c-4.4 0-7.3.7-7.3 3.6v2.6h7.5v1.1H5.8C3 10.3 3 13.8 3 17.5c0 3.3 2.2 4.4 5.5 4.4h1.7v-2.7c0-2.8 2.6-5.1 5.6-5.1h7.4c1.6 0 2.9-1.3 2.9-3V6.6C26.1 3.7 21 3 15.8 3zm-3.2 2.3c.7 0 1.2.6 1.2 1.3 0 .7-.5 1.3-1.2 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3z"
            fill="#387eb8"
          />
          <path
            d="M16.2 29c4.4 0 7.3-.7 7.3-3.6v-2.6H16v-1.1h10.2c2.8 0 2.8-3.5 2.8-7.2 0-3.3-2.2-4.4-5.5-4.4h-1.7v2.7c0 2.8-2.6 5.1-5.6 5.1H8.8c-1.6 0-2.9 1.3-2.9 3v4.5C5.9 28.3 11 29 16.2 29zm3.2-2.3c-.7 0-1.2-.6-1.2-1.3 0-.7.5-1.3 1.2-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3z"
            fill="#ffe052"
          />
        </svg>
      );

    case 'Java':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path
            d="M13.2 26.5c4.5.3 8.3-.3 10.5-2.2-2.5.7-6.2 1.1-10.5.8-2.6-.2-4.5-.7-5.2-1.4 1 1.7 4 2.6 5.2 2.8z"
            fill="#ea2d2e"
          />
          <path
            d="M11.5 23.2c3.8.3 7-.2 8.9-1.8-2.1.6-5.3.9-8.9.7-2.2-.1-3.8-.6-4.4-1.2.9 1.4 3.4 2.2 4.4 2.3z"
            fill="#ea2d2e"
          />
          <path
            d="M16.5 19.5c2.5-.2 5.5-1.2 5.5-3.5 0-.7-.4-1.4-1.1-1.9.3.4.4.9.4 1.4 0 1.5-1.9 2.4-4.8 2.6-3.8.3-7.2-.6-7.2-2.6 0-.6.4-1.1 1-1.6-.9.6-1.5 1.4-1.5 2.2 0 2.2 3.8 3.6 7.7 3.4z"
            fill="#ea2d2e"
          />
          <path
            d="M21.2 14c1.8-1.5 2.6-3.1 2.2-4.5-.4-1.2-1.8-1.8-3.5-1.7.6.5 1 1.2 1.1 1.9.2 1.2-.5 2.5-2 3.5-1.6 1-3.7 1.8-5.9 2.4 2.7-.4 5.9-1.2 8.1-1.6z"
            fill="#5382a1"
          />
          <path
            d="M19.3 5.5c.8 1.4.3 3.1-1.1 4.5-1.3 1.3-3.1 2.3-5 3 2.1-.5 4.3-1.4 5.6-2.5 1.5-1.3 1.9-2.9 1-4.2-.2-.3-.4-.6-.5-.8z"
            fill="#ea2d2e"
          />
        </svg>
      );

    case 'Git':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path
            d="M30.3 14.5l-12.8-12.8c-.9-.9-2.5-.9-3.4 0l-2.4 2.4 3.7 3.7c.9-.3 1.9-.1 2.6.6.7.7.9 1.7.6 2.6l3.5 3.5c.9-.3 1.9-.1 2.6.6 1 1 1 2.6 0 3.6s-2.6 1-3.6 0c-.8-.8-.9-1.9-.6-2.8l-3.3-3.3v7.3c.3.2.5.4.7.7 1 1 1 2.6 0 3.6s-2.6 1-3.6 0-1-2.6 0-3.6c.3-.3.6-.5 1-.6v-7.4c-.4-.1-.7-.3-1-.6-.8-.8-.9-1.9-.6-2.8l-3.7-3.7-5.9 5.9c-.9.9-.9 2.5 0 3.4l12.8 12.8c.9.9 2.5.9 3.4 0l12.8-12.8c.9-.9.9-2.5 0-3.4z"
            fill="#f05032"
          />
        </svg>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center font-bold text-primary">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
