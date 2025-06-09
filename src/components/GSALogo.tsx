import React, { useEffect } from 'react';

const GSALogo: React.FC = () => {
  useEffect(() => {
    // Add the animation styles to the document head
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      /* Logo container */
      .gsa-logo-container {
        width: 62px; /* Increased size by 10% */
        position: relative; /* Needed for scanline pseudo-element */
        /* Apply base breathing animation - Increased duration */
        animation: scaleBreath 5s ease-in-out infinite 2.5s; /* Smoother loop, longer duration */
        transition: transform 0.3s ease-out; /* Smooth hover transition */
      }

      /* --- Hover Effects --- */
      .gsa-logo-container:hover {
          transform: scale(1.05) translateY(-2px); /* Lift and scale container */
      }
      .gsa-logo-container:hover .letter-a,
      .gsa-logo-container:hover .bottom-tip {
          /* Intensify glow on hover (Further Reduced intensity) */
          filter: drop-shadow(0 0 8px #00f7ff) drop-shadow(0 0 4px #ffffff);
      }
      /* --- End Hover Effects --- */

      /* Scanline Overlay */
      .gsa-logo-container::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          /* Repeating gradient for scanlines */
          background: repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent 2px, /* Gap */
              rgba(0, 200, 255, 0.05) 3px, /* Faint cyan line */
              rgba(0, 200, 255, 0.05) 4px  /* Faint cyan line */
          );
          background-size: 100% 4px; /* Adjust line spacing */
          opacity: 0.4; /* Subtle visibility */
          z-index: 10; /* Ensure it's above SVG content */
          pointer-events: none; /* Allow clicks through */
          /* Animate the background position */
          animation: scanlines 12s linear infinite; /* Linear for constant speed */
      }

      .gsa-logo-svg {
        width: 100%;
        height: auto;
        display: block; /* Remove potential extra space */
        overflow: visible; /* Allow filter effects (glow) to extend */
      }

      /* Shield Base and Outline */
      .base {
        fill: #000; /* Black fill */
        stroke: none; /* Remove stroke */
        opacity: 0; /* Start hidden */
        animation: baseFadeIn 1s ease 0.2s forwards; /* Fade in */
      }

      /* Inner Shield Border for 3D effect - Removed border */
      .shield-inner-border {
          fill: none;
          stroke: none; /* Remove stroke */
          opacity: 0;
          animation: baseFadeIn 1s ease 0.4s forwards;
      }

      /* Outer Animated Outline */
      .shield-outline {
        stroke: #00f7ff; /* Cyan */
        fill: none;
        stroke-width: 2; /* Thinner cyan outline */
        stroke-linecap: round; /* Nicer line ends */
        stroke-linejoin: round;
        /* Animation setup */
        stroke-dasharray: 1000; /* Generous length estimate */
        stroke-dashoffset: 1000; /* Start fully hidden */
        /* Multiple animations: draw, then pulse */
        animation-name: drawOutline, borderPulse;
        animation-duration: 2s, 3s;
        animation-timing-function: ease-out, ease-in-out; /* Use ease-out for draw, ease-in-out for pulse */
        animation-delay: 0.5s, 2.5s; /* Start pulse after draw */
        animation-iteration-count: 1, infinite;
        animation-fill-mode: forwards, none;
        animation-direction: normal, alternate;
      }

      /* Group containing text elements */
      .text-group {
          /* Removed innerBreath animation */
          transform-origin: center center;
      }

      /* SVG Text Letters Styling */
      .letter {
        font-family: 'Orbitron', sans-serif; /* Use Orbitron font */
        font-weight: 700; /* Bolder */
        font-size: 55px; /* Increased font size */
        opacity: 0; /* Start hidden */
        text-anchor: middle; /* Center text horizontally */
        /* Add mild border */
        stroke: #222; /* Dark border color */
        stroke-width: 1; /* Thin border */
        paint-order: stroke; /* Draw stroke behind fill for cleaner look */
        /* Base transition for hover filter */
        transition: filter 0.3s ease-out, opacity 1s ease-out, transform 1s ease-out;
        /* Apply fade/slide-in animation */
        animation: textFade 1s ease-out forwards;
      }

      /* Apply individual animation delays and colors/fills */
      .letter-g, .letter-s {
          fill: url(#textGradient); /* Apply gradient */
      }
      .letter-g { animation-delay: 1.5s; }
      .letter-s { animation-delay: 1.7s; }
      .letter-a {
          animation-delay: 1.9s;
          fill: #00f7ff; /* Cyan highlight */
          stroke: #008a99; /* Darker cyan border for A */
          /* Add persistent glow pulse animation */
          animation-name: textFade, glowPulse; /* Combine animations */
          animation-duration: 1s, 2s;
          animation-timing-function: ease-out, ease-in-out; /* ease-out for fade, ease-in-out for pulse */
          animation-delay: 1.9s, 2.9s; /* Delay fade, then delay glow */
          animation-iteration-count: 1, infinite;
          animation-fill-mode: forwards, none;
          animation-direction: normal, alternate;
      }

      /* Bottom Tip Accent */
      .bottom-tip {
          fill: #00f7ff; /* Cyan */
          stroke: none;
          opacity: 0; /* Start hidden */
          /* Combine fade-in and glow pulse */
          animation-name: textFade, glowPulse; /* Reuse textFade for consistency */
          animation-duration: 1s, 2s;
          animation-timing-function: ease-out, ease-in-out; /* ease-out for fade, ease-in-out for pulse */
          animation-delay: 2.1s, 3.1s; /* Delay fade, then delay glow */
          animation-iteration-count: 1, infinite;
          animation-fill-mode: forwards, none;
          animation-direction: normal, alternate;
          /* Base transition for hover */
          transition: filter 0.3s ease-out, opacity 1s ease-out, transform 1s ease-out;
      }


      /* --- Keyframe Animations --- */

      /* Scanline movement */
       @keyframes scanlines {
          from { background-position: 0 0; }
          to { background-position: 0 40px; } /* Adjust distance for speed */
      }

      /* Shield outline draw */
      @keyframes drawOutline {
        to { stroke-dashoffset: 0; }
      }

      /* Border pulse after drawing */
      @keyframes borderPulse {
          0% { opacity: 1; filter: none; }
          50% { opacity: 0.7; filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5)); }
          100% { opacity: 1; filter: none; }
      }

      /* Further Reduced Cyan element glow pulse */
      @keyframes glowPulse {
        0%, 100% {
          /* Minimal base glow */
          filter: drop-shadow(0 0 3px #00f7ff);
          opacity: 0.8; /* Slightly lower base opacity */
        }
        50% {
          /* Minimal peak glow + small core */
          filter: drop-shadow(0 0 6px #00f7ff) drop-shadow(0 0 3px #ffffff);
          opacity: 0.95; /* Slightly lower peak opacity */
        }
      }

      /* Base breathing for container - Longer duration */
      @keyframes scaleBreath {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); } /* Subtle base breath */
      }

      /* Shield base fade-in (also used for inner border) */
      @keyframes baseFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      /* Text fade, slide-in, and scale-up */
      @keyframes textFade {
        from {
          opacity: 0;
          transform: translateY(15px) scale(0.8); /* Slide up and scale up */
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
    document.head.appendChild(styleEl);

    // Orbitron font is now preloaded in index.html for better performance

    // Cleanup function
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div className="gsa-logo-container">
      <svg className="gsa-logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff' }} />
            <stop offset="100%" style={{ stopColor: '#e0e0e0' }} />
          </linearGradient>
        </defs>

        <path id="shieldPath" d="M 30 40 Q 30 15, 55 15 H 145 Q 170 15, 170 40 V 140 C 170 160, 130 175, 100 185 C 70 175, 30 160, 30 140 Z" />

        <use href="#shieldPath" className="base" />
        <use href="#shieldPath" className="shield-inner-border" />
        <use href="#shieldPath" className="shield-outline" />

        <g className="text-group" transform="translate(0, 5)">
          <text x="70" y="118" className="letter letter-g">G</text>
          <text x="100" y="118" className="letter letter-s">S</text>
          <text x="130" y="118" className="letter letter-a">A</text>
        </g>

        <polygon className="bottom-tip" points="90,168 100,181 110,168" />
      </svg>
    </div>
  );
};

export default GSALogo;
