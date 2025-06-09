import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Lock, CheckCircle, Award, BookOpen } from 'lucide-react';

// Define the structure for each FAQ item
interface FAQItemProps {
  question: string;
  answer: string;
  icon: JSX.Element;
}

// Array containing the FAQ data
const faqItemsData: FAQItemProps[] = [
  {
    question: 'Is GradeSpark Academy legit?',
    answer: 'GradeSpark Academy is absolutely legitimate. Founded with a mission to provide high-quality academic support, we are a trusted educational service provider helping students worldwide achieve academic excellence. Our platform connects students with verified expert tutors who provide professional academic guidance and support.',
    // Assuming 'celeste' is a defined color, otherwise replace with a valid color/class
    icon: <Shield className="w-6 h-6" style={{ color: 'var(--celeste)' }} />
  },
  {
    question: 'How does GradeSpark Academy protect my personal data?',
    answer: 'We take data security seriously at GradeSpark Academy. All personal information is encrypted and stored securely following industry best practices. We never share your personal data with third parties without your explicit consent. Our platform employs advanced security measures to ensure your privacy and confidentiality are maintained at all times.',
    icon: <Lock className="w-6 h-6" style={{ color: 'var(--celeste)' }} />
  },
  {
    question: 'Is GradeSpark Academy reliable?',
    answer: 'GradeSpark Academy is highly reliable and trusted by students from top universities worldwide. We maintain complete transparency in our pricing with no hidden fees. Every session is backed by our satisfaction guarantee, ensuring you receive the highest quality academic support. Our expert tutors undergo rigorous verification, and we maintain strict quality standards in all our services.',
    icon: <CheckCircle className="w-6 h-6" style={{ color: 'var(--celeste)' }} />
  },
  {
    question: 'How does GradeSpark Academy maintain academic integrity?',
    answer: 'At GradeSpark Academy, we strictly adhere to academic integrity principles. Our services focus on providing guidance, tutoring, and academic support while ensuring students maintain ownership of their learning journey. We help students understand complex topics, develop critical thinking skills, and improve their academic performance through ethical educational practices.',
    icon: <Award className="w-6 h-6" style={{ color: 'var(--celeste)' }} />
  },
  {
    question: 'Why choose GradeSpark Academy over other tutoring services?',
    answer: 'GradeSpark Academy stands out through our commitment to personalized learning, verified expert tutors, and comprehensive academic support. We offer flexible scheduling, competitive pricing, and a satisfaction guarantee on all our services. Our platform provides an engaging learning environment with modern tools and resources to ensure effective learning outcomes.',
    icon: <BookOpen className="w-6 h-6" style={{ color: 'var(--celeste)' }} />
  }
];

// Component for a single FAQ item
const FAQItem = ({ item }: { item: FAQItemProps }) => {
  // State to manage the open/closed status of the FAQ item
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      // Styling for the FAQ item container
      className="border rounded-xl overflow-hidden backdrop-blur-lg" style={{ borderColor: 'var(--celeste)', borderWidth: '1px', borderStyle: 'solid', borderOpacity: 0.2 }}
    >
      {/* Button to toggle the FAQ item open/closed */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left
                   transition-all duration-300"
        style={{ background: 'linear-gradient(90deg, var(--night) 95%, var(--night) 90%)' }}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.question.replace(/\s+/g, '-').toLowerCase()}`}
        aria-label={`Toggle FAQ: ${item.question}`}
      >
        {/* Icon and Question */}
        <div className="flex items-center space-x-4">
          {item.icon}
          <span className="text-lg font-medium text-white">{item.question}</span>
        </div>
        {/* Chevron icon that rotates based on open state */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: 'var(--celeste)' }} />
        </motion.div>
      </button>

      {/* Animated container for the answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} // Initial state for animation
            animate={{ height: 'auto', opacity: 1 }} // Animate to auto height and full opacity
            exit={{ height: 0, opacity: 0 }} // Animate back to zero height and zero opacity
            transition={{ duration: 0.3 }}
            className="overflow-hidden" // Hide content when height is 0
          >
            {/* Answer text container */}
            <div
              id={`faq-answer-${item.question.replace(/\s+/g, '-').toLowerCase()}`}
              className="px-6 py-4"
              style={{ background: 'rgba(21,22,22,0.5)', color: 'var(--white)' }}
              role="region"
              aria-labelledby={`faq-question-${item.question.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main FAQ Section Component
const FAQSection = () => {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'var(--white)' }}>
      {/* Background decorative effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ background: 'rgba(160,235,235,0.2)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ background: 'rgba(160,235,235,0.2)' }}></div>
      </div>

      {/* Container for content */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: true }} // Animate only once
            className="text-3xl md:text-4xl font-bold mb-4 text-black"
          >
            <strong>Frequently Asked Questions</strong>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }} // Delayed animation
            className="text-gray-600 max-w-2xl mx-auto" // Adjusted text color for light theme
          >
            Get answers to common questions about our services and commitment to your academic success
          </motion.p>
        </div>

        {/* FAQ Items List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItemsData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Add CSS for pulse-slow animation if not defined elsewhere */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;