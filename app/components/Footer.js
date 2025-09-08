export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-600 rounded-l-lg"></div>
                <div className="w-4 h-4 bg-green-500 rounded-r-lg"></div>
              </div>
              <h3 className="text-xl font-bold">DUNEX REAL ESTATE</h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner in Dubai's real estate market, offering premium properties and expert investment guidance.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/map" className="hover:text-white transition-colors">Property Map</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Property Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Rentals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Dubai, United Arab Emirates</p>
              <p>Phone: +971 4 XXX XXXX</p>
              <p>Email: info@dunexrealestate.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DUNEX Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}