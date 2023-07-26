import React, { useState } from "react";

interface SortDropdownProps {
  onSortChange: (selectedOption: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("popularity");

  const handleSortChange = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSortChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="sortDropdown">Sort By:</label>
      <select
        id="sortDropdown"
        value={selectedOption}
        onChange={handleSortChange}
      >
        <option value="popularity">Popularity</option>
        <option value="strictness">Strictness</option>
      </select>
    </div>
  );
};

export default SortDropdown;
