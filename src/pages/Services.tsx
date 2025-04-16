import { useEffect, lazy, Suspense } from 'react';
import ServicesHero from '../components/services/ServicesHero';

// Lazy load components for better performance
const ServicesBenefits = lazy(() => import('../components/services/ServicesBenefits'));
const TopTutors = lazy(() => import('../components/services/TopTutors'));
const QualityAssurance = lazy(() => import('../components/services/QualityAssurance'));
const QatarServices = lazy(() => import('../components/services/QatarServices'));

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <ServicesHero />
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <TopTutors />
        <ServicesBenefits />
        <QualityAssurance />
        <QatarServices />
      </Suspense>
    </div>
  );
};

export default Services;