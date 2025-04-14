import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Lock, CheckCircle, Award, BookOpen } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: JSX.Element;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is GradeSpark Academy legit?',
    answer: 'GradeSpark Academy is absolutely legitimate. Founded with a mission to provide high-quality academic support, we are a trusted educational service provider helping students worldwide achieve academic excellence. Our platform connects students with verified expert tutors who provide professional academic guidance and support.',
    icon: <Shield className="w-6 h-6 text-celeste" />
  },
  {
    question: 'How does GradeSpark Academy protect my personal data?',
    answer: 'We take data security seriously at GradeSpark Academy. All personal information is encrypted and stored securely following industry best practices. We never share your personal data with third parties without your explicit consent. Our platform employs advanced security measures to ensure your privacy and confidentiality are maintained at all times.',
    icon: <Lock className="w-6 h-6 text-celeste" />
  },
  {
    question: 'Is GradeSpark Academy reliable?',
    answer: 'GradeSpark Academy is highly reliable and trusted by students from top universities worldwide. We maintain complete transparency in our pricing with no hidden fees. Every session is backed by our satisfaction guarantee, ensuring you receive the highest quality academic support. Our expert tutors undergo rigorous verification, and we maintain strict quality standards in all our services.',
    icon: <CheckCircle className="w-6 h-6 text-celeste" />
  },
  {
    question: 'How does GradeSpark Academy maintain academic integrity?',
    answer: 'At GradeSpark Academy, we strictly adhere to academic integrity principles. Our services focus on providing guidance, tutoring, and academic support while ensuring students maintain ownership of their learning journey. We help students understand complex topics, develop critical thinking skills, and improve their academic performance through ethical educational practices.',
    icon: <Award className="w-6 h-6 text-celeste" />
  },
  {
    question: 'Why choose GradeSpark Academy over other tutoring services?',
    answer: 'GradeSpark Academy stands out through our commitment to personalized learning, verified expert tutors, and comprehensive academic support. We offer flexible scheduling, competitive pricing, and a satisfaction guarantee on all our services. Our platform provides an engaging learning environment with modern tools and resources to ensure effective learning outcomes.',
    icon: <BookOpen className="w-6 h-6 text-celeste" />
  }
];

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-celeste/20 rounded-xl overflow-hidden backdrop-blur-lg"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left
                   bg-gradient-to-r from-night/95 to-night/90 hover:from-night/90 hover:to-night/85
                   transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          {item.icon}
          <span className="text-lg font-medium text-white">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-celeste" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-night/50 text-gray-300">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-celeste/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-celeste/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-celeste to-celeste-dark bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Get answers to common questions about our services and commitment to your academic success
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;