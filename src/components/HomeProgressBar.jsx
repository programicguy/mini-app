import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { ProgressBar } from "./ProgressBar";

export function HomeProgressBar() {
  return (
    <div className="mx-4 pt-5 flex items-center justify-between">
      {/* Left Side: Level Info */}
      <div className="flex items-center">
        <ButtonGroup
          iconSrc="level.svg"
          text="Lvl7/10"
          className="text-white bg-[#D9D9D940]"
        />
      </div>

      {/* Middle: Progress Bar */}
      <div className="flex-grow mx-4">
        <ProgressBar
          progress={70}
          currentLevel={7}
          gradientFrom="#01A6FDB2"
          gradientTo="#015ACEB2"
          width="full"
          height="8"
        />
      </div>

      {/* Right Side: Friends Button */}
      <div className="flex items-center">
        <ButtonGroup
          iconSrc="friend.svg"
          text="Friends"
          className="text-white"
          gradient
        />
      </div>
    </div>
  );
}
