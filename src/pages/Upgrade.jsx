import React from "react";
import UpgradeCard from "../components/UpgradeCard";

const Upgrade = () => {
  const upgrades = [
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 3,
      coins: 500,
      level: 1,
      icon: "books",
      progress: 20,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 5,
      coins: 500,
      level: 2,
      icon: "upgrade-card-icon-2",
      progress: 40,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 2,
      coins: 500,
      level: 1,
      icon: "upgrade-card-icon-3",
      progress: 40,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 4,
      coins: 500,
      level: 3,
      icon: "upgrade-card-icon-4",
      progress: 80,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 6,
      coins: 500,
      level: 4,
      icon: "upgrade-card-icon-5",
      progress: 90,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 pb-28 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Upgrades</h2>
        {upgrades.map((upgrade, index) => (
          <UpgradeCard key={index} {...upgrade} />
        ))}
      </div>
    </div>
  );
};

export default Upgrade;
