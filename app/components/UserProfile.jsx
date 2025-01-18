'use client';

import Image from 'next/image';

export default function UserProfile({ profileImage, userName, role, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {profileImage && (
        <div className="relative h-24 w-24 overflow-hidden rounded-full">
          <Image
            src={profileImage}
            alt={userName}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="text-center">
        {userName && (
          <h4 className="text-lg font-semibold text-gray-900">{userName}</h4>
        )}
        {role && (
          <p className="mt-1 text-sm text-gray-500">{role}</p>
        )}
      </div>
    </div>
  );
}
