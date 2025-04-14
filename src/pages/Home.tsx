import { useEffect } from 'react';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import GroupDiscount from '../components/GroupDiscount';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import CoreServices from '../components/CoreServices';
import HowItWorks from '../components/HowItWorks';
import AssuredQuality from '../components/AssuredQuality';
// Import the new component - adjust the path if your file structure is different
import ComputerScienceHelp from '../components/home/ComputerScienceHelp';

import { trackVisitor } from '../lib/visitorTracking';

export default function Home() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      {/* Using a fragment <></> is fine, or you can use a div if needed */}
      <div className="relative overflow-x-hidden"> {/* Added overflow-x-hidden for safety */}
        <Hero />
        <CoreServices />
        <HowItWorks />
        <ComputerScienceHelp />
        <AssuredQuality />
        <Subjects />
        <WhyUs />
        <DoubtSection />
        <GroupDiscount />
        <Testimonials />
        <FAQSection />
      </div>
    </>
  );
}