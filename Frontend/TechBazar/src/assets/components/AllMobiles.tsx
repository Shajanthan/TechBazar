import MobileCard from "./Cards/MobileCard";

const AllMobiles = () => {
  // Array of 4 mobile brands with name and logo URL
  const mobiles = [
    {
      name: "Apple",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: true,
    },
    {
      name: "Samsung",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: false,
    },
    {
      name: "Xiaomi",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: false,
    },
    {
      name: "OnePlus",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: false,
    },
    {
      name: "Apple",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: true,
    },
    {
      name: "Samsung",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: false,
    },
    {
      name: "Xiaomi",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: false,
    },
    {
      name: "OnePlus",
      image: "/images/Iphone16Pro.jpg",
      price: "999",
      rating: 4,
      warrenty: false,
    },
  ];

  return (
    <div className="p-2 lg:p-3">
      <div className="uppercase font-semibold text-xl mb-4">
        <span className="text-red-500 ">All</span> mobiles
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-3 gap-y-4 py-2">
        {mobiles.map((mobile) => (
          <MobileCard mobile={mobile} />
        ))}
      </div>
    </div>
  );
};

export default AllMobiles;
