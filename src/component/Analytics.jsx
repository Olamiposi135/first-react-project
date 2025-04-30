import React from "react";
import Laptop from "../assets/laptop.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop img" />

        <div className="flex flex-col justify-center ">
          <p className="text-emerald-300 font-bold md:text-xl">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            repellendus labore natus quo rerum facilis repellat optio? Dolorem
            rem accusantium at reiciendis consequuntur dolore. Neque incidunt
            laudantium culpa voluptatem eveniet.
          </p>
          <button className="text-emerald-300 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black  hover:font-bold ease-in-out duration-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
