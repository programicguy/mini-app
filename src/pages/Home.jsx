import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { HeroIcons } from "../components/HeroIcons";
import { ActionButton } from "../components/ActionButton";

const HomePage = () => {
  return (
    <div>
      <ProgressBar />
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
