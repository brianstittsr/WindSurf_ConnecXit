import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "../../components";
import Footer31 from "../../components/Footer31";
import Header from "../../components/Header";
import Select from "react-select";

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const mockEvents = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    date: "Sat, June 15, 2024 • 2:00 PM",
    location: "Central Park, New York",
    category: "Music",
    price: "From $59.99",
    searchQuery: "summer music festival concert stage"
  },
  {
    id: 2,
    title: "Tech Innovation Summit",
    date: "Mon, July 1, 2024 • 9:00 AM",
    location: "Convention Center, San Francisco",
    category: "Technology",
    price: "From $299.99",
    searchQuery: "technology conference presentation"
  },
  {
    id: 3,
    title: "Food & Wine Festival",
    date: "Sat, August 10, 2024 • 12:00 PM",
    location: "Downtown District",
    category: "Food & Drink",
    price: "From $75.00",
    searchQuery: "gourmet food wine tasting event"
  },
  {
    id: 4,
    title: "Annual Charity Gala",
    date: "Fri, September 20, 2024 • 7:00 PM",
    location: "Grand Hotel Ballroom",
    category: "Charity",
    price: "From $150.00",
    searchQuery: "elegant charity gala ballroom event"
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "music", label: "Music" },
  { value: "technology", label: "Technology" },
  { value: "food", label: "Food & Drink" },
  { value: "charity", label: "Charity" }
];

export default function CTXEventTicketsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(mockEvents);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const updatedEvents = await Promise.all(
          events.map(async (event) => {
            try {
              const response = await fetch(
                `https://api.unsplash.com/photos/random?query=${encodeURIComponent(event.searchQuery)}&orientation=landscape`,
                {
                  headers: {
                    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
                  }
                }
              );

              if (!response.ok) {
                throw new Error('Failed to fetch image');
              }

              const data = await response.json();
              return {
                ...event,
                imageUrl: data.urls.regular,
                imageCredit: {
                  name: data.user.name,
                  link: data.user.links.html
                }
              };
            } catch (error) {
              console.error(`Error fetching image for event ${event.id}:`, error);
              return {
                ...event,
                imageUrl: 'https://placehold.co/600x400?text=' + encodeURIComponent(event.title)
              };
            }
          })
        );

        setEvents(updatedEvents);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchRandomImages();
  }, [events]); // Only run once on component mount

  const filteredEvents = events.filter(event => {
    if (selectedCategory && selectedCategory.value !== 'all') {
      if (event.category.toLowerCase() !== selectedCategory.value) {
        return false;
      }
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Events - ConnecXit</title>
        <meta
          name="description"
          content="Browse and purchase tickets for upcoming professional events."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header className="bg-white shadow-sm" />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="w-full md:w-64">
                <Select
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Select Category"
                  className="text-sm"
                />
              </div>
              
              <div className="w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep_orange-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  {event.imageCredit && (
                    <a
                      href={event.imageCredit.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded"
                    >
                      Photo by {event.imageCredit.name}
                    </a>
                  )}
                  <div className="absolute top-2 left-2">
                    <span className="inline-block bg-deep_orange-500 text-white text-xs px-2 py-1 rounded">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <p className="flex items-center">
                      <span className="material-icons text-gray-400 mr-2 text-base">
                        calendar_today
                      </span>
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <span className="material-icons text-gray-400 mr-2 text-base">
                        location_on
                      </span>
                      {event.location}
                    </p>
                    <p className="text-xl font-bold text-deep_orange-500 mt-4">
                      {event.price}
                    </p>
                  </div>
                  
                  <Button
                    variant="filled"
                    className="w-full mt-4 bg-deep_orange-500 hover:bg-deep_orange-600 text-white py-2 rounded-md transition-colors"
                  >
                    Get Tickets
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer31 className="mt-auto" />
      </div>
    </>
  );
}
