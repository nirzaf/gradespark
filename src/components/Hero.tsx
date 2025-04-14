import { GraduationCap, Users, Globe2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import HeroButton from './HeroButton';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Points } from '@react-three/drei';
import * as THREE from 'three';

// Animation text content
const heroTexts = [
  {
    title: "Expert Academic Assistance",
    subtitle: "For University Students",
    emptyLine: "‎"
  },
  {
    title: "Reduce Academic Stress",
    subtitle: "Meet Deadlines with Confidence",
    emptyLine: "‎"
  },
  {
    title: "100% Original Content",
    subtitle: "Guaranteed Plagiarism-Free Work",
    emptyLine: "‎"
  },
  {
    title: "Secure & Confidential",
    subtitle: "Your Privacy is Our Priority",
    emptyLine: "‎"
  }
];

const AnimatedText = ({ texts }: { texts: typeof heroTexts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      rotateX: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      rotateX: 20,
      scale: 0.95,
      transition: { duration: 0.4 }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateY: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  return (
    <div className="h-auto min-h-[200px] md:min-h-[180px] flex flex-col items-center justify-center overflow-hidden mt-20 md:mt-24">
      <motion.div
        key={currentIndex}
        variants={containerVariants}
        initial="hidden"
        animate={isAnimating ? "exit" : "visible"}
        className="text-center perspective-[1000px] transform-gpu mx-auto max-w-4xl px-4 z-30 relative"
      >
        {/* Empty Line */}
        <motion.div
          className="h-6 md:h-8"
          variants={wordVariants}
        >
          {texts[currentIndex].emptyLine}
        </motion.div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 relative">
          <div className="overflow-hidden p-4 rounded-xl backdrop-blur-sm bg-white/70 shadow-lg border border-celeste/20">
            <motion.div className="flex flex-wrap justify-center gap-x-3">
              {texts[currentIndex].title.split(' ').map((word, i) => (
                <motion.div
                  key={i}
                  className="relative inline-block perspective-[1000px] transform-gpu"
                  variants={wordVariants}
                >
                  <motion.span
                    className="inline-block relative text-night drop-shadow-[0_2px_2px_rgba(21,22,22,0.1)]
                             [text-shadow:_2px_2px_0_#fefefe,_4px_4px_0_rgba(21,22,22,0.1)]
                             hover:text-celeste transition-colors duration-300"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300
                      }
                    }}
                  >
                    {word}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Background glow effect */}
          <motion.div
            className="absolute -inset-4 rounded-2xl opacity-75 -z-10"
            style={{
              background: 'radial-gradient(circle at center, rgba(160,235,235,0.2) 0%, rgba(160,235,235,0.1) 50%, transparent 100%)',
              filter: 'blur(20px)'
            }}
            animate={{
              opacity: [0.5, 0.75, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </h1>

        {/* Subtitle */}
        <motion.h2
          variants={wordVariants}
          className="text-2xl md:text-3xl font-bold mb-8 relative px-6 py-3 rounded-xl backdrop-blur-sm bg-white/70 inline-block shadow-md border border-celeste/20 mt-2"
        >
          <span className="relative inline-block
                         text-night
                         drop-shadow-[0_2px_2px_rgba(21,22,22,0.05)]">
            {texts[currentIndex].subtitle}

            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-celeste"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut"
                }
              }}
            />

            {/* Subtle glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-25"
              style={{
                background: 'radial-gradient(circle at center, rgba(160,235,235,0.3) 0%, transparent 70%)',
                filter: 'blur(8px)'
              }}
              animate={{
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </span>
        </motion.h2>
      </motion.div>
    </div>
  );
};

const Particle = ({ index }: { index: number }) => {
  const radius = Math.random() * 100 + 50;
  const angle = (index * 2 * Math.PI) / 12;
  const size = Math.random() * 8 + 4; // Random size between 4-12px

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(247, 127, 0, 0.05) 60%, rgba(255, 255, 255, 0.1) 100%)',
        boxShadow: `
          inset -2px -2px 4px rgba(0, 0, 0, 0.1),
          inset 2px 2px 4px rgba(255, 255, 255, 0.5),
          0 0 8px rgba(255, 255, 255, 0.3)
        `,
        backdropFilter: 'blur(2px)',
      }}
      initial={{
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: [
          Math.cos(angle) * radius,
          Math.cos(angle + Math.PI) * (radius + 20),
          Math.cos(angle) * radius,
        ],
        y: [
          Math.sin(angle) * radius,
          Math.sin(angle + Math.PI) * (radius + 20),
          Math.sin(angle) * radius,
        ],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        rotate: [0, 360],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
    >
      {/* Bubble shine effect */}
      <div
        className="absolute w-[30%] h-[30%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          top: '20%',
          left: '20%',
          transform: 'rotate(-45deg)',
        }}
      />
    </motion.div>
  );
};

