import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import bgimage from "../assets/image3.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
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
              Register to
              <span className="text-blue-500"> Virtual Assistant</span>
            </h1>
          </div>
          <div className="gap-[20px] flex flex-col items-center justify-center">
            <div className="relative w-full h-[50px] bg-transparent text-white rounded-full text-[18px]">
              <FaUser className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full h-[50px] outline-none bg-transparent border-2 border-white text-white placeholder-gray-300 rounded-full pl-[50px] pr-[20px]" required
              />
            </div>
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
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-[50px] outline-none bg-transparent border-2 border-white text-white placeholder-gray-300 rounded-full pl-[50px] pr-[50px]"
                required
                minLength="6"
                pattern="(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}"
                title="Password must be at least 6 characters long and contain at least one special character."
                onChange={(e) => {
                  const confirmInput = e.target.form.confirmPassword;
                  if (confirmInput.value && confirmInput.value !== e.target.value) {
                    confirmInput.setCustomValidity("Passwords do not match!");
                  } else {
                    confirmInput.setCustomValidity("");
                  }
                }}
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

            <div className="relative w-full h-[50px] bg-transparent text-white rounded-full text-[18px]">
              <FaLock className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder=" Confirm Password"
                className="w-full h-[50px] outline-none bg-transparent border-2 border-white text-white placeholder-gray-300 rounded-full pl-[50px] pr-[50px]"
                required
                minLength="6"
                pattern="(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}"
                title="Password must be at least 6 characters long and contain at least one special character."
                onChange={(e) => {
                  const pwd = e.target.form.password.value;
                  if (e.target.value !== pwd) {
                    e.target.setCustomValidity("Passwords do not match!");
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
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
              Register
            </button>
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
