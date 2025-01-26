import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";

// Lazily load pages for better performance
const HomePage = lazy(() => import("./pages/Home"));
const UpgradePage = lazy(() => import("./pages/Upgrade"));
const Airdrop = lazy(() => import("./pages/Airdrop"));
const Shop = lazy(() => import("./pages/Shop"));
const Earn = lazy(() => import("./pages/Earn"));
// const Invite = lazy(() => import("./pages/Invite"));
// const Leaderboard = lazy(() => import("./pages/Leaderboard"));
// const Box = lazy(() => import("./pages/Box"));
// const OpenBox = lazy(() => import("./pages/OpenBox"));
// const Withdraw = lazy(() => import("./pages/Withdraw"));

function App() {
  return (
    <Router>
      <div className="relative h-screen max-w-[500px] mx-auto bg-[#0F1933] text-white flex flex-col">
        {/* Fixed Header */}
        <Header />

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto">
          <Suspense
            fallback={<div className="text-center py-4">Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/upgrade" element={<UpgradePage />} />
              <Route path="/airdrop" element={<Airdrop />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/earn" element={<Earn />} />
              <Route
                path="*"
                element={
                  <div className="text-center py-4">404 - Page Not Found</div>
                }
              />
            </Routes>
          </Suspense>
        </div>

        {/* Fixed Bottom Navigation */}
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
