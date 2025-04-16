import { useEffect, lazy, Suspense } from 'react';
import { initGTM } from './lib/gtm';
import GTMNoScript from './components/GTMNoScript';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { trackPageView } from './lib/trackingEvents';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const HomeSchool = lazy(() => import('./pages/HomeSchool'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const BookTrial = lazy(() => import('./pages/BookTrial'));
const ConsentForm = lazy(() => import('./components/ConsentForm'));
const Terms = lazy(() => import('./pages/Terms'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const BlogList = lazy(() => import('./pages/BlogList'));

const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-celeste"></div>
  </div>
);

// Create a wrapper component to handle page view tracking
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever the location changes
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    initGTM();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <PageTracker />
        <Navbar />
        <main className="flex-grow mt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/home-school" element={<HomeSchool />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-trial" element={<BookTrial />} />
              <Route path="/consent-preferences" element={<ConsentForm />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/blogs" element={<BlogList />} />

              {/* Catch all undefined routes and show 404 page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <GTMNoScript />
      </div>
    </Router>
  );
};

export default App;