import HeroSection from './About/components/HeroSection';
import MissionVision from './About/components/MissionVision';
import KeyFeatures from './About/components/KeyFeatures';
import QualityAssurance from './About/components/QualityAssurance';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <MissionVision />
        <KeyFeatures />
        <QualityAssurance />
      </div>
    </div>
  );
}