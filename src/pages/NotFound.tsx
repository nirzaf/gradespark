import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | GradeSpark Academy</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to GradeSpark Academy's homepage for expert academic assistance and tutoring services." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          The page you're looking for doesn't exist. You'll be redirected to the homepage in 5 seconds.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-celeste text-night rounded-md hover:bg-celeste-dark transition-colors"
        >
          Go to Homepage
        </button>
      </main>
    </>
  );
};

export default NotFound;
