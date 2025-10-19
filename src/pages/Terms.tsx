import { Helmet } from 'react-helmet-async';
import useScrollToTop from '@/hooks/useScrollToTop'; // Import the new hook
import AgreementSection from './Terms/components/AgreementSection';
import TableOfContents from './Terms/components/TableOfContents';
import UserRepresentations from './Terms/components/UserRepresentations';
import ProhibitedActivities from './Terms/components/ProhibitedActivities';
import TermsSection from './Terms/components/TermsSection';
import ContactSection from './Terms/components/ContactSection';

// Table of contents data
const tableOfContents = [
  { id: 'services', title: '1. OUR SERVICES' },
  { id: 'intellectual-property', title: '2. INTELLECTUAL PROPERTY RIGHTS' },
  { id: 'user-representations', title: '3. USER REPRESENTATIONS' },
  { id: 'prohibited-activities', title: '4. PROHIBITED ACTIVITIES' },
  { id: 'user-generated', title: '5. USER GENERATED CONTRIBUTIONS' },
  { id: 'contribution-license', title: '6. CONTRIBUTION LICENSE' },
  { id: 'guidelines', title: '7. GUIDELINES FOR REVIEWS' },
  { id: 'social-media', title: '8. SOCIAL MEDIA' },
  { id: 'submissions', title: '9. SUBMISSIONS' },
  { id: 'third-party', title: '10. THIRD-PARTY WEBSITES AND CONTENT' },
  { id: 'advertisers', title: '11. ADVERTISERS' },
  { id: 'site-management', title: '12. SITE MANAGEMENT' },
  { id: 'privacy-policy', title: '13. PRIVACY POLICY' },
  { id: 'limitations', title: '14. LIMITATIONS OF LIABILITY' },
  { id: 'indemnification', title: '15. INDEMNIFICATION' },
  { id: 'user-data', title: '16. USER DATA' },
  { id: 'electronic', title: '17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES' },
  { id: 'miscellaneous', title: '18. MISCELLANEOUS' },
  { id: 'contact', title: '19. CONTACT US' }
];

