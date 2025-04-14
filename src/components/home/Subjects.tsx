import { motion } from 'framer-motion';

const subjects = [
  {
    name: "Geography",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/globe-earth.gif?updatedAt=1732474210127",
    color: "color-1",
    alt: "Geographic concepts and global studies visualization"
  },
  {
    name: "History",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/history.gif?updatedAt=1732474210023",
    color: "color-2",
    alt: "Historical concepts and timeline visualization"
  },
  {
    name: "Biology",
    image: "https://ik.imagekit.io/studytomy/dna_biology.gif?updatedAt=1717609338343",
    color: "color-3",
    alt: "Depicting a double helix structure commonly associated with DNA, the animation breaks down its elements: The double helix structure represents the double-stranded DNA molecule, with each strand consisting of nucleotide sequences held together by hydrogen bonds between complementary nucleotide pairs."
  },
  {
    name: "Human Biology",
    image: "https://ik.imagekit.io/studytomy/human_biology.gif?updatedAt=1717608938761",
    color: "color-2",
    alt: "The animation depicts a double helix structure commonly associated with DNA, deoxyribonucleic acid."
  },
  {
    name: "Physics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Physics.gif?updatedAt=1717445522157",
    color: "color-3",
    alt: "Illustrates the process of cell division, which is a fundamental aspect of all living organisms."
  },
  {
    name: "Chemistry",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Chemistry.gif?updatedAt=1717445685976",
    color: "color-1",
    alt: "The GIF depicts the molecular structure and vibrations of a methane molecule (CH4)."
  },
  {
    name: "Language",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Language.gif?updatedAt=1717445835969",
    color: "color-2",
    alt: "Simplified representation of the concept of English language learning."
  },
  {
    name: "Literature",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Literature.gif?updatedAt=1717446027265",
    color: "color-3",
    alt: "Depicting a stack of books is a common symbol associated with learning, knowledge, and education."
  },
  {
    name: "Psychology",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Psychology.gif?updatedAt=1717446158250",
    color: "color-2",
    alt: "Represents the field of psychology, which is the scientific study of the mind and behavior."
  },
  {
    name: "Mathematics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Mathematics.gif?updatedAt=1717446227422",
    color: "color-3",
    alt: "Mathematical concepts and formulas visualization"
  },
  {
    name: "Business Studies",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Business_Studies.gif?updatedAt=1717446288822",
    color: "color-1",
    alt: "Depicting a seminar setting for business studies"
  },
  {
    name: "Accounting",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Accounting.gif?updatedAt=1717446366752",
    color: "color-2",
    alt: "Financial and accounting concepts visualization"
  },
  {
    name: "Economics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Economics.gif?updatedAt=1717446529182",
    color: "color-3",
    alt: "Economic concepts and market visualization"
  },
  {
    name: "Additional Maths",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Additional_Maths.gif?updatedAt=1717446609660",
    color: "color-1",
    alt: "Advanced mathematical concepts visualization"
  },
  {
    name: "Com. Science",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Computer_Science.gif?updatedAt=1717446689115",
    color: "color-2",
    alt: "Computer science and programming concepts"
  },
  {
    name: "Statistics",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Statistics.gif?updatedAt=1717446784304",
    color: "color-3",
    alt: "Statistical analysis and data visualization"
  },
  {
    name: "ICT",
    image: "https://ik.imagekit.io/studytomy/Studytomy_Information_and_Communications_Technology.gif?updatedAt=1717446901778",
    color: "color-1",
    alt: "Information and Communication Technology concepts"
  },
  {
    name: "Sociology",
    image: "https://ik.imagekit.io/studytomy/studytomy_sociology.gif?updatedAt=1717608364405",
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
                    <img 
                      src={subject.image} 
                      alt={subject.alt}
                      className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
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
