import React from "react";
import { HeaderButton } from "./HeaderButton";

export function Header() {
  return (
    <div className="flex justify-between items-center px-3 py-6 bg-[#0F1933]">
      {/* Empty button (placeholder for design purposes) */}
      <HeaderButton className="px-9 py-3.5" />

      {/* Button with icon and counter */}
      <div className="relative flex items-center bg-[#152A5B] rounded-full px-3 py-1">
        <img
          src="../../public/icons/icon-1.svg"
          alt="icon"
          className="w-5 h-5"
        />
        <span className="text-base mx-2">10k</span>
        <div className="absolute top-0 right-0">
          <img
            src="../../public/icons/plus.svg"
            alt="plus"
            className="w-4 h-4"
          />
        </div>
      </div>

      {/* Button with single icon and text */}
      <HeaderButton iconSrc="../../public/icons/icon-2.svg" text="0.05" />

      {/* Gradient button with two icons and text */}
      <HeaderButton
        iconSrc="../../public/icons/icon-3.svg"
        text="Cash"
        additionalIconSrc="../../public/icons/icon-4.svg"
        gradient
      />
    </div>
  );
}