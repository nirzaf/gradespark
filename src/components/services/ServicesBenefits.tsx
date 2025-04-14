import { motion } from 'framer-motion';
import { Clock, GraduationCap, CheckCircle, Brain } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock academic assistance.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Brain,
    title: "Expert Guidance",
    description: "Learn from qualified tutors with extensive experience in their subjects.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Guaranteed high-quality work that meets academic standards.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Coverage",
    description: "Support for all subjects and academic levels.",
    color: "bg-green-50 text-green-600"
  }
];

const ServicesBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBenefits;