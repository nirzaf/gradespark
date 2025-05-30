import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, MessageSquare, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import AnimatedBackground from '../common/AnimatedBackground';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: 'Place Your Order',
            description: 'Fill out the form with your assignment details and requirements',
            icon: <ClipboardList className="w-10 h-10" style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))' }} />,
            color: 'from-[#4AEEFF] to-[#00B8D4]',
            shadowColor: 'shadow-celeste/20'
        },
        {
            number: 2,
            title: 'Choose Your Expert',
            description: 'Select from qualified profiles based on your subject needs',
            icon: <UserCheck className="w-10 h-10" style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))' }} />,
            color: 'from-[#00B8D4] to-[#0097A7]',
            shadowColor: 'shadow-celeste-dark/20'
        },
        {
            number: 3,
            title: 'Track Progress',
            description: 'Communicate directly with your expert and monitor progress',
            icon: <MessageSquare className="w-10 h-10" style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))' }} />,
            color: 'from-[#0097A7] to-[#006064]',
            shadowColor: 'shadow-night/30'
        },
        {
            number: 4,
            title: 'Receive & Review',
            description: 'Get your completed work and request free revisions if needed',
            icon: <CheckCircle className="w-10 h-10" style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))' }} />,
            color: 'from-[#006064] to-[#4AEEFF]',
            shadowColor: 'shadow-celeste/30'
        }
    ];

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    return (
        <section className="py-20 bg-gradient-to-b from-night-dark to-night relative overflow-hidden animated-bg-section">
            {/* Animated Background */}
            {isMounted && <AnimatedBackground particleCount={300} particleColor="#00e1ff" />}

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-celeste">
                        How It Works
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                        Our simple and transparent process ensures you get the help you need with minimal hassle.
                        From order to delivery, we keep you in control every step of the way.
                    </p>
                </motion.div>

                {/* Process Flow with Connection Lines */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-celeste via-night to-celeste transform -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="relative"
                            >
                                <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg hover:shadow-[0_12px_30px_rgba(0,255,255,0.6)] transition-all duration-300 h-full flex flex-col items-center text-center border border-celeste/20 hover:transform hover:translate-y-[-5px]">
                                    {/* Step Number with Icon */}
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,225,255,0.6)] border-2 border-celeste/50 icon-container`}>
                                        <div className="text-white icon-pulse">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-celeste text-night flex items-center justify-center text-sm font-bold shadow-md">
                                        {step.number}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-celeste">{step.title}</h3>
                                    <p className="text-gray-300 flex-grow">{step.description}</p>

                                    {/* Animated Arrow for non-last items */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                                className="text-celeste"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="m14 5 7 7-7 7"></path>
                                                </svg>
                                            </motion.div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center bg-gradient-to-r from-night/30 to-celeste/20 p-6 rounded-xl shadow-sm border border-celeste/30"
                >
                    <p className="text-gray-200 font-medium text-lg">
                        All our services come with 100% originality guarantee, secure payment options, and free revisions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;