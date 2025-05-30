'use client';

import React, { useState } from 'react';
import { MapPin, Building2, DollarSign, TrendingUp, Search as SearchIcon } from 'lucide-react';

const HeroSection = () => {
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('');
  const [capRate, setCapRate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ city, propertyType, price, capRate });
  };

  return (
    <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url("/assets/hero.png")' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-end px-4">
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-lg p-6 sm:p-10 w-full max-w-5xl -mb-32">

          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Find your neighbor
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Real estate investment
            </h2>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <Dropdown
              icon={<MapPin size={16} />}
              label="Cities"
              value={city}
              options={cityOptions}
              onChange={setCity}
            />
            <Dropdown
              icon={<Building2 size={16} />}
              label="Property"
              value={propertyType}
              options={propertyTypeOptions}
              onChange={setPropertyType}
            />
            <Dropdown
              icon={<DollarSign size={16} />}
              label="Price"
              value={price}
              options={priceOptions}
              onChange={setPrice}
            />
            <Dropdown
              icon={<TrendingUp size={16} />}
              label="Cap Rat"
              value={capRate}
              options={capRateOptions}
              onChange={setCapRate}
            />
            <button
              type="submit"
              className="bg-[#CBB677] text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Dropdown = ({
  icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full md:w-auto min-w-[140px]">
      <div
        className="flex items-center p-2 border border-gray-300 rounded-md bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-500 mr-2">{icon}</span>
        <span className={`text-sm ${value ? 'text-gray-900' : 'text-gray-500'}`}>
          {value ? options.find((o) => o.value === value)?.label : label}
        </span>
        <svg
          className={`ml-auto h-4 w-4 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.114l3.71-3.883a.75.75 0 111.08 1.04l-4.25 4.45a.75.75 0 01-1.08 0l-4.25-4.45a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-md w-full max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Options
const cityOptions = [
  { label: 'New York', value: 'new-york' },
  { label: 'Los Angeles', value: 'los-angeles' },
  { label: 'Chicago', value: 'chicago' },
  { label: 'Miami', value: 'miami' },
];

const propertyTypeOptions = [
  { label: 'Apartment', value: 'apartment' },
  { label: 'House', value: 'house' },
  { label: 'Condo', value: 'condo' },
  { label: 'Commercial', value: 'commercial' },
];

const priceOptions = [
  { label: 'Under $100K', value: '0-100k' },
  { label: '$100K - $500K', value: '100k-500k' },
  { label: '$500K - $1M', value: '500k-1m' },
  { label: 'Over $1M', value: '1m+' },
];

const capRateOptions = [
  { label: 'Under 5%', value: '0-5' },
  { label: '5% - 7%', value: '5-7' },
  { label: 'Over 7%', value: '7+' },
];

export default HeroSection;
