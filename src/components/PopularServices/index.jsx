import React from 'react';
import Link from 'next/link';
import {
  HouseCleaningIcon,
  HandymanIcon,
  ElectricalIcon,
  PaintingIcon,
  JunkRemovalIcon,
  MovingIcon,
  ApplianceRepairIcon,
  FlooringIcon
} from './icons';

const services = [
  {
    Icon: HouseCleaningIcon,
    title: 'House cleaning',
    link: '/services/house-cleaning'
  },
  {
    Icon: HandymanIcon,
    title: 'Handyman',
    link: '/services/handyman'
  },
  {
    Icon: ElectricalIcon,
    title: 'Electrical and wiring repair',
    link: '/services/electrical'
  },
  {
    Icon: PaintingIcon,
    title: 'Interior painting',
    link: '/services/painting'
  },
  {
    Icon: JunkRemovalIcon,
    title: 'Junk removal',
    link: '/services/junk-removal'
  },
  {
    Icon: MovingIcon,
    title: 'Local moving (under 50 miles)',
    link: '/services/local-moving'
  },
  {
    Icon: ApplianceRepairIcon,
    title: 'Appliance repair or maintenance',
    link: '/services/appliance-repair'
  },
  {
    Icon: FlooringIcon,
    title: 'Floor installation or replacement',
    link: '/services/flooring'
  }
];

const PopularServices = ({ location = 'Raleigh, North Carolina' }) => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-2">
        Popular services in <Link href="/location" className="text-blue-500 hover:text-blue-600">{location}</Link>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {services.map((service, index) => (
          <Link 
            key={index} 
            href={service.link}
            className="flex flex-col items-center p-6 border rounded-lg hover:shadow-lg transition-all hover:border-blue-200 group"
          >
            <div className="w-12 h-12 mb-4 text-gray-600 group-hover:text-blue-500 transition-colors">
              <service.Icon />
            </div>
            <span className="text-center text-gray-800 font-medium group-hover:text-blue-500 transition-colors">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
