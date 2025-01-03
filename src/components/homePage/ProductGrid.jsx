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
  {
    image: "/image2.svg",
    name: "Wireless Bluetooth Earbuds with Charging Case",
    price: 1299,
    originalPrice: 2999,
    discount: "57%",
  },
  {
    image: "/image3.svg",
    name: "Stainless Steel Water Bottle - 1L",
    price: 499,
    originalPrice: 799,
    discount: "38%",
  },
  {
    image: "/image4.svg",
    name: "Portable Mini Fan with USB Charging",
    price: 199,
    originalPrice: 399,
    discount: "50%",
  },
  {
    image: "/image5.svg",
    name: "Smart Fitness Band with Heart Rate Monitor",
    price: 1599,
    originalPrice: 2499,
    discount: "36%",
  },
  {
    image: "/image6.svg",
    name: "Adjustable Desk Lamp with LED Light",
    price: 899,
    originalPrice: 1499,
    discount: "40%",
  },
  {
    image: "/image7.png",
    name: "Noise Cancelling Over-Ear Headphones",
    price: 2199,
    originalPrice: 4999,
    discount: "56%",
  },
  {
    image: "/image8.svg",
    name: "Ergonomic Office Chair with Lumbar Support",
    price: 4999,
    originalPrice: 9999,
    discount: "50%",
  },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto mb-4 sm:px-6 lg:px-32 py-10 ">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14">Latest Collection</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
