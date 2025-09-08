"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Burj Khalifa Apartments",
      location: "Downtown Dubai",
      totalPrice: 2000000,
      invested: 500000,
      image: "/images/burj-khalifa.jpg", // Add image path
    },
    {
      id: 2,
      name: "Palm Jumeirah Villa",
      location: "Palm Jumeirah",
      totalPrice: 3500000,
      invested: 1200000,
      image: "/images/palm-jumeirah.jpg",
    },
    {
      id: 3,
      name: "Dubai Marina Penthouse",
      location: "Dubai Marina",
      totalPrice: 5000000,
      invested: 2000000,
      image: "/images/dubai-marina.jpg",
    },
  ]);

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleInvestClick = (property) => {
    setSelectedProperty(property);
    setInvestmentAmount("");
  };

  const handleConfirmInvestment = () => {
    if (!investmentAmount || investmentAmount <= 0) return;

    setProperties((prev) =>
      prev.map((prop) =>
        prop.id === selectedProperty.id
          ? { ...prop, invested: prop.invested + Number(investmentAmount) }
          : prop
      )
    );

    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Investment Dashboard
      </h1>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => {
          const progress = (property.invested / property.totalPrice) * 100;

          return (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
            >
              {/* Property Image */}
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />

              <h2 className="text-xl font-semibold text-gray-900">
                {property.name}
              </h2>
              <p className="text-gray-600 text-sm">{property.location}</p>

              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Invested: ₹{property.invested.toLocaleString()}</span>
                  <span>Total: ₹{property.totalPrice.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-teal-600 h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => handleInvestClick(property)}
                className="mt-6 w-full bg-gradient-to-r from-[#FFD700] to-[#F59E0B] text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition"
              >
                Invest
              </button>
            </div>
          );
        })}
      </div>

      {/* Investment Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Invest in {selectedProperty.name}
            </h2>
            <p className="text-gray-700 mb-4">
              Total Price: ₹{selectedProperty.totalPrice.toLocaleString()} <br />
              Already Invested: ₹{selectedProperty.invested.toLocaleString()}
            </p>

            <input
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              placeholder="Enter amount to invest"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-6"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setSelectedProperty(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmInvestment}
                className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] text-white rounded-lg font-medium hover:scale-105 transition"
              >
                Confirm Investment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
