const BuyCard = ({
  bgImage,
  itemImage,
  promo,
  promoTwo,
  name,
  status,
  iconSrc,
}) => (
  <div className="flex items-center flex-col bg-[#152A5B] p-3 rounded-xl relative overflow-hidden">
    {/* Card Image Section */}
    <div className="relative w-28 h-28 rounded-2xl">
      {/* Background Image with Animation */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-2xl animate-scale-rotate"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={itemImage} alt={name} className="w-16 h-16" />
      </div>

      {/* Promo 1 */}
      {promo && promo !== "" && (
        <div className="absolute -top-2 -right-6 bg-[#1853AB] rounded-full">
          <div className="inline-flex items-center text-white px-2 py-1 rounded text-[10px]">
            {promo}
          </div>
        </div>
      )}

      {/* Promo 2 */}
      {promoTwo && promoTwo !== "" && (
        <div className="absolute top-5 -right-6 bg-[#7F00D5] rounded-full">
          <div className="inline-flex items-center text-white px-2 py-1 rounded text-[10px]">
            {promoTwo}
          </div>
        </div>
      )}
    </div>

    {/* Card Content Section */}
    <div className="flex flex-col justify-center items-center mt-3 w-full">
      <div className="flex items-center space-x-1">
        {/* Icon before Name */}
        {iconSrc && (
          <img
            src={iconSrc} 
            alt="Icon"
            className="w-5 h-5"
          />
        )}
        <h3 className="text-sm font-semibold text-white">{name}</h3>
      </div>
      <div className="flex justify-start mt-2 w-full">
        <button className="bg-gradient-to-b from-[#00A9FF] to-[#004EC6] w-full px-6 py-2 rounded-lg text-sm font-semibold select-none text-white">
          {status}
        </button>
      </div>
    </div>
  </div>
);

export default BuyCard;
