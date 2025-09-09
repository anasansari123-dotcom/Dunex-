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
                <p>📍 Dubai, UAE</p>
                <p>📞 +91-XXXXXXXXXX</p>
                <p>📧 info@dunex.com</p>
                <p>🌐 www.dunex.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-300">
                <p>How It Works</p>
                <p>Featured Projects</p>
                <p>ROI Calculator</p>
                <p>About Us</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors">Twitter</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevSphere Solutions. All rights reserved. | Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </footer>
  );
}