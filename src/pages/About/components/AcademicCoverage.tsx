import { motion } from 'framer-motion';
import { BookOpen, Brain, Calculator, Code, Beaker, Briefcase, Stethoscope, PenTool } from 'lucide-react';

interface SubjectCategoryProps {
  icon: React.ReactNode;
  title: string;
  subjects: string[];
  delay: number;
}

const SubjectCategory = ({ icon, title, subjects, delay }: SubjectCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="flex items-center mb-4">
      <div className="bg-celeste/10 p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <ul className="text-gray-600 space-y-2">
      {subjects.map((subject, index) => (
        <li key={index} className="flex items-center">
          <span className="w-1.5 h-1.5 bg-celeste rounded-full mr-2"></span>
          {subject}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function AcademicCoverage() {
  const categories = [
    {
      icon: <BookOpen className="w-6 h-6 text-celeste" />,
      title: "Humanities",
      subjects: ["History", "Literature", "Philosophy", "Art History", "Religious Studies", "Music"],
      delay: 0.1
    },
    {
      icon: <Brain className="w-6 h-6 text-celeste" />,
      title: "Social Sciences",
      subjects: ["Psychology", "Sociology", "Political Science", "Economics", "Anthropology", "Geography"],
      delay: 0.2
    },
    {
      icon: <Beaker className="w-6 h-6 text-celeste" />,
      title: "Natural Sciences",
      subjects: ["Biology", "Chemistry", "Physics", "Environmental Science", "Earth Science"],
      delay: 0.3
    },
    {
      icon: <PenTool className="w-6 h-6 text-celeste" />,
      title: "Engineering",
      subjects: ["Mechanical", "Electrical", "Civil", "Chemical", "Computer Engineering", "Aerospace"],
      delay: 0.4
    },
    {
      icon: <Briefcase className="w-6 h-6 text-celeste" />,
      title: "Business & Management",
      subjects: ["Marketing", "Finance", "Accounting", "Business Administration", "Human Resources", "Management"],
      delay: 0.5
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-celeste" />,
      title: "Health Sciences",
      subjects: ["Nursing", "Medicine", "Public Health", "Pharmacy", "Allied Health"],
      delay: 0.6
    },
    {
      icon: <Calculator className="w-6 h-6 text-celeste" />,
      title: "Mathematics & Statistics",
      subjects: ["Calculus", "Algebra", "Probability", "Statistics", "Data Analysis"],
      delay: 0.7
    },
    {
      icon: <Code className="w-6 h-6 text-celeste" />,
      title: "Computer Science",
      subjects: ["Programming", "Algorithms", "Databases", "Software Engineering", "Web Development"],
      delay: 0.8
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-black mb-4 text-center">Academic Coverage</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
        Our experts cover a vast array of academic disciplines. Find support for virtually any subject in your academic journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <SubjectCategory
            key={index}
            icon={category.icon}
            title={category.title}
            subjects={category.subjects}
            delay={category.delay}
          />
        ))}
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>Additional subjects available upon request. <a href="/contact" className="text-gray-700 hover:text-celeste"><strong>Contact us</strong></a> for more information.</p>
      </div>
    </div>
  );
}
