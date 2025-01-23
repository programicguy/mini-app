import React, { useState } from "react";
import ButtonLg from "../components/ButtonLg";

const Box = () => {
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 10;

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#0E1832] rounded-2xl shadow-lg w-full max-w-md p-6 relative border-t border-[#00A8FF]">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg">
          <img
            src="../../public/icons/close-circle.svg"
            alt="Cloase"
            className="w-12 h-12 bg-[#D9D9D940] p-2 rounded-full"
          />
        </button>

        {/* Diamond Icon */}
        <div className="flex justify-center relative">
          <div className="w-36 h-36">
            <img
              src="../../public/icons/shop-card-bg.svg"
              alt="Diamond"
              className="w-full h-full object-contain animate-scale-rotate"
            />
          </div>
          <div className="w-24 h-24 absolute top-5">
            <img
              src="../../public/icons/silver-diamond.svg"
              alt="Diamond"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">Open Your Lucky Box</h2>
          <p className="text-lg text-[#5B6C99]">Win up to 20 $TON</p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center space-x-8 my-8">
          <button
            onClick={handleDecrease}
            className="w-10 h-10 bg-[#539CBE40] font-bold text-[#B3A8B4E5] rounded-full flex items-center justify-center text-3xl"
          >
            -
          </button>
          <div className="w-20 h-20 flex items-center justify-center bg-[#539CBE40] rounded-full relative">
            <img
              src="../../public/icons/gift.svg"
              alt="Diamond"
              className="w-12 h-12"
            />
            <div className="text-white bg-[#BC090B] px-2 rounded-tr-lg rounded-tl-lg rounded-br-lg text-sm font-semibold absolute -top-2 -right-6">
              x{quantity}
            </div>
          </div>
          <button
            onClick={handleIncrease}
            className="w-10 h-10 bg-[#539CBE40] font-bold text-[#B3A8B4E5] rounded-full flex items-center justify-center text-3xl"
          >
            +
          </button>
        </div>

        {/* Availability Info */}
        <div className="text-center text-base text-gray-400">
          Available: {maxQuantity}
        </div>

        {/* Open Button */}
        <div className="flex justify-center items-center my-3">
          <ButtonLg
            text="Open"
            className="w-56 h-16 gradient-button rounded-2xl text-2xl text-semibold"
            onClick={() => console.log("Box open Button Clicked")}
          />
        </div>

        {/* Tip */}
        <p className="text-center text-xs text-white/40">
          <span className="text-white">Tips:</span> Invite your friends and open
          more boxes
        </p>
      </div>
    </div>
  );
};

export default Box;
