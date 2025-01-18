'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Heading } from '../components/ui';
import { UserProfile } from '../components';
import Select from 'react-select';
import * as RadixSelect from '@radix-ui/react-select';
import { useState } from 'react';

const profileList = [
  { 
    profileImage: {
      src: '/images/img_rectangle_321.png',
      width: 64,
      height: 64
    }, 
    userName: "Event Planner 1", 
    role: "Professional Event Planner" 
  },
  { 
    profileImage: {
      src: '/images/img_rectangle_322.png',
      width: 64,
      height: 64
    }, 
    userName: "Event Planner 2", 
    role: "Professional Event Planner" 
  },
  { 
    profileImage: {
      src: '/images/img_rectangle_323.png',
      width: 64,
      height: 64
    }, 
    userName: "Event Planner 3", 
    role: "Professional Event Planner" 
  },
];

const plannerTypes = [
  { value: 'wedding', label: 'Wedding Planner' },
  { value: 'corporate', label: 'Corporate Event Planner' },
  { value: 'party', label: 'Party Planner' },
  { value: 'conference', label: 'Conference Planner' },
  { value: 'social', label: 'Social Event Planner' },
];

const eventTimingOptions = [
  { value: 'within1month', label: 'Within 1 Month' },
  { value: 'within3months', label: 'Within 3 Months' },
  { value: 'within6months', label: 'Within 6 Months' },
  { value: 'within1year', label: 'Within 1 Year' },
  { value: 'morethan1year', label: 'More than 1 Year' },
];

const resourceOptions = [
  { value: 'venue', label: 'Venue' },
  { value: 'catering', label: 'Catering' },
  { value: 'photography', label: 'Photography' },
  { value: 'music', label: 'Music/Entertainment' },
  { value: 'decor', label: 'Decor' },
];

export default function EventPlanningSection() {
  const [isEventPro, setIsEventPro] = useState(true);
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [selectedResources, setSelectedResources] = useState([]);
  const [selectedPlannerType, setSelectedPlannerType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');

  const handleZipCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(value);
  };

  const handleSearchClick = () => {
    // Implement search functionality
    console.log({
      isEventPro,
      selectedTiming,
      selectedResources,
      selectedPlannerType,
      zipCode,
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-r from-blue-600 to-blue-400 lg:block" />
      
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div className="space-y-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Find Your Perfect Event Professional
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Connect with top event planners and vendors in your area.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsEventPro(true)}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium ${
                    isEventPro
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Event Planner
                </button>
                <button
                  onClick={() => setIsEventPro(false)}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium ${
                    !isEventPro
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Vendor
                </button>
              </div>

              <div className="space-y-4">
                {isEventPro ? (
                  <Select
                    options={plannerTypes}
                    value={plannerTypes.find(option => option.value === selectedPlannerType)}
                    onChange={(option) => setSelectedPlannerType(option.value)}
                    placeholder="Select planner type"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                ) : (
                  <Select
                    options={resourceOptions}
                    isMulti
                    value={selectedResources}
                    onChange={setSelectedResources}
                    placeholder="Select resources needed"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                )}

                <Select
                  options={eventTimingOptions}
                  value={selectedTiming}
                  onChange={setSelectedTiming}
                  placeholder="When do you need it?"
                  className="react-select-container"
                  classNamePrefix="react-select"
                />

                <input
                  type="text"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  placeholder="Enter ZIP code"
                  className="block w-full rounded-lg border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />

                <Button onClick={handleSearchClick} className="w-full">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Profiles */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-8">
                {profileList.map((profile, index) => (
                  <div
                    key={index}
                    className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={profile.profileImage.src}
                          alt={profile.userName}
                          width={profile.profileImage.width}
                          height={profile.profileImage.height}
                          className="rounded-full object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{profile.userName}</h3>
                        <p className="text-sm text-gray-500">{profile.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
