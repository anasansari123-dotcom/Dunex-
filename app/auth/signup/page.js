"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flash, setFlash] = useState("");

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (flash) setFlash("");
  };

  const validate = () => {
    const v = {};
    if (!formData.firstName.trim()) v.firstName = "First name is required";
    if (!formData.lastName.trim()) v.lastName = "Last name is required";
    if (!formData.email.trim()) {
      v.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      v.email = "Enter a valid email";
    }
    if (!formData.password) {
      v.password = "Password is required";
    } else if (formData.password.length < 8) {
      v.password = "At least 8 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      v.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms) v.agreeToTerms = "Required";
    setErrors(v);
    return Object.keys(v).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validate()) {
      setIsSubmitting(false);
      return;
    }
    // Client-side only demo
    setFlash("Account created (demo).");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1A36] via-[#13294B] to-[#0B1A36] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0F223F]/90 border border-[#FFD700]/30 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#FFD700]">Create Account</h1>
          <p className="text-gray-300 mt-1">Luxury return month after month</p>
        </div>

        {flash && (
          <div className="mb-4 rounded-lg border-l-4 border-green-400 bg-green-900/40 text-green-200 p-3">
            {flash}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                placeholder="First name"
                className={`w-full px-4 py-3 rounded-lg bg-transparent border ${
                  errors.firstName ? "border-red-500" : "border-gray-600 focus:border-[#FFD700]"
                } text-white placeholder-gray-400`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                placeholder="Last name"
                className={`w-full px-4 py-3 rounded-lg bg-transparent border ${
                  errors.lastName ? "border-red-500" : "border-gray-600 focus:border-[#FFD700]"
                } text-white placeholder-gray-400`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Email"
              className={`w-full px-4 py-3 rounded-lg bg-transparent border ${
                errors.email ? "border-red-500" : "border-gray-600 focus:border-[#FFD700]"
              } text-white placeholder-gray-400`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-lg bg-transparent border ${
                errors.password ? "border-red-500" : "border-gray-600 focus:border-[#FFD700]"
              } text-white placeholder-gray-400`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={onChange}
              placeholder="Confirm password"
              className={`w-full px-4 py-3 rounded-lg bg-transparent border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-600 focus:border-[#FFD700]"
              } text-white placeholder-gray-400`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <label className="flex items-start gap-2 text-gray-300">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={onChange}
              className="mt-1 h-4 w-4 text-[#FFD700] border-gray-600 rounded"
            />
            <span className="text-sm">
              I agree to the {" "}
              <Link href="/terms" className="text-[#FFD700] hover:underline">Terms & Conditions</Link>{" "}
              and {" "}
              <Link href="/privacy" className="text-[#FFD700] hover:underline">Privacy Policy</Link>
              {errors.agreeToTerms && (
                <span className="block text-red-500">{errors.agreeToTerms}</span>
              )}
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold shadow-md ${
              isSubmitting
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-[#FFD700] text-[#0B1A36] hover:bg-[#E6C200]"
            }`}
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account? {" "}
          <Link href="/auth/login" className="text-[#FFD700] hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}


