'use client';

import Image from 'next/image';
import UserProfile from '../components/UserProfile';

const profileList = [
  { profileImage: "/images/planner-1.jpg", userName: "Event Planner 1", role: "Professional Event Planner" },
  { profileImage: "/images/planner-2.jpg", userName: "Event Planner 2", role: "Professional Event Planner" },
  { profileImage: "/images/planner-3.jpg", userName: "Event Planner 3", role: "Professional Event Planner" },
];

export default function EventPlannerSection() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Event Planners
            </h2>
            <p className="text-xl text-gray-500">
              Work with the best event planners in the industry
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {profileList.map((profile, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <UserProfile
                  image={profile.profileImage}
                  name={profile.userName}
                  role={profile.role}
                />
                <p className="mt-4 text-sm text-gray-600">
                  Experienced in planning corporate events, weddings, and social gatherings.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
