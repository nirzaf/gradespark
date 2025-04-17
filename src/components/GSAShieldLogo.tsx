import React, { useEffect } from 'react';

const GSAShieldLogo: React.FC = () => {
  useEffect(() => {
    // Add the animation styles to the document head
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      /* Logo container */
      .gsa-shield-logo {
        width: 62px; /* Size for navbar */
        margin: 0 auto;
        animation: scaleBreath 4s ease-in-out infinite;
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
        animation: baseFadeIn 1.5s ease forwards;
      }

      /* Shield Outline Animation – drawn with a cyan stroke */
      .gsa-shield-logo .shield-outline {
        stroke: #00f7ff;
        fill: none;
        stroke-width: 2;
        stroke-dasharray: 600;
        stroke-dashoffset: 600;
        animation: drawOutline 2s ease-out forwards;
      }

      /* Apply subtle 3D shadow filter to all text elements */
      .gsa-shield-logo .letter {
        font-family: 'Orbitron', sans-serif;
        font-weight: bold;
        font-size: 48px;
        fill: white;
        opacity: 0;
        animation: textFade 1.5s ease-out forwards;
      }

      /* Individual letter tweaks */
      .gsa-shield-logo .letter.g { animation-delay: 0.5s; }
      .gsa-shield-logo .letter.s { animation-delay: 0.7s; }
      .gsa-shield-logo .letter.a { 
        animation-delay: 0.9s; 
        fill: #00f7ff; 
        animation: textFade 1.5s ease-out forwards, glowPulse 2s infinite; 
      }

      /* Cyan accent for the bottom tip of the shield */
      .gsa-shield-logo .accent {
        fill: #00f7ff;
        animation: glowPulse 2s infinite;
        filter: drop-shadow(0 0 6px rgba(0, 247, 255, 0.8));
      }

      /* Hover effects */
      .gsa-shield-logo:hover {
        filter: drop-shadow(0 0 12px rgba(0, 247, 255, 0.6));
        transform: scale(1.05) translateY(-2px);
        transition: all 0.3s ease;
      }

      .gsa-shield-logo:hover .letter.a,
      .gsa-shield-logo:hover .accent {
        filter: drop-shadow(0 0 8px rgba(0, 247, 255, 1));
      }

      /* Animations */
      @keyframes drawOutline {
        to { stroke-dashoffset: 0; }
      }

      @keyframes glowPulse {
        0%, 100% { filter: drop-shadow(0 0 6px rgba(0, 247, 255, 0.8)); }
        50% { filter: drop-shadow(0 0 14px rgba(0, 247, 255, 1)); }
      }

      @keyframes scaleBreath {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }

      @keyframes baseFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes textFade {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(styleEl);

    // Add Orbitron font if not already present
    if (!document.getElementById('orbitron-font')) {
      const fontLink = document.createElement('link');
      fontLink.id = 'orbitron-font';
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap';
      document.head.appendChild(fontLink);
    }

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
