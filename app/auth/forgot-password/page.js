"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
    setError("");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1D39] via-[#13294B] to-[#0F2349] flex items-center justify-center p-4 text-[#D4AF37]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        {/* Logo + Title */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-[#D4AF37] rounded-full mx-auto flex items-center justify-center shadow-lg"
            >
              <svg
                className="w-10 h-10 text-[#0B1D39]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </motion.div>
          </Link>
          <h1 className="text-3xl font-extrabold mb-2">Reset Password</h1>
          <p className="text-[#D4AF37]/80">
            Enter your email to receive reset instructions
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0F2349]/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-[#D4AF37]/40"
        >
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-[#13294B] text-white placeholder-gray-400 transition ${
                      error ? "border-red-500" : "border-[#D4AF37]/40 border"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-[#D4AF37] text-[#0B1D39] py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Send Reset Link
                </motion.button>
              </form>

              {/* Divider */}
              <div className="my-6 relative flex items-center">
                <div className="flex-grow border-t border-[#D4AF37]/30" />
                <span className="mx-2 text-sm text-[#D4AF37]/70">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-[#D4AF37]/30" />
              </div>

              {/* Google Login Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleGoogleLogin}
                className="w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center gap-3 shadow-md"
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
              </motion.button>
            </>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Check Your Email</h3>
              <p className="text-[#D4AF37]/80 mb-6">
                We've sent a password reset link to{" "}
                <span className="font-medium text-[#D4AF37]">{email}</span>
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-[#D4AF37] text-[#0B1D39] py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Send Another Email
              </button>
            </motion.div>
          )}

          {/* Navigation Links */}
          <div className="mt-8 text-center space-y-3">
            <p>
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-[#D4AF37] hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
            <p>
              Don’t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-[#D4AF37] hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[#D4AF37]/70 hover:text-[#D4AF37] text-sm flex items-center justify-center gap-2"
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
      </motion.div>
    </div>
  );
}
