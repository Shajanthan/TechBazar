import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaCaretDown, FaCaretUp, FaRegCircleUser } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  const user = false;
  //   const [cartCount, setCartCount] = useState(3);
  const cartCount = 3;

  const navigate = useNavigate();

  const handleLoginClickClick = () => {
    navigate("/Login");
  };

  const handleCartClick = () => {
    navigate("/Cart");
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Contact Us", path: "/Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={` fixed top-0 w-full   z-50  `}>
        <div
          className={`flex justify-between items-center text-white ${
            isMenuOpen
              ? "bg-black"
              : isScrolled
              ? "bg-black transition-all duration-500"
              : "bg-transparent"
            // " bg-black"
          } `}
        >
          <div className="p-4 font-bold text-xl cursor-pointer">
            Tech<span className="text-red-500">Bazar</span>
          </div>

          <ul className="hidden md:flex list-none items-center gap-6 cursor-pointer ">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="relative group hover:text-red-500 font-bold"
              >
                <span
                  className="transition-all duration-500"
                  onClick={() => navigate(item.path, { replace: true })}
                >
                  {item.label}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}

            <li className="relative" onClick={handleCartClick}>
              <IoIosCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </li>

            {user ? (
              <>
                <li
                  className="flex items-center gap-3"
                  onClick={() => setUserOpen(!isUserOpen)}
                >
                  <FaRegCircleUser size={24} />
                  Username
                  {isUserOpen ? (
                    <FaCaretUp size={20} />
                  ) : (
                    <FaCaretDown size={20} />
                  )}
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
              </>
            ) : (
              <>
                <li className="relative group hover:text-red-500 font-bold">
                  <span
                    className=" transition-all duration-500"
                    onClick={handleLoginClickClick}
                  >
                    Login
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-500 group-hover:w-full"></span>
                </li>
              </>
            )}
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
              className={`absolute p-3 top-14 left-0 w-full bg-black text-white flex flex-col items-center transition-all duration-500 z-40 md:hidden`}
            >
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group text-lg p-2 w-full"
                >
                  <span
                    className="hover:text-red-500 transition-all duration-300"
                    onClick={() => {
                      navigate(item.path, { replace: true });
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}

              {/* Cart with badge in mobile */}
              <li
                className="p-2 w-full flex justify-between"
                onClick={() => {
                  navigate("/Cart");
                  setIsMenuOpen(false);
                }}
              >
                <span className="">Cart</span>
                {cartCount > 0 && (
                  <span className="bg-red-500 rounded-full text-center text-white text-xs px-2 flex items-center justify-center-full">
                    {cartCount}
                  </span>
                )}
              </li>
              {user ? (
                <>
                  <li className="p-2 w-full">Profile</li>
                  <li className="p-2 w-full">Logout</li>
                </>
              ) : (
                <>
                  <li
                    className=" border-gray-200 p-2 w-full"
                    onClick={handleLoginClickClick}
                  >
                    Login
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
        <div
          className={` text-black font-bold p-2 border border-gray-400 hidden justify-center  ${
            isScrolled
              ? "bg-white transition-all duration-500 md:flex"
              : "hidden"
            // " bg-black"
          } `}
        >
          <ul className="flex gap-6">
            <li
              className="cursor-pointer hover:text-red-500 transition-all duration-500"
              onClick={() => {
                const section = document.getElementById("mobile");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Mobile
            </li>
            <li
              className="cursor-pointer hover:text-red-500 transition-all duration-500"
              onClick={() => {
                const section = document.getElementById("earbuds");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Earbuds
            </li>
            <li
              className="cursor-pointer hover:text-red-500 transition-all duration-500"
              onClick={() => {
                const section = document.getElementById("smart watch");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Smartwatch
            </li>
            <li
              className="cursor-pointer hover:text-red-500 transition-all duration-500"
              onClick={() => {
                const section = document.getElementById("headphone");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Headphone
            </li>
            <li
              className="cursor-pointer hover:text-red-500 transition-all duration-500"
              onClick={() => {
                const section = document.getElementById("powerbank");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Powerbank
            </li>
            <li
              className="cursor-pointer hover:text-red-500 transition-all duration-500"
              onClick={() => {
                const section = document.getElementById("laptop");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Laptop
            </li>
          </ul>
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
