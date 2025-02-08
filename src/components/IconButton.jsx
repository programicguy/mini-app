import React from "react";

const IconButton = ({ iconSrc, altText, onClick, className, iconClass }) => {
  return (
    <button
      className={`rounded-full bg-[#D9D9D940] flex items-center justify-center p-3 m-2 ${className}`}
      onClick={onClick}
    >
      <img src={iconSrc} alt={altText} className={iconClass} />
    </button>
  );
};

export default IconButton;
