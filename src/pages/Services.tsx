import { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesBenefits from '../components/services/ServicesBenefits';
import ServicesContent from '../components/services/ServicesContent';
import ParentsCorner from '../components/homeschool/ParentsCorner';
import HomeSchoolJoin from '../components/homeschool/HomeSchoolJoin';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <ServicesHero />
      <ServicesBenefits />
      <ServicesContent />
      <ParentsCorner />
      <HomeSchoolJoin />
    </div>
  );
};

export default Services;