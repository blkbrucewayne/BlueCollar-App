import Link from "next/link";
import { 
  ArrowRight, 
  Briefcase, 
  CheckCircle, 
  FileText, 
  Search, 
  MessageSquare, 
  CreditCard, 
  Star,
  Shield,
  Clock,
  DollarSign,
  UserCheck,
  Calendar,
  MapPin,
  ThumbsUp
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How BlueCollar Works
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              A simple, secure way to connect clients with skilled local workers
            </p>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get help with any task quickly and easily
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Post Your Task</h3>
              <p className="text-gray-600 text-sm">
                Create a detailed description of what you need done. Include the task type, location, budget, and deadline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Review Applications</h3>
              <p className="text-gray-600 text-sm">
                Qualified workers will apply for your task. Review their profiles, ratings, and previous work to find the best match.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Worker</h3>
              <p className="text-gray-600 text-sm">
                Select the worker that best fits your needs. You can message them directly to discuss details before confirming.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get It Done</h3>
              <p className="text-gray-600 text-sm">
                Your worker completes the task. Review their work, leave feedback, and payment is processed securely.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Client Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Secure Payments</h4>
                  <p className="text-gray-600 text-sm">
                    Your payment is held securely until the task is completed to your satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Verified Workers</h4>
                  <p className="text-gray-600 text-sm">
                    All workers are verified and rated by previous clients for quality assurance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Quick Response</h4>
                  <p className="text-gray-600 text-sm">
                    Get multiple applications within hours and choose the best fit for your timeline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <DollarSign className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Fair Pricing</h4>
                  <p className="text-gray-600 text-sm">
                    Set your own budget and compare offers from multiple qualified workers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Workers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Workers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find work opportunities and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600 text-sm">
                Sign up and build your professional profile. Add your skills, experience, and showcase your previous work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Tasks</h3>
              <p className="text-gray-600 text-sm">
                Search for tasks that match your skills and location. Filter by category, budget, and distance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply for Tasks</h3>
              <p className="text-gray-600 text-sm">
                Submit applications with your proposed rate and timeline. Communicate directly with clients to discuss details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 -mt-2 ml-auto">
                <span className="text-sm font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
              <p className="text-gray-600 text-sm">
                Complete the task, get client approval, and receive secure payment directly to your account.
              </p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Worker Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <DollarSign className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Fair Earnings</h4>
                  <p className="text-gray-600 text-sm">
                    Set your own rates and keep 100% of what you earn. No hidden fees or commissions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Flexible Schedule</h4>
                  <p className="text-gray-600 text-sm">
                    Choose when and where you work. Accept tasks that fit your availability and lifestyle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Local Opportunities</h4>
                  <p className="text-gray-600 text-sm">
                    Find work in your area. Build relationships with local clients and grow your reputation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ThumbsUp className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Build Your Reputation</h4>
                  <p className="text-gray-600 text-sm">
                    Earn reviews and ratings that help you get more work and higher-paying opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a smooth experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
              <p className="text-gray-600">
                All transactions are protected with secure payment processing. Your personal information is always kept private.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
              <p className="text-gray-600">
                Message workers or clients directly through our platform to discuss task details, timelines, and expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reviews & Ratings</h3>
              <p className="text-gray-600">
                Build trust through our comprehensive review system. See what others say before you commit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
              <p className="text-gray-600">
                Simple, secure payment processing. Funds are held safely until work is completed and approved.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Matching</h3>
              <p className="text-gray-600">
                Get matched with the right workers or tasks quickly. Our platform makes finding what you need easy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We're committed to ensuring quality work. Our support team is here to help if issues arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about using BlueCollar
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do I post a task?</h3>
              <p className="text-gray-600">
                Simply sign up as a client, click "Post Task," and fill out the details including what you need done, 
                your budget, location, and deadline. Your task will be visible to qualified workers in your area.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How are workers verified?</h3>
              <p className="text-gray-600">
                All workers go through a verification process when they sign up. We verify identity and allow the 
                community to build trust through reviews and ratings from completed tasks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How does payment work?</h3>
              <p className="text-gray-600">
                When you accept a worker's application, payment is held securely in escrow. Once the task is completed 
                and you approve the work, the payment is released to the worker. If there are any issues, our support 
                team can help mediate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What if I'm not satisfied with the work?</h3>
              <p className="text-gray-600">
                We want you to be happy with the results. If you're not satisfied, you can request revisions or contact 
                our support team. We'll work with you and the worker to resolve any issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How much does it cost to use BlueCollar?</h3>
              <p className="text-gray-600">
                For clients, posting tasks is free. You only pay for the work completed. For workers, there are no 
                subscription fees or commissions - you keep 100% of what you earn.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can I work as both a client and a worker?</h3>
              <p className="text-gray-600">
                Yes! Many users both post tasks and apply for work. You can switch between roles seamlessly on the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of satisfied clients and workers on BlueCollar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register?role=client"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition border-2 border-white flex items-center justify-center gap-2"
            >
              I Need Help
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/auth/register?role=worker"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition border-2 border-white flex items-center justify-center gap-2"
            >
              I Want to Work
              <Briefcase className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

