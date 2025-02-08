import React from "react";
import { HomeProgressBar } from "../components/HomeProgressBar";
import { HeroIcons } from "../components/HeroIcons";
import { ActionButton } from "../components/ActionButton";

const HomePage = () => {
  return (
    <div className="relative min-h-full bg-[url('/home-bg.svg')] bg-cover bg-center bg-no-repeat">
      <HomeProgressBar />
      <div className="mt-8">
        <HeroIcons />
      </div>
      <div className="absolute bottom-32 w-full">
        <ActionButton />
      </div>
    </div>
  );
};

export default HomePage;
