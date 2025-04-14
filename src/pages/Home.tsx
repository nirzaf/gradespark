import { useEffect } from 'react';
import Hero from '../components/Hero';
import Subjects from '../components/Subjects';
import WhyUs from '../components/WhyUs';
import DoubtSection from '../components/DoubtSection';
import GroupDiscount from '../components/GroupDiscount';
import Testimonials from '../components/Testimonials';

import { trackVisitor } from '../lib/visitorTracking';
import CoreServices from '../components/CoreServices';
import HowItWorks from '../components/HowItWorks';
import AssuredQuality from '../components/AssuredQuality';

export default function Home() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      <div className="relative">
        <Hero />
        <CoreServices />
        <HowItWorks />
        <AssuredQuality />
        <Subjects />
        <WhyUs />
        <DoubtSection />
        <GroupDiscount />
        <Testimonials />
      </div>
    </>
  );
}
