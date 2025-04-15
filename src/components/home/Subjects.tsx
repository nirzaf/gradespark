import { motion } from 'framer-motion';
import '../../styles/subject-icons.css';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

// Subject data (ensure iconClass matches CSS and React conditional rendering)
const subjects = [
  { name: "Geography", iconClass: "icon-geography", color: "color-1", alt: "Geographic concepts and global studies visualization" },
  { name: "History", iconClass: "icon-history", color: "color-2", alt: "Historical concepts and timeline visualization" },
  { name: "Biology", iconClass: "icon-biology", color: "color-3", alt: "Animated DNA double helix structure" },
  { name: "Human Biology", iconClass: "icon-human-bio", color: "color-2", alt: "Animated pulsing heart with ECG line" },
  { name: "Physics", iconClass: "icon-physics", color: "color-3", alt: "Animated atom with nucleus and orbiting electrons" },
  { name: "Chemistry", iconClass: "icon-chemistry", color: "color-1", alt: "Animated beaker with bubbling liquid" },
  { name: "Language", iconClass: "icon-language", color: "color-2", alt: "Animated speech bubbles representing language" },
  { name: "Literature", iconClass: "icon-literature", color: "color-3", alt: "Animated book with turning pages" },
  { name: "Psychology", iconClass: "icon-psychology", color: "color-2", alt: "Animated brain halves with firing synapses" },
  { name: "Mathematics", iconClass: "icon-math", color: "color-3", alt: "Animated Pi symbol with orbiting numbers" },
  { name: "Business Studies", iconClass: "icon-business", color: "color-1", alt: "Animated growing bar chart" },
  { name: "Accounting", iconClass: "icon-accounting", color: "color-2", alt: "Animated calculator with changing numbers" },
  { name: "Economics", iconClass: "icon-economics", color: "color-3", alt: "Animated pulsing dollar sign with floating coins" },
  { name: "Additional Maths", iconClass: "icon-add-maths", color: "color-1", alt: "Animated graph with drawing curve" },
  { name: "Computer Science", iconClass: "icon-cs", color: "color-2", alt: "Animated terminal window with typing code" },
  { name: "Statistics", iconClass: "icon-stats", color: "color-3", alt: "Animated bell curve with plotting data points" },
  { name: "ICT", iconClass: "icon-ict", color: "color-1", alt: "Animated network grid with nodes and data packets" },
  { name: "Sociology", iconClass: "icon-sociology", color: "color-2", alt: "Animated interacting figures" }
];

