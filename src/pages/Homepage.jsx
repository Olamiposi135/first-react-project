import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Analytics from "../component/Analytics";
import Newsletter from "../component/Newsletter";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
};

export default Homepage;
