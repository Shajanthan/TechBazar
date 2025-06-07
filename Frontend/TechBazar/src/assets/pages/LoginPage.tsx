import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TextInputField from "../components/common/TextInputField";
import PasswordInputField from "../components/common/PasswordInputField";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSignupClick = () => {
    navigate("/Signup");
  };
  return (
    <div
      className="relative h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/SamsungS25.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80 bg-opacity-60"></div>

      <div className="relative z-10 p-2 min-w-xs max-h-[600px] overflow-auto scrollbar-custom lg:min-w-lg rounded border border-gray-300 bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
        <div className="py-2 ">
          {/* Title and Home */}
          <div className="flex items-center justify-between border-b-2 p-2 ">
            <div className="text-xl lg:text-2xl font-bold">
              Tech<span className="text-red-500 py-2">Bazar</span>
            </div>
            <div
              className=" top-4 right-4 hover:text-red-600 transition-colors duration-500"
              onClick={handleHomeClick}
            >
              <FaHome size={24} />
            </div>
          </div>

          <div className="py-2 text-center font-bold text-xl lg:text-2xl ">
            Welcome Back! <br />
            <span className="text-sm lg:text-lg font-normal">
              Sign in to your TechBazar account
            </span>
          </div>

          <form action="" method="post" className="lg:p-2">
            <TextInputField
              label={"Username"}
              placeholder={"John"}
              type="text"
            />
            <PasswordInputField label="Password" />

            <div className="py-1 text-right w-full text-sm text-red-700 cursor-pointer">
              Forgot password?
            </div>

            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" className="h-4 w-4 focus:outline-none " />

              <span className="">Remember me</span>
            </div>

            <div className="pt-2">
              <button className="bg-black hover:bg-red-500 text-white transition-all duration-500 w-full p-2 rounded font-bold">
                Login
              </button>
            </div>

            <div className="pt-3 text-center">
              Don't have an account?{" "}
              <span
                className="text-red-600 cursor-pointer"
                onClick={handleSignupClick}
              >
                Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
