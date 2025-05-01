import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white w-full px-3 py-16">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 md:my-8">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 ">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <input
              className="w-[90%] md:w-full p-3 flex rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-emerald-300 text-black rounded-md font-medium w-[200px] ml-4 my-6 py-3 hover:bg-emerald-400">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our
            <span className="text-emerald-300 ml-1 cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
