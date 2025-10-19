import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollToTop from '@/hooks/useScrollToTop'; // Import the new hook
import TableOfContents from './PrivacyPolicy/components/TableOfContents';
import PrivacySection from './PrivacyPolicy/components/PrivacySection';
import IntroductionSection from './PrivacyPolicy/components/IntroductionSection';
import ContactSection from './PrivacyPolicy/components/ContactSection';

// Table of contents data
const tableOfContents = [
  { id: 'introduction', title: '1. INTRODUCTION' },
  { id: 'information-we-collect', title: '2. INFORMATION WE COLLECT' },
  { id: 'how-we-use-information', title: '3. HOW WE USE YOUR INFORMATION' },
  { id: 'legal-basis', title: '4. LEGAL BASIS FOR PROCESSING PERSONAL DATA UNDER GDPR' },
  { id: 'retention', title: '5. RETENTION OF YOUR PERSONAL DATA' },
  { id: 'transfer', title: '6. TRANSFER OF YOUR PERSONAL DATA' },
  { id: 'disclosure', title: '7. DISCLOSURE OF YOUR PERSONAL DATA' },
  { id: 'your-rights', title: '8. YOUR DATA PROTECTION RIGHTS UNDER GDPR' },
  { id: 'cookies', title: '9. COOKIES AND TRACKING TECHNOLOGIES' },
  { id: 'analytics', title: '10. ANALYTICS' },
  { id: 'children-privacy', title: '11. CHILDREN\'S PRIVACY' },
  { id: 'links', title: '12. LINKS TO OTHER WEBSITES' },
  { id: 'changes', title: '13. CHANGES TO THIS PRIVACY POLICY' },
  { id: 'contact', title: '14. CONTACT US' }
];

