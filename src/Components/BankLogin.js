import React from "react";
import logo from "../Utilities/Icons/INVESTA Logo.png";
import { useNavigate } from "react-router-dom";

const BankLogin = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dash");
  };
  return (
    <>
      <nav className="bg-blue-900 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
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
          LogIn for Business
        </div>
        <form className="mt-8">
          <input
            //   required
            className="w-full bg-white px-4 py-5 rounded-2xl mt-4 shadow-lg"
            type="text"
            name="text"
            id="bankId"
            placeholder="Institute UniqueID"
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
      </div>
    </>
  );
};

export default BankLogin;
