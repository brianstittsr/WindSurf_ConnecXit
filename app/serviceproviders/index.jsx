import React, { useState, useEffect } from 'react';
import { Container, Card, Text, Flex, Button, Select, Slider } from '@radix-ui/themes';
import axios from 'axios';
import { StarFilledIcon } from '@radix-ui/react-icons';
import Header from "../../components/Header";

const ServiceProviders = () => {
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    type: 'vendor',
    latitude: 0,
    longitude: 0,
    radius: 50000,
    category: '',
    minRating: 0,
    maxPrice: 1000,
    sortBy: 'distance',
    sortOrder: 'asc',
  });

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFilters(prev => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      });
    }

    // Load categories
    fetchCategories();
  }, [filters.type]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories', {
        params: { type: filters.type }
      });
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProviders = async () => {
    try {
      const response = await axios.get('/api/providers', { params: filters });
      setProviders(response.data.data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, [filters]);

  const renderRating = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarFilledIcon
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white-a700">
      <Header className="sticky top-0 z-50 bg-white-a700 shadow-sm" />
      
      <Container size="4" className="py-8">
        <Text size="8" weight="bold" className="mb-8">Service Providers</Text>

        {/* Filters */}
        <Flex direction="column" gap="4" className="mb-8">
          <Flex gap="4" wrap="wrap">
            <Select.Root 
              value={filters.type}
              onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
            >
              <Select.Trigger className="w-[200px]" />
              <Select.Content>
                <Select.Item value="vendor">Vendors</Select.Item>
                <Select.Item value="planner">Event Planners</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root
              value={filters.category}
              onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
            >
              <Select.Trigger className="w-[200px]" placeholder="All Categories" />
              <Select.Content>
                <Select.Item value="">All Categories</Select.Item>
                {categories.map((cat) => (
                  <Select.Item key={cat.category} value={cat.category}>
                    {cat.category} ({cat.count})
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

            <Select.Root
              value={filters.sortBy}
              onValueChange={(value) => setFilters(prev => ({ ...prev, sortBy: value }))}
            >
              <Select.Trigger className="w-[200px]" />
              <Select.Content>
                <Select.Item value="distance">Distance</Select.Item>
                <Select.Item value="rating">Rating</Select.Item>
                <Select.Item value="price">Price</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root
              value={filters.sortOrder}
              onValueChange={(value) => setFilters(prev => ({ ...prev, sortOrder: value }))}
            >
              <Select.Trigger className="w-[200px]" />
              <Select.Content>
                <Select.Item value="asc">Ascending</Select.Item>
                <Select.Item value="desc">Descending</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction="column" gap="2">
            <Text>Search Radius: {filters.radius / 1000}km</Text>
            <Slider 
              value={[filters.radius]}
              onValueChange={(value) => setFilters(prev => ({ ...prev, radius: value[0] }))}
              min={1000}
              max={100000}
              step={1000}
            />
          </Flex>
        </Flex>

        {/* Results */}
        <Flex gap="4" wrap="wrap">
          {providers.map((provider) => (
            <Card key={provider._key} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]">
              <Flex direction="column" gap="2" p="4">
                <Text size="6" weight="bold">{provider.name}</Text>
                <Text color="gray">{provider.category}</Text>
                <Flex gap="1">{renderRating(provider.rating)}</Flex>
                <Text>Distance: {(provider.distance / 1000).toFixed(1)}km</Text>
                {provider.price && (
                  <Text>Price Range: ${provider.price}</Text>
                )}
                {provider.services && (
                  <Text>Services: {provider.services.map(s => s.name).join(', ')}</Text>
                )}
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default ServiceProviders;
