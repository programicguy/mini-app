import React from "react";
import ButtonLg from "./ButtonLg";

export function ActionButton() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-between w-full px-4">
          {/* Icons */}
          <div className="w-15 h-15 rounded-full p-3 bg-gray-800/90 flex items-center justify-center">
            <img
              src="../../public/icons/store.svg"
              alt="Slot Machine"
              className="w-10 h-10"
            />
          </div>
          <div className="relative w-15 h-15 p-3 rounded-full bg-gray-800/90 flex items-center justify-center">
            <img
              src="../../public/icons/gift.svg"
              alt="Gift Box"
              className="w-10 h-10"
            />
            <div className="absolute -top-3 right-0 bg-[#FF445AE5] rounded-full px-1.5 py-0.5 text-sm">
              10
            </div>
          </div>
        </div>
        <div className="w-full">
          <ButtonLg
            text="Start Farming"
            // You can add icon also like below way-----------
            // icon="../../public/icons/gift.svg"
            className="w-full gradient-button py-3 rounded-[17px] text-white font-medium shadow-lg px-4"
            onClick={() => console.log("Start Farming Clicked")}
          />
        </div>
      </div>
    </div>
  );
}
