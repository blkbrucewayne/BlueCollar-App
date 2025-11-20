"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageSquare, 
  Book, 
  Shield, 
  CreditCard, 
  User, 
  Briefcase,
  Mail,
  FileText,
  Settings,
  AlertCircle
} from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // Getting Started
  {
    id: "1",
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button in the top navigation. You'll be asked to choose between being a client (who needs help) or a worker (who provides services). Fill in your basic information, verify your email, and you're ready to start!",
    category: "getting-started"
  },
  {
    id: "2",
    question: "What's the difference between a client and a worker account?",
    answer: "A client account allows you to post tasks and hire workers to complete them. A worker account allows you to browse available tasks, apply for jobs, and get paid for completing work. You can switch between roles in your account settings if needed.",
    category: "getting-started"
  },
  {
    id: "3",
    question: "How do I post my first task?",
    answer: "Once you're logged in as a client, click 'Post a Task' in the navigation menu. Fill in the task details including title, description, category, budget, location, and deadline. Review your posting and submit it. Workers will then be able to see and apply for your task.",
    category: "getting-started"
  },
  {
    id: "4",
    question: "How do I find tasks to work on?",
    answer: "As a worker, browse the 'Tasks' page to see all available jobs. You can filter by category, location, or search for specific keywords. Click on a task to view details, then click 'Apply' if you're interested. The client will review applications and choose a worker.",
    category: "getting-started"
  },
  
  // Payments
  {
    id: "5",
    question: "How does payment work?",
    answer: "Clients add payment information when posting a task. When you select a worker, the payment is held securely by BlueCollar. Once the task is completed and the client approves the work, payment is released to the worker. This ensures both parties are protected.",
    category: "payments"
  },
  {
    id: "6",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital payment methods. Payment information is securely processed through our encrypted payment system. We never store your full card details on our servers.",
    category: "payments"
  },
  {
    id: "7",
    question: "How long does it take to receive payment?",
    answer: "Workers typically receive payment within 2-3 business days after the client approves the completed task. Payment is automatically transferred to the payment method on file in your account.",
    category: "payments"
  },
  {
    id: "8",
    question: "Are there any fees?",
    answer: "Yes, BlueCollar charges a small service fee to cover platform costs and payment processing. This fee is deducted from the worker's payment. Clients may see a small processing fee added to their transaction. All fees are clearly displayed before you confirm any transaction.",
    category: "payments"
  },
  
  // Safety & Security
  {
    id: "9",
    question: "How do you verify workers?",
    answer: "All workers go through a verification process that includes identity verification, background checks, and skill validation. We also use a rating and review system where clients can rate their experience, helping build a trusted community.",
    category: "safety"
  },
  {
    id: "10",
    question: "What if I have a problem with a worker or client?",
    answer: "If you encounter any issues, you can report them through our support system. Click 'Contact Support' on any page or use the 'Report' button on task listings or profiles. Our team will investigate and help resolve the issue promptly.",
    category: "safety"
  },
  {
    id: "11",
    question: "How is my personal information protected?",
    answer: "We take privacy seriously. Your personal information is encrypted and stored securely. We never share your contact details with other users until you explicitly choose to communicate through our platform. Review our Privacy Policy for complete details.",
    category: "safety"
  },
  {
    id: "12",
    question: "What should I do if a task isn't completed correctly?",
    answer: "First, try communicating with the worker through our messaging system to resolve the issue. If that doesn't work, you can request revisions or file a dispute through your task dashboard. Our support team will review the case and help reach a resolution.",
    category: "safety"
  },
  
  // For Clients
  {
    id: "13",
    question: "How do I choose the right worker?",
    answer: "Review each worker's profile, including their ratings, reviews, completed tasks, and portfolio if available. Look for workers who have experience with similar tasks and positive feedback from previous clients. You can also message workers to ask questions before making your decision.",
    category: "clients"
  },
  {
    id: "14",
    question: "Can I cancel a task?",
    answer: "Yes, you can cancel a task before a worker is selected without any charges. If you've already selected a worker, cancellation policies depend on the task status. Check the cancellation terms in your task agreement, or contact support for assistance.",
    category: "clients"
  },
  {
    id: "15",
    question: "What if no one applies to my task?",
    answer: "If you're not receiving applications, try adjusting your task details: increase the budget, extend the deadline, or make the description more detailed. You can also browse similar tasks to see what's working for others and adjust your posting accordingly.",
    category: "clients"
  },
  
  // For Workers
  {
    id: "16",
    question: "How do I get more tasks?",
    answer: "Build a strong profile with a clear bio, portfolio of past work, and positive reviews. Apply promptly to new tasks that match your skills. Maintain a high rating by completing tasks on time and communicating well with clients. Consider taking on smaller tasks initially to build your reputation.",
    category: "workers"
  },
  {
    id: "17",
    question: "What if a client cancels after I start work?",
    answer: "Our cancellation policy protects workers for work already completed. If a client cancels after you've begun, you may be eligible for partial or full payment depending on how much work was completed. Contact support if you believe you're owed payment for cancelled work.",
    category: "workers"
  },
  {
    id: "18",
    question: "How do I increase my ratings?",
    answer: "Provide excellent service by communicating clearly, meeting deadlines, and delivering quality work. Follow up with clients after task completion to ensure satisfaction. Always be professional and responsive. Great reviews will naturally improve your rating over time.",
    category: "workers"
  },
  {
    id: "19",
    question: "Can I work on multiple tasks at once?",
    answer: "Yes, as long as you can manage your time effectively and meet all deadlines. Be honest with clients about your availability and don't overcommit. Remember that your reputation is built on completing tasks successfully and on time.",
    category: "workers"
  }
];

const categories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "getting-started", name: "Getting Started", icon: Book },
  { id: "payments", name: "Payments & Billing", icon: CreditCard },
  { id: "safety", name: "Safety & Security", icon: Shield },
  { id: "clients", name: "For Clients", icon: User },
  { id: "workers", name: "For Workers", icon: Briefcase },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = 
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Find answers to common questions and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/contact"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-4"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contact Support</h3>
                <p className="text-sm text-gray-600">Get in touch with our team</p>
              </div>
            </Link>
            
            <Link
              href="/safety"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-4"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Safety Guidelines</h3>
                <p className="text-sm text-gray-600">Learn about staying safe</p>
              </div>
            </Link>
            
            <Link
              href="/terms"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-4"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Terms & Policies</h3>
                <p className="text-sm text-gray-600">Read our terms of service</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                    isSelected
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === "all" 
              ? "Frequently Asked Questions" 
              : `Questions about ${categories.find(c => c.id === selectedCategory)?.name}`
            }
          </h2>
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No questions found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    {openFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-primary-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Contact Support
            </Link>
            <Link
              href="/safety"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-primary-600 flex items-center justify-center gap-2"
            >
              <Shield className="h-5 w-5" />
              Safety Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
