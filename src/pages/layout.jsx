import React from "react";
import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
