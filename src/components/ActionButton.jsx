import React from "react";
import ButtonLg from "./ButtonLg";
import IconButton from "./IconButton"; // Import the reusable IconButton

export function ActionButton() {
  const icons = [
    { src: "/store.svg", alt: "Store", badge: null,  onClick: () => console.log("Store Clicked") },
    { src: "/gift.svg", alt: "Gift Box", badge: 10,  onClick: () => console.log("Gifts Clicked") },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-between w-full">
          {/* Dynamic Icons using IconButton */}
          {icons.map((icon, index) => (
            <div key={index} className="relative">
              <IconButton
                iconSrc={icon.src}
                altText={icon.alt}
                onClick={icon.onClick}
                className="w-15 h-15 bg-gray-800/90 p-3"
                iconClass="w-8 h-8"
              />
              {icon.badge && (
                <div className="absolute -top-3 right-0 bg-[#FF445AE5] rounded-full px-1.5 py-0.5 text-sm">
                  {icon.badge}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Start Farming Button */}
        <div className="w-full">
          <ButtonLg
            text="Start Farming"
            className="w-full gradient-button py-3 rounded-[17px] text-white font-medium shadow-lg px-4"
            onClick={() => console.log("Start Farming Clicked")}
          />
        </div>
      </div>
    </div>
  );
}
