import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Subjects from '../components/home/Subjects';
import WhyUs from '../components/home/WhyUs';
import DoubtSection from '../components/home/DoubtSection';
import GroupDiscount from '../components/home/GroupDiscount';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/home/FAQSection';
import CoreServices from '../components/home/CoreServices';
import HowItWorks from '../components/home/HowItWorks';
import AssuredQuality from '../components/home/AssuredQuality';
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