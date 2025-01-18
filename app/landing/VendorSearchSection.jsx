'use client';

import { Button, Heading } from '../components/ui';
import { UserProfile } from '../components';

const vendorList = [
  { profileImage: "/images/vendor-1.jpg", userName: "Elegant Events", role: "Event Planning & Decor" },
  { profileImage: "/images/vendor-2.jpg", userName: "Gourmet Delights", role: "Catering Services" },
  { profileImage: "/images/vendor-3.jpg", userName: "Capture Moments", role: "Photography & Videography" },
  { profileImage: "/images/vendor-4.jpg", userName: "Sound Masters", role: "Entertainment Services" },
];

export default function VendorSearchSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <Heading size="4xl" className="text-center">
              <span className="text-black-900_02">Search Pro Vendors by </span>
              <span className="text-deep_orange-500">Category</span>
            </Heading>
            <p className="text-xl text-gray-500 text-center">
              Find and connect with top-rated vendors in your area
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {vendorList.map((vendor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <UserProfile {...vendor} />
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="min-w-[208px] rounded-lg px-[26px] font-medium"
            >
              View All Vendors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
