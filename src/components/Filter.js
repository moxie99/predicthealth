import React from 'react';

const Filter = ({ options, selected, onSelect }) => {
  return (
    <div>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
