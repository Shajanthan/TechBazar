import { useEffect, useState } from "react";
import ProductCard from "./Cards/ProductCard";
import ProductModal from "./Modal/ProductModal";
import type { Product } from "../../types/Product";

const Products = () => {
  const products = [
    {
      category: "Mobile",
      products: [
        {
          name: "Apple",
          image: "/images/Iphone16Pro.jpg",
          price: "999",
          rating: 4,
          warranty: true,
        },
        {
          name: "Samsung",
          image: "/images/Iphone16Pro.jpg",
          price: "999",
          rating: 4,
          warranty: false,
        },
        {
          name: "Xiaomi",
          image: "/images/Iphone16Pro.jpg",
          price: "999",
          rating: 4,
          warranty: false,
        },
        {
          name: "OnePlus",
          image: "/images/Iphone16Pro.jpg",
          price: "999",
          rating: 4,
          warranty: false,
        },
        {
          name: "Xiaomi",
          image: "/images/Iphone16Pro.jpg",
          price: "999",
          rating: 4,
          warranty: false,
        },
        {
          name: "OnePlus",
          image: "/images/Iphone16Pro.jpg",
          price: "999",
          rating: 4,
          warranty: false,
        },
      ],
    },
    {
      category: "Earbuds",
      products: [
        {
          name: "Boat Airdopes 141",
          image: "/images/Earbuds.webp",
          price: "29",
          rating: 4,
          warranty: true,
        },
        {
          name: "Realme Buds Q2",
          image: "/images/Earbuds.webp",
          price: "35",
          rating: 4,
          warranty: false,
        },
        {
          name: "OnePlus Nord Buds",
          image: "/images/Earbuds.webp",
          price: "45",
          rating: 5,
          warranty: true,
        },
        {
          name: "Noise Buds VS104",
          image: "/images/Earbuds.webp",
          price: "28",
          rating: 3,
          warranty: false,
        },
        {
          name: "OnePlus Nord Buds",
          image: "/images/Earbuds.webp",
          price: "45",
          rating: 5,
          warranty: true,
        },
        {
          name: "Noise Buds VS104",
          image: "/images/Earbuds.webp",
          price: "28",
          rating: 3,
          warranty: false,
        },
      ],
    },
    {
      category: "Smart Watch",
      products: [
        {
          name: "Apple Watch SE",
          image: "/images/SmartWatch.jpg",
          price: "199",
          rating: 5,
          warranty: true,
        },
        {
          name: "Noise ColorFit Ultra 3",
          image: "/images/SmartWatch.jpg",
          price: "55",
          rating: 4,
          warranty: true,
        },
        {
          name: "Fire-Boltt Ninja Call Pro",
          image: "/images/SmartWatch.jpg",
          price: "40",
          rating: 3,
          warranty: false,
        },
        {
          name: "boAt Wave Neo",
          image: "/images/SmartWatch.jpg",
          price: "30",
          rating: 3,
          warranty: false,
        },
        {
          name: "Fire-Boltt Ninja Call Pro",
          image: "/images/SmartWatch.jpg",
          price: "40",
          rating: 3,
          warranty: false,
        },
        {
          name: "boAt Wave Neo",
          image: "/images/SmartWatch.jpg",
          price: "30",
          rating: 3,
          warranty: false,
        },
      ],
    },
    {
      category: "Headphone",
      products: [
        {
          name: "Sony WH-1000XM5",
          image: "/images/Headphone.jpg",
          price: "349",
          rating: 5,
          warranty: true,
        },
        {
          name: "JBL Tune 760NC",
          image: "/images/Headphone.jpg",
          price: "120",
          rating: 4,
          warranty: true,
        },
        {
          name: "Boat Rockerz 550",
          image: "/images/Headphone.jpg",
          price: "50",
          rating: 3,
          warranty: false,
        },
        {
          name: "Zebronics Zeb-Rush",
          image: "/images/Headphone.jpg",
          price: "40",
          rating: 3,
          warranty: false,
        },
        {
          name: "Boat Rockerz 550",
          image: "/images/Headphone.jpg",
          price: "50",
          rating: 3,
          warranty: false,
        },
        {
          name: "Zebronics Zeb-Rush",
          image: "/images/Headphone.jpg",
          price: "40",
          rating: 3,
          warranty: false,
        },
      ],
    },
    {
      category: "Powerbank",
      products: [
        {
          name: "Mi Power Bank 3i 20000mAh",
          image: "/images/Powerbank.jpg",
          price: "30",
          rating: 4,
          warranty: true,
        },
        {
          name: "Realme 10000mAh",
          image: "/images/Powerbank.jpg",
          price: "25",
          rating: 3,
          warranty: true,
        },
        {
          name: "Ambrane 20000mAh",
          image: "/images/Powerbank.jpg",
          price: "27",
          rating: 4,
          warranty: false,
        },
        {
          name: "Redmi 10000mAh",
          image: "/images/Powerbank.jpg",
          price: "22",
          rating: 3,
          warranty: false,
        },
        {
          name: "Ambrane 20000mAh",
          image: "/images/Powerbank.jpg",
          price: "27",
          rating: 4,
          warranty: false,
        },
        {
          name: "Redmi 10000mAh",
          image: "/images/Powerbank.jpg",
          price: "22",
          rating: 3,
          warranty: false,
        },
      ],
    },
    {
      category: "Laptop",
      products: [
        {
          name: "MacBook Air M2",
          image: "/images/Laptop.png",
          price: "999",
          rating: 5,
          warranty: true,
        },
        {
          name: "Dell Inspiron 15",
          image: "/images/Laptop.png",
          price: "650",
          rating: 4,
          warranty: true,
        },
        {
          name: "HP Pavilion x360",
          image: "/images/Laptop.png",
          price: "700",
          rating: 4,
          warranty: true,
        },
        {
          name: "Lenovo Ideapad Slim 3",
          image: "/images/Laptop.png",
          price: "550",
          rating: 3,
          warranty: false,
        },
        {
          name: "HP Pavilion x360",
          image: "/images/Laptop.png",
          price: "700",
          rating: 4,
          warranty: true,
        },
        {
          name: "Lenovo Ideapad Slim 3",
          image: "/images/Laptop.png",
          price: "550",
          rating: 3,
          warranty: false,
        },
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleMoreInfo = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedProduct]);

  return (
    <div className="p-2 lg:p-3">
      {products.map(({ category, products }) => (
        <div
          key={category}
          id={category.toLowerCase()}
          className="mb-6 scroll-mt-24"
        >
          <div className="uppercase font-bold text-xl pt-3 flex justify-between">
            <span className="">{category}</span>
            <span className="hidden lg:block capitalize hover:text-red-500 transition-colors duration-100 cursor-pointer">
              View more
            </span>
          </div>
          <div className="w-full border-b-2 border-red-500 mb-2"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 py-2">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onMoreInfo={handleMoreInfo}
              />
            ))}
          </div>
        </div>
      ))}
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default Products;
