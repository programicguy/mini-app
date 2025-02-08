import React from "react";
import IconButton from "./IconButton";

export function HeroIcons() {
  const icons = [
    {
      src: "/trophy.svg",
      alt: "Trophy",
      onClick: () =>console.log("Trophy Clicked"),
    },
    { src: "/play.svg", alt: "Play", onClick: () =>console.log("Play Clicked") },
    { src: "/share.svg", alt: "Share", onClick: () =>console.log("Share Clicked") },
    { src: "/bx-home.svg", alt: "Home", onClick: () =>console.log("Home Clicked") },
  ];

  return (
    <div className="flex justify-between">
      <div className="flex mx-2 flex-col gap-2">
        {icons.slice(0, 2).map((icon, index) => (
          <IconButton
            key={index}
            iconSrc={icon.src}
            altText={icon.alt}
            onClick={icon.onClick}
            iconClass="w-6 h-6"
          />
        ))}
      </div>
      <div className="flex mx-2 flex-col gap-2">
        {icons.slice(2).map((icon, index) => (
          <IconButton
            key={index}
            iconSrc={icon.src}
            altText={icon.alt}
            onClick={icon.onClick}
            iconClass="w-6 h-6"
          />
        ))}
      </div>
    </div>
  );
}
