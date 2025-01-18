import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const ChefCard = ({ 
  name, 
  rating, 
  reviewCount, 
  hireCount, 
  locationInfo, 
  responseTime, 
  startingPrice, 
  testimonial, 
  imageUrl,
  onClick 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="h-2 bg-deep_orange-500"></div>
      <div className="p-6">
        <div className="flex gap-6">
          <div className="w-24 h-24">
            <Img
              src={imageUrl}
              alt={`${name} profile`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <Heading as="h2" className="text-xl font-semibold text-gray-900">
                  {name}
                </Heading>
                <div className="flex items-center mt-1">
                  <Text className="text-green-600 font-medium">{rating}</Text>
                  <Text className="text-gray-600 ml-1">({reviewCount})</Text>
                </div>
                <div className="mt-2 space-y-1">
                  <Text className="text-gray-600 text-sm">{hireCount} hires on ConnecXit</Text>
                  <Text className="text-gray-600 text-sm">{locationInfo}</Text>
                  <Text className="text-gray-600 text-sm">{responseTime}</Text>
                </div>
              </div>
              <div className="text-right">
                <Text className="text-xl font-semibold">${startingPrice}</Text>
                <Text className="text-gray-600 text-sm">starting price</Text>
              </div>
            </div>
            <div className="mt-4">
              {testimonial && (
                <Text className="text-gray-800 italic">
                  "{testimonial}"
                </Text>
              )}
              <Button
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                onClick={onClick}
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CXTListPagePage() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const fetchVendors = useCallback(async () => {
    try {
      const url = selectedCategory === 'all' 
        ? '/api/vendors'
        : `/api/vendors?category=${encodeURIComponent(selectedCategory)}`;
      
      console.log('Fetching vendors from:', url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setVendors(data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchVendors();
  }, [selectedCategory, fetchVendors]);

  const handleVendorClick = (vendor) => {
    console.log('Clicked vendor:', vendor);
    navigate('/cxtdetailpage', { state: { vendorData: vendor } });
  };

  if (loading) {
    return (
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        <div className="container mx-auto px-4 py-8 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-deep_orange-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Error loading vendors: {error}</p>
            <button 
              onClick={fetchVendors}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  console.log('Rendering vendors:', vendors);

  return (
    <>
      <Helmet>
        <title>Find Service Providers - ConnecXit</title>
        <meta 
          name="description" 
          content="Browse and hire professional service providers for your events through ConnecXit" 
        />
      </Helmet>
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
        <main className="container mx-auto px-4 py-8">
          {/* Category Filter */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Providers</h1>
            <div className="flex flex-wrap gap-2">
              <button
                key="all"
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-deep_orange-500 text-white border-deep_orange-500'
                    : 'bg-white border-gray-200 hover:border-deep_orange-500 hover:text-deep_orange-500'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Categories
              </button>
              {Object.entries(VENDOR_CATEGORIES).map(([category, { icon }]) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    selectedCategory === category
                      ? 'bg-deep_orange-500 text-white border-deep_orange-500'
                      : 'bg-white border-gray-200 hover:border-deep_orange-500 hover:text-deep_orange-500'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {icon} {category}
                </button>
              ))}
            </div>
          </div>

          {/* Debug Info */}
          <div className="mb-4 p-4 bg-gray-100 rounded">
            <p>Number of vendors: {vendors.length}</p>
            <p>Loading: {loading.toString()}</p>
            <p>Error: {error || 'None'}</p>
            <p>Selected Category: {selectedCategory}</p>
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 gap-6">
            {vendors && vendors.length > 0 ? (
              vendors.map((vendor, index) => {
                console.log('Rendering vendor:', JSON.stringify(vendor, null, 2));
                return (
                  <ChefCard
                    key={vendor._id || `vendor-${index}`}
                    name={vendor.name || 'Unknown Vendor'}
                    rating={`${vendor.rating || '0.0'} / 5.0`}
                    reviewCount={vendor.reviewCount || 0}
                    hireCount={vendor.hireCount || 0}
                    locationInfo={`Serves ${vendor.location || 'Raleigh Area'}`}
                    responseTime="Typically responds in 24 hours"
                    startingPrice={vendor.price || 100}
                    testimonial={vendor.description || 'No description available'}
                    imageUrl={vendor.imageUrl || `https://source.unsplash.com/featured/?${encodeURIComponent(vendor.category?.toLowerCase() || 'business')},professional`}
                    onClick={() => handleVendorClick(vendor)}
                  />
                );
              })
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">No vendors found</h3>
                <p className="mt-2 text-sm text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

// Vendor categories with icons (updated based on database categories)
const VENDOR_CATEGORIES = {
  'Caterers': { icon: '🍽️' },
  'Dance Schools': { icon: '💃' },
  'Florists': { icon: '💐' },
  'Venues & Event Spaces': { icon: '🏰' },
  'DJs': { icon: '🎧' },
  'Photography': { icon: '📸' },
  'Transportation': { icon: '🚗' },
  'Travel Agents': { icon: '✈️' },
  'Event Planning': { icon: '📋' },
  'Beauty & Makeup': { icon: '💄' },
  'Equipment Rentals': { icon: '🎪' },
  'Entertainment': { icon: '🎭' }
};
