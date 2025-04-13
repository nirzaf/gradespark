import { useEffect } from 'react';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import ExamBoardsSection from '../components/ExamBoardsSection';
import GroupDiscount from '../components/GroupDiscount';
import Testimonials from '../components/Testimonials';
import ImageGallery from '../components/ImageGallery';
import { trackVisitor } from '../lib/visitorTracking';
import AchievementCardComponent from '../components/AchievementCard';
import CoreServices from '../components/CoreServices';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      <div className="relative">
        <Hero />
        <AchievementCardComponent />
        <CoreServices />
        <HowItWorks />
        <Subjects />
        <WhyUs />
        <ImageGallery />
        <DoubtSection />
        <ExamBoardsSection />
        <GroupDiscount />
        <Testimonials />
      </div>
    </>
  );
}
