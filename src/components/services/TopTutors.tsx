import { motion } from 'framer-motion';
import { Star, Award, Trophy, Users } from 'lucide-react';

const tutorStats = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: Award,
    value: "1000+",
    label: "Certified Tutors",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Success Rate",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Happy Students",
    color: "bg-purple-50 text-purple-600"
  }
];

const TopTutors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Top-Rated Tutors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who achieve academic excellence with our expert tutors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutorStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <span className="text-3xl font-bold mb-2 block">{stat.value}</span>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTutors;