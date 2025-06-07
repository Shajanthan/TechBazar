import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import LoginPage from "./assets/pages/LoginPage";
import Signup from "./assets/pages/Signup";
import CartPage from "./assets/pages/CardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
