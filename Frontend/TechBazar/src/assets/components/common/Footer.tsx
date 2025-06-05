import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="">
      <div className="w-ful bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white p-5 cursor-pointer">
        <div className="p-2 lg:m-auto">
          <div className="text-2xl font-bold py-3">
            Tech<span className="text-red-500">Bazar</span>
          </div>
          <div className="flex items-center gap-3 py-2 ">
            <ImLocation2 size={24} />
            No 171/Q, Main Street, Colombo - 06
          </div>
          <div className="flex items-center gap-3 py-2">
            <BsFillTelephoneFill size={24} />
            011 457 7895
          </div>
          <div className="flex items-center gap-3 py-2">
            <IoIosMail size={24} />
            techBazar@support.com
          </div>
        </div>
        <div className="p-2 lg:m-auto">
          <div className="text-2xl font-bold py-3">
            Quick<span className="text-red-500">Links</span>
          </div>
          <div className="list-none">
            <li className="py-1 flex gap-2 items-center hover:text-red-500 transition-colors duration-500">
              <FaLongArrowAltRight size={20} />
              Home
            </li>
            <li className="py-1 flex gap-2 items-center hover:text-red-500 transition-colors duration-500">
              <FaLongArrowAltRight size={20} />
              Products
            </li>
            <li className="py-1 flex gap-2 items-center hover:text-red-500 transition-colors duration-500">
              <FaLongArrowAltRight size={20} />
              Contact Us
            </li>
          </div>
        </div>
        <div className="p-2 lg:m-auto">
          <div className="text-2xl font-bold py-3">
            Most<span className="text-red-500">Viewed</span>
          </div>
          <div className="list-none">
            <li className="py-1 flex gap-2 items-center hover:text-red-500 transition-colors duration-500">
              <FaLongArrowAltRight size={20} />
              Mobile Phone
            </li>
            <li className="py-1 flex gap-2 items-center hover:text-red-500 transition-colors duration-500">
              <FaLongArrowAltRight size={20} />
              Mobile Accessories
            </li>
            <li className="py-1 flex gap-2 items-center hover:text-red-500 transition-colors duration-500">
              <FaLongArrowAltRight size={20} />
              Speakers
            </li>
          </div>
        </div>

        <div className="p-2 lg:mx-auto my-2">
          <div className="text-2xl font-bold py-3">
            Follow<span className="text-red-500">Us</span>
          </div>
          <div className="text-lg">
            <div className="py-1">
              <FaFacebook
                size={24}
                className="hover:text-red-500 transition-colors duration-500"
              />
            </div>
            <div className="py-1">
              <FaSquareXTwitter
                size={24}
                className="hover:text-red-500 transition-colors duration-500"
              />
            </div>
            <div className="py-1">
              <FaInstagramSquare
                size={24}
                className="hover:text-red-500 transition-colors duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-2 bg-black text-sm text-gray-300 w-full">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">
          Tech<span className="text-red-500">Bazar</span>
        </span>
        All rights reserved
      </div>
    </div>
  );
};

export default Footer;
