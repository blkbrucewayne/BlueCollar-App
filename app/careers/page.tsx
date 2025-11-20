import Link from "next/link";
import { ArrowRight, Briefcase, Heart, Users, Zap, Shield, DollarSign, Clock, Globe, Coffee, TrendingUp, Code, Megaphone, Headphones, BarChart } from "lucide-react";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      icon: Code,
      description: "Build and scale our platform using modern technologies. Lead technical initiatives and mentor junior developers."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York, NY",
      type: "Full-time",
      icon: TrendingUp,
      description: "Drive product strategy and roadmap. Work closely with engineering, design, and stakeholders to deliver exceptional user experiences."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Austin, TX",
      type: "Full-time",
      icon: Megaphone,
      description: "Develop and execute marketing strategies to grow our user base. Manage campaigns across multiple channels."
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      icon: Headphones,
      description: "Help our users succeed on the platform. Provide exceptional support and build relationships with clients and workers."
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      icon: BarChart,
      description: "Analyze platform data to drive business decisions. Create reports and dashboards to track key metrics."
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "We offer competitive compensation packages with equity options."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance matters. Flexible schedules and remote work options."
    },
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere. We're a distributed team with a remote-first culture."
    },
    {
      icon: Coffee,
      title: "Team Building",
      description: "Regular team events, retreats, and opportunities to connect with colleagues."
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Continuous learning with professional development budgets and mentorship programs."
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working together, sharing ideas, and supporting each other's growth."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Understanding our users' needs and creating solutions that truly make a difference."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We encourage creative thinking and aren't afraid to try new approaches."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We do the right thing, even when it's hard. Trust and transparency guide our decisions."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the BlueCollar Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Help us build the future of local work. We're looking for passionate people who want to make a real impact.
            </p>
            <Link
              href="#open-positions"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition border-2 border-white inline-flex items-center gap-2"
            >
              View Open Positions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work at BlueCollar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building something meaningful that connects communities and empowers local workers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team so you can focus on doing your best work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => {
              const Icon = position.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <p className="text-gray-600 mb-3">{position.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <Globe className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                      className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a position that matches your skills? We'd still love to hear from you!
            </p>
            <Link
              href="/careers/apply"
              className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
            >
              Apply for General Consideration
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At BlueCollar, we believe that great products are built by great teams. We're a diverse group 
                  of individuals united by our passion for making a positive impact in local communities.
                </p>
                <p>
                  We value open communication, continuous learning, and work-life balance. Our team members are 
                  encouraged to bring their authentic selves to work and contribute their unique perspectives.
                </p>
                <p>
                  Whether you're working from home, a coffee shop, or our office spaces, you'll find a supportive 
                  environment where your ideas matter and your growth is prioritized.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">What Our Team Says</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 italic mb-2">
                    "Working at BlueCollar has been an incredible experience. I love that we're building something 
                    that truly helps people in their communities."
                  </p>
                  <p className="text-sm text-gray-500">— Sarah, Senior Developer</p>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    "The flexibility and trust here are unmatched. I can do my best work while maintaining a 
                    healthy work-life balance."
                  </p>
                  <p className="text-sm text-gray-500">— Michael, Product Manager</p>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    "I've grown so much professionally since joining. The learning opportunities and mentorship 
                    are fantastic."
                  </p>
                  <p className="text-sm text-gray-500">— Jessica, Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-xl text-gray-600">
              Our application process is straightforward and transparent.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Your Application</h3>
                  <p className="text-gray-600">
                    Fill out our application form and upload your resume. Tell us why you're excited about BlueCollar!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Review</h3>
                  <p className="text-gray-600">
                    Our team reviews your application. If there's a good fit, we'll reach out within 1-2 weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview Process</h3>
                  <p className="text-gray-600">
                    You'll meet with the team through video calls. We'll discuss your experience, our culture, 
                    and how you can contribute.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Decision & Onboarding</h3>
                  <p className="text-gray-600">
                    If selected, we'll extend an offer and begin the onboarding process. Welcome to the team!
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
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-primary-100">
            We're always looking for talented people who share our mission and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#open-positions"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition border-2 border-white flex items-center justify-center gap-2"
            >
              View Open Positions
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/careers/apply"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              General Application
              <Briefcase className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

