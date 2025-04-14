import { motion } from 'framer-motion';

const contentSections = [
  {
    title: "Homework & Coursework Help",
    description: "Get expert assistance with your daily assignments and coursework. Our experienced tutors provide clear explanations and guidance to help you understand concepts better and stay on track with your studies.",
    image: "https://ik.imagekit.io/quadrate/Studytomy/photo-1610484826917-0f101a7bf7f4_q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1731864216199",
    imageAlt: "Homework Assistance",
    reverse: false,
    bgWhite: true
  },
  {
    title: "Technical Assignment Support",
    description: "Struggling with complex technical assignments? Our specialists provide comprehensive support for programming, mathematics, engineering, and other technical subjects, ensuring you master the concepts while meeting deadlines.",
    image: "https://ik.imagekit.io/quadrate/Studytomy/photo-1585314540237-13cb52fe9998_q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1731864285260",
    imageAlt: "Technical Support",
    reverse: true,
    bgWhite: false
  },
  {
    title: "Research & Writing Assistance",
    description: "From research papers to dissertations, our academic experts help you develop well-structured, thoroughly researched documents that meet the highest academic standards.",
    image: "https://ik.imagekit.io/quadrate/Studytomy/photo-1610484826625-ac2be7f1c8c1_q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA_3D_3D?updatedAt=1731864243622",
    imageAlt: "Research Assistance",
    reverse: false,
    bgWhite: false
  }
];

const ServicesContent = () => {
  return (
    <>
      {contentSections.map((section, index) => (
        <section key={index} className={`py-20 ${section.bgWhite ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`space-y-6 order-1 ${section.reverse ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                <p className="text-gray-600">{section.description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`order-2 ${section.reverse ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <img 
                  src={section.image}
                  alt={section.imageAlt}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServicesContent;