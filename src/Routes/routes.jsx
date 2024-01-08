import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import NotFound from "../components/notFound/notFound";
import ContactSupport from "../components/about/about";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={ <ContactSupport />  } />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default Routing;
