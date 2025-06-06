import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <div className="container mx-auto">
        <Products />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
