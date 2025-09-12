"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../hooks/useAuth";

export default function SignupPage() {
  const router = useRouter();
  const { signup, signInWithGoogle, loading, error, isAuthenticated, clearError } = useAuth();
  
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
  const [submitError, setSubmitError] = useState("");

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (flash) setFlash("");
    if (submitError) setSubmitError("");
    if (error) clearError();
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    clearError();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signup(
        formData.email, 
        formData.password, 
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          full_name: `${formData.firstName} ${formData.lastName}`
        }
      );

      if (result.success) {
        if (result.needsConfirmation) {
          setFlash(result.message);
        } else {
          setFlash("Account created successfully! Redirecting...");
          setTimeout(() => {
            router.push('/dashboard');
          }, 2000);
        }
        
        // Clear form only if no email confirmation needed
        if (!result.needsConfirmation) {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreeToTerms: false,
          });
        }
      } else {
        setSubmitError(result.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignup = async () => {
    setSubmitError("");
    clearError();
    
    const result = await signInWithGoogle();
    if (!result.success) {
      setSubmitError(result.error || "Google signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1A36] via-[#13294B] to-[#0B1A36] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0F223F]/90 border border-[#FFD700]/30 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#FFD700]">Create Account</h1>
          <p className="text-gray-300 mt-1">Luxury return month after month</p>
        </div>

        {/* Success/Info Messages */}
        {flash && (
          <div className="mb-4 rounded-lg border-l-4 border-green-400 bg-green-900/40 text-green-200 p-3">
            {flash}
          </div>
        )}

        {/* Error Messages */}
        {(error || submitError) && (
          <div className="mb-4 p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
            {error || submitError}
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
            disabled={isSubmitting || loading}
            className={`w-full py-3 rounded-lg font-semibold shadow-md ${
              isSubmitting || loading
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-[#FFD700] text-[#0B1A36] hover:bg-[#E6C200]"
            }`}
          >
            {isSubmitting || loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0F223F] text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        {/* Google Signup Button */}
        <button
          onClick={handleGoogleSignup}
          disabled={loading || isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium transition flex items-center justify-center gap-3 ${
            loading || isSubmitting
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-transparent border border-gray-600 text-gray-200 hover:bg-[#FFD700]/10"
          }`}
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

        <p className="mt-6 text-center text-gray-400">
          Already have an account? {" "}
          <Link href="/auth/login" className="text-[#FFD700] hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}


