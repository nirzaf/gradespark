import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Shield,
  Award,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ServicesGrid from "./ServicesGrid";
import HowItWorks from "./HowItWorks";
import TestimonialCarousel from "./TestimonialCarousel";
import AssignmentHelpForm from "./AssignmentHelpForm";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Grade Spark Academy
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Services
            </a>
            <a
              href="#trust"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Guarantees
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-primary font-medium"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Testimonials
            </a>
            <Button
              onClick={toggleForm}
              className="bg-primary hover:bg-primary/90"
            >
              Get Assignment Help
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#trust"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                Guarantees
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <Button
                onClick={() => {
                  toggleForm();
                  toggleMenu();
                }}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Get Assignment Help
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Achieve Academic Excellence Without the Stress
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Expert assistance for all your university assignments and
                projects. Save time, reduce stress, and improve your grades.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  onClick={toggleForm}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                >
                  Get Assignment Help
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Students studying"
                className="rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Academic Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive support for all your academic needs, delivered by
                experts in their fields.
              </p>
            </div>
            <ServicesGrid />
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section id="trust" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Guarantees
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We're committed to providing reliable, high-quality academic
                support you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    100% Original Content
                  </h3>
                  <p className="text-gray-700">
                    Every assignment is written from scratch, tailored to your
                    specific requirements, and checked for plagiarism.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Complete Confidentiality
                  </h3>
                  <p className="text-gray-700">
                    Your personal information and order details are protected
                    with industry-level encryption and never shared.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                  <p className="text-gray-700">
                    We understand the importance of deadlines. Your work will
                    always be delivered on or before the agreed time.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="border-0 shadow-lg inline-block max-w-3xl">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-primary/10 p-4 rounded-full mr-6">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-1">
                      Satisfaction Guarantee
                    </h3>
                    <p className="text-gray-700">
                      Not completely satisfied? We offer free revisions to
                      ensure your work meets your expectations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="process" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Getting expert academic help is simple with our straightforward
                process.
              </p>
            </div>
            <HowItWorks />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Don't just take our word for it. Hear from students who have
                experienced our services.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Excel in Your Academic Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of students who have improved their grades and
              reduced their stress with our expert academic assistance.
            </p>
            <Button
              onClick={toggleForm}
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary text-lg px-8"
            >
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Grade Spark Academy</h3>
              <p className="text-gray-400">
                Your trusted partner for academic excellence and success.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Essay Writing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Dissertation Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Technical Assignments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Research Help
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guarantees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: support@gradespark.com</li>
                <li className="text-gray-400">Hours: 24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Grade Spark Academy. All rights
              reserved.
            </p>
            <p className="mt-2 text-sm">
              Our services are intended to provide reference materials to assist
              students in their studies.
            </p>
          </div>
        </div>
      </footer>

      {/* Assignment Help Form Modal */}
      {isFormOpen && <AssignmentHelpForm onClose={toggleForm} />}
    </div>
  );
};

export default Home;
