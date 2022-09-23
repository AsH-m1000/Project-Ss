import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
