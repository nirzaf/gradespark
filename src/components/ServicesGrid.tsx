import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code,
  Edit,
  FileText,
  GraduationCap,
  PenTool,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const ServiceCard = ({
  icon,
  title,
  description,
  onClick = () => {},
}: ServiceCardProps) => {
  return (
    <Card className="flex flex-col h-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={onClick}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ServicesGridProps {
  onServiceClick?: (serviceTitle: string) => void;
}

const ServicesGrid = ({ onServiceClick = () => {} }: ServicesGridProps) => {
  const services = [
    {
      icon: <PenTool size={24} />,
      title: "Essay Writing",
      description:
        "Custom essays tailored to your requirements, ensuring originality and academic excellence.",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Dissertation Support",
      description:
        "Comprehensive assistance for your thesis or dissertation, from research to final submission.",
    },
    {
      icon: <Code size={24} />,
      title: "Technical Assignments",
      description:
        "Expert help with programming, mathematics, engineering, and other technical subjects.",
    },
    {
      icon: <FileText size={24} />,
      title: "Research Help",
      description:
        "Professional guidance with research papers, data analysis, and methodology development.",
    },
    {
      icon: <Edit size={24} />,
      title: "Editing Services",
      description:
        "Meticulous proofreading and editing to perfect your existing academic work.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Homework Assistance",
      description:
        "Timely support with regular coursework and assignments across all subjects.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Academic Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert assistance across a wide range of academic disciplines and
            assignment types.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => onServiceClick(service.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
