import React from "react";

const UpgradeCard = ({
  title,
  earn,
  percentage,
  coins,
  level,
  icon,
  progress,
  isDisabled,
}) => {
  return (
    <div className="bg-[#152A5B] rounded-xl p-4 mb-4">
      <div className="flex items-start justify-between gap-4">
        {/* Left Section */}
        <div className="flex flex-1 gap-4">
          {/* Image Container */}
          <div className="relative shrink-0 w-24 h-24 rounded-2xl border-2 border-[#0F7FCE] bg-gradient-to-b from-[#1D5B6A] to-[#0F0F4A]">
            <img
              src={`/${icon}.svg`}
              alt={title}
              className="absolute top-4 left-3 w-16 h-16"
            />
            <div
              className="absolute bottom-1 left-5 rounded-full"
              style={{
                background:
                  "radial-gradient(49.9% 49.81% at 50.52% 37.12%, #067FFF 0%, #033972 56%, #000000 100%)",
                backgroundBlendMode: "color-dodge",
              }}
            >
              <span className="inline-block px-3 py-1 text-xs text-white">
                1 Lvl {level}
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[#BFD7F5] truncate mb-1">
              {title}
            </h3>
            <p className="text-xs text-white">{earn}</p>
            <p className="text-xs text-[#8ED3F6] mt-1">+{percentage}%</p>

            {/* Progress Bar Section */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-2.5 bg-[#121E3A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00A9FF] to-[#004FC7] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <img
                src="/gift-box.svg"
                alt="Gift"
                className="w-5 h-5 shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-1">
          <button
            className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
              isDisabled
                ? "bg-[#20376C] text-[#7782A6] cursor-not-allowed"
                : "bg-gradient-to-r from-[#01A5FC] to-[#0156CB] text-white"
            }`}
            disabled={isDisabled}
          >
            <span className="text-xs">Upgrade</span>
          </button>
          <span className="text-sm text-white flex justify-between items-center gap-1 mt-2">
            <img src="/shop-love.svg" alt="Gift" className="w-4 h-4" />
            {coins}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCard;
