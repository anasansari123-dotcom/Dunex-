"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactMethod: "email"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: "+971 4 XXX XXXX",
      subtitle: "Mon-Fri 9AM-6PM",
      action: "tel:+9714XXXXXXX",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "info@dubairealestate.com",
      subtitle: "24/7 Support",
      action: "mailto:info@dubairealestate.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "Dubai, UAE",
      subtitle: "Main Office",
      action: "#",
    }
  ];

  return (
    <div className="min-h-screen bg-[#071538] text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative h-96 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <Image
            src="/dubai-office.jpg"
            alt="Dubai Office"
            fill
            className="object-cover opacity-30 scale-105 animate-pulse-slow"
          />
        </div>
        <div className="absolute inset-0 bg-[#071538]/80"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-bold mb-4 text-[#d4af37] drop-shadow-lg">
              Contact Our Experts
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch with our Dubai Real Estate specialists for personalized assistance
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-[#0d1b3f] border border-[#d4af37]/40 rounded-xl shadow-lg p-6 transition"
            >
              <div className="bg-[#d4af37] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-[#071538] shadow-md">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#d4af37] mb-2">{method.title}</h3>
              <p className="text-gray-200 mb-1">{method.details}</p>
              <p className="text-sm text-gray-400 mb-4">{method.subtitle}</p>
              <a
                href={method.action}
                className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f5c542] text-[#071538] px-6 py-2 rounded-lg shadow-md hover:shadow-xl transition font-semibold"
              >
                {method.title === "Visit Us" ? "Get Directions" : "Contact Now"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#0d1b3f] rounded-2xl shadow-lg p-8 border border-[#d4af37]/40 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Send us a Message</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring-2 focus:ring-[#d4af37]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring-2 focus:ring-[#d4af37]"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Message *"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring-2 focus:ring-[#d4af37]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#f5c542] text-[#071538] py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
              >
                Send Message
              </motion.button>
            </form>
          ) : (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce">
                <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#d4af37] mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-200 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    contactMethod: "email"
                  });
                }}
                className="bg-gradient-to-r from-[#f5c542] to-[#d4af37] text-[#071538] px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Back to Home */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f5c542] text-[#071538] px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition font-semibold"
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
