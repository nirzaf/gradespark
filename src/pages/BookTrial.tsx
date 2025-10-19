import { Helmet } from 'react-helmet-async';
import useScrollToTop from '@/hooks/useScrollToTop'; // Import the new hook
import HubSpotForm from './BookTrial/components/HubSpotForm';
import PageTitle from './BookTrial/components/PageTitle';

const BookTrial = () => {
  useScrollToTop(); // Use the new hook for scrolling

  return (
    <>
      <Helmet>
        <title>Book Free Trial | GradeSpark Academy - Start Your Academic Journey</title>
        <meta 
          name="description" 
          content="Book a free trial session with GradeSpark Academy. Experience our expert tutoring and academic assistance services. Get personalized help for your studies today." 
        />
        <meta name="keywords" content="book trial, free trial, academic tutoring, gradespark trial, assignment help trial, free consultation" />
        <link rel="canonical" href="https://www.gradespark.com/book-trial" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Book Free Trial | GradeSpark Academy - Start Your Academic Journey" />
        <meta property="og:description" content="Book a free trial session with GradeSpark Academy. Experience our expert tutoring and academic assistance services. Get personalized help for your studies today." />
        <meta property="og:url" content="https://www.gradespark.com/book-trial" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.gradespark.com/images/og-trial.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Free Trial | GradeSpark Academy - Start Your Academic Journey" />
        <meta name="twitter:description" content="Book a free trial session with GradeSpark Academy. Experience our expert tutoring and academic assistance services. Get personalized help for your studies today." />
        <meta name="twitter:image" content="https://www.gradespark.com/images/og-trial.jpg" />
      </Helmet>
      <main>
        <section className="mt-24">
          <div className="container mx-auto px-4">
            <PageTitle />
            <HubSpotForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default BookTrial;