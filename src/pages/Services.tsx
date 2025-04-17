import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update page title
    document.title = "Our Services | Grade Spark Academy";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#FEFEFE] to-[#A0EBEB]/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#A0EBEB]/30 rounded-full filter blur-3xl animate-float1 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#A0EBEB]/30 rounded-full filter blur-3xl animate-float2 opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#151616] mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#151616] to-[#A0EBEB]">Academic Services</span>
            </h1>
            <p className="text-lg md:text-xl text-[#151616]/80 max-w-3xl mx-auto">
              <strong className="text-black font-bold">Grade Spark Academy</strong> provides comprehensive academic assistance tailored to your unique needs and goals.
            </p>
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
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A0EBEB]/30 flex flex-col h-full hover:transform hover:translate-y-[-5px]"
                >
                  <div className="flex items-start mb-4">
                    <motion.div
                      className="w-14 h-14 bg-[#151616] rounded-full flex items-center justify-center mr-4 text-[#A0EBEB] shadow-md border-2 border-[#A0EBEB]/50 flex-shrink-0"
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
                    <div>
                      <h3 className="text-xl font-semibold text-[#151616] mb-2">{service.title}</h3>
                      <p className="text-[#151616]/80">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Service Process */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-[#A0EBEB]/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-3">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our streamlined process ensures you receive high-quality academic assistance with minimal effort</p>
          </motion.div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-4 md:gap-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex-1 min-w-[250px] max-w-[300px] relative px-6 py-8"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-celeste/30 transform translate-x-1/2 z-0"></div>
                )}

                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-night text-celeste flex items-center justify-center text-2xl font-bold mb-4 mx-auto relative z-10 border-2 border-celeste/50">
                  {step.number}
                </div>

                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-night text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Excel in Your Academic Journey?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get started with our professional academic services today
            </p>
            <Link
              to="/contact"
              className="inline-block bg-celeste text-night px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition-colors duration-300"
            >
              Get Started
            </Link>
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
        .animate-float1 {
          animation: float1 10s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;