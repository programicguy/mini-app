import React, { useState, useEffect } from "react";
import { leaderboardData } from "../data/leaderboardData";
import LeaderboardList from "../components/LeaderboardList";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  const [level, setLevel] = useState(1);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setPlayers(leaderboardData[activeTab][level]);
  }, [activeTab, level]);

  const handlePrevLevel = () => {
    setLevel((prev) => Math.max(1, prev - 1));
  };

  const handleNextLevel = () => {
    setLevel((prev) => Math.min(2, prev + 1));
  };

  const getMedalColor = (rank) => {
    switch (rank) {
      case 1:
        return "text-yellow-400";
      case 2:
        return "text-gray-300";
      case 3:
        return "text-amber-600";
      default:
        return "text-blue-400";
    }
  };

  return (
    <div className="bg-[#0F1933] text-white mb-40">
      <h1 className="text-2xl font-bold text-center mb-6">Leaderboard</h1>
      {/* Tabs */}
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-center items-center mb-8 bg-[#152A5B] w-2/4 rounded-full">
          <button
            onClick={() => setActiveTab("weekly")}
            className={`px-5 py-2 rounded-full text-sm transition-colors ${
              activeTab === "weekly"
                ? "border border-[#01A1FA] bg-[#0F1933] shadow-lg"
                : ""
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setActiveTab("allTime")}
            className={`px-5 py-2 rounded-full text-sm transition-colors ${
              activeTab === "allTime"
                ? "border border-[#01A1FA] bg-[#0F1933] shadow-lg"
                : ""
            }`}
          >
            All Time
          </button>
        </div>
      </div>

      {/* Level Selector */}
      <div className="flex items-center justify-between mb-44 mx-6">
        <button
          onClick={handlePrevLevel}
          className="p-3 rounded-full bg-[#152A5B80] transition-colors"
          disabled={level === 1}
        >
          <img
            src="../../public/right-arrow.svg"
            alt="Previous"
            className="w-4 h-4 rotate-180"
          />
        </button>
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
          <span className="text-xl font-bold">
            Lev {level.toString().padStart(2, "0")}
          </span>
        </div>
        <button
          onClick={handleNextLevel}
          className="p-3 rounded-full bg-[#152A5B80] transition-colors"
          disabled={level === 2}
        >
          <img
            src="../../public/right-arrow.svg"
            alt="Next"
            className="w-4 h-4"
          />
        </button>
      </div>
      {/* Podium */}
      <div className="relative">
        <div className="relative">
          {/* Second Place */}
          <div className="absolute left-1/4 transform -translate-x-1/2 -bottom-2 flex flex-col items-center">
            <img
              src={players[1]?.avatar}
              alt={players[1]?.name}
              className="w-16 h-16 rounded-full mb-2 shadow-lg"
            />
            <div className="absolute">
              <img
                src="../../public/leaderboard-profile-bg.svg"
                alt="Leaderboard podium"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -top-6 -right-5">
              <img
                src="../../public/rank-badge-two.svg"
                alt="Leaderboard podium"
                className="w-10 h-10"
              />
            </div>
            <p className="text-sm mb-2">{players[1]?.name}</p>
            <div className="flex items-center gap-1 bg-[#112146] px-3 py-2 rounded-full -mb-5">
              <img
                src="../../public/shop-love.svg"
                alt="Trophy"
                className={`w-4 h-4 ${getMedalColor(2)}`}
              />
              <span className="text-sm">
                {players[1]?.points.toLocaleString()}
              </span>
            </div>
          </div>

          {/* First Place */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 flex flex-col items-center">
            <img
              src={players[0]?.avatar}
              alt={players[0]?.name}
              className="w-16 h-16 rounded-full mb-2 shadow-lg"
            />
            <div className="absolute">
              <img
                src="../../public/leaderboard-profile-bg.svg"
                alt="Leaderboard podium"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -top-6 -right-5">
              <img
                src="../../public/rank-badge-one.svg"
                alt="Leaderboard podium"
                className="w-12 h-12"
              />
            </div>
            <p className="text-sm mb-2">{players[0]?.name}</p>
            <div className="flex items-center gap-1 bg-[#112146] px-3 py-2 rounded-full">
              <img
                src="../../public/shop-love.svg"
                alt="Trophy"
                className={`w-4 h-4 ${getMedalColor(1)}`}
              />
              <span className="text-sm">
                {players[0]?.points.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Third Place */}
          <div className="absolute right-1/4 transform translate-x-1/2 -bottom-4 flex flex-col items-center">
            <img
              src={players[2]?.avatar}
              alt={players[2]?.name}
              className="w-16 h-16 rounded-full mb-2 shadow-lg"
            />
            <div className="absolute">
              <img
                src="../../public/leaderboard-profile-bg.svg"
                alt="Leaderboard podium"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -top-6 -right-5">
              <img
                src="../../public/rank-badge-three.svg"
                alt="Leaderboard podium"
                className="w-12 h-12"
              />
            </div>
            <p className="text-sm mb-2">{players[2]?.name}</p>
            <div className="flex items-center gap-1 bg-[#112146] px-3 py-2 rounded-full -mb-10 ml-3">
              <img
                src="../../public/shop-love.svg"
                alt="Trophy"
                className={`w-4 h-4 ${getMedalColor(3)}`}
              />
              <span className="text-sm">
                {players[2]?.points.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Leaderboard Podium  */}

        <div className="w-full relative">
          <div className="relative flex items-center justify-evenly">
            <div className="absolute top-12">
              <img
                src="../../public/one.svg"
                alt="Leaderboard podium"
                className="w-4"
              />
            </div>
            <div className="absolute top-16 left-20">
              <img
                src="../../public/two.svg"
                alt="Leaderboard podium"
                className="w-full h-10 "
              />
            </div>
            <div className="absolute top-[85px] right-20">
              <img
                src="../../public/three.svg"
                alt="Leaderboard podium"
                className="w-full h-9"
              />
            </div>
          </div>
          <div>
            <img
              src="../../public/leaderboard-bg.svg"
              alt="Leaderboard podium"
              className="w-full"
            />
          </div>
        </div>
        {/* Leaderboard List */}
        <LeaderboardList
          players={players.slice(3)}
          getMedalColor={getMedalColor}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
