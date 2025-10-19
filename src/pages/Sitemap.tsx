import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop'; // Import the new hook

// Define the site structure with categories and pages
const siteStructure = [
  {
    category: 'Main Pages',
    links: [
      { title: 'Home', path: '/', description: 'Grade Spark Academy - Expert academic assistance for university students' },
      { title: 'About Us', path: '/about', description: 'Learn about Grade Spark Academy\'s mission, vision, and team' },
      { title: 'Services', path: '/services', description: 'Explore our comprehensive academic assistance services' },
      { title: 'Contact Us', path: '/contact', description: 'Get in touch with our support team' },
    ]
  },
  {
    category: 'Academic Services',
    links: [
      { title: 'Custom Essay Writing', path: '/services#custom-essays', description: 'Professional essay writing services tailored to your requirements' },
      { title: 'Dissertation & Thesis Support', path: '/services#dissertation', description: 'Comprehensive assistance for dissertations and thesis projects' },
      { title: 'Problem-Solving & Technical Assignments', path: '/services#technical', description: 'Expert help with complex technical and STEM assignments' },
      { title: 'Research Support', path: '/services#research', description: 'Professional research assistance and methodology guidance' },
      { title: 'Editing & Proofreading', path: '/services#editing', description: 'Meticulous editing and proofreading services' },
      { title: 'Homework & Coursework Help', path: '/services#homework', description: 'Timely assistance with daily assignments and coursework' },
    ]
  },
  {
    category: 'Subject Areas',
    links: [
      { title: 'Business & Management', path: '/services#business', description: 'Assistance with business, marketing, finance, and management assignments' },
      { title: 'Computer Science & IT', path: '/services#computer-science', description: 'Expert help with programming, algorithms, and IT projects' },
      { title: 'Engineering', path: '/services#engineering', description: 'Support for all engineering disciplines and technical projects' },
      { title: 'Mathematics & Statistics', path: '/services#mathematics', description: 'Professional assistance with math problems and statistical analysis' },
      { title: 'Sciences', path: '/services#sciences', description: 'Help with biology, chemistry, physics, and other scientific subjects' },
      { title: 'Humanities & Social Sciences', path: '/services#humanities', description: 'Support for literature, history, psychology, sociology, and more' },
    ]
  },
  {
    category: 'Resources',
    links: [
      { title: 'Book a Trial Session', path: '/book-trial', description: 'Schedule a free consultation with our academic experts' },
      { title: 'Home School Support', path: '/home-school', description: 'Specialized assistance for homeschooling students' },
    ]
  },
  {
    category: 'Legal & Information',
    links: [
      { title: 'Terms of Use', path: '/terms', description: 'Grade Spark Academy\'s terms and conditions' },
      { title: 'Privacy Policy', path: '/privacy-policy', description: 'How we protect and manage your personal information' },
      { title: 'Cookie Preferences', path: '/consent-preferences', description: 'Manage your cookie and tracking preferences' },
      { title: 'Sitemap', path: '/sitemap', description: 'Complete overview of Grade Spark Academy\'s website structure' },
    ]
  }
];

const Sitemap = () => {
  useScrollToTop(); // Use the new hook for scrolling

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Sitemap - Grade Spark Academy';
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap | GradeSpark Academy - Navigate Our Academic Services</title>
        <meta 
          name="description" 
          content="Explore GradeSpark Academy's complete sitemap. Find all our academic services, subject areas, and resources for university students in one organized view." 
        />
        <meta 
          name="keywords" 
          content="sitemap, navigation, academic services, university help, essay writing, dissertation support, tutoring, GradeSpark Academy" 
        />
        <link rel="canonical" href="https://gradespark.com/sitemap" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Sitemap | GradeSpark Academy - Navigate Our Academic Services" />
        <meta 
          property="og:description" 
          content="Explore GradeSpark Academy's complete sitemap. Find all our academic services, subject areas, and resources for university students in one organized view." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gradespark.com/sitemap" />
        <meta property="og:image" content="https://gradespark.com/images/og-sitemap.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sitemap | GradeSpark Academy - Navigate Our Academic Services" />
        <meta 
          name="twitter:description" 
          content="Explore GradeSpark Academy's complete sitemap. Find all our academic services, subject areas, and resources for university students in one organized view." 
        />
        <meta name="twitter:image" content="https://gradespark.com/images/twitter-sitemap.jpg" />
      </Helmet>
      <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Sitemap</h1>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Welcome to the Grade Spark Academy sitemap. This page provides a comprehensive overview of our website structure to help you navigate to the information you need.
      </p>
      
      <div className="max-w-5xl mx-auto">
        {siteStructure.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">{category.category}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Link to={link.path} className="text-xl font-medium text-blue-600 hover:text-blue-800 mb-2 block">
                    {link.title}
                  </Link>
                  <p className="text-gray-600">{link.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional SEO information */}
      <div className="mt-16 max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">About Grade Spark Academy</h2>
        <p className="text-gray-700 mb-4">
          Grade Spark Academy provides expert academic assistance services for university students. Our team of qualified professionals helps students manage academic stress by providing support with assignments, projects, dissertations, and more.
        </p>
        <p className="text-gray-700 mb-4">
          We offer a range of services including custom essay writing, dissertation support, technical assignments, research help, editing, and homework assistance. Our key features include 100% originality, secure payments, and free revisions.
        </p>
        <p className="text-gray-700">
          For more information about our services or to get started, please visit our <Link to="/" className="text-blue-600 hover:underline">homepage</Link> or <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link> directly.
        </p>
      </div>
    </main>
    </>
  );
};

export default Sitemap;
