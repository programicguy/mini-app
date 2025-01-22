import React from "react";
import ButtonLg from "../components/ButtonLg";

const Invite = () => {
  const handleCopy = () => {
    const referralLink = "https://t.me/botdrop1Idfdfd1?startapp=dgd...";
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  // Mock referrals data
  const referrals = [
    { id: 1, name: "AyanKhan", joinedDate: "09 Jan, 06:20" },
  ];

  return (
    <div className="bg-[#0F1933] flex flex-col items-center justify-center px-4 mb-32">
      <div className="w-full max-w-md">
        {/* Invite texts*/}
        <div className="my-10">
          <h1 className="text-white text-2xl text-center mb-2">Invite Friends!</h1>
          <p className="text-[#9A9EA0] text-center mb-6 text-sm">
            You and your friend will receive bonuses!
          </p>
        </div>
        <div className="border-b-2 border-[#142542] mb-6 w-80 mx-auto"></div>

        {/* Referral Section */}
        <p className="text-white mb-2">Referral link</p>
        <div className="bg-[#14224B] rounded-lg p-4 flex items-center mb-6">
          <input
            type="text"
            value="https://t.me/botdrop1Idfdfd1?startapp=dgd..."
            readOnly
            className="bg-transparent text-[#6076A9] text-sm flex-grow outline-none"
          />
          <button
            onClick={handleCopy}
            className="ml-2 bg-[#1D346A] p-3 rounded-lg"
          >
            <div className="relative">
              <img
                src="../../public/icons/copy-2.svg"
                alt="Copy Icon"
                className="w-5 h-3"
              />
              <img
                src="../../public/icons/copy-2.svg"
                alt="Copy Icon"
                className="w-4 h-3 absolute top-1 right-0"
              />
            </div>
          </button>
        </div>

        {/* Invite Button */}
        <div className="flex gap-4 mb-6 relative">
          <ButtonLg
            text="Invite Friend"
            className="w-full gradient-button rounded-lg"
            onClick={() => console.log("Invite Friends Button Clicked")}
          />
          <button className="bg-gray-800 border-[#014FC7] text-white py-2 px-4 rounded-lg flex items-center gap-2 relative">
            <div className="flex items-center justify-center">
              <span>Open</span>
              <img
                src="../../public/icons/right-arrow.svg"
                alt="Open Icon"
                className="w-4 h-4 ml-2"
              />
              <span className="w-5 h-5 flex items-center justify-center text-xs rounded-full bg-red-500 absolute -top-2 right-0">
                10
              </span>
            </div>
          </button>
        </div>

        {/* Referrals */}
        <div className="m-1">
          <h2 className="text-white text-base font-medium mb-4">Referrals</h2>
          <div className="bg-[#14224B] rounded-lg">
            <div className="text-white ml-4 pt-3">
              <span className="text-[#00B8FF] mr-1 font-semibold">
                {referrals.length}
              </span>
              <span>Friends invited</span>
            </div>
            {referrals.map((referral) => (
              <div key={referral.id} className="p-3 flex items-center">
                <div className="w-10 h-10 bg-black rounded-full mr-4"></div>
                <div>
                  <p className="text-white font-semibold">{referral.name}</p>
                  <p className="text-[#415380] text-sm">
                    Joined {referral.joinedDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
