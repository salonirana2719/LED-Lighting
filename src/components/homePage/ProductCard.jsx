import React from "react";

const ProductCard = ({ image, name, price, originalPrice, discount }) => {
  return (
    <div className="border rounded-lg w-[250px] h-full shadow-md p-1 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-[191px] h-[236px] object-contain mb-4"
      />
      <h3 className="text-sm  font-medium max-w-52 text-start mb-2">{name}</h3>

      <div className="flex flex-row items-center justify-start  w-52 text-left gap-1">
        <div className="text-lg font-bold text-purple-600">₹{price}</div>
        <div className="text-sm text-gray-500 line-through">
          ₹{originalPrice}
        </div>
        <div className="text-sm text-green-500">{discount} OFF</div>
      </div>

      <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white px-4 w-52 mt-6 py-2 rounded-lg text-sm">
        Buy Now →
      </button>
    </div>
  );
};

export default ProductCard;
