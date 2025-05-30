'use client'
import React, { useState } from 'react';
import { MapPin, Building2, DollarSign, TrendingUp, Search as SearchIcon } from 'lucide-react';

type DropdownOption = {
  label: string;
  value: string;
};

const propertyTypes: DropdownOption[] = [
  { label: 'Apartment', value: 'apartment' },
  { label: 'House', value: 'house' },
  { label: 'Condo', value: 'condo' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Land', value: 'land' },
];

const priceRanges: DropdownOption[] = [
  { label: 'Under $100,000', value: '0-100000' },
  { label: '$100,000 - $250,000', value: '100000-250000' },
  { label: '$250,000 - $500,000', value: '250000-500000' },
  { label: '$500,000 - $1,000,000', value: '500000-1000000' },
  { label: 'Over $1,000,000', value: '1000000+' },
];

const capRates: DropdownOption[] = [
  { label: 'Under 5%', value: '0-5' },
  { label: '5% - 7%', value: '5-7' },
  { label: '7% - 10%', value: '7-10' },
  { label: 'Over 10%', value: '10+' },
];

const cities: DropdownOption[] = [
  { label: 'New York', value: 'new-york' },
  { label: 'Los Angeles', value: 'los-angeles' },
  { label: 'Chicago', value: 'chicago' },
  { label: 'Miami', value: 'miami' },
  { label: 'San Francisco', value: 'san-francisco' },
];

const SearchForm: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [capRate, setCapRate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ city, propertyType, price, capRate });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 mt-8 w-full max-w-4xl"
    >
      <div className="flex-1 min-w-0">
        <Dropdown
          icon={<MapPin size={18} />}
          label="Cities"
          options={cities}
          value={city}
          onChange={(value) => setCity(value)}
        />
      </div>

      <div className="flex-1 min-w-0">
        <Dropdown
          icon={<Building2 size={18} />}
          label="Property"
          options={propertyTypes}
          value={propertyType}
          onChange={(value) => setPropertyType(value)}
        />
      </div>

      <div className="flex-1 min-w-0">
        <Dropdown
          icon={<DollarSign size={18} />}
          label="Price"
          options={priceRanges}
          value={price}
          onChange={(value) => setPrice(value)}
        />
      </div>

      <div className="flex-1 min-w-0">
        <Dropdown
          icon={<TrendingUp size={18} />}
          label="Cap Rate"
          options={capRates}
          value={capRate}
          onChange={(value) => setCapRate(value)}
        />
      </div>

      <button
        type="submit"
        className="flex-none px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        <div className="flex items-center justify-center">
          <SearchIcon size={18} className="mr-2" />
          <span>Search</span>
        </div>
      </button>
    </form>
  );
};

type DropdownProps = {
  icon: React.ReactNode;
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ icon, label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div 
        className="flex items-center w-full p-3 border border-gray-300 rounded-md bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-500 mr-2">{icon}</span>
        <span className={`flex-1 ${value ? 'text-gray-900' : 'text-gray-500'}`}>
          {value ? options.find(option => option.value === value)?.label : label}
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
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

export default SearchForm;