import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import bgimage from "../assets/image3.png";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center bg-black">
        <img
          src={bgimage}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-50"
        />
        <form onSubmit={handleSubmit} className="w-[25%] h-[65%]   backdrop-blur  flex flex-col items-center justify-center gap-[30px] z-200 p-5 rounded-[30px] border-2 border-white">
          <div className="flex items-center justify-center gap-[10px]">
            <h1 className="text-4xl font-bold text-white">
              Sign In to
              <span className="text-blue-500"> Virtual Assistant</span>
            </h1>
          </div>
          <div className="gap-[20px] flex flex-col items-center justify-center">

            <div className="relative w-full h-[50px] bg-transparent text-white rounded-full text-[18px]">
              <FaEnvelope className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[50px] outline-none bg-transparent border-2 border-white text-white placeholder-gray-300 rounded-full pl-[50px] pr-[20px]"
              />
            </div>
            <div className="relative w-full h-[50px] bg-transparent text-white rounded-full text-[18px]">
              <FaLock className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-[50px] outline-none bg-transparent border-2 border-white text-white placeholder-gray-300 rounded-full pl-[50px] pr-[50px]"
                required
              />

              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            

            <button
              type="submit"
              className="w-full h-[50px] bg-blue-500 text-white rounded-full cursor-pointer hover:bg-green-500 transition-all duration-500"
            >
              Login
            </button>
            <p className="text-white">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn
