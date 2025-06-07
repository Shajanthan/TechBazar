import { useState } from "react";
import { IoIosCart, IoMdHeartEmpty } from "react-icons/io";
import { IoHeart, IoStarOutline, IoStarSharp } from "react-icons/io5";

interface Product {
  name: string;
  image: string;
  price: string;
  rating: number;
  warranty: boolean;
}

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="border border-gray-300 rounded-md p-3 relative flex flex-col h-full group">
      {product.warranty && (
        <div className="absolute top-2 left-2 -rotate-30">
          <img src="/images/Warrenty.png" className="h-[50px] lg:h-[70px]" />
        </div>
      )}

      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <IoHeart size={24} color="red" />
        ) : (
          <IoMdHeartEmpty size={24} color="black" />
        )}
      </div>
      <div className="flex justify-center items-center p-3 mt-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-[100px] lg:h-[150px] w-full mb-2 object-contain "
        />
      </div>
      <div className="text-center font-bold break-words mb-2">
        {product.name}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <div key={index}>
              {index < product.rating ? (
                <IoStarSharp className="text-yellow-500" size={15} />
              ) : (
                <IoStarOutline className="text-gray-400" size={15} />
              )}
            </div>
          ))}
        </div>
        <div className=" text-xs text-gray-400">(123 Sold)</div>
      </div>
      <div className="flex flex-col justify-end flex-grow">
        <div className="p-2 flex items-center justify-between">
          <div>
            <div className="text-gray-400 text-xs line-through decoration-red-500 decoration-2">
              $1299
            </div>
            <div className="font-semibold text-lg ">${product.price}</div>
          </div>
          <button className="hover:text-red-500">
            <IoIosCart size={24} />
          </button>
        </div>
      </div>
      <button className="capitalize bg-black text-white rounded p-2 group-hover:bg-red-500 transition-colors duration-500 ">
        more info
      </button>
    </div>
  );
};

export default ProductCard;
