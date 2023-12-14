import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <hr />
      <h3>MainLayout contains..</h3>
      <p>navbar(ABOVE)</p>
      <p>Outlets(BELOW) --- <span>(childs will be rendered in this layout design)</span></p>
      <hr />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
