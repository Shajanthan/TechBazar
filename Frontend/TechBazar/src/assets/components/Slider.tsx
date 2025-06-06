import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
// import { useEffect, useState } from "react";

const Slider = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  const slides = [
    {
      image: "/images/SamsungS25.jpg",
      title: "Samsung S25 Ultra",
      description: "Experience the next-gen performance and photography.",
    },
    {
      image: "/images/Iphone16.jpg",
      title: "iPhone 16 Pro",
      description: "Elegance meets power. Now available at TechBazar.",
    },
    {
      image: "/images/Pixel.jpg",
      title: "Pixel 8 Pro",
      description: "Google's smartest and sharpest phone ever.",
    },
    {
      image: "/images/Access.webp",
      title: "Top Mobile Accessories",
      description: "Cables, chargers, cases & more — all in one place.",
    },
  ];

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        swipeable={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl"
            >
              <MdNavigateBefore size={20} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl"
            >
              <MdNavigateNext size={20} />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const baseStyle = "inline-block w-3 h-3 mx-1 rounded-full";
          const selectedStyle = "bg-red-500";
          const unselectedStyle = "bg-gray-300";
          return (
            <li
              key={index}
              onClick={onClickHandler}
              className={`${baseStyle} ${
                isSelected ? selectedStyle : unselectedStyle
              } cursor-pointer`}
              title={label}
              aria-label={`Slide ${index + 1}`}
            />
          );
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[80vh] lg:h-[100vh] w-full select-none"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-center items-center px-6 text-white text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold "
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="text-lg mt-4 max-w-xl"
              >
                {slide.description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 hover:bg-red-500 border-2 rounded-md transition-all duration-300 text-white font-semibold"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