const FloatingBubble = ({ index }: { index: number }) => {
  const size = Math.random() * 6 + 3; // Random size between 3-9px
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(247, 127, 0, 0.05) 60%, rgba(255, 255, 255, 0.1) 100%)',
        boxShadow: `
          inset -1px -1px 2px rgba(0, 0, 0, 0.1),
          inset 1px 1px 2px rgba(255, 255, 255, 0.5),
          0 0 4px rgba(255, 255, 255, 0.3)
        `,
      }}
      initial={{
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        scale: [0, 1, 0],
        opacity: [0, 0.7, 0],
        rotate: 360,
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "easeInOut",
      }}
    >
      <div
        className="absolute w-[30%] h-[30%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          top: '20%',
          left: '20%',
          transform: 'rotate(-45deg)',
        }}
      />
    </motion.div>
  );
};

const LogoAnimation = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMouseX(x);
    setMouseY(y);
  };

  useEffect(() => {
    controls.start({
      rotateY: mouseX * 20,
      rotateX: -mouseY * 20,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        opacity: { duration: 1, ease: "easeOut" },
        scale: { duration: 1, ease: "easeOut" }
      }
    });
  }, [mouseX, mouseY, controls]);

  return (
    <div
      className="relative inline-block perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMouseX(0);
        setMouseY(0);
      }}
    >
      <motion.div
        className="relative"
        animate={controls}
        initial={{ scale: 0.8, opacity: 0 }}
      >
        {/* Particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 15 }).map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>

        {/* Glowing effect */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Logo */}
        <motion.div
          className="relative transform-gpu"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <motion.img
            src="/gsa-logo-trasparent-bg.png"
            alt="Grade Spark Academy Logo"
            className="relative mx-auto w-[200px] mb-16 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 10px rgba(160,235,235,0.4))",
            }}
          />
        </motion.div>

        {/* Floating bubbles */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <FloatingBubble key={i} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};


// Academic symbols for the background animation
// Academic symbols representing educational elements with theme colors
const academicSymbols = [
  { type: 'book', scale: [0.8, 1.2, 0.2], color: '#A0EBEB' }, // Celeste
  { type: 'paper', scale: [0.7, 1, 0.05], color: '#A0EBEB' }, // Celeste
  { type: 'pencil', scale: [0.1, 1.2, 0.1], color: '#A0EBEB' }, // Celeste
  { type: 'laptop', scale: [1, 0.7, 0.05], color: '#A0EBEB' }, // Celeste
  { type: 'graduation-cap', scale: [1, 0.2, 1], color: '#A0EBEB' }, // Celeste
  { type: 'certificate', scale: [0.8, 0.8, 0.05], color: '#A0EBEB' } // Celeste
];

function AcademicObject({ initialPosition, type }: { initialPosition: [number, number, number], type: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...initialPosition));
  const currentPosition = useRef(new THREE.Vector3(...initialPosition));
  const rotationSpeed = useRef(Math.random() * 0.01 + 0.005);
  const floatSpeed = useRef(Math.random() * 0.002 + 0.001);
  const floatHeight = useRef(Math.random() * 0.5 + 0.5);
  const timeOffset = useRef(Math.random() * Math.PI * 2);
  const initialY = initialPosition[1];
  
  // Get object properties based on type
  const getObjectProperties = () => {
    const symbolData = academicSymbols.find(s => s.type === type) || academicSymbols[0];
    return {
      scale: symbolData.scale,
      color: symbolData.color
    };
  };

  // Smooth random movement path
  useEffect(() => {
    const interval = setInterval(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 5 + 3;
      const newPosition = new THREE.Vector3(
        Math.sin(angle) * distance,
        initialY + (Math.random() * 1 - 0.5),
        Math.cos(angle) * distance
      );
      newPosition.x = Math.max(-20, Math.min(20, newPosition.x));
      newPosition.z = Math.max(-20, Math.min(20, newPosition.z));
      setTargetPosition(newPosition);
    }, 5000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, [initialY]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Smooth position transition
      currentPosition.current.lerp(targetPosition, 0.005);
      meshRef.current.position.copy(currentPosition.current);
      
      // Gentle floating effect
      meshRef.current.position.y = initialY + Math.sin(clock.elapsedTime * floatSpeed.current + timeOffset.current) * floatHeight.current;
      
      // Slow rotation
      meshRef.current.rotation.x += rotationSpeed.current * 0.3;
      meshRef.current.rotation.y += rotationSpeed.current;
      meshRef.current.rotation.z += rotationSpeed.current * 0.5;
    }
  });

  const { scale, color } = getObjectProperties();
  
  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[scale[0], scale[1], scale[2]]} />
      <meshStandardMaterial 
        color={color} 
        opacity={0.7} 
        transparent 
        metalness={0.2}
        roughness={0.3}
      />
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(scale[0], scale[1], scale[2])]} />
        <lineBasicMaterial attach="material" color="#151616" linewidth={1.5} /> {/* Night */}
      </lineSegments>
    </mesh>
  );
}

