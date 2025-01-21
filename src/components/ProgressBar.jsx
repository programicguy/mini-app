import React from "react";

export function ProgressBar() {
  return (
    <div className="mx-4 pt-5 flex items-center justify-between">
      {/* Left Side: Level Info */}
      <div className="flex items-center gap-2 px-4 py-1 bg-[#D9D9D940] text-black rounded-full">
        <img
          src="/icons/level.svg" // Adjusted path
          alt="Gift Box"
          className="w-6 h-6"
        />
        <div className="flex items-center text-sm	text-white">
          <span>Lvl</span>
          <span>7</span>
          <span>/10</span>
        </div>
      </div>

      {/* Middle: Progress Bar */}
      <div className="flex-grow mx-4 relative bg-[#D9D9D940] rounded-full h-6">
        <div className="w-[70%] bg-gradient-to-r from-[#01A6FDB2] to-[#015ACEB2] rounded-full h-full" />
        <span className="absolute right-[20%] -top-2 text-sm font-medium text-white bg-[#D9D9D940] px-4 py-2 rounded-full">
          7
        </span>
      </div>

      {/* Right Side: Friends Button */}
      <button className="rounded-full px-4 py-1 text-sm flex items-center gap-1 bg-gradient-to-r from-[#00A9FF] to-[#004FC7]">
        <img
          src="/icons/friend.svg" 
          alt="Gift Box"
          className="w-6 h-6"
        />
        <span>Friends</span>
      </button>
    </div>
  );
}
