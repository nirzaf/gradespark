import React, { useEffect } from 'react';

const GSAShieldLogo: React.FC = () => {
  useEffect(() => {
    // Add the animation styles to the document head
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      /* Logo container */
      .gsa-shield-logo {
        width: 68px; /* Size for navbar - increased by 10% */
        margin: 0 auto;
        /* Removed breathing animation */
        filter: drop-shadow(0 0 8px rgba(0, 247, 255, 0.4));
      }

      .gsa-shield-logo svg {
        width: 100%;
        height: auto;
        overflow: visible;
      }

      /* Shield Base – classic shape with a solid black fill */
      .gsa-shield-logo .base {
        fill: #000;
        stroke: none;
      }

      /* Shield Outline – static cyan stroke */
      .gsa-shield-logo .shield-outline {
        stroke: #00f7ff;
        fill: none;
        stroke-width: 2;
        filter: drop-shadow(0 0 3px rgba(0, 247, 255, 0.6));
      }

      /* Apply subtle 3D shadow filter to all text elements */
      .gsa-shield-logo .letter {
        font-family: 'Orbitron', sans-serif;
        font-weight: bold;
        font-size: 48px;
        fill: white;
        opacity: 0;
      }

      /* Individual letter tweaks */
      .gsa-shield-logo .letter.g {
        opacity: 1;
        fill: white;
      }
      .gsa-shield-logo .letter.s {
        opacity: 1;
        fill: white;
      }
      .gsa-shield-logo .letter.a {
        opacity: 1;
        fill: #00f7ff;
        filter: drop-shadow(0 0 6px rgba(0, 247, 255, 0.8));
      }

      /* Cyan accent for the bottom tip of the shield */
      .gsa-shield-logo .accent {
        fill: #00f7ff;
        opacity: 1;
        filter: drop-shadow(0 0 6px rgba(0, 247, 255, 0.8));
      }

      /* Hover effects removed */

      /* Animations removed */
    `;
    document.head.appendChild(styleEl);

    // Orbitron font is now preloaded in index.html for better performance

    // Cleanup function
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div className="gsa-shield-logo">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* SVG Definitions */}
        <defs>
          {/* Subtle 3D drop-shadow filter for text elements */}
          <filter id="f3d" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset in="SourceAlpha" dx="1" dy="1" result="offset" />
            <feGaussianBlur in="offset" stdDeviation="1" result="blur" />
            <feBlend in="SourceGraphic" in2="blur" mode="normal" />
          </filter>
        </defs>

        {/* Shield Base: classic shape */}
        <path className="base" d="M40,30 L160,30 L160,140 L100,170 L40,140 Z" />

        {/* Animated Shield Outline */}
        <path className="shield-outline" d="M40,30 L160,30 L160,140 L100,170 L40,140 Z" />

        {/* Centered group for letters with interlocking offsets */}
        <g transform="translate(100,102)">
          {/* "G" positioned to the left */}
          <text x="-40" y="0" className="letter g" textAnchor="middle" dominantBaseline="middle" filter="url(#f3d)">G</text>
          {/* "S" centered */}
          <text x="0" y="0" className="letter s" textAnchor="middle" dominantBaseline="middle" filter="url(#f3d)">S</text>
          {/* "A" positioned to the right */}
          <text x="40" y="0" className="letter a" textAnchor="middle" dominantBaseline="middle" filter="url(#f3d)">A</text>
        </g>

        {/* Cyan bottom tip accent */}
        <polygon className="accent" points="90,155 100,165 110,155" />
      </svg>
    </div>
  );
};

export default GSAShieldLogo;
