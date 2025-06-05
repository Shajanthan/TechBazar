import AllMobiles from "../components/AllMobiles";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <AllMobiles />
      <Footer />
    </div>
  );
};

export default HomePage;
