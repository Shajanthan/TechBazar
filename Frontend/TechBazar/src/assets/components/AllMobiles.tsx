import MobileCard from "./Cards/MobileCard";

const AllMobiles = () => {
  // Array of 4 mobile brands with name and logo URL
  const mobiles = [
    {
      name: "Apple",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
    {
      name: "Samsung",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
    {
      name: "Xiaomi",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
    {
      name: "OnePlus",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
    {
      name: "Apple",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
    {
      name: "Samsung",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
    {
      name: "Xiaomi",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
    {
      name: "OnePlus",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
    },
  ];

  return (
    <div className="p-3">
      <div className="uppercase font-bold text-xl mb-4">
        <span className="text-red-500 ">All</span> mobiles
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 md:gap-4 lg:gap-6">
        {mobiles.map((mobile) => (
          <MobileCard mobile={mobile} />
        ))}
      </div>
    </div>
  );
};

export default AllMobiles;
