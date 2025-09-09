"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    receiveUpdates: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup attempt:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1A36] via-[#13294B] to-[#0B1A36] flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-fadeIn">
        {/* Logo */}
        <div className="text-center mb-8">
          
          <h1 className="text-3xl font-bold text-[#FFD700] mb-2">Create Account</h1>
          <p className="text-gray-300">Luxury return month after month</p>
        </div>

        {/* Form */}
        <div className="bg-[#0F223F]/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-[#FFD700]/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
            />

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-[#FFD700] focus:ring-[#FFD700] border-gray-600 rounded"
              />
              <span className="text-sm text-gray-300">
                I agree to the{" "}
                <Link href="/terms" className="text-[#FFD700] hover:underline">
                  Terms & Conditions
                </Link>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#FFD700] text-[#0B1A36] py-3 px-4 rounded-lg font-semibold hover:bg-[#E6C200] transition transform hover:scale-105 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-600" />
            <span className="px-2 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-600" />
          </div>

          {/* Google Signup */}
          <button className="w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Login link */}
          <p className="mt-6 text-center text-gray-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#FFD700] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
