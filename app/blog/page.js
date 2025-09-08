import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Dubai Real Estate Market Trends 2024: What Investors Need to Know",
      description:
        "Discover the latest trends shaping Dubai's real estate market in 2024. From luxury developments to investment opportunities, get insights from our market experts on what's driving growth and where the best opportunities lie.",
      image: "/blog-market-trends.jpg",
      category: "Market Analysis",
      readTime: "8 min read",
      author: "Sarah Ahmed",
      date: "December 20, 2024",
    },
    {
      id: 2,
      title: "Luxury Living in Downtown Dubai: A Complete Guide",
      description:
        "Explore the pinnacle of urban luxury in Downtown Dubai. From iconic landmarks to world-class amenities, discover why this area remains the most sought-after location for high-end real estate investments.",
      image: "/blog-downtown-guide.jpg",
      category: "Location Guide",
      readTime: "6 min read",
      author: "Michael Chen",
      date: "December 18, 2024",
    },
    {
      id: 3,
      title: "Investment Strategies for Dubai's Off-Plan Properties",
      description:
        "Learn how to navigate Dubai's off-plan property market with confidence. Our comprehensive guide covers everything from developer selection to payment plans and legal considerations for successful investments.",
      image: "/blog-off-plan.jpg",
      category: "Investment Guide",
      readTime: "10 min read",
      author: "Aisha Al-Rashid",
      date: "December 15, 2024",
    },
    {
      id: 4,
      title: "The Future of Sustainable Living in Dubai",
      description:
        "Discover how Dubai is leading the way in sustainable real estate development. From green buildings to eco-friendly communities, explore the city's commitment to environmental responsibility.",
      image: "/blog-sustainable.jpg",
      category: "Sustainability",
      readTime: "7 min read",
      author: "David Thompson",
      date: "December 12, 2024",
    },
    {
      id: 5,
      title: "Dubai Marina vs Palm Jumeirah: Which is Right for You?",
      description:
        "Compare two of Dubai's most iconic waterfront communities. We break down the pros and cons of each location to help you make an informed decision for your next property investment.",
      image: "/blog-marina-vs-palm.jpg",
      category: "Location Comparison",
      readTime: "9 min read",
      author: "Fatima Hassan",
      date: "December 10, 2024",
    },
    {
      id: 6,
      title: "Understanding Dubai's New Visa Regulations for Property Investors",
      description:
        "Stay updated on the latest visa regulations affecting property investors in Dubai. Learn about the new Golden Visa program and how it can benefit your real estate investment strategy.",
      image: "/blog-visa-regulations.jpg",
      category: "Legal Updates",
      readTime: "5 min read",
      author: "Ahmed Al-Mansouri",
      date: "December 8, 2024",
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: "Dubai Real Estate Market Shows Strong Growth in Q4 2024",
      excerpt:
        "The market continues to demonstrate resilience with increasing transaction volumes and property values across key areas.",
      date: "December 15, 2024",
    },
    {
      id: 2,
      title: "New Visa Regulations Boost Property Investment",
      excerpt:
        "Recent changes in visa policies are expected to drive more international investors to Dubai's real estate market.",
      date: "December 12, 2024",
    },
    {
      id: 3,
      title: "Sustainable Development Projects Gain Momentum",
      excerpt:
        "Green building initiatives and eco-friendly developments are becoming increasingly popular among buyers and investors.",
      date: "December 10, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] font-sans text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/first.jpg"
            alt="Dubai Real Estate"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-wider text-[#D4AF37]">
              Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Your Guide to Dubai&apos;s Real Estate
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Latest Dubai Real Estate News */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">
                Latest Dubai Real Estate News
              </h2>
              <p className="text-gray-300">
                Dedicated Blogs Written By Finexa Properties Experts.
              </p>
            </div>

            <div className="space-y-4">
              {latestNews.map((news) => (
                <div
                  key={news.id}
                  className="border-l-4 border-[#D4AF37] pl-4 py-2 bg-white/5 rounded-md"
                >
                  <h3 className="font-semibold text-white mb-1">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{news.excerpt}</p>
                  <span className="text-xs text-gray-400">{news.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Highlight */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-[#D4AF37] to-[#c79a2a] rounded-xl flex items-center justify-center">
                <div className="text-[#071538] text-center font-bold">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  <p className="text-xs">Dubai Skyline</p>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                  Record-Breaking Transaction Volumes
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Dubai's real estate market achieved remarkable milestones in
                  October 2023, with record-breaking monthly transaction volume
                  reaching AED 41.8 billion. The market recorded 5,883
                  transactions covering a total area of 10 million square feet,
                  demonstrating unprecedented growth and investor confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">
            Featured Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Blog Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#D4AF37] to-[#c79a2a] flex items-center justify-center relative overflow-hidden">
                  <div className="text-[#071538] text-center font-bold">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                    <p className="text-sm">Real Estate</p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4AF37] text-[#071538] px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#D4AF37] font-semibold text-xs">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>

                  {/* Action Buttons */}
                {/* Action Buttons */}
<div className="flex items-center justify-between gap-3">
  <button className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#c79a2a] text-[#071538] py-3 px-4 rounded-lg font-bold hover:opacity-90 transition">
    Read More →
  </button>
  <button className="flex-1 bg-gradient-to-r from-[#FFD700] to-[#FBBF24] text-[#0A1F44] py-3 px-4 rounded-lg font-bold hover:scale-105 transition">
    Invest
  </button>
</div>

                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
            Stay Updated with Market Insights
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest Dubai real estate news, market trends, and investment
            opportunities delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#c79a2a] text-[#071538] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Back to Home Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="/"
          className="bg-gradient-to-r from-[#D4AF37] to-[#c79a2a] text-[#071538] px-4 py-2 rounded-lg font-bold hover:opacity-90 transition flex items-center gap-2 shadow-lg"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
