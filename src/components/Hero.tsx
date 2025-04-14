import React, { useEffect, useState, useRef, Suspense, useMemo } from 'react';
import { GraduationCap, Users, Globe2 } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import HeroButton from './HeroButton'; // Assuming this exists
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Points, Box, Sphere } from '@react-three/drei'; // Removed useGLTF for now, added Box/Sphere
import * as THREE from 'three';
// Import physics components
import { Physics, usePlane, useBox, useSphere, Triplet } from '@react-three/cannon';

// --- IMPORTANT: Dependency Check ---
// Ensure you have installed:
// npm install framer-motion @react-three/fiber @react-three/drei three lucide-react @react-three/cannon

// --- Asset Paths Check ---
const LOGO_PATH = '/gsa-logo-trasparent-bg.png'; // Verify path

// --- Constants ---
const themeColors = {
  celeste: '#A0EBEB',
  night: '#151616',
  white: '#FEFEFE',
  accent: '#A0EBEB',
};

// --- UPDATED heroTexts array for better visual balance ---
const heroTexts = [
    {
        title: "Expert Guidance Provided",   // Similar length
        subtitle: "Achieve Your Study Goals",    // Similar length
        emptyLine: "‎"
    },
    {
        title: "Stress-Free Assignment Help", // Similar length
        subtitle: "Confidently Meet Deadlines",  // Similar length
        emptyLine: "‎"
    },
    {
        title: "Original Writing Guaranteed", // Similar length
        subtitle: "100% Plagiarism-Free Work", // Similar length
        emptyLine: "‎"
    },
    {
        title: "Secure & Confidential Service", // Similar length
        subtitle: "Your Privacy Is Protected",   // Similar length
        emptyLine: "‎"
    }
];


// --- Framer Motion Components (AnimatedText, LogoAnimation) ---

