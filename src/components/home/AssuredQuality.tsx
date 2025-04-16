import { FC } from 'react';
import { motion } from 'framer-motion';

const AssuredQuality: FC = () => {

  const benefits = [
    {
      title: 'Assured Quality',
      icon: (
        <div className="icon-container quality-check-icon" style={{ width: '80px', height: '80px', background: 'rgba(0, 255, 204, 0.1)', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
        <div className="icon-container time-clock-icon" style={{ width: '80px', height: '80px', background: 'rgba(255, 204, 51, 0.1)', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
        <div className="icon-container unique-fingerprint-icon" style={{ width: '80px', height: '80px', background: 'rgba(255, 0, 255, 0.1)', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 0, 255, 0.7))', display: 'block' }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="none" stroke="#ff00ff" strokeWidth="2" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="none" stroke="#ff00ff" strokeWidth="2" />
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="none" stroke="#ff00ff" strokeWidth="2" />
          </svg>
        </div>
      ),
      points: ['Non-plagiarized content', 'Personalized solutions', 'Multiple revisions available'],
    },
    {
      title: 'Enhanced Learning',
      icon: (
        <div className="icon-container learning-brain-icon" style={{ width: '80px', height: '80px', background: 'rgba(187, 51, 255, 0.1)', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="64" height="64" style={{ filter: 'drop-shadow(0 0 8px rgba(187, 51, 255, 0.7))', display: 'block' }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="#bb33ff" strokeWidth="2" />
            <path d="M8 12C8 9.79 9.79 8 12 8" fill="none" stroke="#bb33ff" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 16C14.21 16 16 14.21 16 12" fill="none" stroke="#bb33ff" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8C14.21 8 16 9.79 16 12" fill="none" stroke="#bb33ff" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 12C8 14.21 9.79 16 12 16" fill="none" stroke="#bb33ff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="8" cy="12" r="1.5" fill="#bb33ff" />
            <circle cx="12" cy="8" r="1.5" fill="#bb33ff" />
            <circle cx="16" cy="12" r="1.5" fill="#bb33ff" />
            <circle cx="12" cy="16" r="1.5" fill="#bb33ff" />
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
              <motion.div
                className="mb-6"
                animate={index === 0 ? {
                  scale: [1, 1.1, 1],
                } : index === 1 ? {
                  rotate: [0, 360],
                } : index === 2 ? {
                  y: [0, -5, 0],
                } : {
                  scale: [1, 1.05, 1, 0.95, 1],
                }}
                transition={{
                  duration: index === 1 ? 10 : 3,
                  repeat: Infinity,
                  repeatType: index === 1 ? "loop" : "reverse",
                  ease: "easeInOut"
                }}
              >
                {benefit.icon}
              </motion.div>

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