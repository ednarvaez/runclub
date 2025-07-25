import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, MapPin, Calendar } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Our Story</h1>
          <p className="text-gray-600 mt-2">How RunClub Finder came to life</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80"
              alt="Group of runners at sunrise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Connecting Runners, Building Communities</h2>
              <p className="text-lg opacity-90">Est. 2024</p>
            </div>
          </div>

          {/* Story Content */}
          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <h2>The Beginning</h2>
              <p>
                RunClub Finder was born out of a simple frustration: finding the right running group 
                shouldn&apos;t be this hard. Our founder, like many runners, spent countless hours searching 
                through Facebook groups, outdated websites, and word-of-mouth recommendations just to 
                find a local run club that matched their pace and schedule.
              </p>

              <h2>The Problem We Solve</h2>
              <p>
                Running is more than just exercise—it&apos;s about community, accountability, and shared goals. 
                But too many potential runners give up before they even start because they can&apos;t find 
                the right group to run with. Meanwhile, amazing run clubs struggle to reach new members 
                who would love to join their community.
              </p>

              <h2>Our Mission</h2>
              <p>
                We believe that everyone deserves to find their running tribe. Whether you&apos;re a complete 
                beginner looking for encouragement, a competitive runner seeking training partners, or 
                someone who just wants to explore their city on foot with friendly faces, there&apos;s a 
                run club out there for you.
              </p>

              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 my-6">
                &ldquo;Running alone is exercise. Running together is magic.&rdquo;
              </blockquote>

              <h2>What Makes Us Different</h2>
              <p>
                Unlike generic fitness apps or social networks, RunClub Finder is purpose-built for 
                the running community. We verify our listings, provide detailed information about 
                pace groups and meeting times, and make it easy to find exactly what you&apos;re looking for.
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Run Clubs Listed</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <MapPin className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">NYC</div>
                <div className="text-sm text-gray-600">Metro Area Coverage</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Calendar className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">2024</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Looking Ahead</h3>
              <p className="text-gray-600 mb-4">
                This is just the beginning. We&apos;re working on expanding to more cities, adding features 
                like event calendars and training plan sharing, and building tools that help run club 
                organizers manage their communities more effectively.
              </p>
              <p className="text-gray-600">
                Have ideas for how we can better serve the running community? We&apos;d love to hear from you.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/search"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
              >
                Start Your Running Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}