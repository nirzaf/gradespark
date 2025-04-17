import React from 'react';
// Import icons from react-icons (you can choose different icons or sets)
import {
  FaCalculator, FaMicrochip, FaNetworkWired, FaDatabase,
  FaBrain, FaDraftingCompass, FaCode, FaPaintBrush
} from 'react-icons/fa'; // Using Font Awesome 5 icons
import { FaGears } from 'react-icons/fa6'; // Import FaGears from Font Awesome 6

// Update the interface to include an optional icon component
export interface CsDiscipline {
  title: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for React icon component
}

// Assign icons to each discipline
export const csDisciplines: CsDiscipline[] = [
  {
    title: "Scientific Computing",
    description: "Master complex algorithms and mathematical models with our expert guidance. Transform challenging computations into precise, elegant solutions.",
    icon: FaCalculator // Icon for calculation/math
  },
  {
    title: "Computer Architecture",
    description: "Optimize system designs and hardware configurations with our specialized expertise. Elevate your architecture projects to professional standards.",
    icon: FaMicrochip // Icon for hardware/architecture
  },
  {
    title: "Operating Systems & Networks",
    description: "Navigate OS concepts and network protocols with confidence. Our experts deliver solutions that demonstrate deep technical understanding.",
    icon: FaNetworkWired // Icon for networking
  },
  {
    title: "Database Management",
    description: "Perfect your database designs and queries with industry-standard approaches. Turn complex data structures into efficient, optimized systems.",
    icon: FaDatabase // Icon for databases
  },
  {
    title: "AI & Machine Learning",
    description: "Implement cutting-edge algorithms and models with precision. Our ML specialists help you achieve outstanding results in this competitive field.",
    icon: FaBrain // Icon for AI/ML/data science
  },
  {
    title: "Model-Driven Engineering",
    description: "Develop sophisticated models and frameworks with expert guidance. Transform abstract concepts into practical, implementable solutions.",
    icon: FaDraftingCompass // Icon for modeling/design
  },
  {
    title: "Programming Languages",
    description: "Master any programming paradigm with our specialized coding expertise. From syntax challenges to complex implementations, we deliver excellence.",
    icon: FaCode // Icon for programming
  },
  {
    title: "Graphics & Visualization",
    description: "Create stunning visual representations and graphics applications with professional techniques. Elevate your projects with expert assistance.",
    icon: FaPaintBrush // Icon for graphics/visualization
  },
  {
    title: "Software Engineering",
    description: "Apply industry best practices to your software development projects. Our experts help you create robust, maintainable, and efficient solutions.",
    icon: FaGears // Icon for engineering/methodology
  },
];