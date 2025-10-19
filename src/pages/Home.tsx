import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLazyLoad } from '../hooks/useLazyLoad';

// Above-the-fold components (load immediately)
import Hero from '../components/home/Hero';
import CoreServices from '../components/home/CoreServices';
import HowItWorks from '../components/home/HowItWorks';

// Below-the-fold components (lazy load)
const ComputerScienceHelp = lazy(() => import('../components/home/ComputerScienceHelp'));
const AssuredQuality = lazy(() => import('../components/home/AssuredQuality'));
const Subjects = lazy(() => import('../components/home/Subjects'));
const WhyUs = lazy(() => import('../components/home/WhyUs'));
const DoubtSection = lazy(() => import('../components/home/DoubtSection'));
const GroupDiscount = lazy(() => import('../components/home/GroupDiscount'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const FAQSection = lazy(() => import('../components/home/FAQSection'));

// Lightweight loading placeholder
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-celeste"></div>
  </div>
);

export default function Home() {
  // Intersection Observer hooks for each lazy-loaded section
  const { ref: computerScienceRef, isVisible: computerScienceVisible } = useLazyLoad({
    rootMargin: '200px' // Start loading 200px before component enters viewport
  });
  
  const { ref: assuredQualityRef, isVisible: assuredQualityVisible } = useLazyLoad({
    rootMargin: '200px'
  });
  
  const { ref: subjectsRef, isVisible: subjectsVisible } = useLazyLoad({
    rootMargin: '200px'
  });
  
  const { ref: whyUsRef, isVisible: whyUsVisible } = useLazyLoad({
    rootMargin: '200px'
  });
  
  const { ref: doubtSectionRef, isVisible: doubtSectionVisible } = useLazyLoad({
    rootMargin: '200px'
  });
  
  const { ref: groupDiscountRef, isVisible: groupDiscountVisible } = useLazyLoad({
    rootMargin: '200px'
  });
  
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useLazyLoad({
    rootMargin: '200px'
  });
  
  const { ref: faqRef, isVisible: faqVisible } = useLazyLoad({
    rootMargin: '200px'
  });

  return (
    <>
      <Helmet>
        <title>GradeSpark Academy | Expert Academic Help & Tutoring Services</title>
        <meta 
          name="description" 
          content="Get expert academic help from qualified tutors at GradeSpark Academy. We provide assignment assistance, tutoring, and academic support across all subjects for university students." 
        />
        <meta name="keywords" content="academic help, tutoring, assignment assistance, university support, expert tutors, academic writing, homework help" />
        <link rel="canonical" href="https://www.gradespark.com/" />
        
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="GradeSpark Academy | Expert Academic Help & Tutoring Services" />
        <meta property="og:description" content="Get expert academic help from qualified tutors at GradeSpark Academy. We provide assignment assistance, tutoring, and academic support across all subjects for university students." />
        <meta property="og:url" content="https://www.gradespark.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.gradespark.com/images/og-home.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GradeSpark Academy | Expert Academic Help & Tutoring Services" />
        <meta name="twitter:description" content="Get expert academic help from qualified tutors at GradeSpark Academy. We provide assignment assistance, tutoring, and academic support across all subjects for university students." />
        <meta name="twitter:image" content="https://www.gradespark.com/images/og-home.jpg" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "GradeSpark Academy",
            "url": "https://www.gradespark.com",
            "logo": "https://www.gradespark.com/logo.png",
            "description": "Expert academic help and tutoring services for university students across all subjects",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "QA"
            },
            "sameAs": [
              "https://www.facebook.com/gradespark",
              "https://www.twitter.com/gradespark",
              "https://www.linkedin.com/company/gradespark"
            ]
          })}
        </script>
      </Helmet>
      <main className="relative overflow-x-hidden">
        {/* Above-the-fold content loads immediately */}
        <Hero />
        <CoreServices />
        <HowItWorks />
        
        {/* Below-the-fold content lazy loads */}
        <div ref={computerScienceRef}>
          {computerScienceVisible && (
            <Suspense fallback={<SectionLoader />}>
              <ComputerScienceHelp />
            </Suspense>
          )}
        </div>
        
        <div ref={assuredQualityRef}>
          {assuredQualityVisible && (
            <Suspense fallback={<SectionLoader />}>
              <AssuredQuality />
            </Suspense>
          )}
        </div>
        
        <div ref={subjectsRef}>
          {subjectsVisible && (
            <Suspense fallback={<SectionLoader />}>
              <Subjects />
            </Suspense>
          )}
        </div>
        
        <div ref={whyUsRef}>
          {whyUsVisible && (
            <Suspense fallback={<SectionLoader />}>
              <WhyUs />
            </Suspense>
          )}
        </div>
        
        <div ref={doubtSectionRef}>
          {doubtSectionVisible && (
            <Suspense fallback={<SectionLoader />}>
              <DoubtSection />
            </Suspense>
          )}
        </div>
        
        <div ref={groupDiscountRef}>
          {groupDiscountVisible && (
            <Suspense fallback={<SectionLoader />}>
              <GroupDiscount />
            </Suspense>
          )}
        </div>
        
        <div ref={testimonialsRef}>
          {testimonialsVisible && (
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
          )}
        </div>
        
        <div ref={faqRef}>
          {faqVisible && (
            <Suspense fallback={<SectionLoader />}>
              <FAQSection />
            </Suspense>
          )}
        </div>
      </main>
    </>
  );
}