"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const images = ["/first.jpg", "/second.jpg", "/third.jpg", "/four.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openCard, setOpenCard] = useState(null);

  // 🔑 create ref for "Why Choose Dunex?" section
  const whyRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const uspPoints = [
    { id: 1, title: "Why Invest", content: "Dubai's market delivers global demand, predictable capital appreciation and tax-advantaged returns — ideal for wealth preservation and growth." },
    { id: 2, title: "Why Dunex Real Estate", content: "End-to-end verified projects, local market expertise and transparent reporting — we secure premium assets and manage them for you." },
    { id: 3, title: "Dunex — India Gateway to Dubai", content: "Dedicated processes for Indian investors: documentation support, currency-optimized transfers and local relationship managers." },
    { id: 4, title: "Luxury Returns — Month after Month", content: "Curated rental-bearing properties and fractional income models designed to produce consistent monthly payouts to investors." },
    { id: 5, title: "Why Dunex is Different", content: "Exclusive pre-launch inventory, guaranteed rental clauses in select projects, and personalised portfolio strategies for each investor." },
    { id: 6, title: "How It Works", content: "Choose plan → Complete secure onboarding → We acquire & manage asset → Receive monthly/annual returns + quarterly reports." },
    { id: 7, title: "Investor Benefits", content: "Priority deals, dedicated relationship manager, transparent KYC & escrow, rental guarantee options and exit strategy planning." },
  ];

  const investmentPlans = [
    { id: 1, title: "Starter Plan", minInvestment: "AED 10,000", profit: "12% p.a.", duration: "1 Year", description: "Low entry, steady returns, ideal for new investors." },
    { id: 2, title: "Gold Plan", minInvestment: "AED 50,000", profit: "18% p.a.", duration: "2 Years", description: "Higher yield projects with rental-backed returns." },
    { id: 3, title: "Platinum Plan", minInvestment: "AED 100,000", profit: "24% p.a.", duration: "3 Years", description: "Premium inventory, priority allocation and max upside." },
  ];

  // 🔑 function to scroll to Why Choose Dunex
  const handleScrollToWhy = () => {
    whyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100 antialiased">
      
      {/* HERO */}
      <section className="relative h-[72vh] w-full mx-auto px-6 rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.65) saturate(0.95)",
              }}
            />
          ))}
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071538]/85 via-transparent to-[#071538]/60"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
              DUNEX CONSTRUCTOR
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gray-200/90 max-w-3xl mx-auto">
              India’s premium gateway to Dubai real estate — luxury returns,
              trusted processes, and personalised investor care.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#D4AF37] text-[#071538] font-semibold shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition">
               <a href="/blog"> Explore Plans </a>
              </button>
              <button
                onClick={handleScrollToWhy}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white/95 font-medium hover:bg-white/5 transition"
              >
                How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* USP Cards */}
        <section ref={whyRef} className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Dunex?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-3">
              Luxury-first investment strategies, transparent execution and a trusted India–Dubai pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uspPoints.map((p) => (
              <article
                key={p.id}
                onClick={() => setOpenCard(openCard === p.id ? null : p.id)}
                className="cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/6 backdrop-blur-sm shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#D4AF37]">{p.title}</h3>
                  <span className="text-sm text-gray-300">{openCard === p.id ? "−" : "+"}</span>
                </div>
                <div className={`mt-4 text-gray-200 transition-all ${openCard === p.id ? "max-h-[400px] opacity-100" : "max-h-0 opacity-60 overflow-hidden"}`}>
                  <p className="text-sm leading-relaxed">{p.content}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Investment Plans */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Investment Plans</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-3">
              Handpicked plans for different investor goals — monthly yield or long term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentPlans.map((plan, idx) => (
              <div
                key={plan.id}
                className={`p-6 rounded-2xl border border-white/6 backdrop-blur-sm ${idx === 1 ? "bg-gradient-to-tr from-white/5 to-white/3 scale-[1.02] shadow-2xl" : "bg-white/4 shadow-md"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                  <div className="text-sm text-gray-300">{plan.duration}</div>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-[#D4AF37]">{plan.profit}</div>
                  <div className="text-sm text-gray-200 mt-2">
                    Minimum: <span className="font-medium">{plan.minInvestment}</span>
                  </div>
                  <p className="mt-4 text-gray-200/90">{plan.description}</p>
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-lg py-2 bg-[#D4AF37] text-[#071538] font-semibold shadow hover:brightness-95 transition">
                    Invest Now
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-white/10 text-white/90">Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