const AnimatedText = ({ texts }: { texts: typeof heroTexts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                setIsAnimating(false);
            }, 400);
        }, 6000);
        return () => clearInterval(interval);
    }, [texts.length]);

    const containerVariants = {
        hidden: { opacity: 0, rotateX: -15, scale: 0.95 },
        visible: { opacity: 1, rotateX: 0, scale: 1, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], staggerChildren: 0.08 } },
        exit: { opacity: 0, y: -15, scale: 0.98, transition: { duration: 0.4, ease: "easeIn" } }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, rotateY: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, rotateY: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    // Added check for texts array existence and content
    if (!texts || texts.length === 0) {
        return <div className="h-auto min-h-[180px] md:min-h-[160px]">Loading text...</div>; // Or some placeholder
    }
    const currentText = texts[currentIndex];
     if (!currentText) {
         // Handle case where currentIndex might be out of bounds temporarily
         // Though the modulo operator should prevent this.
         return <div className="h-auto min-h-[180px] md:min-h-[160px]">Error loading text...</div>;
     }


    return (
        <div className="h-auto min-h-[180px] md:min-h-[160px] flex flex-col items-center justify-center overflow-hidden mt-16 md:mt-20">
            <motion.div
                key={currentIndex} // Key change triggers animation
                variants={containerVariants}
                initial="hidden"
                animate={isAnimating ? "exit" : "visible"}
                className="text-center perspective-[1000px] transform-gpu mx-auto max-w-4xl px-4 z-30 relative"
            >
                {/* Empty Line */}
                <div className="h-6 md:h-8">{currentText.emptyLine}</div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8 relative">
                    <div className="p-4 rounded-xl backdrop-blur-sm bg-white/75 shadow-lg border border-celeste/25">
                        {/* Stagger children within the title words container */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-x-3"
                            variants={{ // Add container variants for staggerChildren if needed at this level
                                visible: { transition: { staggerChildren: 0.05 } },
                                hidden: {}
                            }}
                            initial="hidden"
                            animate="visible"
                        >
                            {currentText.title.split(' ').map((word, i) => (
                                <motion.div key={`${currentIndex}-title-${i}`} className="relative inline-block perspective-[1000px] transform-gpu" variants={wordVariants}>
                                    <motion.span
                                        className="inline-block relative text-night drop-shadow-[0_2px_2px_rgba(21,22,22,0.1)] [text-shadow:_1px_1px_0_#fefefe,_3px_3px_0_rgba(21,22,22,0.08)] hover:text-celeste transition-colors duration-300 cursor-pointer"
                                        whileHover={{ scale: 1.05, y: -4, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                                    >
                                        {word}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    {/* Background Glow */}
                    <motion.div
                        className="absolute -inset-4 rounded-2xl opacity-75 -z-10"
                        style={{ background: `radial-gradient(circle at center, ${themeColors.celeste}25 0%, ${themeColors.celeste}10 40%, transparent 80%)`, filter: 'blur(25px)' }}
                        animate={{ opacity: [0.4, 0.75, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </h1>

                {/* Subtitle */}
                {/* Apply wordVariants directly to h2 for a simpler entrance */}
                <motion.h2
                    variants={wordVariants} // Apply entrance animation to the whole subtitle block
                    className="text-2xl md:text-3xl font-semibold mb-8 relative px-6 py-3 rounded-xl backdrop-blur-sm bg-white/75 inline-block shadow-md border border-celeste/25 mt-2"
                >
                    <span className="relative inline-block text-night drop-shadow-[0_1px_1px_rgba(21,22,22,0.05)]">
                        {currentText.subtitle}
                         {/* Animated Underline */}
                        <motion.div
                            className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-celeste"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }} // Delay slightly after text appears
                            exit={{ scaleX: 0, transition: { duration: 0.3 } }}
                        />
                    </span>
                </motion.h2>
            </motion.div>
        </div>
    );
};


const LogoAnimation = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const controls = useAnimation();

    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 0.8;
        const y = ((e.clientY - top) / height - 0.5) * 0.8;
        setMouseX(x);
        setMouseY(y);
    };

    useEffect(() => {
        controls.start({
            rotateY: mouseX * 15, rotateX: -mouseY * 15, scale: 1, opacity: 1,
            transition: { type: "spring", stiffness: 350, damping: 25, opacity: { duration: 0.8, ease: "easeOut" }, scale: { duration: 0.8, ease: "easeOut" } }
        });
    }, [mouseX, mouseY, controls]);

    return (
        <div className="relative inline-block perspective-1000" onMouseMove={handleMouseMove} onMouseLeave={() => { setMouseX(0); setMouseY(0); }}>
            <motion.div className="relative" animate={controls} initial={{ scale: 0.8, opacity: 0 }}>
                <motion.div
                    className="absolute -inset-4 rounded-full -z-10"
                    animate={{ background: [`radial-gradient(circle, ${themeColors.celeste}20 0%, ${themeColors.celeste}00 70%)`, `radial-gradient(circle, ${themeColors.celeste}25 0%, ${themeColors.celeste}00 70%)`, `radial-gradient(circle, ${themeColors.celeste}20 0%, ${themeColors.celeste}00 70%)`], scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div className="relative transform-gpu" whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}>
                    <motion.img
                        src={LOGO_PATH} alt="Grade Spark Academy Logo"
                        className="relative mx-auto w-[180px] md:w-[200px] mb-12 md:mb-16 drop-shadow-xl"
                        style={{ filter: `drop-shadow(0 0 12px ${themeColors.celeste}80)` }}
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};


// --- Physics Scene Components ---

// Invisible plane for objects to collide with
function PhysicsPlane(props: { position: Triplet, rotation: Triplet }) {
    const [ref] = usePlane(() => ({ type: 'Static', ...props }));
    return null; // Plane is invisible
}

// Dynamic building block component (Cube)
function BuildingBlock({ position, size = 0.6, color = themeColors.celeste }: { position: Triplet, size?: number, color?: string }) {
    const [ref, api] = useBox(() => ({
        mass: size * size * size * 0.5, // Mass proportional to volume
        position,
        args: [size, size, size],
        angularDamping: 0.3, // Slow down rotation over time
        linearDamping: 0.1,  // Slow down movement over time
        velocity: [(Math.random() - 0.5) * 2, Math.random() * 3 + 1, (Math.random() - 0.5) * 2],
        angularVelocity: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3],
    }));

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            ref={ref as React.Ref<THREE.Mesh>}
            args={[size, size, size]}
            castShadow
            receiveShadow
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            onClick={() => {
                 api.applyImpulse([(Math.random() - 0.5) * 0.5, 0.5, (Math.random() - 0.5) * 0.5], [0, size/2, 0]);
            }}
        >
            <meshStandardMaterial
                color={isHovered ? themeColors.accent : color}
                roughness={0.4}
                metalness={0.1}
                transparent
                opacity={0.9}
                emissive={isHovered ? themeColors.accent : color}
                emissiveIntensity={isHovered ? 0.6 : 0.15}
            />
        </Box>
    );
}
// Dynamic building block component (Sphere)
function BuildingSphere({ position, radius = 0.4, color = themeColors.celeste }: { position: Triplet, radius?: number, color?: string }) {
    const [ref, api] = useSphere(() => ({
        mass: (4/3) * Math.PI * (radius**3) * 0.5,
        position,
        args: [radius],
        angularDamping: 0.4,
        linearDamping: 0.2,
        velocity: [(Math.random() - 0.5) * 2, Math.random() * 3 + 1, (Math.random() - 0.5) * 2],
        angularVelocity: [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2],
    }));

     const [isHovered, setIsHovered] = useState(false);

    return (
        <Sphere
            ref={ref as React.Ref<THREE.Mesh>}
            args={[radius, 32, 32]}
            castShadow
            receiveShadow
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
             onClick={() => {
                 api.applyImpulse([(Math.random() - 0.5) * 0.5, 0.5, (Math.random() - 0.5) * 0.5], [0, 0, 0]);
            }}
        >
            <meshStandardMaterial
                color={isHovered ? themeColors.accent : color}
                roughness={0.2}
                metalness={0.2}
                transparent
                opacity={0.9}
                emissive={isHovered ? themeColors.accent : color}
                emissiveIntensity={isHovered ? 0.6 : 0.15}
             />
        </Sphere>
    );
}


// Particle system
function AnimatedParticles({ count = 120, radius = 22 }: { count?: number, radius?: number }) {
    const pointsRef = useRef<THREE.Points>(null);
    const [initialData] = useState(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * Math.cbrt(Math.random());
            const i3 = i * 3;
            positions[i3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = r * Math.cos(phi);
            velocities[i3] = (Math.random() - 0.5) * 0.008;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.008;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.008;
        }
        return { positions, velocities };
    });

    useFrame(({ clock }, delta) => {
        if (!pointsRef.current || !initialData.velocities) return;
        const geometry = pointsRef.current.geometry;
        const positionAttribute = geometry.getAttribute('position') as THREE.BufferAttribute;
        if (!positionAttribute) return;
        const velocities = initialData.velocities;
        const positionArray = positionAttribute.array as Float32Array;
        const time = clock.elapsedTime;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positionArray[i3] += velocities[i3] * delta * 60;
            positionArray[i3 + 1] += velocities[i3 + 1] * delta * 60;
            positionArray[i3 + 2] += velocities[i3 + 2] * delta * 60;
            positionArray[i3 + 1] += Math.sin(time * 0.4 + i * 0.1) * 0.008 * delta * 60;
            const distSq = positionArray[i3] ** 2 + positionArray[i3 + 1] ** 2 + positionArray[i3 + 2] ** 2;
            if (distSq > (radius * 1.1) ** 2) {
                const factor = (radius / Math.sqrt(distSq)) * (0.9 + Math.random() * 0.1);
                positionArray[i3] *= factor;
                positionArray[i3 + 1] *= factor;
                positionArray[i3 + 2] *= factor;
                velocities[i3] = (Math.random() - 0.5) * 0.008;
                velocities[i3 + 1] = (Math.random() - 0.5) * 0.008;
                velocities[i3 + 2] = (Math.random() - 0.5) * 0.008;
            }
        }
        positionAttribute.needsUpdate = true;
    });

    return (
        <Points ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute attach="attributes-position" count={count} array={initialData.positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial attach="material" size={0.15} color={themeColors.celeste} transparent opacity={0.7} sizeAttenuation blending={THREE.AdditiveBlending} />
        </Points>
    );
}

// The main 3D scene containing physics and objects
function Scene() {
    const numBlocks = 25; // Number of dynamic blocks

    const blockData = useMemo(() => {
        const data = [];
        for (let i = 0; i < numBlocks; i++) {
            data.push({
                position: [(Math.random() - 0.5) * 4, i * 0.2 + 1, (Math.random() - 0.5) * 4] as Triplet,
                shape: Math.random() > 0.5 ? 'box' : 'sphere',
                size: Math.random() * 0.4 + 0.3,
                color: Math.random() > 0.8 ? themeColors.accent : themeColors.celeste
            });
        }
        return data;
    }, [numBlocks]);


    return (
        <>
            {/* Camera and Lighting */}
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} autoRotate autoRotateSpeed={0.2} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI * 3 / 4} maxDistance={40} minDistance={5} />
            <ambientLight intensity={0.6} color={themeColors.white} />
            <directionalLight
                position={[-10, 15, 10]}
                intensity={1.2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
                shadow-bias={-0.0005}
            />
            <pointLight position={[10, -5, -10]} intensity={0.4} color={themeColors.celeste} />
            <pointLight position={[-10, -5, 10]} intensity={0.4} color={themeColors.accent} />
            <fog attach="fog" args={[themeColors.white, 20, 60]} />

            {/* Physics World */}
            <Physics gravity={[0, -9.81, 0]} defaultContactMaterial={{ friction: 0.2, restitution: 0.4 }}>
                <PhysicsPlane position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                {/* Render dynamic blocks */}
                {blockData.map((data, index) =>
                    data.shape === 'box' ? (
                        <BuildingBlock key={`block-${index}`} position={data.position} size={data.size} color={data.color} />
                    ) : (
                        <BuildingSphere key={`sphere-${index}`} position={data.position} radius={data.size * 0.7} color={data.color} />
                    )
                )}
            </Physics>

            {/* Background Grid */}
            <Grid
                renderOrder={-1}
                position={[0, -1.49, 0]}
                infiniteGrid
                cellSize={1.5} cellThickness={0.4} sectionSize={4.5} sectionThickness={1}
                sectionColor={themeColors.celeste}
                cellColor={themeColors.night}
                fadeDistance={60} fadeStrength={1.2}
                receiveShadow
            />

            {/* Background Particles */}
            <AnimatedParticles count={120} radius={22} />
        </>
    );
}

// Main Hero Component
export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night/5 via-white to-celeste/15">
                <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-white">Loading Physics Scene...</div>}>
                    <Canvas
                        shadows
                        camera={{ position: [0, 5, 20], fov: 60 }}
                        dpr={[1, 2]}
                    >
                        <Scene />
                    </Canvas>
                </Suspense>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 pt-6 pb-16 md:pt-8 md:pb-20 flex flex-col items-center">
                 <div className="relative mb-[-2rem] md:mb-[-3rem] z-20">
                    <LogoAnimation />
                 </div>
                 <div className="container mx-auto px-4 text-center relative z-10">
                     <AnimatedText texts={heroTexts} />
                     <HeroButton />
                 </div>
                {/* Features Grid */}
                <div className="container mx-auto px-4 mt-16 md:mt-20 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: GraduationCap, title: "Expert Writers", desc: "MA/PhD qualified professionals", delay: 0.5 },
                            { icon: Users, title: "On-Time Delivery", desc: "Meet your deadlines every time", delay: 0.7 },
                            { icon: Globe2, title: "100% Original", desc: "Plagiarism-free guarantee", delay: 0.9 }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center bg-white/85 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-celeste/20"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: feature.delay, type: "spring", stiffness: 90, damping: 12 } }}
                                whileHover={{ scale: 1.04, y: -5, boxShadow: '0 10px 25px -5px rgba(160, 235, 235, 0.3), 0 8px 10px -6px rgba(160, 235, 235, 0.2)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex justify-center mb-4">
                                     {/* Ensure themeColors.celeste is accessible or replace with hex */}
                                     <feature.icon className={`h-12 w-12 text-[#A0EBEB]`} />
                                </div>
                                <h3 className="text-lg font-semibold text-night">{feature.title}</h3>
                                <p className="mt-2 text-base text-gray-700">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
