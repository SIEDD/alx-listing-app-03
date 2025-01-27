import React, { useState } from 'react';

import Layout from '../components/layout/Layout';
import Pill from '../components/Filter/Pill'; // Import the Pill component
import { PROPERTYLISTINGSAMPLE } from '../constants'; // Import the PROPERTYLISTINGSAMPLE

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
};

// Filter Section with Pill Component
const predefinedFilters = [
  'Top Villa', 'Self Checkin', 'Pet Friendly', 'Free WiFi', 'Luxury',
];

const FilterSection: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Filter by</h2>
      <div className="flex flex-wrap">
        {predefinedFilters.map((filter, index) => (
          <Pill
            key={index}
            label={filter}
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </div>
    </section>
  );
};

// Property Card Component
const PropertyCard: React.FC<any> = ({ property }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.name}</h3>
        <p className="text-lg text-gray-700">{`$${property.price} per night`}</p>
        <p className="text-sm text-gray-500">Rating: {property.rating} ⭐</p>
      </div>
    </div>
  );
};

// Listing Section that maps over PROPERTYLISTINGSAMPLE
const ListingSection: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Property Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </section>
  );
};

// Main IndexPage Component
const IndexPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <FilterSection />
      <ListingSection />
    </Layout>
  );
};

export default IndexPage;
