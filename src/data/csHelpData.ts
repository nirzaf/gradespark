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
    title: "Scientific computing assignment help",
    description: "This is a field that employs complex mathematics in conjunction with computer algorithms to solve problems. If doing this homework is a problem for you, contact us today and solve it in a flash!",
    icon: FaCalculator // Icon for calculation/math
  },
  {
    title: "Computer architecture and engineering (ARC) assignment help",
    description: "Do you want to design the very best computer system, like no one ever did? Impress your professors with what our experts will create and get that grade you've been eyeing!",
    icon: FaMicrochip // Icon for hardware/architecture
  },
  {
    title: "Operating systems and networking (OSNT) assignment help",
    description: "A computer network connects multiple systems to solve problems, just like how connecting with us will be the end of yours! Contact us today to get computer assignment help online from people who have practical experience in the field.",
    icon: FaNetworkWired // Icon for networking
  },
  {
    title: "Database management systems (DBMS) assignment help",
    description: "Database management systems can be a bit difficult to manage but contacting an expert software developer in the field is as easy as pie. We have premier experts in the field who will solve your problem sets as soon as possible.",
    icon: FaDatabase // Icon for databases
  },
  {
    title: "Data mining, machine learning, and natural computation assignment help",
    description: "Digging for data and information can be a strenuous task, but it doesn't have to be because you won't have to dig much at all to find the best data science help you can afford.",
    icon: FaBrain // Icon for AI/ML/data science
  },
  {
    title: "Model driven engineering assignment help",
    description: "Creating models can be very fun unless you're super strapped on time. Our experts, on the other hand, have all the time in the world to lend you a hand with computer science homework solutions.",
    icon: FaDraftingCompass // Icon for modeling/design
  },
  {
    title: "Computer programming languages and implementation assignment help",
    description: "Programmers make the world go around in today's highly digital world. Connect with the best experts in the field and get all the guidance you need to become the best programmer you can be!",
    icon: FaCode // Icon for programming
  },
  {
    title: "Graphics and visualization assignment help",
    description: "When you're in a tough place, it can be hard to visualize computer project homework help, but it's there if you need it. We are connected with thousands of experts in the field of computer graphics and data visualization, so these assignments can be completed in record time.",
    icon: FaPaintBrush // Icon for graphics/visualization
  },
  {
    title: "Software methodology and engineering assignment help",
    description: "To become an engineer is learning how to solve problems, and you can solve the one about cs homework help by reaching out to us! In exchange, you will get the very best grade available.",
    icon: FaGears // Icon for engineering/methodology
  },
];