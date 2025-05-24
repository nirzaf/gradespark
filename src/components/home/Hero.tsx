import React, { useEffect, useState, useRef, Suspense, useMemo, lazy } from 'react';
import { GraduationCap, Users, Globe2, Sparkles, Shield, Clock } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import HeroButton from './HeroButton'; // Assuming this exists
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Points, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { Physics, usePlane, useBox, useSphere, Triplet } from '@react-three/cannon';

// Lazy load the GSA Shield Logo for better performance
const GSAShieldLogo = lazy(() => import('../common/GSAShieldLogo'));

// Updated themeColors with palettes for subject categories
const themeColors = {
    celeste: '#A0EBEB',     // Light turquoise from primary palette
    night: '#151616',       // Night - deep dark color
    white: '#FEFEFE',       // Slightly off-white

    // Tech/Programming Palette
    techBlue: '#1D4ED8',    // Tailwind blue-700
    techPurple: '#6D28D9',  // Tailwind violet-700

    // Science/Other Palette
    scienceGreen: '#059669',  // Tailwind emerald-600
    scienceOrange: '#06B6D4',   // Tailwind cyan-500 – vibrant and complementary

    // Accent for Hover/Click
    accent: '#FACC15',      // Yellow (Tailwind yellow-400)
};


// Color palettes mapped to categories
const categoryPalettes = {
    tech: [themeColors.night, themeColors.techBlue, themeColors.techPurple],
    science: [themeColors.celeste, themeColors.scienceGreen, themeColors.scienceOrange],
};

// --- Hero Text Content ---
const heroTexts = [
    { title: "Skilled Support", subtitle: "Unlock Academic Excellence", emptyLine: "‎" },
    { title: "Budget-Friendly", subtitle: "Hassle-Free Assignment Aid", emptyLine: "‎" },
    { title: "Genuine Content", subtitle: "Guaranteed Plagiarism-Free", emptyLine: "‎" },
    { title: "Secure Services", subtitle: "Confidential & Secure Help", emptyLine: "‎" },
    { title: "OnTime Delivery", subtitle: "On-Time Deadline Assurance", emptyLine: "‎" },
    { title: "Top Value Offer", subtitle: "Top Quality, Low-Cost Deal", emptyLine: "‎" }
];

