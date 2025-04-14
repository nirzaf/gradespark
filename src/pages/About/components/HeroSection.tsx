import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="text-center mb-20 relative py-16">
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-3xl opacity-75"
        style={{
          background: 'radial-gradient(circle at center, rgba(160, 235, 235, 0.2) 0%, rgba(160, 235, 235, 0.05) 40%, transparent 80%)',
          filter: 'blur(25px)'
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="animate-fade-in-up p-8 rounded-2xl backdrop-blur-sm bg-white/30 shadow-lg border border-celeste/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 celeste-gradient-text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your Learning Journey
            <motion.div
              className="h-1 w-48 bg-gradient-to-r from-celeste to-celeste-dark rounded-full mx-auto mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming education through personalized online tutoring, connecting students with expert tutors worldwide.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
