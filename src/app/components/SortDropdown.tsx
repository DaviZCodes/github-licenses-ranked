import React, { useState } from "react";

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
    <div>
      <label htmlFor="sortDropdown">Sort By: </label>
      <select
        id="sortDropdown"
        value={selectedOption}
        onChange={handleSortChange}
      >
        <option value="most-strict">Most strict</option>
        <option value="least-strict">Least strict</option>
        <option value="most-popular">Most popular</option>
        <option value="least-popular">Least popular</option>
      </select>
    </div>
  );
};

export default SortDropdown;
