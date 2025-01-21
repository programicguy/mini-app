import React from "react";

export function HeaderButton({
  iconSrc,
  text,
  additionalIconSrc,
  gradient,
  className,
}) {
  return (
    <button
      className={`flex items-center gap-1 px-3 py-1 rounded-full ${
        gradient
          ? "bg-gradient-to-r from-[#00A9FF] to-[#004FC7]"
          : "bg-[#152A5B]"
      } ${className}`}
    >
      {iconSrc && <img src={iconSrc} alt="icon" className="w-4 h-4" />}
      {text && <span className="text-base mx-1.5">{text}</span>}
      {additionalIconSrc && (
        <img src={additionalIconSrc} alt="icon" className="w-3 h-3" />
      )}
    </button>
  );
}
