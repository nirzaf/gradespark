import React from 'react';
// Ensure the path to your data file is correct
import { csDisciplines, CsDiscipline } from '../../data/csHelpData';
import { motion } from 'framer-motion';
import '../../styles/cs-icons.css';

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
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-celeste/30 transition-all duration-300 flex flex-col items-center text-center h-full" // items-center for vertical centering, text-center for horizontal, h-full for equal height
              variants={itemVariants}
            >
              {/* Custom animated CS icons */}
              <div className="mb-6"> {/* Increased spacing below icon */}
                <div className="cs-icon-wrapper">
                  {discipline.title.includes("Scientific computing") && (
                    <div className="icon-scientific">
                      <div className="calculator">
                        <div className="display"></div>
                        <div className="keypad">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="key"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {discipline.title.includes("Computer architecture") && (
                    <div className="icon-architecture">
                      <div className="chip">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="circuit"></div>
                        ))}
                        <div className="pin pin-top" style={{ left: '25%' }}></div>
                        <div className="pin pin-top" style={{ left: '50%' }}></div>
                        <div className="pin pin-top" style={{ left: '75%' }}></div>
                        <div className="pin pin-right" style={{ top: '25%' }}></div>
                        <div className="pin pin-right" style={{ top: '50%' }}></div>
                        <div className="pin pin-right" style={{ top: '75%' }}></div>
                        <div className="pin pin-bottom" style={{ left: '25%' }}></div>
                        <div className="pin pin-bottom" style={{ left: '50%' }}></div>
                        <div className="pin pin-bottom" style={{ left: '75%' }}></div>
                        <div className="pin pin-left" style={{ top: '25%' }}></div>
                        <div className="pin pin-left" style={{ top: '50%' }}></div>
                        <div className="pin pin-left" style={{ top: '75%' }}></div>
                      </div>
                    </div>
                  )}

                  {discipline.title.includes("Operating systems") && (
                    <div className="icon-os">
                      <div className="network">
                        <div className="node node-1"></div>
                        <div className="node node-2"></div>
                        <div className="node node-3"></div>
                        <div className="node node-4"></div>
                        <div className="connection connection-vertical"></div>
                        <div className="connection connection-horizontal"></div>
                        <div className="packet packet-1"></div>
                        <div className="packet packet-2"></div>
                      </div>
                    </div>
                  )}

                  {discipline.title.includes("Database") && (
                    <div className="icon-database">
                      <div className="db-connector"></div>
                      <div className="db db-top"></div>
                      <div className="db db-middle"></div>
                      <div className="db db-bottom"></div>
                    </div>
                  )}

                  {discipline.title.includes("Data mining") && (
                    <div className="icon-ml">
                      <div className="brain">
                        <div className="hemisphere left-brain"></div>
                        <div className="hemisphere right-brain"></div>
                        <div className="neuron neuron-1"></div>
                        <div className="neuron neuron-2"></div>
                        <div className="neuron neuron-3"></div>
                        <div className="neuron neuron-4"></div>
                        <div className="neuron neuron-5"></div>
                        <div className="neuron neuron-6"></div>
                        <div className="connection connection-1"></div>
                        <div className="connection connection-2"></div>
                        <div className="connection connection-3"></div>
                      </div>
                    </div>
                  )}

                  {discipline.title.includes("Model driven") && (
                    <div className="icon-model">
                      <div className="blueprint">
                        <div className="grid-line grid-horizontal grid-h-1"></div>
                        <div className="grid-line grid-horizontal grid-h-2"></div>
                        <div className="grid-line grid-horizontal grid-h-3"></div>
                        <div className="grid-line grid-vertical grid-v-1"></div>
                        <div className="grid-line grid-vertical grid-v-2"></div>
                        <div className="grid-line grid-vertical grid-v-3"></div>
                        <div className="drawing-line drawing-line-1"></div>
                        <div className="drawing-line drawing-line-2"></div>
                      </div>
                    </div>
                  )}

                  {discipline.title.includes("Computer programming") && (
                    <div className="icon-programming">
                      <div className="editor">
                        <div className="window-controls">
                          <div className="control control-red"></div>
                          <div className="control control-yellow"></div>
                          <div className="control control-green"></div>
                        </div>
                        <div className="code-line">
                          <div className="code-segment keyword"></div>
                        </div>
                        <div className="code-line">
                          <div className="indent"></div>
                          <div className="code-segment variable"></div>
                        </div>
                        <div className="code-line">
                          <div className="indent"></div>
                          <div className="code-segment string"></div>
                        </div>
                        <div className="code-line">
                          <div className="code-segment keyword"></div>
                        </div>
                        <div className="cursor"></div>
                      </div>
                    </div>
                  )}

                  {discipline.title.includes("Graphics") && (
                    <div className="icon-graphics">
                      <div className="canvas">
                        <div className="shape circle"></div>
                        <div className="shape square"></div>
                        <div className="shape triangle"></div>
                        <div className="brush-stroke"></div>
                      </div>
                    </div>
                  )}

                  {discipline.title.includes("Software methodology") && (
                    <div className="icon-software">
                      <div className="gear gear-large"></div>
                      <div className="gear gear-small"></div>
                      <div className="process-arrow"></div>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-night"> {/* Larger title with more spacing */}
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