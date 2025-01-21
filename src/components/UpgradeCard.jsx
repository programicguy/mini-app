import React from "react";

const UpgradeCard = ({
  title,
  earn,
  percentage,
  coins,
  level,
  icon,
  progress,
}) => {
  return (
    <div className="bg-[#152A5B] rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between">
        {/* Card Image Section */}
        <div className="flex items-center space-x-4">
          <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl">
            <div className="absolute top-1 left-1">
              <img
                src="/icons/card-bg.svg"
                alt="Card Background"
                className="w-24 h-24"
              />
            </div>
            <div className="absolute top-4 left-3">
              <img
                src={`/icons/${icon}.svg`}
                alt={title}
                className="w-16 h-16"
              />
            </div>
            <div className="absolute bottom-1 left-5 bg-gray-800/30 rounded-full">
              <div className="inline-flex items-center text-white px-3 py-1 rounded text-xs">
                1 Lvl {level}
              </div>
            </div>
          </div>

          {/* Card Details */}
          <div className="flex flex-col">
            <h3
              className="text-xl font-semibold text-[#BFD7F5] my-2 truncate max-w-[140px]"
              title={title}
            >
              {title}
            </h3>
            <p className="text-white text-xs">{earn}</p>
            <p className="text-[#8ED3F6] text-xs mt-2">+{percentage}%</p>

            {/* Progress Bar */}
            <div className="flex items-center mt-2">
              <div className="relative bg-[#121E3A] rounded-full w-full h-3">
                <div
                  className="absolute bg-gradient-to-r from-[#00A9FF] to-[#004FC7] rounded-full h-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="ml-3">
                <img
                  src="/icons/gift-box.svg"
                  alt="Gift Box"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Button and Coins */}
        <div className="flex flex-col align-middle justify-center">
          <button className="bg-[#20376C] text-white px-4 py-2 rounded-[15px]">
            <span className="text-sm text-[#7782A6]">Upgrade</span>
          </button>
          <div className="text-center mt-1">
            <span className="text-base text-white">{coins}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCard;
