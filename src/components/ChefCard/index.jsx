import React from "react";
import { Text, Heading, Img, Button } from "..";
import PropTypes from "prop-types";

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
                <Text className="text-gray-800">
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

ChefCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  hireCount: PropTypes.number.isRequired,
  locationInfo: PropTypes.string.isRequired,
  responseTime: PropTypes.string.isRequired,
  startingPrice: PropTypes.number.isRequired,
  testimonial: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ChefCard;
