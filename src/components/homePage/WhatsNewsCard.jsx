import React from 'react'

const WhatsNewsCard = ({image, name, discount}) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    <div
        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain mb-4"
        />
        <h3 className="text-lg font-bold mb-2">{discount}</h3>
        {/* <p className="text-gray-600 mb-4">{products.name}</p> */}
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Buy Now
        </button>
      </div>
      
  </div>  )
}

export default WhatsNewsCard