"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Burj Khalifa Apartments",
      location: "Downtown Dubai",
      totalPrice: 2000000,
      invested: 500000,
      image: "/burj.jpg",
    },
    {
      id: 2,
      name: "Palm Jumeirah Villa",
      location: "Palm Jumeirah",
      totalPrice: 3500000,
      invested: 1000000,
      image: "/palm.jpg",
    },
    {
      id: 3,
      name: "Dubai Marina Penthouse",
      location: "Dubai Marina",
      totalPrice: 1500000,
      invested: 250000,
      image: "/marina.jpg",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);

  const handlePurchase = (id) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === id
          ? { ...property, invested: property.invested + 50000 }
          : property
      )
    );
    const investedProp = properties.find((p) => p.id === id);
    setCurrentProperty(investedProp.name);
    setShowModal(true);

    setTimeout(() => setShowModal(false), 2000); // modal 2 sec baad hide hoga
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1D39] via-[#0F2349] to-[#13294B] text-[#D4AF37] p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12 tracking-wide"
      >
        🏢 Dunex Investment Dashboard
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-[#D4AF37]/40 overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{property.name}</h2>
              <p className="text-sm opacity-80">{property.location}</p>

              <div className="mt-4 space-y-2">
                <p className="text-lg">
                  💰 Total Price:{" "}
                  <span className="font-semibold">
                    ₹{property.totalPrice.toLocaleString()}
                  </span>
                </p>
                <p className="text-lg">
                  📊 Invested:{" "}
                  <span className="font-semibold">
                    ₹{property.invested.toLocaleString()}
                  </span>
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePurchase(property.id)}
                  className="flex-1 bg-[#D4AF37] text-[#0B1D39] font-bold py-2 px-4 rounded-xl shadow-lg hover:bg-yellow-500 transition"
                >
                  Purchase ₹50,000
                </motion.button>
                <Link href={`/dashboard/${property.id}`} className="min-w-[140px]">
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    className="block text-center bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-2 px-4 rounded-xl hover:bg-[#D4AF37] hover:text-[#0B1D39] transition"
                  >
                    View Full
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-10 right-10 bg-[#D4AF37] text-[#0B1D39] px-6 py-4 rounded-xl shadow-xl font-bold"
        >
          ✅ Successfully purchased in {currentProperty}
        </motion.div>
      )}
    </div>
  );
}
