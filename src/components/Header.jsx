import React from "react";
import { ButtonGroup } from "./ButtonGroup";

export function Header() {
  return (
    <div className="flex justify-between items-center px-3 py-6 bg-[#0F1933]">
      {/* Empty button (placeholder for design purposes) */}
      <ButtonGroup  text="00000" />

      {/* Button with icon and counter */}
      <div className="relative flex items-center bg-[#152A5B] rounded-full">
        {/* Button with single icon and text */}
        <ButtonGroup iconSrc="icon-1.svg" text="10k" />
        <div className="absolute top-0 right-0">
          <img src="plus.svg" alt="plus" className="w-4 h-4" />
        </div>
      </div>

      {/* Button with single icon and text */}
      <ButtonGroup iconSrc="icon-2.svg" text="0.05" />

      {/* Gradient button with two icons and text */}
      <ButtonGroup
        iconSrc="icon-3.svg"
        text="Cash"
        additionalIconSrc="public/icon-4.svg"
        gradient
      />
    </div>
  );
}