import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface AnimatedBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
}

const AnimatedBackground = ({
  particleCount = 500,
  particleColor = '#00e1ff',
  particleSize = 0.005
}: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);
    renderer.domElement.classList.add('three-bg-canvas');
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: particleSize,
      color: particleColor,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesMeshRef.current = particlesMesh;

    // Animation function
    const animate = () => {
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.x += 0.0003;
        particlesMeshRef.current.rotation.y += 0.0005;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      frameIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Create particles
    createParticles();

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

      if (rendererRef.current && rendererRef.current.domElement && canvasRef.current) {
        canvasRef.current.removeChild(rendererRef.current.domElement);
      }

      if (particlesMeshRef.current && sceneRef.current) {
        sceneRef.current.remove(particlesMeshRef.current);
        particlesMeshRef.current.geometry.dispose();
        (particlesMeshRef.current.material as THREE.Material).dispose();
      }
    };
  }, [particleCount, particleColor, particleSize]);

  // Create floating particles
  const createParticles = () => {
    const container = document.createElement('div');
    container.classList.add('particles-container');
    
    if (canvasRef.current) {
      canvasRef.current.appendChild(container);
    }
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Animation with GSAP
      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.2,
        duration: 0.5,
        delay: Math.random() * 2
      });
      
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        repeat: -1,
        repeatDelay: Math.random() * 2,
        ease: "power1.inOut"
      });
      
      container.appendChild(particle);
    }
  };

  return (
    <>
      <div className="gradient-bg"></div>
      <div ref={canvasRef} className="three-bg-canvas-container"></div>
    </>
  );
};

export default AnimatedBackground;