// Additional sections data
const additionalSections = [
  {
    id: 'services',
    title: '1. OUR SERVICES',
    content: `Grade Spark Academy provides expert academic assistance services for university students. Our services include:

    Custom Essay Writing: Original, high-quality essays tailored to your specific requirements.

    Dissertation & Thesis Assistance: Comprehensive support from topic selection to final submission.

    Problem-Solving & Technical Assignments: Expert help with mathematics, programming, engineering, and other technical subjects.

    Research Support & Paper Writing: Professional assistance with research design, data analysis, and academic paper writing.

    Editing & Proofreading: Meticulous review of your existing work to eliminate errors and improve clarity.

    Homework & Coursework Help: Timely assistance with daily assignments to keep you on track.

    All our services are delivered with 100% originality, strict confidentiality, and on-time delivery guarantees.`
  },
  {
    id: 'intellectual-property',
    title: '2. INTELLECTUAL PROPERTY RIGHTS',
    content: `All content on our platform is protected by intellectual property rights. Users may not copy, reproduce, or
    distribute any content without explicit permission.

    The materials we provide to you are intended for your personal reference and learning purposes only. While you retain the right to use these materials for your educational benefit, Grade Spark Academy retains all intellectual property rights to the content we create.

    You may not redistribute, sell, or publish materials obtained through our services without our explicit written permission.`
  },
  {
    id: 'limitations',
    title: '14. LIMITATIONS OF LIABILITY',
    content: `LIMITATIONS OF LIABILITY:
    TO THE MAXIMUM EXTENT PERMITTED BY LAW:

    • We will not be liable for any indirect, incidental, special, consequential, or punitive damages, including:
      - Lost profits or revenues
      - Lost data or content
      - Lost business opportunities
      - Personal injury or property damage
      - Any other losses

    Monetary Limits:
    • Our total liability shall not exceed the greater of:
      - The amount paid by you to us in the 12 months prior to the claim
      - $100 AUD

    Exceptions:
    These limitations do not apply to:
    • Damages arising from death or personal injury
    • Fraud or willful misconduct
    • Any other liability that cannot be excluded by law

    Time Limitation:
    • Any claim must be brought within one (1) year of the incident`
  },
  {
    id: 'indemnification',
    title: '15. INDEMNIFICATION',
    content: `You agree to indemnify, defend, and hold harmless Grade Spark Academy and its affiliates from and against any claims,
    liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising
    out of or relating to:

    • Your violation of these Terms
    • Your use of the Services
    • Your Content or submissions
    • Your interaction with other users
    • Your violation of any third party rights
    • Your violation of any laws, rules, or regulations
    • Your misuse of our academic materials
    • Any academic integrity violations resulting from improper use of our Services

    Scope of Indemnification:
    • Includes all direct and indirect damages
    • Covers all reasonable legal fees and costs
    • Applies to all related investigations and defenses
    • Extends to our officers, directors, employees, and agents

    Our Rights:
    • We may assume exclusive defense and control of any matter
    • You agree to cooperate with our defense of such claims
    • We may settle any claim without your prior written consent`
  },
  {
    id: 'user-data',
    title: '16. USER DATA',
    content: `Data Collection and Use:
    • We collect and process your personal data in accordance with our Privacy Policy
    • You retain ownership of your data
    • We maintain security measures to protect your data
    • We perform regular backups but are not responsible for data loss
    • We treat all your assignment details and personal information with strict confidentiality

    Your Responsibilities:
    • Maintaining accurate and up-to-date information
    • Protecting your account credentials
    • Reporting unauthorized access
    • Backing up your own data
    • Providing accurate assignment requirements and instructions

    Data Retention:
    • We retain data as outlined in our Privacy Policy
    • We may delete inactive account data after 180 days
    • We comply with data protection regulations
    • You can request data deletion subject to legal requirements
    • We may retain completed assignments for quality assurance purposes`
  },
  {
    id: 'electronic',
    title: '17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
    content: `By using our Services, you consent to receive electronic communications from us:

    Types of Communications:
    • Service announcements and updates
    • Administrative messages
    • Marketing communications (subject to your preferences)
    • Legal notices and disclosures
    • Support and customer service responses
    • Assignment status updates and notifications

    Delivery Methods:
    • Email
    • Text messages
    • In-app notifications
    • Push notifications
    • Website announcements
    • Secure messaging system

    Your Acknowledgment:
    • Electronic communications satisfy legal requirements
    • You can retain copies for your records
    • You can withdraw marketing consent at any time
    • Essential service communications cannot be opted out
    • You agree to keep your contact information updated`
  },
  {
    id: 'miscellaneous',
    title: '18. MISCELLANEOUS',
    content: `General Provisions:

    Assignment:
    • We may assign our rights and obligations
    • You may not assign your rights without our consent
    • Any attempted assignment in violation is void

    Severability:
    • If any provision is found invalid, other provisions remain in effect
    • Invalid provisions will be modified to achieve intended purpose

    Force Majeure:
    • We are not liable for events beyond our reasonable control
    • Includes natural disasters, pandemics, and technical failures

    Relationship of Parties:
    • No joint venture or partnership is created
    • You and Grade Spark Academy are independent contractors
    • No agency relationship is established

    Academic Integrity:
    • Our Services are intended to be used as learning aids and reference materials
    • You are responsible for using our Services in accordance with your institution's policies
    • We encourage ethical use of our materials for educational purposes

    Entire Agreement:
    • These Terms constitute the complete agreement
    • Supersedes all prior agreements and understandings
    • Cannot be modified except in writing by us`
  }
];

const Terms = () => {
  useScrollToTop(); // Use the new hook for scrolling

  return (
    <>
      <Helmet>
        <title>Terms of Use | GradeSpark Academy - Service Terms & Conditions</title>
        <meta 
          name="description" 
          content="Read GradeSpark Academy's terms of use and service conditions. Understand our policies, user responsibilities, and guidelines for academic assistance services." 
        />
        <meta name="keywords" content="terms of use, service terms, academic help terms, gradespark policies, user agreement" />
        <link rel="canonical" href="https://www.gradespark.com/terms" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Terms of Use | GradeSpark Academy - Service Terms & Conditions" />
        <meta property="og:description" content="Read GradeSpark Academy's terms of use and service conditions. Understand our policies, user responsibilities, and guidelines for academic assistance services." />
        <meta property="og:url" content="https://www.gradespark.com/terms" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Use | GradeSpark Academy - Service Terms & Conditions" />
        <meta name="twitter:description" content="Read GradeSpark Academy's terms of use and service conditions. Understand our policies, user responsibilities, and guidelines for academic assistance services." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 mt-16">Grade Spark Academy Terms of Use</h1>
      <p className="text-gray-600 mb-8">Last updated: 15 June 2024</p>

      <AgreementSection />
      <TableOfContents items={tableOfContents} />
      <UserRepresentations />
      <ProhibitedActivities />

      {/* Render additional sections */}
      {additionalSections.map(section => (
        <TermsSection
          key={section.id}
          id={section.id}
          title={section.title}
          content={section.content}
        />
      ))}

      <ContactSection />
    </div>
    </>
  );
};

export default Terms;