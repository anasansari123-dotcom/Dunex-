"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Dubai Real Estate Market Trends 2024: What Investors Need to Know",
      description:
        "Discover the latest trends shaping Dubai's real estate market in 2024. From luxury developments to investment opportunities, get insights from our market experts on what's driving growth and where the best opportunities lie.",
      image: "/dubai-skyline.jpg", // Changed to a more realistic image name
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
      image: "/downtown-dubai.jpg",
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
      image: "/off-plan-properties.jpg",
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
      image: "/sustainable-dubai.jpg",
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
      image: "/marina-palm.jpg",
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
      image: "/dubai-visa.jpg",
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

  // State for animations
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-[var(--foreground)] overflow-hidden" style={{ background: "linear-gradient(to bottom, var(--secondary), #0e1f4a, #1e2f54)" }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#D4AF37]/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/second.jpg" // Changed to a more realistic image name
            alt="Dubai Real Estate"
            fill
            className="object-cover"
            priority
          />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071538]/85 via-transparent to-[#071538]/60 animate-gradient-shift"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-wider text-[var(--primary)] animate-pulse-slow">
              Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl font-light animate-fade-in-delay">
              Your Guide to Dubai&apos;s Real Estate
            </p>
            
            {/* Animated scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Latest Dubai Real Estate News */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">
                Latest Dubai Real Estate News
              </h2>
              <p className="text-gray-300">
                Dedicated Blogs Written By Finexa Properties Experts.
              </p>
            </div>

            <div className="space-y-4">
              {latestNews.map((news, index) => (
                <div
                  key={news.id}
                  className="border-l-4 border-[#D4AF37] pl-4 py-2 bg-white/5 rounded-md transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
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
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-fade-in-up delay-300">
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-[#D4AF37] to-[#c79a2a] rounded-xl flex items-center justify-center animate-pulse-slow">
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
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center animate-fade-in-up">
            Featured Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Blog Image - Fixed with proper handling */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#D4AF37] text-[#071538] px-3 py-1 rounded-full text-xs font-bold transform transition-all duration-300 hover:scale-110">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-[#D4AF37] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#D4AF37]/40">
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
                  <div className="flex items-center justify-between gap-3">
                    <button className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#c79a2a] text-[#071538] py-3 px-4 rounded-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      Read More →
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-[#FFD700] to-[#FBBF24] text-[#0A1F44] py-3 px-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                      Invest
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-[1.01] animate-fade-in-up delay-500">
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
              className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300 focus:scale-[1.02]"
            />
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#c79a2a] text-[#071538] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Back to Home Button */}
      <div className="fixed bottom-6 left-6 z-40 animate-bounce-slow">
        <a
          href="/"
          className="bg-gradient-to-r from-[#D4AF37] to-[#c79a2a] text-[#071538] px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 shadow-lg"
        >
          ← Back to Home
        </a>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 1; }
          100% { transform: translateY(-40px) rotate(10deg); opacity: 0; }
        }
        
        @keyframes pulseSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bounceSlow {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
        
        .animate-gradient-shift {
          background: linear-gradient(270deg, #071538, #0c1b3a, #13244a);
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 1s forwards;
          animation-delay: 0.5s;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}