// Animated particles representing knowledge particles
function AnimatedParticles({ count = 200, radius = 30 }: { count?: number, radius?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positionsRef = useRef<Float32Array>();
  const velocitiesRef = useRef<Float32Array>();
  
  // Initialize positions and velocities
  useEffect(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Distribute points in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random()); // Cube root for more even distribution
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Random gentle velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    positionsRef.current = positions;
    velocitiesRef.current = velocities;
  }, [count, radius]);
  
  // Animate particles
  useFrame(({ clock }) => {
    if (!pointsRef.current || !positionsRef.current || !velocitiesRef.current) return;
    
    const velocities = velocitiesRef.current;
    const geometry = pointsRef.current.geometry;
    const positionAttribute = geometry.getAttribute('position');
    const positionArray = positionAttribute.array as Float32Array;
    
    // Update positions with velocities and add gentle wave effect
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Apply velocity
      positionArray[i3] += velocities[i3];
      positionArray[i3 + 1] += velocities[i3 + 1];
      positionArray[i3 + 2] += velocities[i3 + 2];
      
      // Add gentle wave effect based on time
      positionArray[i3 + 1] += Math.sin(clock.elapsedTime * 0.5 + i * 0.1) * 0.01;
      
      // Boundary check - if particle goes too far, bring it back
      const distance = Math.sqrt(
        positionArray[i3] ** 2 + 
        positionArray[i3 + 1] ** 2 + 
        positionArray[i3 + 2] ** 2
      );
      
      if (distance > radius * 1.2) {
        // Reset to a random position within the sphere
        const factor = radius / distance * Math.random();
        positionArray[i3] *= factor;
        positionArray[i3 + 1] *= factor;
        positionArray[i3 + 2] *= factor;
        
        // Reverse velocity
        velocities[i3] *= -0.8;
        velocities[i3 + 1] *= -0.8;
        velocities[i3 + 2] *= -0.8;
      }
    }
    
    positionAttribute.needsUpdate = true;
  });
  
  return (
    <Points ref={pointsRef}>
      <pointsMaterial 
        size={0.2} 
        color="#A0EBEB" /* Celeste */
        transparent 
        opacity={0.6} 
        sizeAttenuation 
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positionsRef.current || new Float32Array(count * 3)}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  );
}

function Scene() {
  // Generate more varied positions for academic objects
  const generatePositions = () => {
    const positions: Array<{ position: [number, number, number], type: string }> = [];
    const symbolTypes = academicSymbols.map(s => s.type);
    
    // Create a grid of positions with varied heights
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const distance = Math.random() * 15 + 5;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      const y = Math.random() * 3 + 0.5;
      
      positions.push({
        position: [x, y, z],
        type: symbolTypes[i % symbolTypes.length]
      });
    }
    
    return positions;
  };

  const academicObjects = generatePositions();

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      
      {/* Subtle fog effect */}
      <fog attach="fog" args={['#FEFEFE', 20, 60]} /> {/* White */}
      
      {/* Grid representing academic foundation */}
      <Grid
        renderOrder={-1}
        position={[0, -2, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.3}
        sectionSize={3}
        sectionThickness={0.8}
        sectionColor="#A0EBEB" /* Celeste */
        fadeDistance={40}
      />
      
      {/* Academic objects floating in space */}
      {academicObjects.map((obj, index) => (
        <AcademicObject 
          key={index} 
          initialPosition={obj.position} 
          type={obj.type}
        />
      ))}
      
      {/* Particle system for background sparkles */}
      <AnimatedParticles count={200} radius={30} />
    </>
  );
}


export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Animated Academic Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night/5 via-white to-celeste/30">
        {/* Using theme colors: night (#151616), white (#FEFEFE), celeste (#A0EBEB) */}
        <Canvas shadows camera={{ position: [0, 5, 30], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-8 pb-20">
        <div className="container mx-auto px-4 text-center mb-12 pt-4">
          {/* Logo Section with negative margin */}
          <div className="relative mb-4 md:mb-0">
            <LogoAnimation />
          </div>

          {/* Hero Text Section with higher z-index */}
          <div className="relative z-20 mt-4 md:mt-0">
            <AnimatedText texts={heroTexts} />
            <HeroButton />
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center">
                <GraduationCap className="h-12 w-12 text-celeste" /> {/* Celeste color */}
              </div>
              <h3 className="mt-4 text-lg font-medium text-night">Expert Writers</h3> {/* Night color */}
              <p className="mt-2 text-base text-gray-700">MA/PhD qualified professionals</p>
            </motion.div>

            <motion.div
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-celeste" /> {/* Celeste color */}
              </div>
              <h3 className="mt-4 text-lg font-medium text-night">On-Time Delivery</h3> {/* Night color */}
              <p className="mt-2 text-base text-gray-700">Meet your deadlines every time</p>
            </motion.div>

            <motion.div
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center">
                <Globe2 className="h-12 w-12 text-celeste" /> {/* Celeste color */}
              </div>
              <h3 className="mt-4 text-lg font-medium text-night">100% Original</h3> {/* Night color */}
              <p className="mt-2 text-base text-gray-700">Plagiarism-free guarantee</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
        {[...Array(20)].map((_, i) => (
          <FloatingBubble key={i} index={i} />
        ))}
      </div>
    </section>
  );
}
