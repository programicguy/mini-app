import React from "react";

const ShopSkinCard = ({ bgImage, itemImage, name, promo, status, currentProductCount, totalProductsCount }) => {
  return (
    <div className="flex items-center flex-col bg-[#152A5B] px-2 py-3 rounded-xl">
      {/* Card Image Section */}
      <div className="relative w-52 max-w-40 h-28 bg-gradient-to-br from-[#F3FFFE] via-[#574FFF] to-[#00FFF4] rounded-2xl flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <img
            src={bgImage}
            alt="Card Background"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Item Image */}
        <div className="relative">
          <img src={itemImage} alt={name} className="w-20 h-20" />
        </div>

        {/* Promo Badge */}
        {promo && (
          <div className="absolute bottom-2 bg-gray-800/30 rounded-full">
            <div className="inline-flex items-center text-white px-3 py-1 rounded text-xs">
              {promo}
            </div>
          </div>
        )}

        {/* Product counts  */}
        <div className="absolute -top-3 -right-1 bg-gray-800/80 text-[10px] px-3 py-2 rounded-full">
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
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/mask.svg",
      promo: "TON Earn +5%",
      name: "Thermometer",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/gloves.svg",
      promo: "TON Earn +5%",
      name: "Gloves",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/cap.svg",
      promo: "TON Earn +5%",
      name: "Cap",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/dress.svg",
      promo: "TON Earn +5%",
      name: "Dress",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/box.svg",
      promo: "TON Earn +5%",
      name: "Box",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/sanitizar.svg",
      promo: "TON Earn +5%",
      name: "Sanitizer",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/stethoscope.svg",
      promo: "TON Earn +5%",
      name: "Stethoscope",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/test-kit.svg",
      promo: "TON Earn +5%",
      name: "Cap",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/syringe.svg",
      promo: "TON Earn +5%",
      name: "Syringe",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
    {
      bgImage: "../../public/icons/shop-skins-bg.svg",
      itemImage: "../../public/icons/goggles.svg",
      promo: "TON Earn +5%",
      name: "Goggles",
      status: "BUY",
      currentProductCount: 0,
      totalProductsCount: 20,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
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
