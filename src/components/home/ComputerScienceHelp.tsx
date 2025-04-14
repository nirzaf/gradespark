import React from 'react';
// Ensure the path to your data file is correct
import { csDisciplines, CsDiscipline } from '../../data/csHelpData';
import { motion } from 'framer-motion';

const ComputerScienceHelp: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-night mb-4">
            We Can Help You With Computer Science Homework
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            For aspiring computer engineers, CS homework help is readily available. Our top specialists provide affordable, comprehensive support for all your needs.
          </p>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Explore the diverse computer science disciplines we cover:
          </p>
        </motion.div>

        {/* Disciplines Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {csDisciplines.map((discipline: CsDiscipline, index: number) => (
            <motion.div
              key={index}
              // Added text-center to center icon, title, and description within the card
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-celeste/30 transition-all duration-300 flex flex-col items-center text-center" // items-center for vertical centering if needed, text-center for horizontal
              variants={itemVariants}
            >
              {/* Render the icon if it exists */}
              {discipline.icon && (
                <div className="mb-4"> {/* Spacing below icon */}
                  {/* Use the icon component from data. Style it here. */}
                  <discipline.icon className="text-4xl text-celeste" /> {/* Icon size and color */}
                </div>
              )}

              <h3 className="text-xl font-semibold mb-3 text-night"> {/* Title remains dark for contrast */}
                {discipline.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {discipline.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComputerScienceHelp;