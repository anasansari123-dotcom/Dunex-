"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "How do I search for properties in Dubai?",
      answer: "You can search for properties using our advanced search filters. Simply visit our property search page, select your preferred location, property type, price range, and other criteria. You can also use our interactive map to explore different areas and view available properties."
    },
    {
      question: "What documents do I need to buy property in Dubai?",
      answer: "For UAE residents, you'll need your Emirates ID, passport copy, and proof of income. For international buyers, you'll need your passport, proof of funds, and a No Objection Certificate (NOC) from your current bank. We recommend consulting with our legal team for specific requirements."
    },
    {
      question: "Are there any restrictions for foreigners buying property in Dubai?",
      answer: "Foreigners can buy property in designated freehold areas in Dubai. There are no restrictions on nationality, and you can own 100% of the property. Popular freehold areas include Dubai Marina, Palm Jumeirah, Downtown Dubai, and Dubai Hills Estate."
    },
    {
      question: "What are the typical closing costs when buying property in Dubai?",
      answer: "Closing costs typically include 4% Dubai Land Department fee, 2% agent commission, and various administrative fees. The total usually ranges from 6-8% of the property value. We provide a detailed breakdown of all costs during the transaction process."
    },
    {
      question: "How do I know if a property is a good investment?",
      answer: "Consider factors like location, rental yield potential, market trends, and future development plans. Our market analysis tools provide insights into property appreciation rates, rental demand, and area development. We also offer investment consultation services."
    },
    {
      question: "Can I get a mortgage as a foreigner in Dubai?",
      answer: "Yes, many banks in Dubai offer mortgages to foreigners. You can typically borrow up to 75% of the property value with a minimum down payment of 25%. Requirements include proof of income, employment verification, and a good credit history."
    },
    {
      question: "What is the rental market like in Dubai?",
      answer: "Dubai has a dynamic rental market with competitive rates. Rental yields typically range from 5-8% annually. Popular areas for rentals include Dubai Marina, Downtown Dubai, and Business Bay. We provide rental market analysis and tenant screening services."
    },
    {
      question: "How do I list my property for sale or rent?",
      answer: "To list your property, contact our team or use our online listing form. We'll schedule a property visit, take professional photos, create a detailed listing, and market it across our network. We handle everything from valuation to closing."
    },
    {
      question: "What are the best areas for families in Dubai?",
      answer: "Family-friendly areas include Dubai Hills Estate, Arabian Ranches, Emirates Hills, and Mirdif. These areas offer good schools, parks, shopping centers, and community facilities. We can help you find the perfect family home based on your specific needs."
    },
    {
      question: "How do I schedule a property viewing?",
      answer: "You can schedule viewings through our website, by calling our office, or contacting your assigned agent. We offer flexible viewing times including evenings and weekends. Virtual tours are also available for international buyers."
    },
    {
      question: "What is the process for selling my property?",
      answer: "Our selling process includes property valuation, professional photography, marketing strategy, buyer screening, negotiation support, and transaction management. We handle all legal requirements and ensure a smooth closing process."
    },
    {
      question: "Do you offer property management services?",
      answer: "Yes, we offer comprehensive property management services including tenant management, rent collection, property maintenance, and financial reporting. This is ideal for investors who don't want to manage their properties directly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">DUBAI REAL ESTATE</h1>
          <div className="flex gap-4">
            <a
              href="/blog"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Blog
            </a>
            <a
              href="/map"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
              </svg>
              View Map
            </a>
            <div className="flex gap-2">
              <a
                href="/auth/login"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </a>
              <a
                href="/auth/signup"
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Find answers to common questions about Dubai real estate</p>
        </div>

        {/* FAQ Content */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                <svg
                  className={`w-5 h-5 text-teal-600 transition-transform ${
                    openItems.has(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Our team is here to help you with any questions about Dubai real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+9714XXXXXXX"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <a
              href="mailto:info@dubairealestate.com"
              className="bg-white border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
          >
            Back to Home
          </Link>
          <div className="flex justify-center gap-4">
            <Link
              href="/terms"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
