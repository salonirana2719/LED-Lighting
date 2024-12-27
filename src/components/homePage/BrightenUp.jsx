import Image from 'next/image';

const BrightenUp = () => {
  return (
    <div
      className="h-md py-20 relative flex flex-col container mx-auto  lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-20 text-white"
      style={{
        backgroundImage: "url('/background.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section with Image */}
      <div className="flex-1 flex justify-center lg:justify-end ">
        <Image
          src="/blubs.svg" // Replace with your image path
          alt="Brighten up your space"
          width={600}
          height={900}
          className="  lg:w-[700px] xl:w-[500px] object-contain absolute -top-2  drop-shadow-lg"
        />
      </div>

      {/* Right Section with Content */}
      <div className="flex-1 lg:pl-20 text-start lg:text-left mt-60 lg:mt-0">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Brighten up <br></br> your space
        </h1>
        <p className="mt-4 max-w-96 text-gray-300 text-sm lg:text-base">
        Lorem Ipsum is simply dummy text of the  looking at its layout. The point of using Lorem Ipsum is that iprinting text heremany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised  passa
        </p>
        <button className="mt-6 bg-gradient-to-r from-[#674099] to-[#EB4F23] hover:bg-purple-700 text-white text-sm lg:text-base px-8 py-2 rounded-lg shadow-lg transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BrightenUp;
