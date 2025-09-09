"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-[#071538] flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full">
        {/* Logo and Back to Home */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f5c542] rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#071538]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-[#d4af37] mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-300">
            Sign in to your Dubai Real Estate account
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-[#0d1b3f] rounded-2xl shadow-lg p-8 border border-[#d4af37]/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#d4af37] focus:ring-[#d4af37] border-gray-600 rounded bg-transparent"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-[#d4af37] hover:text-[#f5c542] font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#f5c542] text-[#071538] py-3 px-4 rounded-lg font-semibold hover:scale-105 transition"
            >
             <a href="/blog"> Sign In</a>
            </button>
          </form>

          {/* Divider */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#0d1b3f] text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-transparent border border-gray-600 text-gray-200 py-3 px-4 rounded-lg font-medium hover:bg-[#d4af37]/10 transition flex items-center justify-center gap-3"
          >
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

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-[#d4af37] hover:text-[#f5c542] font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
