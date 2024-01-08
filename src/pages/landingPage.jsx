import React from "react";
import Navbar from "../components/navbar/navbar";
import CarouselSection from "../components/carosel/carosel";
import ImportantServices from "../components/services/services";
import Pricing from "../components/Pricing/pricing";
import Footer from "../components/footer/footer";
import Code from "../components/code/code";

const LandingPage = () => {
  return (
    <>
    {/* <Code /> */}
      <Navbar />
      <CarouselSection />
      <ImportantServices />
      <Pricing />
      <Footer />
    </>
  );
};

export default LandingPage;
