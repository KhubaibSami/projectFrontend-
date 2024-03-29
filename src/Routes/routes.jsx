import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout";
import NotFound from "../components/notFound/notFound";
import About from "../components/about/about";

import Nonlayout from "../pages/nonlayout";
import Contact from "../contact";
import Faq from "../components/FAQ/faq";
import Login from "../modules/form/components/login/login";
import Signup from "../modules/form/components/signup/signup";
import Reset from "../modules/form/components/resetPAssword/resetPAssword";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Nonlayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={ <Faq/> }/>
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
};

export default Routing;
