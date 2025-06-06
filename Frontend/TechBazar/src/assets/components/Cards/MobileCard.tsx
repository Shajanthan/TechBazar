import { useState } from "react";
import { IoIosCart, IoMdHeartEmpty } from "react-icons/io";
import { IoHeart, IoStarOutline, IoStarSharp } from "react-icons/io5";

interface Mobile {
  name: string;
  image: string;
  price: string;
  rating: number;
  warrenty: boolean;
}

type MobileCardProps = {
  mobile: Mobile;
};

const MobileCard: React.FC<MobileCardProps> = ({ mobile }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="border border-gray-300 rounded-md p-3 hover:scale-105 duration-300 relative select-none flex flex-col h-full">
      {mobile.warrenty && (
        <>
          <div className="absolute top-1 left-1 md:top-2 md:left-2 -rotate-30">
            <img src="/images/Warrenty.png" className="h-[40px] lg:h-[60px]" />
          </div>
        </>
      )}
      <div
        className="absolute top-1 right-1 md:top-2 md:right-2 cursor-pointer"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <IoHeart
            size={24}
            color="red"
            className="transition-colors duration-300"
          />
        ) : (
          <IoMdHeartEmpty
            size={24}
            color="black"
            className="transition-colors duration-300"
          />
        )}
      </div>
      <div className="flex justify-center items-center">
        <img
          src={mobile.image}
          alt={mobile.name}
          className="h-[100px] md:h-[150px] mb-2 object-contain"
        />
      </div>
      <div className="text-center font-bold md:text-xl break-words mb-2">
        {mobile.name}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="">
              {index < mobile.rating ? (
                <IoStarSharp className="text-yellow-500" size={15} />
              ) : (
                <IoStarOutline className="text-gray-400" size={15} />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-400">{mobile.rating}/5</div>
      </div>
      <div className="flex flex-col justify-end flex-grow">
        <div className="p-2 flex items-center justify-between">
          <div>
            <div className="text-gray-400 text-xs md:text-sm line-through decoration-red-500 decoration-2">
              $1299
            </div>
            <div className="font-semibold text-lg md:text-xl">
              ${mobile.price}
            </div>
          </div>
          <button className="bg-black p-1 md:p-2 rounded-md text-white">
            <IoIosCart size={22} />
          </button>
        </div>
        <button className="w-full text-sm md:text-lg text-white bg-red-500 p-2 rounded-md mt-2">
          More Info
        </button>
      </div>
    </div>
  );
};
export default MobileCard;
