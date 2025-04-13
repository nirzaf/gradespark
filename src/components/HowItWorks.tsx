import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ClipboardList, UserCheck, LineChart, FileCheck } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step = ({ number, title, description, icon }: StepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <Card className="h-full bg-white border-2 hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <div className="text-primary text-xl font-bold">{number}</div>
          </div>
          <div className="text-primary mb-2">{icon}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
}

const HowItWorks = ({
  title = "How It Works",
  subtitle = "Our simple 4-step process makes getting academic help easy and stress-free",
}: HowItWorksProps) => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Place Your Order",
      description:
        "Fill out our simple form with your assignment details and requirements",
      icon: <ClipboardList className="h-6 w-6" />,
    },
    {
      number: 2,
      title: "Choose Your Expert",
      description:
        "Select from our qualified academic specialists who match your subject area",
      icon: <UserCheck className="h-6 w-6" />,
    },
    {
      number: 3,
      title: "Track Progress",
      description:
        "Stay updated on your assignment's progress and communicate directly with your expert",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      number: 4,
      title: "Receive Your Assignment",
      description:
        "Get your completed work with time for review and request revisions if needed",
      icon: <FileCheck className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
