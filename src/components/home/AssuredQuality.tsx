import { FC } from 'react';
import { motion } from 'framer-motion';

const AssuredQuality: FC = () => {

  const benefits = [
    {
      title: 'Assured Quality',
      icon: (
        <div className="quality-check-icon" title="Assured Quality" style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 204, 0.7))', display: 'block' }}>
            <circle cx="12" cy="12" r="10" stroke="#00ffcc" strokeWidth="2" fill="none" />
            <path d="M8 12l3 3 6-6" stroke="#00ffcc" strokeWidth="2" fill="none" />
          </svg>
        </div>
      ),
      points: ['100% task accuracy', 'Detailed explanations', 'Step-wise solutions'],
    },
    {
      title: 'Time Efficiency',
      icon: (
        <div className="time-clock-icon" title="Time Efficiency" style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 204, 51, 0.7))', display: 'block' }}>
            <circle cx="12" cy="12" r="10" stroke="#ffcc33" strokeWidth="2" fill="none" />
            <line x1="12" y1="12" x2="12" y2="8" stroke="#ffcc33" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="12" x2="16" y2="12" stroke="#ffcc33" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      ),
      points: ['Quick turnover time', '24/7 expert guidance', 'On-time submission'],
    },
    {
      title: 'Uniqueness Guaranteed',
      icon: (
        <div className="unique-fingerprint-icon" title="Uniqueness Guaranteed" style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 8px #ff00ff)' }}>
            <defs>
              <linearGradient id="rainbowGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff0055" />
                <stop offset="25%" stopColor="#ff9900" />
                <stop offset="50%" stopColor="#ffee00" />
                <stop offset="75%" stopColor="#00ff99" />
                <stop offset="100%" stopColor="#0066ff" />
              </linearGradient>
            </defs>
            <path d="M32 2c-6 0-11 5-11 11v6c0 6 5 11 11 11s11-5 11-11v-6c0-6-5-11-11-11z" stroke="#ff00ff" />
            <path d="M32 20v10" stroke="#ff00ff" />
            <path d="M21 32c0 6 5 11 11 11s11-5 11-11v-6c0-6-5-11-11-11" stroke="#ff00ff" />
            <path d="M32 43v7" stroke="#ff00ff" />
            <path d="M25 50c0 3 5 5 7 5s7-2 7-5" stroke="#ff00ff" />
          </svg>
        </div>
      ),
      points: ['Non-plagiarized content', 'Personalized solutions', 'Multiple revisions available'],
    },
    {
      title: 'Enhanced Learning',
      icon: (
        <div className="learning-brain-icon" title="Enhanced Learning" style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem' }}>
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="#bb33ff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 8px #bb33ff)' }}>
            {/* Brain outline */}
            <path d="M20 32c0-6 4-12 12-12s12 6 12 12-4 12-12 12-12-6-12-12z" />
            {/* Neural connections */}
            <path className="connection" d="M32 20l-6 6" />
            <path className="connection" d="M32 20l6 6" />
            <path className="connection" d="M26 38l-6 6" />
            <path className="connection" d="M38 38l6 6" />
            {/* Nodes */}
            <circle className="node" cx="26" cy="26" r="3" fill="#bb33ff" />
            <circle className="node" cx="38" cy="26" r="3" fill="#bb33ff" />
            <circle className="node" cx="20" cy="44" r="3" fill="#bb33ff" />
            <circle className="node" cx="44" cy="44" r="3" fill="#bb33ff" />
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-celeste">Academic Excellence Guaranteed</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At <strong className="text-celeste">Grade Spark Academy</strong>, we're committed to delivering exceptional quality in every aspect of our academic services.
          </p>
        </motion.div>

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
              className="card benefit-card bg-[#1e1e1e] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-celeste/20 flex flex-col items-center text-center"
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