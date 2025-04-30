import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full min-h-screen mt-[-96px] mx-auto text-center flex flex-col justify-center px-3 ">
        <p className="text-emerald-300 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold  py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-gray-500 font-bold text-xl md:text-2xl">
          Monitor your data analytics to increase revenue for BTB , BTC & SASS
          platforms.
        </p>
        <button className="bg-emerald-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-emerald-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
