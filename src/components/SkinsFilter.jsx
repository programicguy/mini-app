import React, { useRef, useState } from "react";

const FilterOptions = ({ options, activeFilter, onFilterChange }) => {
  const filterRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - filterRef.current.offsetLeft);
    setScrollLeft(filterRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - filterRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    filterRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  return (
    <div
      className={`mt-6 flex space-x-4 pb-2 overflow-hidden cursor-pointer ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      ref={filterRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      {options.map((type) => (
        <button
          key={type}
          onClick={() => onFilterChange(type)}
          className={`text-sm px-7 py-2 rounded-full whitespace-nowrap select-none ${
            activeFilter === type
              ? "bg-gradient-to-r from-[#00A9FF] to-[#0050C7]"
              : "bg-[#152A5B]"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterOptions;
