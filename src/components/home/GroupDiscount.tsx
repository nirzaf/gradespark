import { motion } from 'framer-motion';
import { Users, GraduationCap, Clock, Info } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Tooltip.Provider>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-lg relative min-h-[250px] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="text-celeste mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
      </div>
      <div className="mt-auto flex items-center gap-1">
        <p className="text-gray-400 text-[10px] italic">Terms & Conditions apply</p>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="text-gray-400 hover:text-gray-500 transition-colors">
              <Info className="w-3 h-3" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-gray-900 text-white px-4 py-2 rounded-md text-xs max-w-[250px] shadow-lg"
              sideOffset={5}
            >
              Discount rates apply to eligible assignments and are subject to academic requirements verification. Final discount amounts will be confirmed during order placement.
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </motion.div>
  </Tooltip.Provider>
);

export default function GroupDiscount() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Submissions",
      description: "Submit multiple assignments together with classmates and receive up to 25% discount on each project."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Package",
      description: "Bundle multiple assignments from the same course for comprehensive support and save up to 20% on total cost."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Advance Booking",
      description: "Plan ahead and save - receive special discounts when you book assistance for future assignments with flexible deadlines."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-night/5 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            <strong>Smart Solutions, Better Value</strong>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Maximize your academic success while minimizing costs with our special discount options for university students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
