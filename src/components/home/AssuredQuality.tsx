import { FC } from 'react';
import { motion } from 'framer-motion';

const AssuredQuality: FC = () => {

  const benefits = [
    {
      title: 'Assured Quality',
      icon: (
        <div className="quality-check-icon" title="Assured Quality" style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#00ffcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px #00ffcc)' }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l3 3 6-6" />
          </svg>
        </div>
      ),
      points: ['100% task accuracy', 'Detailed explanations', 'Step-wise solutions'],
    },
    {
      title: 'Time Efficiency',
      icon: (
        <div className="time-clock-icon" title="Time Efficiency" style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#ffcc33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px #ffcc33)' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="12" x2="12" y2="8" />
            <line x1="12" y1="12" x2="16" y2="12" />
          </svg>
        </div>
      ),
      points: ['Quick turnover time', '24/7 expert guidance', 'On-time submission'],
    },
    {
      title: 'Uniqueness Guaranteed',
      icon: (
        <div className="unique-fingerprint-icon" title="Uniqueness Guaranteed" style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 24 24" fill="none" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px #00ffff)' }}>
            <path d="M12 2C9 2 7 4 7 7v3c0 3 2 5 5 5s5-2 5-5V7c0-3-2-5-5-5z" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15v3" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 18c0 1 1 2 2 2s2-1 2-2" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
      points: ['Non-plagiarized content', 'Personalized solutions', 'Multiple revisions available'],
    },
    {
      title: 'Enhanced Learning',
      icon: (
        <div className="learning-brain-icon" title="Enhanced Learning" style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 24 24" fill="none" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px #bb33ff)' }}>
            <circle cx="12" cy="9" r="5" stroke="#bb33ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="9" r="1" fill="#bb33ff" />
            <circle cx="16" cy="9" r="1" fill="#bb33ff" />
            <path d="M8 14c0 2 2 4 4 4s4-2 4-4" stroke="#bb33ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
      points: ['Thorough subject understanding', 'Filling knowledge gaps', 'Improved knowledge retention'],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <section className="academic-excellence-section py-20 bg-gradient-to-b from-night-dark to-night relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-celeste/10 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-celeste/10 rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-celeste/15 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-celeste/15 rounded-full filter blur-xl animate-float3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4 text-celeste">Academic Excellence Guaranteed</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At <strong className="text-celeste">Grade Spark Academy</strong>, we're committed to delivering exceptional quality in every aspect of our academic services.
          </p>
        </motion.div>

        {/* GSA Shield Logo Animation */}
        <div className="gsa-logo mb-12">
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
              <text x="-40" y="0" className="letter g" textAnchor="middle" dominantBaseline="middle">G</text>
              {/* "S" centered */}
              <text x="0" y="0" className="letter s" textAnchor="middle" dominantBaseline="middle">S</text>
              {/* "A" positioned to the right */}
              <text x="40" y="0" className="letter a" textAnchor="middle" dominantBaseline="middle">A</text>
            </g>

            {/* Cyan bottom tip accent */}
            <polygon className="accent" points="90,155 100,165 110,155" />
          </svg>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card benefit-card bg-[#1e1e1e] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-celeste/20 flex flex-col items-center text-center hover:transform hover:translate-y-[-10px] hover:shadow-[0_12px_30px_rgba(0,255,255,0.6)]"
            >
              {benefit.icon}

              <h3 className="text-xl font-bold text-[#00fff7] mb-4">{benefit.title}</h3>

              <ul className="space-y-3 w-full">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center text-[#a0a0a0] point-item">
                    <span className="mr-2 text-[#00fff7]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AssuredQuality;