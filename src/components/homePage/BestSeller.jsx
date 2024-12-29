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
      imgSrc: "/lamp2.png",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Discount",
      discount: "70% Off",
      imgSrc: "/lamp1.png",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <div className="px-4 py-8 md:px-16">
      <h2 className="text-center text-xl font-bold text-purple-600 md:text-2xl">
        Best Seller Offer
      </h2>
      <div className="mt-8 flex flex-wrap relative justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full max-w-[320px]  rounded-lg p-6 shadow-lg ${card.bgColor}`}
          >
            <div className="flex">
              <div>
                <p className="text-sm  font-semibold text-gray-500">
                  New Arrivals
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-800">
                  {card.title} {card.discount && <span>{card.discount}</span>}
                </h3>
              </div>

              <div className="relative mt-6">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-28 rounded-md  object-contain"
                />
                <div className="absolute bottom-2 right-60 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
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
