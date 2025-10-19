import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | GradeSpark Academy - Get Academic Help Today</title>
        <meta 
          name="description" 
          content="Contact GradeSpark Academy for expert academic assistance. Get in touch with our team for assignment help, tutoring services, and personalized academic support." 
        />
        <meta name="keywords" content="contact gradespark, academic help contact, tutoring contact, assignment help support, get academic assistance" />
        <link rel="canonical" href="https://www.gradespark.com/contact" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Us | GradeSpark Academy - Get Academic Help Today" />
        <meta property="og:description" content="Contact GradeSpark Academy for expert academic assistance. Get in touch with our team for assignment help, tutoring services, and personalized academic support." />
        <meta property="og:url" content="https://www.gradespark.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.gradespark.com/images/og-contact.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | GradeSpark Academy - Get Academic Help Today" />
        <meta name="twitter:description" content="Contact GradeSpark Academy for expert academic assistance. Get in touch with our team for assignment help, tutoring services, and personalized academic support." />
        <meta name="twitter:image" content="https://www.gradespark.com/images/og-contact.jpg" />
      </Helmet>
      <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <ContactHeader />
      <ContactForm />
      <p className="text-center text-gray-700 my-8 italic font-bold">
        If you face any issues in form submission feel free to drop an Email <span className="underline">contact@gradespark.org</span>
      </p>
      <ContactInfo />
    </motion.main>
    </>
  );
};

export default Contact;