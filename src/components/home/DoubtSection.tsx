import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestion, ArrowRight, Clock, Users, Star, Sparkles, Zap, Shield, Award } from 'lucide-react';

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const sparkleVariants = {
  initial: { scale: 0, rotate: 0 },
  animate: {
    scale: [0, 1, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

export default function DoubtSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-night via-night-dark to-night py-12 sm:py-16 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(to right, rgba(160,235,235,0.15), rgba(160,235,235,0.05))",
            "linear-gradient(to right, rgba(160,235,235,0.05), rgba(160,235,235,0.15))",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Animated glow effects */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-celeste/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-celeste/15 blur-3xl"
        />

        {/* Digital circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/circuit-pattern.png')] bg-repeat"></div>
      </motion.div>

      {/* Enhanced floating sparkles */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            className="absolute"
            style={{
              left: `${10 + i * 18}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <Sparkles className="w-5 h-5 text-celeste/60" />
          </motion.div>
        ))}
      </motion.div>

      {/* Animated pulse rings */}
      <div className="absolute right-[15%] top-[20%] pointer-events-none">
        <div className="w-4 h-4 rounded-full bg-celeste/80 relative">
          <div className="absolute inset-0 rounded-full bg-celeste animate-ping opacity-75"></div>
          <div className="absolute inset-[-8px] rounded-full border-2 border-celeste/30 animate-pulse"></div>
          <div className="absolute inset-[-16px] rounded-full border border-celeste/20 animate-pulse animation-delay-500"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="flex items-center gap-2 mb-3"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-celeste/30 to-celeste/20 p-2.5 rounded-full backdrop-blur-md inline-block shadow-lg shadow-celeste/10"
              >
                <MessageCircleQuestion className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-celeste font-semibold tracking-wide text-lg">PREMIUM SUPPORT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Instant Doubt Clearing, Anytime
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/80 mb-6 max-w-lg"
            >
              Connect with our expert tutors instantly and get your academic questions answered within minutes. No waiting, no appointments needed.
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-6">
              {[
                { icon: Zap, text: "Instant Responses", desc: "Get answers in minutes" },
                { icon: Users, text: "PhD Qualified Tutors", desc: "Subject matter experts" },
                { icon: Shield, text: "Secure & Confidential", desc: "Your privacy protected" },
                { icon: Award, text: "Premium Quality", desc: "Satisfaction guaranteed" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10"
                >
                  <div className="p-2 rounded-full bg-celeste/20">
                    <item.icon className="w-5 h-5 text-celeste" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.text}</div>
                    <div className="text-white/60 text-xs">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-shrink-0"
          >
            <Link to="/contact" className="inline-block group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-celeste to-celeste-dark text-night px-8 py-4 rounded-full font-bold text-lg
                         shadow-xl shadow-celeste/30 hover:shadow-celeste/50
                         flex items-center gap-3 group-hover:gap-4 transition-all duration-300
                         relative overflow-hidden border-2 border-celeste/20"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="relative z-10"
                >
                  Get Expert Help Now
                </motion.span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}