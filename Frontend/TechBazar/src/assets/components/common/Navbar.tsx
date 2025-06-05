import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaCaretDown, FaCaretUp, FaRegCircleUser } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  //   const [cartCount, setCartCount] = useState(3);
  const cartCount = 3;

  const menuItems = ["Home", "Products", "Contact Us"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`p-4 fixed top-0 w-full transition-colors duration-500 flex justify-between items-center z-50 ${
        isScrolled ? "bg-black text-white" : "bg-transparent text-black"
      }`}
    >
      <div className="font-bold text-xl cursor-pointer">
        Tech<span className="text-red-500">Bazar</span>
      </div>

      <ul className="hidden md:flex list-none items-center gap-6 cursor-pointer ">
        {menuItems.map((item) => (
          <li
            key={item}
            className="relative group hover:text-red-500 font-bold"
          >
            <span className=" transition-all duration-500">{item}</span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-500 group-hover:w-full"></span>
          </li>
        ))}
        <li className="relative">
          <IoIosCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </li>

        <li
          className="flex items-center gap-3"
          onClick={() => setUserOpen(!isUserOpen)}
        >
          <FaRegCircleUser size={24} />
          Username
          {isUserOpen ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
          {isUserOpen && (
            <div className="absolute right-0 top-13 w-40 bg-white text-black shadow-md rounded-md py-2 z-50">
              <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Profile
              </div>
              <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Logout
              </div>
            </div>
          )}
        </li>
      </ul>

      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoCloseOutline size={24} />
        ) : (
          <BiMenuAltRight size={24} />
        )}
      </div>

      {isMenuOpen && (
        <ul
          className={`absolute top-14 left-0 w-full bg-black text-white flex flex-col items-center gap-3 py-2 transition-all duration-500 z-40 md:hidden`}
        >
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative group text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="hover:text-red-500 transition-all duration-300">
                {item}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* Cart with badge in mobile */}
          <li className="relative">
            <IoIosCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
