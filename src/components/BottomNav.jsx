import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ label, icon, to }) => (
  <Link to={to}>
    <button className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center">
        <img src={`/public/${icon}.svg`} alt={label} className="w-10 h-8" />
      </div>
      <span className="text-xs mt-1">{label}</span>
    </button>
  </Link>
);

export function BottomNav() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[470px]">
      <div className="glass-effect rounded-[25px] py-3 px-6 shadow-lg shadow-[#0B132B]/50">
        <div className="flex justify-between items-center select-none">
          <NavButton label="Mine" icon="mine" to="/" />
          <NavButton label="Earn" icon="coin" to="/earn" />
          <NavButton label="Upgrade" icon="Gradient" to="/upgrade" />
          <NavButton label="Shop" icon="bag-happy" to="/shop" />
          <NavButton label="Airdrop" icon="airdrop" to="/airdrop" />
        </div>
      </div>
    </div>
  );
}

