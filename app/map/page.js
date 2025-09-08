import Image from "next/image";

export default function DubaiPropertyMap() {
  const propertyTypes = [
    "Apartment For Sale",
    "Apartment For Rent", 
    "Townhouse For Sale",
    "Townhouse For Rent",
    "Plot/Commercial For Sale",
    "Plot/Commercial For Rent"
  ];

  const dubaiLandmarks = [
    { name: "PALM JUMEIRAH", position: "bottom-1/4 right-1/4" },
    { name: "THE WORLD ISLANDS", position: "bottom-1/3 right-1/3" },
    { name: "DUBAI MARINA", position: "bottom-1/2 right-1/3" },
    { name: "UMM SUQEIM", position: "bottom-1/3 right-1/2" },
    { name: "EMIRATE'S HILLS", position: "top-1/3 left-1/2" },
    { name: "DUBAI SPORTS CITY", position: "top-1/2 left-1/2" },
    { name: "AL KARAMA", position: "top-1/2 left-1/3" },
    { name: "AL RASHIDIYA", position: "top-1/3 left-1/3" },
    { name: "MIRDIF", position: "top-1/4 left-1/2" },
    { name: "DUBAI INDUSTRIAL CITY", position: "top-1/4 right-1/4" },
    { name: "BAI MENTS PARK", position: "top-1/3 right-1/4" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-teal-600 rounded-l-lg"></div>
              <div className="w-4 h-4 bg-green-500 rounded-r-lg"></div>
            </div>
            <h1 className="text-2xl font-bold text-teal-800">FINEXA REAL ESTATE</h1>
          </div>
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
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

      {/* Left Sidebar - Property Search Panel */}
      <div className="fixed left-0 top-0 h-full w-80 bg-teal-800 z-30 shadow-2xl">
        <div className="p-6 pt-24">
          {/* Sidebar Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white uppercase mb-2">
              DUBAI PROPERTY MAP
            </h2>
            <p className="text-white/80 text-sm">
              View Dubai Properties On Map
            </p>
          </div>

          {/* Property Search Buttons */}
          <div className="space-y-4">
            {propertyTypes.map((type, index) => (
              <button
                key={index}
                className="w-full bg-white text-teal-800 py-4 px-6 rounded-lg font-medium hover:bg-teal-50 transition-all duration-200 hover:shadow-md text-left"
              >
                {type}
              </button>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-teal-700 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Map Legend</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>Water Bodies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span>Land Areas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Parks & Green Areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="ml-80 relative">
        {/* Map Background */}
        <div className="min-h-screen bg-gradient-to-br from-teal-100 via-gray-100 to-green-100 relative">
          {/* Water Bodies */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-300 rounded-tl-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-blue-200 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1/6 h-1/6 bg-blue-200 rounded-full"></div>
          
          {/* Land Areas with Labels */}
          {dubaiLandmarks.map((landmark, index) => (
            <div
              key={index}
              className={`absolute ${landmark.position} transform -translate-x-1/2 -translate-y-1/2`}
            >
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-200">
                <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
                  {landmark.name}
                </span>
              </div>
            </div>
          ))}

          {/* Special Landmarks */}
          {/* Palm Jumeirah */}
          <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-green-300 rounded-full relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-green-500 rounded-full"></div>
              <div className="absolute inset-4 bg-green-600 rounded-full"></div>
            </div>
          </div>

          {/* The World Islands */}
          <div className="absolute bottom-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Dubai Marina */}
          <div className="absolute bottom-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-8 bg-gray-400 rounded-t-sm"
                  style={{ height: `${Math.random() * 20 + 20}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Roads Network */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="roadPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="5" x2="10" y2="5" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#roadPattern)"/>
            </svg>
          </div>

          {/* Interactive Property Markers */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0"></div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-24 right-6 space-y-2">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Floating Info Panel */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs">
            <h3 className="font-semibold text-gray-800 mb-2">Dubai Property Market</h3>
            <p className="text-sm text-gray-600 mb-3">
              Explore properties across Dubai's most prestigious communities and emerging areas.
            </p>
            <div className="text-xs text-gray-500">
              <p>• 2,500+ Properties Available</p>
              <p>• 50+ Communities Covered</p>
              <p>• Real-time Market Updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Link */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="/"
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-l-lg"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-r-lg"></div>
                </div>
                <h3 className="text-xl font-bold">FINEXA REAL ESTATE</h3>
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
                <p>Email: info@finexarealestate.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Finexa Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
