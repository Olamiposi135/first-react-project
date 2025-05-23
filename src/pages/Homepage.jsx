import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Analytics from "../component/Analytics";
import Newsletter from "../component/Newsletter";
import Cards from "../component/Cards";
import Footer from "../component/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default Homepage;
