import React from "react";

const LeaderboardList = ({ players, getMedalColor }) => {
  return (
    <div className="absolute top-40 left-0 w-full p-3">
      <div className="space-y-4 max-w-md mx-auto z-10 bg-[#132145] p-4 rounded-2xl">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex items-center gap-4 p-3 border-b border-[#26477F]"
          >
            <span className="text-lg font-bold w-8">{player.rank}</span>
            <img
              src={player.avatar}
              alt={player.name}
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
            />
            <div className="flex-1 w-full">
              <p className="font-medium">{player.name}</p>
              <div className="flex items-center gap-1">
                <img
                  src="/icons/shop-love.svg"
                  alt="Trophy"
                  className={`w-4 h-4 ${getMedalColor(player.rank)}`}
                />
                <span>{player.points.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardList;
