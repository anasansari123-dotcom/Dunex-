"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const countries = [
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "QA", name: "Qatar", flag: "🇶🇦" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼" },
  { code: "BH", name: "Bahrain", flag: "🇧🇭" },
  { code: "OM", name: "Oman", flag: "🇴🇲" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
];

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "AE",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    receiveUpdates: false,
    profileImage: null,
  });

  const [errors, setErrors] = useState({});
  const [flashMessage, setFlashMessage] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  // Flash message auto-dismiss
  useEffect(() => {
    if (flashMessage.message) {
      const timer = setTimeout(() => {
        setFlashMessage({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);

  const showFlashMessage = (type, message) => {
    setFlashMessage({ type, message });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear flash messages
    if (flashMessage.message) {
      setFlashMessage({ type: "", message: "" });
    }

    // Real-time validation for specific fields
    if (name === "email" && value) {
      validateEmail(value);
    } else if (name === "password" && value) {
      validatePassword(value);
    } else if (name === "confirmPassword" && value) {
      validateConfirmPassword(value);
    } else if (name === "phone" && value) {
      validatePhone(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    }
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("one lowercase letter");
    }
    if (!/\d/.test(password)) {
      errors.push("one number");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("one special character");
    }

    if (errors.length > 0) {
      setErrors((prev) => ({
        ...prev,
        password: `Password must contain ${errors.join(", ")}`,
      }));
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== formData.password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validations
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordErrors = [];
      if (formData.password.length < 8) passwordErrors.push("at least 8 characters");
      if (!/[A-Z]/.test(formData.password)) passwordErrors.push("one uppercase letter");
      if (!/[a-z]/.test(formData.password)) passwordErrors.push("one lowercase letter");
      if (!/\d/.test(formData.password)) passwordErrors.push("one number");
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) passwordErrors.push("one special character");
      
      if (passwordErrors.length > 0) {
        newErrors.password = `Password must contain ${passwordErrors.join(", ")}`;
      }
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    if (!formData.profileImage) {
      newErrors.profileImage = "Profile image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Signup data:", formData);
        showFlashMessage("success", "Account created successfully! Welcome to Dunex!");
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "AE",
          password: "",
          confirmPassword: "",
          agreeToTerms: false,
          receiveUpdates: false,
          profileImage: null,
        });
        setTouched({});
        setErrors({});
      } catch (error) {
        showFlashMessage("error", "Failed to create account. Please try again.");
      }
    } else {
      showFlashMessage("error", "Please fix the errors below and try again.");
    }
    
    setIsSubmitting(false);
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
          {/* Flash Message */}
          {flashMessage.message && (
            <div className={`mb-6 p-4 rounded-lg border-l-4 ${
              flashMessage.type === "success" 
                ? "bg-green-900/50 border-green-400 text-green-300" 
                : "bg-red-900/50 border-red-400 text-red-300"
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-medium">{flashMessage.message}</span>
                <button
                  onClick={() => setFlashMessage({ type: "", message: "" })}
                  className="ml-4 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <label className="group relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-[#FFD700] transition-all duration-300">
                {formData.profileImage ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={URL.createObjectURL(formData.profileImage)}
                      alt="Profile"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Change Photo</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <span className="text-gray-400 text-sm">Upload Photo</span>
                  </div>
                )}
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </label>
              {formData.profileImage && (
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, profileImage: null }));
                    setErrors(prev => ({ ...prev, profileImage: "" }));
                  }}
                  className="mt-2 text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove Photo
                </button>
              )}
              {errors.profileImage && (
                <p className="text-red-500 text-sm mt-1 text-center">{errors.profileImage}</p>
              )}
            </div>

            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className={`w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                    errors.firstName 
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                      : "border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className={`w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                    errors.lastName 
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                      : "border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                  errors.email 
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                    : "border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone & Country */}
            <div className="flex gap-2">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="px-3 py-3 border rounded-lg bg-[#0F223F] text-white border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all duration-300 min-w-[120px]"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#0F223F]">
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className={`flex-1 px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                  errors.phone 
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                    : "border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.phone}
              </p>
            )}

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className={`w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                  errors.password 
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                    : "border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.password}
                </p>
              )}
              {formData.password && !errors.password && (
                <p className="text-green-400 text-sm mt-1 flex items-center">
                  <span className="mr-1">✅</span>
                  Password meets all requirements
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm password"
                className={`w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 transition-all duration-300 ${
                  errors.confirmPassword 
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                    : "border-gray-600 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.confirmPassword}
                </p>
              )}
              {formData.confirmPassword && !errors.confirmPassword && formData.password === formData.confirmPassword && (
                <p className="text-green-400 text-sm mt-1 flex items-center">
                  <span className="mr-1">✅</span>
                  Passwords match
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className={`mt-1 h-4 w-4 text-[#FFD700] focus:ring-[#FFD700] border-gray-600 rounded transition-all duration-300 ${
                  errors.agreeToTerms ? "border-red-500" : ""
                }`}
              />
              <span className="text-sm text-gray-300">
                I agree to the{" "}
                <Link href="/terms" className="text-[#FFD700] hover:underline transition-colors">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#FFD700] hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.agreeToTerms}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
                isSubmitting
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-[#FFD700] text-[#0B1A36] hover:bg-[#E6C200] transform hover:scale-105"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0B1A36] mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

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