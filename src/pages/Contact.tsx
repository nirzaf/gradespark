import { motion } from 'framer-motion';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <ContactHeader />
      <ContactForm />
      <p className="text-center text-gray-700 my-8 italic font-bold">
        If you face any issues in form submission feel free to drop an Email contact@gradespark.org
      </p>
      <ContactInfo />
    </motion.div>
  );
};

export default Contact;