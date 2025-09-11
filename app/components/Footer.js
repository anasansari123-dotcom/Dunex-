export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Dunex</h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner for Dubai real estate investments with guaranteed 10-15% monthly ROI.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="text-[13px]">📍 Dubai Office: Business Bay, Dubai, UAE</p>
                <p className="text-[13px]">📍 India Support Office: Mumbai, India</p>
                <p>📞 +91-XXXXXXXXXX</p>
                <p>📧 info@dunex.com</p>
                <p>🌐 www.dunex.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
                <li><a href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</a></li>
                <li><a href="/dashboard" className="hover:text-[#D4AF37] transition-colors">Dashboard</a></li>
                <li><a href="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex items-center space-x-4 text-gray-300">
                <a href="#" aria-label="Instagram" className="hover:text-[#D4AF37] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM17.5 6a1 1 0 110 2 1 1 0 010-2z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#D4AF37] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V23h-4v-6.67c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23h-4V8z"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-[#D4AF37] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.88-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.91h-2.39v7.04A10 10 0 0022 12z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-[#D4AF37] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.27 4.27 0 001.88-2.36 8.54 8.54 0 01-2.71 1.04 4.26 4.26 0 00-7.26 3.88A12.09 12.09 0 013 5.15a4.25 4.25 0 001.32 5.68 4.2 4.2 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.28 4.28 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.54 8.54 0 012 19.54 12.05 12.05 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.35 8.35 0 0022.46 6z"/></svg>
                </a>
              </div>
              
            </div>
            
          </div>
          <p className="mb-4">🔒 Disclaimer: All investments are subject to market risks. ROI is based on historical performance and may vary slightly depending on project conditions. Dunex ensures full transparency, legal compliance, and real-time reporting to safeguard your investment.</p>


          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevSphere Solutions. All rights reserved. | Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </footer>
  );
}