const Subjects = () => {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Helper function to generate span elements for CS icon
  const renderSpans = (text: string) => {
    return text.split('').map((char: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => <span key={index}>{char}</span>);
  };


  return (
    <>
      <section className="py-20 bg-gradient-to-b from-night/5 via-white to-celeste/10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-celeste/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-celeste/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Academic Expertise</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our team of qualified professionals offers assistance across a wide range of academic disciplines
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Sort subjects alphabetically before mapping */}
            {[...subjects].sort((a, b) => a.name.localeCompare(b.name)).map((subject) => (
              <motion.div
                key={subject.name} // Use subject name or a unique ID if available
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 w-full h-full flex flex-col items-center justify-center group">
                  <div className="relative mb-3 p-2 rounded-full bg-gradient-to-br from-night/5 to-celeste/10 group-hover:from-celeste/20 group-hover:to-celeste/30 transition-all duration-300">
                    {/* Icon Wrapper - applies the specific icon class */}
                    <div
                      className={`icon-wrapper ${subject.iconClass} w-16 h-16 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                      aria-label={subject.alt}
                    >
                      {/* Conditional Rendering based on iconClass - MUST MATCH CSS STRUCTURE */}

                      {/* --- Accounting --- */}
                      {subject.iconClass === 'icon-accounting' && (
                        <div className="calculator-body">
                          <div className="screen"></div>
                          <div className="buttons">
                            {/* Render 12 calculator buttons */}
                            {Array.from({ length: 12 }).map((_, i) => <div key={i} className="button"></div>)}
                          </div>
                        </div>
                      )}

                      {/* --- Additional Maths --- */}
                      {subject.iconClass === 'icon-add-maths' && (
                        <div className="graph-area">
                          <svg className="curve" viewBox="0 0 60 60" preserveAspectRatio="none">
                            {/* Adjusted path data to fit viewBox better */}
                            <path d="M0,58 C20,40 40,10 60,30" />
                          </svg>
                        </div>
                      )}

                      {/* --- Biology --- */}
                      {subject.iconClass === 'icon-biology' && (
                        <div className="dna-container">
                          <div className="strand-group">
                            <div className="strand s1"></div>
                            <div className="strand s2"></div>
                            {/* Render 5 base pairs */}
                            {Array.from({ length: 5 }).map((_, i) => <div key={i} className="pair"></div>)}
                          </div>
                        </div>
                      )}

                      {/* --- Business Studies --- */}
                      {subject.iconClass === 'icon-business' && (
                        <div className="chart-container">
                          {/* Render 4 bars */}
                          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="bar"></div>)}
                        </div>
                      )}

                      {/* --- Chemistry --- */}
                      {subject.iconClass === 'icon-chemistry' && (
                        <div className="beaker-container">
                          <div className="beaker-glass">
                            <div className="liquid-surface">
                              {/* Render 4 bubbles */}
                              {Array.from({ length: 4 }).map((_, i) => <div key={i} className="bubble"></div>)}
                            </div>
                          </div>
                          <div className="beaker-top"></div>
                        </div>
                      )}

                      {/* --- Computer Science --- */}
                      {subject.iconClass === 'icon-cs' && (
                        <div className="terminal-window">
                          <div className="window-buttons">
                            <div className="window-button btn-red"></div>
                            <div className="window-button btn-yellow"></div>
                            <div className="window-button btn-green"></div>
                          </div>
                          <div className="code-area">
                            {/* Lines need spans for the typing animation */}
                            <div className="code-line">{renderSpans('$ npm install')}</div>
                            <div className="code-line">{renderSpans('$ cd src')}</div>
                            <div className="code-line">{renderSpans('$ node index.js')}</div>
                            {/* Add more lines if needed in CSS */}
                            <div className="cursor"></div>
                          </div>
                        </div>
                      )}

                      {/* --- Economics --- */}
                      {subject.iconClass === 'icon-economics' && (
                        // Note: CSS uses chart-container, ensure consistency if needed
                        <div className="chart-container">
                          <div className="dollar-symbol"></div>
                          <div className="glow-circle"></div>
                          {/* Render 7 coins */}
                          {Array.from({ length: 7 }).map((_, i) => <div key={i} className={`coin coin${i + 1}`}></div>)}
                        </div>
                      )}

                      {/* --- Geography - Premium 3D Globe --- */}
                      {subject.iconClass === 'icon-geography' && (
                        <div className="globe-container">
                          {/* Atmospheric Glow */}
                          <div className="atmosphere"></div>
                          
                          {/* 3D Globe with Continents */}
                          <div className="globe-sphere">
                            {/* Continents with 3D Relief Effect */}
                            <div className="continent c1"></div>
                            <div className="continent c2"></div>
                            <div className="continent c3"></div>
                            
                            {/* 3D Grid System */}
                            <div className="grid-line grid-line-lat1"></div>
                            <div className="grid-line grid-line-lat2"></div>
                            <div className="grid-line grid-line-lat3"></div>
                            <div className="grid-line grid-line-lon1"></div>
                            <div className="grid-line grid-line-lon2"></div>
                            <div className="grid-line grid-line-lon3"></div>
                          </div>
                          
                          {/* Orbiting Satellites */}
                          <div className="orbit orbit1">
                            <div className="satellite"></div>
                          </div>
                          <div className="orbit orbit2">
                            <div className="satellite"></div>
                          </div>
                          
                          {/* Cloud Effects */}
                          <div className="cloud cloud1"></div>
                          <div className="cloud cloud2"></div>
                          <div className="cloud cloud3"></div>
                          
                          {/* Metallic Stand */}
                          <div className="globe-stand"></div>
                        </div>
                      )}

                      {/* --- History --- */}
                      {subject.iconClass === 'icon-history' && (
                        <div className="hourglass-container">
                          <div className="hourglass-body">
                            {/* Frame elements */}
                            <div className="hg-frame hg-top"></div>
                            <div className="hg-frame hg-bottom"></div>
                            <div className="hg-post hg-post-left"></div>
                            <div className="hg-post hg-post-right"></div>
                            {/* Glass and Sand elements */}
                            <div className="glass-container">
                              <div className="glass-bulb glass-top"></div>
                              <div className="glass-bulb glass-bottom"></div>
                              <div className="sand sand-pile-top"></div>
                              <div className="sand sand-pile-bottom"></div>
                              <div className="sand sand-stream"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* --- Human Biology --- */}
                      {subject.iconClass === 'icon-human-bio' && (
                        <div className="heart-container">
                          <div className="heart-shape"></div>
                          <div className="ecg-line">
                            <div className="ecg-path"></div>
                          </div>
                        </div>
                      )}

                      {/* --- ICT --- */}
                      {subject.iconClass === 'icon-ict' && (
                        // CSS uses network-grid, ensure consistency
                        <div className="network-grid">
                          <div className="node node-center"></div>
                          <div className="node node-tl"></div>
                          <div className="node node-tr"></div>
                          <div className="node node-bl"></div>
                          <div className="node node-br"></div>
                          <div className="connection conn-c-tl"></div>
                          <div className="connection conn-c-tr"></div>
                          <div className="connection conn-c-bl"></div>
                          <div className="connection conn-c-br"></div>
                          {/* Add more connections if defined in CSS */}
                          <div className="packet packet1"></div>
                          <div className="packet packet2"></div>
                          {/* Add more packets if defined in CSS */}
                        </div>
                      )}

                      {/* --- Language --- */}
                      {subject.iconClass === 'icon-language' && (
                        <div className="bubble-container">
                          <div className="bubble-shape bubble1"></div>
                          <div className="bubble-shape bubble2"></div>
                        </div>
                      )}

                      {/* --- Literature --- */}
                      {subject.iconClass === 'icon-literature' && (
                        // CSS uses book-cover directly inside icon-literature
                        <div className="book-cover">
                          {/* Render 4 pages */}
                          {Array.from({ length: 4 }).map((_, i) => <div key={i} className={`page page${i + 1}`}></div>)}
                        </div>
                      )}

                      {/* --- Mathematics --- */}
                      {subject.iconClass === 'icon-math' && (
                        <div className="pi-container">
                          <div className="pi-symbol">π</div>
                          {/* Render 5 orbiting numbers */}
                          {Array.from({ length: 5 }).map((_, i) => {
                            const numbers = ['3', '1', '4', '1', '5'];
                            return <div key={i} className={`orbiting-num num${i + 1}`}>{numbers[i]}</div>;
                          })}
                        </div>
                      )}

                      {/* --- Physics --- */}
                      {subject.iconClass === 'icon-physics' && (
                        // CSS uses atom-core, ensure consistency
                        <div className="atom-core">
                          <div className="nucleus"></div>
                          {/* Render 3 orbits */}
                          {Array.from({ length: 3 }).map((_, i) => <div key={i} className={`orbit orbit${i + 1}`}></div>)}
                          {/* Render 3 electrons */}
                          {Array.from({ length: 3 }).map((_, i) => <div key={i} className={`electron electron${i + 1}`}></div>)}
                        </div>
                      )}

                      {/* --- Psychology --- */}
                      {subject.iconClass === 'icon-psychology' && (
                        <div className="brain-container">
                          <div className="brain-half left"></div>
                          <div className="brain-half right"></div>
                          {/* Render 4 synapses */}
                          {Array.from({ length: 4 }).map((_, i) => <div key={i} className={`synapse synapse${i + 1}`}></div>)}
                        </div>
                      )}

                      {/* --- Sociology --- */}
                      {subject.iconClass === 'icon-sociology' && (
                        <div className="figure-group">
                          {/* Render 4 figures */}
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className={`figure figure${i + 1}`}>
                              <div className="figure-head"></div>
                              <div className="figure-body"></div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* --- Statistics --- */}
                      {subject.iconClass === 'icon-stats' && (
                        <div className="stats-container">
                          <div className="axis-x"></div>
                          <div className="axis-y"></div>
                          <div className="bell-curve">
                            <svg viewBox="0 0 65 34" preserveAspectRatio="none">
                              {/* Path adjusted slightly for viewBox */}
                              <path d="M0,33 C10,33 15,5 32.5,5 S55,33 65,33" />
                            </svg>
                          </div>
                          {/* Render data points with inline style for --x-pos */}
                          {/* Example positions - adjust as needed */}
                          <div className="data-point point1" style={{ '--x-pos': 0.2, animationDelay: '0.1s' }}></div>
                          <div className="data-point point2" style={{ '--x-pos': 0.5, animationDelay: '0.5s' }}></div>
                          <div className="data-point point3" style={{ '--x-pos': 0.8, animationDelay: '0.9s' }}></div>
                          <div className="data-point point4" style={{ '--x-pos': 0.35, animationDelay: '1.3s' }}></div>
                          <div className="data-point point5" style={{ '--x-pos': 0.65, animationDelay: '1.7s' }}></div>
                        </div>
                      )}

                    </div>
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-celeste/10 blur-xl rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-center text-night font-medium text-sm sm:text-base">{subject.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional note */}
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>Additional subjects available upon request. <a href="/contact" className="text-celeste hover:underline">Contact us</a> for more information.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subjects;
