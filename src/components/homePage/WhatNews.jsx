import Image from 'next/image';
import React from 'react';

const ProductCardTwo = ({ product }) => {
  return (
    <div
      className={`p-6 md:p-8  h-full rounded-lg shadow-md ${product.bgColor} flex flex-col md:flex-row items-center justify-between`}
    >
      <div className="text-center md:text-left">
        <p className="text-lg md:text-xl font-bold text-purple-600">{product.discount}</p>
        <h3 className="text-gray-700 font-semibold my-2 text-sm md:text-base">{product.title}</h3>
        <p className="text-xs md:text-sm text-gray-500 mb-4">{product.description}</p>
        <button className="text-white bg-orange-500 px-3 py-2 rounded hover:bg-orange-600 transition text-sm md:text-base">
          Buy Now →
        </button>
      </div>
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={240}
        height={240}
        className="w-40 h-40 md:w-60 md:h-60 object-contain mb-4"
      />
    </div>
  );
};

const ProductCardOne = ({ product }) => {
  return (
    <div
      className={`p-4 md:py-4  w-[260px] h-full rounded-lg shadow-sm ${product.bgColor} flex flex-col items-center text-center`}
    >
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={80}
        height={120}
        className="w-[165px] h-[239] object-contain mb-1"
      />
      <p className="text-lg md:text-lg  text-purple-600">{product.discount}</p>
      <h3 className="text-gray-700  my-1 text-sm md:text-base">{product.title}</h3>
      <p className="text-xs md:text-sm text-gray-500 mb-1">{product.description}</p>
      <button className="text-white bg-orange-500 px-3 py-2 rounded hover:bg-orange-600 transition text-sm md:text-base">
        Buy Now →
      </button>
    </div>
  );
};

function Products() {
  const products = [
    {
      discount: "35% OFF",
      title: "ECO B22 Bayonet LED",
      description: "",
      imageUrl: "/image-2.svg",
      bgColor: "bg-pink-50",
    },
    {
      discount: "35% OFF",
      title: "E27 Golf LED Filament Bulb",
      description: "",
      imageUrl: "/image-5.svg",
      bgColor: "bg-blue-50",
    },
    {
      discount: "67% OFF",
      title: "SRL 12 W Standard B22 LED",
      description: "Bulb with Free 4 AA Battery (White, Pack of 4)",
      imageUrl: "/image-7.svg",
      bgColor: "#F6F6F6",
    //   background: #F6F6F6;

    },
    {
      discount: "80% OFF",
      title: "SRL 12 W Standard B22 LED",
      description: "Bulb with Free 4 AA Battery (White, Pack of 4)",
      imageUrl: "/image-1.svg",
      bgColor: "bg-green-50",
    },
    {
      discount: "14% OFF",
      title: "ECO B22 Bayonet LED",
      description: "",
      imageUrl: "/image-8.svg",
      bgColor: "bg-yellow-50",
    },
    {
      discount: "72% OFF",
      title: "E27 Golf LED Filament Bulb",
      description: "",
      imageUrl: "/image-5.svg",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className=" bg-white  container mx-auto  md:px-28">
      <h1 className="text-center text-2xl md:text-3xl font-syne font-bold text-[#674099] mb-8">
        --- What's New ---
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 justify-items-center gap-y-8">
        <div className="md:col-span-3">
          <ProductCardOne product={products[0]} />
        </div>
        <div className="md:col-span-3">
          <ProductCardOne product={products[1]} />
        </div>
        <div className="md:col-span-6">
          <ProductCardTwo product={products[2]} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 justify-items-center gap-y-8">
        <div className="md:col-span-6">
          <ProductCardTwo product={products[3]} />
        </div>
        <div className="md:col-span-3">
          <ProductCardOne product={products[4]} />
        </div>
        <div className="md:col-span-3">
          <ProductCardOne product={products[5]} />
        </div>
      </div>
    </div>
  );
}

export default Products;
