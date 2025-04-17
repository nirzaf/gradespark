import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  fullName: string;
  additionalDetails: string;
  email: string;
  mobileNo: string;
  requirement: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    additionalDetails: '',
    email: '',
    mobileNo: '',
    requirement: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      // Map status and requirement to numeric IDs
      const statusId = 3098775; // Submitted
      const requirementMap: Record<string, number> = {
        'Essay Writing': 3098787,
        'Research Paper Assistance': 3098788,
        'Dissertation or Thesis Support': 3098789,
        'Technical Assignments': 3098790,
        'Personal Statement Writing': 3098791,
        'Book Writing': 3098792,
        'Editing & Proofreading': 3098793,
        'Ghostwriting': 3098794,
        'Subject-Specific Tutoring': 3098795,
        'Exam Preparation': 3098796,
        'Academic Coaching': 3098797,
        'Other': 3098798,
      };
      const requirementId = requirementMap[formData.requirement] || null;
      const res = await fetch(
        'https://api.baserow.io/api/database/rows/table/507918/?user_field_names=true',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${import.meta.env.VITE_BASEROW_API_KEY}`,
          },
          body: JSON.stringify({
            "Full Name": formData.fullName,
            "Additional Details": formData.additionalDetails,
            "Your Project": [],
            "Email": formData.email,
            "Mobile No": formData.mobileNo,
            "Status": statusId,
            "Requirement": requirementId,
          }),
        }
      );
      if (!res.ok) throw new Error('Submission error');
      setMessage('Submitted successfully!');
      setFormData({
        fullName: '',
        additionalDetails: '',
        email: '',
        mobileNo: '',
        requirement: '',
      });
    } catch (err) {
      console.error(err);
      setMessage('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-celeste focus:ring-celeste"
          />
        </div>
        {/* Additional Details */}
        <div>
          <label
            htmlFor="additionalDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Additional Details
          </label>
          <textarea
            id="additionalDetails"
            name="additionalDetails"
            rows={4}
            value={formData.additionalDetails}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-celeste focus:ring-celeste"
          />
        </div>
        {/* Email & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-celeste focus:ring-celeste"
            />
          </div>
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
              Mobile No
            </label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-celeste focus:ring-celeste"
            />
          </div>
        </div>
        {/* Requirement */}
        <div>
          <label htmlFor="requirement" className="block text-sm font-medium text-gray-700">
            Requirement
          </label>
          <select
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-celeste focus:ring-celeste"
          >
            <option value="">Select a service</option>
            <option value="Essay Writing">Essay Writing</option>
            <option value="Research Paper Assistance">Research Paper Assistance</option>
            <option value="Dissertation or Thesis Support">Dissertation or Thesis Support</option>
            <option value="Technical Assignments">Technical Assignments</option>
            <option value="Personal Statement Writing">Personal Statement Writing</option>
            <option value="Book Writing">Book Writing</option>
            <option value="Editing & Proofreading">Editing & Proofreading</option>
            <option value="Ghostwriting">Ghostwriting</option>
            <option value="Subject-Specific Tutoring">Subject-Specific Tutoring</option>
            <option value="Exam Preparation">Exam Preparation</option>
            <option value="Academic Coaching">Academic Coaching</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-night hover:bg-night-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-celeste transition-colors disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </motion.button>
      </form>
      {message && (
        <div className="mt-4 p-4 text-center text-sm font-medium text-night">
          {message}
        </div>
      )}
    </motion.div>
  );
};

export default ContactForm;
