import { Shield, Clock, CheckCircle2, UserCheck } from 'lucide-react';

export default function QualityAssurance() {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Quality Assurance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start space-x-4">
            <Shield className="w-8 h-8 text-celeste flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Vetting</h3>
              <p className="text-gray-600">
                Our tutors hold advanced degrees and undergo rigorous checks. With over 750+ native-speaking experts,
                we ensure the highest quality of academic support.
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
                We guarantee 100% originality with thorough plagiarism checks and AI-free content, maintaining the highest
                academic standards for all work.
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
                Your security matters. We provide industry-level encryption, 24/7 support, and unlimited free revisions
                to ensure your complete satisfaction.
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
                Our services provide high-quality reference materials to aid in learning. We encourage ethical use
                in line with institutional policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}