import { Shield, Clock, CheckCircle2, UserCheck, FileText, HeadsetIcon } from 'lucide-react';

export default function QualityAssurance() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Quality Assurance</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
        We maintain the highest standards of quality and integrity in all our services, ensuring you receive exceptional academic support that exceeds your expectations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <Shield className="w-8 h-8 text-celeste flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Vetting</h3>
              <p className="text-gray-600">
                Our writers hold advanced degrees and undergo rigorous selection processes. Each expert is verified for their academic credentials and subject expertise to ensure exceptional quality.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <CheckCircle2 className="w-8 h-8 text-celeste flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We guarantee 100% original, plagiarism-free content created by our expert writers. Every assignment undergoes thorough quality checks to ensure it meets the highest academic standards.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <UserCheck className="w-8 h-8 text-celeste flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Student-Centric Policies</h3>
              <p className="text-gray-600">
                Your privacy and satisfaction are our priorities. We provide secure payment options, strict confidentiality, and unlimited free revisions to ensure you're completely satisfied with our service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <Clock className="w-8 h-8 text-celeste flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethical Commitment</h3>
              <p className="text-gray-600">
                Our services are intended to provide high-quality reference materials to aid in learning. We encourage ethical use in line with institutional policies and academic integrity standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <FileText className="w-8 h-8 text-celeste flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Unlimited Revisions</h3>
              <p className="text-gray-600">
                We offer free unlimited revisions within a specified period after delivery, ensuring your assignment meets all your requirements and expectations. Your complete satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <HeadsetIcon className="w-8 h-8 text-celeste flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available 24/7 to address your questions and concerns. Whether you need assistance with placing an order, tracking progress, or requesting revisions, we're here for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}