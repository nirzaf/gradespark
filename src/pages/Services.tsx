import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollToTop from '@/hooks/useScrollToTop'; // Import the new hook
import {
  BookOpen, PenTool, GraduationCap, FileText, BookMarked, Ghost,
  Code, Calculator, Beaker, Brain, Briefcase, Microscope, FileEdit, Presentation
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the service categories
const serviceCategories = [
  {
    title: "Assignment Services",
    description: "Expert assistance with all types of academic assignments",
    services: [
      {
        icon: <BookOpen className="w-8 h-8 text-celeste" />,
        title: "Custom Assignment Writing",
        description: "Professional assistance with assignments across all academic disciplines and levels. Our experts deliver well-researched, original content tailored to your specific requirements."
      },
      {
        icon: <PenTool className="w-8 h-8 text-celeste" />,
        title: "Essay Writing",
        description: "Compelling, well-structured essays crafted by subject matter experts. From argumentative to analytical essays, we ensure clear thesis statements, strong evidence, and logical flow."
      },
      {
        icon: <FileEdit className="w-8 h-8 text-celeste" />,
        title: "Research Papers",
        description: "Comprehensive research papers with proper citations, methodology, and analysis. Our writers conduct thorough research using credible academic sources to support your arguments."
      },
      {
        icon: <Presentation className="w-8 h-8 text-celeste" />,
        title: "Presentations & Slideshows",
        description: "Visually engaging presentations with clear, concise content. We create professional slides with compelling visuals, key points, and speaker notes if required."
      }
    ]
  },
  {
    title: "Advanced Academic Services",
    description: "Specialized support for complex academic projects",
    services: [
      {
        icon: <GraduationCap className="w-8 h-8 text-celeste" />,
        title: "Thesis & Dissertation Support",
        description: "Expert guidance throughout your thesis or dissertation journey. From proposal development to literature review, methodology, data analysis, and final defense preparation."
      },
      {
        icon: <FileText className="w-8 h-8 text-celeste" />,
        title: "Personal Statement Writing",
        description: "Compelling personal statements that highlight your strengths and aspirations. Perfect for university applications, scholarships, and program admissions."
      },
      {
        icon: <Microscope className="w-8 h-8 text-celeste" />,
        title: "Literature Review",
        description: "Comprehensive literature reviews that analyze and synthesize existing research. We identify gaps, trends, and connections in the literature to position your research effectively."
      },
      {
        icon: <Brain className="w-8 h-8 text-celeste" />,
        title: "Case Studies",
        description: "In-depth case study analysis with practical insights and recommendations. Our experts apply theoretical frameworks to real-world scenarios for meaningful analysis."
      }
    ]
  },
  {
    title: "Specialized Subject Support",
    description: "Expert assistance across various academic disciplines",
    services: [
      {
        icon: <Code className="w-8 h-8 text-celeste" />,
        title: "Computer Science & Programming",
        description: "Specialized help with programming assignments, algorithm development, database design, and software engineering projects across various languages and frameworks."
      },
      {
        icon: <Calculator className="w-8 h-8 text-celeste" />,
        title: "Mathematics & Statistics",
        description: "Expert assistance with complex mathematical problems, statistical analysis, data interpretation, and quantitative research methods."
      },
      {
        icon: <Beaker className="w-8 h-8 text-celeste" />,
        title: "Sciences",
        description: "Comprehensive support for biology, chemistry, physics, and other scientific disciplines. From lab reports to research proposals and scientific papers."
      },
      {
        icon: <Briefcase className="w-8 h-8 text-celeste" />,
        title: "Business & Management",
        description: "Professional assistance with business plans, marketing strategies, financial analyses, case studies, and management reports."
      }
    ]
  }
];

// Service Process Steps
const processSteps = [
  {
    number: "01",
    title: "Submit Requirements",
    description: "Provide your assignment details, deadline, and any specific instructions."
  },
  {
    number: "02",
    title: "Expert Assignment",
    description: "We match your project with a qualified expert in the relevant field."
  },
  {
    number: "03",
    title: "Work in Progress",
    description: "Your expert works on your assignment with regular updates on progress."
  },
  {
    number: "04",
    title: "Quality Check",
    description: "Rigorous quality control ensures your work meets all requirements."
  },
  {
    number: "05",
    title: "Delivery & Revisions",
    description: "Receive your completed work with free revisions if needed."
  }
];

// Animation variants
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

const Services = () => {
  useScrollToTop(); // Use the new hook for scrolling

  useEffect(() => {
    // Update page title
    document.title = "Our Services | Grade Spark Academy";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#FEFEFE] to-[#A0EBEB]/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#A0EBEB]/30 rounded-full filter blur-3xl animate-float1 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#A0EBEB]/30 rounded-full filter blur-3xl animate-float2 opacity-50"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#A0EBEB]/50 rounded-full filter blur-xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-[#A0EBEB]/50 rounded-full filter blur-xl animate-float3 opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-[#151616] mb-6 leading-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#151616] to-[#A0EBEB] animate-gradient">Academic Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-[#151616]/80 max-w-3xl mx-auto"
            >
              <strong className="text-black font-bold">Grade Spark Academy</strong> provides comprehensive academic assistance tailored to your unique needs and goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-3">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#A0EBEB]/30 flex flex-col h-full hover:transform hover:translate-y-[-8px] relative overflow-hidden group"
                >
                  {/* Background decoration */}
                  <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#A0EBEB]/10 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                  <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-[#A0EBEB]/10 rounded-full transition-all duration-500 group-hover:scale-150"></div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-[#151616] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-5 text-[#A0EBEB] shadow-lg border-2 border-[#A0EBEB]/50 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -4, 0, 2, 0],
                          rotate: [0, 3, -3, 3, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3 + serviceIndex * 0.4,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold text-[#151616] mb-3">{service.title}</h3>
                      <p className="text-[#151616]/80 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Service Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#A0EBEB]/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our streamlined process ensures you receive high-quality academic assistance with minimal effort</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 relative">
            {/* Background connector - only visible on larger screens */}
            <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-celeste/50 to-transparent rounded-full z-0"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center justify-start relative px-4 py-6 group"
              >
                {/* Connector line with animation - only visible on larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-celeste/50 to-celeste/20 transform translate-x-1/2 z-0"></div>
                )}

                {/* Step number with enhanced styling - centered in all views */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-night text-celeste flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10 border-2 border-celeste/50 shadow-lg group-hover:shadow-celeste/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.number}
                </motion.div>

                {/* Step content with hover effect - centered text in all views */}
                <div className="text-center w-full group-hover:transform group-hover:translate-y-[-3px] transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-night">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-night text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-celeste/20 rounded-full filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-celeste/20 rounded-full filter blur-3xl animate-float2"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-celeste/30 rounded-full filter blur-xl animate-pulse"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-celeste"
            >
              Ready to Excel in Your Academic Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Get started with our professional academic services today
            </motion.p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-celeste text-night px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-celeste/50 transform hover:-translate-y-1"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes float1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, 15px) rotate(10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -10px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-5px, -10px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float1 {
          animation: float1 10s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 12s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;