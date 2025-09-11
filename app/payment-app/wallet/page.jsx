"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

export default function PaymentPage() {
  const router = useRouter(); // Initialize router
  const paymentOptions = [
   { name: "Debit Card", path: "/payment-app/debit-card" },
    { name: "Credit Card", path: "/payment-app/credit-card" },
    { name: "Net Banking", path: "/payment-app/net-bank" },
    { name: "Wallet", path: "/payment-app/wallet" },
    { name: "UPI", path: "/payment-app/upi" },
    { name: "EMI Options", path: "/payment-app/emi-op" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const dropdownRef = useRef(null);

  const banks = [
    { name: "Amazon pay", image: "/morbi.png" },
    { name: "Paytm lite", image: "/mola.png" },
    { name: "Phonepay lite", image: "/jiom.png" },
    { name: "Kotak", image: "/freec.png" },
  ];

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
    // Navigate to the pay-sucess page
    router.push("/pay-sucess");
  };

  // Handle Cancel Click
  const handleCancel = () => {
    alert("Payment canceled.");
    // Redirect or take any other action as needed
  };

  const [selectedAmount, setSelectedAmount] = useState(1999); // Dynamic amount

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100 font-sans p-6">
      <div className="container mx-auto">
        
        <div className="border border-white/10 h-17 bg-[#071538] text-[#D4AF37] text-center text-2xl pt-3">
          Transaction times out in 4:53 Mins
        </div>

        <div className="border border-white/10 my-14"></div>
        <h2 className="text-[25px] font-semibold mb-6 mt-[-20] text-[#D4AF37]">Payment Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Payment Methods */}
          <div className="space-y-4 col-span-1">
            {paymentOptions.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`block w-full sm:w-[60%] py-6 rounded text-center mb-10 px-4 font-medium ${item.name === "Wallet" ? "bg-[#D4AF37] text-[#071538] hover:brightness-95" : "bg-white/5 text-gray-200 hover:bg-white/10"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Card Form */}
          <div className="col-span-1 sm:col-span-2 border border-white/10 rounded px-6 py-6 h-140 w-full sm:w-[90%] bg-white/5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {banks.map((bank, index) => (
                <label className="flex items-center space-x-2 border p-2 rounded" key={index}>
                  <input type="radio" name="bank" />
                  <img src={bank.image} alt={bank.name} className="h-7 pl-3" />
                </label>
              ))}
            </div>

            <div className="relative mt-12" ref={dropdownRef}>
              <label htmlFor="" className="font-semibold text-gray-200">Select Wallet</label>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="border border-white/20 px-4 py-4 rounded mt-2 hover:bg-white/10 text-left w-full text-gray-100 font-medium flex items-center justify-between bg-transparent"
              >
                <span>{selectedBank || "Select Wallet"}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute top-full mt-2 left-0 w-full border border-white/20 rounded bg-[#0f1f3f] shadow-lg z-10 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-200">Select Bank</span>
                    <button
                      onClick={() => setShowDropdown(false)}
                      className="text-xl font-bold text-gray-300"
                    >
                      ×
                    </button>
                  </div>
                  <ul className="space-y-2 max-h-60 overflow-y-auto">
                    {banks.map((bank, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelectedBank(bank);
                          setShowDropdown(false);
                        }}
                        className="text-lg text-gray-200 hover:bg-white/10 px-2 py-1 rounded cursor-pointer"
                      >
                        {bank.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Privacy Policy */}
            <p className="text-[17px] text-gray-200 pt-10 font-medium">
              I agree with the <span className="font-medium ">Privacy Policy</span> by processing with this
              <br />
              payment
            </p>

            {/* Amount */}
            <div className="text-2xl font-semibold text-[#D4AF37] mt-7">
              INR <span className="text-[#D4AF37] font-bold">{selectedAmount}.00</span>{" "}
              <span className="text-sm text-gray-300">(Total Amount Payable)</span>
            </div>

            {/* Buttons */}
            <button onClick={handleMakePayment} className="w-full bg-[#D4AF37] text-[#071538] text-2xl py-2 rounded hover:brightness-95 mt-10 cursor-pointer">
              Make Payment
            </button>
            <button onClick={handleCancel} className="w-full text-gray-300 text-sm mt-2 cursor-pointer">Cancel</button>
          </div>

          
        </div>
      </div>
    </div>
  );
}