// --- Framer Motion Components (AnimatedText, LogoAnimation) ---
// No major changes here, but ensure class strings using colors are correct

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

    if (!texts || texts.length === 0) {
        return <div className="h-auto min-h-[180px] md:min-h-[160px]">Loading text...</div>;
    }
    const currentText = texts[currentIndex];
    if (!currentText) {
        return <div className="h-auto min-h-[180px] md:min-h-[160px]">Error loading text...</div>;
    }

    // Ensure Tailwind can handle dynamic class names like border-[${themeColors.celeste}]/25
    // If not, define these utility classes explicitly in your CSS or Tailwind config.
    const borderClass = `border-[${themeColors.celeste}]/25`;
    const hoverTextClass = `hover:text-[${themeColors.celeste}]`;
    const underlineClass = `bg-[${themeColors.celeste}]`;

    return (
        <div className="h-auto min-h-[180px] md:min-h-[160px] flex flex-col items-center justify-center overflow-hidden mt-16 md:mt-20">
            <motion.div
                key={currentIndex}
                variants={containerVariants}
                initial="hidden"
                animate={isAnimating ? "exit" : "visible"}
                className="text-center perspective-[1000px] transform-gpu mx-auto max-w-4xl px-4 z-30 relative"
            >
                <div className="h-6 md:h-8">{currentText.emptyLine}</div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8 relative">
                    <div className={`p-4 rounded-xl backdrop-blur-sm bg-white/75 shadow-lg border ${borderClass}`}>
                        <motion.div
                            className="flex flex-wrap justify-center gap-x-3"
                            variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
                            initial="hidden"
                            animate="visible"
                        >
                            {currentText.title.split(' ').map((word, i) => (
                                <motion.div key={`${currentIndex}-title-${i}`} className="relative inline-block perspective-[1000px] transform-gpu" variants={wordVariants}>
                                    <motion.span
                                        className={`inline-block relative text-night drop-shadow-[0_2px_2px_rgba(21,22,22,0.1)] [text-shadow:_1px_1px_0_#fefefe,_3px_3px_0_rgba(21,22,22,0.08)] ${hoverTextClass} transition-colors duration-300 cursor-pointer`}
                                        whileHover={{ scale: 1.05, y: -4, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                                    >
                                        {word}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div
                        className="absolute -inset-4 rounded-2xl opacity-75 -z-10"
                        style={{ background: `radial-gradient(circle at center, ${themeColors.celeste}20 0%, ${themeColors.celeste}05 40%, transparent 80%)`, filter: 'blur(25px)' }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </h1>
                <motion.h2
                    variants={wordVariants}
                    className={`text-2xl md:text-3xl font-semibold mb-8 relative px-6 py-3 rounded-xl backdrop-blur-sm bg-white/75 inline-block shadow-md border ${borderClass} mt-2`}
                >
                    <span className={`relative inline-block text-night drop-shadow-[0_1px_1px_rgba(21,22,22,0.05)]`}>
                        {currentText.subtitle}
                        <motion.div
                            className={`absolute -bottom-2 left-0 w-full h-1 rounded-full ${underlineClass}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }}
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
                {/* Background glow effect */}
                <motion.div
                    className="absolute -inset-3 rounded-full -z-10"
                    animate={{ background: [`radial-gradient(circle, ${themeColors.celeste}15 0%, ${themeColors.celeste}00 70%)`, `radial-gradient(circle, ${themeColors.celeste}20 0%, ${themeColors.celeste}00 70%)`, `radial-gradient(circle, ${themeColors.celeste}15 0%, ${themeColors.celeste}00 70%)`], scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Animated GSA Shield Logo */}
                <Suspense fallback={<div className="w-24 h-28 bg-white/20 rounded-full animate-pulse"></div>}>
                    <GSAShieldLogo size={140} />
                </Suspense>
            </motion.div>
        </div>
    );
};


// --- Physics Scene Components ---

function PhysicsPlane(props: { position: Triplet, rotation: Triplet }) {
    const [] = usePlane(() => ({ type: 'Static', ...props }));
    return null;
}

// BuildingBlock - uses accent color on hover
function BuildingBlock({ position, size = 0.6, color }: { position: Triplet, size?: number, color: string }) {
    const [ref, api] = useBox(() => ({
        mass: size * size * size * 0.5, position, args: [size, size, size],
        angularDamping: 0.3, linearDamping: 0.1,
        velocity: [(Math.random() - 0.5) * 2, Math.random() * 3 + 1, (Math.random() - 0.5) * 2],
        angularVelocity: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3],
    }));
    const [isHovered, setIsHovered] = useState(false);
    const isBlack = color === themeColors.night;

    return (
        <Box
            ref={ref as React.Ref<THREE.Mesh>} args={[size, size, size]} castShadow receiveShadow
            onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)}
            onClick={() => { api.applyImpulse([(Math.random() - 0.5) * 0.5, 0.5, (Math.random() - 0.5) * 0.5], [0, size / 2, 0]); }}
        >
            <meshStandardMaterial
                color={isHovered ? themeColors.accent : color}
                roughness={isBlack ? 0.7 : 0.4} // Adjust roughness
                metalness={isBlack ? 0.2 : 0.1} // Adjust metalness
                transparent
                opacity={0.95}
                emissive={isHovered ? themeColors.accent : color}
                emissiveIntensity={isHovered ? 0.6 : (isBlack ? 0.05 : 0.15)} // Adjust emissive
            />
        </Box>
    );
}

// BuildingSphere - uses accent color on hover
function BuildingSphere({ position, radius = 0.4, color }: { position: Triplet, radius?: number, color: string }) {
    const [ref, api] = useSphere(() => ({
        mass: (4 / 3) * Math.PI * (radius ** 3) * 0.5, position, args: [radius],
        angularDamping: 0.4, linearDamping: 0.2,
        velocity: [(Math.random() - 0.5) * 2, Math.random() * 3 + 1, (Math.random() - 0.5) * 2],
        angularVelocity: [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2],
    }));
    const [isHovered, setIsHovered] = useState(false);
    const isBlack = color === themeColors.night;

    return (
        <Sphere
            ref={ref as React.Ref<THREE.Mesh>} args={[radius, 32, 32]} castShadow receiveShadow
            onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)}
            onClick={() => { api.applyImpulse([(Math.random() - 0.5) * 0.5, 0.5, (Math.random() - 0.5) * 0.5], [0, 0, 0]); }}
        >
            <meshStandardMaterial
                color={isHovered ? themeColors.accent : color}
                roughness={isBlack ? 0.6 : 0.2} // Adjust roughness
                metalness={isBlack ? 0.1 : 0.2} // Adjust metalness
                transparent
                opacity={0.95}
                emissive={isHovered ? themeColors.accent : color}
                emissiveIntensity={isHovered ? 0.6 : (isBlack ? 0.05 : 0.2)} // Adjust emissive
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
            {/* Keep particles celeste or maybe white for neutrality? Let's try white */}
            <pointsMaterial attach="material" size={0.12} color={themeColors.white} transparent opacity={0.5} sizeAttenuation blending={THREE.AdditiveBlending} />
        </Points>
    );
}

// The main 3D scene
function Scene() {
    const numBlocks = 30; // Increased block count slightly

    // Updated blockData generation to assign categories and colors
    const blockData = useMemo(() => {
        const data = [];
        for (let i = 0; i < numBlocks; i++) {
            const category = Math.random() > 0.5 ? 'tech' : 'science'; // Assign category
            const palette = categoryPalettes[category];
            const color = palette[Math.floor(Math.random() * palette.length)]; // Pick random color from palette
            const shape = category === 'tech' ? 'box' : 'sphere'; // Assign shape based on category

            data.push({
                position: [(Math.random() - 0.5) * 5, i * 0.2 + 1, (Math.random() - 0.5) * 5] as Triplet, // Slightly wider spread
                shape: shape,
                size: Math.random() * 0.4 + (shape === 'box' ? 0.4 : 0.3), // Tech blocks slightly larger avg
                color: color
            });
        }
        return data;
    }, [numBlocks]);


    return (
        <>
            {/* Camera and Lighting */}
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} autoRotate autoRotateSpeed={0.2} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI * 3 / 4} maxDistance={40} minDistance={5} />
            <ambientLight intensity={0.4} color={themeColors.white} /> {/* Dimmer ambient */}
            <directionalLight
                position={[-10, 15, 10]} intensity={0.8} castShadow // Softer directional
                shadow-mapSize-width={2048} shadow-mapSize-height={2048}
                shadow-camera-far={50} shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20}
                shadow-bias={-0.0005}
            />
            {/* Use more neutral / thematic point lights */}
            <pointLight position={[15, 5, -15]} intensity={0.6} color={themeColors.techBlue} distance={60} decay={1.5} />
            <pointLight position={[-15, 0, 15]} intensity={0.4} color={themeColors.celeste} distance={60} decay={1.5} />

            <fog attach="fog" args={[themeColors.white, 25, 55]} />

            {/* Physics World */}
            <Physics gravity={[0, -9.81, 0]} defaultContactMaterial={{ friction: 0.2, restitution: 0.4 }}>
                <PhysicsPlane position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                {blockData.map((data, index) =>
                    data.shape === 'box' ? (
                        <BuildingBlock key={`block-${index}`} position={data.position} size={data.size} color={data.color} />
                    ) : (
                        <BuildingSphere key={`sphere-${index}`} position={data.position} radius={data.size} color={data.color} /> // Use size directly for sphere radius now
                    )
                )}
            </Physics>

            {/* Background Grid - Use techBlue for sections */}
            <Grid
                renderOrder={-1} position={[0, -1.49, 0]} infiniteGrid
                cellSize={1.5} cellThickness={0.4} sectionSize={4.5} sectionThickness={1}
                sectionColor={themeColors.techBlue} // Use techBlue for sections
                cellColor={themeColors.night}
                fadeDistance={60} fadeStrength={1.2} receiveShadow
            />

            {/* Background Particles */}
            <AnimatedParticles count={120} radius={22} />
        </>
    );
}

// Main Hero Component
export default function Hero() {
    // Add custom animation styles to the document
    useEffect(() => {
        const styleEl = document.createElement('style');
        styleEl.innerHTML = `
            @keyframes glow {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 0.7; transform: scale(1.2); }
            }
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-glow {
                animation: glow 3s infinite ease-in-out;
            }
            .animate-spin-slow {
                animation: spin-slow 12s infinite linear;
            }

            /* Particle animations */
            @keyframes float-particle {
                0%, 100% { transform: translate(0, 0); opacity: 0; }
                25% { opacity: 0.8; }
                50% { transform: translate(var(--tx), var(--ty)); opacity: 0.5; }
                75% { opacity: 0.3; }
                90%, 100% { opacity: 0; }
            }

            .particle {
                opacity: 0;
                filter: blur(1px);
                box-shadow: 0 0 4px rgba(160, 235, 235, 0.8);
            }

            .particle-1 {
                --tx: 20px; --ty: -30px;
                animation: float-particle 4s infinite ease-out;
            }

            .particle-2 {
                --tx: -25px; --ty: -20px;
                animation: float-particle 5s infinite ease-out 0.5s;
            }

            .particle-3 {
                --tx: -20px; --ty: 25px;
                animation: float-particle 4.5s infinite ease-out 1s;
            }

            .particle-4 {
                --tx: 25px; --ty: 20px;
                animation: float-particle 5.5s infinite ease-out 1.5s;
            }

            .particle-5 {
                --tx: 10px; --ty: -35px;
                animation: float-particle 6s infinite ease-out 2s;
            }

            /* Icon hover effects */
            .hero-icon-container:hover .particle {
                animation-play-state: paused;
            }
            .hero-icon-container:hover .animate-spin-slow {
                animation-duration: 6s;
            }
        `;
        document.head.appendChild(styleEl);
        return () => {
            document.head.removeChild(styleEl);
        };
    }, []);

    // Define feature card styles using theme colors
    const featureBorderColor = `border-[${themeColors.celeste}]/20`;
    const featureHoverShadow = `0 10px 25px -5px ${themeColors.celeste}30, 0 8px 10px -6px ${themeColors.celeste}20`;

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night/5 via-white to-celeste/10">
                <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-white">Loading Physics Scene...</div>}>
                    <Canvas
                        shadows
                        camera={{ position: [0, 5, 20], fov: 60 }}
                        dpr={[1, 1.5]}
                    >
                        <Scene />
                    </Canvas>
                </Suspense>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 pt-6 pb-16 md:pt-8 md:pb-20 flex flex-col items-center">
                <div className="relative mb-[-1.5rem] md:mb-[-2rem] z-20">
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
                            { icon: GraduationCap, title: "Expert Writers", desc: "MA/PhD qualified professionals", delay: 0.5, color: "from-blue-400/20 to-blue-500/10" },
                            { icon: Clock, title: "On-Time Delivery", desc: "Meet your deadlines every time", delay: 0.7, color: "from-purple-400/20 to-purple-500/10" },
                            { icon: Shield, title: "100% Original", desc: "Plagiarism-free guarantee", delay: 0.9, color: "from-green-400/20 to-green-500/10" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className={`text-center bg-white/85 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border ${featureBorderColor} relative overflow-hidden group`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: feature.delay, type: "spring", stiffness: 90, damping: 12 } }}
                                whileHover={{ scale: 1.04, y: -5, boxShadow: featureHoverShadow }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="hero-icon-container relative flex justify-center items-center mb-6">
                                    {/* Animated background elements */}
                                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-celeste/20 to-celeste/5 animate-pulse"></div>
                                    <div className="absolute inset-[-5px] w-[calc(100%+10px)] h-[calc(100%+10px)] rounded-full bg-celeste/10 blur-md animate-glow"></div>
                                    <div className="absolute inset-[-2px] w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-full border-2 border-celeste/20 animate-spin-slow"></div>

                                    {/* Particles */}
                                    <div className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)]">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`particle absolute w-1.5 h-1.5 rounded-full bg-celeste particle-${i+1}`}
                                                style={{
                                                    top: `${Math.random() * 100}%`,
                                                    left: `${Math.random() * 100}%`,
                                                }}
                                            ></div>
                                        ))}
                                    </div>

                                    {/* Icon container */}
                                    <div className="relative z-10 bg-white/80 w-20 h-20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-celeste/30">
                                        <feature.icon className="h-10 w-10 text-celeste drop-shadow-[0_0_3px_rgba(160,235,235,0.5)]" />
                                        <Sparkles className="absolute top-0 right-0 h-6 w-6 text-yellow-400 animate-pulse" />
                                    </div>
                                </div>
                                {/* Background gradient that changes on hover */}
                                <div className={`absolute inset-0 opacity-0 bg-gradient-to-br ${feature.color} group-hover:opacity-20 transition-opacity duration-500`}></div>

                                <h3 className="text-xl font-bold text-night mb-3">{feature.title}</h3>
                                <p className="mt-2 text-base text-gray-700">{feature.desc}</p>

                                {/* Bottom accent line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-celeste/70"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ delay: feature.delay + 0.3, duration: 0.8 }}
                                    viewport={{ once: true }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
