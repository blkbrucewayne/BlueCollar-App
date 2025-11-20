import Link from "next/link";
import { ArrowRight, Briefcase, Heart, Target, Users, Zap, Shield, Star, CheckCircle, Handshake, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BlueCollar
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Connecting communities through local talent and trusted service. 
              Empowering workers, simplifying life for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create a platform where local workers can showcase their skills and clients can find reliable, 
              affordable help for any task, building stronger communities in the process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading platform for connecting local talent with opportunities, 
                empowering workers and simplifying life for clients across every community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Trust, transparency, and community are at the heart of everything we do. 
                We believe in fair work and fair pay for everyone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
              <p className="text-gray-600">
                We're committed to providing a safe, secure, and user-friendly platform 
                that benefits both workers and clients equally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              BlueCollar was founded with a simple yet powerful idea: everyone deserves access to quality local services, 
              and skilled workers deserve fair opportunities to showcase their talents and earn a living wage.
            </p>
            <p>
              We noticed a growing disconnect in the gig economy. Finding reliable help for everyday tasks was often 
              difficult, expensive, and impersonal. Meanwhile, talented local workers—from handymen to cleaners, 
              movers to delivery drivers—struggled to find consistent work and fair compensation. Traditional job 
              platforms were either too corporate or too unreliable, leaving both sides frustrated.
            </p>
            <p>
              BlueCollar bridges this gap by creating a platform that connects these two groups directly, 
              fostering genuine community connections while ensuring transparency, safety, and fair treatment for all. 
              We built our platform with the belief that local economies thrive when neighbors help neighbors, 
              and when skilled workers are valued and compensated fairly.
            </p>
            <p>
              Today, we're proud to support thousands of workers and clients across communities nationwide, 
              helping people get things done while building meaningful connections and supporting local economies. 
              Every task completed on BlueCollar strengthens our communities and empowers local workers to build 
              sustainable careers doing what they do best.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and shape how we serve our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust & Safety</h3>
              <p className="text-gray-600 text-sm">
                We verify workers, secure payments, and maintain a safe environment for everyone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fairness</h3>
              <p className="text-gray-600 text-sm">
                Fair pay for workers, fair prices for clients. We ensure everyone gets a good deal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Building connections between neighbors, supporting local economies, and strengthening communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                Clear pricing, honest reviews, and open communication. No hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">BlueCollar By The Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our impact in communities across the country
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primary-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-gray-600 font-medium">Active Users</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primary-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <p className="text-gray-600 font-medium">Tasks Completed</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primary-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.8/5</div>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primary-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose BlueCollar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a platform—we're a community built on trust and mutual respect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verified & Secure</h3>
                  <p className="text-gray-600">
                    All workers are verified, and all payments are processed securely through our platform 
                    with comprehensive buyer and worker protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                  <p className="text-gray-600">
                    Our rating and review system ensures you work with the best. Every worker is rated 
                    by the community for quality and reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast & Local</h3>
                  <p className="text-gray-600">
                    Connect with skilled workers in your area for fast, reliable service. 
                    No waiting, no long-distance travel fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fair for Everyone</h3>
                  <p className="text-gray-600">
                    Transparent pricing, fair wages, and no hidden fees. We believe in creating 
                    value for both workers and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the BlueCollar Community</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Be part of a platform that values local talent and community connections. 
            Whether you need help or want to work, we're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register?role=client"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition border-2 border-white flex items-center justify-center gap-2"
            >
              I Need Help
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/auth/register?role=worker"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition border-2 border-white flex items-center justify-center gap-2"
            >
              I Want to Work
              <Briefcase className="h-5 w-5" />
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

