import Link from "next/link";
import { ArrowRight, Briefcase, Heart, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About BlueCollar
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Connecting communities through local talent and trusted service
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
                empowering workers and simplifying life for clients.
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
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              BlueCollar was founded with a simple idea: everyone deserves access to quality local services, 
              and skilled workers deserve fair opportunities to showcase their talents and earn a living.
            </p>
            <p className="text-gray-600 mb-4">
              We noticed that finding reliable help for everyday tasks was often difficult and expensive, 
              while talented local workers struggled to find consistent work. BlueCollar bridges this gap 
              by creating a platform that connects these two groups directly.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we're proud to support thousands of workers and clients across communities, 
              helping people get things done while building meaningful connections and supporting local economies.
            </p>
          </div>
        </div>
      </section>

      {/* Team/Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">By The Numbers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-gray-600">Active Users</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <p className="text-gray-600">Tasks Completed</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.8/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the BlueCollar Community</h2>
          <p className="text-xl mb-8 text-primary-100">
            Be part of a platform that values local talent and community connections
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

