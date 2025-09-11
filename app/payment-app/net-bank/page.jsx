"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const paymentOptions = [
    { name: "UPI", path: "/payment-app/upi", icon: "/upi.png" },
    { name: "Net Banking", path: "/payment-app/net-bank", icon: "/bank2.png" },
    { name: "Debit Card", path: "/payment-app/debit-card", icon: "/cardr.png" },
    { name: "Credit Card", path: "/payment-app/credit-card", icon: "/cardr.png" },
  ];

  const banks = ["Axis Bank", "Yes Bank", "IDBI Bank", "DBS Bank", "Indian Bank"];
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const dropdownRef = useRef(null);
  const rander = [{ inr: "1999" }];
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Make Payment Click
  const handleMakePayment = () => {
    if (!selectedBank) {
      alert("Please select a bank to continue.");
      return;
    }
    alert(`Redirecting to ${selectedBank} net banking...`);
    router.push("/payment-app/pay-sucess");
  };

  // Handle Redeem Click
  const handleRedeem = () => {
    alert(`You entered: ${couponCode}`);
  };

  // Handle Cancel Click
  const handleCancel = () => {
    alert("Payment canceled.");
  };

  return (
    <div className="min-h-screen font-sans p-4 sm:p-6 mb-10 sm:mb-20 bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Timer */}
        <div className="border border-white/10 h-14 sm:h-17 bg-[#071538] text-[#D4AF37] text-center text-lg sm:text-2xl pt-3 sm:pt-4 rounded-md shadow-md">
          Transaction times out in 4:53 Mins
        </div>

        <div className="border border-white/10 my-8 sm:my-14"></div>
        <h2 className="text-xl sm:text-[25px] font-semibold mb-4 sm:mb-6 mt-[-20px] text-[#D4AF37]">
          Net Banking Payment
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Payment Methods */}
            {/* Left Payment Buttons */}
          <div className="space-y-4 col-span-1 flex flex-col items-center md:items-start">
            {paymentOptions.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`flex items-center gap-3 w-full sm:w-[60%] py-4 sm:py-6 rounded mb-4 sm:mb-10 px-4 font-medium transition ${
                  item.name === "Net Banking"
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

          {/* Net Banking Section */}
          <div className="bg-white/5 rounded-2xl shadow-2xl p-4 sm:p-8 w-full lg:w-[220%] text-left border border-white/10">
            <h1 className="text-xl sm:text-3xl font-bold text-[#D4AF37] mb-2">
              🏦 Pay via Net Banking
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Choose your bank to be redirected to a secure net banking portal.
            </p>

            {/* Popular Banks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {banks.map((bank) => (
                <button
                  key={bank}
                  onClick={() => setSelectedBank(bank)}
                  className={`border rounded-md px-3 py-2 text-sm hover:bg-white/10 transition ${selectedBank === bank ? "border-[#D4AF37] text-[#D4AF37]" : "border-white/20 text-gray-200"}`}
                >
                  {bank}
                </button>
              ))}
            </div>

            {/* Dropdown for all banks */}
            <div className="relative inline-block" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="border border-white/20 px-4 py-2 rounded-md text-gray-200 hover:bg-white/10"
              >
                {selectedBank || "Select Bank"}
              </button>
              {showDropdown && (
                <div className="absolute z-20 mt-2 w-56 max-h-56 overflow-auto bg-[#0f1f3f] border border-white/10 rounded-md shadow-lg">
                  {banks.map((bank) => (
                    <div
                      key={bank}
                      onClick={() => { setSelectedBank(bank); setShowDropdown(false); }}
                      className="px-4 py-2 text-sm text-gray-200 hover:bg-white/10 cursor-pointer"
                    >
                      {bank}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Amount */}
            <div className="mt-6 text-gray-200">
              <p className="text-sm opacity-90">Amount Payable</p>
              <p className="text-2xl font-bold text-[#D4AF37]">₹{rander[0].inr}</p>
            </div>

            {/* Actions */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button onClick={handleMakePayment} className="bg-[#D4AF37] text-[#071538] font-semibold py-3 rounded-md hover:brightness-95">Make Payment</button>
              <button onClick={() => setSelectedBank("")} className="border border-white/20 text-gray-200 py-3 rounded-md hover:bg-white/10">Reset</button>
              <button onClick={handleCancel} className="border border-[#D4AF37] text-[#D4AF37] py-3 rounded-md hover:bg-[#D4AF37] hover:text-[#071538]">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}