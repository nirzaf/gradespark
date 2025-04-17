import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TestimonialsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const bokehContainerRef = useRef<HTMLDivElement>(null);
  const digitalLinesContainerRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);

  // Create particles
  useEffect(() => {
    if (!particlesContainerRef.current) return;

    const container = particlesContainerRef.current;
    const particleCount = 50;

    // Clear existing particles
    container.innerHTML = '';

    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('testimonials-particle');

      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;

      // Random opacity
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();

      // Animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;

      particle.style.animation = `particle-float ${duration}s ease-in-out ${delay}s infinite`;

      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Create bokeh effects
  useEffect(() => {
    if (!bokehContainerRef.current) return;

    const container = bokehContainerRef.current;
    const bokehCount = 15;

    // Clear existing bokeh
    container.innerHTML = '';

    // Create new bokeh
    for (let i = 0; i < bokehCount; i++) {
      const bokeh = document.createElement('div');
      bokeh.classList.add('testimonials-bokeh');

      // Random size
      const size = Math.random() * 80 + 20;
      bokeh.style.width = `${size}px`;
      bokeh.style.height = `${size}px`;

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      bokeh.style.left = `${x}%`;
      bokeh.style.top = `${y}%`;

      // Animation
      const delay = Math.random() * 8;
      bokeh.style.animationDelay = `${delay}s`;

      container.appendChild(bokeh);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Create digital lines
  useEffect(() => {
    if (!digitalLinesContainerRef.current) return;

    const container = digitalLinesContainerRef.current;
    const lineCount = 10;

    // Clear existing lines
    container.innerHTML = '';

    // Create new lines
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('div');
      line.classList.add('testimonials-digital-line');

      // Random width and position
      const width = Math.random() * 30 + 10;
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      line.style.width = `${width}%`;
      line.style.left = `${x}%`;
      line.style.top = `${y}%`;

      // Random rotation
      const rotation = Math.random() * 180 - 90;
      line.style.transform = `rotate(${rotation}deg) scaleX(0)`;

      // Animation
      const duration = Math.random() * 8 + 4;
      const delay = Math.random() * 10;

      line.style.animation = `digital-line-animation ${duration}s ease-in-out ${delay}s infinite`;

      container.appendChild(line);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    threeContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: 0xA0EBEB,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    // Animation function
    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0001;
        particlesRef.current.rotation.y += 0.0002;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      frameIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      if (rendererRef.current && rendererRef.current.domElement && threeContainerRef.current) {
        threeContainerRef.current.removeChild(rendererRef.current.domElement);
      }

      if (particlesRef.current && sceneRef.current) {
        sceneRef.current.remove(particlesRef.current);
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="testimonials-animated-bg">
      <div className="testimonials-bg-gradient"></div>
      <div className="testimonials-wave testimonials-wave-1"></div>
      <div className="testimonials-wave testimonials-wave-2"></div>
      <div className="testimonials-orb testimonials-orb-1"></div>
      <div className="testimonials-orb testimonials-orb-2"></div>
      <div className="testimonials-orb testimonials-orb-3"></div>
      <div className="testimonials-orb testimonials-orb-4"></div>
      <div ref={particlesContainerRef} className="testimonials-particles-container"></div>
      <div ref={bokehContainerRef} className="testimonials-particles-container"></div>
      <div ref={digitalLinesContainerRef} className="testimonials-particles-container"></div>
      <div ref={threeContainerRef} className="testimonials-particles-container"></div>
      {/* Dark overlay layer */}
      <div className="testimonials-dark-overlay"></div>
    </div>
  );
};

export default TestimonialsBackground;
