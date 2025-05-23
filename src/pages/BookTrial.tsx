import useScrollToTop from '@/hooks/useScrollToTop'; // Import the new hook
import HubSpotForm from './BookTrial/components/HubSpotForm';
import PageTitle from './BookTrial/components/PageTitle';

const BookTrial = () => {
  useScrollToTop(); // Use the new hook for scrolling

  return (
    <section className="mt-24">
      <div className="container mx-auto px-4">
        <PageTitle />
        <HubSpotForm />
      </div>
    </section>
  );
};

export default BookTrial;