import { useState } from "react";
import { IoIosCart, IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

interface Mobile {
  name: string;
  image: string;
  price: string;
  rating: number;
}

type MobileCardProps = {
  mobile: Mobile;
};

const MobileCard: React.FC<MobileCardProps> = ({ mobile }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="border border-gray-300 rounded-md p-3 hover:scale-105 duration-300 relative select-none">
      <div
        className="absolute top-1 right-1 md:top-2 md:right-2 cursor-pointer"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <IoHeart
            size={24}
            color="red"
            style={{ transition: "color 0.3s ease" }}
          />
        ) : (
          <IoMdHeartEmpty
            size={24}
            color="black"
            style={{ transition: "color 0.3s ease" }}
          />
        )}
      </div>
      <div className="flex justify-center flex-col items-center">
        <img
          src={mobile.image || mobile.image}
          alt={mobile.name}
          className="h-[200px] md:h-[250px] mb-2"
        />
        <div className="font-bold md:text-xl">{mobile.name}</div>
      </div>
      <div className="p-2 flex items-center justify-between">
        <div className="">
          <div className="text-gray-400 text-xs md:text-sm line-through decoration-red-500 decoration-2">
            $1299
          </div>
          <div className="font-semibold md:text-xl">${mobile.price}</div>
        </div>
        <div className="">
          <button className=" bg-black p-1 md:p-2 rounded-md text-white ">
            <IoIosCart size={22} />
          </button>
        </div>
      </div>
      <button className="w-full text-white bg-red-500 p-2 rounded-md">
        View
      </button>
    </div>
  );
};

export default MobileCard;
