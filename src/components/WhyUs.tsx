import { motion } from 'framer-motion';
import { Shield, Users, UserCircle, Clock, GraduationCap, FileText } from 'lucide-react';
import { useState } from 'react';
import '../styles/WhyUs.css';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
}

const WhyUsCard = ({ icon, title, shortDesc, longDesc }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsFlipped(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsFlipped(false);
  };

  return (
    <motion.div
      className="relative h-[300px] w-full perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      initial="front"
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center text-center">
            <div className="text-[#F77F00] mb-4">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-[#003049] mb-2">{title}</h3>
            <p className="text-gray-600">{shortDesc}</p>
            <span className="md:hidden text-xs text-gray-400 mt-4">Tap to learn more</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-[#003049] rounded-xl p-6 shadow-lg flex items-center justify-center text-center">
            <p className="text-white text-sm leading-relaxed">{longDesc}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const cards: CardProps[] = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "100% Original Content",
    shortDesc: "Plagiarism-free and AI-free work",
    longDesc: "We guarantee 100% original, plagiarism-free content created by our expert writers. Every assignment undergoes rigorous quality checks to ensure authenticity and adherence to academic standards, giving you confidence in the work you submit."
  },
  {
    icon: <UserCircle className="w-12 h-12" />,
    title: "Strict Confidentiality",
    shortDesc: "Your privacy is our priority",
    longDesc: "We maintain industry-level encryption and strict privacy policies to ensure your personal information and academic work remain completely confidential. Your trust is important to us, and we're committed to protecting your privacy at every step."
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "On-Time Delivery",
    shortDesc: "Never miss a deadline again",
    longDesc: "We understand the importance of deadlines in academic success. Our service guarantees timely delivery of your assignments, even with tight timeframes, allowing you to review your work and request revisions before submission."
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Expert Academic Writers",
    shortDesc: "MA/PhD qualified professionals",
    longDesc: "Our team consists of highly qualified writers with advanced degrees in their respective fields. Each expert undergoes a rigorous selection process to ensure they have the knowledge and skills to deliver exceptional academic work tailored to your requirements."
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Free Unlimited Revisions",
    shortDesc: "Refinements until you're satisfied",
    longDesc: "We offer free unlimited revisions within a specified period after delivery, ensuring your assignment meets all your requirements and expectations. Our commitment is to your complete satisfaction with the final product."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "24/7 Support",
    shortDesc: "Always available when you need us",
    longDesc: "Our dedicated support team is available 24/7 to address your questions and concerns. Whether you need assistance with placing an order, tracking progress, or requesting revisions, we're here to provide prompt and helpful support throughout your academic journey."
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#003049]">Why Choose Us?</h2>
        <p className="text-xl text-center text-gray-600 mb-16">Trust Grade Spark Academy to help you achieve academic excellence</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <WhyUsCard
              key={index}
              icon={card.icon}
              title={card.title}
              shortDesc={card.shortDesc}
              longDesc={card.longDesc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}