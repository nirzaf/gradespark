import { useEffect } from 'react';
import HeroSection from './About/components/HeroSection';
import MissionVision from './About/components/MissionVision';
import KeyFeatures from './About/components/KeyFeatures';
import QualityAssurance from './About/components/QualityAssurance';
import AcademicCoverage from './About/components/AcademicCoverage';

export default function About() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update page title
    document.title = "About Us | Grade Spark Academy";
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <MissionVision />
        <KeyFeatures />
        <QualityAssurance />
        <AcademicCoverage />
      </div>
    </div>
  );
}