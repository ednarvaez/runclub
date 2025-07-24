import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

const blogPost = {
  id: 1,
  title: "Finding Your Pace: How Joining a Run Club Changed My Life",
  excerpt: "From couch potato to community runner - discover how finding the right running group can transform not just your fitness, but your entire outlook on life.",
  content: `
    <p>Two years ago, I was the person who drove around the parking lot looking for the closest spot to the grocery store entrance. The idea of running for "fun" seemed as foreign to me as speaking Mandarin. Yet here I am today, having just completed my third half marathon with my local run club cheering me on at every mile marker.</p>

    <p>My journey began on a particularly difficult Tuesday morning. I'd been working remotely for months, barely leaving my apartment except for essential trips. The pandemic had taken its toll on my physical and mental health, and I knew something had to change. That's when I stumbled across an Instagram post from the <strong>Brooklyn Bridge Runners</strong> - a local club that welcomed runners of all levels.</p>

    <h2>The First Run (And Why I Almost Quit)</h2>

    <p>I'll be honest - my first group run was humbling. What I thought would be a casual jog around Prospect Park turned into a reality check about my fitness level. While others chatted easily as they ran, I was huffing and puffing just trying to keep up with the "beginner" pace group.</p>

    <p>But something magical happened around mile two. Sarah, one of the veteran runners, slowed down to match my pace. Instead of making me feel embarrassed about my struggles, she shared stories about her own running journey. "I couldn't run a full block when I started," she laughed. "Now look at me - I'm training for Boston!"</p>

    <h2>Building Community, One Mile at a Time</h2>

    <p>What I discovered over the following weeks was that run clubs aren't really about running - they're about community. Sure, we cover miles together, but we also share life stories, celebrate personal victories, and support each other through challenges both on and off the road.</p>

    <p>The diversity of our group never ceases to amaze me. We have teachers and lawyers, students and retirees, marathon veterans and complete beginners. What unites us isn't our pace or our personal records - it's our commitment to showing up for ourselves and each other.</p>

    <h2>The Unexpected Benefits</h2>

    <p>Beyond the obvious physical improvements (I've lost 25 pounds and can now run a 5K without stopping), joining a run club has enriched my life in ways I never expected:</p>

    <ul>
      <li><strong>Built-in accountability:</strong> It's much harder to skip a workout when you know your running buddies are counting on you.</li>
      <li><strong>Exploration of the city:</strong> Our weekly routes have taken me to neighborhoods and parks I never knew existed.</li>
      <li><strong>Mental health boost:</strong> The combination of exercise, fresh air, and social connection has been better than any therapy.</li>
      <li><strong>Goal achievement:</strong> Having a supportive group helped me set and reach goals I never thought possible.</li>
    </ul>

    <h2>Finding Your Perfect Fit</h2>

    <p>Not every run club is the same, and that's a good thing. Some focus on speed and competition, while others prioritize inclusivity and fun. Some meet early in the morning, others prefer evening runs. The key is finding a group that aligns with your goals and schedule.</p>

    <p>Here are some questions to consider when choosing a run club:</p>

    <ul>
      <li>What's the typical pace and distance?</li>
      <li>Do they accommodate different fitness levels?</li>
      <li>What's the group dynamic like?</li>
      <li>How often do they meet?</li>
      <li>Are there opportunities for social activities beyond running?</li>
    </ul>

    <h2>Take the First Step</h2>

    <p>If you're reading this and feeling hesitant about joining a run club, I understand. The thought of running with strangers can be intimidating. But I promise you this - most running communities are incredibly welcoming and supportive. We've all been beginners, and we remember what it feels like.</p>

    <p>Start by showing up to just one run. Don't worry about your pace, your gear, or whether you'll be able to keep up. Focus on taking that first step out the door. The rest will follow naturally.</p>

    <p>Two years later, I can confidently say that joining a run club was one of the best decisions I've ever made. It gave me more than just physical fitness - it gave me a community, confidence, and a new perspective on what I'm capable of achieving.</p>

    <p>So lace up those shoes, find a local group, and discover what running with others can do for you. Your future self will thank you.</p>
  `,
  author: "Jessica Chen",
  publishedAt: "2025-01-20",
  readTime: "7 min read",
  tags: ["Community", "Beginner Tips", "Personal Journey", "Mental Health"],
  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80"
};

export default function BlogPage() {
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
          <h1 className="text-3xl font-bold text-gray-900">RunClub Blog</h1>
          <p className="text-gray-600 mt-2">Stories, tips, and insights from the running community</p>
        </div>
      </div>

      {/* Blog Post */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to Find Your Run Club?
              </h3>
              <p className="text-gray-600 mb-4">
                Discover running communities in your area and start your own journey today.
              </p>
              <Link
                href="/search"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
              >
                Find Run Clubs Near You
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* More Posts Placeholder */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Stories Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re working on bringing you more inspiring stories, training tips, and community spotlights. 
            Check back soon for new content!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">📝 Training Tips</h3>
              <p className="text-sm text-gray-600">Expert advice for runners of all levels</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🏃‍♀️ Community Spotlights</h3>
              <p className="text-sm text-gray-600">Featuring amazing run clubs and their members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}