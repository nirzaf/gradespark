import { FileCheck, Clock, Shield, Award, GraduationCap, HeadsetIcon } from 'lucide-react';

export default function KeyFeatures() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose <span className="text-black font-bold">Grade Spark Academy</span>?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We're committed to helping you achieve academic excellence with our comprehensive range of services and unwavering dedication to quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <GraduationCap className="w-12 h-12 text-celeste mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Writers</h3>
          <p className="text-gray-600">
            Our team consists of MA/PhD qualified professionals with advanced degrees in their respective fields, ensuring deep subject knowledge and exceptional quality.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <FileCheck className="w-12 h-12 text-celeste mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">100% Original Content</h3>
          <p className="text-gray-600">
            We guarantee plagiarism-free and AI-free work created by our expert writers. Every assignment undergoes rigorous quality checks to ensure authenticity.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Clock className="w-12 h-12 text-celeste mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
          <p className="text-gray-600">
            We understand the importance of deadlines. Our commitment to timely delivery ensures you'll never miss a submission date, even with tight timeframes.
          </p>
        </div>
      </div>
    </div>
  );
}
