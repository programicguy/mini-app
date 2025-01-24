import React, { useState } from "react";
import ButtonLg from "../components/ButtonLg";

function Withdraw() {
  const [tonAddress, setTonAddress] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const handleTonAddressChange = (event) => {
    setTonAddress(event.target.value);
  };

  const handleWithdrawalAmountChange = (event) => {
    setWithdrawalAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle withdrawal logic
    console.log("Withdrawing:", withdrawalAmount, "TON to", tonAddress);
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-white text-2xl font-normal mb-4">Withdraw</h2>
      </div>
      <div className="bg-[#14224B] p-4 rounded-2xl">
        <div className="flex justify-center items-center my-5">
          <ButtonLg
            text="Connect Wallet"
            className="w-52 h-12 gradient-button rounded-2xl mb-5 text-base font-normal"
            onClick={() => console.log("Connect wallet from widthraw clicked")}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="tonAddress" className="text-white">
              TON Address
            </label>
            <input
              type="text"
              id="tonAddress"
              value={tonAddress}
              onChange={handleTonAddressChange}
              className="w-full border bg-[#0F1933] border-[#01A3FB80] rounded-lg p-3 mt-2 focus:outline-none focus:border-[#01A3FB80] focus:border-2 text-[#4D83CCB2]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="withdrawalAmount" className="text-white">
              Available Balance: 0.05 TON
            </label>
            <div className="flex items-center relative">
              <input
                type="number"
                id="withdrawalAmount"
                value={withdrawalAmount}
                onChange={handleWithdrawalAmountChange}
                placeholder="Minimum 0.025 TON"
                min="0.025"
                className="w-full border bg-[#0F1933] border-[#01A3FB80] rounded-lg p-3 my-2 focus:outline-none focus:border-[#01A3FB80] mr-2 text-[#4D83CCB2] placeholder:text-[#4D83CCB2]] placeholder:text-sm"
              />
              <button
                type="button"
                className="bg-[#1A3272] text-[#FFD220] text-sm py-2 px-4 rounded-lg absolute right-4"
              >
                Max
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center my-5">
            <ButtonLg
              text="Widthraw"
              className="w-full h-12 gradient-button rounded-lg"
              onClick={() => console.log("Widthraw Button Clicked")}
            />
          </div>
        </form>
      </div>

      <div className="mt-8 bg-[#14224B] p-6 text-center rounded-lg">
        <h3 className="text-white text-xl font-mornal mb-2">
          Withdrawal History
        </h3>
        <p className="text-[#6F7585] text-sm mt-8">
          You don't have any transaction history yet.
        </p>
      </div>
    </div>
  );
}

export default Withdraw;
