import CartCard from "../components/Cards/CartCard";
import Navbar from "../components/common/Navbar";

const CardPage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage: "url('/images/Cart.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80 bg-opacity-60"></div>
      <Navbar />
      <div className="relative z-10 pt-20 container mx-auto p-2 pb-5">
        <div className="p-2 border border-gray-300 rounded-lg flex flex-col lg:flex-row gap-4 w-full max-w-7xl mx-auto shadow-lg bg-white ">
          <div className="w-full p-4">
            <div className="p-2 text-lg lg:text-xl font-bold">My Cart</div>
            <CartCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
