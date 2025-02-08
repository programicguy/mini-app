import React from "react";
import BuyCard from "../components/BuyCard";
import ShopSkinCard from "../components/ShopSkinCard";

const Shop = () => {
  // Data for the BuyCards
  const buyCardData = [
    {
      bgImage: " shop-card-bg.svg",
      itemImage: "shop-love.svg",
      promo: "",
      promoTwo: "",
      name: "50k",
      status: "Buy",
      iconSrc: " shop-love.svg",
    },
    {
      bgImage: " shop-card-bg.svg",
      itemImage: "shop-group-love.svg",
      promo: "-20%",
      name: "100k",
      status: "Buy",
      iconSrc: " shop-love.svg",
    },
    {
      bgImage: "shop-card-bg.svg",
      itemImage: "shop-love-bag.svg",
      promo: "Gamers choice",
      promoTwo: "-30%",
      name: "500k",
      status: "Buy",
      iconSrc: "shop-love.svg",
    },
    {
      bgImage: " shop-card-bg.svg",
      itemImage: "shop-group-loves.svg",
      promo: "Most profit",
      promoTwo: "-40%",
      name: "1m",
      status: "Buy",
      iconSrc: " shop-love.svg",
    },
  ];

  return (
    <div className="bg-[#0F1933] text-white min-h-screen p-4 mb-28">
      <h2 className="text-xl font-bold mb-4">Buy $HART</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Dynamically rendering BuyCard components */}
        {buyCardData.map((card, index) => (
          <BuyCard
            key={index}
            bgImage={card.bgImage}
            itemImage={card.itemImage}
            promo={card.promo}
            promoTwo={card.promoTwo}
            name={card.name}
            status={card.status}
            iconSrc={card.iconSrc}
          />
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Skins</h2>
      <div className="flex flex-wrap gap-4">
        <ShopSkinCard />
      </div>
    </div>
  );
};

export default Shop;
