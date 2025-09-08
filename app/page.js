import Image from "next/image";

export default function Home() {
  const communities = [
    "DUBAILAND", "TOWNSQUARE", "DUBAI HARBOUR", "TILAL AL GHAF", "THE VALLEY BY EMAAR",
    "DUBAI ISLAND BY NAKHEEL", "DUBAI HILLS ESTATE", "DUBAI CREEK HARBOUR", "DAMAC LAGOONS",
    "DUBAI SOUTH", "THE OASIS BY EMAAR", "DAMAC RIVERSIDE", "AL MAKTOUM INTERNATIONAL AIRPORT",
    "JVC", "DAMAC HILLS 2", "THE PULSE BEACHFRONT", "DAMAC ISLANDS", "BUSINESS BAY",
    "REMRAAM", "FURJAN", "PALM JUMEIRAH", "EXPO CITY", "MINA RASHID BY EMAAR",
    "SINAYA ISLAND BY SOBHA", "VENICE BY AZIZI"
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Penthouse in Downtown Dubai",
      price: "AED 8,500,000",
      location: "Downtown Dubai",
      bedrooms: 4,
      bathrooms: 5,
      area: "3,200 sq ft",
      image: "/property1.jpg",
      type: "Penthouse"
    },
    {
      id: 2,
      title: "Modern Villa in Dubai Hills",
      price: "AED 12,000,000",
      location: "Dubai Hills Estate",
      bedrooms: 6,
      bathrooms: 7,
      area: "5,500 sq ft",
      image: "/property2.jpg",
      type: "Villa"
    },
    {
      id: 3,
      title: "Waterfront Apartment in Dubai Marina",
      price: "AED 3,200,000",
      location: "Dubai Marina",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,100 sq ft",
      image: "/property3.jpg",
      type: "Apartment"
    }
  ];

  const services = [
    {
      icon: "🏠",
      title: "Property Sales",
      description: "Expert guidance for buying luxury properties in Dubai's most prestigious locations."
    },
    {
      icon: "🏢",
      title: "Commercial Real Estate",
      description: "Office spaces, retail units, and commercial investments across Dubai."
    },
    {
      icon: "🏖️",
      title: "Property Management",
      description: "Complete property management services for investors and homeowners."
    },
    {
      icon: "📊",
      title: "Investment Advisory",
      description: "Strategic investment advice to maximize your real estate portfolio returns."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/dubai-skyline.jpg"
            alt="Dubai Skyline"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              LUXURY REAL ESTATE
              <span className="block text-teal-400">IN DUBAI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover premium properties and investment opportunities in the world's most dynamic city
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Explore Properties
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Investment Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Properties Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of luxury properties in Dubai's most prestigious locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-teal-600 font-semibold mb-4">{property.location}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>🛏️ {property.bedrooms} Bedrooms</span>
                    <span>🚿 {property.bathrooms} Bathrooms</span>
                    <span>📐 {property.area}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-teal-50 transition-colors">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FIND PROPERTIES FOR SALE AND RENT Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">
            FIND PROPERTIES FOR SALE AND RENT
          </h2>
          
          <div className="text-lg text-gray-700 mb-12 space-y-4 max-w-4xl mx-auto text-center">
            <p>
              Are you relocating to Dubai or planning to sell, buy, or rent a new home or office?
            </p>
            <p>
              Alternately, if you are looking for an off-plan or under-construction project from renowned developers with a convenient payment plan for an investment or for yourself, our property investment specialists will be happy to assist you with a variety of choices across different locations in Dubai based on your budget and needs.
            </p>
          </div>

          {/* Property Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* APARTMENTS */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-teal-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm">Modern Luxury Living</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4 text-center">APARTMENTS</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-teal-600 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-700 transition-colors">
                    FOR SALE
                  </button>
                  <button className="flex-1 bg-teal-600 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-700 transition-colors">
                    FOR RENT
                  </button>
                </div>
              </div>
            </div>

            {/* TOWNHOUSE/VILLAS */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Premium Family Homes</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4 text-center">TOWNHOUSE/VILLAS</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 transition-colors">
                    FOR SALE
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 transition-colors">
                    FOR RENT
                  </button>
                </div>
              </div>
            </div>

            {/* PLOT/COMMERCIAL */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Business & Investment</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4 text-center">PLOT/COMMERCIAL</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    FOR SALE
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    FOR RENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DUBAI : COMMUNITIES IN FOCUS Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">
            DUBAI : COMMUNITIES IN FOCUS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {communities.map((community, index) => (
              <button
                key={index}
                className="bg-white border-2 border-gray-300 rounded-full py-3 px-6 text-sm font-medium text-gray-700 hover:border-teal-600 hover:text-teal-700 transition-all duration-200 hover:shadow-md"
              >
                {community}
              </button>
            ))}
          </div>
        </section>

        {/* POSITIVE ACADEMY Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            POSITIVE ACADEMY
          </h2>
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Empowering Real Estate Excellence
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Positive Academy is your gateway to mastering the art of real estate and excelling in the dynamic Dubai property market. Whether you're a seasoned professional or just starting your journey, our comprehensive training programs are designed to elevate your skills and accelerate your growth.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Training Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Elevate Your Skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Marketing Strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Mastering Client Relations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Growth Opportunities</span>
                </div>
              </div>
              
              <button className="bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition-colors flex items-center gap-2">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-teal-100 to-green-100 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="w-32 h-32 bg-white/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <p className="text-sm">Professional Training Session</p>
                <p className="text-xs text-gray-500 mt-2">Conference room with diverse professionals</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Dubai Property Map Section */}
      <section className="bg-gradient-to-br from-teal-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              DUBAI PROPERTY MAP
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore Dubai's most prestigious communities and emerging areas with our interactive property map. 
              Find your perfect location with detailed insights into neighborhoods, amenities, and property availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 via-gray-100 to-green-100 rounded-2xl p-8 h-96 relative overflow-hidden shadow-2xl">
                {/* Water Bodies */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-300 rounded-tl-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-blue-200 rounded-full"></div>
                
                {/* Land Areas with Labels */}
                <div className="absolute top-1/4 left-1/4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-200">
                    <span className="text-xs font-medium text-gray-800">EMIRATE'S HILLS</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-200">
                    <span className="text-xs font-medium text-gray-800">DUBAI SPORTS CITY</span>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-1/4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-200">
                    <span className="text-xs font-medium text-gray-800">PALM JUMEIRAH</span>
                  </div>
                </div>

                {/* Special Landmarks */}
                <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-green-300 rounded-full relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Property Markers */}
                <div className="absolute top-1/3 left-1/3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 left-0"></div>
                </div>

                <div className="absolute bottom-1/3 right-1/3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 left-0"></div>
                </div>

                {/* Roads Network */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="roadPattern2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="5" x2="10" y2="5" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#roadPattern2)"/>
                  </svg>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Info */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="text-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600">Interactive Map</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">
                  Discover Dubai's Property Landscape
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our comprehensive property map gives you a bird's eye view of Dubai's real estate market. 
                  Explore different communities, understand property types, and find the perfect location for your investment.
                </p>
              </div>

              {/* Property Types */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Apartments</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Villas</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Commercial</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Plots</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Real-time property availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Community insights & amenities</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Interactive search filters</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="/map"
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                  Explore Full Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
