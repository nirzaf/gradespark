import { motion } from 'framer-motion';
import '../../styles/subject-icons.css';

const subjects = [
  {
    name: "Geography",
    iconClass: "icon-geography",
    color: "color-1",
    alt: "Geographic concepts and global studies visualization"
  },
  {
    name: "History",
    iconClass: "icon-history",
    color: "color-2",
    alt: "Historical concepts and timeline visualization"
  },
  {
    name: "Biology",
    iconClass: "icon-biology",
    color: "color-3",
    alt: "Depicting a double helix structure commonly associated with DNA, the animation breaks down its elements: The double helix structure represents the double-stranded DNA molecule, with each strand consisting of nucleotide sequences held together by hydrogen bonds between complementary nucleotide pairs."
  },
  {
    name: "Human Biology",
    iconClass: "icon-human-bio",
    color: "color-2",
    alt: "The animation depicts a double helix structure commonly associated with DNA, deoxyribonucleic acid."
  },
  {
    name: "Physics",
    iconClass: "icon-physics",
    color: "color-3",
    alt: "Illustrates the process of cell division, which is a fundamental aspect of all living organisms."
  },
  {
    name: "Chemistry",
    iconClass: "icon-chemistry",
    color: "color-1",
    alt: "The GIF depicts the molecular structure and vibrations of a methane molecule (CH4)."
  },
  {
    name: "Language",
    iconClass: "icon-language",
    color: "color-2",
    alt: "Simplified representation of the concept of English language learning."
  },
  {
    name: "Literature",
    iconClass: "icon-literature",
    color: "color-3",
    alt: "Depicting a stack of books is a common symbol associated with learning, knowledge, and education."
  },
  {
    name: "Psychology",
    iconClass: "icon-psychology",
    color: "color-2",
    alt: "Represents the field of psychology, which is the scientific study of the mind and behavior."
  },
  {
    name: "Mathematics",
    iconClass: "icon-math",
    color: "color-3",
    alt: "Mathematical concepts and formulas visualization"
  },
  {
    name: "Business Studies",
    iconClass: "icon-business",
    color: "color-1",
    alt: "Depicting a seminar setting for business studies"
  },
  {
    name: "Accounting",
    iconClass: "icon-accounting",
    color: "color-2",
    alt: "Financial and accounting concepts visualization"
  },
  {
    name: "Economics",
    iconClass: "icon-economics",
    color: "color-3",
    alt: "Economic concepts and market visualization"
  },
  {
    name: "Additional Maths",
    iconClass: "icon-add-maths",
    color: "color-1",
    alt: "Advanced mathematical concepts visualization"
  },
  {
    name: "Com. Science",
    iconClass: "icon-cs",
    color: "color-2",
    alt: "Computer science and programming concepts"
  },
  {
    name: "Statistics",
    iconClass: "icon-stats",
    color: "color-3",
    alt: "Statistical analysis and data visualization"
  },
  {
    name: "ICT",
    iconClass: "icon-ict",
    color: "color-1",
    alt: "Information and Communication Technology concepts"
  },
  {
    name: "Sociology",
    iconClass: "icon-sociology",
    color: "color-2",
    alt: "Sociological concepts and human interaction visualization"
  }
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
            {[...subjects].sort((a, b) => a.name.localeCompare(b.name)).map((subject, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 w-full h-full flex flex-col items-center justify-center group">
                  <div className="relative mb-3 p-2 rounded-full bg-gradient-to-br from-night/5 to-celeste/10 group-hover:from-celeste/20 group-hover:to-celeste/30 transition-all duration-300">
                    <div
                      className={`icon-wrapper ${subject.iconClass} w-16 h-16 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                      aria-label={subject.alt}
                    >
                      {subject.iconClass === 'icon-accounting' && (
                        <div className="calculator">
                          <div className="screen"></div>
                          <div className="buttons">
                            <div className="button"></div>
                            <div className="button"></div>
                            <div className="button"></div>
                            <div className="button"></div>
                            <div className="button"></div>
                            <div className="button"></div>
                            <div className="button"></div>
                            <div className="button"></div>
                            <div className="button"></div>
                          </div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-add-maths' && (
                        <div className="graph-bg">
                          <div className="line"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-biology' && (
                        <div className="helix">
                          <div className="strand"></div>
                          <div className="strand"></div>
                          <div className="strand"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-business' && (
                        <div className="chart">
                          <div className="bar"></div>
                          <div className="bar"></div>
                          <div className="bar"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-chemistry' && (
                        <div className="beaker">
                          <div className="bubble"></div>
                          <div className="bubble"></div>
                          <div className="bubble"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-cs' && (
                        <div className="terminal">
                          <div className="prompt">&gt;</div>
                          <div className="cursor"></div>
                          <div className="line line1"></div>
                          <div className="line line2"></div>
                          <div className="line line3"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-economics' && (
                        <div className="arrow"></div>
                      )}
                      {subject.iconClass === 'icon-geography' && (
                        <div className="globe">
                          <div className="land land1"></div>
                          <div className="land land2"></div>
                          <div className="land land3"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-history' && (
                        <div className="hourglass">
                          <div className="glass"></div>
                          <div className="sand-top"></div>
                          <div className="sand-bottom"></div>
                          <div className="stream"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-human-bio' && (
                        <div className="heart"></div>
                      )}
                      {subject.iconClass === 'icon-ict' && (
                        <div className="network">
                          <div className="node node1"></div>
                          <div className="node node2"></div>
                          <div className="node node3"></div>
                          <div className="node node4"></div>
                          <div className="line line12"></div>
                          <div className="line line13"></div>
                          <div className="line line24"></div>
                          <div className="line line34"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-language' && (
                        <div>
                          <div className="bubble bubble1"></div>
                          <div className="bubble bubble2"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-literature' && (
                        <div className="book">
                          <div className="page left-page">
                            <div className="text-line"></div>
                            <div className="text-line short"></div>
                            <div className="text-line"></div>
                          </div>
                          <div className="page right-page">
                            <div className="text-line"></div>
                            <div className="text-line short"></div>
                            <div className="text-line"></div>
                          </div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-math' && (
                        <div className="pi"></div>
                      )}
                      {subject.iconClass === 'icon-physics' && (
                        <div className="atom">
                          <div className="nucleus"></div>
                          <div className="orbit orbit1">
                            <div className="electron"></div>
                          </div>
                          <div className="orbit orbit2">
                            <div className="electron"></div>
                          </div>
                          <div className="orbit orbit3">
                            <div className="electron"></div>
                          </div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-psychology' && (
                        <div className="brain">
                          <div className="lobe lobe1"></div>
                          <div className="lobe lobe2"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-sociology' && (
                        <div className="figures">
                          <div className="figure figure1"></div>
                          <div className="figure figure2"></div>
                          <div className="figure figure3"></div>
                        </div>
                      )}
                      {subject.iconClass === 'icon-stats' && (
                        <div className="curve">
                          <div className="axis"></div>
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
