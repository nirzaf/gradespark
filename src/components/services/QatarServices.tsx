import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const QatarServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 celeste-gradient-text">
            Grade Spark Academy's Premium Assignment Services in Qatar
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Elevating academic achievement for students across Qatar with our specialized support and commitment to excellence in every assignment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg border border-celeste/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-night">
              Excel Academically with Grade Spark Academy's Tailored Assignment Solutions in Qatar
            </h3>
            <p className="text-gray-700 mb-6">
              Qatari students face unique academic challenges similar to their global counterparts. Whether it's managing heavy course loads, developing advanced academic skills, or navigating language barriers, many seek professional guidance for their studies. At <strong>Grade Spark Academy</strong>, we've created a comprehensive online assignment support system designed to alleviate academic pressure and transform your educational journey. Our dedicated team of subject specialists works tirelessly to boost your academic performance through meticulously crafted assignments. When it comes to your crucial academic work, trust only the best – our team of highly qualified academic professionals consistently delivers results that exceed expectations.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-night">
              Transform Your Academic Performance with Qatar's Premier Assignment Assistance
            </h3>
            <p className="text-gray-700">
              Qatar's rich cultural diversity includes many international students who may find academic writing particularly challenging when English isn't their primary language. <strong>Grade Spark Academy</strong> stands out among educational support services by truly understanding the intricacies of academic writing across different disciplines. Our exceptional writing expertise combined with deep subject knowledge produces compelling, well-researched documents that consistently earn top grades. Our services reach students throughout Qatar – from bustling Doha to Al Rayyan, Al Warkah, and Umm Salal Muhammad – providing immediate, accessible academic support wherever you're located.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg border border-celeste/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-night">
              <strong>Grade Spark Academy</strong>: Your Deadline Guardian in Qatar's Demanding Academic Environment
            </h3>
            <p className="text-gray-700 mb-6">
              Qatar's rigorous educational standards create significant demands on students, who often juggle multiple responsibilities while striving for academic excellence. This intense pressure can make deadline management particularly challenging. At <strong>Grade Spark Academy</strong>, we've developed premium assignment services throughout Doha and beyond that help you reclaim control of your academic schedule. Our support eliminates the stress of looming deadlines and potential grade penalties. Even when faced with seemingly impossible timeframes, our seasoned academic specialists consistently deliver quality work on schedule – a track record we've maintained throughout our years serving Qatar's student community.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-night">
              Budget-Friendly Academic Excellence for Qatar's Student Community
            </h3>
            <p className="text-gray-700">
              Are you striving for academic success but finding obstacles in your path? You're certainly not alone in this journey. Countless students across Qatar share similar challenges, searching for reliable academic partners to guide them. <strong>Grade Spark Academy</strong> offers accessible, affordable assignment solutions that turn academic aspirations into reality without financial strain. Our services provide exceptional value, connecting you with experienced academic writers at reasonable rates. We're committed to protecting both your academic standing and your financial wellbeing, making quality educational support available to all Qatari students regardless of budget constraints.
            </p>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-night to-night-dark rounded-xl p-8 shadow-xl text-white mb-16 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-celeste/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-celeste/5 rounded-full filter blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-celeste">
              Grade Spark Excellence
            </h3>
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-celeste/20 text-white">
                <MessageCircle className="w-5 h-5 mr-2 text-celeste" />
                Live Support
              </span>
            </div>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto">
              Concerned About Your Academic Performance? Let <strong>Grade Spark Academy's</strong> Qatar Specialists Elevate Your Grades to New Heights!
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-celeste text-night px-8 py-4 rounded-lg text-lg font-semibold hover:bg-celeste-dark transition-colors shadow-lg hover:shadow-xl"
              >
                Connect Now
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg border border-celeste/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-night">
              <strong>Grade Spark Academy's</strong> Elite Academic Team: Propelling Qatar Students to Academic Success
            </h3>
            <p className="text-gray-700">
              You've discovered the ideal academic partner if you're seeking authentic, plagiarism-free assignment assistance in Qatar. <strong>Grade Spark Academy</strong> has assembled an exceptional team of distinguished academic professionals all dedicated to your success. Our support enables you to submit impeccably structured, thoroughly researched assignments that significantly enhance your academic outcomes. Our team primarily consists of PhD-qualified educators with extensive experience in their respective fields. Their intimate understanding of Qatar's educational requirements allows them to craft assignments precisely aligned with your instructor's specifications and institutional guidelines, ensuring optimal results for every submission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg border border-celeste/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-night">
              <strong>Grade Spark Academy</strong>: Setting New Standards for Academic Excellence in Doha
            </h3>
            <p className="text-gray-700">
              When you choose <strong>Grade Spark Academy's</strong> academic assistance, you're guaranteed to receive meticulously crafted assignments that undergo rigorous quality control by our specialized proofreading team. We provide personalized attention to every project, ensuring each assignment receives the dedicated focus it deserves. Our zero-tolerance policy for plagiarism means every document is created from the ground up with original research and analysis. At <strong>Grade Spark Academy</strong>, your satisfaction drives everything we do – that's why we offer unlimited revisions at no additional cost, ensuring your assignment perfectly meets your requirements and exceeds your expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QatarServices;
