import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import UpgradePage from "./pages/Upgrade";
import HomePage from "./pages/Home";
import Airdrop from "./pages/Airdrop";
import Shop from "./pages/Shop";
import Earn from "./pages/Earn";
// import Invite from "./pages/Invite";
// import Leaderboard from "./pages/Leaderboard";
import Box from "./pages/Box";
import OpenBox from "./pages/OpenBox";
import Withdraw from "./pages/Widthdraw";

function App() {
  return (
    <Router>
      <div className="relative h-screen max-w-[500px] mx-auto bg-[#0F1933] text-white flex flex-col ">
        {/* Fixed Header */}
        <Header />

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upgrade" element={<UpgradePage />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/earn" element={<Withdraw />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </div>

        {/* Fixed Bottom Navigation */}
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
