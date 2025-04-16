import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-celeste/20 rounded-full mb-4">
          <Phone className="w-6 h-6 text-celeste" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Phone</h3>
        <p className="text-gray-600">
          <a href="tel:+97433170042" className="hover:text-celeste">
            +974 3317 0042
          </a>
        </p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-celeste/20 rounded-full mb-4">
          <Mail className="w-6 h-6 text-celeste" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Email</h3>
        <p className="text-gray-600">
          <a href="mailto:contact@gradespark.org" className="hover:text-celeste">
              contact@gradespark.org
          </a>
        </p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-celeste/20 rounded-full mb-4">
          <MapPin className="w-6 h-6 text-celeste" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <p className="text-gray-600">6th Floor, Building Number 12, Street Number 817, Khor Shaqeeq Street, Zone No 38, Al Sadd, Doha.</p>
      </div>
    </div>
  );
};

export default ContactInfo;
