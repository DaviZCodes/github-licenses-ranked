import React, { useEffect, useState } from "react";

interface SortDropdownProps {
  onSortChange: (selectedOption: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSortChange(selectedValue);
  };

  return (
    <div className="flex items-center gap-1">
      <label htmlFor="sortDropdown" className="text-base text-gray-600">
        Sort By:
      </label>
      <div className="relative">
        <select
          id="sortDropdown"
          value={selectedOption}
          onChange={handleSortChange}
          className="pl-4 pr-8 border border-gray-300 rounded-md text-base text-gray-800 bg-white appearance-none focus:outline-none focus:border-custom-blue"
        >
          <option value="least-strict">Least strict</option>
          <option value="most-strict">Most strict</option>
          <option value="most-popular">Most popular</option>
          <option value="least-popular">Least popular</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
