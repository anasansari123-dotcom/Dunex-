"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const mockProperties = [
  { id: 1, name: "Burj Khalifa Apartments", location: "Downtown Dubai", images: ["/first.jpg", "/second.jpg", "/third.jpg", "/four.jpg"], price: 2000000 },
  { id: 2, name: "Palm Jumeirah Villa", location: "Palm Jumeirah", images: ["/first.jpg", "/second.jpg", "/third.jpg", "/four.jpg"], price: 3500000 },
  { id: 3, name: "Dubai Marina Penthouse", location: "Dubai Marina", images: ["/first.jpg", "/second.jpg", "/third.jpg", "/four.jpg"], price: 1500000 },
];

export default function PropertyDetail({ params }) {
  const propertyId = Number(params.id);
  const property = useMemo(() => mockProperties.find(p => p.id === propertyId), [propertyId]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentIndex(i => (i + 1) % (property?.images?.length || 1)), 3500);
    return () => clearInterval(t);
  }, [property?.images?.length]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0c1b3a]">
        <div className="text-center">
          <p className="mb-6 text-xl">Property not found.</p>
          <Link href="/dashboard" className="underline text-[#D4AF37]">← Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100">
      {/* Hero Slider similar to home */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          {property.images.map((src, i) => (
            <div key={i} className={`absolute inset-0 transition-all duration-1000 ${i === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}>
              <Image src={src} alt={property.name} fill sizes="100vw" className="object-cover" priority={i===0} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071538]/85 via-transparent to-[#071538]/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">{property.name}</h1>
            <p className="text-gray-200">{property.location} • ₹{property.price.toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-3">About this property</h2>
              <p className="text-gray-300">Prime location with high rental demand and strong appreciation outlook. Modern amenities, premium finishes, and proximity to business districts make this asset ideal for yield plus growth strategies.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Key Highlights</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Projected ROI 10–15% monthly</li>
                <li>Developer track record and DLD/RERA compliance</li>
                <li>Fully managed with transparent dashboard access</li>
                <li>Nearby: malls, metro, beach, business bay</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Additional Information</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p>Configuration: 2-4 BHK options</p>
                  <p>Size Range: 1,100 – 2,800 sq.ft</p>
                </div>
                <div>
                  <p>Payment Plan: Flexible, milestone-based</p>
                  <p>Handover: 2026 (Q4)</p>
                </div>
              </div>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-sm text-gray-400">Starting at</p>
              <p className="text-3xl font-extrabold text-[#D4AF37]">₹{property.price.toLocaleString()}</p>
              <div className="mt-4 flex gap-3">
                <button className="flex-1 bg-[#D4AF37] text-[#071538] font-bold py-2 px-4 rounded-lg hover:opacity-90">Purchase ₹50,000</button>
                <a href="#map" className="min-w-[120px] text-center border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-2 px-4 rounded-lg hover:bg-[#D4AF37] hover:text-[#071538]">View Map</a>
              </div>
              <Link href="/dashboard" className="block text-center mt-4 text-sm text-gray-300 underline">← Back to Dashboard</Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Location</h2>
        <div className="w-full h-80 rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115833.21470697967!2d55.1121373!3d25.197196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4346e8d0f8a7%3A0xb0b1a31b!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}


