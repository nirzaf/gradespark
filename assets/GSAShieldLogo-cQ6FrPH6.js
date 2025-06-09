import{j as e}from"./vendor-three-BYOb-Ddr.js";import{r as s}from"./vendor-router-D-_vtQhX.js";import"./vendor-react-DJG_os-6.js";const d=({className:a="",size:r=360,interactive:t=!0})=>(s.useEffect(()=>{const o=document.createElement("style");return o.innerHTML=`
      /* --- GSA Shield Logo Animation Styles --- */
      :root {
        --cyan-color: #A0EBEB;
        --white-color: #FEFEFE;
        --black-color: #151616;
        --dark-bg-start: #0a0a1f;
        --dark-bg-end: #000005;
        --shield-fill-start: rgba(15, 15, 40, 0.85);
        --shield-fill-end: rgba(5, 5, 20, 0.9);
        --glow-color: rgba(160, 235, 235, 0.7);
        --text-glow-color: rgba(160, 235, 235, 0.6);
        --flicker-glow-color: rgba(160, 235, 235, 0.9);
        --highlight-color: rgba(200, 220, 255, 0.2);
        --shadow-color: rgba(0, 0, 0, 0.4);
      }

      /* --- Logo Container --- */
      .gsa-logo-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
      }

      /* --- SVG Shield & Text --- */
      .gsa-logo-svg {
        width: 100%;
        height: 100%;
        overflow: visible; /* Allow glow/shadows to extend */
      }

      /* --- Base Shield Layer --- */
      .shield-base {
        fill: url(#shieldGradient);
        opacity: 0;
        filter: drop-shadow(1px 2px 2px var(--shadow-color));
        animation: fadeIn 1s ease-out 0.5s forwards;
      }

      /* --- Inner Border --- */
      .shield-inner-border {
        fill: none;
        stroke: var(--cyan-color);
        stroke-width: 1;
        opacity: 0;
        filter:
          drop-shadow(-0.5px -0.5px 0.5px var(--highlight-color))
          drop-shadow(0.5px 0.5px 0.5px var(--shadow-color))
          drop-shadow(0 0 2px var(--glow-color));
        animation: fadeIn 1s ease-out 1s forwards;
      }

      /* --- Main Outline (Drawing Effect) --- */
      .shield-outline {
        fill: none;
        stroke: var(--cyan-color);
        stroke-width: 3;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        filter:
          drop-shadow(-1px -1px 1px var(--highlight-color))
          drop-shadow(1px 1px 1px var(--shadow-color))
          drop-shadow(0 0 5px var(--glow-color));
        animation: drawOutline 2s ease-in-out 1.5s forwards;
      }

      @keyframes drawOutline {
        to {
          stroke-dashoffset: 0;
        }
      }

      /* --- Internal Lines --- */
      .internal-lines {
        stroke: var(--cyan-color);
        stroke-width: 1.5;
        opacity: 0;
        filter: drop-shadow(0 0 3px var(--glow-color));
        animation: fadeInEnergize 1.5s ease-out 3.5s forwards;
      }

      /* --- Central Core --- */
      .central-core {
        fill: var(--cyan-color);
        opacity: 0;
        filter: drop-shadow(0 0 8px var(--glow-color));
        animation: fadeInEnergize 1.5s ease-out 4s forwards;
      }

      /* --- GSA Text --- */
      .gsa-text {
        font-family: 'Orbitron', sans-serif;
        font-size: 45px;
        font-weight: bold;
        fill: var(--white-color);
        stroke: var(--black-color);
        stroke-width: 0.5;
        text-anchor: middle;
        dominant-baseline: central;
        opacity: 0;
        filter: drop-shadow(0 0 5px var(--text-glow-color));
      }

      /* --- Shuffle animation & Persistent effects --- */
      .gsa-text.g {
        transform: translate(-80px, -50px) rotate(-30deg);
        animation: shuffleIn 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 4.5s forwards;
      }
      .gsa-text.s {
        transform: translate(0px, 80px) rotate(10deg);
        animation: shuffleIn 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 4.7s forwards;
      }
      .gsa-text.a {
        transform: translate(80px, -50px) rotate(30deg);
        animation: shuffleIn 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 4.6s forwards,
                   persistentGlowText 3s infinite 6s alternate;
      }

      @keyframes shuffleIn {
        0% { opacity: 0; }
        60% { opacity: 1; }
        100% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
      }

      /* Shield tip animation */
      .shield-tip {
        fill: var(--cyan-color);
        animation: persistentGlowElement 2.8s infinite 6s alternate,
                  subtleFlicker 0.22s infinite 6s alternate;
        filter: drop-shadow(0 0 6px var(--glow-color));
      }

      /* --- Other Animations --- */
      @keyframes fadeIn { to { opacity: 1; } }
      @keyframes fadeInEnergize {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes persistentGlowElement {
        from { filter: drop-shadow(0 0 5px var(--glow-color)); }
        to { filter: drop-shadow(0 0 10px var(--flicker-glow-color)); }
      }
      @keyframes persistentGlowText {
        from { filter: drop-shadow(0 0 5px var(--text-glow-color)); }
        to { filter: drop-shadow(0 0 10px var(--glow-color)); }
      }
      @keyframes subtleFlicker {
        0%, 100% { opacity: 1; } 50% { opacity: 0.85; }
      }

      /* --- Hover Effect --- */
      .gsa-logo-container.interactive:hover .shield-outline,
      .gsa-logo-container.interactive:hover .shield-inner-border {
        filter:
          drop-shadow(-1.5px -1.5px 1.5px var(--highlight-color))
          drop-shadow(1.5px 1.5px 1.5px var(--shadow-color))
          drop-shadow(0 0 10px var(--flicker-glow-color));
        transition: filter 0.3s ease-in-out;
      }
      .gsa-logo-container.interactive:hover .shield-base {
        filter: drop-shadow(2px 3px 3px var(--shadow-color));
        transition: filter 0.3s ease-in-out;
      }
      .gsa-logo-container.interactive:hover .internal-lines,
      .gsa-logo-container.interactive:hover .central-core {
        filter: drop-shadow(0 0 15px var(--flicker-glow-color)) drop-shadow(0 0 8px var(--cyan-color));
        transition: filter 0.3s ease-in-out;
      }
      .gsa-logo-container.interactive:hover .shield-tip {
        filter: drop-shadow(0 0 15px var(--flicker-glow-color)) drop-shadow(0 0 8px var(--cyan-color));
        transition: filter 0.3s ease-in-out;
      }
      .gsa-logo-container.interactive:hover .gsa-text {
        filter: drop-shadow(0 0 12px var(--glow-color)) drop-shadow(0 0 6px var(--white-color));
        transition: filter 0.3s ease-in-out;
      }
    `,document.head.appendChild(o),()=>{document.head.removeChild(o)}},[]),e.jsx("div",{className:`gsa-logo-container ${t?"interactive":""} ${a}`,style:{width:`${r}px`,height:`${Math.round(r*1.12)}px`},children:e.jsxs("svg",{className:"gsa-logo-svg",viewBox:"0 0 100 110",preserveAspectRatio:"xMidYMid meet",children:[e.jsx("defs",{children:e.jsxs("radialGradient",{id:"shieldGradient",cx:"50%",cy:"40%",r:"70%",fx:"50%",fy:"30%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"var(--shield-fill-start)",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"var(--shield-fill-end)",stopOpacity:1}})]})}),e.jsx("path",{className:"shield-base",d:"M50 0 L95 20 L95 60 C95 80, 75 100, 50 110 C25 100, 5 80, 5 60 L5 20 Z"}),e.jsx("path",{className:"shield-inner-border",d:"M50 5 L90 23 L90 58 C90 75, 73 95, 50 105 C27 95, 10 75, 10 58 L10 23 Z"}),e.jsx("path",{className:"shield-outline",d:"M50 0 L95 20 L95 60 C95 80, 75 100, 50 110 C25 100, 5 80, 5 60 L5 20 Z"}),e.jsx("path",{className:"shield-tip",d:"M45 100 C 48 105, 52 105, 55 100 L 50 110 Z"}),e.jsxs("g",{className:"internal-lines",children:[e.jsx("path",{d:"M50 15 L75 30"}),e.jsx("path",{d:"M50 15 L25 30"}),e.jsx("path",{d:"M20 45 L 40 55"}),e.jsx("path",{d:"M80 45 L 60 55"}),e.jsx("path",{d:"M50 105 L 50 75"})]}),e.jsx("circle",{className:"central-core",cx:"50",cy:"65",r:"8"}),e.jsx("text",{x:"25",y:"55",className:"gsa-text g",children:"G"}),e.jsx("text",{x:"50",y:"55",className:"gsa-text s",children:"S"}),e.jsx("text",{x:"75",y:"55",className:"gsa-text a",children:"A"})]})}));export{d as default};
