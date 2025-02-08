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
      icon: "goggles",
      progress: 20,
      isDisabled: false,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 5,
      coins: 500,
      level: 2,
      icon: "syringe",
      progress: 40,
      isDisabled: true,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 2,
      coins: 500,
      level: 1,
      icon: "cap",
      progress: 40,
      isDisabled: false,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 4,
      coins: 500,
      level: 3,
      icon: "thermometer",
      progress: 10,
      isDisabled: false,
    },
    {
      title: "Magic Book",
      earn: "Earn",
      percentage: 6,
      coins: 500,
      level: 4,
      icon: "box",
      progress: 30,
      isDisabled: false,
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
