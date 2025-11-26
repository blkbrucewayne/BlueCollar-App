import Link from "next/link";
import { FileText, Shield, AlertCircle, Scale, Users, CreditCard, Ban, MessageSquare } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Please read these terms carefully before using BlueCollar
            </p>
            <p className="text-sm text-primary-200 mt-4">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to BlueCollar. These Terms of Service ("Terms") govern your access to and use of 
                the BlueCollar platform, website, and mobile application (collectively, the "Service"). 
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these Terms, you may not access the Service.
              </p>
            </div>

            {/* Section 1: Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  By creating an account, accessing, or using BlueCollar, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute 
                  a legally binding agreement between you and BlueCollar.
                </p>
                <p>
                  If you are using the Service on behalf of a company or other legal entity, you represent that 
                  you have the authority to bind such entity to these Terms, in which case "you" or "your" shall 
                  refer to such entity.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any material 
                  changes by posting the new Terms on this page and updating the "Last updated" date. Your continued 
                  use of the Service after such modifications constitutes acceptance of the updated Terms.
                </p>
              </div>
            </div>

            {/* Section 2: Description of Service */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">2. Description of Service</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  BlueCollar is a platform that connects clients ("Clients") with local workers ("Workers") 
                  to facilitate the completion of various tasks and services. We provide a marketplace where:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Clients can post tasks, review worker profiles, and hire workers</li>
                  <li>Workers can browse available tasks, submit applications, and complete work</li>
                  <li>Both parties can communicate, process payments, and leave reviews</li>
                </ul>
                <p>
                  BlueCollar acts as an intermediary platform. We do not employ Workers, and we are not responsible 
                  for the quality, safety, or legality of services provided by Workers. We are not a party to any 
                  agreement between Clients and Workers.
                </p>
              </div>
            </div>

            {/* Section 3: User Accounts */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">3. User Accounts</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">3.1 Account Creation</h3>
                <p>
                  To use certain features of the Service, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">3.2 Account Eligibility</h3>
                <p>
                  You must be at least 18 years old to create an account and use the Service. By creating an account, 
                  you represent and warrant that you are of legal age and have the capacity to enter into these Terms.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">3.3 Account Suspension and Termination</h3>
                <p>
                  We reserve the right to suspend or terminate your account at any time, with or without notice, 
                  for any violation of these Terms, fraudulent activity, or any other reason we deem necessary to 
                  protect the integrity of the platform.
                </p>
              </div>
            </div>

            {/* Section 4: User Conduct */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Ban className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">4. User Conduct</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Post false, misleading, or fraudulent information</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Spam, solicit, or advertise services not related to BlueCollar</li>
                  <li>Circumvent payment processing or attempt to transact outside the platform</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems to access the Service without authorization</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect or store personal data about other users without permission</li>
                  <li>Post content that is illegal, harmful, or violates intellectual property rights</li>
                </ul>
                <p>
                  Violation of these conduct rules may result in immediate account suspension or termination.
                </p>
              </div>
            </div>

            {/* Section 5: Tasks and Services */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">5. Tasks and Services</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">5.1 Task Posting (Clients)</h3>
                <p>
                  Clients may post tasks describing work they need completed. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete task descriptions</li>
                  <li>Set fair and reasonable budgets</li>
                  <li>Respond promptly to worker applications and inquiries</li>
                  <li>Pay Workers promptly upon completion of agreed-upon work</li>
                  <li>Not post tasks that are illegal, dangerous, or violate these Terms</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">5.2 Service Provision (Workers)</h3>
                <p>
                  Workers may apply for and complete tasks. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate information about your skills and experience</li>
                  <li>Complete work in a professional and timely manner</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain appropriate insurance and licenses where required</li>
                  <li>Not accept payment outside the BlueCollar platform</li>
                  <li>Communicate clearly and honestly with Clients</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">5.3 Independent Contractor Relationship</h3>
                <p>
                  Workers are independent contractors, not employees of BlueCollar or Clients. Workers are responsible 
                  for their own taxes, insurance, and compliance with applicable laws. BlueCollar does not provide 
                  Workers with benefits, workers' compensation, or unemployment insurance.
                </p>
              </div>
            </div>

            {/* Section 6: Payments and Fees */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">6. Payments and Fees</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">6.1 Payment Processing</h3>
                <p>
                  All payments between Clients and Workers are processed through BlueCollar's secure payment system. 
                  Clients agree to pay the agreed-upon amount for completed work, and Workers agree to receive payment 
                  through the platform.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">6.2 Service Fees</h3>
                <p>
                  BlueCollar charges service fees for use of the platform. These fees are deducted from payments 
                  before Workers receive their earnings. Current fee structure is displayed on the platform and may 
                  be updated from time to time. We will notify users of any fee changes.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">6.3 Refunds and Disputes</h3>
                <p>
                  Refund requests must be submitted through the platform's dispute resolution system. BlueCollar 
                  will review disputes and may issue refunds at our discretion. All decisions regarding disputes 
                  are final.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">6.4 Taxes</h3>
                <p>
                  Workers are solely responsible for reporting and paying all applicable taxes on earnings received 
                  through the platform. BlueCollar may provide tax documents as required by law, but does not 
                  withhold taxes on behalf of Workers.
                </p>
              </div>
            </div>

            {/* Section 7: Reviews and Ratings */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">7. Reviews and Ratings</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  Users may leave reviews and ratings after completing a task. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide honest and accurate reviews based on actual experience</li>
                  <li>Not post false, defamatory, or misleading reviews</li>
                  <li>Not solicit or offer incentives in exchange for positive reviews</li>
                  <li>Respect the privacy of other users in your reviews</li>
                </ul>
                <p>
                  BlueCollar reserves the right to remove reviews that violate these Terms or our community guidelines.
                </p>
              </div>
            </div>

            {/* Section 8: Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">8. Intellectual Property</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  The Service, including its original content, features, and functionality, is owned by BlueCollar 
                  and is protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws.
                </p>
                <p>
                  You retain ownership of content you post on the platform. However, by posting content, you grant 
                  BlueCollar a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute 
                  such content for the purpose of operating and promoting the Service.
                </p>
              </div>
            </div>

            {/* Section 9: Disclaimers and Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">9. Disclaimers and Limitation of Liability</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">9.1 Service Provided "As Is"</h3>
                <p>
                  The Service is provided on an "as is" and "as available" basis. BlueCollar makes no warranties, 
                  express or implied, regarding the Service, including but not limited to warranties of merchantability, 
                  fitness for a particular purpose, or non-infringement.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">9.2 No Guarantee of Results</h3>
                <p>
                  BlueCollar does not guarantee that Clients will find suitable Workers, that Workers will find 
                  suitable tasks, or that any services will meet your expectations. We are not responsible for the 
                  quality, safety, or legality of services provided by Workers.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">9.3 Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, BlueCollar shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting 
                  from your use of the Service.
                </p>
              </div>
            </div>

            {/* Section 10: Indemnification */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">10. Indemnification</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  You agree to indemnify, defend, and hold harmless BlueCollar, its officers, directors, employees, 
                  and agents from and against any claims, liabilities, damages, losses, and expenses, including 
                  reasonable attorneys' fees, arising out of or in any way connected with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Services you provide or receive through the platform</li>
                </ul>
              </div>
            </div>

            {/* Section 11: Dispute Resolution */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">11. Dispute Resolution</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">11.1 Platform Disputes</h3>
                <p>
                  For disputes between Clients and Workers, you agree to first attempt to resolve the dispute 
                  through BlueCollar's dispute resolution process. We will review disputes and make decisions 
                  in good faith, but our decisions are final.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">11.2 Legal Disputes</h3>
                <p>
                  Any legal disputes arising from these Terms or your use of the Service shall be resolved through 
                  binding arbitration in accordance with the rules of the American Arbitration Association, except 
                  where prohibited by law. You waive any right to participate in a class-action lawsuit or class-wide 
                  arbitration.
                </p>
              </div>
            </div>

            {/* Section 12: Termination */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Ban className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">12. Termination</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  You may terminate your account at any time by contacting us or using account deletion features 
                  in the platform. We may terminate or suspend your account immediately, without prior notice, 
                  for any violation of these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. Provisions of these Terms 
                  that by their nature should survive termination shall survive, including ownership provisions, 
                  warranty disclaimers, and limitations of liability.
                </p>
              </div>
            </div>

            {/* Section 13: General Provisions */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">13. General Provisions</h2>
              </div>
              <div className="ml-14 space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">13.1 Entire Agreement</h3>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
                  BlueCollar regarding the Service.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">13.2 Severability</h3>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
                  limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain 
                  in full force and effect.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">13.3 Waiver</h3>
                <p>
                  No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term 
                  or any other term.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6">13.4 Contact Information</h3>
                <p>
                  If you have any questions about these Terms, please contact us at{" "}
                  <Link href="/contact" className="text-primary-600 hover:text-primary-700 underline">
                    our contact page
                  </Link>.
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-primary-100 mt-12">
              <p className="text-gray-700 font-medium text-center">
                By using BlueCollar, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
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

