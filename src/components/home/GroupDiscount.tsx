import { motion } from 'framer-motion';
import { Users, GraduationCap, Clock, Info } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useEffect, useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Tooltip.Provider>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl relative min-h-[280px] flex flex-col border border-celeste/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="icon-container mb-6 relative w-24 h-24">
          {/* Background elements */}
          <div className="icon-background absolute inset-0 rounded-full bg-gradient-to-br from-celeste/20 to-celeste/5 animate-pulse"></div>
          <div className="icon-glow absolute inset-[-5px] rounded-full bg-celeste/10 blur-md animate-glow"></div>
          <div className="icon-ring absolute inset-[-2px] rounded-full border-2 border-celeste/20 animate-spin-slow"></div>

          {/* Particles */}
          <div className="particles absolute inset-[-10px]">
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
          <motion.div
            className="absolute inset-0 z-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-celeste/30"
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              scale: 1.1,
              boxShadow: '0 0 15px rgba(160, 235, 235, 0.5)'
            }}
            transition={{ duration: 0.5 }}
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -5, 0]
            }}
            initial={{ scale: 1 }}
          >
            {icon}
          </motion.div>
        </div>
        <h3 className="text-xl font-bold text-night mb-3 text-center">{title}</h3>
        <p className="text-gray-600 mb-3 text-center">{description}</p>
      </div>
      <div className="mt-auto flex items-center justify-center gap-1">
        <p className="text-gray-400 text-[11px] italic">Terms & Conditions apply</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="text-gray-400 hover:text-celeste transition-colors">
              <Info className="w-3.5 h-3.5" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-night text-white px-4 py-2 rounded-md text-xs max-w-[250px] shadow-xl border border-celeste/20"
              sideOffset={5}
            >
              Discount rates apply to eligible assignments and are subject to academic requirements verification. Final discount amounts will be confirmed during order placement.
              <Tooltip.Arrow className="fill-night" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </motion.div>
  </Tooltip.Provider>
);

export default function GroupDiscount() {
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
    `;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  const features = [
    {
      icon: <Users className="w-10 h-10 text-celeste drop-shadow-[0_0_3px_rgba(160,235,235,0.5)]" />,
      title: "Group Submissions",
      description: "Submit multiple assignments together with classmates and receive up to 25% discount on each project."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-celeste drop-shadow-[0_0_3px_rgba(160,235,235,0.5)]" />,
      title: "Academic Package",
      description: "Bundle multiple assignments from the same course for comprehensive support and save up to 20% on total cost."
    },
    {
      icon: <Clock className="w-10 h-10 text-celeste drop-shadow-[0_0_3px_rgba(160,235,235,0.5)]" />,
      title: "Advance Booking",
      description: "Plan ahead and save - receive special discounts when you book assistance for future assignments with flexible deadlines."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-night/5 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Smart Solutions, Better Value
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Maximize your academic success while minimizing costs with our special discount options for university students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
