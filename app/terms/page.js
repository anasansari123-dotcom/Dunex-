"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A1A3C] text-white">
      {/* Header */}
    
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#CBA135] mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-300">Last updated: 09 September 2025</p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">1. General Information</h2>
              <p>
                Dunex provides investment opportunities in Dubai real estate for Indian investors. 
                By accessing or using our services, you agree to these Terms and Conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">2. Investment Disclaimer</h2>
              <p>
                All investments carry risks. Dunex provides access to verified projects but does not
                guarantee returns. Any projected ROI, including 10–15% monthly, is indicative and may vary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">3. Account Registration</h2>
              <p>
                Users must provide accurate and complete details. You are responsible for
                maintaining your account security and confidentiality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">4. User Obligations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide true and accurate information</li>
                <li>Use the platform only for lawful purposes</li>
                <li>Do not attempt to hack, disrupt, or misuse services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">5. Fees & Charges</h2>
              <p>
                Any platform fees or charges will be communicated before you invest. Dunex reserves
                the right to update fees with prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">6. Intellectual Property</h2>
              <p>
                All content on Dunex’s platform including text, graphics, and branding is the property 
                of Dunex. Reproduction without written consent is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">7. Limitation of Liability</h2>
              <p>
                Dunex is not liable for direct or indirect losses arising from investments. Users
                acknowledge that real estate involves market and legal risks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">8. Privacy</h2>
              <p>
                Your personal and financial data is processed in line with our Privacy Policy. By
                using Dunex, you consent to data usage for investment services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">9. Termination</h2>
              <p>
                Dunex may suspend or terminate accounts in case of violations. Users may close their
                accounts by following the platform’s termination process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Disputes will fall under the
                jurisdiction of Indian courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">11. Amendments</h2>
              <p>
                Dunex reserves the right to update these Terms. Continued use of the platform
                constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A1A3C] mb-4">12. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>Email: info@dunexdubai.com</p>
                <p>Phone: +91-9876543210</p>
                <p>Address: Dubai, United Arab Emirates</p>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#CBA135] text-[#0A1A3C] px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
          >
            Back to Home
          </Link>
          <div className="flex justify-center gap-4">
            <Link
              href="/faq"
              className="text-[#CBA135] hover:text-yellow-400 font-medium"
            >
              View FAQ
            </Link>
            <Link
              href="/privacy"
              className="text-[#CBA135] hover:text-yellow-400 font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
