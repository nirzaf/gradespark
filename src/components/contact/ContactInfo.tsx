import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <motion.div className="group text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
        <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-celeste/20 rounded-full mb-4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 120 }} whileHover={{ scale: 1.2 }}>
          <Phone className="w-8 h-8 text-celeste" />
        </motion.div>
        <h3 className="text-lg font-semibold mb-2">Phone</h3>
        <p className="text-gray-600">
          <a href="tel:+97433170042" className="hover:text-celeste">
            +974 3317 0042
          </a>
        </p>
      </motion.div>

      <motion.div className="group text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
        <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-celeste/20 rounded-full mb-4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 120 }} whileHover={{ scale: 1.2 }}>
          <Mail className="w-8 h-8 text-celeste" />
        </motion.div>
        <h3 className="text-lg font-semibold mb-2">Email</h3>
        <p className="text-gray-600">
          <a href="mailto:contact@gradespark.org" className="hover:text-celeste">
              contact@gradespark.org
          </a>
        </p>
      </motion.div>

      <motion.div className="group text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
        <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-celeste/20 rounded-full mb-4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 120 }} whileHover={{ scale: 1.2 }}>
          <MapPin className="w-8 h-8 text-celeste" />
        </motion.div>
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <p className="text-gray-600">6th Floor, Building Number 12, Street Number 817, Khor Shaqeeq Street, Zone No 38, Al Sadd, Doha.</p>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
