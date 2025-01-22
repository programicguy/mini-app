import React from "react";

const ButtonLg = ({
  text,
  className = "",
  icon = null,
  iconPosition = "before",
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center rounded-[17px] text-white font-medium shadow-lg ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === "before" && (
        <span className="mr-2">
          <img src={icon} alt="icon" className="w-5 h-5" />
        </span>
      )}
      {text}
      {icon && iconPosition === "after" && (
        <span className="ml-2">
          <img src={icon} alt="icon" className="w-5 h-5" />
        </span>
      )}
    </button>
  );
};

export default ButtonLg;
