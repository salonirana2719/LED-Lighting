import React from "react";

const ProductCard = ({ image, name, price, originalPrice, discount }) => {
  return (
    <div className="border rounded-lg w-[250px] h-[400px] shadow-md p-2 flex flex-col items-center justify-between">
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="w-[191px] h-[236px] object-contain mb-2"
      />

      {/* Name Section */}
      <h3 className="text-sm font-medium max-w-52 text-left mb-2">{name}</h3>

      {/* Price Section */}
      <div className="flex flex-row items-center  justify-start w-52   gap-1 mb-2">
        <div className="text-lg font-bold text-purple-600">₹{price}</div>
        <div className="text-sm text-gray-500 line-through">
          ₹{originalPrice}
        </div>
        <div className="text-sm text-green-500">{discount} OFF</div>
      </div>

      {/* Button Section */}
      <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-4 w-full mt-auto mb-4 py-2 font-syne  rounded-lg text-sm">
        Buy Now →
      </button>
    </div>
  );
};

export default ProductCard;
