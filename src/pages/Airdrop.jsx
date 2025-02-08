import React, { useState } from "react";
import FilterOptions from "../components/SkinsFilter";
import SkinCard from "../components/SkinCard";
import ButtonLg from "../components/ButtonLg";

const AirdropPage = () => {
  const [filter, setFilter] = useState("all");

  const skins = [
    {
      id: 1,
      type: "gun",
      name: "Book",
      promo: "Basic",
      status: "Enabled",
      bgImage: "../../public/card-bg.svg",
      itemImage: "../../public/upgrade-card-icon-2.svg",
    },
  ];

  const filterOptions = [
    "all",
    "gun",
    "mask",
    "dress",
    "cup",
    "shield",
    "gloves",
    "box",
  ];

  const filteredSkins =
    filter === "all" ? skins : skins.filter((skin) => skin.type === filter);

  return (
    <div className="relative h-screen max-w-[500px] mx-auto bg-[#0F1933] text-white p-4 mb-20">
      {/* Profile Section */}
      <div className="flex items-center justify-end">
        <button className="bg-[#152241] p-2 rounded-full select-none">
          <img
            src="../../public/profile-setting.svg"
            alt="Settings"
            className="w-6 h-6"
          />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32 bg-black rounded-full"></div>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-[#0062FB] to-[#00D6FF] text-xs px-2 py-1 rounded-full">
            1 lvl
          </div>
        </div>
      </div>
      <h2 className="text-center text-lg font-semibold my-4">Ayan Khan</h2>
      <div className="flex space-x-2">
        <div className="flex-1 h-20 bg-[#152A5B] rounded-2xl"></div>
        <div className="flex-1 h-20 bg-[#152A5B] rounded-2xl"></div>
      </div>

      {/* Connect Wallet Button */}
      <div className="w-full">
        <ButtonLg
          text="Connect Wallet"
          // icon="../../public/gift.svg"
          className="w-full gradient-button py-2 rounded-xl text-white shadow-lg px-4 mt-4"
          onClick={() => console.log("Connect Wallet Clicked")}
        />
      </div>
      {/* Progress Section */}
      <div className="mt-6 bg-[#152A5B] p-5 rounded-2xl">
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="mr-2">Gold</span>
            <span className="bg-[#173669] px-2 rounded-md text-sm text-[12px] text-[#81C4EB] select-none">
              +1h
            </span>
          </div>
          <div className="bg-[#20376C] px-4 py-3 rounded-lg text-[#7782A6] select-none">
            <span className="text-sm font-semibold flex items-center">
              <img
                src="../../public/lock.svg"
                alt="Lock"
                className="w-4 h-4 mr-1"
              />
              10 lvl
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm font-semibold text-[#00A8F8] select-none">
              30%
            </span>
          </div>
          <span className="text-sm">500k</span>
        </div>
        <div className="relative bg-[#121E3A] rounded-full h-2">
          <div
            className="absolute bg-gradient-to-r from-[#00ECFF] to-[#005EFF] rounded-full h-full"
            style={{ width: "30%" }}
          ></div>
        </div>
      </div>

      {/* Filter Options */}
      <FilterOptions
        options={filterOptions}
        activeFilter={filter}
        onFilterChange={setFilter}
      />

      {/* Skins Section */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {filteredSkins.map((skin) => (
          <SkinCard key={skin.id} {...skin} />
        ))}
      </div>
    </div>
  );
};

export default AirdropPage;
