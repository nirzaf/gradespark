import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ChevronRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <footer className="bg-night text-white pt-16 pb-8 relative overflow-hidden min-h-[500px]">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-celeste blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-celeste blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 gradient-text">Grade Spark Academy</h3>
            <p className="text-gray-300 mb-4">
              Helping university students achieve academic excellence through expert assistance and support.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/exam-boards" className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Exam Boards
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 gradient-text">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Essay Writing
              </li>
              <li className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Research Papers
              </li>
              <li className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Dissertation Support
              </li>
              <li className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Technical Assignments
              </li>
              <li className="text-gray-300 hover:text-celeste transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Editing & Proofreading
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 gradient-text">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-celeste mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">6th Floor, Building Number 12, Street Number 817, Khor Shaqeeq Street, Zone No 38, Al Sadd, Doha.</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-celeste mr-3 flex-shrink-0" />
                <a href="mailto:contact@gradespark.org" className="text-gray-300 hover:text-celeste transition-colors">
                  contact@gradespark.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-celeste mr-3 flex-shrink-0" />
                <a href="tel:+97433170042" className="text-gray-300 hover:text-celeste transition-colors">
                  +974-33170042
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-celeste/50 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p> {currentYear} Grade Spark Academy. All rights reserved.</p>
          </motion.div>

          <motion.div
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/privacy-policy" className="hover:text-celeste transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-celeste transition-colors">
              Terms of Service
            </Link>
            <Link to="/consent-preferences" className="hover:text-celeste transition-colors">
              Cookie Preferences
            </Link>
            <Link to="/sitemap" className="hover:text-celeste transition-colors">
              Sitemap
            </Link>
          </motion.div>
        </div>

        {/* Credits */}
        <motion.div
          className="text-center text-xs text-gray-500 mt-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <span>Powered by</span>
          <a
            href="https://quadrate.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center ml-1 hover:text-celeste transition-colors group"
          >
            Quadrate TechSolutions
            <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>

      <WhatsAppButton />
    </footer>
  );
};

export default Footer;