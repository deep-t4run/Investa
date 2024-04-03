import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeroImg from "../Utilities/Icons/INVESTA.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className=" text-blue-700 hover:text-indigo-600 cursor-pointer text-4xl font-semibold tracking-wide uppercase pb-8">
              Investa
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Unlock the Potential of Your Portfolio
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Investa allows you to leverage your stock portfolio to access
              loans and unlock new opportunities.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex justify-center">
              <div className="flex-shrink-0">
                <img className="h-48 w-full" src={HeroImg} alt="Portfolio" />
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <div className="rounded-md shadow">
                {/* <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Show Portfolio
              </button> */}
                <Link
                  to="/dash"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Show Portfolio
                </Link>
              </div>
              <div className="ml-4 rounded-md shadow">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Add Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
