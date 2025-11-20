import Link from "next/link";
import { Shield, AlertCircle, UserCheck, CreditCard, MessageSquare, Phone, Lock, Eye, CheckCircle, Ban, Flag, Star } from "lucide-react";

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Safety First
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Your safety and security are our top priorities. Learn how we protect you and how you can stay safe.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Keep You Safe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BlueCollar employs multiple layers of security to ensure a safe experience for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Identity Verification</h3>
              <p className="text-gray-600">
                All users go through identity verification to ensure authentic profiles and build trust within our community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                All payments are processed securely through our platform with encrypted transactions and fraud protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Background Checks</h3>
              <p className="text-gray-600">
                Workers can opt-in for background checks, giving clients peace of mind when selecting a professional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rating System</h3>
              <p className="text-gray-600">
                Transparent reviews and ratings help you make informed decisions and maintain quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">In-App Messaging</h3>
              <p className="text-gray-600">
                Communicate securely through our platform to maintain privacy and keep records of all conversations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Flag className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our support team is always available to help with safety concerns, disputes, or any issues you may encounter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips for Clients */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Tips for Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to ensure a safe and positive experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Review Worker Profiles</h3>
                  <p className="text-gray-600">
                    Check ratings, reviews, and verification badges before hiring. Read previous client feedback to understand their work quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Communicate Through the Platform</h3>
                  <p className="text-gray-600">
                    Keep all communication within BlueCollar's messaging system. This protects your privacy and provides a record if needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Meet in Public First</h3>
                  <p className="text-gray-600">
                    For larger tasks, consider meeting in a public place first to discuss details. Trust your instincts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Share Your Location</h3>
                  <p className="text-gray-600">
                    Let a friend or family member know when a worker is coming and share your location for added security.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Verify Before Payment</h3>
                  <p className="text-gray-600">
                    Only release payment after work is completed to your satisfaction. Use the platform's payment system for protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Trust Your Instincts</h3>
                  <p className="text-gray-600">
                    If something feels off, don't proceed. Report any suspicious behavior to our support team immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips for Workers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Tips for Workers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect yourself while providing excellent service to clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Verify Client Profiles</h3>
                  <p className="text-gray-600">
                    Check client ratings and history. Clients with verified profiles and positive reviews are generally safer to work with.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Clarify Task Details</h3>
                  <p className="text-gray-600">
                    Discuss all task details, timeline, and payment terms through the platform before starting work. Get everything in writing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Share Your Location</h3>
                  <p className="text-gray-600">
                    Let someone know where you're working and when you expect to finish. Share your location with a trusted contact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Set Boundaries</h3>
                  <p className="text-gray-600">
                    Only perform work within the agreed scope. Don't feel pressured to do additional tasks without proper compensation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Document Your Work</h3>
                  <p className="text-gray-600">
                    Take photos before and after completing tasks. This protects you in case of disputes and helps with payment verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Never Pay Upfront</h3>
                  <p className="text-gray-600">
                    Legitimate clients won't ask you to pay fees upfront. All payments should come through the platform after work completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Payment Practices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safe Payment Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding how payments work on BlueCollar keeps everyone safe
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CreditCard className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Always Use the Platform</h3>
                  <p className="text-gray-600">
                    All payments must be processed through BlueCollar. Never pay or accept payment outside the platform. This protects both parties from fraud and ensures dispute resolution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Secure Payment Processing</h3>
                  <p className="text-gray-600">
                    We use industry-standard encryption and secure payment processors to protect your financial information. Your payment details are never shared with workers or clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Payment Protection</h3>
                  <p className="text-gray-600">
                    Funds are held securely until work is completed and approved. This ensures clients receive quality work and workers receive fair payment.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Red Flags to Watch For</h4>
                    <ul className="text-yellow-700 space-y-1 text-sm">
                      <li>• Requests to pay outside the platform</li>
                      <li>• Requests for upfront fees or deposits from workers</li>
                      <li>• Offers that seem too good to be true</li>
                      <li>• Pressure to make quick decisions</li>
                      <li>• Requests for personal financial information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Issues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Report Safety Concerns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take all safety reports seriously. Here's how to report issues
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Report in App</h3>
              <p className="text-gray-600 mb-4">
                Use the report button on any profile or message to flag inappropriate behavior instantly.
              </p>
              <Link
                href="/contact"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                Contact Support →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send detailed reports to our safety team for immediate review and action.
              </p>
              <a
                href="mailto:safety@bluecollar.com"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                safety@bluecollar.com →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
              <p className="text-gray-600 mb-4">
                For urgent safety matters, contact our 24/7 emergency support line.
              </p>
              <a
                href="tel:+1-800-SAFETY1"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                Call Emergency Line →
              </a>
            </div>
          </div>

          <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-red-800 mb-2">In Case of Emergency</h4>
                <p className="text-red-700 mb-2">
                  If you're in immediate danger, call local emergency services (911 in the US) first, then contact us.
                </p>
                <p className="text-red-700">
                  Trust your instincts. If a situation feels unsafe, remove yourself from it and report it to us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Guidelines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us maintain a safe and respectful community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                What We Encourage
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Respectful and professional communication</li>
                <li>• Honest and accurate task descriptions</li>
                <li>• Fair pricing and transparent expectations</li>
                <li>• Timely completion of agreed-upon work</li>
                <li>• Constructive and honest reviews</li>
                <li>• Helping others in the community</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Ban className="h-5 w-5 text-red-600" />
                What We Prohibit
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Harassment, discrimination, or abusive behavior</li>
                <li>• Fraud, scams, or misleading information</li>
                <li>• Payment outside the platform</li>
                <li>• Dangerous or illegal activities</li>
                <li>• Sharing personal contact information</li>
                <li>• Fake reviews or ratings manipulation</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Violations of our community guidelines may result in warnings, account suspension, or permanent ban.
            </p>
            <Link
              href="/terms"
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              Read Full Terms of Service →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Safety?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Our safety team is here to help. Don't hesitate to reach out with any concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition border-2 border-white inline-flex items-center justify-center gap-2"
            >
              Contact Support
              <MessageSquare className="h-5 w-5" />
            </Link>
            <Link
              href="/help"
              className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition border-2 border-white inline-flex items-center justify-center gap-2"
            >
              Visit Help Center
              <Shield className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

