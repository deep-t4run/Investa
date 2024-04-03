import React from "react";
import logo from "../Utilities/Icons/INVESTA Logo.png";
import googleLogo from "../Utilities/Icons/google.png";
import facebookLogo from "../Utilities/Icons/facebook.png";
import twitterLogo from "../Utilities/Icons/twitter.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <nav className="bg-blue-900 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
            {/* <span className="text-white text-lg font-semibold ml-2">
              FinTech
            </span> */}
          </div>
          <div className="flex items-center">
            <ul className="flex text-white">
              <li className="mr-4 border-r pr-4">
                <a
                  href="/bank-login"
                  className="hover:text-gray-300 transition duration-300"
                >
                  For Businesses
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-300 transition duration-300"
                >
                  For Individuals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mx-auto max-w-md bg-gradient-to-b from-white to-gray-100 rounded-3xl p-8 border-4 border-white shadow-xl my-10">
        <div className="text-center text-blue-500 font-bold text-3xl">
          User LogIn
        </div>
        <form className="mt-8">
          <input
            //   required
            className="w-full bg-white px-4 py-5 rounded-2xl mt-4 shadow-lg"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            //   required
            className="w-full bg-white px-4 py-5 rounded-2xl mt-4 shadow-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="block mt-2 ml-2">
            <a
              href="#"
              className="text-blue-500 text-sm no-underline hover:underline"
            >
              Forgot Password ?
            </a>
          </span>
          <button
            className="block w-full mt-6 font-bold bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            type="submit"
            value="Sign In"
            onClick={handleClick}
          >
            LogIn
          </button>
        </form>
        <div className="social-account-container mt-8">
          <span className="title block text-center text-gray-500 text-xs mb-2">
            Or Sign in with
          </span>
          <div className="flex justify-center gap-4">
            <button className="social-button bg-gradient-to-r border-4 border-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition duration-300 transform hover:scale-120">
              <img src={googleLogo} alt="google" className="" />
            </button>
            <button className="social-button bg-gradient-to-r border-4 border-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition duration-300 transform hover:scale-120">
              <img src={facebookLogo} alt="facebook" />
            </button>
            <button className="social-button bg-gradient-to-r border-4 border-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition duration-300 transform hover:scale-120">
              <img src={twitterLogo} alt="twitter" />
            </button>
            {/* Add similar buttons for other social accounts */}
          </div>
        </div>
        {/* <span className="agreement block text-center mt-6">
        <a
          href="#"
          className="text-blue-500 text-xs no-underline hover:underline"
        >
          Learn user licence agreement
        </a>
      </span> */}
      </div>
    </>
  );
};

export default SignIn;
