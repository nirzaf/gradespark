import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming you have react-router-dom installed
import {
  BookOpen,
  PenTool,
  GraduationCap,
  FileText,
  BookMarked,
  Ghost
} from 'lucide-react'; // Ensure lucide-react is installed

// Define the ServicesHero component
const ServicesHero = () => {
  // Animation variants for the container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each child animation starting
        delayChildren: 0.3    // Initial delay before the first child starts animating
      }
    }
  };

  // Animation variants for individual service items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Start slightly lower and invisible
    visible: {
      y: 0, // Move to original position
      opacity: 1, // Fade in
      transition: { type: 'spring', stiffness: 100, damping: 10 } // Spring animation for a bouncy effect
    }
  };

  // Array containing data for each service item
  const serviceItems = [
    {
      icon: <BookOpen className="w-8 h-8" />, // Icon component
      title: "Custom Assignment Support",
      description: "Whether you're in college or working on a postgraduate degree, we provide tailored assistance for all types of assignments across academic levels."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Engaging Essay Crafting",
      description: "Need an impactful essay? We specialize in writing well-researched and compelling essays on any topic, helping your ideas stand out."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Thesis & Dissertation Expertise",
      description: "Tackle complex research projects with ease—our professionals can help with everything from writing detailed theses to crafting sharp dissertation proposals."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Personal Statement Writing",
      description: "Applying to a university or scholarship in Qatar? We'll help you create a powerful personal statement that highlights your strengths and aspirations."
    },
    {
      icon: <BookMarked className="w-8 h-8" />,
      title: "Collaborative Book Writing",
      description: "Have a story to tell? We'll bring your vision to life with professionally written content, turning your ideas into a publish-ready book."
    },
    {
      icon: <Ghost className="w-8 h-8" />,
      title: "Discreet Ghostwriting Solutions",
      description: "Need academic or professional content written on your behalf? We'll draft high-quality material for you while keeping your identity completely confidential."
    }
  ];

  return (
    // Main section container with relative positioning and background gradient
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 font-sans"> {/* Added font-sans */}
      {/* Background decorative elements with animations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* These divs create blurred, floating shapes for background texture */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full filter blur-3xl animate-float1 opacity-50"></div> {/* Adjusted color and opacity */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full filter blur-3xl animate-float2 opacity-50"></div> {/* Adjusted color and opacity */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-100/50 rounded-full filter blur-xl animate-pulse opacity-60"></div> {/* Adjusted color and opacity */}
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-100/50 rounded-full filter blur-xl animate-float3 opacity-60"></div> {/* Adjusted color and opacity */}
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Animated heading section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Initial state: invisible and slightly above
          animate={{ opacity: 1, y: 0 }}   // Animate to: visible and original position
          transition={{ duration: 0.8 }}    // Animation duration
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"> {/* Adjusted text size */}
            Expert Academic
            {/* Applying a gradient text effect */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"> Support Services</span> {/* Example gradient */}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"> {/* Adjusted text size */}
            <strong>Grade Spark Academy</strong> delivers comprehensive academic assistance tailored to your unique needs and goals.
          </p>
        </motion.div>

        {/* Grid container for service items with stagger animation */}
        <motion.div
          variants={containerVariants} // Apply container animation variants
          initial="hidden"            // Start in the 'hidden' state
          animate="visible"           // Animate to the 'visible' state
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Map through serviceItems array to render each service card */}
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}               // Unique key for each item
              variants={itemVariants}   // Apply item animation variants
              // ** UPDATED CLASSNAME FOR CENTERING **
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200/50 flex flex-col items-center text-center h-full" // Added items-center and text-center
            >
              {/* Container for the icon with hover and tap animations */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-4 text-white shadow-md" // Added shadow
                whileHover={{ scale: 1.1, rotate: 5 }} // Scale up and rotate slightly on hover
                whileTap={{ scale: 0.95 }}             // Scale down slightly on tap/click
              >
                {/* Inner div for the continuous icon animation */}
                <motion.div
                  animate={{
                    y: [0, -4, 0, 2, 0],      // Subtle vertical bounce
                    rotate: [0, 3, -3, 3, 0], // Gentle wobble
                    scale: [1, 1.05, 1],      // Slight pulse
                  }}
                  transition={{
                    duration: 3 + index * 0.4, // Vary duration slightly for each icon
                    repeat: Infinity,          // Repeat the animation forever
                    repeatType: "loop",        // Loop the animation smoothly
                    ease: "easeInOut",         // Use easing for smooth start and end
                    delay: index * 0.2         // Stagger the start of each icon's animation
                  }}
                >
                  {item.icon} {/* Render the actual icon component */}
                </motion.div>
              </motion.div>
              {/* Service title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3> {/* Adjusted font weight and color */}
              {/* Service description (flex-grow ensures it takes available space) */}
              <p className="text-gray-600 flex-grow">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated "Connect Now" button section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
          animate={{ opacity: 1, y: 0 }}   // Animate to: visible and original position
          transition={{ duration: 0.8, delay: 0.6 }} // Animation duration with a delay
          className="text-center"
        >
          {/* Link component acting as a button */}
          <Link
            to="/contact" // Destination path (ensure react-router-dom setup)
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" // Added gradient, hover effects, transition, shadow, and slight lift on hover
          >
            Connect Now
          </Link>
        </motion.div>
      </div>

      {/* Add CSS for animations if not using Tailwind plugins */}
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
        .animate-float1 {
          animation: float1 10s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 12s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 8s ease-in-out infinite;
        }
        /* Basic styles if Tailwind is not fully configured */
        body {
          font-family: sans-serif; /* Ensure a default sans-serif font */
        }
        .container {
           max-width: 1280px; /* Example max-width */
        }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        /* Add other basic Tailwind utility equivalents if needed */
      `}</style>
    </section>
  );
};

// Export the component for use in other parts of the application
export default ServicesHero;

// Helper component if Link is not available or needed
// const FakeLink = ({ to, children, className }) => (
//   <a href={to} className={className}>
//     {children}
//   </a>
// );
