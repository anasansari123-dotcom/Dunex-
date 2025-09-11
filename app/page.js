"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/first.jpg", "/second.jpg", "/third.jpg", "/four.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Scroll-reveal animations
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const faqs = [
    {
      question: "How much ROI do I get?",
      answer: "You earn 10–15% monthly ROI, credited every month."
    },
    {
      question: "Minimum investment amount?",
      answer: "You can start with just ₹1,00,000."
    },
    {
      question: "How will I receive ROI?",
      answer: "ROI is credited directly to your bank account in INR."
    },
    {
      question: "How do I track my investment?",
      answer: "You’ll receive a unique Investment ID & dashboard login to track ROI in real time."
    },
    {
      question: "Are projects verified?",
      answer: "Yes. All projects are Dubai RERA & DLD approved."
    },
    {
      question: "Is this safe?",
      answer: "Absolutely. Dunex ensures legal agreements, investor contracts, and developer verification for every project."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100 antialiased relative overflow-hidden">
      {/* Custom Styles */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.2); opacity: 0.15; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          /* Card hover effects (desktop only) */
          .card-base { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease, background-color .35s ease; transform: translateZ(0); will-change: transform, box-shadow; }
          @media (hover:hover) and (pointer:fine) {
            .hover-lift:hover { transform: translateY(-6px) scale(1.01) rotateX(5deg); box-shadow: 0 12px 30px rgba(212,175,55,.15), 0 0 20px rgba(212,175,55,.1); }
            .hover-glow:hover { border-color: rgba(212,175,55,.6) !important; background-color: rgba(255,255,255,.08); box-shadow: 0 0 25px rgba(212,175,55,.2); }
            .hover-3d:hover { transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateZ(10px); }
            .hover-tilt:hover { transform: perspective(1000px) rotateX(2deg) rotateY(2deg) translateZ(5px); }
          }
          /* 3D Button effects */
          .btn-3d { transform: perspective(1000px) translateZ(0); transition: all .3s ease; }
          .btn-3d:hover { transform: perspective(1000px) translateZ(10px) rotateX(5deg); box-shadow: 0 15px 35px rgba(212,175,55,.3); }
          /* Floating animation */
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float:nth-child(2) { animation-delay: 1s; }
          .animate-float:nth-child(3) { animation-delay: 2s; }
          .animate-float:nth-child(4) { animation-delay: 3s; }
          /* Reveal on scroll */
          [data-reveal] { opacity: 0; transform: translateY(24px) scale(0.98); transition: opacity .7s ease, transform .7s ease; will-change: opacity, transform; }
          [data-reveal].is-visible { opacity: 1; transform: translateY(0) scale(1); }
        `}
      </style>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse-slow top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse-slow bottom-20 right-20"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full mx-auto px-4 sm:px-6 rounded-2xl overflow-hidden animate-[slide-up_1.5s_ease-out]">
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                i === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.65) saturate(0.95)",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#071538]/85 via-transparent to-[#071538]/60"></div>

        <div className="relative z-10 min-h-screen flex items-center py-16 sm:py-20">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 animate-[slide-up_1s_ease-out_0.5s_both]" data-reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg mb-4 sm:mb-6">
              Invest in Dubai. Earn 10–15% ROI Every Month with Dunex.
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
              Dunex gives Indian investors direct access to Dubai’s premium real estate opportunities — trusted, secure, and profitable. With as little as ₹1,00,000, you can start earning 10–15% ROI per month, credited directly to your bank account in INR.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-200/90 max-w-3xl mx-auto mb-6 sm:mb-10 px-2">
              We eliminate the risks of middlemen by offering verified projects, legal compliance, instant dashboards, and real-time profit tracking.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-6xl mx-auto">
              <div className="card-base hover-lift hover-glow hover-3d bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 animate-float" data-reveal style={{transitionDelay: '60ms'}}>
                <div className="text-xl sm:text-2xl mb-2">🚀</div>
                <div className="text-xs sm:text-sm font-semibold">10–15% Monthly ROI – Earn consistently, every month</div>
              </div>
              <div className="card-base hover-lift hover-glow hover-3d bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 animate-float" data-reveal style={{transitionDelay: '120ms'}}>
                <div className="text-xl sm:text-2xl mb-2">✅</div>
                <div className="text-xs sm:text-sm font-semibold">Start from just ₹1,00,000 – Affordable global investment entry</div>
              </div>
              <div className="card-base hover-lift hover-glow hover-3d bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 animate-float" data-reveal style={{transitionDelay: '180ms'}}>
                <div className="text-xl sm:text-2xl mb-2">🔒</div>
                <div className="text-xs sm:text-sm font-semibold">100% Secure & Transparent – Projects vetted, documents verified</div>
              </div>
              <div className="card-base hover-lift hover-glow hover-3d bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 animate-float" data-reveal style={{transitionDelay: '240ms'}}>
                <div className="text-xl sm:text-2xl mb-2">🆔</div>
                <div className="text-xs sm:text-sm font-semibold">Instant Investment ID – Track ROI & profits in real time</div>
              </div>
              <div className="card-base hover-lift hover-glow hover-3d bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 animate-float" data-reveal style={{transitionDelay: '300ms'}}>
                <div className="text-xl sm:text-2xl mb-2">📄</div>
                <div className="text-xs sm:text-sm font-semibold">Legal Agreements – Every investment backed by proper contracts</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4" data-reveal>
              <a href="/dashboard" className="btn-3d inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#D4AF37] text-[#071538] font-bold text-base sm:text-lg shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110 hover:brightness-95 w-full sm:w-auto">
                Start Investing
              </a>
              <a href="/contact" className="btn-3d inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-base sm:text-lg hover:bg-[#D4AF37] hover:text-[#071538] transition-all duration-300 hover:scale-110 w-full sm:w-auto">
                Talk to Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured verification note */}
      <div className="px-6">
        <p className="text-center text-gray-300 mt-2" data-reveal style={{transitionDelay: '80ms'}}>
          💡 All opportunities are verified, RERA-registered, and backed by Dubai’s top developers.
        </p>
      </div>

      {/* 2. WHY DUBAI REAL ESTATE */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Dubai Real Estate? (The Global Advantage)</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dubai is one of the world’s most profitable and safest property markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📈", title: "High ROI Potential", description: "Rental yields in Dubai are among the highest in the world, delivering 10–15% monthly returns." },
              { icon: "🏦", title: "Tax-Free Benefits", description: "Investors enjoy zero income tax on rental or profit income." },
              { icon: "🌍", title: "Fast-Growing Market", description: "Dubai is a global business hub, attracting investors from over 200 countries." },
              { icon: "🛡", title: "Secure & Transparent", description: "All investments are regulated by the Dubai Land Department (DLD)." },
              { icon: "🏙", title: "Prestige & Growth", description: "Strong property appreciation with consistent value growth year after year." }
            ].map((item, index) => (
              <div key={index} className="card-base hover-lift hover-glow bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 transition-all duration-300" data-reveal style={{transitionDelay: `${80 * (index + 1)}ms`}}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 mt-8" data-reveal style={{transitionDelay: '90ms'}}>
            💡 Did you know? Dubai property investments delivered an average 17% price appreciation in the past 2 years — making it one of the most rewarding global markets.
          </p>
        </div>
      </section>

      {/* 3. WHY CHOOSE DUNEX */}
    <section
  className="relative py-20 px-6 rounded-3xl my-12 overflow-hidden"
  style={{
    backgroundImage: "url('/graphs.jpg')", // replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto z-10">
    <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Dunex? (Your Trusted Investment Partner)</h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: "📅", title: "Monthly ROI (10–15%)", desc: "Returns are credited every month in INR." },
        { icon: "🏗", title: "Verified Projects Only", desc: "We partner with Dubai’s top developers (Emaar, DAMAC, Nakheel, etc.)." },
        { icon: "🔒", title: "Safe & Transparent", desc: "100% legal compliance, investor agreements, and DLD-verified projects." },
        { icon: "💰", title: "Low Entry Barrier", desc: "Start from just ₹1,00,000." },
        { icon: "🌍", title: "Global Access", desc: "Invest online securely from anywhere in India." },
        { icon: "🤝", title: "Expert Guidance", desc: "24/7 support via phone, WhatsApp, and email." },
        { icon: "🆔", title: "Instant Investment ID", desc: "Get real-time dashboards to track profits anytime." },
        { icon: "📄", title: "Full Documentation", desc: "Receive legal contracts, receipts, and project details for complete peace of mind." }
      ].map((item, index) => (
        <div key={index} className="card-base hover-lift hover-glow bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300" data-reveal style={{transitionDelay: `${80 * (index + 1)}ms`}}>
          <div className="text-3xl mb-4">{item.icon}</div>
          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 4. HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1️⃣", title: "Browse Projects", desc: "Explore premium Dubai properties handpicked by experts." },
              { step: "2️⃣", title: "Invest Securely", desc: "Complete your investment online with legal contracts." },
              { step: "3️⃣", title: "Get Investment ID", desc: "Instantly receive your digital ID with dashboard access." },
              { step: "4️⃣", title: "Earn Monthly ROI", desc: "10–15% ROI credited directly to your bank account, with real-time tracking." }
            ].map((item, index) => (
              <div key={index} className="text-center card-base" data-reveal style={{transitionDelay: `${90 * (index + 1)}ms`}}>
                <div className="bg-[#D4AF37] text-[#071538] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-reveal style={{transitionDelay: '100ms'}}>
            <a href="/dashboard" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] text-[#071538] font-bold text-lg shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110">
              Start Earning ROI Today
            </a>
          </div>
        </div>
      </section>

      {/* 5. DUNEX ROI ADVANTAGE */}
    <section
  className="relative py-20 px-6 rounded-3xl my-12 overflow-hidden"
  style={{
    backgroundImage: "url('/stock.png')", // replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto z-10 text-white">
    <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">The Dunex ROI Advantage</h2>
      <p className="text-xl text-gray-300">When you invest with Dunex, you get more than returns — you get security, trust, and growth.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
      {[
        { icon: "📅", title: "10–15% ROI Monthly – Consistent high returns." },
        { icon: "📈", title: "Capital Appreciation – Property value increases with time." },
        { icon: "🔒", title: "Safe & Verified – Every project is legally compliant & DLD-approved." },
        { icon: "🌍", title: "Global Access – Monitor investments from anywhere." },
        { icon: "🆔", title: "24/7 Dashboard Access – Track ROI and withdrawals in real time." }
      ].map((item, index) => (
        <div key={index} className="card-base hover-lift hover-glow bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center" data-reveal style={{transitionDelay: `${80 * (index + 1)}ms`}}>
          <div className="text-3xl mb-3">{item.icon}</div>
          <p className="text-gray-300 text-sm">{item.title}</p>
        </div>
      ))}
    </div>

    {/* ROI Examples */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 card-base" data-reveal style={{transitionDelay: '60ms'}}>
      <h3 className="text-2xl font-bold text-white mb-8 text-center">ROI Examples (INR)</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { invest: "₹1,00,000", roi: "₹10,000 – ₹15,000" },
          { invest: "₹2,50,000", roi: "₹25,000 – ₹37,500" },
          { invest: "₹5,00,000", roi: "₹50,000 – ₹75,000" },
          { invest: "₹10,00,000", roi: "₹1,00,000 – ₹1,50,000" }
        ].map((item, index) => (
          <div key={index} className="text-center bg-white/5 rounded-lg p-6 card-base hover-lift" data-reveal style={{transitionDelay: `${90 * (index + 1)}ms`}}>
            <div className="text-lg font-bold text-[#D4AF37] mb-2">Invest {item.invest}</div>
            <div className="text-sm text-gray-300">Monthly ROI {item.roi}</div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-sm mt-6">
        ⚠ Note: ROI depends on project performance, but historical results have been consistently within this range.
      </p>
    </div>
  </div>
</section>


      {/* 6. FEATURED OPPORTUNITIES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Investment Opportunities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏙",
                title: "Downtown Dubai",
                subtitle: "Premium Properties",
                startFrom: "₹1,00,000",
                roi: "10–15%"
              },
              {
                icon: "🏝",
                title: "Palm Jumeirah",
                subtitle: "Luxury Projects",
                startFrom: "₹2,50,000",
                roi: "10–15%"
              },
              {
                icon: "🌉",
                title: "Dubai Marina",
                subtitle: "High Demand Projects",
                startFrom: "₹5,00,000",
                roi: "10–15%"
              }
            ].map((item, index) => (
              <div key={index} className="card-base hover-lift hover-glow bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300" data-reveal style={{transitionDelay: `${80 * (index + 1)}ms`}}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.subtitle}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Start from:</span>
                    <span className="text-[#D4AF37] font-bold">{item.startFrom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monthly ROI:</span>
                    <span className="text-[#D4AF37] font-bold">{item.roi}</span>
                  </div>
                </div>
                <a href="/dashboard" className="w-full block text-center bg-[#D4AF37] text-[#071538] font-bold py-3 rounded-lg hover:bg-[#D4AF37]/90 transition-all duration-300">
                  Invest Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABOUT DUNEX */}
    <section
  className="relative py-20 px-6 rounded-3xl my-12 overflow-hidden"
  style={{
    backgroundImage: "url('/about.jpg')", // replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto text-center text-white z-10" data-reveal style={{transitionDelay: '60ms'}}>
    <h2 className="text-4xl md:text-5xl font-bold mb-8">About Dunex</h2>
    <p className="text-xl text-gray-300 mb-6">
      Dunex was founded with a vision to make global real estate investing accessible to Indians.
    </p>
    <p className="text-lg text-gray-300 mb-3">💰 Minimum entry of just ₹1,00,000</p>
    <p className="text-lg text-gray-300 mb-3">📊 Consistent 10–15% monthly ROI paid directly in INR</p>
    <p className="text-lg text-gray-300 mb-3">🏗 Investments in Dubai’s fastest-growing premium projects</p>
    <p className="text-lg text-gray-300 mb-3">🔒 Fully secure, legal, and transparent process</p>
    <p className="text-lg text-gray-300">📄 Every investor gets legal agreements, receipts, and dashboard access</p>
    <p className="text-lg text-gray-300 mt-6">
      We are not just an investment platform — we are your trusted partner for wealth creation through global real estate.
    </p>
  </div>
</section>


      {/* 8. WHY INVESTORS TRUST US */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Investors Trust Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🌍", title: "Trusted by hundreds of Indian investors nationwide" },
              { icon: "🏗", title: "Strong partnerships with top Dubai developers" },
              { icon: "📊", title: "Proven track record of consistent ROI payouts" },
              { icon: "📞", title: "24/7 Investor Support (Call, WhatsApp, Email)" },
              { icon: "🔒", title: "100% legal compliance – Every project RERA & DLD approved" },
              { icon: "🆔", title: "Transparent Dashboard – Live ROI tracking, anytime, anywhere" }
            ].map((item, index) => (
              <div key={index} className="card-base hover-lift hover-glow bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center" data-reveal style={{transitionDelay: `${80 * (index + 1)}ms`}}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
     <section
  className="relative py-20 px-6 rounded-3xl my-12 overflow-hidden"
  style={{
    backgroundImage: "url('/invest.jpg')", // replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto z-10">
    <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Testimonials (Real Stories from Investors)</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          quote: "I invested ₹1,00,000 and started receiving ROI from the next month. The dashboard and support team are very transparent. Highly recommended.",
          author: "Rahul (Delhi)"
        },
        {
          quote: "The monthly ROI of 12% is consistent, and I love how easy Dunex made Dubai real estate investment for Indians.",
          author: "Sara (Mumbai)"
        },
        {
          quote: "Secure, professional, and profitable. Dunex is my trusted partner for real estate investments abroad.",
          author: "Amit (Bangalore)"
        }
      ].map((item, index) => (
        <div key={index} className="card-base hover-lift hover-glow bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10" data-reveal style={{transitionDelay: `${80 * (index + 1)}ms`}}>
          <div className="text-4xl mb-4">💬</div>
          <p className="text-gray-300 mb-4 italic">"{item.quote}"</p>
          <p className="text-[#D4AF37] font-semibold">– {item.author}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 10. FINAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center" data-reveal style={{transitionDelay: '60ms'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Today. Earn 10–15% ROI Every Month with Dunex.</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your money should be working for you. Begin investing in Dubai’s most profitable properties today and enjoy guaranteed monthly returns with long-term growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] text-[#071538] font-bold text-lg shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110 w-full sm:w-auto">
              Invest Now
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg hover:bg-[#D4AF37] hover:text-[#071538] transition-all duration-300 hover:scale-110 w-full sm:w-auto">
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
    <section
  className="relative py-20 px-6  mt-12 overflow-hidden"
  style={{
    backgroundImage: "url('/faq.jpg')", // replace with your background image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto z-10">
    <div className="text-center mb-16" data-reveal style={{transitionDelay: '60ms'}}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 card-base" data-reveal style={{transitionDelay: `${80 * (index + 1)}ms`}}>
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-all duration-300"
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <span className="text-white font-semibold">{faq.question}</span>
            <span className="text-[#D4AF37] text-xl">
              {openFaq === index ? "−" : "+"}
            </span>
          </button>
          {openFaq === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
     
    </div>
  );
}
