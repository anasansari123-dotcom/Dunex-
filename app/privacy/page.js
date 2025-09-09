"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A1A3C] text-white">
      {/* Header with Logo */}
      <header className="text-center py-8">
       
        <h1 className="text-4xl font-bold text-[#CBA135] mb-2">Privacy Policy</h1>
        <p className="text-gray-300">Effective Date: 09 September 2025</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8">
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you use Dunex, we may collect the following types of
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">Personal Information:</span> Name,
                email, phone number, address, date of birth, government-issued IDs
                (PAN, Aadhar, Passport), and bank/payment details.
              </li>
              <li>
                <span className="font-semibold">
                  Transaction & Investment Information:
                </span>{" "}
                Investment amounts, project details, ROI records, payment history,
                and verification data.
              </li>
              <li>
                <span className="font-semibold">Technical & Usage Data:</span> IP
                address, device info, browser type, pages visited, clicks, time
                spent, and cookies.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Verifying identity and completing KYC.</li>
              <li>Processing investments and ROI payments.</li>
              <li>Sending updates, offers, and important notifications.</li>
              <li>Monitoring website functionality and improving services.</li>
              <li>Preventing fraud and ensuring legal compliance.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              We respect your privacy and only share your data in limited
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers (banks, payment gateways, KYC partners).</li>
              <li>For legal compliance and government requirements.</li>
              <li>During mergers, acquisitions, or business transfers.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">
              4. Data Security
            </h2>
            <p>
              We use encryption, secure servers, and strict access controls to
              protect your personal and financial data. While we take strong
              precautions, no system can guarantee 100% security.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">
              5. Cookies & Tracking
            </h2>
            <p>
              Dunex uses cookies for essential functionality, analytics, and
              marketing. You can manage or disable cookies through your browser
              settings.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">6. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and correct your personal data.</li>
              <li>Request deletion of your information (subject to legal needs).</li>
              <li>Withdraw consent for data usage anytime.</li>
              <li>File a complaint with Dunex or legal authorities.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">
              7. Contact Us
            </h2>
            <div className="bg-[#F9FAFB] p-4 rounded-lg border border-gray-200">
              <p>Email: info@dunexdubai.com</p>
              <p>Phone: +971 50 123 4567</p>
              <p>Address: Business Bay, Dubai, United Arab Emirates</p>
            </div>
          </section>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#CBA135] text-[#0A1A3C] px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition"
          >
            Back to Home
          </Link>
          <div className="flex justify-center gap-4">
            <Link href="/terms" className="text-[#CBA135] hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="text-[#CBA135] hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
