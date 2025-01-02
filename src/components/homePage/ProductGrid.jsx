import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/image1.svg",
    name: "ECO B22 Bayonet LED Light Bulb 40W Eqv - Warm White",
    
    price: 299,
    originalPrice: 1117,
    discount: "73%",
  },
  // Add more product objects...
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Collection</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="text-sm font-medium text-gray-700">Features Products</button>
        <button className="text-sm font-medium text-purple-600 border-b-2 border-purple-600">New Products</button>
        <button className="text-sm font-medium text-gray-700">Best Sellers</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