// Additional sections data
const privacySections = [
  {
    id: 'information-we-collect',
    title: '2. INFORMATION WE COLLECT',
    content: `We collect several different types of information for various purposes to provide and improve our Service to you:

Personal Data:
• Contact information (name, email address, phone number)
• Academic information (university, course, assignment details)
• Payment information (processed through secure third-party payment processors)
• Communication records between you and our team
• Account credentials (username, password in encrypted form)

Usage Data:
• IP address and location data
• Browser type and version
• Pages visited and time spent
• Device information
• Referring websites
• Operating system

Cookies and Tracking Data:
• Session cookies to manage your login session
• Preference cookies to remember your settings
• Analytics cookies to understand how you use our website
• Marketing cookies (only with your explicit consent)`
  },
  {
    id: 'how-we-use-information',
    title: '3. HOW WE USE YOUR INFORMATION',
    content: `We use the collected data for various purposes:

Service Provision:
• To provide and maintain our academic assistance services
• To process your orders and deliver requested materials
• To manage your account and provide customer support
• To communicate with you about your orders and services

Service Improvement:
• To analyze usage patterns and improve our website
• To develop new products, services, and features
• To conduct research and analysis to enhance user experience

Communications:
• To send you service-related notices and updates
• To respond to your inquiries and support requests
• To send promotional materials (only with your consent)
• To provide news and information about our services that may be of interest to you

Legal Compliance:
• To comply with legal obligations
• To prevent fraudulent activity
• To verify identity when required
• To protect the rights, property, or safety of Grade Spark Academy, our users, or others`
  },
  {
    id: 'legal-basis',
    title: '4. LEGAL BASIS FOR PROCESSING PERSONAL DATA UNDER GDPR',
    content: `Under the General Data Protection Regulation (GDPR), we process your personal data based on the following legal grounds:

Contractual Necessity:
• Processing necessary for the performance of our contract with you
• This includes providing our academic assistance services and managing your account

Legitimate Interests:
• Processing necessary for our legitimate business interests
• This includes improving our services, marketing, fraud prevention, and IT security
• We balance these interests against your fundamental rights and freedoms

Consent:
• Processing based on your specific, informed, and unambiguous consent
• This applies particularly to marketing communications and certain cookies
• You can withdraw your consent at any time

Legal Obligation:
• Processing necessary to comply with our legal obligations
• This includes financial record-keeping, identity verification, and responding to legal requests`
  },
  {
    id: 'retention',
    title: '5. RETENTION OF YOUR PERSONAL DATA',
    content: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.

Retention Periods:
• Account information: For the duration of your account plus 2 years after account closure
• Order and assignment details: 7 years for tax and accounting purposes
• Communication records: 2 years after the last communication
• Payment information: As required by financial regulations (typically 7 years)
• Usage data: 26 months

Data Minimization:
• We regularly review our retention periods
• We anonymize or delete data that is no longer necessary
• You can request deletion of your data subject to legal requirements

Account Closure:
• When you close your account, we begin the data retention countdown
• Some information may be retained longer for legal purposes
• You can request a copy of your data before account closure`
  },
  {
    id: 'transfer',
    title: '6. TRANSFER OF YOUR PERSONAL DATA',
    content: `Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.

International Transfers:
• We ensure that any international transfers of personal data comply with applicable laws
• For transfers outside the European Economic Area (EEA), we implement appropriate safeguards
• These safeguards include Standard Contractual Clauses approved by the European Commission

Safeguards:
• Data encryption during transfer and storage
• Contractual agreements with third-party processors
• Regular security assessments of our systems and partners
• Staff training on data protection and security

Consent to Transfer:
• By using our services, you consent to the transfer of your information as described
• If you do not agree to such transfers, please do not use our services
• You can contact us for more information about specific transfers of your data`
  },
  {
    id: 'disclosure',
    title: '7. DISCLOSURE OF YOUR PERSONAL DATA',
    content: `We may disclose your personal data in the following situations:

Service Providers:
• Third-party service providers who assist us in operating our website and services
• These providers have access to your personal data only to perform specific tasks
• All providers are obligated to protect your data and comply with applicable laws

Business Transfers:
• In connection with a merger, acquisition, or sale of assets
• Your data would remain subject to the promises made in the pre-existing Privacy Policy
• We will notify you before your personal data is transferred

Legal Requirements:
• To comply with a legal obligation
• To protect and defend our rights or property
• To prevent or investigate possible wrongdoing
• To protect the personal safety of users or the public

With Your Consent:
• With your explicit consent for purposes not listed in this Privacy Policy
• We will inform you about the purpose and obtain your consent before such disclosure`
  },
  {
    id: 'your-rights',
    title: '8. YOUR DATA PROTECTION RIGHTS UNDER GDPR',
    content: `Under the General Data Protection Regulation (GDPR), you have certain data protection rights. Grade Spark Academy aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.

Your Rights:
• Right to Access: You have the right to request copies of your personal data.
• Right to Rectification: You have the right to request that we correct inaccurate information.
• Right to Erasure: You have the right to request that we delete your personal data in certain circumstances.
• Right to Restrict Processing: You have the right to request that we restrict the processing of your personal data.
• Right to Data Portability: You have the right to request that we transfer your data to another organization or directly to you.
• Right to Object: You have the right to object to our processing of your personal data.
• Rights Related to Automated Decision Making: You have the right not to be subject to decisions based solely on automated processing.

How to Exercise Your Rights:
• You can exercise your rights by contacting us at privacy@gradespark.com
• We will respond to your request within 30 days
• We may ask for verification of your identity before processing requests
• There is no fee for exercising your rights, but we may charge a reasonable fee for excessive or unfounded requests

Complaints:
• You have the right to complain to a data protection authority about our collection and use of your personal data
• For more information, please contact your local data protection authority`
  },
  {
    id: 'cookies',
    title: '9. COOKIES AND TRACKING TECHNOLOGIES',
    content: `We use cookies and similar tracking technologies to track activity on our Service and hold certain information.

Types of Cookies We Use:
• Essential Cookies: Necessary for the website to function properly
• Preference Cookies: Remember your preferences and settings
• Analytics Cookies: Help us understand how visitors interact with our website
• Marketing Cookies: Used to track visitors across websites for advertising purposes (only with consent)

Cookie Control:
• You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent
• You can manage your cookie preferences through our Cookie Consent Manager
• Blocking essential cookies may impact the functionality of our website

Do Not Track:
• We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place
• However, some third-party services may not respond to these signals

Third-Party Cookies:
• Some third-party services used on our website may place their own cookies
• These third parties have their own privacy policies which we encourage you to review`
  },
  {
    id: 'analytics',
    title: '10. ANALYTICS',
    content: `We may use third-party Service Providers to monitor and analyze the use of our Service.

Google Analytics:
• We use Google Analytics to track and report website traffic
• Google Analytics places cookies in your browser to identify you as a unique user
• We have enabled IP anonymization and data retention controls
• You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on

Other Analytics Services:
• We may use other analytics services to improve our Service
• These services collect similar data about your interactions with our Service
• Each service has its own privacy policy and opt-out mechanisms

How We Use Analytics Data:
• To understand how users interact with our website
• To identify areas for improvement
• To measure the effectiveness of our content and marketing
• To provide a better user experience`
  },
  {
    id: 'children-privacy',
    title: '11. CHILDREN\'S PRIVACY',
    content: `Our Service is not directed to anyone under the age of 18 ("Children").

Age Restrictions:
• We do not knowingly collect personally identifiable information from anyone under 18
• Our services are designed for university students who are typically 18 or older
• If you are a parent or guardian and believe your child has provided us with personal data, please contact us

Verification Measures:
• We may take steps to verify the age of our users
• This may include requesting proof of identity or student status
• We reserve the right to refuse service if we believe a user is underage

If We Discover Child Data:
• If we discover that we have collected personal data from a child under 18, we will delete that information as quickly as possible
• We will take appropriate measures to ensure this data is not used or shared`
  },
  {
    id: 'links',
    title: '12. LINKS TO OTHER WEBSITES',
    content: `Our Service may contain links to other websites that are not operated by us.

Third-Party Links:
• We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services
• These links are provided for your convenience only
• We do not endorse or make any representations about third-party websites

Your Responsibility:
• We strongly advise you to review the Privacy Policy of every site you visit
• Be cautious about providing personal information to third-party websites
• Check for secure connections (https://) before submitting sensitive information

Embedded Content:
• Our website may include embedded content from third parties
• These embedded services may collect data about you, use cookies, and monitor your interaction
• Their use of this information is governed by their respective privacy policies`
  },
  {
    id: 'changes',
    title: '13. CHANGES TO THIS PRIVACY POLICY',
    content: `We may update our Privacy Policy from time to time.

Notification of Changes:
• We will notify you of any changes by posting the new Privacy Policy on this page
• For significant changes, we will provide a prominent notice on our website or send you an email notification
• The "Last updated" date at the top of the Privacy Policy will be revised

Your Responsibility:
• We encourage you to review this Privacy Policy periodically for any changes
• Your continued use of the Service after changes to the Privacy Policy constitutes your acceptance of those changes
• If you do not agree with the updated Privacy Policy, you should discontinue using our Service

Archived Versions:
• Previous versions of our Privacy Policy are archived and available upon request
• You can contact us to obtain a copy of earlier versions`
  }
];

const PrivacyPolicy = () => {
  useScrollToTop(); // Use the new hook for scrolling

  useEffect(() => {
    // Set page title
    document.title = 'Privacy Policy - Grade Spark Academy';

    // Handle hash navigation with HashRouter
    const handleHashNavigation = () => {
      // Get the hash part from the URL
      // With HashRouter, the URL might look like /#/privacy-policy#section-id
      const url = window.location.href;
      const hashIndex = url.lastIndexOf('#');

      if (hashIndex !== -1) {
        const hash = url.substring(hashIndex + 1);
        const element = document.getElementById(hash);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    // Check for hash on initial load
    handleHashNavigation();

    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | GradeSpark Academy - Data Protection & Privacy</title>
        <meta 
          name="description" 
          content="Read GradeSpark Academy's privacy policy to understand how we collect, use, and protect your personal information. Learn about your data rights and our GDPR compliance." 
        />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, personal information, gradespark privacy" />
        <link rel="canonical" href="https://www.gradespark.com/privacy" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Privacy Policy | GradeSpark Academy - Data Protection & Privacy" />
        <meta property="og:description" content="Read GradeSpark Academy's privacy policy to understand how we collect, use, and protect your personal information. Learn about your data rights and our GDPR compliance." />
        <meta property="og:url" content="https://www.gradespark.com/privacy" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | GradeSpark Academy - Data Protection & Privacy" />
        <meta name="twitter:description" content="Read GradeSpark Academy's privacy policy to understand how we collect, use, and protect your personal information. Learn about your data rights and our GDPR compliance." />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="text-gray-600 text-center mb-12">
        Last updated: June 1, 2023
      </p>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <IntroductionSection />

        <TableOfContents items={tableOfContents} />

        {privacySections.map((section) => (
          <PrivacySection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}

        <ContactSection />
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;