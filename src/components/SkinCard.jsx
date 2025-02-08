import React from "react";

const SkinCard = ({ itemImage, name, promo, status }) => {
  return (
    <div className="flex items-center flex-col bg-[#152A5B] p-3 rounded-xl">
      {/* Card Image Section */}
      <div className="relative w-24 h-24 border-2 border-[#0784BE] bg-gradient-to-br from-[#062E73] to-[#0E48AB] rounded-2xl">
        <div className="absolute top-1 left-1"></div>
        <div className="absolute top-4 left-3">
          {/* <img src={itemImage} alt={name} className="w-20 h-16" /> */}
        </div>
        <div className="absolute bottom-1 left-5 bg-gray-800/30 rounded-full">
          <div className="inline-flex items-center text-white px-3 py-1 rounded text-xs">
            {promo}
          </div>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="flex flex-col justify-center items-center mt-3">
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <div className="flex justify-start mt-2">
          <button className="bg-[#0051A280] px-4 py-2 rounded-xl text-sm font-semibold select-none text-[#56668F]">
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinCard;
