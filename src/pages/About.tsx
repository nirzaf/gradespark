import { Helmet } from 'react-helmet-async';
import useScrollToTop from '@/hooks/useScrollToTop'; // Import the new hook
import HeroSection from './About/components/HeroSection';
import MissionVision from './About/components/MissionVision';
import KeyFeatures from './About/components/KeyFeatures';
import QualityAssurance from './About/components/QualityAssurance';
import AcademicCoverage from './About/components/AcademicCoverage';

export default function About() {
  useScrollToTop(); // Use the new hook for scrolling

  return (
    <>
      <Helmet>
        <title>About Us | GradeSpark Academy - Expert Academic Support</title>
        <meta 
          name="description" 
          content="Learn about GradeSpark Academy's mission to help university students achieve academic excellence through expert tutoring, assignment assistance, and personalized academic support." 
        />
        <meta name="keywords" content="about gradespark, academic support, tutoring mission, expert tutors, university help, academic excellence" />
        <link rel="canonical" href="https://www.gradespark.com/about" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Us | GradeSpark Academy - Expert Academic Support" />
        <meta property="og:description" content="Learn about GradeSpark Academy's mission to help university students achieve academic excellence through expert tutoring, assignment assistance, and personalized academic support." />
        <meta property="og:url" content="https://www.gradespark.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.gradespark.com/images/og-about.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | GradeSpark Academy - Expert Academic Support" />
        <meta name="twitter:description" content="Learn about GradeSpark Academy's mission to help university students achieve academic excellence through expert tutoring, assignment assistance, and personalized academic support." />
        <meta name="twitter:image" content="https://www.gradespark.com/images/og-about.jpg" />
      </Helmet>
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <MissionVision />
          <KeyFeatures />
          <QualityAssurance />
          <AcademicCoverage />
        </div>
      </main>
    </>
  );
}