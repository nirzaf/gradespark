import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Academic Integrity",
    description: "Our services strictly adhere to academic integrity guidelines, ensuring original and ethical content.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Your personal information and academic work are protected with enterprise-grade security measures.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: FileCheck,
    title: "Quality Control",
    description: "Multi-level review process ensures the highest quality of academic assistance and support.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We guarantee on-time delivery for all assignments with our efficient workflow system.",
    color: "bg-pink-50 text-pink-600"
  }
];

const QualityAssurance = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Quality & Security Assured</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of academic quality while ensuring your data security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;