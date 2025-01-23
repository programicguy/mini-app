import React from "react";
import ButtonLg from "../components/ButtonLg";

const OpenBox = () => {
    return (
      <div className="min-h-screen flex items-center flex-col justify-center text-white">
        <div className="relative">
          <div>
            <img
              src="../../public/icons/shop-card-bg.svg"
              alt="Diamond"
              className="w-64 h-64 object-cover animate-scale-rotate"
            />
          </div>
          <div className="absolute -top-10">
            <img
              src="../../public/icons/open-box.svg"
              alt="Diamond"
              className="w-56 h-56"
            />
          </div>
        </div>
        <div>
          <ButtonLg
            text="Claim 0.002 TON"
            className="w-44 h-16 bg-gradient-to-b from-[#9FE3FF] to-[#308DD4] rounded-2xl text-semibold"
            onClick={() => console.log("Box open Button Clicked")}
          />
        </div>
      </div>
    );

}

export default OpenBox;