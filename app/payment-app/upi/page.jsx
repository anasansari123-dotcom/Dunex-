"use client";
import React from "react";
import Link from "next/link";

export default function PaymentPage() {
   const paymentOptions = [
    { name: "UPI", path: "/payment-app/upi", icon: "/upi.png" },
    { name: "Net Banking", path: "/payment-app/net-bank", icon: "/bank2.png" },
    { name: "Debit Card", path: "/payment-app/debit-card", icon: "/cardr.png" },
    { name: "Credit Card", path: "/payment-app/credit-card", icon: "/cardr.png" },
  ];
  const rander = [{ nri: "1999" }];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100 font-sans p-4 sm:p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Timer */}
        <div className="border border-white/10 h-14 sm:h-17 bg-[#071538] text-[#D4AF37] text-center text-lg sm:text-2xl py-3 rounded-md shadow-md">
          Transaction times out in 4:53 Mins
        </div>

        <div className="border border-white/10 my-8 sm:my-14"></div>

        <h2 className="text-xl sm:text-[25px] font-semibold mb-4 sm:mb-6 mt-[-20px] text-[#D4AF37]">
          Pay using UPI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Left Payment Buttons */}
          <div className="space-y-4 col-span-1 flex flex-col items-center md:items-start">
            {paymentOptions.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`flex items-center gap-3 w-full sm:w-[60%] py-4 sm:py-6 rounded mb-4 sm:mb-10 px-4 font-medium transition ${
                  item.name === "UPI"
                    ? "bg-[#D4AF37] text-[#071538] hover:brightness-95"
                    : "bg-white/5 text-gray-200 hover:bg-white/10"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-5 w-5 sm:h-7 sm:w-12 object-contain"
                />
<span
  className={`flex-1 text-left ${
    item.name === "Net Banking" ? "text-md sm:text-[13px]" : "text-base sm:text-sm"
  }`}
>
  {item.name}
</span>
              </Link>
            ))}
          </div>

          {/* Right UPI/Card Form Section */}
          <div className="bg-white/5 p-4 sm:p-6 font-sans w-full md:w-[220%] rounded-2xl shadow-md border border-white/10 mt-0 md:mt-[-40px]">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#D4AF37]">
              Pay using UPI
            </h2>

            {/* UPI App Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-6">
              {[
                { label: "PhonePe", icon: "/phonepe.png" },
                { label: "GPay", icon: "/gpay.png" },
                { label: "Others", icon: "/plogo.png" },
              ].map((item, i) => (
                <button
                  key={i}
                  className="flex-1 border border-white/20 rounded-lg p-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition w-full text-gray-200"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="h-5 sm:h-6"
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Auto Renew */}
            <div className="flex items-start space-x-2 mb-4 sm:mb-5">
              <input
                type="checkbox"
                id="autoRenew"
                className="accent-[#D4AF37] mt-1"
              />
              <label
                htmlFor="autoRenew"
                className="text-xs sm:text-sm text-gray-200"
              >
                Auto-renew my plan on expiry. Cancel anytime.
              </label>
            </div>

            {/* UPI Input */}
            <div className="mb-4 sm:mb-6">
              <input
                type="text"
                placeholder="Enter your UPI ID"
                className="w-full border border-white/20 bg-transparent text-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] placeholder-gray-400"
              />
            </div>

            {/* Other Payment Options */}
            <div className="space-y-3 mb-4 sm:mb-6">
              {["Credit / Debit Card", "PayTm Wallet", "Net Banking"].map(
                (method, idx) => (
                  <div
                    key={idx}
                    className="border border-white/20 rounded-md p-3 hover:bg-white/10 cursor-pointer transition text-gray-200"
                  >
                    {method}
                  </div>
                )
              )}
            </div>

            {/* Amount */}
            <div className="text-lg sm:text-xl font-semibold text-[#D4AF37] mb-4">
              INR <span className="font-bold">{rander[0].nri}.00</span>{" "}
              <span className="text-xs sm:text-sm text-gray-300">
                (Total Payable)
              </span>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-[#D4AF37] text-[#071538] py-3 rounded-md hover:brightness-95 text-base sm:text-lg font-medium transition">
                Make Payment
              </button>
              <button className="w-full text-gray-300 text-xs sm:text-sm underline hover:text-white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
