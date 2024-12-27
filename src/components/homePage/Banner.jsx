"use client";
import Image from "next/image";
import React, { useState } from "react";

const Banner = () => {
  const [selectedColor, setSelectedColor] = useState("Sunset");
 const [bgClass ,setBgClass] = useState("sunset")

  const colorOptions = [
    {
      name: "Sunset",
      color: " #FFA11499",
      bulbImage: "/sunset.svg",
      bgColor: "sunset"
    },
    {
      name: "Night",
      color: "#0028FD99",
      bulbImage: "/night.svg",
      bgColor: "night"

    },
    {
      name: "Romentic",
      color: "#F800FD99",
      bulbImage: "/romentic.svg",
      bgColor: "romentic"

    },
    {
      name: "Reading",
      color: "#FFF2DFCC",
      bulbImage: "/reading.svg",
      bgColor: "reading"

    },
  ];

  const currentColor = colorOptions.find(
    (item) => item.name === selectedColor
  );

  const handleDotClick = (colorName ,bgColor ) => {
    setSelectedColor(colorName );
    setBgClass(bgColor)
    
   
  };

  return (
    <div
      className="relative bg-purple-900 text-white px-5 py-2 md:py-14 container mx-auto"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683133958062-12afa652a4fb?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
     
        <div className={`${bgClass}`}></div>
 
      {/* Main Grid Section */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
        {/* Left Section: Text and Button */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Bring color to your home
          </h1>
          <p className="text-lg">
            with CRYSTAL EURO Smart Bulb Essential (Color and White)
          </p>
          <button className="bg-gradient-to-r from-[#674099] to-[#EB4F23] text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition">
            Buy Now →
          </button>
        </div>

        <div className="relative">
          {/* Bulb Image */}
          <Image
            src={currentColor.bulbImage}
            alt={`${selectedColor} Smart Bulb`}
            width={385}
            height={683}
            className="mx-auto "
          />

          {/* Color Options */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
            {colorOptions.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-1 cursor-pointer"
                onClick={() => handleDotClick(item.name, item.bgColor)}
              >
                {/* Dot */}
                <span className="text-sm text-white">{item.name}</span>

                {/* Label */}
                <div
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === item.name
                      ? "border-yellow-300"
                      : "border-white"
                  }`}
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row Section */}
      {/* <div className="relative z-20 mt-1 flex md:gap-60 text-white py-2 px-2 rounded-lg max-w-5xl ml-24 text-center">
        <p className="text-start font-semibold text-2xl">
          16 million <br /> colors
        </p>
        <p className="text-start font-semibold text-2xl">
          2700K-5000K <br /> color temperature
        </p>
        <p className="text-2xl font-semibold text-start">
          15 scenarios <br /> preset
        </p>
      </div> */}
    </div>
  );
};

export default Banner;
