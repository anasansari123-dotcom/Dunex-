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
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100">
   
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-300">Find answers to common questions about Dubai real estate</p>
        </div>

        {/* FAQ Content */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-2xl shadow-lg border border-white/10 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                <svg
                  className={`w-5 h-5 text-[#D4AF37] transition-transform ${
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
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-200 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Still Have Questions?</h3>
          <p className="text-gray-200 mb-6">
            Can't find the answer you're looking for? Our team is here to help you with any questions about Dubai real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+9714XXXXXXX"
              className="bg-[#D4AF37] text-[#071538] px-6 py-3 rounded-lg hover:brightness-95 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <a
              href="mailto:info@dubairealestate.com"
              className="bg-transparent border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#071538] transition-colors font-medium flex items-center justify-center gap-2"
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
            className="inline-block bg-[#D4AF37] text-[#071538] px-6 py-3 rounded-lg hover:brightness-95 transition-colors font-medium"
          >
            Back to Home
          </Link>
          <div className="flex justify-center gap-4">
            <Link
              href="/terms"
              className="text-[#D4AF37] hover:brightness-110 font-medium"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-[#D4AF37] hover:brightness-110 font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
