import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20  items-center p-6 md:p-20 lg:p-14  bg-white">
        {/* Left Section - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/aboutImage.svg" // Replace with your image path
            alt="Woman using phone"
            className="rounded-lg w-full max-w-sm md:max-w-md lg:max-w-xl h-auto object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="text-center md:text-left  p-4 md:p-6 lg:p-8 ">
          <div className="mb-2 md:mb-4 ">
            <h3 className="mb-4 md:mb-6 flex md:justify-start justify-center">
              <img
                src="/logo.svg" // Replace with your image path
                alt="Woman using phone"
                className="w-[150px] h-[78px]"
              />{" "}
            </h3>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-purple-800">
              About the <br></br> Crystal Euro
            </h2>
          </div>
          <p className="text-gray-600 leading-normal mb-6 text-sm md:text-base lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing industry. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'. Many variations of passages of Lorem Ipsum are available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <button className="bg-gradient-to-r from-[#674099] to-[#EB4F23] hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300">
            Know More →
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
