"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      color: "bg-gradient-to-r from-blue-500 to-indigo-500"
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
      color: "bg-gradient-to-r from-indigo-500 to-purple-500"
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
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/dubai-office.jpg"
            alt="Dubai Office"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-indigo-700/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">Contact Our Experts</h1>
            <p className="text-xl text-gray-100">
              Get in touch with our Dubai Real Estate specialists for personalized assistance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, i) => (
            <div key={i} className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className={`${method.color} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-1">{method.details}</p>
              <p className="text-sm text-gray-500 mb-4">{method.subtitle}</p>
              <a
                href={method.action}
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition"
              >
                {method.title === "Visit Us" ? "Get Directions" : "Contact Now"}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Message *"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
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
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition font-medium"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
