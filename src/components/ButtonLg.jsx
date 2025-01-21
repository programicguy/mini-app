import React from "react";

const ButtonLg = ({ text, className = "", icon = null, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-[17px] text-white font-medium shadow-lg ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" className="mr-2 w-5 h-5" />}
      {text}
    </button>
  );
};

export default ButtonLg;
