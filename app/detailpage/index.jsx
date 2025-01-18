import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Img } from "../../components";

export default function CXTDetailPagePage() {
  const chefData = {
    name: "Chef Maria's Kitchen",
    rating: "Exceptional 5.0",
    reviewCount: 32,
    hireCount: 42,
    imageUrl: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60",
    locationInfo: "12 similar jobs near you",
    responseTime: "Responds in about 15 min",
    startingPrice: 155,
    testimonial: "Chef Maria created an amazing dining experience for our family gathering. Her attention to detail and culinary expertise made our event truly special.",
    specialties: ["Italian Cuisine", "Mediterranean", "Farm-to-Table", "Special Dietary Needs"],
    yearsOfExperience: 12,
    servicesOffered: [
      "Private Dining",
      "Cooking Classes",
      "Meal Prep",
      "Special Events",
      "Corporate Catering"
    ],
    certifications: [
      "Certified Professional Chef",
      "Food Safety Certified",
      "ServSafe Manager Certified"
    ],
    location: {
      lat: 40.7128,
      lng: -74.0060
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{chefData.name} - ConnecXit</title>
        <meta
          name="description"
          content={`View detailed profile, services, and reviews of ${chefData.name} on ConnecXit. Book your next culinary experience with confidence.`}
        />
      </Helmet>
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        <main className="container mx-auto px-4 py-8">
          {/* Chef Profile Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-32 h-32 flex-shrink-0">
                <Img 
                  src={chefData.imageUrl} 
                  alt={chefData.name}
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "images/img_rectangle19.png";
                  }}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{chefData.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-orange-500">{chefData.rating}</span>
                  <span className="text-gray-600">({chefData.reviewCount} reviews)</span>
                </div>
                <p className="mt-2 text-gray-600">{chefData.locationInfo}</p>
                <p className="text-gray-600">{chefData.responseTime}</p>
                <p className="mt-4 text-lg font-semibold">Starting at ${chefData.startingPrice}/event</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <p className="italic text-gray-700">{chefData.testimonial}</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white border-b mb-8">
            <div className="flex space-x-8 px-4">
              {["About", "Services", "Reviews", "Credentials"].map((tab) => (
                <button 
                  key={tab} 
                  className="px-4 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition-colors"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Current Top Pro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Hired {chefData.hireCount} times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{chefData.yearsOfExperience} Years Experience</span>
                  </div>
                </div>
              </section>

              {/* Specialties */}
              <section className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {chefData.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </section>

              {/* Services */}
              <section className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chefData.servicesOffered.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Map Section */}
              <section className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="relative">
                  {chefData.location && (
                    <div>
                      <p>Map component has been removed.</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Certifications */}
              <section className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                <div className="space-y-3">
                  {chefData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Book {chefData.name}</h2>
                <p className="text-gray-700 mb-4">Starting at ${chefData.startingPrice}/event</p>
                <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  Check Availability
                </button>
                <div className="mt-4 p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600">
                    {chefData.responseTime}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Top rated chef with {chefData.yearsOfExperience} years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => navigate("/cxtinbox")}
              className="flex items-center justify-center gap-2 bg-white text-orange-500 border-2 border-orange-500 py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z" />
              </svg>
              Message
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-orange-500 border-2 border-orange-500 py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Request a Call
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-orange-500 border-2 border-orange-500 py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Setup Escrow Account
            </button>
          </div>
        </main>
      </div>
    </>
  );
}