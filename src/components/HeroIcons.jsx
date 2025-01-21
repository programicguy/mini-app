import React from 'react';

export function HeroIcons() {
  return (
    <div className="flex justify-between">
      <div className="flex mx-2 flex-col gap-2 ">
        <span className="rounded-full bg-[#D9D9D940] items-center justify-center p-3 m-2">
          <img
            src="../../public/icons/trophy.svg"
            alt="trophy"
            className="w-6 h-6 rounded-full"
          />
        </span>
        <span className="rounded-full bg-[#D9D9D940] items-center justify-center p-3 m-2">
          <img
            src="../../public/icons/play.svg"
            alt="trophy"
            className="w-6 h-6"
          />
        </span>
      </div>
      <div className="flex mx-2 flex-col gap-2">
        <span className="rounded-full bg-[#D9D9D940] items-center justify-center p-3 m-2">
          <img
            src="../../public/icons/share.svg"
            alt="trophy"
            className="w-6 h-6"
          />
        </span>
        <span className="rounded-full bg-[#D9D9D940] items-center justify-center p-3 m-2">
          <img
            src="../../public/icons/home.svg"
            alt="trophy"
            className="w-6 h-6"
          />
        </span>
      </div>
    </div>
  );
}