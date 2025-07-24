import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Target, Users, TrendingUp, Mail, Phone } from 'lucide-react';

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Partner With Us</h1>
          <p className="text-gray-600 mt-2">Connect with the running community through RunClub Finder</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Reach Active, Engaged Runners
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Partner with RunClub Finder to connect your brand with thousands of passionate runners 
                who are actively seeking products, services, and experiences that enhance their running journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors text-center"
                >
                  Get Started
                </a>
                <a
                  href="#packages"
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
                >
                  View Packages
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Runners in action"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner With Us */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Partner With RunClub Finder?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re the premier destination for runners looking to connect with their community. 
            Our audience is highly engaged, health-conscious, and actively seeking products and services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeted Audience</h3>
            <p className="text-gray-600">
              Reach runners who are actively searching for clubs, gear, training programs, 
              and running-related services in their area.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Engaged Community</h3>
            <p className="text-gray-600">
              Our users are passionate about running and actively participate in the running 
              community through clubs, events, and races.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibred text-gray-900 mb-3">Growing Platform</h3>
            <p className="text-gray-600">
              Join us as we expand to new cities and grow our community of runners looking 
              for authentic connections and quality recommendations.
            </p>
          </div>
        </div>

        {/* Partnership Packages */}
        <div id="packages" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Partnership Packages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Supporter</h3>
              <div className="text-3xl font-bold text-orange-500 mb-6">Starting at $299/mo</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Logo placement on homepage
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Listing in partner directory
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Social media mentions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Monthly analytics report
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Running Partner</h3>
              <div className="text-3xl font-bold text-orange-500 mb-6">Starting at $599/mo</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Everything in Community Supporter
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Featured placement on search results
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Blog post collaboration
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Newsletter sponsorship
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Event promotion opportunities
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Title Sponsor</h3>
              <div className="text-3xl font-bold text-orange-500 mb-6">Custom Pricing</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Everything in Running Partner
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom branded content
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Exclusive category sponsorship
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Event partnership opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated account management
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Partner With Us?
              </h3>
              <p className="text-gray-600 mb-6">
                Let&apos;s discuss how we can help you reach the running community and grow your business. 
                Our partnership team is here to create a custom solution that fits your goals and budget.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">partnerships@runclubfinder.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your partnership goals..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}