import { useEffect, useState } from "react";
import { IoClose, IoStarOutline, IoStarSharp } from "react-icons/io5";
import type { Product } from "../../../types/Product";
import ZoomableImage from "../Features/ZoomableImage";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [mainImage, setMainImage] = useState(product?.image || "");

  useEffect(() => {
    if (product) setMainImage(product.image);
  }, [product]);

  if (!product) return null;

  const additionalImages = [
    product.image,
    "/images/Laptop.png",
    "/images/Iphone16Pro.jpg",
    "/images/SmartWatch.jpg",
  ];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
      <div className="bg-white w-[90%] max-w-5xl rounded-lg relative flex flex-col md:flex-row max-h-[600px] overflow-auto scrollbar-custom">
        <button
          className="absolute top-3 right-3 text-black hover:text-red-600"
          onClick={onClose}
        >
          <IoClose size={28} />
        </button>

        <div className="w-full md:w-1/2 p-4 flex flex-col items-center mt-7">
          <ZoomableImage src={mainImage} alt={product.name} />

          <div className="flex gap-2 justify-center flex-wrap">
            {additionalImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 object-contain border border-gray-300 rounded cursor-pointer ${
                  mainImage === img ? "ring ring-red-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:mt-7">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-4 text-justify">
            This is a premium quality product. Comes with top-notch performance
            and guaranteed satisfaction. (You can customize this paragraph)
          </p>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, index) =>
              index < product.rating ? (
                <IoStarSharp key={index} className="text-yellow-500" />
              ) : (
                <IoStarOutline key={index} className="text-gray-400" />
              )
            )}
            <span className="text-sm text-gray-600">(123 reviews)</span>
          </div>
          <div>
            <div className="text-gray-400 text-xs line-through decoration-red-500 decoration-2">
              $1299
            </div>
            <div className="font-semibold text-red-500 text-lg ">
              ${product.price}
            </div>
          </div>
          <p className="text-gray-600 mb-2">
            Warranty:{" "}
            <span className="font-medium">
              {product.warranty ? "Yes" : "No"}
            </span>
          </p>

          <div className="flex justify-center gap-2 text-sm">
            <button className="bg-black text-white px-5 py-2 rounded hover:bg-red-600 transition duration-300 w-full">
              Add to Cart
            </button>
            <button className="bg-black text-white px-5 py-2 rounded hover:bg-red-600 transition duration-300 w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
