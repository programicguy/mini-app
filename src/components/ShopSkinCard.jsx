import React from "react";

const ShopSkinCard = ({ itemImage, name, promo, status, currentProductCount, totalProductsCount }) => {
  return (
    <div className="flex items-center flex-col bg-[#152A5B] px-2 py-3 rounded-xl">
      {/* Card Image Section */}
      <div className="relative w-full border-2 border-[#0784BE] max-w-40 h-28 bg-gradient-to-b from-[#062E73] to-[#0E48AB] rounded-2xl flex items-center justify-center">
        {/* Item Image */}
        <div className="relative">
          <img src={itemImage} alt={name} className="w-20 h-20" />
        </div>

        {/* Promo Badge */}
        {promo && (
          <div className="absolute bottom-2 bg-[#1A82F280] rounded-full backdrop-blur-lg">
            <div className="inline-flex items-center text-white px-3 py-1 rounded text-xs">
              {promo}
            </div>
          </div>
        )}

        {/* Product counts  */}
        <div className="absolute -top-3 -right-1 bg-[#1E2C68]/80 text-[10px] px-3 py-2 rounded-full">
          <span>{currentProductCount}/</span>
          <span>{totalProductsCount}</span>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="flex flex-col justify-center items-center mt-3 w-full">
        <h3 className="text-sm text-white">{name}</h3>
        <div className="flex justify-start mt-4 w-full">
          <button className="bg-gradient-to-b from-[#00A9FF] to-[#004EC6] w-full px-6 py-2 rounded-lg text-sm font-semibold select-none text-white">
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  // The array of card data
  const cardData = [
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/thermometer.svg",
      promo: "18k - Hourly",
      name: "Thermometer",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/gloves.svg",
      promo: "25k - Hourly",
      name: "Gloves",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/cap.svg",
      promo: "30k - Hourly",
      name: "Cap",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/dress.svg",
      promo: "45k - Hourly",
      name: "Dress",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/box-2.svg",
      promo: "60k - Hourly",
      name: "Box",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/sanitizar.svg",
      promo: "90k - Hourly",
      name: "Sanitizer",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/stethoscope.svg",
      promo: "120k - Hourly",
      name: "Stethoscope",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/cap.svg",
      promo: "150k - Hourly",
      name: "Cap",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/syringe.svg",
      promo: "200k - Hourly",
      name: "Syringe",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/shop-skins-bg.svg",
      itemImage: "../../public/goggles.svg",
      promo: "500k - Hourly",
      name: "Goggles",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8 w-full">
      {/* Dynamically rendering ShopSkinCard components */}
      {cardData.map((card, index) => (
        <ShopSkinCard
          key={index}
          bgImage={card.bgImage}
          itemImage={card.itemImage}
          promo={card.promo}
          name={card.name}
          status={card.status}
          currentProductCount={card.currentProductCount}
          totalProductsCount={card.totalProductsCount}
        />
      ))}
    </div>
  );
};

export default Shop;
