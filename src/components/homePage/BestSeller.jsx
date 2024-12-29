import React from "react";

const BestSeller = () => {
  const cards = [
    {
      title: "Big Sale",
      discount: "50% Off",
      imgSrc: "/lamp4.png",
      bgColor: "bg-blue-100",
    },
    {
      title: "Lamp Accessories",
      imgSrc: "/lamp4.png",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Discount",
      discount: "70% Off",
      imgSrc: "/lamp4.png",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <div className="px-4 md:py-20 py-8  container mx-auto  md:px-16">
      <h2 className="text-center text-xl mb-8 md:mb-20 font-bold text-purple-600 md:text-3xl">
        Best Seller Offer
      </h2>
      <div className="mt-8 flex flex-wrap  justify-center gap-8 md:gap-32">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full h-60 max-w-[320px] relative  rounded-xl shadow-md p-6 ${card.bgColor}`}
          >
            <div className="flex">
              <div>
                <p className="text-sm  font-semibold text-gray-500">
                  New Arrivals
                </p>
                <h3 className="mt-2 text-2xl max-w-24 font-bold text-gray-800">
                  {card.title} {card.discount && <span>{card.discount}</span>}
                </h3>
              </div>

              <div className=" mt-6">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-28 rounded-md right-6  absolute top-0 object-contain"
                />
                <div className="absolute bottom-20 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                  <span className="text-lg font-bold text-gray-800">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
