import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const iconStyle = "text-black text-xl bg-white rounded-full p-2";

  return (
    <div className="container mx-auto" >
      <footer
      className="relative text-white py-2 bg-cover  bg-center bg-no-repeat"
    >
      {/* Background with blur and gradient */}
    
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.20)), url('https://t3.ftcdn.net/jpg/02/96/69/22/360_F_296692203_k4lOpOt8mAcYpKzicNmJTpnsE9ZdwyHX.jpg')`,
    backgroundSize: "cover", // Ensures the image covers the entire area
    backgroundPosition: "center", // Keeps the image centered
  }}
></div>



      {/* Content */}
      <div className="relative py-8">
        <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Logo and Description */}
          <div className="space-y-10 md:col-span-6 md:pl-20">
            <div className="text-center">
              <img
                src="/footer.svg"
                className="h-16 md:h-[100px] w-20 md:w-[200px]"
                alt="Flowbite Logo"
              />
            </div>
            <p className="text-sm leading-snug max-w-64">
              Lorem Ipsum is simply dummy text of the looking at its layout. The
              point of using Lorem Ipsum is that it printing text here.
            </p>
            <h4 className="font-semibold max-w-20">Follow US</h4>

            <div className="flex space-x-4">
              <a href="#" className={iconStyle}>
                <FaFacebookF />
              </a>
              <a href="#" className={iconStyle}>
                <FaInstagram />
              </a>
              <a href="#" className={iconStyle}>
                <FaTwitter />
              </a>
              <a href="#" className={iconStyle}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-xl text-[#EB4F23] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Support Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-[#EB4F23] mb-4">Useful Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Our Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-[#EB4F23] mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  Phone
                </a>
              </li>
              <li>
                <a href="#" className="text-md hover:text-orange-500">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="mx-auto h-[1px] bg-gray-600 w-5/6"></div>
          <p className="text-md text-gray-400 mt-8">
            @All Rights Lorem Ipsum Text.
          </p>
        </div>
      </div>
    </footer>
    </div>
    
  );
};

export default Footer;
