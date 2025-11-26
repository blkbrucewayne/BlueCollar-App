import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BlueCollar",
  description: "Learn how BlueCollar protects your privacy and handles your personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="mt-4 text-primary-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At BlueCollar, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                platform to connect clients with local workers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                By using BlueCollar, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account Information:</strong> Name, email address, phone number, password, and profile photo</li>
                    <li><strong>Profile Information:</strong> Bio, skills, hourly rate, work history, portfolio, and verification documents</li>
                    <li><strong>Task Information:</strong> Task descriptions, photos, location, budget, and deadlines</li>
                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through our payment partners)</li>
                    <li><strong>Communication:</strong> Messages sent through our platform, reviews, and ratings</li>
                    <li><strong>Identity Verification:</strong> Government-issued ID, background check information, and other verification documents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Information Automatically Collected</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information:</strong> IP address, browser type, device type, operating system, and unique device identifiers</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, search queries, clicks, and navigation patterns</li>
                    <li><strong>Location Data:</strong> General location information based on IP address or GPS (with your permission)</li>
                    <li><strong>Cookies and Tracking:</strong> Cookies, web beacons, and similar tracking technologies (see Cookies section below)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Information from Third Parties</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Payment Processors:</strong> Transaction information and payment status</li>
                    <li><strong>Background Check Services:</strong> Verification and background check results</li>
                    <li><strong>Social Media:</strong> Information from social media accounts if you choose to connect them</li>
                    <li><strong>Analytics Providers:</strong> Aggregated usage and performance data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our platform services, including matching clients with workers, processing payments, and facilitating communication</li>
                  <li><strong>Account Management:</strong> To create and manage your account, verify your identity, and authenticate your access</li>
                  <li><strong>Communication:</strong> To send you service-related notifications, updates, and respond to your inquiries</li>
                  <li><strong>Safety and Security:</strong> To verify workers, conduct background checks, prevent fraud, and ensure platform safety</li>
                  <li><strong>Payment Processing:</strong> To process payments, manage transactions, and handle disputes</li>
                  <li><strong>Reviews and Ratings:</strong> To display reviews, ratings, and build trust within our community</li>
                  <li><strong>Personalization:</strong> To customize your experience, show relevant tasks, and recommend workers</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns, improve our services, and develop new features</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations, enforce our Terms of Service, and protect our rights</li>
                  <li><strong>Marketing:</strong> To send you promotional communications (with your consent) about new features, special offers, and platform updates</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">3. Information Sharing and Disclosure</h2>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 With Other Users</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Public Profiles:</strong> Your profile information (name, photo, bio, ratings, reviews) is visible to other users</li>
                    <li><strong>Task Listings:</strong> Task information you post is visible to workers browsing tasks</li>
                    <li><strong>Applications:</strong> When you apply for a task, your profile and application are visible to the client</li>
                    <li><strong>Messaging:</strong> Messages you send through our platform are visible to the recipient</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 With Service Providers</h3>
                  <p className="mb-2">We share information with trusted third-party service providers who help us operate our platform:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment processors for transaction handling</li>
                    <li>Background check services for worker verification</li>
                    <li>Cloud hosting providers for data storage</li>
                    <li>Analytics providers for usage analysis</li>
                    <li>Email and communication services</li>
                    <li>Customer support platforms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Legal Requirements</h3>
                  <p>We may disclose your information if required by law or in response to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Legal processes, court orders, or government requests</li>
                    <li>Enforcement of our Terms of Service or other agreements</li>
                    <li>Protection of our rights, property, or safety</li>
                    <li>Investigation of potential violations or fraud</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Business Transfers</h3>
                  <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">4. Data Security</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  We implement industry-standard security measures to protect your personal information from unauthorized access, 
                  alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure authentication and access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure payment processing through certified providers</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive 
                  to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">5. Your Privacy Rights</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information in your account</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and personal information (subject to legal and contractual obligations)</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Cookie Preferences:</strong> Manage cookie settings through your browser</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@bluecollar.com" className="text-primary-600 hover:underline">
                    privacy@bluecollar.com
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">6. Cookies and Tracking Technologies</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  We use cookies and similar tracking technologies to collect and store information about your use of our platform. 
                  Cookies are small data files placed on your device that help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Authenticate your account and maintain your session</li>
                  <li>Analyze how you use our platform</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability to use 
                  certain features of our platform.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">7. Children's Privacy</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  BlueCollar is not intended for users under the age of 18. We do not knowingly collect personal information 
                  from children under 18. If you are a parent or guardian and believe your child has provided us with personal 
                  information, please contact us immediately. If we become aware that we have collected information from a child 
                  under 18, we will take steps to delete that information.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">8. Data Retention</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                  resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal 
                  information, except where we are required to retain it for legal, regulatory, or business purposes.
                </p>
                <p>
                  Some information may remain in our backup systems for a limited time after deletion. We also retain aggregated and 
                  anonymized data that cannot be used to identify you.
                </p>
              </div>
            </div>

            {/* International Users */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">9. International Data Transfers</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. These 
                  countries may have different data protection laws than your country. By using our platform, you consent to the 
                  transfer of your information to these countries. We take appropriate safeguards to ensure your information is 
                  protected in accordance with this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">10. Changes to This Privacy Policy</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, 
                  or regulatory reasons. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posting the updated policy on this page with a new "Last updated" date</li>
                  <li>Sending you an email notification (if you have an account)</li>
                  <li>Displaying a prominent notice on our platform</li>
                </ul>
                <p className="mt-4">
                  Your continued use of our platform after changes become effective constitutes acceptance of the updated Privacy Policy. 
                  We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">11. Contact Us</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">BlueCollar Privacy Team</p>
                  <p className="mb-1">
                    Email:{" "}
                    <a href="mailto:privacy@bluecollar.com" className="text-primary-600 hover:underline">
                      privacy@bluecollar.com
                    </a>
                  </p>
                  <p className="mb-1">
                    General Support:{" "}
                    <Link href="/contact" className="text-primary-600 hover:underline">
                      Contact Us
                    </Link>
                  </p>
                  <p>
                    For data protection inquiries, please include "Privacy Request" in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help. Contact our privacy team or visit our help center for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </Link>
            <Link
              href="/help"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-primary-600 flex items-center justify-center gap-2"
            >
              <FileText className="h-5 w-5" />
              Help Center
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="/safety" className="hover:text-white transition">Safety</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400">
                Follow us on social media for updates and tips.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BlueCollar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

